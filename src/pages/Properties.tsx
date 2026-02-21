import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { mockProperties } from '@/data/mockProperties';
import { propertyMatchesQuery } from '@/data/cityAliases';

/**
 * Страница вывода найденных объектов недвижимости.
 * Считывает параметры из URL (?location=..., type=..., transaction=...)
 * и делает запрос к таблице 'properties' в Supabase.
 */
const Properties = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(true);
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Локальные состояния для полей фильтра
  const [locFilter, setLocFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [transactionFilter, setTransactionFilter] = useState<'sale' | 'rent' | 'all'>('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('any');
  const [bathrooms, setBathrooms] = useState('any');

  // При изменении строки запроса или фильтров загружаем список объектов
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchLoc = searchParams.get('location') ?? '';
    const searchTransaction =
      (searchParams.get('transaction') as 'sale' | 'rent' | 'all') ?? 'all';
    const searchType = searchParams.get('type') ?? 'all';

    // Обновляем поля фильтра, чтобы UI соответствовал URL
    setLocFilter(searchLoc);
    setTransactionFilter(searchTransaction);
    setTypeFilter(searchType);

    const fetchProperties = async () => {
      setLoading(true);

      // Try Supabase first
      let query: any = supabase.from('properties').select('*');
      if (searchLoc) query = query.ilike('location', `%${searchLoc}%`);
      if (searchTransaction && searchTransaction !== 'all') query = query.eq('transaction_type', searchTransaction);
      if (searchType && searchType !== 'all') query = query.eq('property_type', searchType);
      if (minPrice) query = query.gte('price', Number(minPrice));
      if (maxPrice) query = query.lte('price', Number(maxPrice));
      if (bedrooms !== 'any') query = query.gte('bedrooms', Number(bedrooms));
      if (bathrooms !== 'any') query = query.gte('bathrooms', Number(bathrooms));

      const { data, error } = await query;

      if (!error && data && data.length > 0) {
        setProperties(data);
      } else {
        // Fallback to mock data with client-side filtering
        let filtered = [...mockProperties];
        if (searchLoc) {
          filtered = filtered.filter((p) => propertyMatchesQuery(p, searchLoc));
        }
        if (searchTransaction && searchTransaction !== 'all') {
          filtered = filtered.filter((p) => p.transactionType === searchTransaction);
        }
        if (searchType && searchType !== 'all') {
          filtered = filtered.filter((p) => p.type === searchType);
        }
        if (minPrice) filtered = filtered.filter((p) => p.price >= Number(minPrice));
        if (maxPrice) filtered = filtered.filter((p) => p.price <= Number(maxPrice));
        if (bedrooms !== 'any') filtered = filtered.filter((p) => (p.bedrooms ?? 0) >= Number(bedrooms));
        if (bathrooms !== 'any') filtered = filtered.filter((p) => (p.bathrooms ?? 0) >= Number(bathrooms));
        setProperties(filtered);
      }
      setLoading(false);
    };

    fetchProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, minPrice, maxPrice, bedrooms, bathrooms]);

  // При нажатии на кнопку «Apply filters» обновляем URL для location/transaction/type.
  // Остальные фильтры остаются только в локальном состоянии.
  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    if (locFilter) params.set('location', locFilter.trim());
    if (transactionFilter && transactionFilter !== 'all')
      params.set('transaction', transactionFilter);
    if (typeFilter && typeFilter !== 'all') params.set('type', typeFilter);
    const queryString = params.toString();
    navigate(`/properties${queryString ? `?${queryString}` : ''}`, { replace: true });
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
                    placeholder={t('common.locationPlaceholder') || 'Enter location, city or region...'}
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
                    onValueChange={(v) => setTransactionFilter(v as 'sale' | 'rent' | 'all')}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('transaction.all') || 'All'}</SelectItem>
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
                    titleBg={property.title_bg || property.titleBg}
                    titleRu={property.title_ru || property.titleRu}
                    titleDe={property.title_de || property.titleDe}
                    titleIt={property.title_it || property.titleIt}
                    location={property.location}
                    locationBg={property.location_bg || property.locationBg}
                    locationRu={property.location_ru || property.locationRu}
                    locationDe={property.location_de || property.locationDe}
                    locationIt={property.location_it || property.locationIt}
                    description={property.description}
                    descriptionBg={property.description_bg || property.descriptionBg}
                    descriptionRu={property.description_ru || property.descriptionRu}
                    descriptionDe={property.description_de || property.descriptionDe}
                    descriptionIt={property.description_it || property.descriptionIt}
                    price={property.price}
                    image={
                      property.images && property.images.length > 0
                        ? property.images[0]
                        : property.image || '/placeholder.jpg'
                    }
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    area={property.size_sqm || property.area}
                    type={property.property_type || property.type}
                    transactionType={(property.transaction_type || property.transactionType) as 'sale' | 'rent'}
                    featured={property.is_priority || property.featured}
                    availableUnits={property.available_units || property.availableUnits}
                    status={property.status}
                    livingRooms={property.living_rooms || property.livingRooms}
                    floor={property.floor ?? undefined}
                    totalFloors={property.total_floors || property.totalFloors}
                    view={property.view}
                    maintenanceFee={property.maintenance_fee || property.maintenanceFee}
                    terraceArea={property.terrace_area || property.terraceArea}
                    landArea={property.land_area || property.landArea}
                    parkingSpots={property.parking_spots || property.parkingSpots}
                    yearBuilt={property.year_built || property.yearBuilt}
                    actSixteen={property.act_sixteen ?? property.actSixteen}
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