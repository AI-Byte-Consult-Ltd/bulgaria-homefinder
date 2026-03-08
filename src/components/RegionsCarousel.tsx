import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PropertyCarousel, PropertyCarouselItem } from '@/components/PropertyCarousel';
import { regions } from '@/data/regions';
import { MapPin } from 'lucide-react';

export const RegionsCarousel = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const currentLang = ['en', 'bg', 'ru', 'de', 'it'].includes(lang) ? lang : 'en';

  return (
    <section className="py-16 container">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{t('home.popularRegions')}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
      </div>

      <PropertyCarousel>
        {regions.map((region) => (
          <PropertyCarouselItem key={region.slug}>
            <Link to={`/regions/${region.slug}`} className="block group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={region.image}
                  alt={`Real estate in ${region.name.en}, Bulgaria`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 text-white/80 text-sm mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Bulgaria</span>
                  </div>
                  <h3 className="font-bold text-xl text-white mb-1">
                    {region.name[currentLang] || region.name.en}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {region.excerpt[currentLang] || region.excerpt.en}
                  </p>
                  <div className="mt-2 text-xs text-white/60">
                    {region.propertyCount.toLocaleString()}+ {t('common.properties')}
                  </div>
                </div>
              </div>
            </Link>
          </PropertyCarouselItem>
        ))}
      </PropertyCarousel>
    </section>
  );
};
