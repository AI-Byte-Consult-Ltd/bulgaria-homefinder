
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
  import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Поисковая строка для главной страницы и разделов Buy/Rent.
 * Передаёт введённые параметры в URL, чтобы страница результатов могла отфильтровать объекты.
 */
export const SearchBar = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState('');
  const [transactionType, setTransactionType] = useState('sale');
  const [propertyType, setPropertyType] = useState('all');
  const navigate = useNavigate();

  // Формируем параметры строки запроса и переходим на страницу /properties
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set('location', location.trim());
    if (transactionType && transactionType !== 'sale') params.set('transaction', transactionType);
    if (propertyType && propertyType !== 'all') params.set('type', propertyType);
    const queryString = params.toString();
    navigate(`/properties${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-card rounded-2xl shadow-[var(--card-shadow-hover)] p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Поле ввода локации или ключевого слова */}
        <div className="md:col-span-2">
          <Input
            placeholder={t('hero.searchPlaceholder')}
            className="h-12"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Тип сделки: покупка или аренда */}
        <Select value={transactionType} onValueChange={setTransactionType}>
          <SelectTrigger className="h-12">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sale">{t('transaction.forSale')}</SelectItem>
            <SelectItem value="rent">{t('transaction.forRent')}</SelectItem>
          </SelectContent>
        </Select>

        {/* Тип недвижимости */}
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger className="h-12">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('propertyTypes.all')}</SelectItem>
            <SelectItem value="house">{t('propertyTypes.house')}</SelectItem>
            <SelectItem value="apartment">{t('propertyTypes.apartment')}</SelectItem>
            <SelectItem value="villa">{t('propertyTypes.villa')}</SelectItem>
            <SelectItem value="land">{t('propertyTypes.land')}</SelectItem>
            <SelectItem value="commercial">{t('propertyTypes.commercial')}</SelectItem>
          </SelectContent>
        </Select>

        {/* Кнопка поиска */}
        <Button size="lg" className="h-12" onClick={handleSearch}>
          <Search className="h-4 w-4 mr-2" />
          {t('common.search')}
        </Button>
      </div>
    </div>
  );
};
