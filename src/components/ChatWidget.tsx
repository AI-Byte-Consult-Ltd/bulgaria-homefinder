import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, Loader2, MapPin, Bed, Maximize, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

type Msg = {
  role: 'user' | 'assistant';
  content: string;
  properties?: PropertyResult[];
};

interface PropertyResult {
  id: string;
  title: string;
  location: string;
  price: number;
  property_type: string;
  transaction_type: string;
  bedrooms?: number;
  size_sqm?: number;
  images?: string[];
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/nics-ai-chat`;

function generateSessionId() {
  return 'sess_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Compact property card for chat results
const ChatPropertyCard = ({ property }: { property: PropertyResult }) => {
  const image = property.images?.[0] || '/placeholder.svg';
  return (
    <Link
      to={`/property/${property.id}`}
      className="flex gap-3 p-2 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors group"
    >
      <img
        src={image}
        alt={property.title}
        className="w-20 h-16 object-cover rounded-md shrink-0"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium line-clamp-1 group-hover:text-primary transition-colors">
          {property.title}
        </p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-bold text-primary">
            €{property.price?.toLocaleString()}
          </span>
          {property.bedrooms && (
            <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
              <Bed className="h-3 w-3" /> {property.bedrooms}
            </span>
          )}
          {property.size_sqm && (
            <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
              <Maximize className="h-3 w-3" /> {property.size_sqm}m²
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export const ChatWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [sessionId] = useState(() => generateSessionId());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      sendInitialGreeting();
    }
  }, [isOpen]);

  const createConversation = async () => {
    const { data, error } = await supabase
      .from('chat_conversations')
      .insert({ session_id: sessionId })
      .select('id')
      .single();
    if (data) {
      setConversationId(data.id);
      return data.id;
    }
    console.error('Failed to create conversation:', error);
    return null;
  };

  const saveMessage = async (convId: string, role: string, content: string) => {
    await supabase.from('chat_messages').insert({ conversation_id: convId, role, content });
  };

  const updateConversationData = async (convId: string, content: string, allMessages: Msg[]) => {
    const fullText = allMessages.map(m => m.content).join(' ');
    const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
    const emailMatch = fullText.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) updates.user_email = emailMatch[0];
    const phoneMatch = fullText.match(/[\+]?[\d\s\-\(\)]{7,}/);
    if (phoneMatch) updates.user_phone = phoneMatch[0].trim();
    if (content.includes('[CONVERSATION_COMPLETE]')) updates.status = 'completed';
    const lowerText = fullText.toLowerCase();
    if (lowerText.includes('real estate') || lowerText.includes('недвижимост') || lowerText.includes('имот')) updates.service_type = 'real_estate';
    else if (lowerText.includes('company') || lowerText.includes('registration')) updates.service_type = 'company_registration';
    else if (lowerText.includes('insurance') || lowerText.includes('застрахов')) updates.service_type = 'insurance';
    else if (lowerText.includes('translation') || lowerText.includes('превод')) updates.service_type = 'document_translation';
    if (lowerText.includes('buy') || lowerText.includes('купув')) updates.property_action = 'buy';
    else if (lowerText.includes('sell') || lowerText.includes('продав')) updates.property_action = 'sell';
    else if (lowerText.includes('rent') || lowerText.includes('наем')) updates.property_action = 'rent';
    await supabase.from('chat_conversations').update(updates).eq('id', convId);
  };

  const streamChat = async (
    msgs: Msg[],
    onDelta: (t: string) => void,
    onProperties: (props: PropertyResult[]) => void,
    onDone: () => void,
  ) => {
    const resp = await fetch(CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: msgs.map(m => ({ role: m.role, content: m.content })) }),
    });

    if (!resp.ok || !resp.body) {
      const errData = await resp.json().catch(() => ({}));
      throw new Error(errData.error || 'Failed to start stream');
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = '';
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);
        if (line.endsWith('\r')) line = line.slice(0, -1);
        if (line.startsWith(':') || line.trim() === '') continue;
        if (!line.startsWith('data: ')) continue;
        const jsonStr = line.slice(6).trim();
        if (jsonStr === '[DONE]') { streamDone = true; break; }
        try {
          const parsed = JSON.parse(jsonStr);
          // Check for property data event
          if (parsed.properties) {
            onProperties(parsed.properties);
            continue;
          }
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          textBuffer = line + '\n' + textBuffer;
          break;
        }
      }
    }

    if (textBuffer.trim()) {
      for (let raw of textBuffer.split('\n')) {
        if (!raw) continue;
        if (raw.endsWith('\r')) raw = raw.slice(0, -1);
        if (raw.startsWith(':') || raw.trim() === '') continue;
        if (!raw.startsWith('data: ')) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === '[DONE]') continue;
        try {
          const parsed = JSON.parse(jsonStr);
          if (parsed.properties) { onProperties(parsed.properties); continue; }
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch { /* ignore */ }
      }
    }
    onDone();
  };

  const sendInitialGreeting = async () => {
    setIsLoading(true);
    const convId = await createConversation();
    if (!convId) { setIsLoading(false); return; }

    let assistantSoFar = '';
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      const clean = assistantSoFar.replace('[CONVERSATION_COMPLETE]', '');
      setMessages([{ role: 'assistant', content: clean }]);
    };

    try {
      await streamChat([], upsert, () => {}, () => {
        setIsLoading(false);
        const clean = assistantSoFar.replace('[CONVERSATION_COMPLETE]', '');
        saveMessage(convId, 'assistant', clean);
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      setMessages([{ role: 'assistant', content: 'Hello! I\'m NICS AI, your property search assistant. How can I help you find your dream property in Bulgaria?' }]);
    }
  };

  const send = useCallback(async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Msg = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    let convId = conversationId;
    if (!convId) {
      convId = await createConversation();
      if (!convId) { setIsLoading(false); return; }
    }

    await saveMessage(convId, 'user', userMsg.content);

    let assistantSoFar = '';
    let foundProperties: PropertyResult[] = [];

    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      const clean = assistantSoFar.replace('[CONVERSATION_COMPLETE]', '');
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant') {
          return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: clean, properties: foundProperties.length > 0 ? foundProperties : m.properties } : m);
        }
        return [...prev, { role: 'assistant', content: clean, properties: foundProperties.length > 0 ? foundProperties : undefined }];
      });
    };

    const onProperties = (props: PropertyResult[]) => {
      foundProperties = props;
      // Trigger a re-render with properties attached to assistant message
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant') {
          return prev.map((m, i) => i === prev.length - 1 ? { ...m, properties: props } : m);
        }
        return [...prev, { role: 'assistant', content: '', properties: props }];
      });
    };

    try {
      await streamChat(newMessages, upsert, onProperties, async () => {
        setIsLoading(false);
        const clean = assistantSoFar.replace('[CONVERSATION_COMPLETE]', '');
        await saveMessage(convId!, 'assistant', clean);
        const finalMessages = [...newMessages, { role: 'assistant' as const, content: clean }];
        await updateConversationData(convId!, assistantSoFar, finalMessages);
      });
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  }, [input, isLoading, messages, conversationId]);

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110",
          "bg-primary text-primary-foreground",
          isOpen && "rotate-90"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[550px] max-h-[75vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">NICS AI Property Search</h3>
              <p className="text-xs opacity-80">Ask me anything about properties in Bulgaria</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex flex-col", msg.role === 'user' ? 'items-end' : 'items-start')}>
                <div className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-muted text-foreground rounded-bl-md'
                )}>
                  {msg.role === 'assistant' ? (
                    <div className="prose prose-sm max-w-none dark:prose-invert [&>p]:mb-1 [&>ul]:mb-1 [&>ol]:mb-1">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
                {/* Property Results */}
                {msg.properties && msg.properties.length > 0 && (
                  <div className="w-full max-w-[95%] mt-2 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground px-1">
                      <Search className="h-3 w-3" />
                      <span>{msg.properties.length} properties found</span>
                    </div>
                    {msg.properties.map((prop) => (
                      <ChatPropertyCard key={prop.id} property={prop} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border">
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. House under €40,000 near the sea..."
                className="flex-1 rounded-full text-sm"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full shrink-0"
                disabled={!input.trim() || isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
