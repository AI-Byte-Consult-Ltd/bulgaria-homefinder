import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockProperties } from '@/data/mockProperties';
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  Share2,
  Calendar,
  Home,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const PropertyDetails = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isBgOrRu = i18n.language === 'bg' || i18n.language === 'ru';
  
  // In a real app, fetch property by ID
  const property = mockProperties.find(p => p.id === id) || mockProperties[0];
  const displayTitle = isBgOrRu && (property as any).titleBg ? (property as any).titleBg : property.title;
  const displayDescription = isBgOrRu && (property as any).descriptionBg ? (property as any).descriptionBg : (property as any).description;

  const images =
  property.images && property.images.length > 0
    ? property.images
    : property.image
      ? [property.image]
      : ['/placeholder.jpg'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container py-8">
        {/* Image Gallery */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                    <img
                      src={image}
                      alt={`${property.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2 bg-primary">
                    {property.transactionType === 'sale' ? t('transaction.forSale') : t('transaction.forRent')}
                  </Badge>
                  <h1 className="text-3xl font-bold mb-2">{displayTitle}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">
                    €{property.price.toLocaleString()}
                    {property.transactionType === 'rent' && <span className="text-lg">/mo</span>}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Heart className="h-4 w-4" />
                  {t('common.favorite')}
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  {t('common.share')}
                </Button>
              </div>
            </div>

            <Separator />

            {/* Key Features */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Bed className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('common.bedrooms')}</p>
                      <p className="font-semibold">{property.bedrooms}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Bath className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('common.bathrooms')}</p>
                      <p className="font-semibold">{property.bathrooms}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Maximize className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('common.area')}</p>
                      <p className="font-semibold">{property.area} m²</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-semibold capitalize">{property.type}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('common.description', 'Description')}</h2>
              {displayDescription ? (
                <p className="text-muted-foreground leading-relaxed">{displayDescription}</p>
              ) : (
                <p className="text-muted-foreground leading-relaxed">
                  This stunning {property.type} offers exceptional value and comfort. Located in the heart of {property.location}, 
                  it features modern amenities and finishes throughout.
                </p>
              )}
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Contact Agent</h3>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">AL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alexander Lunin</p>
                    <p className="text-sm text-muted-foreground">Licensed Agent</p>
                  </div>
                </div>

                <Separator />

                <a href="https://wa.me/491628184658" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" size="lg">
                    {t('common.contactAgent')}
                  </Button>
                </a>
                
                <Button variant="outline" className="w-full gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule a Visit
                </Button>

                <Separator />

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Property ID:</span>
                    <span className="font-medium text-foreground">{property.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Listed:</span>
                    <span className="font-medium text-foreground">2 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
