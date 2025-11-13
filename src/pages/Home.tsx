import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { PropertyCard } from '@/components/PropertyCard';
import { mockProperties } from '@/data/mockProperties';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const { t } = useTranslation();
  
  const featuredProperties = mockProperties.filter(p => p.featured);
  const newestProperties = mockProperties.slice(0, 3);

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

      {/* Popular Regions */}
      <section className="py-16 container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{t('home.popularRegions')}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Sofia', image: 'https://images.unsplash.com/photo-1555990793-da11153b2473?w=400&q=80', count: 1250 },
            { name: 'Varna', image: 'https://images.unsplash.com/photo-1599737956238-a5417f68d5e6?w=400&q=80', count: 890 },
            { name: 'Plovdiv', image: 'https://images.unsplash.com/photo-1585009545920-d0be2bb9a6b5?w=400&q=80', count: 720 },
            { name: 'Burgas', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', count: 650 },
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

      <Footer />
    </div>
  );
};

export default Home;
