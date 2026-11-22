import { useState, useEffect, useMemo, type KeyboardEvent } from 'react';
import { PageSEO } from '@/components/PageSEO';
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
import { mockProperties } from '@/data/mockProperties';
import { propertyMatchesQuery } from '@/data/cityAliases';

/**
 * Страница вывода найденных объектов недвижимости.
 * Считывает параметры из URL (?location=..., type=..., transaction=..., min, max, beds, baths)
 * и фильтрует каталог объектов.
 */
const Properties = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(true);

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

  // Фильтры из URL (?location=..., type=..., transaction=...) → поля формы
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setLocFilter(searchParams.get('location') ?? '');
    const tr = searchParams.get('transaction');
    setTransactionFilter(tr === 'sale' || tr === 'rent' ? tr : 'all');
    setTypeFilter(searchParams.get('type') ?? 'all');
    setMinPrice(searchParams.get('min') ?? '');
    setMaxPrice(searchParams.get('max') ?? '');
    setBedrooms(searchParams.get('beds') ?? 'any');
    setBathrooms(searchParams.get('baths') ?? 'any');
  }, [location.search]);

  // Список объектов считается только из URL, поэтому результат всегда
  // совпадает со ссылкой и не «прыгает» во время ввода.
  const properties = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchLoc = searchParams.get('location') ?? '';
    const searchTransaction = searchParams.get('transaction') ?? 'all';
    const searchType = searchParams.get('type') ?? 'all';
    const min = Number(searchParams.get('min')) || 0;
    const max = Number(searchParams.get('max')) || 0;
    const beds = Number(searchParams.get('beds')) || 0;
    const baths = Number(searchParams.get('baths')) || 0;

    return (mockProperties as any[]).filter((p) => {
      if (searchLoc && !propertyMatchesQuery(p, searchLoc)) return false;
      if (searchTransaction !== 'all' && p.transactionType !== searchTransaction) return false;
      if (searchType !== 'all' && p.type !== searchType) return false;
      if (min && !(p.price >= min)) return false;
      if (max && !(p.price > 0 && p.price <= max)) return false;
      if (beds && (p.bedrooms ?? 0) < beds) return false;
      if (baths && (p.bathrooms ?? 0) < baths) return false;
      return true;
    });
  }, [location.search]);
  const loading = false;

  // Кнопка «Применить» (и Enter в полях) записывает все фильтры в URL.
  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    if (locFilter.trim()) params.set('location', locFilter.trim());
    if (transactionFilter && transactionFilter !== 'all')
      params.set('transaction', transactionFilter);
    if (typeFilter && typeFilter !== 'all') params.set('type', typeFilter);
    if (Number(minPrice) > 0) params.set('min', String(Number(minPrice)));
    if (Number(maxPrice) > 0) params.set('max', String(Number(maxPrice)));
    if (bedrooms !== 'any') params.set('beds', bedrooms);
    if (bathrooms !== 'any') params.set('baths', bathrooms);
    const queryString = params.toString();
    navigate(`/properties${queryString ? `?${queryString}` : ''}`, { replace: true });
  };

  const handleReset = () => navigate('/properties', { replace: true });
  const onEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') handleApplyFilters();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={t('properties.title', 'Properties in Bulgaria — Search Results')}
        description="Search and filter properties for sale and rent in Bulgaria. Apartments, houses, villas, land and commercial real estate across all regions."
        path="/properties"
      />
      <Header />

      <div className="container py-8 flex-1">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {t('common.search')} {t('common.results')}
            </h1>
            <p className="text-muted-foreground">
              {loading
                ? t('common.loading')
                : `${t('common.results')}: ${properties.length}`}
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
                    onKeyDown={onEnter}
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
                      onKeyDown={onEnter}
                      min={0}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      onKeyDown={onEnter}
                      min={0}
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
                      <SelectItem value="any">{t('common.any')}</SelectItem>
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
                      <SelectItem value="any">{t('common.any')}</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" onClick={handleApplyFilters}>
                  {t('common.applyFilters') || 'Apply Filters'}
                </Button>
                {location.search && (
                  <Button variant="ghost" className="w-full" onClick={handleReset}>
                    {t('common.allProperties')}
                  </Button>
                )}
              </div>
            </aside>
          )}

          {/* Сетка объектов */}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            {loading ? (
              <p className="text-muted-foreground">{t('common.loading')}</p>
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
                    titlePl={property.title_pl || property.titlePl}
                    location={property.location}
                    locationBg={property.location_bg || property.locationBg}
                    locationRu={property.location_ru || property.locationRu}
                    locationDe={property.location_de || property.locationDe}
                    locationIt={property.location_it || property.locationIt}
                    locationPl={property.location_pl || property.locationPl}
                    description={property.description}
                    descriptionBg={property.description_bg || property.descriptionBg}
                    descriptionRu={property.description_ru || property.descriptionRu}
                    descriptionDe={property.description_de || property.descriptionDe}
                    descriptionIt={property.description_it || property.descriptionIt}
                    descriptionPl={property.description_pl || property.descriptionPl}
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
                    virtualTourUrl={property.virtual_tour_url || property.virtualTourUrl}
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