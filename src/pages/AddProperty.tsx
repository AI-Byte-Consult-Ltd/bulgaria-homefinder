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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * Страница добавления нового объекта недвижимости.
 * Доступна только для авторизованных пользователей. При отправке формы
 * создаётся запись в таблице `properties` Supabase и выполняется переход в Dashboard.
 */
const AddProperty = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [titleBg, setTitleBg] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [propertyType, setPropertyType] = useState('apartment');
  const [transactionType, setTransactionType] = useState<'sale' | 'rent'>('sale');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [area, setArea] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [loading, setLoading] = useState(false);

  // Запрет доступа для неавторизованных пользователей
  if (!user) return null;

  // Отправка формы в Supabase
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const priceNum = price ? Number(price) : 0;
    const bedroomsNum = bedrooms ? Number(bedrooms) : 0;
    const bathroomsNum = bathrooms ? Number(bathrooms) : 0;
    const areaNum = area ? Number(area) : 0;
    const yearBuiltNum = yearBuilt ? Number(yearBuilt) : null;

    const { error } = await supabase.from('properties').insert({
      title,
      title_bg: titleBg,
      description,
      location,
      price: priceNum,
      property_type: propertyType,
      transaction_type: transactionType,
      bedrooms: bedroomsNum,
      bathrooms: bathroomsNum,
      area: areaNum,
      year_built: yearBuiltNum,
      user_id: user.id,
    });

    setLoading(false);
    if (error) {
      console.error(error);
      // Можно добавить toast с уведомлением об ошибке
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">{t('dashboard.addProperty')}</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">{t('property.title')}</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="titleBg">{t('property.titleBg') || 'Title (BG)'}</Label>
              <Input
                id="titleBg"
                value={titleBg}
                onChange={(e) => setTitleBg(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="location">{t('common.location')}</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">{t('common.price')}</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="propertyType">{t('common.propertyType')}</Label>
              <Select value={propertyType} onValueChange={(v) => setPropertyType(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
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
              <Select
                value={transactionType}
                onValueChange={(v) => setTransactionType(v as 'sale' | 'rent')}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sale">{t('transaction.forSale')}</SelectItem>
                  <SelectItem value="rent">{t('transaction.forRent')}</SelectItem>
                </SelectContent>
              </Select>
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
            <div>
              <Label htmlFor="bathrooms">{t('common.bathrooms')}</Label>
              <Input
                id="bathrooms"
                type="number"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="area">{t('common.area') || 'Area (m²)'}</Label>
              <Input
                id="area"
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                min="0"
              />
            </div>
            <div>
              <Label htmlFor="yearBuilt">{t('property.yearBuilt') || 'Year Built'}</Label>
              <Input
                id="yearBuilt"
                type="number"
                value={yearBuilt}
                onChange={(e) => setYearBuilt(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="description">{t('common.description')}</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
            />
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
