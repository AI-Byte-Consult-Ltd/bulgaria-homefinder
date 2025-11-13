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

export const SearchBar = () => {
  const { t } = useTranslation();
  const [transactionType, setTransactionType] = useState('sale');
  const [propertyType, setPropertyType] = useState('all');

  return (
    <div className="w-full max-w-5xl mx-auto bg-card rounded-2xl shadow-[var(--card-shadow-hover)] p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <Input
            placeholder={t('hero.searchPlaceholder')}
            className="h-12"
          />
        </div>
        
        <Select value={transactionType} onValueChange={setTransactionType}>
          <SelectTrigger className="h-12">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sale">{t('transaction.forSale')}</SelectItem>
            <SelectItem value="rent">{t('transaction.forRent')}</SelectItem>
          </SelectContent>
        </Select>

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

        <Button size="lg" className="h-12">
          <Search className="h-4 w-4 mr-2" />
          {t('common.search')}
        </Button>
      </div>
    </div>
  );
};
