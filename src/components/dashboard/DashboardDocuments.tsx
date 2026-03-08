import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Send, Loader2, FileText, RefreshCw, Eye } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ReactMarkdown from 'react-markdown';

interface DocumentGeneration {
  id: string;
  created_at: string;
  document_type: string;
  user_email: string;
  language: string | null;
  payment_status: string;
  sent_at: string | null;
  generated_content: string;
}

export const DashboardDocuments = () => {
  const { session } = useAuth();
  const [documents, setDocuments] = useState<DocumentGeneration[]>([]);
  const [loading, setLoading] = useState(true);
  const [sendingId, setSendingId] = useState<string | null>(null);
  const [previewDoc, setPreviewDoc] = useState<DocumentGeneration | null>(null);

  const fetchDocuments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('document_generations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching documents:', error);
      toast.error('Failed to load documents');
    } else {
      setDocuments((data as unknown as DocumentGeneration[]) || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleSendDocument = async (documentId: string) => {
    if (!session?.access_token) {
      toast.error('Not authenticated');
      return;
    }

    setSendingId(documentId);
    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-document-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ documentId }),
        }
      );

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to send');
      }

      toast.success('Документ отправлен на email клиента!');
      fetchDocuments();
    } catch (e) {
      console.error(e);
      toast.error(e instanceof Error ? e.message : 'Send failed');
    } finally {
      setSendingId(null);
    }
  };

  const statusBadge = (status: string, sentAt: string | null) => {
    if (sentAt) {
      return <Badge className="bg-green-500/10 text-green-600 border-green-200">Отправлен</Badge>;
    }
    if (status === 'paid') {
      return <Badge className="bg-blue-500/10 text-blue-600 border-blue-200">Оплачен</Badge>;
    }
    return <Badge variant="secondary">Ожидает оплаты</Badge>;
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Сгенерированные документы
        </h2>
        <Button variant="outline" size="sm" onClick={fetchDocuments} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Обновить
        </Button>
      </div>

      {documents.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            Нет сгенерированных документов
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Дата</TableHead>
                  <TableHead>Тип документа</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Язык</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(doc.created_at).toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate">
                      {doc.document_type}
                    </TableCell>
                    <TableCell className="text-sm">{doc.user_email}</TableCell>
                    <TableCell className="text-sm uppercase">{doc.language || '—'}</TableCell>
                    <TableCell>{statusBadge(doc.payment_status, doc.sent_at)}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setPreviewDoc(doc)}
                        className="gap-1"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleSendDocument(doc.id)}
                        disabled={!!doc.sent_at || sendingId === doc.id}
                        className="gap-1"
                      >
                        {sendingId === doc.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="h-4 w-4" />
                        )}
                        Отправить
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Preview dialog */}
      <Dialog open={!!previewDoc} onOpenChange={() => setPreviewDoc(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{previewDoc?.document_type}</DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown>{previewDoc?.generated_content || ''}</ReactMarkdown>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
