import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Heart, MapPin, Bed, Bath, Maximize, Building,
  Eye, Layers, Wrench, Trees, Car, Sofa, Landmark,
} from 'lucide-react';

type PropertyType =
  | 'apartment' | 'house' | 'land' | 'block'
  | 'farm' | 'commercial' | 'garage' | 'industrial'
  | 'office' | 'other';

interface PropertyCardProps {
  id: string;

  // Titles
  title:    string;
  titleBg?: string;
  titleRu?: string;
  titleDe?: string;
  titleIt?: string;

  // Location
  location:   string;
  locationBg?: string;
  locationRu?: string;
  locationDe?: string;
  locationIt?: string;

  price:           number;
  image:           string;
  type:            PropertyType;
  transactionType: 'sale' | 'rent';

  // Core specs
  area:       number;
  bedrooms?:  number;
  bathrooms?: number;

  // Extended specs (all optional — show only when present)
  livingRooms?:    number;
  floor?:          number;
  totalFloors?:    number;
  view?:           string;   // e.g. "Sea view", "Garden view"
  maintenanceFee?: number;   // EUR/m²/year
  terraceArea?:    number;   // m²
  landArea?:       number;   // m² (for houses, farms, land plots)
  parkingSpots?:   number;

  featured?:       boolean;
  availableUnits?: number;
  status?:         'for-sale' | 'for-rent' | 'sold-out' | 'coming-soon' | 'reserved';
  yearBuilt?:      number;
  actSixteen?:     boolean;  // Bulgarian Act 16 — legally commissioned
}

// ─── i18n label maps ────────────────────────────────────────────────────────

const TYPE_LABELS: Record<PropertyType, Record<string, string>> = {
  apartment:  { en: 'Apartment',   ru: 'Квартира',       bg: 'Апартамент',    de: 'Wohnung',       it: 'Appartamento'  },
  house:      { en: 'House',       ru: 'Дом',            bg: 'Къща',          de: 'Haus',           it: 'Casa'          },
  land:       { en: 'Land',        ru: 'Земля',          bg: 'Земя',          de: 'Grundstück',     it: 'Terreno'       },
  block:      { en: 'Apt. Block',  ru: 'Жил. комплекс',  bg: 'Жил. сграда',   de: 'Wohnblock',      it: 'Condominio'    },
  farm:       { en: 'Farm',        ru: 'Ферма',          bg: 'Ферма',         de: 'Bauernhof',      it: 'Fattoria'      },
  commercial: { en: 'Commercial',  ru: 'Коммерческая',   bg: 'Търговски',     de: 'Gewerbe',        it: 'Commerciale'   },
  garage:     { en: 'Garage',      ru: 'Гараж',          bg: 'Гараж',         de: 'Garage',         it: 'Garage'        },
  industrial: { en: 'Industrial',  ru: 'Промышленная',   bg: 'Промишлен',     de: 'Industrie',      it: 'Industriale'   },
  office:     { en: 'Office',      ru: 'Офис',           bg: 'Офис',          de: 'Büro',           it: 'Ufficio'       },
  other:      { en: 'Other',       ru: 'Другое',         bg: 'Друго',         de: 'Sonstiges',      it: 'Altro'         },
};

const STATUS_LABELS: Record<string, Record<string, string>> = {
  'sold-out':    { en: 'Sold Out',     ru: 'Продано',      bg: 'Продаден',      de: 'Verkauft',       it: 'Venduto'        },
  'coming-soon': { en: 'Coming Soon',  ru: 'Скоро',        bg: 'Очаквайте',     de: 'Demnächst',      it: 'In Arrivo'      },
  'reserved':    { en: 'Reserved',     ru: 'Резервирован', bg: 'Резервиран',    de: 'Reserviert',     it: 'Riservato'      },
};

const UI: Record<string, Record<string, string>> = {
  forSale:     { en: 'For Sale',    ru: 'Продажа',      bg: 'Продажба',      de: 'Kaufen',         it: 'Vendita'        },
  forRent:     { en: 'For Rent',    ru: 'Аренда',       bg: 'Наем',          de: 'Miete',          it: 'Affitto'        },
  units:       { en: 'units',       ru: 'объектов',     bg: 'имота',         de: 'Einheiten',      it: 'unità'          },
  floor:       { en: 'Floor',       ru: 'Этаж',         bg: 'Етаж',          de: 'Etage',          it: 'Piano'          },
  view:        { en: 'View',        ru: 'Вид',          bg: 'Изглед',        de: 'Aussicht',       it: 'Vista'          },
  maintenance: { en: 'Maint.',      ru: 'Такса',        bg: 'Такса',         de: 'Nebenk.',        it: 'Manutenzione'   },
  terrace:     { en: 'Terrace',     ru: 'Терраса',      bg: 'Тераса',        de: 'Terrasse',       it: 'Terrazza'       },
  land:        { en: 'Land',        ru: 'Участок',      bg: 'Земя',          de: 'Grundstück',     it: 'Terreno'        },
  parking:     { en: 'Parking',     ru: 'Паркинг',      bg: 'Паркинг',       de: 'Parkplatz',      it: 'Parcheggio'     },
  act16:       { en: 'Act 16 ✓',   ru: 'Акт 16 ✓',    bg: 'Акт 16 ✓',     de: 'Act 16 ✓',      it: 'Act 16 ✓'      },
  viewDetails: { en: 'View Details',ru: 'Подробнее',    bg: 'Детайли',       de: 'Details',        it: 'Dettagli'       },
  tba:         { en: 'TBA',         ru: 'Уточняется',   bg: 'При запитване', de: 'Auf Anfrage',    it: 'Su richiesta'   },
  perMonth:    { en: '/mo',         ru: '/мес',         bg: '/мес',          de: '/Mo.',           it: '/mese'          },
  eurSqmYear:  { en: 'EUR/m²/yr',  ru: 'EUR/м²/год',   bg: 'EUR/м²/год',   de: 'EUR/m²/Jahr',    it: 'EUR/m²/anno'    },
  built:       { en: 'Built',       ru: 'Построен',     bg: 'Построена',     de: 'Baujahr',        it: 'Anno'           },
};

const lbl = (map: Record<string, string>, lang: string) =>
  map[lang] ?? map['en'];

// ─── Component ──────────────────────────────────────────────────────────────

export const PropertyCard = ({
  id, title, titleBg, titleRu, titleDe, titleIt,
  price, location, locationBg, locationRu, locationDe, locationIt,
  image, type, transactionType, featured, availableUnits, status,
  area, bedrooms, bathrooms, livingRooms, floor, totalFloors,
  view, maintenanceFee, terraceArea, landArea, parkingSpots,
  yearBuilt, actSixteen,
}: PropertyCardProps) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];

  const displayTitle =
    (lang === 'bg' && titleBg) || (lang === 'ru' && titleRu) ||
    (lang === 'de' && titleDe) || (lang === 'it' && titleIt) || title;

  const displayLocation =
    (lang === 'bg' && locationBg) || (lang === 'ru' && locationRu) ||
    (lang === 'de' && locationDe) || (lang === 'it' && locationIt) || location;

  const typeLabel   = lbl(TYPE_LABELS[type] ?? TYPE_LABELS['other'], lang);
  const saleLabel   = lbl(transactionType === 'sale' ? UI.forSale : UI.forRent, lang);

  const formatPrice = () => {
    if (price === 0 || status === 'coming-soon') return lbl(UI.tba, lang);
    return `€${price.toLocaleString()}`;
  };

  const statusBadge = status && STATUS_LABELS[status] ? (
    <Badge className={`absolute top-3 right-3 ${
      status === 'sold-out'  ? 'bg-destructive text-destructive-foreground' :
      status === 'reserved'  ? 'bg-yellow-500 text-black' :
                               'bg-secondary text-secondary-foreground'
    }`}>
      {lbl(STATUS_LABELS[status], lang)}
    </Badge>
  ) : null;

  // Spec rows — only render when value is defined
  const specs: { icon: React.ReactNode; value: string }[] = [];

  if ((bedrooms  ?? 0) > 0) specs.push({ icon: <Bed      className="h-3.5 w-3.5" />, value: `${bedrooms}` });
  if ((bathrooms ?? 0) > 0) specs.push({ icon: <Bath     className="h-3.5 w-3.5" />, value: `${bathrooms}` });
  if ((livingRooms ?? 0) > 0) specs.push({ icon: <Sofa   className="h-3.5 w-3.5" />, value: `${livingRooms}` });
  if (area > 0)             specs.push({ icon: <Maximize  className="h-3.5 w-3.5" />, value: `${area} m²` });
  if (terraceArea)          specs.push({ icon: <Landmark  className="h-3.5 w-3.5" />, value: `${terraceArea} m²` });
  if (landArea)             specs.push({ icon: <Trees     className="h-3.5 w-3.5" />, value: `${landArea} m²` });
  if (parkingSpots)         specs.push({ icon: <Car       className="h-3.5 w-3.5" />, value: `${parkingSpots}` });

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 flex flex-col">

      {/* ── Image ── */}
      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
        <img
          src={image}
          alt={displayTitle}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Type pill — top left */}
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
          {typeLabel}
        </span>

        {/* Status badge — top right */}
        {statusBadge}

        {/* Wishlist — top right (only when no status badge) */}
        {!statusBadge && (
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
          >
            <Heart className="h-4 w-4" />
          </Button>
        )}

        {/* Bottom badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          <Badge className="bg-primary text-primary-foreground text-xs">
            {saleLabel}
          </Badge>

          {featured && (
            <Badge className="bg-accent text-accent-foreground text-xs">
              Featured
            </Badge>
          )}

          {actSixteen && (
            <Badge className="bg-green-600 text-white text-xs">
              {lbl(UI.act16, lang)}
            </Badge>
          )}

          {availableUnits !== undefined && availableUnits > 0 && (
            <Badge variant="secondary" className="bg-background/90 text-xs">
              <Building className="h-3 w-3 mr-1" />
              {availableUnits} {lbl(UI.units, lang)}
            </Badge>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <CardContent className="p-4 space-y-3 flex flex-col flex-1">

        {/* Title + Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-base leading-snug line-clamp-2 flex-1">
            {displayTitle}
          </h3>
          <div className="text-right shrink-0">
            <p className="font-bold text-primary text-lg leading-tight">
              {formatPrice()}
            </p>
            {transactionType === 'rent' && price > 0 && (
              <span className="text-xs text-muted-foreground">{lbl(UI.perMonth, lang)}</span>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="line-clamp-1">{displayLocation}</span>
        </div>

        {/* Core specs grid */}
        {specs.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
            {specs.map((s, i) => (
              <div key={i} className="flex items-center gap-1">
                {s.icon}
                <span>{s.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Secondary info row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground border-t pt-2">

          {floor !== undefined && (
            <span className="flex items-center gap-1">
              <Layers className="h-3 w-3" />
              {lbl(UI.floor, lang)}: {floor}{totalFloors ? `/${totalFloors}` : ''}
            </span>
          )}

          {view && (
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {view}
            </span>
          )}

          {maintenanceFee !== undefined && (
            <span className="flex items-center gap-1">
              <Wrench className="h-3 w-3" />
              {maintenanceFee} {lbl(UI.eurSqmYear, lang)}
            </span>
          )}

          {yearBuilt && (
            <span>
              {lbl(UI.built, lang)}: {yearBuilt}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-1">
          <Link to={`/property/${id}`}>
            <Button variant="outline" className="w-full text-sm">
              {lbl(UI.viewDetails, lang)}
            </Button>
          </Link>
        </div>

      </CardContent>
    </Card>
  );
};