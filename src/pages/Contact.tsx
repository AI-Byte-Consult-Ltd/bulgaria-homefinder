import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageSEO } from '@/components/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: t('contact.successTitle', 'Message sent!'),
        description: t('contact.successMessage', 'Thank you for your message. We will get back to you soon.'),
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: t('contact.errorTitle', 'Error'),
        description: t('contact.errorMessage', 'Failed to send message. Please try again or contact us directly.'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t('contact.getInTouch')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t('contact.name')}</Label>
                    <Input id="name" type="text" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('contact.email')}</Label>
                    <Input id="email" type="email" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('contact.phone')}</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea id="message" rows={5} required value={formData.message} onChange={handleChange} />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('contact.sending', 'Sending...')}
                      </>
                    ) : (
                      t('contact.send')
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t('contact.officeLocation')}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t('contact.officeLocation')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('contact.address')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t('contact.callUs')}
                      </h3>
                      <p className="text-muted-foreground">
                        +359 9888 99109
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t('contact.emailUs')}
                      </h3>
                      <p className="text-muted-foreground">
                        estate@aibyteconsult.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t('contact.hours')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('contact.hoursText')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
