import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageSEO } from '@/components/PageSEO';
import Team from '@/components/Team';
import { CheckCircle, Building2, Users, Award, TrendingUp, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Calendar, value: '2011', label: t('about.founded') },
    { icon: Building2, value: '500+', label: t('about.propertiesSold') },
    { icon: Users, value: '1000+', label: t('about.happyClients') },
    { icon: MapPin, value: '15+', label: t('about.regionsCovered') },
  ];

  const benefits = [
    { title: t('about.benefit1Title'), desc: t('about.benefit1Desc') },
    { title: t('about.benefit2Title'), desc: t('about.benefit2Desc') },
    { title: t('about.benefit3Title'), desc: t('about.benefit3Desc') },
    { title: t('about.benefit4Title'), desc: t('about.benefit4Desc') },
    { title: t('about.benefit5Title'), desc: t('about.benefit5Desc') },
    { title: t('about.benefit6Title'), desc: t('about.benefit6Desc') },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={t('about.title', 'About Us — Real Estate Experts in Bulgaria')}
        description="BulgariaEstate by AI Byte Consult — since 2011. 500+ properties sold, 1000+ happy clients across 15+ regions. Multilingual real estate agency in Bulgaria."
        path="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24">
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              {t('about.established')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('about.heroDescription')}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('about.ourStory')}
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>{t('about.storyP1')}</p>
                  <p>{t('about.storyP2')}</p>
                  <p>{t('about.storyP3')}</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Modern glass office building representing AI Byte Consult real estate expertise in Bulgaria"
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">13+</div>
                      <div className="text-muted-foreground">{t('about.yearsOfExcellence')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founders */}
        <Team />

        {/* Our Mission */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('about.ourMission')}
              </h2>
            </div>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border rounded-2xl p-8 md:p-12">
              <p className="text-xl text-center leading-relaxed">
                {t('about.missionStatement')}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('about.whyChooseUs')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('about.whyChooseUsSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-card p-6 rounded-xl border">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;