import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { PropertyCard } from '@/components/PropertyCard';
import { RestorationShowcase } from '@/components/RestorationShowcase';
import Team from '@/components/Team';
import { mockProperties } from '@/data/mockProperties';
import heroImage from '@/assets/hero-bg.jpg';

/**
 * Главная страница, включающая поиск, избранные и новые объявления,
 * популярные регионы, команду, видеоролики и динамическую ленту новостей.
 */
const Home = () => {
  const { t, i18n } = useTranslation();

  const featuredProperties = mockProperties.filter((p) => p.featured);
  const newestProperties = mockProperties.slice(0, 3);

  // Static articles data
  const articles = [
    {
      title:
        i18n.language === 'ru'
          ? 'Покупка недвижимости в Болгарии в 2026 году: 7 ошибок, которые стоят покупателям десятки тысяч евро'
          : 'Buying Property in Bulgaria in 2026: 7 Mistakes That Cost Buyers Tens of Thousands of Euros',
      excerpt:
        i18n.language === 'ru'
          ? 'Рынок недвижимости Болгарии остаётся одним из самых доступных в Евросоюзе. Разберём самые распространённые ошибки покупателей.'
          : "Bulgaria's real estate market remains one of the most affordable in the EU. We analyze the most common buyer mistakes.",
      image_url: 'https://images.unsplash.com/photo-1635328471471-28dd69a0cb3e?w=1600&q=80&auto=format&fit=crop',
      date: 'Feb 5, 2026',
      slug: 'buying-mistakes-2026',
    },
    {
      title:
        i18n.language === 'ru'
          ? 'Прогноз цен на недвижимость в Болгарии: 2026, 5 лет и 10 лет'
          : 'Bulgaria Property Price Forecasts: 2026, 5-Year & 10-Year Outlook',
      excerpt:
        i18n.language === 'ru'
          ? 'Цены выросли на 15% в 2025 году. Анализ текущих трендов и прогнозов после вступления в еврозону.'
          : 'Prices grew 15% in 2025. Analysis of current trends and forecasts after euro adoption.',
      image_url: 'https://images.unsplash.com/photo-1758695537300-cc5f7c85a578?w=900&q=80&auto=format&fit=crop',
      date: 'Feb 10, 2026',
      slug: 'bulgaria-price-forecasts',
    },
    {
  title:
    i18n.language === 'ru'
      ? 'Топ-5 прибрежных районов для инвестиций'
      : i18n.language === 'bg'
        ? 'Топ 5 крайбрежни зони за инвестиция'
        : 'Top 5 Coastal Areas for Investment',
  excerpt:
    i18n.language === 'ru'
      ? 'Откройте для себя самые перспективные локации на побережье Чёрного моря...'
      : i18n.language === 'bg'
        ? 'Открийте най-перспективните локации по Черноморието...'
        : 'Discover the most promising locations along the Black Sea coast...',
  image_url:
    'https://images.unsplash.com/photo-1757863842644-87f09cd67010?w=900&q=80&auto=format&fit=crop',
  date: 'Jan 10, 2026',
  slug: 'top-5-areas-in-bulgarian-coast-to-buy',
},
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />

        <div className="container relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>

          <SearchBar />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">{t('home.featured')}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </section>

      {/* Newest Listings */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t('home.newest')}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newestProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Restoration Showcase */}
      <RestorationShowcase />

      {/* Team / Founders */}
      <Team />

      {/* Popular Regions */}
      <section className="py-16 container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{t('home.popularRegions')}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: 'Sofia',
              image: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=400&q=80',
              count: 1250,
            },
            {
              name: 'Varna',
              image: 'https://images.unsplash.com/photo-1599737956238-a5417f68d5e6?w=400&q=80',
              count: 890,
            },
            {
              name: 'Plovdiv',
              image: 'https://images.unsplash.com/photo-1585009545920-d0be2bb9a6b5?w=400&q=80',
              count: 720,
            },
            {
              name: 'Burgas',
              image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
              count: 650,
            },
          ].map((region) => (
            <div
              key={region.name}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={region.image}
                alt={region.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">{region.name}</h3>
                <p className="text-sm text-white/80">{region.count} properties</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Insights & Analysis */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {i18n.language === 'ru' ? 'Аналитика рынка недвижимости' : 'Market Insights & Analysis'}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="group bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  {article.slug ? (
                    <Link
                      to={`/article/${article.slug}`}
                      className="text-primary text-sm font-semibold hover:underline"
                    >
                      {i18n.language === 'ru' ? 'Читать далее →' : 'Read More →'}
                    </Link>
                  ) : (
                    <span className="text-muted-foreground text-sm font-semibold">
                      {i18n.language === 'ru' ? 'Скоро...' : 'Coming soon...'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Videos */}
      <section className="py-16 container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Property Tours & Videos</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Luxury Villa Tour in Varna',
              thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
              duration: '5:30',
            },
            {
              title: 'Modern Apartment in Sofia Center',
              thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
              duration: '3:45',
            },
            {
              title: 'Beachfront Property Showcase',
              thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
              duration: '7:20',
            },
          ].map((video, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
