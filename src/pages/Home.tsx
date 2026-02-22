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

  const lang = (i18n.language || 'en').split('-')[0];

  const featuredProperties = mockProperties.filter((p) => p.featured);
  const newestProperties = mockProperties.slice(0, 3);

  // Static articles data (5 languages, fallback to existing text when missing)
  const articles = [
    {
  title:
    lang === 'bg'
      ? 'Данъци върху имотите в България 2026: Пълно ръководство за Sofia, Бургас, Варна, Слънчев бряг и курортите'
      : lang === 'ru'
      ? 'Налоги на недвижимость в Болгарии 2026: Полное руководство для Софии, Бургаса, Варны, Черноморья и курортов'
      : lang === 'de'
      ? 'Immobiliensteuern in Bulgarien 2026: Vollständiger Leitfaden für Sofia, Burgas, Varna und die Resorts'
      : lang === 'it'
      ? 'Tasse sugli immobili in Bulgaria 2026: Guida completa per Sofia, Burgas, Varna e le località turistiche'
      : 'Property Taxes in Bulgaria 2026: Complete Guide for Sofia, Burgas, Varna, the Black Sea Coast & Mountain Resorts',
  excerpt:
    lang === 'bg'
      ? 'Годишни данъчни ставки, такси за смет, данък върху наемен доход и сравнение по градове — актуализирано февруари 2026.'
      : lang === 'ru'
      ? 'Ставки ежегодного налога, сборы за вывоз мусора, налог на арендный доход и сравнение по городам — обновлено февраль 2026.'
      : lang === 'de'
      ? 'Jährliche Steuersätze, Abfallgebühren, Mieteinkommensteuer und Städtevergleich — aktualisiert Februar 2026.'
      : lang === 'it'
      ? 'Aliquote annuali, tasse sui rifiuti, tassazione dei redditi da locazione e confronto per città — aggiornato febbraio 2026.'
      : 'Annual tax rates, garbage fees, rental income tax, and city-by-city comparison — updated February 2026.',
  image_url: 'https://ipfs.io/ipfs/bafybeiarxej25ipcdazsrji3el5ruie7vhiqrlpguowrrsiehj67sjnfnm',
  date:
    lang === 'bg' ? '21 февруари 2026'
    : lang === 'ru' ? '21 февраля 2026'
    : lang === 'de' ? '21. Februar 2026'
    : lang === 'it' ? '21 febbraio 2026'
    : 'Feb 21, 2026',
  slug: 'bulgaria-property-taxes-2026',
},{
      title:
        lang === 'bg'
          ? 'Покупка на имот в България през 2026 г.: 7 грешки, които струват на купувачите десетки хиляди евро'
          : lang === 'ru'
            ? 'Покупка недвижимости в Болгарии в 2026 году: 7 ошибок, которые стоят покупателям десятки тысяч евро'
            : lang === 'de'
              ? 'Immobilienkauf in Bulgarien 2026: 7 Fehler, die Käufer Zehntausende Euro kosten'
              : lang === 'it'
                ? 'Acquistare casa in Bulgaria nel 2026: 7 errori che possono costare decine di migliaia di euro'
                : 'Buying Property in Bulgaria in 2026: 7 Mistakes That Cost Buyers Tens of Thousands of Euros',
      excerpt:
        lang === 'bg'
          ? 'Пазарът на недвижими имоти в България остава един от най-достъпните в ЕС. Разглеждаме най-честите грешки на купувачите.'
          : lang === 'ru'
            ? 'Рынок недвижимости Болгарии остаётся одним из самых доступных в Евросоюзе. Разберём самые распространённые ошибки покупателей.'
            : lang === 'de'
              ? 'Der bulgarische Immobilienmarkt bleibt einer der erschwinglichsten in der EU. Wir analysieren die häufigsten Käuferfehler.'
              : lang === 'it'
                ? "Il mercato immobiliare in Bulgaria resta tra i più accessibili nell'UE. Analizziamo gli errori più comuni degli acquirenti."
                : "Bulgaria's real estate market remains one of the most affordable in the EU. We analyze the most common buyer mistakes.",
      image_url:
        'https://images.unsplash.com/photo-1635328471471-28dd69a0cb3e?w=1600&q=80&auto=format&fit=crop',
      date: 'Feb 5, 2026',
      slug: 'buying-mistakes-2026',
    },
    {
      title:
        lang === 'bg'
          ? 'Прогноза за цените на имотите в България: 2026, 5 и 10 години'
          : lang === 'ru'
            ? 'Прогноз цен на недвижимость в Болгарии: 2026, 5 лет и 10 лет'
            : lang === 'de'
              ? 'Prognose der Immobilienpreise in Bulgarien: 2026, 5 Jahre & 10 Jahre'
              : lang === 'it'
                ? 'Previsioni dei prezzi immobiliari in Bulgaria: 2026, 5 anni e 10 anni'
                : 'Bulgaria Property Price Forecasts: 2026, 5-Year & 10-Year Outlook',
      excerpt:
        lang === 'bg'
          ? 'Цените нараснаха с 15% през 2025 г. Анализ на текущите тенденции и прогнози след приемането на еврото.'
          : lang === 'ru'
            ? 'Цены выросли на 15% в 2025 году. Анализ текущих трендов и прогнозов после вступления в еврозону.'
            : lang === 'de'
              ? 'Die Preise stiegen 2025 um 15 %. Analyse aktueller Trends und Prognosen nach der Euro-Einführung.'
              : lang === 'it'
                ? "I prezzi sono cresciuti del 15% nel 2025. Analisi delle tendenze attuali e previsioni dopo l'adozione dell'euro."
                : 'Prices grew 15% in 2025. Analysis of current trends and forecasts after euro adoption.',
      image_url:
        'https://images.unsplash.com/photo-1758695537300-cc5f7c85a578?w=900&q=80&auto=format&fit=crop',
      date: 'Feb 18, 2026',
      slug: 'bulgaria-price-forecasts',
    },
    {
      title:
        lang === 'bg'
          ? 'Топ 5 крайбрежни зони за инвестиция'
          : lang === 'ru'
            ? 'Топ-5 прибрежных районов для инвестиций'
            : lang === 'de'
              ? 'Top 5 Küstenregionen für Investments'
              : lang === 'it'
                ? 'Top 5 zone costiere per investire'
                : 'Top 5 Coastal Areas for Investment',
      excerpt:
        lang === 'bg'
          ? 'Открийте най-перспективните локации по Черноморието...'
          : lang === 'ru'
            ? 'Откройте для себя самые перспективные локации на побережье Чёрного моря...'
            : lang === 'de'
              ? 'Entdecken Sie die vielversprechendsten Standorte entlang der Schwarzmeerküste...'
              : lang === 'it'
                ? 'Scopri le località più promettenti lungo la costa del Mar Nero...'
                : 'Discover the most promising locations along the Black Sea coast...',
      image_url:
        'https://images.unsplash.com/photo-1757863842644-87f09cd67010?w=900&q=80&auto=format&fit=crop',
      date: 'Jan 10, 2026',
      slug: 'top-5-areas-in-bulgarian-coast-to-buy',
    },
    {
      title:
        lang === 'bg'
          ? 'Защо България е още 2 пъти по-евтина от средното в ЕС - и защо тази възможност няма да трае вечно'
          : lang === 'ru'
            ? 'Почему Болгария всё ещё в 2 раза дешевле среднего по ЕС - и почему это окно не будет открыто вечно'
            : lang === 'de'
              ? 'Warum Bulgarien noch immer 2x günstiger ist als der EU-Durchschnitt - und warum dieses Fenster nicht für immer offen bleibt'
              : lang === 'it'
                ? "Perché la Bulgaria è ancora 2 volte più economica rispetto alla media UE - e perché questa finestra non resterà aperta per sempre"
                : "Why Bulgaria Is Still 2x Cheaper Than the EU Average - And Why That Window Won't Stay Open Forever",
      excerpt:
        lang === 'bg'
          ? 'Структурните причини зад ценовата разлика на България, какво промени еврото и защо 2026 г. може да е последната година за влизане по сегашните цени.'
          : lang === 'ru'
            ? 'Структурные причины ценового разрыва Болгарии, что изменило евро и почему 2026 год может быть последним для входа по сегодняшним ценам.'
            : lang === 'de'
              ? 'Die strukturellen Gründe für Bulgariens Preislücke, was die Euro-Einführung ändert und warum 2026 das letzte Jahr für einen Einstieg zu heutigen Preisen sein könnte.'
              : lang === 'it'
                ? "Le ragioni strutturali del divario di prezzo bulgaro, cosa cambia con l'euro e perché il 2026 potrebbe essere l'ultimo anno per entrare alle valutazioni attuali."
                : "A professional market analysis: the structural reasons behind Bulgaria's price gap, what euro adoption changes, and why 2026 may be the last year to enter at today's valuations.",
      image_url:
        'https://ipfs.io/ipfs/bafybeibgzot364jw3ajiqptptaqqmx3gdfe7ockdfsznn3po5amrdvvb3a',
      date: 'Feb 18, 2026',
      slug: 'bulgaria-cheaper-than-eu',
    },
  ];

  /**
   * Normalize property so main page always has a valid "image" for PropertyCard:
   * - Prefer images[0] (new model)
   * - Fallback to image (old model)
   * - Fallback to placeholder
   */
  const withCardImage = (property: any) => {
    const first =
      (property.images && Array.isArray(property.images) && property.images.length > 0
        ? property.images[0]
        : property.image) || '/placeholder.jpg';

    // Keep original fields, but force image for cards
    return { ...property, image: first };
  };

  const featuredForCards = featuredProperties.map(withCardImage);
  const newestForCards = newestProperties.map(withCardImage);

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
          {featuredForCards.map((property) => (
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
            {newestForCards.map((property) => (
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
              image:
                'https://ipfs.io/ipfs/bafkreiea6o2c55kfvx2fjnmcvnavgsczabglkrf247uwipuk7a2u6auwcu',
              count: 1250,
            },
            {
              name: 'Varna',
              image:
                'https://ipfs.io/ipfs/bafkreig7ca34ikjb7dsovmdxqrt3om5eoufroninc7je4gxyncgl4eqs3u',
              count: 890,
            },
            {
              name: 'Plovdiv',
              image:
                'https://ipfs.io/ipfs/bafkreibpxnb7dm65uqczaqwwbxtkrp6j6ayhmwloa7hcwjoati6fvdaofm',
              count: 720,
            },
            {
              name: 'Burgas',
              image:
                'https://ipfs.io/ipfs/bafybeictkyibpglu2nyov65unvnxjrx52oq33wg2rp63uhrcezrt3rvfom',
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
                <p className="text-sm text-white/80">
                  {region.count}{' '}
                  {lang === 'bg'
                    ? 'имота'
                    : lang === 'ru'
                      ? 'объектов'
                      : lang === 'de'
                        ? 'Objekte'
                        : lang === 'it'
                          ? 'immobili'
                          : 'properties'}
                </p>
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
              {lang === 'bg'
                ? 'Пазарни анализи и тенденции'
                : lang === 'ru'
                  ? 'Аналитика рынка недвижимости'
                  : lang === 'de'
                    ? 'Marktanalysen & Einblicke'
                    : lang === 'it'
                      ? 'Analisi e tendenze di mercato'
                      : 'Market Insights & Analysis'}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      {lang === 'bg'
                        ? 'Прочети още →'
                        : lang === 'ru'
                          ? 'Читать далее →'
                          : lang === 'de'
                            ? 'Mehr lesen →'
                            : lang === 'it'
                              ? 'Leggi di più →'
                              : 'Read More →'}
                    </Link>
                  ) : (
                    <span className="text-muted-foreground text-sm font-semibold">
                      {lang === 'bg'
                        ? 'Скоро...'
                        : lang === 'ru'
                          ? 'Скоро...'
                          : lang === 'de'
                            ? 'Demnächst...'
                            : lang === 'it'
                              ? 'In arrivo...'
                              : 'Coming soon...'}
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
          <h2 className="text-3xl font-bold mb-2">
            {lang === 'bg'
              ? 'Видео обиколки и турове'
              : lang === 'ru'
                ? 'Видео-обзоры и туры объектов'
                : lang === 'de'
                  ? 'Immobilien-Touren & Videos'
                  : lang === 'it'
                    ? 'Tour immobiliari e video'
                    : 'Property Tours & Videos'}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title:
                lang === 'bg'
                  ? 'Обиколка на луксозна вила във Варна'
                  : lang === 'ru'
                    ? 'Тур по люкс-вилле в Варне'
                    : lang === 'de'
                      ? 'Tour durch eine Luxusvilla in Varna'
                      : lang === 'it'
                        ? 'Tour di una villa di lusso a Varna'
                        : 'Luxury Villa Tour in Varna',
              thumbnail:
                'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
              duration: '5:30',
            },
            {
              title:
                lang === 'bg'
                  ? 'Модерен апартамент в центъра на София'
                  : lang === 'ru'
                    ? 'Современные апартаменты в центре Софии'
                    : lang === 'de'
                      ? 'Moderne Wohnung im Zentrum von Sofia'
                      : lang === 'it'
                        ? 'Appartamento moderno nel centro di Sofia'
                        : 'Modern Apartment in Sofia Center',
              thumbnail:
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
              duration: '3:45',
            },
            {
              title:
                lang === 'bg'
                  ? 'Представяне на имот на първа линия'
                  : lang === 'ru'
                    ? 'Обзор недвижимости на первой линии'
                    : lang === 'de'
                      ? 'Präsentation einer Immobilie direkt am Strand'
                      : lang === 'it'
                        ? 'Presentazione di una proprietà fronte mare'
                        : 'Beachfront Property Showcase',
              thumbnail:
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
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