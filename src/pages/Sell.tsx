import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageSEO } from '@/components/PageSEO';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ImageUpload } from '@/components/ImageUpload';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Home, Users, TrendingUp, Send, CheckCircle, Upload } from 'lucide-react';

const Sell = () => {
  const { t } = useTranslation();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [priceExpectation, setPriceExpectation] = useState('');
  const [propertyType, setPropertyType] = useState('house');
  const [areaSqm, setAreaSqm] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('sell_submissions' as any).insert({
      name,
      email,
      phone: phone || null,
      location,
      price_expectation: priceExpectation ? Number(priceExpectation) : null,
      property_type: propertyType,
      area_sqm: areaSqm ? Number(areaSqm) : null,
      bedrooms: bedrooms ? Number(bedrooms) : null,
      description: description || null,
      images: images.length > 0 ? images : null,
    } as any);

    setLoading(false);

    if (error) {
      console.error(error);
      toast.error(t('sell.submitError', 'Failed to submit. Please try again.'));
    } else {
      setSubmitted(true);
      toast.success(t('sell.submitSuccess', 'Your property submission has been received!'));

      // Send email notification (fire-and-forget)
      supabase.functions.invoke('send-sell-notification', {
        body: { name, email, phone, location, propertyType, priceExpectation, areaSqm, bedrooms, description },
      }).catch((err) => console.error('Email notification error:', err));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={t('sell.pageTitle', 'Sell Your Property in Bulgaria')}
        description="List your property for sale in Bulgaria. Professional marketing, property valuation and legal support. Reach international buyers across Europe."
        path="/sell"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Sell', url: '/sell' },
        ]}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('sell.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('sell.subtitle')}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{t('sell.benefit1Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('sell.benefit1Text')}</p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{t('sell.benefit2Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('sell.benefit2Text')}</p>
              </div>
              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{t('sell.benefit3Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('sell.benefit3Text')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form or Success */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-3xl">
            {submitted ? (
              <Card className="text-center py-12">
                <CardContent className="space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <h2 className="text-2xl font-bold">{t('sell.thankYou', 'Thank You!')}</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {t('sell.thankYouText', 'We have received your property details. Our team will review your submission and contact you within 24 hours with a preliminary listing draft and next steps.')}
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    {t('sell.submitAnother', 'Submit Another Property')}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    {t('sell.formTitle', 'Submit Your Property')}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {t('sell.formSubtitle', 'Fill in the details below and we\'ll create a preliminary listing draft for you.')}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Info */}
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                        {t('sell.contactInfo', 'Contact Information')}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">{t('contact.name')} *</Label>
                          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                          <Label htmlFor="email">{t('contact.email')} *</Label>
                          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="phone">{t('contact.phone')}</Label>
                          <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    {/* Property Details */}
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                        {t('sell.propertyInfo', 'Property Information')}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor="location">{t('common.location')} *</Label>
                          <Input
                            id="location"
                            placeholder={t('sell.locationPlaceholder', 'e.g. Sunny Beach, Burgas')}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label>{t('common.propertyType')} *</Label>
                          <Select value={propertyType} onValueChange={setPropertyType}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="house">{t('propertyTypes.house')}</SelectItem>
                              <SelectItem value="apartment">{t('propertyTypes.apartment')}</SelectItem>
                              <SelectItem value="villa">{t('propertyTypes.villa')}</SelectItem>
                              <SelectItem value="land">{t('propertyTypes.land')}</SelectItem>
                              <SelectItem value="commercial">{t('propertyTypes.commercial')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="price">{t('sell.priceExpectation', 'Price Expectation (€)')}</Label>
                          <Input
                            id="price"
                            type="number"
                            placeholder="e.g. 75000"
                            value={priceExpectation}
                            onChange={(e) => setPriceExpectation(e.target.value)}
                            min="0"
                          />
                        </div>
                        <div>
                          <Label htmlFor="area">{t('common.area')} (m²)</Label>
                          <Input
                            id="area"
                            type="number"
                            value={areaSqm}
                            onChange={(e) => setAreaSqm(e.target.value)}
                            min="0"
                          />
                        </div>
                        <div>
                          <Label htmlFor="bedrooms">{t('common.bedrooms')}</Label>
                          <Input
                            id="bedrooms"
                            type="number"
                            value={bedrooms}
                            onChange={(e) => setBedrooms(e.target.value)}
                            min="0"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <Label htmlFor="description">{t('sell.propertyDescription', 'Description')}</Label>
                      <Textarea
                        id="description"
                        placeholder={t('sell.descriptionPlaceholder', 'Describe your property — condition, features, nearby amenities...')}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                      />
                    </div>

                    {/* Photos */}
                    <div>
                      <Label className="mb-2 block">{t('sell.photos', 'Photos')}</Label>
                      <p className="text-xs text-muted-foreground mb-2">
                        {t('sell.photosHint', 'Upload photos of your property to help us create a better listing')}
                      </p>
                      <ImageUpload userId="sell-submission" images={images} onImagesChange={setImages} />
                    </div>

                    <Button type="submit" disabled={loading} className="w-full gap-2" size="lg">
                      <Send className="h-4 w-4" />
                      {loading ? t('common.loading') : t('sell.submitProperty', 'Submit Property')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;
