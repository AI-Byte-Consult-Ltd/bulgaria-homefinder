import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Bed, Bath, Maximize, Building } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  transactionType: 'sale' | 'rent';
  featured?: boolean;
  availableUnits?: number;
  status?: string;
}

export const PropertyCard = ({
  id,
  title,
  titleBg,
  price,
  location,
  image,
  bedrooms,
  bathrooms,
  area,
  type,
  transactionType,
  featured,
  availableUnits,
  status,
}: PropertyCardProps & { titleBg?: string }) => {
  const { t, i18n } = useTranslation();
  const isBgOrRu = i18n.language === 'bg' || i18n.language === 'ru';
  const displayTitle = isBgOrRu && titleBg ? titleBg : title;

  const getStatusBadge = () => {
    if (status === 'sold-out') {
      return <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">Sold Out</Badge>;
    }
    if (status === 'coming-soon') {
      return <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">Coming Soon</Badge>;
    }
    return null;
  };

  const formatPrice = () => {
    if (price === 0 || status === 'coming-soon') {
      return 'TBA';
    }
    return `€${price.toLocaleString()}`;
  };

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--card-shadow-hover)] transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        {getStatusBadge()}
        {!status && (
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>
        )}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge className="bg-primary">
            {transactionType === 'sale' ? t('transaction.forSale') : t('transaction.forRent')}
          </Badge>
          {availableUnits !== undefined && availableUnits > 0 && (
            <Badge variant="secondary" className="bg-background/90">
              <Building className="h-3 w-3 mr-1" />
              {availableUnits} units
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg line-clamp-2">{displayTitle}</h3>
          <p className="font-bold text-primary whitespace-nowrap">
            {formatPrice()}
            {transactionType === 'rent' && price > 0 && <span className="text-sm font-normal">/mo</span>}
          </p>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {(bedrooms > 0 || bathrooms > 0 || area > 0) && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {bedrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{bedrooms}</span>
              </div>
            )}
            {bathrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{bathrooms}</span>
              </div>
            )}
            {area > 0 && (
              <div className="flex items-center gap-1">
                <Maximize className="h-4 w-4" />
                <span>{area} m²</span>
              </div>
            )}
          </div>
        )}

        <Link to={`/property/${id}`}>
          <Button variant="outline" className="w-full">
            {t('common.viewDetails')}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
