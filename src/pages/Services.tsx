import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, FileText, Hammer, PenTool, Users, Zap, Home, Search, Scale, Briefcase } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      title: t('services.companyRegistration'),
      description: t('services.companyRegistrationDesc'),
      price: '€500',
      badge: 'fixed',
    },
    {
      icon: FileText,
      title: t('services.documentTranslation'),
      description: t('services.documentTranslationDesc'),
      price: '€95',
      badge: 'per document',
    },
    {
      icon: Hammer,
      title: t('services.restoration'),
      description: t('services.restorationDesc'),
      price: '10%',
      badge: 'of project',
    },
    {
      icon: PenTool,
      title: t('services.houseDesign'),
      description: t('services.houseDesignDesc'),
      price: t('services.from') + ' €500',
      badge: 'starting',
    },
    {
      icon: Users,
      title: t('services.governmentRepresentation'),
      description: t('services.governmentRepresentationDesc'),
      price: t('services.from') + ' €50',
      badge: 'per hour',
    },
    {
      icon: Zap,
      title: t('services.utilityTransfer'),
      description: t('services.utilityTransferDesc'),
      price: '€100',
      badge: 'per case',
    },
    {
      icon: Search,
      title: t('services.propertySearch'),
      description: t('services.propertySearchDesc'),
      price: '3.6%',
      badge: 'min €1,000',
    },
    {
      icon: Scale,
      title: t('services.legalConsultation'),
      description: t('services.legalConsultationDesc'),
      price: t('services.from') + ' €80',
      badge: 'per hour',
    },
    {
      icon: Home,
      title: t('services.propertyManagement'),
      description: t('services.propertyManagementDesc'),
      price: '8%',
      badge: 'monthly rent',
    },
    {
      icon: Briefcase,
      title: t('services.dueDiligence'),
      description: t('services.dueDiligenceDesc'),
      price: t('services.from') + ' €300',
      badge: 'per property',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{t('services.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{service.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">{t('services.ctaTitle')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('services.ctaDescription')}
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t('services.contactUs')}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
