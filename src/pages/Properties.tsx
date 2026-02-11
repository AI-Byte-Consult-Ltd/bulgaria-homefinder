import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PropertyCard } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SlidersHorizontal } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

/**
 * Страница вывода найденных объектов недвижимости.
 * Считывает параметры из URL (?location=..., type=..., transaction=...) и
 * делает запрос к таблице 'properties' в Supabase. Позволяет дополнительно
 * фильтровать результаты по цене, количеству спален и ванных комнат.
 */
const Properties = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(true);
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  // Локальные состояния для полей фильтра
  const [locFilter, setLocFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [transactionFilter, setTransactionFilter] = useState<'sale' | 'rent'>('sale');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('any');
  const [bathrooms, setBathrooms] = useState('any');

  // При изменении строки запроса или фильтров загружаем список объектов
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchLoc = searchParams.get('location') ?? '';
    const searchTransaction = (searchParams.get('transaction') as 'sale' | 'rent') ?? 'sale';
    const searchType = searchParams.get('type') ?? 'all';

    // Обновляем поля фильтра, чтобы UI соответствовал URL
    setLocFilter(searchLoc);
    setTransactionFilter(searchTransaction);
    setTypeFilter(searchType);

    const fetchProperties = async () => {
      setLoading(true);

      let query: any = supabase.from('properties').select('*');

      if (searchLoc) {
        query = query.ilike('location', `%${searchLoc}%`);
      }
      if (searchTransaction) {
        query = query.eq('transaction_type', searchTransaction);
      }
      if (searchType && searchType !== 'all') {
        query = query.eq('property_type', searchType);
      }

      // Дополнительные фильтры по цене и количеству комнат
      if (minPrice) {
        query = query.gte('price', Number(minPrice));
      }
      if (maxPrice) {
        query = query.lte('price', Number(maxPrice));
      }
      if (bedrooms !== 'any') {
        query = query.gte('bedrooms', Number(bedrooms));
      }
      if (bathrooms !== 'any') {
        query = query.gte('bathrooms', Number(bathrooms));
      }

      const { data, error } = await query;
      if (!error) {
        setProperties(data ?? []);
      } else {
        console.error(error);
        setProperties([]);
      }
      setLoading(false);
    };

    fetchProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, minPrice, maxPrice, bedrooms, bathrooms]);

  // При нажатии на кнопку «Apply filters» обновляем URL для location/transaction/type,
  // остальные фильтры остаются только в локальном состоянии
  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    if (locFilter) params.set('location', locFilter.trim());
    if (transactionFilter && transactionFilter !== 'sale') params.set('transaction', transactionFilter);
    if (typeFilter && typeFilter !== 'all') params.set('type', typeFilter);
    const queryString = params.toString();
    window.history.replaceState(null, '', `/properties${queryString ? `?${queryString}` : ''}`);
    // fetchProperties вызовется автоматически через useEffect
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-8 flex-1">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {t('common.search')} {t('common.results')}
            </h1>
            <p className="text-muted-foreground">
              {loading
                ? 'Loading...'
                : `${properties.length} ${t('common.results')?.toLowerCase() || 'results'}`}
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {t('common.filter')}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Сайдбар фильтров */}
          {showFilters && (
            <aside className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 space-y-6 sticky top-20">
                <div>
                  <h3 className="font-semibold mb-4">{t('common.filter')}</h3>
                </div>

                <div className="space-y-2">
                  <Label>{t('common.location')}</Label>
                  <Input
                    placeholder={t('common.locationPlaceholder') || 'Enter location...'}
                    value={locFilter}
                    onChange={(e) => setLocFilter(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t('common.propertyType')}</Label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
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
                </div>

                <div className="space-y-2">
                  <Label>{t('common.transaction')}</Label>
                  <Select
                    value={transactionFilter}
                    onValueChange={(v) => setTransactionFilter(v as 'sale' | 'rent')}
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

                <div className="space-y-2">
                  <Label>{t('common.price')}</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t('common.bedrooms')}</Label>
                  <Select value={bedrooms} onValueChange={setBedrooms}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>{t('common.bathrooms')}</Label>
                  <Select value={bathrooms} onValueChange={setBathrooms}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" onClick={handleApplyFilters}>
                  {t('common.applyFilters') || 'Apply Filters'}
                </Button>
              </div>
            </aside>
          )}

          {/* Сетка объектов */}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            {loading ? (
              <p className="text-muted-foreground">Loading...</p>
            ) : properties.length === 0 ? (
              <p className="text-muted-foreground">
                {t('common.noResults') || 'No properties found'}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    id={property.id}
                    title={property.title}
                    titleBg={property.title_bg}
                    price={property.price}
                    location={property.location}
                    image={
                      property.images && property.images.length > 0
                        ? property.images[0]
                        : '/placeholder.jpg'
                    }
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    area={property.area}
                    type={property.property_type}
                    transactionType={property.transaction_type as 'sale' | 'rent'}
                    featured={property.is_priority}
                    availableUnits={property.available_units}
                    status={property.status}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;

