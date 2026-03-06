import { useTranslation } from 'react-i18next';
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Building2,
  FileText,
  Handshake,
  MessageSquare,
  Shield,
  Plus,
  Clock,
  CheckCircle2,
  Home,
  Umbrella,
} from 'lucide-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

interface ServiceItem {
  name: string;
  price: string;
  includes?: string[];
  extras?: string[];
  time?: string;
}

interface ServiceGroup {
  groupTitle: string;
  services: ServiceItem[];
}

interface PriceSection {
  icon: React.ElementType;
  title: string;
  services?: ServiceItem[];
  groups?: ServiceGroup[];
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
        {section.services && section.services.map((service, i) => (
          <ServiceRow key={i} service={service} />
        ))}
        {section.groups && section.groups.map((group, gi) => (
          <div key={gi} className="space-y-3">
            <h3 className="text-base font-semibold text-muted-foreground uppercase tracking-wide pt-3 first:pt-0">{group.groupTitle}</h3>
            {group.services.map((service, i) => (
              <ServiceRow key={i} service={service} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const { t, i18n } = useTranslation();

  const langRaw = (i18n.language || 'en').toLowerCase();
  const lang = langRaw.startsWith('ru') ? 'ru' : langRaw.startsWith('bg') ? 'bg' : langRaw.startsWith('it') ? 'it' : langRaw.startsWith('de') ? 'de' : 'en';

  // Use a stable, shareable OG image. Put the file at /public/og/pricelist.jpg (recommended 1200x630).
  const ogImage = '/og/pricelist.jpg';
  const canonicalUrl = `/services`; // adjust if your route differs

  const sections: PriceSection[] = [
    {
      icon: Building2,
      title: t('pricelist.section1Title', { defaultValue: 'Company Registration in Bulgaria' }),
      groups: [
        {
          groupTitle: t('pricelist.euCitizens', { defaultValue: 'For EU Citizens' }),
          services: [
            {
              name: t('pricelist.eood', { defaultValue: 'EOOD Registration (Single-Owner LLC)' }),
              price: '€255',
              includes: [t('pricelist.eoodIncludes', { defaultValue: 'Preparation and submission of registration documents' })],
              time: t('pricelist.eoodTime', { defaultValue: '5–7 business days' }),
            },
            {
              name: t('pricelist.ood', { defaultValue: 'OOD Registration (Multi-Owner LLC)' }),
              price: '€285',
              includes: [t('pricelist.oodIncludes', { defaultValue: 'Up to 2 shareholders included' })],
              extras: [t('pricelist.oodExtra', { defaultValue: 'Each additional shareholder: +€50' })],
              time: t('pricelist.oodTime', { defaultValue: '3–5 business days' }),
            },
          ],
        },
        {
          groupTitle: t('pricelist.nonEuCitizens', { defaultValue: 'For Non-EU Citizens' }),
          services: [
            {
              name: t('pricelist.eoodNonEu', { defaultValue: 'EOOD / OOD Registration (Non-EU)' }),
              price: t('services.from', { defaultValue: 'from' }) + ' €485',
              includes: [t('pricelist.eoodIncludes', { defaultValue: 'Preparation and submission of registration documents' })],
              time: t('pricelist.eoodTime', { defaultValue: '5–7 business days' }),
            },
            {
              name: t('pricelist.nonEuBankAccount', { defaultValue: 'Capital Collection Bank Account (Набирателна сметка)' }),
              price: '€295',
            },
            {
              name: t('pricelist.nonEuPowerOfAttorney', { defaultValue: 'Power of Attorney — Drafting & Notarization' }),
              price: '€25',
            },
            {
              name: t('pricelist.nonEuDirectorSignature', { defaultValue: "Director's Specimen Signature" }),
              price: '€25',
            },
            {
              name: t('pricelist.nonEuContactDeclaration', { defaultValue: 'Contact Person Declaration' }),
              price: '€75',
            },
          ],
        },
      ],
      services: [
        {
          name: t('pricelist.bankAccount', { defaultValue: 'Bank Account Opening Assistance' }),
          price: '€75',
          time: t('pricelist.bankAccountTime', { defaultValue: 'Depends on the bank' }),
        },
        {
          name: t('pricelist.legalConsultCompany', { defaultValue: 'Legal Consultation for Company Registration' }),
          price: '€25 / 30 min',
        },
        {
          name: t('pricelist.companyAddress', { defaultValue: 'Registered Company Address' }),
          price: t('pricelist.individual', { defaultValue: 'Individual' }),
        },
      ],
    },
    {
      icon: FileText,
      title: t('pricelist.section2Title', { defaultValue: 'Trade Representation Office Registration' }),
      services: [
        {
          name: t('pricelist.tradeRep', { defaultValue: 'Trade Representation Office Registration' }),
          price: '€1,150',
          includes: [
            t('pricelist.tradeRepInclude1', { defaultValue: 'Documentation preparation' }),
            t('pricelist.tradeRepInclude2', { defaultValue: 'Registration procedure coordination' }),
            t('pricelist.tradeRepInclude3', { defaultValue: 'Includes 1 trade representative' }),
          ],
          extras: [t('pricelist.tradeRepExtra', { defaultValue: 'Each additional trade representative: +€150' })],
          time: t('pricelist.tradeRepTime', { defaultValue: '10–20 business days (typical)' }),
        },
      ],
    },
    {
      icon: Handshake,
      title: t('pricelist.section3Title', { defaultValue: 'Contract Drafting for Companies' }),
      services: [
        {
          name: t('pricelist.simpleContract', { defaultValue: 'Simple Contract' }),
          price: '€75',
          includes: [t('pricelist.simpleContractExamples', { defaultValue: 'Examples: service agreement, NDA, basic cooperation contract' })],
          time: t('pricelist.simpleContractTime', { defaultValue: '1–2 business days' }),
        },
        {
          name: t('pricelist.standardContract', { defaultValue: 'Standard Contract' }),
          price: '€125',
          includes: [t('pricelist.standardContractExamples', { defaultValue: 'Examples: partnership agreements, commercial agreements' })],
          time: t('pricelist.standardContractTime', { defaultValue: '2–3 business days' }),
        },
        {
          name: t('pricelist.complexContract', { defaultValue: 'Complex Contract' }),
          price: '€155',
          includes: [t('pricelist.complexContractExamples', { defaultValue: 'Examples: investment agreements, multi-party agreements' })],
          time: t('pricelist.complexContractTime', { defaultValue: '3–5 business days' }),
        },
      ],
    },
    {
      icon: MessageSquare,
      title: t('pricelist.section4Title', { defaultValue: 'Consulting' }),
      services: [
        {
          name: t('pricelist.businessConsulting', { defaultValue: 'Business Consulting' }),
          price: '€25 / 30 min',
        },
        {
          name: t('pricelist.legalConsultation', { defaultValue: 'Legal Consultation' }),
          price: '€25 / 30 min',
        },
      ],
    },
    {
      icon: Shield,
      title: t('pricelist.section5Title', { defaultValue: 'Legal Subscription for Companies' }),
      services: [
        {
          name: t('pricelist.monthlyLegal', { defaultValue: 'Monthly Legal Support' }),
          price: '€195 / mo',
          includes: [
            t('pricelist.monthlyLegalInclude1', { defaultValue: 'Up to 10 hours of legal consultation per month' }),
            t('pricelist.monthlyLegalInclude2', { defaultValue: 'Business and corporate advice' }),
            t('pricelist.monthlyLegalInclude3', { defaultValue: 'Document review and practical guidance' }),
          ],
          extras: [t('pricelist.monthlyLegalExtra', { defaultValue: 'Additional hours billed separately' })],
        },
      ],
    },
    {
      icon: Home,
      title: t('pricelist.section7Title', { defaultValue: 'Real Estate Services' }),
      services: [
        {
          name: t('pricelist.propertySearch', { defaultValue: 'Property Search & Buyer Support' }),
          price: t('pricelist.individual', { defaultValue: 'Individual' }),
          includes: [
            t('pricelist.propertySearchInclude1', { defaultValue: 'Property shortlist based on your criteria' }),
            t('pricelist.propertySearchInclude2', { defaultValue: 'Coordination with sellers/agents and document checks support' }),
          ],
          time: t('pricelist.propertySearchTime', { defaultValue: 'Depends on the case' }),
        },
        {
          name: t('pricelist.brokerCommission', { defaultValue: 'Brokerage Commission (Buyer/Seller Representation)' }),
          price: t('pricelist.brokerCommissionPrice', { defaultValue: '3.6% of purchase price, min. €1,000' }),
          includes: [
            t('pricelist.brokerCommissionInclude1', { defaultValue: 'Professional representation and negotiation support' }),
            t('pricelist.brokerCommissionInclude2', { defaultValue: 'Coordination of the transaction process' }),
          ],
        },
      ],
    },
    {
      icon: Umbrella,
      title: t('pricelist.section8Title', { defaultValue: 'Insurance (Individual Pricing)' }),
      services: [
        {
          name: t('pricelist.insurance', { defaultValue: 'Insurance Assistance' }),
          price: t('pricelist.individual', { defaultValue: 'Individual' }),
          includes: [
            t('pricelist.insMedical', { defaultValue: 'Health insurance' }),
            t('pricelist.insTravel', { defaultValue: 'Travel insurance' }),
            t('pricelist.insProperty', { defaultValue: 'Property insurance' }),
            t('pricelist.insLiability', { defaultValue: 'Third-party liability insurance' }),
            t('pricelist.insCasco', { defaultValue: 'Motor insurance (CASCO)' }),
          ],
          time: t('pricelist.insuranceTime', { defaultValue: 'Depends on the insurer and coverage' }),
        },
      ],
    },
    {
      icon: Plus,
      title: t('pricelist.section6Title', { defaultValue: 'Additional Services' }),
      services: [
        {
          name: t('pricelist.registeredAddress', { defaultValue: 'Registered Legal Address for Company' }),
          price: t('pricelist.individual', { defaultValue: 'Individual' }),
        },
        {
          name: t('pricelist.docTranslation', { defaultValue: 'Document Translation' }),
          price: '€75',
        },
        {
          name: t('pricelist.docLegalization', { defaultValue: 'Document Legalization' }),
          price: '€75',
        },
        {
          name: t('pricelist.additionalCorpDocs', { defaultValue: 'Additional Corporate Documents' }),
          price: t('pricelist.individual', { defaultValue: 'Individual' }),
        },
      ],
    },
  ];

  // Expanded structured data: include key offers and a brokerage commission (use priceSpecification for percent).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NICS Services Bulgaria",
    "description": "Professional legal, corporate, real estate, and consulting services in Bulgaria with transparent pricing.",
    "areaServed": "Bulgaria",
    "availableLanguage": ["en", "ru", "bg", "de", "it"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services & Pricing",
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
          "name": "Simple Contract Drafting",
          "price": "75",
          "priceCurrency": "EUR",
        },
        {
          "@type": "Offer",
          "name": "Monthly Legal Support (10 hours)",
          "price": "195",
          "priceCurrency": "EUR",
        },
        {
          "@type": "Offer",
          "name": "Brokerage Commission",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "EUR",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": 1,
              "unitText": "transaction"
            },
            "description": "3.6% of purchase price, minimum €1,000"
          }
        }
      ],
    },
  };

  // SEO meta per language (optional: you can move these to i18n later)
  const metaTitleByLang: Record<string, string> = {
    en: 'Price List — Legal, Corporate & Real Estate Services in Bulgaria',
    ru: 'Прайс-лист — Юридические, корпоративные и риелторские услуги в Болгарии',
    bg: 'Ценоразпис — Юридически, корпоративни и имотни услуги в България',
    de: 'Preisliste — Rechts-, Unternehmens- & Immobiliendienstleistungen in Bulgarien',
    it: 'Listino Prezzi — Servizi legali, aziendali e immobiliari in Bulgaria',
  };

  const metaDescByLang: Record<string, string> = {
    en: 'Transparent pricing: company registration from €255, OOD from €285, contracts from €75, consultations €25/30 min, legal subscription €195/month, brokerage commission 3.6% (min €1,000).',
    ru: 'Прозрачные цены: регистрация фирмы от €255, OOD от €285, договоры от €75, консультация €25/30 мин, абонемент €195/мес, комиссия 3,6% (мин. €1 000).',
    bg: 'Прозрачни цени: регистрация на фирма от €255, OOD от €285, договори от €75, консултация €25/30 мин, абонамент €195/месец, комисиона 3.6% (мин. €1 000).',
    de: 'Transparente Preise: Firmengründung ab €255, OOD ab €285, Verträge ab €75, Beratung €25/30 Min., Rechtspaket €195/Monat, Maklerprovision 3,6% (mind. €1.000).',
    it: 'Prezzi trasparenti: registrazione società da €255, OOD da €285, contratti da €75, consulenza €25/30 min, abbonamento legale €195/mese, commissione 3,6% (min €1.000).',
  };

  const pageTitle = metaTitleByLang[lang] ?? metaTitleByLang.en;
  const pageDesc = metaDescByLang[lang] ?? metaDescByLang.en;

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDesc} />

          {/* Canonical */}
          <link rel="canonical" href={canonicalUrl} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDesc} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:locale" content={lang === 'bg' ? 'bg_BG' : lang === 'ru' ? 'ru_RU' : lang === 'de' ? 'de_DE' : lang === 'it' ? 'it_IT' : 'en_US'} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDesc} />
          <meta name="twitter:image" content={ogImage} />

          {/* JSON-LD */}
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>

        <Header />

        {/* Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container text-center space-y-4 max-w-3xl">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-1">
              {t('pricelist.badge', { defaultValue: 'Transparent Pricing' })}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t('pricelist.heroTitle', { defaultValue: 'Price List — Services in Bulgaria' })}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              {t('pricelist.heroSubtitle', { defaultValue: 'Legal, corporate, real estate and consulting services with clear terms and pricing.' })}
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t('pricelist.ctaTitle', { defaultValue: 'Need a quote for your case?' })}
            </h2>
            <p className="text-muted-foreground">
              {t('pricelist.ctaDescription', { defaultValue: 'Send us a short message — we will reply with the best option, timeline and required documents.' })}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t('pricelist.ctaButton', { defaultValue: 'Contact Us' })}
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Services;