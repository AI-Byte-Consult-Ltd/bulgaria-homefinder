import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/PageSEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { PropertyCard } from '@/components/PropertyCard';
import { RestorationShowcase } from '@/components/RestorationShowcase';
import { DocumentGenerator } from '@/components/DocumentGenerator';
import Team from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { PropertyCarousel, PropertyCarouselItem } from '@/components/PropertyCarousel';
import { mockProperties } from '@/data/mockProperties';
import heroImage from '@/assets/hero-bg.jpg';
import { RegionsCarousel } from '@/components/RegionsCarousel';

/**
 * Главная страница, включающая поиск, избранные и новые объявления,
 * популярные регионы, команду, видеоролики и динамическую ленту новостей.
 */
const Home = () => {
  const { t, i18n } = useTranslation();

  const lang = (i18n.language || 'en').split('-')[0];

  const featuredProperties = mockProperties.filter((p) => p.featured).slice(0, 10);
  const newestProperties = [...mockProperties].reverse().slice(0, 10);

  // Static articles data (5 languages, fallback to existing text when missing)
  const articles = [
    {
  title:
    lang === 'bg'
      ? 'ВНЖ за цифрови номади в България 2026: пълно ръководство за получаване'
      : lang === 'ru'
        ? 'ВНЖ для цифровых кочевников в Болгарии 2026: исчерпывающее руководство по получению'
        : lang === 'de'
          ? 'Aufenthaltserlaubnis für digitale Nomaden in Bulgarien 2026: Vollständiger Leitfaden'
          : lang === 'it'
            ? 'Permesso di soggiorno per nomadi digitali in Bulgaria 2026: guida completa'
            : 'Bulgaria Digital Nomad Visa 2026: Complete Guide to Obtaining Residence Permit',
  excerpt:
    lang === 'bg'
      ? 'Правна база, категории кандидати, доход €31 000/год., документи за виза D и ВНЖ, апостил, събиране на семейство, данък 10% и шенгенски достъп — актуализирано март 2026.'
      : lang === 'ru'
        ? 'Правовая база, категории заявителей, доход €31 000/год, документы для визы D и ВНЖ, апостиль, воссоединение семьи, налог 10% и шенгенский доступ — обновлено март 2026.'
        : lang === 'de'
          ? 'Rechtsgrundlage, Antragskategorien, Einkommen €31.000/Jahr, Dokumente für Visum D und Aufenthaltserlaubnis, Apostille, Familiennachzug, 10% Steuer und Schengen-Zugang — aktualisiert März 2026.'
          : lang === 'it'
            ? 'Base giuridica, categorie di richiedenti, reddito €31.000/anno, documenti per visto D e permesso di soggiorno, apostille, ricongiungimento familiare, imposta 10% e accesso Schengen — aggiornato marzo 2026.'
            : 'Legal basis, applicant categories, €31,000/year income threshold, Visa D and residence permit documents, apostille, family reunification, 10% tax and Schengen access — updated March 2026.',
  image_url: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80',
  date:
    lang === 'bg'
      ? '14 март 2026'
      : lang === 'ru'
        ? '14 марта 2026'
        : lang === 'de'
          ? '14. März 2026'
          : lang === 'it'
            ? '14 marzo 2026'
            : 'Mar 14, 2026',
  author:
    lang === 'bg'
      ? 'Александър Лунин'
      : lang === 'ru'
        ? 'Александр Лунин'
        : 'Alexander Lunin',
  slug: 'bulgaria-digital-nomad-visa-2026',
},
{
  title:
    lang === 'bg'
      ? 'Осигуровки в България 2026: кой плаща, колко и как се изчисляват — в евро'
      : lang === 'ru'
        ? 'Осигуровки в Болгарии 2026: кто платит, сколько и как рассчитывать — в евро'
        : lang === 'de'
          ? 'Sozialversicherung in Bulgarien 2026: Wer zahlt, wie viel und wie wird gerechnet — in Euro'
          : lang === 'it'
            ? 'Contributi previdenziali in Bulgaria 2026: chi paga, quanto e come si calcolano — in euro'
            : 'Social Insurance Contributions in Bulgaria 2026: Who Pays, How Much, and How to Calculate — In Euro',
  excerpt:
    lang === 'bg'
      ? 'Осигурителни ставки, самоосигуряване, управител със и без заплата, здравни вноски и практически примери в евро — актуализирано 2026.'
      : lang === 'ru'
        ? 'Ставки осигуровок, самоосигуряване, управитель с зарплатой и без, здравные взносы и практические примеры в евро — обновлено 2026.'
        : lang === 'de'
          ? 'Beitragssätze, Selbstversicherung, Geschäftsführer mit und ohne Gehalt, Krankenversicherung und Praxisbeispiele in Euro — aktualisiert 2026.'
          : lang === 'it'
            ? 'Aliquote contributive, lavoro autonomo, amministratore con o senza stipendio, assicurazione sanitaria ed esempi pratici in euro — aggiornato 2026.'
            : 'Contribution rates, self-insurance, manager with or without salary, health insurance, and practical examples in euro — updated 2026.',
  image_url: 'https://ipfs.io/ipfs/bafybeiao2vgs2fim3ry5zmxga4z7fcvpknrnjodyrs47yfpbambfmdbnmm',
  date:
    lang === 'bg'
      ? '7 март 2026'
      : lang === 'ru'
        ? '7 марта 2026'
        : lang === 'de'
          ? '7. März 2026'
          : lang === 'it'
            ? '7 marzo 2026'
            : 'Mar 7, 2026',
  slug: 'bulgaria-social-insurance-2026',
},
{
  title:
    lang === 'bg'
      ? 'Как граждани на Украйна могат да открият банкова сметка за регистрация на фирма в България през 2026 г.'
      : lang === 'ru'
        ? 'Как гражданам Украины открыть банковский счёт для регистрации компании в Болгарии в 2026 году'
        : lang === 'de'
          ? 'Wie ukrainische Staatsbürger 2026 ein Bankkonto zur Firmengründung in Bulgarien eröffnen'
          : lang === 'it'
            ? 'Come i cittadini ucraini possono aprire un conto bancario per registrare una società in Bulgaria nel 2026'
            : 'How Ukrainian Citizens Can Open a Bank Account to Register a Company in Bulgaria in 2026',
  excerpt:
    lang === 'bg'
      ? 'Набирателна сметка, банкови изисквания, срокове, такси и анализ на банки в България — актуализирано 2026.'
      : lang === 'ru'
        ? 'Набирательная сметка, требования банков, сроки, стоимость и анализ банков в Болгарии — обновлено 2026.'
        : lang === 'de'
          ? 'Nabiratelna-Konto, Bankanforderungen, Kosten, Fristen und Bankenvergleich in Bulgarien — aktualisiert 2026.'
          : lang === 'it'
            ? 'Nabiratelna smetka, requisiti bancari, costi, tempistiche e confronto tra banche in Bulgaria — aggiornato 2026.'
            : 'Nabiratelna account, Bulgarian bank requirements, costs, timelines, and bank comparison — updated 2026.',
  image_url: 'https://ipfs.io/ipfs/bafybeia5yab2t4k2sv2sbb5jqnbz2hgeghq66jndnsw5c3ooia43ucancu',
  date:
    lang === 'bg'
      ? '28 февруари 2026'
      : lang === 'ru'
        ? '28 февраля 2026'
        : lang === 'de'
          ? '28. Februar 2026'
          : lang === 'it'
            ? '28 febbraio 2026'
            : 'Feb 28, 2026',
  slug: 'ukraine-bank-account-bulgaria-2026',
},
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
        lang === 'bg'
          ? '21 февруари 2026'
          : lang === 'ru'
            ? '21 февраля 2026'
            : lang === 'de'
              ? '21. Februar 2026'
              : lang === 'it'
                ? '21 febbraio 2026'
                : 'Feb 21, 2026',
      slug: 'bulgaria-property-taxes-2026',
    },
    {
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
      date:
        lang === 'bg'
          ? '20 февруари 2026'
          : lang === 'ru'
            ? '20 февраля 2026'
            : lang === 'de'
              ? '20. Februar 2026'
              : lang === 'it'
                ? '20 febbraio 2026'
                : 'Feb 20, 2026',
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
      image_url: 'https://ipfs.io/ipfs/bafybeibgzot364jw3ajiqptptaqqmx3gdfe7ockdfsznn3po5amrdvvb3a',
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

    return { ...property, image: first };
  };

  const featuredForCards = featuredProperties.map(withCardImage);
  const newestForCards = newestProperties.map(withCardImage);

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={t('home.heroTitle', 'Buy, Sell & Rent Property in Bulgaria')}
        description="Find apartments, houses, villas and commercial property in Bulgaria. Legal services, company registration, certified translations. Multilingual: EN, RU, BG, DE, IT."
        path="/"
      />
      <Header />

      {/* Hero Section — clean Apple-style */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--hero-gradient)' }} />

        <div className="container relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
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

        <PropertyCarousel>
          {featuredForCards.map((property) => (
            <PropertyCarouselItem key={property.id}>
              <PropertyCard {...property} />
            </PropertyCarouselItem>
          ))}
        </PropertyCarousel>
      </section>

      {/* Newest Listings */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t('home.newest')}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <Link
              to="/properties"
              className="text-primary hover:underline text-sm font-semibold"
            >
              {t('common.viewAll', 'View All')} →
            </Link>
          </div>

          <PropertyCarousel>
            {newestForCards.map((property) => (
              <PropertyCarouselItem key={property.id}>
                <PropertyCard {...property} />
              </PropertyCarouselItem>
            ))}
          </PropertyCarousel>
        </div>
      </section>

      {/* AI Document Generator */}
      <DocumentGenerator />

      {/* Restoration Showcase */}
      <RestorationShowcase />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Team / Founders */}
      <Team />

      {/* Popular Regions */}
      <RegionsCarousel />

      {/* Market Insights & Analysis */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {t('common.marketInsights')}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <PropertyCarousel>
            {articles.map((article, idx) => (
              <PropertyCarouselItem key={idx}>
                <div className="group bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image_url}
                      alt={`Article: ${article.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
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
                        {t('common.readMore')}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground text-sm font-semibold">
                        {t('common.comingSoon')}
                      </span>
                    )}
                  </div>
                </div>
              </PropertyCarouselItem>
            ))}
          </PropertyCarousel>
        </div>
      </section>

      {/* Property Videos */}
      <section className="py-16 container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
              {t('common.propertyTours')}
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
                  alt={`Video thumbnail: ${video.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
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