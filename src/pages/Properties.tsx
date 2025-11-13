import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import { mockProperties } from '@/data/mockProperties';
import { SlidersHorizontal } from 'lucide-react';

const Properties = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(true);

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
              {mockProperties.length} properties found
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
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 space-y-6 sticky top-20">
                <div>
                  <h3 className="font-semibold mb-4">{t('common.filter')}</h3>
                </div>

                <div className="space-y-2">
                  <Label>{t('common.location')}</Label>
                  <Input placeholder="Enter location..." />
                </div>

                <div className="space-y-2">
                  <Label>{t('common.propertyType')}</Label>
                  <Select defaultValue="all">
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
                  <Label>{t('common.price')}</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="number" placeholder="Min" />
                    <Input type="number" placeholder="Max" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t('common.bedrooms')}</Label>
                  <Select defaultValue="any">
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
                  <Select defaultValue="any">
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

                <Button className="w-full">Apply Filters</Button>
              </div>
            </aside>
          )}

          {/* Properties Grid */}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
