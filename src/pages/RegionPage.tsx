import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageSEO } from '@/components/PageSEO';
import { regions } from '@/data/regions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Home, ArrowLeft } from 'lucide-react';

const RegionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const currentLang = ['en', 'bg', 'ru', 'de', 'it'].includes(lang) ? lang : 'en';

  const region = regions.find((r) => r.slug === slug);

  if (!region) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Region not found</h1>
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const name = region.name[currentLang] || region.name.en;
  const content = region.content[currentLang] || region.content.en;
  const highlights = region.highlights[currentLang] || region.highlights.en;

  // Render markdown-like content with bold sections
  const renderContent = (text: string) => {
    return text.split('\n\n').map((paragraph, i) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n');
        return (
          <ul key={i} className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            {items.map((item, j) => (
              <li key={j}>{item.replace(/^- /, '')}</li>
            ))}
          </ul>
        );
      }
      // Handle bold within paragraphs
      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={j} className="text-foreground font-semibold">
                {part.replace(/\*\*/g, '')}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={`${name} — Real Estate & Property Guide | Bulgaria HomeFinder`}
        description={region.excerpt[currentLang] || region.excerpt.en}
        path={`/regions/${slug}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: name, url: `/regions/${slug}` },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={region.heroImage}
          alt={`${name}, Bulgaria — real estate and property`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">
                {currentLang === 'bg' ? 'Начало' : currentLang === 'ru' ? 'Главная' : currentLang === 'de' ? 'Startseite' : currentLang === 'it' ? 'Home' : 'Home'}
              </span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{name}</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {region.excerpt[currentLang] || region.excerpt.en}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">{renderContent(content)}</div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Highlights */}
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  {currentLang === 'bg' ? 'Предимства' : currentLang === 'ru' ? 'Преимущества' : currentLang === 'de' ? 'Vorteile' : currentLang === 'it' ? 'Vantaggi' : 'Highlights'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((h, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {h}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Property Count */}
              <div className="bg-card rounded-xl p-6 border">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  {currentLang === 'bg' ? 'Имоти' : currentLang === 'ru' ? 'Недвижимость' : currentLang === 'de' ? 'Immobilien' : currentLang === 'it' ? 'Proprietà' : 'Properties'}
                </h3>
                <p className="text-3xl font-bold text-primary">{region.propertyCount.toLocaleString()}+</p>
                <p className="text-muted-foreground text-sm mt-1">
                  {currentLang === 'bg' ? 'налични обяви' : currentLang === 'ru' ? 'доступных объявлений' : currentLang === 'de' ? 'verfügbare Angebote' : currentLang === 'it' ? 'annunci disponibili' : 'listings available'}
                </p>
              </div>

              {/* Search CTA */}
              <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h3 className="font-semibold mb-2">
                  <MapPin className="h-5 w-5 text-primary inline mr-2" />
                  {currentLang === 'bg' ? 'Търсете имоти' : currentLang === 'ru' ? 'Искать недвижимость' : currentLang === 'de' ? 'Immobilien suchen' : currentLang === 'it' ? 'Cerca proprietà' : 'Search Properties'}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {currentLang === 'bg'
                    ? `Открийте имоти в ${name}`
                    : currentLang === 'ru'
                      ? `Найдите недвижимость в ${name}`
                      : currentLang === 'de'
                        ? `Finden Sie Immobilien in ${name}`
                        : currentLang === 'it'
                          ? `Scopri proprietà a ${name}`
                          : `Find properties in ${name}`}
                </p>
                <Link to={`/properties?location=${encodeURIComponent(region.name.en)}`}>
                  <Button className="w-full">
                    {currentLang === 'bg' ? 'Разгледай' : currentLang === 'ru' ? 'Смотреть' : currentLang === 'de' ? 'Ansehen' : currentLang === 'it' ? 'Sfoglia' : 'Browse'}
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegionPage;
