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

      {/* Latest News */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Latest News</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Bulgarian Property Market Shows Strong Growth in 2024',
                excerpt: 'The real estate market in Bulgaria continues to attract international investors...',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
                date: 'Jan 15, 2024'
              },
              {
                title: 'Top 5 Coastal Areas for Investment',
                excerpt: 'Discover the most promising locations along the Black Sea coast...',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
                date: 'Jan 10, 2024'
              },
              {
                title: 'New Tax Benefits for Property Buyers',
                excerpt: 'The Bulgarian government announces new incentives for real estate purchases...',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
                date: 'Jan 5, 2024'
              },
            ].map((article, idx) => (
              <div key={idx} className="group bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
                  <button className="text-primary text-sm font-semibold hover:underline">
                    Read More →
                  </button>
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
              duration: '5:30'
            },
            {
              title: 'Modern Apartment in Sofia Center',
              thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
              duration: '3:45'
            },
            {
              title: 'Beachfront Property Showcase',
              thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
              duration: '7:20'
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
                    <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-semibold group-hover:text-primary transition-colors">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
