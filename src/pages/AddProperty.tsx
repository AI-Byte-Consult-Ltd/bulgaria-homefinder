import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ImageUpload } from '@/components/ImageUpload';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const AddProperty = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [propertyType, setPropertyType] = useState('apartment');
  const [transactionType, setTransactionType] = useState<'sale' | 'rent'>('sale');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [area, setArea] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('properties').insert({
      title,
      description,
      location,
      price: price ? Number(price) : 0,
      property_type: propertyType,
      transaction_type: transactionType,
      bedrooms: bedrooms ? Number(bedrooms) : 0,
      bathrooms: bathrooms ? Number(bathrooms) : 0,
      size_sqm: area ? Number(area) : null,
      year_built: yearBuilt ? Number(yearBuilt) : null,
      images: images.length > 0 ? images : null,
      user_id: user.id,
      status: 'published',
    });

    setLoading(false);
    if (error) {
      console.error(error);
      toast.error(t('property.saveFailed') || 'Failed to save property');
    } else {
      toast.success(t('property.saveSuccess') || 'Property listed successfully!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">{t('dashboard.addProperty')}</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Images */}
          <div>
            <Label className="mb-2 block">{t('property.photos') || 'Photos'}</Label>
            <ImageUpload userId={user.id} images={images} onImagesChange={setImages} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">{t('property.title')}</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="location">{t('common.location')}</Label>
              <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="price">{t('common.price')}</Label>
              <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} min="0" />
            </div>
            <div>
              <Label htmlFor="propertyType">{t('common.propertyType')}</Label>
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
              <Label htmlFor="transaction">{t('common.transaction')}</Label>
              <Select value={transactionType} onValueChange={(v) => setTransactionType(v as 'sale' | 'rent')}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="sale">{t('transaction.forSale')}</SelectItem>
                  <SelectItem value="rent">{t('transaction.forRent')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="bedrooms">{t('common.bedrooms')}</Label>
              <Input id="bedrooms" type="number" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} min="0" />
            </div>
            <div>
              <Label htmlFor="bathrooms">{t('common.bathrooms')}</Label>
              <Input id="bathrooms" type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} min="0" />
            </div>
            <div>
              <Label htmlFor="area">{t('common.area') || 'Area (m²)'}</Label>
              <Input id="area" type="number" value={area} onChange={(e) => setArea(e.target.value)} min="0" />
            </div>
            <div>
              <Label htmlFor="yearBuilt">{t('property.yearBuilt') || 'Year Built'}</Label>
              <Input id="yearBuilt" type="number" value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)} />
            </div>
          </div>
          <div>
            <Label htmlFor="description">{t('common.description')}</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? t('common.loading') || 'Submitting...' : t('dashboard.save') || 'Save'}
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddProperty;
