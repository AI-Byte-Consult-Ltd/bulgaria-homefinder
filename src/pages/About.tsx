import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle, Building2, Users, Award, TrendingUp, Calendar, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Calendar, value: '2011', label: 'Founded' },
    { icon: Building2, value: '500+', label: 'Properties Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: MapPin, value: '15+', label: 'Regions Covered' },
  ];

  const founders = [
    {
      name: 'Alexander Lunin',
      role: 'Co-Founder & AI Architect',
      description: 'Leads AI architecture and Web3 integrations across the NICS AI Ecosystem. Over 15 years of experience in cutting-edge technology and real estate innovation.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      linkedin: 'https://linkedin.com/in/alexander-lunin',
    },
    {
      name: 'Aleksandr Tochilov',
      role: 'Co-Founder & Product Director',
      description: 'Focuses on automation systems, client solutions, and creative ecosystem design. Passionate about turning complex real estate processes into simple solutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      linkedin: 'https://linkedin.com/in/aleksandr-tochilov',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24">
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Established 2011
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Founded by AI Byte Consult Ltd., we have been making success in Bulgarian real estate for over a decade. Our commitment to excellence and innovation sets us apart.
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
                  <p>
                    In 2011, AI Byte Consult Ltd. was founded with a vision to transform the Bulgarian real estate market. What started as a small consultancy has grown into one of the most trusted names in property services across Bulgaria.
                  </p>
                  <p>
                    Over the years, we have helped thousands of clients find their dream homes, make smart investments, and navigate the complexities of the Bulgarian property market. Our deep understanding of local markets, combined with cutting-edge technology, gives our clients an unmatched advantage.
                  </p>
                  <p>
                    Today, we continue to innovate, bringing AI-powered solutions and personalized service to every client relationship. Our success is built on trust, expertise, and an unwavering commitment to our clients' goals.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Modern architecture"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">13+ Years</div>
                      <div className="text-muted-foreground">Of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founders */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Founders</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The visionaries behind AI Byte Consult Ltd.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </div>
                    </a>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-primary font-medium mb-3">{founder.role}</p>
                    <p className="text-muted-foreground">{founder.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
                Our mission is to make Bulgarian real estate accessible, transparent, and rewarding for everyone. We combine local expertise with innovative technology to deliver exceptional results for buyers, sellers, and investors worldwide.
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
                What sets us apart in the Bulgarian real estate market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Expert Local Knowledge', desc: 'Deep understanding of every Bulgarian region, from coastal properties to mountain retreats.' },
                { title: 'Full-Service Support', desc: 'From property search to legal documentation, we handle every step of your journey.' },
                { title: 'Multilingual Team', desc: 'We speak your language – English, German, Russian, Italian, and Bulgarian.' },
                { title: 'Proven Track Record', desc: 'Over 500 successful transactions and counting, with satisfied clients worldwide.' },
                { title: 'Transparent Pricing', desc: 'No hidden fees, clear communication, and honest advice every step of the way.' },
                { title: 'After-Sale Support', desc: 'Our relationship continues after the sale – we\'re here for property management and more.' },
              ].map((item, idx) => (
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
