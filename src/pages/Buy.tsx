import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageSEO } from '@/components/PageSEO';
import { PropertyCard } from '@/components/PropertyCard';
import { mockProperties } from '@/data/mockProperties';
import { SearchBar } from '@/components/SearchBar';

const Buy = () => {
  const { t } = useTranslation();
  const forSaleProperties = mockProperties.filter(p => p.transactionType === 'sale');

  const withCardImage = (property: any) => {
    const image = (property.images?.length ? property.images[0] : property.image) || '/placeholder.svg';
    return { ...property, image };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={t('buy.title', 'Buy Property in Bulgaria')}
        description="Browse apartments, houses, villas and land for sale in Bulgaria. Find your dream property in Sofia, Varna, Burgas, Sunny Beach and the Black Sea coast."
        path="/buy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Buy', url: '/buy' },
        ]}
      />
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              {t('nav.buy')}
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <SearchBar />
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {t('common.results')}: {forSaleProperties.length}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forSaleProperties.map(withCardImage).map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Buy;
