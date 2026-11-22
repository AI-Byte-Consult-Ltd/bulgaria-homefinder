import { useState } from 'react';
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
import { localized, normalizeLang, formatEur, SUPPORTED_LANGS } from '@/lib/localize';
import NotFound from './NotFound';
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Share2,
  Check,
  Home,
  Trees,
  Layers,
  CalendarDays,
  Phone,
  MessageCircle,
  Send,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const SITE = 'https://estate.aibyteconsult.com';
const PHONE_DISPLAY = '+359 988 899 109';
const PHONE_TEL = '+359988899109';
const WHATSAPP = 'https://wa.me/359988899109';
const TELEGRAM = 'https://t.me/navajjoo';

type L = Record<string, string>;
const pick = (m: L, lang: string) => m[lang] ?? m.en;

const TXT: Record<string, L> = {
  forSale:     { en: 'For sale', de: 'Zu verkaufen', bg: 'Продажба', pl: 'Na sprzedaż', ru: 'Продажа', it: 'In vendita' },
  forRent:     { en: 'For rent', de: 'Zu vermieten', bg: 'Под наем', pl: 'Do wynajęcia', ru: 'Аренда', it: 'In affitto' },
  perMonth:    { en: '/month', de: '/Monat', bg: '/месец', pl: '/mies.', ru: '/мес.', it: '/mese' },
  keyFeatures: { en: 'Key facts', de: 'Eckdaten', bg: 'Основни данни', pl: 'Najważniejsze dane', ru: 'Основные данные', it: 'Dati principali' },
  bedrooms:    { en: 'Bedrooms', de: 'Schlafzimmer', bg: 'Спални', pl: 'Sypialnie', ru: 'Спальни', it: 'Camere da letto' },
  bathrooms:   { en: 'Bathrooms', de: 'Bäder', bg: 'Бани', pl: 'Łazienki', ru: 'Санузлы', it: 'Bagni' },
  area:        { en: 'Area', de: 'Fläche', bg: 'Площ', pl: 'Powierzchnia', ru: 'Площадь', it: 'Superficie' },
  land:        { en: 'Plot', de: 'Grundstück', bg: 'Парцел', pl: 'Działka', ru: 'Участок', it: 'Terreno' },
  floor:       { en: 'Floor', de: 'Etage', bg: 'Етаж', pl: 'Piętro', ru: 'Этаж', it: 'Piano' },
  floors:      { en: 'Floors', de: 'Etagen', bg: 'Етажи', pl: 'Kondygnacje', ru: 'Этажей', it: 'Piani' },
  built:       { en: 'Built', de: 'Baujahr', bg: 'Година на строеж', pl: 'Rok budowy', ru: 'Год постройки', it: 'Anno di costruzione' },
  type:        { en: 'Type', de: 'Objektart', bg: 'Вид имот', pl: 'Rodzaj', ru: 'Тип', it: 'Tipologia' },
  description: { en: 'Description', de: 'Beschreibung', bg: 'Описание', pl: 'Opis', ru: 'Описание', it: 'Descrizione' },
  contact:     { en: 'Contact', de: 'Kontakt', bg: 'Контакт', pl: 'Kontakt', ru: 'Контакты', it: 'Contatti' },
  name:        { en: 'Alexander', de: 'Alexander', bg: 'Александър', pl: 'Aleksander', ru: 'Александр', it: 'Alexander' },
  role:        { en: 'Manager', de: 'Manager', bg: 'Мениджър', pl: 'Menedżer', ru: 'Управляющий', it: 'Responsabile' },
  whatsapp:    { en: 'Write on WhatsApp', de: 'Per WhatsApp schreiben', bg: 'Пишете в WhatsApp', pl: 'Napisz na WhatsApp', ru: 'Написать в WhatsApp', it: 'Scrivi su WhatsApp' },
  telegram:    { en: 'Write on Telegram', de: 'Per Telegram schreiben', bg: 'Пишете в Telegram', pl: 'Napisz na Telegramie', ru: 'Написать в Telegram', it: 'Scrivi su Telegram' },
  call:        { en: 'Call', de: 'Anrufen', bg: 'Обадете се', pl: 'Zadzwoń', ru: 'Позвонить', it: 'Chiama' },
  languages:   { en: 'We speak English, Russian and Bulgarian.', de: 'Wir sprechen Englisch, Russisch und Bulgarisch.', bg: 'Говорим български, руски и английски.', pl: 'Mówimy po angielsku, rosyjsku i bułgarsku.', ru: 'Говорим по-русски, по-болгарски и по-английски.', it: 'Parliamo inglese, russo e bulgaro.' },
  propertyId:  { en: 'Property ID', de: 'Objekt-Nr.', bg: 'Номер на имота', pl: 'Numer oferty', ru: 'Номер объекта', it: 'Codice immobile' },
  share:       { en: 'Copy link', de: 'Link kopieren', bg: 'Копирай линка', pl: 'Kopiuj link', ru: 'Скопировать ссылку', it: 'Copia link' },
  copied:      { en: 'Link copied', de: 'Link kopiert', bg: 'Линкът е копиран', pl: 'Link skopiowany', ru: 'Ссылка скопирована', it: 'Link copiato' },
  photo:       { en: 'photo', de: 'Foto', bg: 'снимка', pl: 'zdjęcie', ru: 'фото', it: 'foto' },
  home:        { en: 'Home', de: 'Startseite', bg: 'Начало', pl: 'Strona główna', ru: 'Главная', it: 'Home' },
  properties:  { en: 'Properties', de: 'Immobilien', bg: 'Имоти', pl: 'Nieruchomości', ru: 'Объекты', it: 'Immobili' },
  enquiry:     {
    en: 'Hello! I am interested in this property:',
    de: 'Guten Tag! Ich interessiere mich für dieses Objekt:',
    bg: 'Здравейте! Интересувам се от този имот:',
    pl: 'Dzień dobry! Interesuje mnie ta nieruchomość:',
    ru: 'Здравствуйте! Меня интересует этот объект:',
    it: 'Buongiorno! Sono interessato a questo immobile:',
  },
};

const TYPE_TXT: Record<string, L> = {
  apartment:  { en: 'Apartment', de: 'Wohnung', bg: 'Апартамент', pl: 'Mieszkanie', ru: 'Квартира', it: 'Appartamento' },
  house:      { en: 'House', de: 'Haus', bg: 'Къща', pl: 'Dom', ru: 'Дом', it: 'Casa' },
  villa:      { en: 'Villa', de: 'Villa', bg: 'Вила', pl: 'Willa', ru: 'Вилла', it: 'Villa' },
  land:       { en: 'Land', de: 'Grundstück', bg: 'Земя', pl: 'Działka', ru: 'Земля', it: 'Terreno' },
  block:      { en: 'Apartment building', de: 'Wohngebäude', bg: 'Жилищна сграда', pl: 'Budynek mieszkalny', ru: 'Жилой дом', it: 'Edificio residenziale' },
  commercial: { en: 'Commercial', de: 'Gewerbe', bg: 'Търговски имот', pl: 'Lokal komercyjny', ru: 'Коммерческая', it: 'Commerciale' },
  office:     { en: 'Office', de: 'Büro', bg: 'Офис', pl: 'Biuro', ru: 'Офис', it: 'Ufficio' },
  garage:     { en: 'Garage', de: 'Garage', bg: 'Гараж', pl: 'Garaż', ru: 'Гараж', it: 'Garage' },
};

const absUrl = (u: string) => (u.startsWith('/') ? `${SITE}${u}` : u);

const PropertyDetails = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const lang = normalizeLang(i18n.resolvedLanguage || i18n.language);
  const tx = (key: string) => pick(TXT[key], lang);

  const property: any = mockProperties.find((p) => p.id === id);
  if (!property) return <NotFound />;

  const displayTitle = localized(property, 'title', lang);
  const displayDescription = localized(property, 'description', lang);
  const displayLocation = localized(property, 'location', lang);

  const images: string[] =
    property.images && property.images.length > 0
      ? property.images
      : property.image
      ? [property.image]
      : ['/placeholder.svg'];

  const pageUrl = `${SITE}/property/${property.id}`;
  const langUrl = (l: string) => `${pageUrl}?lng=${l}`;

  const metaDesc = displayDescription
    ? displayDescription.replace(/\s+/g, ' ').trim().substring(0, 160)
    : displayTitle;

  const hasPrice = typeof property.price === 'number' && property.price > 0;
  const isRent = property.transactionType === 'rent';
  const typeLabel = TYPE_TXT[property.type] ? pick(TYPE_TXT[property.type], lang) : property.type;

  const num = (v: number) => String(v).replace('.', lang === 'en' ? '.' : ',');

  const facts: { icon: JSX.Element; label: string; value: string }[] = [];
  if (property.area > 0) facts.push({ icon: <Maximize className="h-5 w-5 text-primary" />, label: tx('area'), value: `${num(property.area)} m²` });
  if (property.landArea > 0) facts.push({ icon: <Trees className="h-5 w-5 text-primary" />, label: tx('land'), value: `${formatEur(property.landArea, lang).replace(/\s*€$/, '')} m²` });
  if (property.bedrooms > 0) facts.push({ icon: <Bed className="h-5 w-5 text-primary" />, label: tx('bedrooms'), value: String(property.bedrooms) });
  if (property.bathrooms > 0) facts.push({ icon: <Bath className="h-5 w-5 text-primary" />, label: tx('bathrooms'), value: String(property.bathrooms) });
  if (property.floor != null) facts.push({ icon: <Layers className="h-5 w-5 text-primary" />, label: tx('floor'), value: `${property.floor}${property.totalFloors ? ` / ${property.totalFloors}` : ''}` });
  else if (property.totalFloors > 0) facts.push({ icon: <Layers className="h-5 w-5 text-primary" />, label: tx('floors'), value: String(property.totalFloors) });
  if (property.yearBuilt) facts.push({ icon: <CalendarDays className="h-5 w-5 text-primary" />, label: tx('built'), value: String(property.yearBuilt) });
  facts.push({ icon: <Home className="h-5 w-5 text-primary" />, label: tx('type'), value: typeLabel });

  const enquiry = encodeURIComponent(`${tx('enquiry')} ${displayTitle} ${langUrl(lang)}`);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(langUrl(lang));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const realEstateLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: displayTitle,
    description: metaDesc,
    url: pageUrl,
    image: images.map(absUrl),
    inLanguage: lang,
    ...(hasPrice && {
      offers: {
        '@type': 'Offer',
        price: property.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    }),
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
      addressCountry: 'BG',
    },
    ...(property.area > 0 && {
      floorSize: { '@type': 'QuantitativeValue', value: property.area, unitCode: 'MTK' },
    }),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: tx('home'), item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: tx('properties'), item: `${SITE}/properties` },
      { '@type': 'ListItem', position: 3, name: displayTitle, item: pageUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{`${displayTitle} – BulgariaEstate`}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={pageUrl} />
        {SUPPORTED_LANGS.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={langUrl(l)} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${displayTitle} – BulgariaEstate`} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={absUrl(images[0])} />
        <meta property="og:image:alt" content={displayTitle} />
        <meta property="og:site_name" content="BulgariaEstate by AI Byte Consult" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${displayTitle} – BulgariaEstate`} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={absUrl(images[0])} />

        <script type="application/ld+json">{JSON.stringify(realEstateLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="container py-8">
          {/* Image Gallery */}
          <div className="mb-8">
            <Carousel className="w-full" opts={{ loop: images.length > 1 }}>
              <CarouselContent>
                {images.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                      <img
                        src={image}
                        alt={`${displayTitle} — ${tx('photo')} ${index + 1}/${images.length}`}
                        className="w-full h-full object-contain"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="min-w-0">
                    <Badge className="mb-2 bg-primary">
                      {isRent ? tx('forRent') : tx('forSale')}
                    </Badge>

                    <h1 className="text-2xl md:text-3xl font-bold mb-2 break-words">{displayTitle}</h1>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>{displayLocation}</span>
                    </div>
                  </div>

                  {hasPrice && (
                    <div className="sm:text-right shrink-0">
                      <p className="text-3xl font-bold text-primary whitespace-nowrap">
                        {formatEur(property.price, lang)}
                        {isRent && <span className="text-lg">{tx('perMonth')}</span>}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                    {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                    {copied ? tx('copied') : tx('share')}
                  </Button>

                  <VirtualTourButton
                    virtualTourUrl={property.virtualTourUrl}
                    virtualTourType={property.virtualTourType}
                    propertyTitle={displayTitle}
                  />
                </div>
              </div>

              <Separator />

              {/* Key facts */}
              <div>
                <h2 className="text-xl font-semibold mb-4">{tx('keyFeatures')}</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {facts.map((f) => (
                    <Card key={f.label}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">{f.icon}</div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">{f.label}</p>
                          <p className="font-semibold">{f.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-4">{tx('description')}</h2>
                <RichText
                  text={displayDescription}
                  className="text-muted-foreground leading-relaxed space-y-3"
                />
              </div>

              {/* Virtual Tour Section */}
              {hasVirtualTour(property.virtualTourUrl) && (
                <>
                  <Separator />
                  <VirtualTourSection
                    virtualTourUrl={property.virtualTourUrl}
                    virtualTourType={property.virtualTourType}
                    propertyTitle={displayTitle}
                  />
                </>
              )}
            </div>

            {/* Contact Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{tx('contact')}</h3>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">A</span>
                    </div>
                    <div>
                      <p className="font-semibold">{tx('name')}</p>
                      <p className="text-sm text-muted-foreground">{tx('role')}</p>
                    </div>
                  </div>

                  <a href={`tel:${PHONE_TEL}`} className="block text-lg font-semibold text-primary">
                    {PHONE_DISPLAY}
                  </a>

                  <Separator />

                  <div className="space-y-2">
                    <a
                      href={`${WHATSAPP}?text=${enquiry}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full gap-2" size="lg">
                        <MessageCircle className="h-4 w-4" />
                        {tx('whatsapp')}
                      </Button>
                    </a>

                    <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full gap-2">
                        <Send className="h-4 w-4" />
                        {tx('telegram')}
                      </Button>
                    </a>

                    <a href={`tel:${PHONE_TEL}`} className="block">
                      <Button variant="outline" className="w-full gap-2">
                        <Phone className="h-4 w-4" />
                        {tx('call')}
                      </Button>
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground">{tx('languages')}</p>

                  <Separator />

                  <div className="flex justify-between gap-3 text-sm text-muted-foreground">
                    <span>{tx('propertyId')}</span>
                    <span className="font-medium text-foreground text-right break-all">
                      {property.id}
                    </span>
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
