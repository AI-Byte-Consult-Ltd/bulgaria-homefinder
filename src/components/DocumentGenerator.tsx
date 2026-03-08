import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Loader2, CreditCard, Sparkles, RotateCcw, CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const GENERATE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-document`;
const REVOLUT_LINK = 'https://checkout.revolut.com/payment-link/15ba2228-4452-4d31-bc14-8a001a7e4401';

const LABELS: Record<string, Record<string, string>> = {
  title: {
    en: 'Legal Document Generator',
    ru: 'Генератор Юридических Документов',
    bg: 'Генератор на Юридически Документи',
    de: 'Rechtsdokument-Generator',
    it: 'Generatore di Documenti Legali',
  },
  subtitle: {
    en: 'Describe what document you need — we will draft it for you in minutes',
    ru: 'Опишите какой документ вам нужен — мы составим его за несколько минут',
    bg: 'Опишете какъв документ ви трябва — ще го изготвим за вас за няколко минути',
    de: 'Beschreiben Sie, welches Dokument Sie benötigen — wir erstellen es für Sie in wenigen Minuten',
    it: 'Descrivi il documento di cui hai bisogno — lo prepareremo per te in pochi minuti',
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
  email: {
    en: 'Your email *',
    ru: 'Ваш email *',
    bg: 'Вашият email *',
    de: 'Ihre E-Mail *',
    it: 'La tua email *',
  },
  emailPlaceholder: {
    en: 'We will send the document to this email after payment',
    ru: 'Мы отправим документ на этот email после оплаты',
    bg: 'Ще изпратим документа на този email след плащане',
    de: 'Wir senden das Dokument nach Zahlung an diese E-Mail',
    it: 'Invieremo il documento a questa email dopo il pagamento',
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
    en: 'Generating your document...',
    ru: 'Генерируем ваш документ...',
    bg: 'Генерираме вашия документ...',
    de: 'Ihr Dokument wird generiert...',
    it: 'Generazione del documento...',
  },
  price: {
    en: '€35 per generation',
    ru: '€35 за составление',
    bg: '€35 за съставяне',
    de: '€35 pro Dokument',
    it: '€35 per documento',
  },
  successTitle: {
    en: 'Document Generated Successfully!',
    ru: 'Документ успешно сгенерирован!',
    bg: 'Документът е генериран успешно!',
    de: 'Dokument erfolgreich erstellt!',
    it: 'Documento generato con successo!',
  },
  successDesc: {
    en: 'Complete the payment of €25 via the link below. After we confirm your payment, the document will be sent to your email.',
    ru: 'Оплатите €25 по ссылке ниже. После подтверждения оплаты документ будет отправлен на ваш email.',
    bg: 'Завършете плащането от €25 чрез линка по-долу. След потвърждение на плащането, документът ще бъде изпратен на вашия email.',
    de: 'Schließen Sie die Zahlung von €25 über den Link ab. Nach Bestätigung der Zahlung wird das Dokument an Ihre E-Mail gesendet.',
    it: 'Completa il pagamento di €25 tramite il link. Dopo la conferma del pagamento, il documento verrà inviato alla tua email.',
  },
  payButton: {
    en: 'Pay €35 via Revolut',
    ru: 'Оплатить €35 через Revolut',
    bg: 'Платете €35 чрез Revolut',
    de: '€35 über Revolut zahlen',
    it: 'Paga €35 tramite Revolut',
  },
  emailSentTo: {
    en: 'Document will be sent to:',
    ru: 'Документ будет отправлен на:',
    bg: 'Документът ще бъде изпратен на:',
    de: 'Dokument wird gesendet an:',
    it: 'Il documento verrà inviato a:',
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
  const [userEmail, setUserEmail] = useState('');
  const [userDetails, setUserDetails] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleGenerate = async () => {
    if (!documentType.trim()) {
      toast.error('Please specify the document type');
      return;
    }
    if (!userEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsGenerating(true);
    setIsComplete(false);

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
          userEmail,
        }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to generate');
      }

      setIsComplete(true);
    } catch (e) {
      console.error(e);
      toast.error(e instanceof Error ? e.message : 'Generation failed');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setIsComplete(false);
    setDocumentType('');
    setUserEmail('');
    setUserDetails('');
    setAdditionalInfo('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-3 gap-1.5">
            <FileText className="h-3.5 w-3.5" />
            Legal Document Service
          </Badge>
          <h2 className="text-3xl font-bold mb-2">{lbl('title', lang)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{lbl('subtitle', lang)}</p>
          <p className="text-sm text-primary font-semibold mt-2">{lbl('price', lang)}</p>
        </div>

        {/* Form */}
        {!isGenerating && !isComplete && (
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
                  <Label>{lbl('email', lang)}</Label>
                  <Input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder={lbl('emailPlaceholder', lang)}
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
        )}

        {/* Generating indicator */}
        {isGenerating && (
          <Card>
            <CardContent className="pt-6 text-center space-y-3">
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">{lbl('generating', lang)}</p>
            </CardContent>
          </Card>
        )}

        {/* Success + Payment */}
        {isComplete && (
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="pt-6 space-y-5">
              <div className="text-center space-y-3">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                <h3 className="font-bold text-xl">{lbl('successTitle', lang)}</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  {lbl('successDesc', lang)}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{lbl('emailSentTo', lang)}</span>
                <strong className="text-foreground">{userEmail}</strong>
              </div>

              <div className="flex flex-col gap-3 max-w-sm mx-auto">
                <Button asChild className="gap-2" size="lg">
                  <a href={REVOLUT_LINK} target="_blank" rel="noopener noreferrer">
                    <CreditCard className="h-4 w-4" />
                    {lbl('payButton', lang)}
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleReset}
                  className="gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  {lbl('newDoc', lang)}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};
