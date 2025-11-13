import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Bed, Bath, Maximize } from 'lucide-react';

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
}

export const PropertyCard = ({
  id,
  title,
  price,
  location,
  image,
  bedrooms,
  bathrooms,
  area,
  type,
  transactionType,
  featured,
}: PropertyCardProps) => {
  const { t } = useTranslation();

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
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge className="absolute bottom-3 left-3 bg-primary">
          {transactionType === 'sale' ? t('transaction.forSale') : t('transaction.forRent')}
        </Badge>
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <p className="font-bold text-primary whitespace-nowrap">
            €{price.toLocaleString()}
            {transactionType === 'rent' && <span className="text-sm font-normal">/mo</span>}
          </p>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{area} m²</span>
          </div>
        </div>

        <Link to={`/property/${id}`}>
          <Button variant="outline" className="w-full">
            {t('common.viewDetails')}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
