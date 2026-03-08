import { useTranslation } from 'react-i18next';
import React from 'react';
import { DocumentGenerator } from '@/components/DocumentGenerator';
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
  Globe,
  Bot,
  Sparkles,
  Link as LinkIcon,
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

const siteUrl = 'https://estate.aibyteconsult.com';
const pagePath = '/services';
const canonicalUrl = `${siteUrl}${pagePath}`;
const ogImage = `${siteUrl}/og/pricelist.jpg`;

const ServiceRow = ({ service }: { service: ServiceItem }) => (
  <div className="group rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-200 hover:shadow-[var(--card-shadow-hover)] hover:border-primary/30">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
      <div className="flex-1 min-w-0 space-y-2">
        <h4 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
          {service.name}
        </h4>

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
        <span className="inline-block text-xl sm:text-2xl font-bold text-primary">
          {service.price}
        </span>
      </div>
    </div>
  </div>
);

const PriceSectionBlock = ({
  section,
  index,
}: {
  section: PriceSection;
  index: number;
}) => {
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
        {section.services &&
          section.services.map((service, i) => <ServiceRow key={i} service={service} />)}

        {section.groups &&
          section.groups.map((group, gi) => (
            <div key={gi} className="space-y-3">
              <h3 className="text-base font-semibold text-muted-foreground uppercase tracking-wide pt-3 first:pt-0">
                {group.groupTitle}
              </h3>
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
  const lang = langRaw.startsWith('ru')
    ? 'ru'
    : langRaw.startsWith('bg')
      ? 'bg'
      : langRaw.startsWith('it')
        ? 'it'
        : langRaw.startsWith('de')
          ? 'de'
          : 'en';

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ru: 'ru_RU',
    bg: 'bg_BG',
    de: 'de_DE',
    it: 'it_IT',
  };

  const alternatePath = `${canonicalUrl}?lang=`;
  const pageTitleByLang: Record<string, string> = {
    en: 'Price List — Legal, Corporate, AI & Real Estate Services in Bulgaria',
    ru: 'Прайс-лист — Юридические, корпоративные, AI и риелторские услуги в Болгарии',
    bg: 'Ценоразпис — Юридически, корпоративни, AI и имотни услуги в България',
    de: 'Preisliste — Rechts-, Unternehmens-, KI- & Immobiliendienstleistungen in Bulgarien',
    it: 'Listino Prezzi — Servizi legali, aziendali, AI e immobiliari in Bulgaria',
  };

  const pageDescByLang: Record<string, string> = {
    en: 'Transparent pricing in Bulgaria: company registration from €255, non-EU company registration €485, legal consultation from €35, monthly legal support €295, real estate website creation from €275, AI Telegram auto-posting from €220 + €28/month.',
    ru: 'Прозрачные цены в Болгарии: регистрация компании от €255, регистрация для граждан вне ЕС €485, юридическая консультация от €35, юридический абонемент €295, сайт по недвижимости от €275, AI автопостинг в Telegram от €220 + €28/мес.',
    bg: 'Прозрачни цени в България: регистрация на фирма от €255, регистрация за граждани извън ЕС €485, правна консултация от €35, правен абонамент €295, сайт за имоти от €275, AI автопостинг в Telegram от €220 + €28/месец.',
    de: 'Transparente Preise in Bulgarien: Firmengründung ab €255, Registrierung für Nicht-EU-Bürger €485, Rechtsberatung ab €35, Rechtsabo €295, Immobilien-Website ab €275, KI-Telegram-Autoposting ab €220 + €28/Monat.',
    it: 'Prezzi trasparenti in Bulgaria: registrazione società da €255, registrazione per cittadini non UE €485, consulenza legale da €35, abbonamento legale €295, sito immobiliare da €275, autoposting AI Telegram da €220 + €28/mese.',
  };

  const heroTitleByLang: Record<string, string> = {
    en: 'Price List — Services in Bulgaria',
    ru: 'Прайс-лист — Услуги в Болгарии',
    bg: 'Ценоразпис — Услуги в България',
    de: 'Preisliste — Dienstleistungen in Bulgarien',
    it: 'Listino Prezzi — Servizi in Bulgaria',
  };

  const heroSubtitleByLang: Record<string, string> = {
    en: 'Legal, corporate, real estate, AI automation, website creation, insurance, translation and consulting services with transparent pricing in Bulgaria.',
    ru: 'Юридические, корпоративные, риелторские, AI, страховые, переводческие и консультационные услуги в Болгарии с прозрачным ценообразованием.',
    bg: 'Юридически, корпоративни, имотни, AI, застрахователни, преводачески и консултантски услуги в България с прозрачни цени.',
    de: 'Rechts-, Unternehmens-, Immobilien-, KI-, Versicherungs-, Übersetzungs- und Beratungsdienstleistungen in Bulgarien mit transparenter Preisgestaltung.',
    it: 'Servizi legali, aziendali, immobiliari, AI, assicurativi, di traduzione e consulenza in Bulgaria con prezzi trasparenti.',
  };

  const introHeadingByLang: Record<string, string> = {
    en: 'Transparent Bulgaria service pricing for company setup, legal support, real estate, AI automation and website creation',
    ru: 'Прозрачные цены на услуги в Болгарии: регистрация компании, юридическое сопровождение, недвижимость, AI-автоматизация и создание сайтов',
    bg: 'Прозрачни цени за услуги в България: регистрация на фирма, правно съдействие, недвижими имоти, AI автоматизация и създаване на сайтове',
    de: 'Transparente Preise in Bulgarien für Firmengründung, Rechtsbegleitung, Immobilien, KI-Automatisierung und Website-Erstellung',
    it: 'Prezzi trasparenti in Bulgaria per registrazione società, supporto legale, immobiliare, automazione AI e creazione siti web',
  };

  const introTextByLang: Record<string, string> = {
    en: 'This page lists our current pricing for company registration in Bulgaria, trade representation office registration, legal consultations, contract drafting, real estate services, insurance assistance, translation and legalization, professional real estate website development, and AI automation services for Telegram, websites and service workflows.',
    ru: 'На этой странице собраны актуальные цены на регистрацию компании в Болгарии, торговое представительство, юридические консультации, составление договоров, риелторские услуги, страхование, переводы и легализацию документов, создание профессиональных сайтов по недвижимости и AI-автоматизацию для Telegram, сайтов и сервисных процессов.',
    bg: 'На тази страница са събрани актуалните цени за регистрация на фирма в България, търговско представителство, правни консултации, изготвяне на договори, имотни услуги, съдействие по застраховки, преводи и легализация на документи, професионални сайтове за недвижими имоти и AI автоматизация за Telegram, сайтове и работни процеси.',
    de: 'Auf dieser Seite finden Sie unsere aktuellen Preise für Firmengründung in Bulgarien, Registrierung von Handelsvertretungen, Rechtsberatung, Vertragsgestaltung, Immobiliendienstleistungen, Versicherungsbegleitung, Übersetzungen und Legalisierung sowie professionelle Immobilien-Websites und KI-Automatisierung für Telegram, Websites und Serviceprozesse.',
    it: 'In questa pagina trovi i nostri prezzi aggiornati per registrazione di società in Bulgaria, uffici di rappresentanza commerciale, consulenze legali, contrattualistica, servizi immobiliari, supporto assicurativo, traduzioni e legalizzazioni, realizzazione di siti immobiliari professionali e automazione AI per Telegram, siti web e processi operativi.',
  };

  const tocTitleByLang: Record<string, string> = {
    en: 'Contents',
    ru: 'Содержание',
    bg: 'Съдържание',
    de: 'Inhalt',
    it: 'Indice',
  };

  const badgeTextByLang: Record<string, string> = {
    en: 'Transparent Pricing',
    ru: 'Прозрачные цены',
    bg: 'Прозрачни цени',
    de: 'Transparente Preise',
    it: 'Prezzi trasparenti',
  };

  const ctaTitleByLang: Record<string, string> = {
    en: 'Need a quote for your case?',
    ru: 'Нужен расчёт по вашему кейсу?',
    bg: 'Нужна ли е оферта за вашия случай?',
    de: 'Benötigen Sie ein Angebot für Ihren Fall?',
    it: 'Hai bisogno di un preventivo per il tuo caso?',
  };

  const ctaDescriptionByLang: Record<string, string> = {
    en: 'Send us a short message — we will reply with the best option, timeline and required documents.',
    ru: 'Отправьте нам короткое сообщение — мы ответим с оптимальным вариантом, сроками и списком документов.',
    bg: 'Изпратете ни кратко съобщение — ще върнем най-подходящия вариант, срок и нужните документи.',
    de: 'Senden Sie uns eine kurze Nachricht — wir antworten mit der besten Option, dem Zeitrahmen und den erforderlichen Unterlagen.',
    it: 'Mandaci un breve messaggio — risponderemo con la soluzione migliore, la tempistica e i documenti necessari.',
  };

  const ctaButtonByLang: Record<string, string> = {
    en: 'Contact Us',
    ru: 'Связаться с нами',
    bg: 'Свържете се с нас',
    de: 'Kontakt',
    it: 'Contattaci',
  };

  const individualLabel = t('pricelist.individual', { defaultValue: 'Individual' });
  const fromLabel = t('services.from', { defaultValue: 'from' });

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
              includes: [
                t('pricelist.eoodIncludes', {
                  defaultValue: 'Preparation and submission of registration documents',
                }),
              ],
              time: t('pricelist.eoodTime', { defaultValue: '5–7 business days' }),
            },
            {
              name: t('pricelist.ood', { defaultValue: 'OOD Registration (Multi-Owner LLC)' }),
              price: '€285',
              includes: [
                t('pricelist.oodIncludes', { defaultValue: 'Up to 2 shareholders included' }),
              ],
              extras: [
                t('pricelist.oodExtra', { defaultValue: 'Each additional shareholder: +€50' }),
              ],
              time: t('pricelist.oodTime', { defaultValue: '3–5 business days' }),
            },
          ],
        },
        {
          groupTitle: t('pricelist.nonEuCitizens', { defaultValue: 'For Non-EU Citizens' }),
          services: [
            {
              name:
                lang === 'ru'
                  ? 'Регистрация ЕООД / ООД (для граждан вне ЕС)'
                  : lang === 'bg'
                    ? 'Регистрация на ЕООД / ООД (за граждани извън ЕС)'
                    : lang === 'de'
                      ? 'EOOD / OOD Registrierung (für Nicht-EU-Bürger)'
                      : lang === 'it'
                        ? 'Registrazione EOOD / OOD (per cittadini non UE)'
                        : 'EOOD / OOD Registration (For Non-EU Citizens)',
              price: '€485',
              includes: [
                t('pricelist.eoodIncludes', {
                  defaultValue: 'Preparation and submission of registration documents',
                }),
              ],
              time:
                lang === 'ru'
                  ? 'Срок: индивидуально'
                  : lang === 'bg'
                    ? 'Срок: индивидуално'
                    : lang === 'de'
                      ? 'Bearbeitungszeit: individuell'
                      : lang === 'it'
                        ? 'Tempistica: individuale'
                        : 'Timeline: individual',
            },
            {
              name:
                lang === 'ru'
                  ? 'Набирательная сметка для регистрации компании'
                  : lang === 'bg'
                    ? 'Набирателна сметка за регистрация на фирма'
                    : lang === 'de'
                      ? 'Kapitalsammelkonto für die Firmenregistrierung'
                      : lang === 'it'
                        ? 'Conto capitale vincolato per la registrazione della società'
                        : 'Capital Collection Bank Account for Company Registration',
              price: '€295',
            },
            {
              name:
                lang === 'ru'
                  ? 'Составление и нотариальное заверение доверенности'
                  : lang === 'bg'
                    ? 'Изготвяне и нотариална заверка на пълномощно'
                    : lang === 'de'
                      ? 'Vollmacht — Erstellung und notarielle Beglaubigung'
                      : lang === 'it'
                        ? 'Procura — redazione e autenticazione notarile'
                        : 'Power of Attorney — Drafting & Notarization',
              price: '€35',
            },
            {
              name:
                lang === 'ru'
                  ? 'Образец подписи директора'
                  : lang === 'bg'
                    ? 'Спесимен на подписа на управителя'
                    : lang === 'de'
                      ? 'Unterschriftsprobe des Geschäftsführers'
                      : lang === 'it'
                        ? "Specimen della firma dell'amministratore"
                        : "Director's Specimen Signature",
              price: '€35',
            },
            {
              name:
                lang === 'ru'
                  ? 'Декларация контактного лица'
                  : lang === 'bg'
                    ? 'Декларация на контактно лице'
                    : lang === 'de'
                      ? 'Erklärung der Kontaktperson'
                      : lang === 'it'
                        ? 'Dichiarazione della persona di contatto'
                        : 'Contact Person Declaration',
              price: '€85',
            },
          ],
        },
      ],
      services: [
        {
          name:
            lang === 'ru'
              ? 'Содействие в открытии банковского счёта'
              : lang === 'bg'
                ? 'Съдействие при откриване на банкова сметка'
                : lang === 'de'
                  ? 'Begleitung bei der Eröffnung eines Bankkontos'
                  : lang === 'it'
                    ? "Assistenza per l'apertura di un conto bancario"
                    : 'Assistance with Bank Account Opening',
          price: '€75',
          time: t('pricelist.bankAccountTime', { defaultValue: 'Depends on the bank' }),
        },
        {
          name:
            lang === 'ru'
              ? 'Юридическая консультация по регистрации компании'
              : lang === 'bg'
                ? 'Правна консултация за регистрация на фирма'
                : lang === 'de'
                  ? 'Rechtsberatung zur Firmengründung'
                  : lang === 'it'
                    ? 'Consulenza legale per la registrazione della società'
                    : 'Legal Consultation for Company Registration',
          price: '€35 / 30 min',
        },
        {
          name: t('pricelist.companyAddress', { defaultValue: 'Registered Company Address' }),
          price: individualLabel,
        },
      ],
    },
    {
      icon: FileText,
      title: t('pricelist.section2Title', {
        defaultValue: 'Trade Representation Office Registration',
      }),
      services: [
        {
          name: t('pricelist.tradeRep', {
            defaultValue: 'Trade Representation Office Registration',
          }),
          price: '€1,150',
          includes: [
            t('pricelist.tradeRepInclude1', { defaultValue: 'Documentation preparation' }),
            t('pricelist.tradeRepInclude2', {
              defaultValue: 'Registration procedure coordination',
            }),
            t('pricelist.tradeRepInclude3', {
              defaultValue: 'Includes 1 trade representative',
            }),
          ],
          extras: [
            t('pricelist.tradeRepExtra', {
              defaultValue: 'Each additional trade representative: +€150',
            }),
          ],
          time: t('pricelist.tradeRepTime', {
            defaultValue: '10–20 business days (typical)',
          }),
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
          includes: [
            t('pricelist.simpleContractExamples', {
              defaultValue: 'Examples: service agreement, NDA, basic cooperation contract',
            }),
          ],
          time: t('pricelist.simpleContractTime', { defaultValue: '1–2 business days' }),
        },
        {
          name: t('pricelist.standardContract', { defaultValue: 'Standard Contract' }),
          price: '€125',
          includes: [
            t('pricelist.standardContractExamples', {
              defaultValue: 'Examples: partnership agreements, commercial agreements',
            }),
          ],
          time: t('pricelist.standardContractTime', { defaultValue: '2–3 business days' }),
        },
        {
          name: t('pricelist.complexContract', { defaultValue: 'Complex Contract' }),
          price: '€155',
          includes: [
            t('pricelist.complexContractExamples', {
              defaultValue: 'Examples: investment agreements, multi-party agreements',
            }),
          ],
          time: t('pricelist.complexContractTime', { defaultValue: '3–5 business days' }),
        },
      ],
    },
    {
      icon: MessageSquare,
      title: t('pricelist.section4Title', { defaultValue: 'Consulting' }),
      services: [
        {
          name:
            lang === 'ru'
              ? 'Бизнес-консультация'
              : lang === 'bg'
                ? 'Бизнес консултация'
                : lang === 'de'
                  ? 'Business-Beratung'
                  : lang === 'it'
                    ? 'Consulenza business'
                    : 'Business Consulting',
          price: '€35 / 30 min',
        },
        {
          name:
            lang === 'ru'
              ? 'Юридическая консультация'
              : lang === 'bg'
                ? 'Правна консултация'
                : lang === 'de'
                  ? 'Rechtsberatung'
                  : lang === 'it'
                    ? 'Consulenza legale'
                    : 'Legal Consultation',
          price: '€55 / 30 min',
        },
      ],
    },
    {
      icon: Shield,
      title: t('pricelist.section5Title', { defaultValue: 'Legal Subscription for Companies' }),
      services: [
        {
          name: t('pricelist.monthlyLegal', { defaultValue: 'Monthly Legal Support' }),
          price: '€295 / mo',
          includes: [
            t('pricelist.monthlyLegalInclude1', {
              defaultValue: 'Up to 10 hours of legal consultation per month',
            }),
            t('pricelist.monthlyLegalInclude2', {
              defaultValue: 'Business and corporate advice',
            }),
            t('pricelist.monthlyLegalInclude3', {
              defaultValue: 'Document review and practical guidance',
            }),
          ],
          extras: [
            t('pricelist.monthlyLegalExtra', {
              defaultValue: 'Additional hours billed separately',
            }),
          ],
        },
      ],
    },
    {
      icon: Home,
      title: t('pricelist.section7Title', { defaultValue: 'Real Estate Services' }),
      services: [
        {
          name: t('pricelist.propertySearch', { defaultValue: 'Property Search & Buyer Support' }),
          price: individualLabel,
          includes: [
            t('pricelist.propertySearchInclude1', {
              defaultValue: 'Property shortlist based on your criteria',
            }),
            t('pricelist.propertySearchInclude2', {
              defaultValue: 'Coordination with sellers/agents and document checks support',
            }),
          ],
          time: t('pricelist.propertySearchTime', { defaultValue: 'Depends on the case' }),
        },
        {
          name: t('pricelist.brokerCommission', {
            defaultValue: 'Brokerage Commission (Buyer/Seller Representation)',
          }),
          price: t('pricelist.brokerCommissionPrice', {
            defaultValue: '3.6% of purchase price, min. €1,000',
          }),
          includes: [
            t('pricelist.brokerCommissionInclude1', {
              defaultValue: 'Professional representation and negotiation support',
            }),
            t('pricelist.brokerCommissionInclude2', {
              defaultValue: 'Coordination of the transaction process',
            }),
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
          price: individualLabel,
          includes: [
            t('pricelist.insMedical', { defaultValue: 'Health insurance' }),
            t('pricelist.insTravel', { defaultValue: 'Travel insurance' }),
            t('pricelist.insProperty', { defaultValue: 'Property insurance' }),
            t('pricelist.insLiability', {
              defaultValue: 'Third-party liability insurance',
            }),
            t('pricelist.insCasco', { defaultValue: 'Motor insurance (CASCO)' }),
          ],
          time: t('pricelist.insuranceTime', {
            defaultValue: 'Depends on the insurer and coverage',
          }),
        },
      ],
    },
    {
      icon: Globe,
      title:
        lang === 'ru'
          ? 'Создание профессионального сайта по недвижимости'
          : lang === 'bg'
            ? 'Създаване на професионален сайт за недвижими имоти'
            : lang === 'de'
              ? 'Erstellung einer professionellen Immobilien-Website'
              : lang === 'it'
                ? 'Creazione di un sito professionale per il settore immobiliare'
                : 'Professional Real Estate Website Creation',
      services: [
        {
          name:
            lang === 'ru'
              ? 'SEO-профессиональный сайт по недвижимости'
              : lang === 'bg'
                ? 'SEO професионален сайт за недвижими имоти'
                : lang === 'de'
                  ? 'SEO-optimierte professionelle Immobilien-Website'
                  : lang === 'it'
                    ? 'Sito immobiliare professionale ottimizzato SEO'
                    : 'SEO Professional Real Estate Website',
          price: `${fromLabel} €275`,
          includes: [
            lang === 'ru'
              ? 'Современный адаптивный дизайн'
              : lang === 'bg'
                ? 'Съвременен адаптивен дизайн'
                : lang === 'de'
                  ? 'Modernes responsives Design'
                  : lang === 'it'
                    ? 'Design moderno e responsive'
                    : 'Modern responsive design',
            lang === 'ru'
              ? 'Базовая SEO-структура страниц'
              : lang === 'bg'
                ? 'Базова SEO структура на страниците'
                : lang === 'de'
                  ? 'Grundlegende SEO-Seitenstruktur'
                  : lang === 'it'
                    ? 'Struttura SEO di base delle pagine'
                    : 'Basic SEO page structure',
            lang === 'ru'
              ? 'Подготовка под продвижение объектов недвижимости'
              : lang === 'bg'
                ? 'Подготовка за представяне на имоти'
                : lang === 'de'
                  ? 'Vorbereitung für die Präsentation von Immobilienobjekten'
                  : lang === 'it'
                    ? 'Preparazione per la presentazione degli immobili'
                    : 'Prepared for real estate listings and promotion',
          ],
          time:
            lang === 'ru'
              ? 'Срок: индивидуально'
              : lang === 'bg'
                ? 'Срок: индивидуално'
                : lang === 'de'
                  ? 'Bearbeitungszeit: individuell'
                  : lang === 'it'
                    ? 'Tempistica: individuale'
                    : 'Timeline: individual',
        },
      ],
    },
    {
      icon: Bot,
      title:
        lang === 'ru'
          ? 'ИИ-автоматизация и автопостинг'
          : lang === 'bg'
            ? 'AI автоматизация и автопостинг'
            : lang === 'de'
              ? 'KI-Automatisierung und Auto-Posting'
              : lang === 'it'
                ? 'Automazione AI e autoposting'
                : 'AI Automation & Auto-Posting',
      services: [
        {
          name:
            lang === 'ru'
              ? 'Создание ИИ-ассистента автопостинга для вашего Telegram-канала или Telegram-группы'
              : lang === 'bg'
                ? 'Създаване на AI асистент за автопостинг за вашия Telegram канал или Telegram група'
                : lang === 'de'
                  ? 'Erstellung eines KI-Auto-Posting-Assistenten für Ihren Telegram-Kanal oder Ihre Telegram-Gruppe'
                  : lang === 'it'
                    ? 'Creazione di un assistente AI per autoposting per il tuo canale o gruppo Telegram'
                    : 'AI Auto-Posting Assistant for Your Telegram Channel or Telegram Group',
          price:
            lang === 'ru'
              ? '€220 one-time + €28 / mo'
              : lang === 'bg'
                ? '€220 еднократно + €28 / мес'
                : lang === 'de'
                  ? '€220 einmalig + €28 / Mon.'
                  : lang === 'it'
                    ? '€220 una tantum + €28 / mese'
                    : '€220 one-time + €28 / mo',
          includes: [
            lang === 'ru'
              ? 'Настройка логики автопостинга'
              : lang === 'bg'
                ? 'Настройка на логика за автопостинг'
                : lang === 'de'
                  ? 'Einrichtung der Auto-Posting-Logik'
                  : lang === 'it'
                    ? 'Impostazione della logica di autoposting'
                    : 'Auto-posting logic setup',
            lang === 'ru'
              ? 'Базовая адаптация под ваш контент'
              : lang === 'bg'
                ? 'Базова адаптация към вашето съдържание'
                : lang === 'de'
                  ? 'Grundlegende Anpassung an Ihren Content'
                  : lang === 'it'
                    ? 'Adattamento di base ai tuoi contenuti'
                    : 'Basic adaptation to your content',
            lang === 'ru'
              ? 'Ежемесячная поддержка и сопровождение'
              : lang === 'bg'
                ? 'Месечна поддръжка и съдействие'
                : lang === 'de'
                  ? 'Monatliche Betreuung und Support'
                  : lang === 'it'
                    ? 'Supporto e manutenzione mensile'
                    : 'Monthly support and maintenance',
          ],
        },
        {
          name:
            lang === 'ru'
              ? 'ИИ-перевод и адаптация контента для сайта, Telegram и объявлений'
              : lang === 'bg'
                ? 'AI превод и адаптация на съдържание за сайт, Telegram и обяви'
                : lang === 'de'
                  ? 'KI-Übersetzung und Content-Anpassung für Website, Telegram und Anzeigen'
                  : lang === 'it'
                    ? 'Traduzione AI e adattamento dei contenuti per sito, Telegram e annunci'
                    : 'AI Translation & Content Adaptation for Website, Telegram, and Listings',
          price: individualLabel,
          includes: [
            lang === 'ru'
              ? 'Перевод и адаптация под нужный стиль'
              : lang === 'bg'
                ? 'Превод и адаптация към желания стил'
                : lang === 'de'
                  ? 'Übersetzung und Anpassung an den gewünschten Stil'
                  : lang === 'it'
                    ? 'Traduzione e adattamento allo stile richiesto'
                    : 'Translation and style adaptation',
            lang === 'ru'
              ? 'Поддержка мультиязычного контента'
              : lang === 'bg'
                ? 'Поддръжка на многоезично съдържание'
                : lang === 'de'
                  ? 'Unterstützung für mehrsprachige Inhalte'
                  : lang === 'it'
                    ? 'Supporto per contenuti multilingua'
                    : 'Support for multilingual content',
          ],
        },
        {
          name:
            lang === 'ru'
              ? 'ИИ-ассистент для обработки заявок с сайта недвижимости'
              : lang === 'bg'
                ? 'AI асистент за обработка на запитвания от сайт за имоти'
                : lang === 'de'
                  ? 'KI-Assistent zur Bearbeitung von Anfragen über eine Immobilien-Website'
                  : lang === 'it'
                    ? 'Assistente AI per la gestione delle richieste dal sito immobiliare'
                    : 'AI Assistant for Handling Real Estate Website Leads',
          price: individualLabel,
          includes: [
            lang === 'ru'
              ? 'Сбор и структурирование входящих заявок'
              : lang === 'bg'
                ? 'Събиране и структуриране на входящи запитвания'
                : lang === 'de'
                  ? 'Erfassung und Strukturierung eingehender Anfragen'
                  : lang === 'it'
                    ? 'Raccolta e strutturazione delle richieste in entrata'
                    : 'Collection and structuring of incoming leads',
            lang === 'ru'
              ? 'Подходит для сайтов недвижимости и сервисных страниц'
              : lang === 'bg'
                ? 'Подходящо за сайтове за имоти и сервизни страници'
                : lang === 'de'
                  ? 'Geeignet für Immobilien-Websites und Service-Seiten'
                  : lang === 'it'
                    ? 'Adatto a siti immobiliari e pagine di servizi'
                    : 'Suitable for real estate websites and service pages',
          ],
        },
        {
          name:
            lang === 'ru'
              ? 'Автоматизация страховых заявок и первичной обработки запросов'
              : lang === 'bg'
                ? 'Автоматизация на застрахователни запитвания и първична обработка'
                : lang === 'de'
                  ? 'Automatisierung von Versicherungsanfragen und Erstbearbeitung'
                  : lang === 'it'
                    ? 'Automazione delle richieste assicurative e pre-elaborazione'
                    : 'Insurance Inquiry Automation & Initial Request Processing',
          price: individualLabel,
          includes: [
            lang === 'ru'
              ? 'Подходит для страховых брокеров и сервисных компаний'
              : lang === 'bg'
                ? 'Подходящо за застрахователни брокери и сервизни компании'
                : lang === 'de'
                  ? 'Geeignet für Versicherungsmakler und Serviceunternehmen'
                  : lang === 'it'
                    ? 'Adatto per broker assicurativi e società di servizi'
                    : 'Suitable for insurance brokers and service companies',
            lang === 'ru'
              ? 'Базовая маршрутизация и сортировка заявок'
              : lang === 'bg'
                ? 'Базово маршрутизиране и сортиране на запитвания'
                : lang === 'de'
                  ? 'Grundlegende Weiterleitung und Sortierung von Anfragen'
                  : lang === 'it'
                    ? 'Instradamento e smistamento di base delle richieste'
                    : 'Basic routing and sorting of inquiries',
          ],
        },
      ],
    },
    {
      icon: Plus,
      title: t('pricelist.section6Title', { defaultValue: 'Additional Services' }),
      services: [
        {
          name: t('pricelist.registeredAddress', {
            defaultValue: 'Registered Legal Address for Company',
          }),
          price: individualLabel,
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
          name: t('pricelist.additionalCorpDocs', {
            defaultValue: 'Additional Corporate Documents',
          }),
          price: individualLabel,
        },
      ],
    },
  ];

  const pageTitle = pageTitleByLang[lang] ?? pageTitleByLang.en;
  const pageDesc = pageDescByLang[lang] ?? pageDescByLang.en;
  const heroTitle = heroTitleByLang[lang] ?? heroTitleByLang.en;
  const heroSubtitle = heroSubtitleByLang[lang] ?? heroSubtitleByLang.en;
  const introHeading = introHeadingByLang[lang] ?? introHeadingByLang.en;
  const introText = introTextByLang[lang] ?? introTextByLang.en;
  const tocTitle = tocTitleByLang[lang] ?? tocTitleByLang.en;
  const badgeText = badgeTextByLang[lang] ?? badgeTextByLang.en;
  const ctaTitle = ctaTitleByLang[lang] ?? ctaTitleByLang.en;
  const ctaDescription = ctaDescriptionByLang[lang] ?? ctaDescriptionByLang.en;
  const ctaButton = ctaButtonByLang[lang] ?? ctaButtonByLang.en;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageTitle,
        item: canonicalUrl,
      },
    ],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NICS Services Bulgaria',
    url: canonicalUrl,
    image: ogImage,
    description:
      'Professional legal, corporate, real estate, website creation, AI automation, translation, insurance, and consulting services in Bulgaria with transparent pricing.',
    areaServed: 'Bulgaria',
    availableLanguage: ['en', 'ru', 'bg', 'de', 'it'],
    serviceType: [
      'Company registration in Bulgaria',
      'Trade representation office registration',
      'Legal consultation',
      'Contract drafting',
      'Real estate services',
      'Insurance assistance',
      'Website creation',
      'AI automation',
      'Telegram auto-posting setup',
      'Translation and legalization',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services & Pricing',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'EOOD Company Registration',
          price: '255',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'OOD Company Registration',
          price: '285',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'EOOD / OOD Registration for Non-EU Citizens',
          price: '485',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Trade Representation Office Registration',
          price: '1150',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Bank Account Opening Assistance',
          price: '75',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Legal Consultation for Company Registration',
          price: '35',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Business Consulting',
          price: '35',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Legal Consultation',
          price: '55',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Monthly Legal Support',
          price: '295',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Professional Real Estate Website',
          price: '275',
          priceCurrency: 'EUR',
          description: 'Starting price',
        },
        {
          '@type': 'Offer',
          name: 'AI Auto-Posting Assistant for Telegram',
          price: '220',
          priceCurrency: 'EUR',
          description: 'One-time setup payment',
        },
        {
          '@type': 'Offer',
          name: 'AI Auto-Posting Monthly Support',
          price: '28',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Brokerage Commission',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'EUR',
            description: '3.6% of purchase price, minimum €1,000',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: 1,
              unitText: 'transaction',
            },
          },
        },
      ],
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name:
          lang === 'ru'
            ? 'Сколько стоит регистрация компании в Болгарии?'
            : lang === 'bg'
              ? 'Колко струва регистрация на фирма в България?'
              : lang === 'de'
                ? 'Wie viel kostet die Firmengründung in Bulgarien?'
                : lang === 'it'
                  ? 'Quanto costa registrare una società in Bulgaria?'
                  : 'How much does company registration in Bulgaria cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'ru'
              ? 'Регистрация ЕООД начинается от €255 для граждан ЕС. Для граждан вне ЕС регистрация ЕООД / ООД начинается от €485.'
              : lang === 'bg'
                ? 'Регистрацията на ЕООД започва от €255 за граждани на ЕС. За граждани извън ЕС регистрацията на ЕООД / ООД започва от €485.'
                : lang === 'de'
                  ? 'Die EOOD-Gründung beginnt bei €255 für EU-Bürger. Für Nicht-EU-Bürger beginnt die EOOD / OOD-Registrierung bei €485.'
                  : lang === 'it'
                    ? 'La registrazione di una EOOD parte da €255 per cittadini UE. Per cittadini non UE la registrazione EOOD / OOD parte da €485.'
                    : 'EOOD registration starts from €255 for EU citizens. For non-EU citizens, EOOD / OOD registration starts from €485.',
        },
      },
      {
        '@type': 'Question',
        name:
          lang === 'ru'
            ? 'Сколько стоит создание сайта по недвижимости?'
            : lang === 'bg'
              ? 'Колко струва създаването на сайт за недвижими имоти?'
              : lang === 'de'
                ? 'Wie viel kostet eine Immobilien-Website?'
                : lang === 'it'
                  ? 'Quanto costa creare un sito immobiliare?'
                  : 'How much does a professional real estate website cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'ru'
              ? 'Создание SEO-профессионального сайта по недвижимости начинается от €275.'
              : lang === 'bg'
                ? 'Създаването на SEO професионален сайт за недвижими имоти започва от €275.'
                : lang === 'de'
                  ? 'Die Erstellung einer SEO-optimierten professionellen Immobilien-Website beginnt ab €275.'
                  : lang === 'it'
                    ? 'La creazione di un sito immobiliare professionale ottimizzato SEO parte da €275.'
                    : 'An SEO professional real estate website starts from €275.',
        },
      },
      {
        '@type': 'Question',
        name:
          lang === 'ru'
            ? 'Сколько стоит AI-ассистент автопостинга для Telegram?'
            : lang === 'bg'
              ? 'Колко струва AI асистент за автопостинг в Telegram?'
              : lang === 'de'
                ? 'Wie viel kostet ein KI-Autoposting-Assistent für Telegram?'
                : lang === 'it'
                  ? 'Quanto costa un assistente AI di autoposting per Telegram?'
                  : 'How much does an AI Telegram auto-posting assistant cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'ru'
              ? 'Настройка стоит €220 one-time payment, а дальнейшая поддержка — €28 в месяц.'
              : lang === 'bg'
                ? 'Настройката струва €220 еднократно, а последващата поддръжка е €28 на месец.'
                : lang === 'de'
                  ? 'Die Einrichtung kostet €220 einmalig, die laufende Betreuung €28 pro Monat.'
                  : lang === 'it'
                    ? 'La configurazione costa €220 una tantum, mentre il supporto successivo è di €28 al mese.'
                    : 'Setup costs €220 one-time, plus €28 per month for support.',
        },
      },
    ],
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <html lang={lang} />
          <title>{pageTitle}</title>
          <meta name="description" content={pageDesc} />
          <meta
            name="keywords"
            content="Bulgaria company registration prices, legal services Bulgaria, real estate services Bulgaria, AI automation Bulgaria, Telegram auto posting, website creation Bulgaria, trade representation office Bulgaria, contract drafting Bulgaria"
          />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <meta name="author" content="NICS Services Bulgaria" />

          <link rel="canonical" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en" href={`${alternatePath}en`} />
          <link rel="alternate" hrefLang="ru" href={`${alternatePath}ru`} />
          <link rel="alternate" hrefLang="bg" href={`${alternatePath}bg`} />
          <link rel="alternate" hrefLang="de" href={`${alternatePath}de`} />
          <link rel="alternate" hrefLang="it" href={`${alternatePath}it`} />
          <link rel="alternate" hrefLang="x-default" href={`${alternatePath}en`} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDesc} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:site_name" content="NICS Services Bulgaria" />
          <meta property="og:locale" content={localeMap[lang] ?? 'en_US'} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDesc} />
          <meta name="twitter:image" content={ogImage} />

          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
          <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        </Helmet>

        <Header />

        <main className="flex-1">
          <section className="relative py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container text-center space-y-4 max-w-4xl">
              <Badge variant="secondary" className="text-sm font-medium px-4 py-1">
                {badgeText}
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                {heroSubtitle}
              </p>
            </div>
          </section>

          <section className="py-10 sm:py-12">
            <div className="container max-w-4xl space-y-8">
              <section className="rounded-2xl border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-5 w-5 text-primary shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {introHeading}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-7">
                  {introText}
                </p>
              </section>

              <nav
                aria-label={tocTitle}
                className="rounded-2xl border bg-card p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <LinkIcon className="h-5 w-5 text-primary shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">{tocTitle}</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#section-${index}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </section>

          <section className="pb-12 sm:pb-16">
            <div className="container max-w-4xl space-y-12">
              {sections.map((section, index) => (
                <div key={index}>
                  <PriceSectionBlock section={section} index={index} />
                  {index < sections.length - 1 && <Separator className="mt-12" />}
                </div>
              ))}
            </div>
          </section>

          {/* AI Document Generator */}
          <DocumentGenerator />

          <section className="py-16 bg-muted/30">
            <div className="container text-center space-y-6 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{ctaTitle}</h2>

              <p className="text-muted-foreground">{ctaDescription}</p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {ctaButton}
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;