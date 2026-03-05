import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Building2, FileText, Handshake, MessageSquare, Shield, Plus, Clock, CheckCircle2 } from 'lucide-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

interface ServiceItem {
  name: string;
  price: string;
  includes?: string[];
  extras?: string[];
  time?: string;
}

interface PriceSection {
  icon: React.ElementType;
  title: string;
  services: ServiceItem[];
}

const ServiceRow = ({ service }: { service: ServiceItem }) => (
  <div className="group rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-200 hover:shadow-[var(--card-shadow-hover)] hover:border-primary/30">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
      <div className="flex-1 min-w-0 space-y-2">
        <h4 className="text-base sm:text-lg font-semibold text-foreground leading-tight">{service.name}</h4>
        {service.includes && service.includes.length > 0 && (
          <ul className="space-y-1.5">
            {service.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        {service.extras && service.extras.length > 0 && (
          <div className="space-y-1">
            {service.extras.map((extra, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Plus className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                <span>{extra}</span>
              </div>
            ))}
          </div>
        )}
        {service.time && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{service.time}</span>
          </div>
        )}
      </div>
      <div className="sm:text-right shrink-0">
        <span className="inline-block text-xl sm:text-2xl font-bold text-primary">{service.price}</span>
      </div>
    </div>
  </div>
);

const PriceSectionBlock = ({ section, index }: { section: PriceSection; index: number }) => {
  const Icon = section.icon;
  return (
    <section className="scroll-mt-24" id={`section-${index}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">{section.title}</h2>
      </div>
      <div className="space-y-3">
        {section.services.map((service, i) => (
          <ServiceRow key={i} service={service} />
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useTranslation();

  const sections: PriceSection[] = [
    {
      icon: Building2,
      title: t('pricelist.section1Title'),
      services: [
        {
          name: t('pricelist.eood'),
          price: '€255',
          includes: [t('pricelist.eoodIncludes')],
          time: t('pricelist.eoodTime'),
        },
        {
          name: t('pricelist.ood'),
          price: '€285',
          includes: [t('pricelist.oodIncludes')],
          extras: [t('pricelist.oodExtra')],
          time: t('pricelist.oodTime'),
        },
        {
          name: t('pricelist.bankAccount'),
          price: '€75',
          time: t('pricelist.bankAccountTime'),
        },
        {
          name: t('pricelist.legalConsultCompany'),
          price: '€25 / 30 min',
        },
      ],
    },
    {
      icon: FileText,
      title: t('pricelist.section2Title'),
      services: [
        {
          name: t('pricelist.tradeRep'),
          price: '€1,150',
          includes: [
            t('pricelist.tradeRepInclude1'),
            t('pricelist.tradeRepInclude2'),
            t('pricelist.tradeRepInclude3'),
          ],
          extras: [t('pricelist.tradeRepExtra')],
          time: t('pricelist.tradeRepTime'),
        },
      ],
    },
    {
      icon: Handshake,
      title: t('pricelist.section3Title'),
      services: [
        {
          name: t('pricelist.simpleContract'),
          price: '€75',
          includes: [t('pricelist.simpleContractExamples')],
          time: t('pricelist.simpleContractTime'),
        },
        {
          name: t('pricelist.standardContract'),
          price: '€125',
          includes: [t('pricelist.standardContractExamples')],
          time: t('pricelist.standardContractTime'),
        },
        {
          name: t('pricelist.complexContract'),
          price: '€155',
          includes: [t('pricelist.complexContractExamples')],
          time: t('pricelist.complexContractTime'),
        },
      ],
    },
    {
      icon: MessageSquare,
      title: t('pricelist.section4Title'),
      services: [
        {
          name: t('pricelist.businessConsulting'),
          price: '€25 / 30 min',
        },
        {
          name: t('pricelist.legalConsultation'),
          price: '€25 / 30 min',
        },
      ],
    },
    {
      icon: Shield,
      title: t('pricelist.section5Title'),
      services: [
        {
          name: t('pricelist.monthlyLegal'),
          price: '€195 / mo',
          includes: [
            t('pricelist.monthlyLegalInclude1'),
            t('pricelist.monthlyLegalInclude2'),
            t('pricelist.monthlyLegalInclude3'),
          ],
          extras: [t('pricelist.monthlyLegalExtra')],
        },
      ],
    },
    {
      icon: Plus,
      title: t('pricelist.section6Title'),
      services: [
        {
          name: t('pricelist.registeredAddress'),
          price: t('pricelist.individual'),
        },
        {
          name: t('pricelist.docTranslation'),
          price: '€75',
        },
        {
          name: t('pricelist.docLegalization'),
          price: '€75',
        },
        {
          name: t('pricelist.additionalCorpDocs'),
          price: t('pricelist.individual'),
        },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NIC Services Bulgaria",
    "description": "Professional legal, corporate, and consulting services in Bulgaria",
    "areaServed": "Bulgaria",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal & Corporate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "EOOD Company Registration",
          "price": "255",
          "priceCurrency": "EUR",
        },
        {
          "@type": "Offer",
          "name": "OOD Company Registration",
          "price": "285",
          "priceCurrency": "EUR",
        },
        {
          "@type": "Offer",
          "name": "Trade Representation Office Registration",
          "price": "1150",
          "priceCurrency": "EUR",
        },
        {
          "@type": "Offer",
          "name": "Monthly Legal Support",
          "price": "195",
          "priceCurrency": "EUR",
        },
      ],
    },
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Price List — Legal & Corporate Services in Bulgaria</title>
          <meta name="description" content="Professional legal services in Bulgaria: company registration from €255, contract drafting from €75, legal consultations €25/30min. Transparent pricing." />
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>

        <Header />

        {/* Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container text-center space-y-4 max-w-3xl">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-1">
              {t('pricelist.badge')}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t('pricelist.heroTitle')}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              {t('pricelist.heroSubtitle')}
            </p>
          </div>
        </section>

        {/* Price List */}
        <section className="py-12 sm:py-16">
          <div className="container max-w-4xl space-y-12">
            {sections.map((section, index) => (
              <div key={index}>
                <PriceSectionBlock section={section} index={index} />
                {index < sections.length - 1 && <Separator className="mt-12" />}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center space-y-6 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t('pricelist.ctaTitle')}</h2>
            <p className="text-muted-foreground">
              {t('pricelist.ctaDescription')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t('pricelist.ctaButton')}
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Services;
