import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Send, Loader2, Download, CreditCard, Sparkles, RotateCcw, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import { toast } from 'sonner';

const GENERATE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-document`;
const REVOLUT_LINK = 'https://revolut.me/nicsestate';

const LABELS: Record<string, Record<string, string>> = {
  title: {
    en: 'AI Document Generator',
    ru: 'ИИ Генератор Документов',
    bg: 'AI Генератор на Документи',
    de: 'KI-Dokumentengenerator',
    it: 'Generatore Documenti AI',
  },
  subtitle: {
    en: 'Describe what document you need — our AI will draft it for you in seconds',
    ru: 'Опишите какой документ вам нужен — наш ИИ составит его за секунды',
    bg: 'Опишете какъв документ ви трябва — нашият AI ще го изготви за секунди',
    de: 'Beschreiben Sie, welches Dokument Sie benötigen — unsere KI erstellt es in Sekunden',
    it: 'Descrivi il documento di cui hai bisogno — la nostra AI lo preparerà in pochi secondi',
  },
  docType: {
    en: 'What document do you need?',
    ru: 'Какой документ вам нужен?',
    bg: 'Какъв документ ви трябва?',
    de: 'Welches Dokument benötigen Sie?',
    it: 'Di quale documento hai bisogno?',
  },
  docTypePlaceholder: {
    en: 'e.g. Rental agreement, Power of Attorney, Business letter...',
    ru: 'напр. Договор аренды, Доверенность, Деловое письмо...',
    bg: 'напр. Договор за наем, Пълномощно, Бизнес писмо...',
    de: 'z.B. Mietvertrag, Vollmacht, Geschäftsbrief...',
    it: 'es. Contratto di locazione, Procura, Lettera commerciale...',
  },
  yourDetails: {
    en: 'Your details (name, address, etc.)',
    ru: 'Ваши данные (имя, адрес и т.д.)',
    bg: 'Вашите данни (име, адрес и т.н.)',
    de: 'Ihre Daten (Name, Adresse usw.)',
    it: 'I tuoi dati (nome, indirizzo, ecc.)',
  },
  detailsPlaceholder: {
    en: 'Full name, address, passport/ID number, phone, email...',
    ru: 'ФИО, адрес, номер паспорта, телефон, email...',
    bg: 'Пълно име, адрес, номер на паспорт/ЛК, телефон, email...',
    de: 'Vollständiger Name, Adresse, Ausweis-Nr., Telefon, E-Mail...',
    it: 'Nome completo, indirizzo, numero documento, telefono, email...',
  },
  additionalInfo: {
    en: 'Additional instructions',
    ru: 'Дополнительные инструкции',
    bg: 'Допълнителни инструкции',
    de: 'Zusätzliche Anweisungen',
    it: 'Istruzioni aggiuntive',
  },
  additionalPlaceholder: {
    en: 'Any specific requirements, dates, amounts, parties involved...',
    ru: 'Любые специфические требования, даты, суммы, стороны...',
    bg: 'Специфични изисквания, дати, суми, страни...',
    de: 'Besondere Anforderungen, Daten, Beträge, beteiligte Parteien...',
    it: 'Requisiti specifici, date, importi, parti coinvolte...',
  },
  generate: {
    en: 'Generate Document',
    ru: 'Сгенерировать документ',
    bg: 'Генерирай документ',
    de: 'Dokument generieren',
    it: 'Genera documento',
  },
  generating: {
    en: 'Generating...',
    ru: 'Генерация...',
    bg: 'Генериране...',
    de: 'Wird generiert...',
    it: 'Generazione...',
  },
  price: {
    en: '€5 per generation',
    ru: '€5 за генерацию',
    bg: '€5 за генерация',
    de: '€5 pro Generierung',
    it: '€5 per generazione',
  },
  payTitle: {
    en: 'Pay for Document Generation',
    ru: 'Оплата генерации документа',
    bg: 'Заплащане за генерация на документ',
    de: 'Zahlung für Dokumentengenerierung',
    it: 'Pagamento per generazione documento',
  },
  payDesc: {
    en: 'Your document has been generated successfully! Complete the payment of €5 via Revolut to access your document.',
    ru: 'Ваш документ успешно сгенерирован! Завершите оплату €5 через Revolut, чтобы получить доступ к документу.',
    bg: 'Вашият документ е генериран успешно! Завършете плащането от €5 чрез Revolut, за да получите достъп до документа.',
    de: 'Ihr Dokument wurde erfolgreich erstellt! Schließen Sie die Zahlung von €5 über Revolut ab, um Zugriff auf Ihr Dokument zu erhalten.',
    it: 'Il tuo documento è stato generato con successo! Completa il pagamento di €5 tramite Revolut per accedere al documento.',
  },
  payButton: {
    en: 'Pay €5 via Revolut',
    ru: 'Оплатить €5 через Revolut',
    bg: 'Платете €5 чрез Revolut',
    de: '€5 über Revolut zahlen',
    it: 'Paga €5 tramite Revolut',
  },
  paidConfirm: {
    en: 'I have paid — show my document',
    ru: 'Я оплатил — показать документ',
    bg: 'Платих — покажи документа',
    de: 'Ich habe bezahlt — Dokument anzeigen',
    it: 'Ho pagato — mostra il documento',
  },
  copyDoc: {
    en: 'Copy Document',
    ru: 'Скопировать документ',
    bg: 'Копирай документ',
    de: 'Dokument kopieren',
    it: 'Copia documento',
  },
  newDoc: {
    en: 'Generate Another',
    ru: 'Сгенерировать ещё',
    bg: 'Генерирай друг',
    de: 'Weiteres generieren',
    it: 'Genera un altro',
  },
};

const lbl = (key: string, lang: string) => LABELS[key]?.[lang] ?? LABELS[key]?.['en'] ?? key;

export const DocumentGenerator = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];

  const [documentType, setDocumentType] = useState('');
  const [userDetails, setUserDetails] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [generatedDoc, setGeneratedDoc] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const docRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!documentType.trim()) {
      toast.error('Please specify the document type');
      return;
    }

    setIsGenerating(true);
    setGeneratedDoc('');
    setShowPayment(false);

    try {
      const resp = await fetch(GENERATE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          documentType,
          userDetails,
          additionalInfo,
          language: lang,
        }),
      });

      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to generate');
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let docSoFar = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (!line.startsWith('data: ')) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              docSoFar += content;
              setGeneratedDoc(docSoFar);
            }
          } catch { /* partial */ }
        }
      }

      setShowPayment(true);
      setIsGenerating(false);
    } catch (e) {
      console.error(e);
      toast.error(e instanceof Error ? e.message : 'Generation failed');
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDoc);
    toast.success('Document copied to clipboard');
  };

  const handleReset = () => {
    setGeneratedDoc('');
    setShowPayment(false);
    setPaymentConfirmed(false);
    setDocumentType('');
    setUserDetails('');
    setAdditionalInfo('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-3 gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered
          </Badge>
          <h2 className="text-3xl font-bold mb-2">{lbl('title', lang)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{lbl('subtitle', lang)}</p>
          <p className="text-sm text-primary font-semibold mt-2">{lbl('price', lang)}</p>
        </div>

        {!generatedDoc && !isGenerating ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5" />
                {lbl('docType', lang)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}
                className="space-y-5"
              >
                <div>
                  <Label>{lbl('docType', lang)} *</Label>
                  <Input
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    placeholder={lbl('docTypePlaceholder', lang)}
                    required
                  />
                </div>

                <div>
                  <Label>{lbl('yourDetails', lang)}</Label>
                  <Textarea
                    value={userDetails}
                    onChange={(e) => setUserDetails(e.target.value)}
                    placeholder={lbl('detailsPlaceholder', lang)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label>{lbl('additionalInfo', lang)}</Label>
                  <Textarea
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    placeholder={lbl('additionalPlaceholder', lang)}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full gap-2" size="lg">
                  <Sparkles className="h-4 w-4" />
                  {lbl('generate', lang)}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {/* Generating indicator */}
            {isGenerating && (
              <Card>
                <CardContent className="pt-6 text-center space-y-3">
                  <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                  <p className="text-sm text-muted-foreground">{lbl('generating', lang)}</p>
                </CardContent>
              </Card>
            )}

            {/* Payment gate — show after generation, before revealing doc */}
            {showPayment && !paymentConfirmed && (
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6 space-y-4">
                  <div className="text-center space-y-2">
                    <CreditCard className="h-10 w-10 text-primary mx-auto" />
                    <h3 className="font-bold text-xl">{lbl('payTitle', lang)}</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">{lbl('payDesc', lang)}</p>
                  </div>

                  <div className="flex flex-col gap-3 max-w-sm mx-auto">
                    <Button asChild className="gap-2" size="lg">
                      <a href={REVOLUT_LINK} target="_blank" rel="noopener noreferrer">
                        <CreditCard className="h-4 w-4" />
                        {lbl('payButton', lang)}
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setPaymentConfirmed(true)}
                      className="gap-2"
                      size="lg"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {lbl('paidConfirm', lang)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Document revealed after payment confirmation */}
            {paymentConfirmed && (
              <>
                <Card>
                  <CardContent className="pt-6">
                    <div
                      ref={docRef}
                      className="prose prose-sm max-w-none dark:prose-invert min-h-[200px]"
                    >
                      <ReactMarkdown>{generatedDoc}</ReactMarkdown>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" onClick={handleCopy} className="flex-1 gap-2">
                    <Download className="h-4 w-4" />
                    {lbl('copyDoc', lang)}
                  </Button>
                  <Button variant="ghost" onClick={handleReset} className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    {lbl('newDoc', lang)}
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
