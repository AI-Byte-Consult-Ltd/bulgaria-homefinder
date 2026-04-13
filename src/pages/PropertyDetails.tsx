import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockProperties } from '@/data/mockProperties';
import { RichText } from '@/components/RichText';
import { VirtualTourButton, VirtualTourSection } from '@/components/VirtualTour';
import { hasVirtualTour } from '@/lib/virtualTour';
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

  // Normalize like "ru-RU" -> "ru"
  const lang = (i18n.language || 'en').split('-')[0];

  // In real app: fetch by id. Here: mock.
  const property = mockProperties.find((p) => p.id === id) || mockProperties[0];

  const displayTitle =
    (lang === 'bg' && (property as any).titleBg) ||
    (lang === 'ru' && (property as any).titleRu) ||
    (lang === 'de' && (property as any).titleDe) ||
    (lang === 'it' && (property as any).titleIt) ||
    (property as any).title;

  const displayDescription =
    (lang === 'bg' && (property as any).descriptionBg) ||
    (lang === 'ru' && (property as any).descriptionRu) ||
    (lang === 'de' && (property as any).descriptionDe) ||
    (lang === 'it' && (property as any).descriptionIt) ||
    (property as any).description;

  const images =
    (property as any).images && (property as any).images.length > 0
      ? (property as any).images
      : (property as any).image
      ? [(property as any).image]
      : ['/placeholder.jpg'];

  const pageUrl = `https://estate.aibyteconsult.com/property/${(property as any).id}`;

  const metaDesc = displayDescription
    ? displayDescription.substring(0, 160)
    : `${displayTitle} — property in Bulgaria. View details, photos and pricing on BulgariaEstate.`;

  const realEstateLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: displayTitle,
    description: metaDesc,
    url: pageUrl,
    image: images,
    datePosted: (property as any).createdAt || new Date().toISOString(),
    ...(property as any).price && {
      offers: {
        '@type': 'Offer',
        price: (property as any).price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    },
    ...((property as any).location && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: (property as any).location,
        addressCountry: 'BG',
      },
    }),
    ...((property as any).size && {
      floorSize: {
        '@type': 'QuantitativeValue',
        value: (property as any).size,
        unitCode: 'MTK',
      },
    }),
    numberOfRooms: (property as any).bedrooms || undefined,
    numberOfBathroomsTotal: (property as any).bathrooms || undefined,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://estate.aibyteconsult.com/' },
      { '@type': 'ListItem', position: 2, name: 'Properties', item: 'https://estate.aibyteconsult.com/properties' },
      { '@type': 'ListItem', position: 3, name: displayTitle, item: pageUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`${displayTitle} – BulgariaEstate`}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${displayTitle} – BulgariaEstate`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={images[0]} />
        <meta property="og:image:alt" content={displayTitle} />
        <meta property="og:site_name" content="BulgariaEstate by AI Byte Consult" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${displayTitle} – BulgariaEstate`} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={images[0]} />

        <script type="application/ld+json">{JSON.stringify(realEstateLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="container py-8">
          {/* Image Gallery */}
          <div className="mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                      <img
                        src={image}
                        alt={`${displayTitle} — photo ${index + 1} of ${images.length}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
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
                      {(property as any).transactionType === 'sale'
                        ? t('transaction.forSale')
                        : t('transaction.forRent')}
                    </Badge>

                    <h1 className="text-3xl font-bold mb-2">{displayTitle}</h1>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{(property as any).location}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">
                      €{(property as any).price.toLocaleString()}
                      {(property as any).transactionType === 'rent' && (
                        <span className="text-lg">/mo</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="h-4 w-4" />
                    {t('common.favorite')}
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    {t('common.share')}
                  </Button>

                  {/* Virtual Tour button near gallery */}
                  <VirtualTourButton
                    virtualTourUrl={(property as any).virtualTourUrl}
                    virtualTourType={(property as any).virtualTourType}
                    propertyTitle={displayTitle}
                  />
                </div>
              </div>

              <Separator />

              {/* Key Features */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {t('common.keyFeatures', 'Key Features')}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Bed className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t('common.bedrooms')}
                        </p>
                        <p className="font-semibold">{(property as any).bedrooms}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Bath className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t('common.bathrooms')}
                        </p>
                        <p className="font-semibold">{(property as any).bathrooms}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Maximize className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t('common.area')}
                        </p>
                        <p className="font-semibold">{(property as any).area} m²</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Home className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {t('common.type', 'Type')}
                        </p>
                        <p className="font-semibold capitalize">{(property as any).type}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {t('common.description', 'Description')}
                </h2>

                {displayDescription ? (
                  <RichText
                    text={displayDescription}
                    className="text-muted-foreground leading-relaxed space-y-3"
                  />
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    This stunning {(property as any).type} offers exceptional value and comfort.
                    Located in the heart of {(property as any).location}, it features modern amenities
                    and finishes throughout.
                  </p>
                )}
              </div>

              {/* Virtual Tour Section */}
              {hasVirtualTour((property as any).virtualTourUrl) && (
                <>
                  <Separator />
                  <VirtualTourSection
                    virtualTourUrl={(property as any).virtualTourUrl}
                    virtualTourType={(property as any).virtualTourType}
                    propertyTitle={displayTitle}
                  />
                </>
              )}
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">
                    {t('common.contactAgent', 'Contact Agent')}
                  </h3>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">AL</span>
                    </div>
                    <div>
                      <p className="font-semibold">Alexander Lunin</p>
                      <p className="text-sm text-muted-foreground">
                        {t('common.licensedAgent', 'Licensed Agent')}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <a
                    href="https://wa.me/359988899109"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full" size="lg">
                      {t('common.contactAgent')}
                    </Button>
                  </a>

                  <a
                    href={`https://wa.me/359988899109?text=${encodeURIComponent(
                      `Hi! I'd like to schedule a visit for the property: "${displayTitle}" (ID: ${(property as any).id}). Please let me know available dates and times.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      <Calendar className="h-4 w-4" />
                      {t('common.scheduleVisit', 'Schedule a Visit')}
                    </Button>
                  </a>

                  <Separator />

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>{t('common.propertyId', 'Property ID:')}</span>
                      <span className="font-medium text-foreground">{(property as any).id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('common.listed', 'Listed:')}</span>
                      <span className="font-medium text-foreground">
                        {t('common.daysAgo', '2 days ago')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PropertyDetails;