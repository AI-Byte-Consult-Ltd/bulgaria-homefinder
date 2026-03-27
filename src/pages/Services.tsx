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
  Landmark,
  Palette,
  Award,
  Languages,
  Search,
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
    en: 'Transparent pricing in Bulgaria: company registration from €535, non-EU company registration €485, legal consultation from €35, monthly legal support €295, real estate website creation from €275, AI Telegram auto-posting from €220 + €28/month.',
    ru: 'Прозрачные цены в Болгарии: регистрация компании от €535, регистрация для граждан вне ЕС €485, юридическая консультация от €35, юридический абонемент €295, сайт по недвижимости от €275, AI автопостинг в Telegram от €220 + €28/мес.',
    bg: 'Прозрачни цени в България: регистрация на фирма от €535, регистрация за граждани извън ЕС €485, правна консултация от €35, правен абонамент €295, сайт за имоти от €275, AI автопостинг в Telegram от €220 + €28/месец.',
    de: 'Transparente Preise in Bulgarien: Firmengründung ab €535, Registrierung für Nicht-EU-Bürger €485, Rechtsberatung ab €35, Rechtsabo €295, Immobilien-Website ab €275, KI-Telegram-Autoposting ab €220 + €28/Monat.',
    it: 'Prezzi trasparenti in Bulgaria: registrazione società da €535, registrazione per cittadini non UE €485, consulenza legale da €35, abbonamento legale €295, sito immobiliare da €275, autoposting AI Telegram da €220 + €28/mese.',
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

  // ─── Localised strings for new / updated items ───────────────────────────────

  // Company registration section: EU citizens group header
  const euCitizensLabel: Record<string, string> = {
    en: 'For EU Citizens',
    ru: 'Для граждан ЕС',
    bg: 'За граждани на ЕС',
    de: 'Für EU-Bürger',
    it: 'Per cittadini UE',
  };

  // EOOD name
  const eoodName: Record<string, string> = {
    en: 'EOOD Registration (Single-Owner LLC)',
    ru: 'Регистрация ЕООД (ООО с одним учредителем)',
    bg: 'Регистрация на ЕООД (ООД с един собственик)',
    de: 'EOOD-Gründung (Einpersonen-GmbH)',
    it: 'Registrazione EOOD (SRL unipersonale)',
  };

  // EOOD includes
  const eoodIncludes: Record<string, string> = {
    en: 'Preparation and submission of registration documents',
    ru: 'Подготовка и подача регистрационных документов',
    bg: 'Подготовка и подаване на документи за регистрация',
    de: 'Vorbereitung und Einreichung der Anmeldedokumente',
    it: 'Preparazione e presentazione dei documenti di registrazione',
  };

  // Bank account NOT included — extra note
  const bankNotIncluded: Record<string, string> = {
    en: 'Bank account opening is not included — see "Assistance with Bank Account Opening" below',
    ru: 'Открытие банковского счёта не включено — см. «Сопровождение в банк для открытия счёта» ниже',
    bg: 'Откриването на банкова сметка не е включено — вижте „Придружаване в банката за сметка" по-долу',
    de: 'Kontoeröffnung nicht enthalten — siehe unten „Begleitung zur Bank für Kontoeröffnung"',
    it: 'Apertura conto bancario non inclusa — vedi sotto "Accompagnamento in banca per apertura conto"',
  };

  // EOOD time
  const eoodTime: Record<string, string> = {
    en: '5–7 business days',
    ru: '5–7 рабочих дней',
    bg: '5–7 работни дни',
    de: '5–7 Werktage',
    it: '5–7 giorni lavorativi',
  };

  // OOD name
  const oodName: Record<string, string> = {
    en: 'OOD Registration (Multi-Owner LLC)',
    ru: 'Регистрация ООД (ООО с несколькими учредителями)',
    bg: 'Регистрация на ООД (ООД с няколко собственика)',
    de: 'OOD-Gründung (Mehrpersonen-GmbH)',
    it: 'Registrazione OOD (SRL multi-socio)',
  };

  // OOD includes
  const oodIncludes: Record<string, string> = {
    en: 'Up to 2 shareholders included',
    ru: 'До 2 учредителей включено',
    bg: 'До 2 съдружника включени',
    de: 'Bis zu 2 Gesellschafter inklusive',
    it: 'Fino a 2 soci inclusi',
  };

  // OOD extra
  const oodExtra: Record<string, string> = {
    en: 'Each additional shareholder: +€50',
    ru: 'Каждый дополнительный учредитель: +€50',
    bg: 'Всеки допълнителен съдружник: +€50',
    de: 'Jeder weitere Gesellschafter: +€50',
    it: 'Ogni socio aggiuntivo: +€50',
  };

  // OOD time
  const oodTime: Record<string, string> = {
    en: '3–5 business days',
    ru: '3–5 рабочих дней',
    bg: '3–5 работни дни',
    de: '3–5 Werktage',
    it: '3–5 giorni lavorativi',
  };

  // Non-EU group header
  const nonEuLabel: Record<string, string> = {
    en: 'For Non-EU Citizens',
    ru: 'Для граждан вне ЕС',
    bg: 'За граждани извън ЕС',
    de: 'Für Nicht-EU-Bürger',
    it: 'Per cittadini non UE',
  };

  // Non-EU EOOD/OOD registration name
  const nonEuRegName: Record<string, string> = {
    en: 'EOOD / OOD Registration (For Non-EU Citizens)',
    ru: 'Регистрация ЕООД / ООД (для граждан вне ЕС)',
    bg: 'Регистрация на ЕООД / ООД (за граждани извън ЕС)',
    de: 'EOOD / OOD Registrierung (für Nicht-EU-Bürger)',
    it: 'Registrazione EOOD / OOD (per cittadini non UE)',
  };

  // Non-EU timeline
  const nonEuTimeline: Record<string, string> = {
    en: 'Timeline: individual',
    ru: 'Срок: индивидуально',
    bg: 'Срок: индивидуално',
    de: 'Bearbeitungszeit: individuell',
    it: 'Tempistica: individuale',
  };

  // Capital collection account name
  const capitalAccountName: Record<string, string> = {
    en: 'Capital Collection Bank Account for Company Registration',
    ru: 'Набирательная сметка для регистрации компании',
    bg: 'Набирателна сметка за регистрация на фирма',
    de: 'Kapitalsammelkonto für die Firmenregistrierung',
    it: 'Conto capitale vincolato per la registrazione della società',
  };

  // Power of attorney name
  const poaName: Record<string, string> = {
    en: 'Power of Attorney — Drafting & Notarization',
    ru: 'Составление и нотариальное заверение доверенности',
    bg: 'Изготвяне и нотариална заверка на пълномощно',
    de: 'Vollmacht — Erstellung und notarielle Beglaubigung',
    it: 'Procura — redazione e autenticazione notarile',
  };

  // Specimen signature name
  const specimenName: Record<string, string> = {
    en: "Director's Specimen Signature",
    ru: 'Образец подписи директора',
    bg: 'Спесимен на подписа на управителя',
    de: 'Unterschriftsprobe des Geschäftsführers',
    it: "Specimen della firma dell'amministratore",
  };

  // Contact person declaration name
  const contactDeclName: Record<string, string> = {
    en: 'Contact Person Declaration',
    ru: 'Декларация контактного лица',
    bg: 'Декларация на контактно лице',
    de: 'Erklärung der Kontaktperson',
    it: 'Dichiarazione della persona di contatto',
  };

  // ─── Bank account accompaniment (updated: €65/hr, not a flat fee) ───────────
  const bankAccompName: Record<string, string> = {
    en: 'Accompanied Visit to Bank for Account Opening',
    ru: 'Сопровождение в банк для открытия счёта',
    bg: 'Придружаване в банката за откриване на сметка',
    de: 'Begleitung zur Bank für Kontoeröffnung',
    it: "Accompagnamento in banca per apertura conto",
  };

  const bankAccompIncludes: Record<string, string[]> = {
    en: [
      'Personal accompaniment to the bank by our specialist',
      'Bank account opening cost is not included — covers specialist time only',
      'Document costs (translations, notarization, etc.) are not included',
    ],
    ru: [
      'Личное сопровождение в банк нашим специалистом',
      'Стоимость открытия счёта в банке не включена — оплачивается только время специалиста',
      'Расходы на документы (переводы, нотариальное заверение и т.д.) не включены',
    ],
    bg: [
      'Лично придружаване в банката от наш специалист',
      'Разходите за открИване на сметката не са включени — заплаща се само времето на специалиста',
      'Разходите за документи (преводи, нотариална заверка и др.) не са включени',
    ],
    de: [
      'Persönliche Begleitung zur Bank durch unseren Spezialisten',
      'Kontoführungsgebühren nicht enthalten — nur die Zeit des Spezialisten wird berechnet',
      'Dokumentenkosten (Übersetzungen, Beglaubigungen usw.) nicht enthalten',
    ],
    it: [
      'Accompagnamento personale in banca da parte del nostro specialista',
      "Il costo di apertura del conto bancario non è incluso — si paga solo il tempo dello specialista",
      'I costi dei documenti (traduzioni, autenticazioni, ecc.) non sono inclusi',
    ],
  };

  const bankAccompTime: Record<string, string> = {
    en: 'Depends on the bank',
    ru: 'Зависит от банка',
    bg: 'Зависи от банката',
    de: 'Abhängig von der Bank',
    it: 'Dipende dalla banca',
  };

  // Legal consultation for company reg
  const legalConsultRegName: Record<string, string> = {
    en: 'Legal Consultation for Company Registration',
    ru: 'Юридическая консультация по регистрации компании',
    bg: 'Правна консултация за регистрация на фирма',
    de: 'Rechtsberatung zur Firmengründung',
    it: 'Consulenza legale per la registrazione della società',
  };

  // Registered company address
  const companyAddressLabel = t('pricelist.companyAddress', {
    defaultValue: 'Registered Company Address',
  });

  // ─── Consulting section ──────────────────────────────────────────────────────
  const businessConsultName: Record<string, string> = {
    en: 'Business Consulting',
    ru: 'Бизнес-консультация',
    bg: 'Бизнес консултация',
    de: 'Business-Beratung',
    it: 'Consulenza business',
  };

  const legalConsultName: Record<string, string> = {
    en: 'Legal Consultation',
    ru: 'Юридическая консультация',
    bg: 'Правна консултация',
    de: 'Rechtsberatung',
    it: 'Consulenza legale',
  };

  // Government accompaniment (updated: €65/hr, covers any government institution)
  const govAccompName: Record<string, string> = {
    en: 'Accompaniment to Bulgarian Government Offices or Institutions',
    ru: 'Сопровождение по болгарским государственным органам и учреждениям',
    bg: 'Придружаване по български държавни органи и институции',
    de: 'Begleitung zu bulgarischen Behörden und Institutionen',
    it: 'Accompagnamento presso uffici e istituzioni governative bulgare',
  };

  const govAccompIncludes: Record<string, string[]> = {
    en: [
      'Personal accompaniment to any government office, municipality, notary, court, etc.',
      'Document costs (stamps, state fees, translations, etc.) are not included — covers specialist time only',
    ],
    ru: [
      'Личное сопровождение в любой государственный орган, муниципалитет, нотариус, суд и т.д.',
      'Расходы на документы (марки, госпошлины, переводы и т.д.) не включены — оплачивается только время специалиста',
    ],
    bg: [
      'Лично придружаване до всеки държавен орган, общинА, нотариус, съд и др.',
      'Разходите за документи (таксови марки, държавни такси, преводи и др.) не са включени — заплаща се само времето на специалиста',
    ],
    de: [
      'Persönliche Begleitung zu jeder Behörde, Gemeinde, Notar, Gericht usw.',
      'Dokumentenkosten (Stempel, Staatsgebühren, Übersetzungen usw.) nicht enthalten — nur die Zeit des Spezialisten wird berechnet',
    ],
    it: [
      'Accompagnamento personale a qualsiasi ufficio governativo, comune, notaio, tribunale, ecc.',
      'I costi dei documenti (marche, tasse statali, traduzioni, ecc.) non sono inclusi — si paga solo il tempo dello specialista',
    ],
  };

  const euGrantName: Record<string, string> = {
    en: 'EU Grant Application',
    ru: 'Подача на грант от Европейского Союза',
    bg: 'Кандидатстване за грант от Европейския съюз',
    de: 'Beantragung von EU-Fördermitteln',
    it: "Domanda di sovvenzione dell'Unione Europea",
  };

  const euGrantPrice: Record<string, string> = {
    en: '3.6–10% of grant amount',
    ru: '3,6–10% от суммы гранта',
    bg: '3,6–10% от сумата на гранта',
    de: '3,6–10% der Fördersumme',
    it: "3,6–10% dell'importo del finanziamento",
  };

  const euGrantIncludes: Record<string, string> = {
    en: 'Depending on project complexity',
    ru: 'В зависимости от сложности проекта',
    bg: 'В зависимост от сложността на проекта',
    de: 'Abhängig von der Projektkomplexität',
    it: 'In base alla complessità del progetto',
  };

  // ─── Real Estate section — new item: apartment sale/purchase document prep ──
  const apartmentDocsPrepName: Record<string, string> = {
    en: 'Document Preparation for Apartment Sale or Purchase',
    ru: 'Подготовка документов для продажи или покупки квартиры',
    bg: 'Подготовка на документи за продажба или покупка на апартамент',
    de: 'Dokumentenvorbereitung für Kauf oder Verkauf einer Wohnung',
    it: "Preparazione documenti per vendita o acquisto di appartamento",
  };

  const apartmentDocsIncludes: Record<string, string[]> = {
    en: [
      'Full preparation and follow-up of all documents required to sell or buy an apartment',
      'Coordination with notary, municipal offices, and all relevant institutions',
      'Document costs (state fees, notary fees, translations, etc.) are not included — covers specialist time only',
    ],
    ru: [
      'Полная подготовка и сопровождение всех документов для продажи или покупки квартиры',
      'Взаимодействие с нотариусом, муниципальными органами и всеми соответствующими учреждениями',
      'Расходы на документы (госпошлины, нотариальные сборы, переводы и т.д.) не включены — оплачивается только время специалиста',
    ],
    bg: [
      'Пълна подготовка и придружаване на всички документи за продажба или покупка на апартамент',
      'Координация с нотариус, общинска администрация и всички свързани институции',
      'Разходите за документи (държавни такси, нотариални такси, преводи и др.) не са включени — заплаща се само времето на специалиста',
    ],
    de: [
      'Vollständige Vorbereitung und Nachverfolgung aller Unterlagen für Kauf oder Verkauf einer Wohnung',
      'Koordination mit Notar, Gemeindeämtern und allen relevanten Institutionen',
      'Dokumentenkosten (Staatsgebühren, Notargebühren, Übersetzungen usw.) nicht enthalten — nur die Zeit des Spezialisten wird berechnet',
    ],
    it: [
      'Preparazione completa e follow-up di tutti i documenti necessari per vendere o acquistare un appartamento',
      'Coordinamento con notaio, uffici comunali e tutte le istituzioni competenti',
      'I costi dei documenti (tasse statali, onorari notarili, traduzioni, ecc.) non sono inclusi — si paga solo il tempo dello specialista',
    ],
  };

  // Property search
  const propSearchName = t('pricelist.propertySearch', {
    defaultValue: 'Property Search & Buyer Support',
  });

  const propSearchInc1 = t('pricelist.propertySearchInclude1', {
    defaultValue: 'Property shortlist based on your criteria',
  });

  const propSearchInc2 = t('pricelist.propertySearchInclude2', {
    defaultValue: 'Coordination with sellers/agents and document checks support',
  });

  const propSearchTime = t('pricelist.propertySearchTime', {
    defaultValue: 'Depends on the case',
  });

  // Brokerage
  const brokerName = t('pricelist.brokerCommission', {
    defaultValue: 'Brokerage Commission (Buyer/Seller Representation)',
  });

  const brokerPrice = t('pricelist.brokerCommissionPrice', {
    defaultValue: '3.6% of purchase price, min. €1,000',
  });

  const brokerInc1 = t('pricelist.brokerCommissionInclude1', {
    defaultValue: 'Professional representation and negotiation support',
  });

  const brokerInc2 = t('pricelist.brokerCommissionInclude2', {
    defaultValue: 'Coordination of the transaction process',
  });

  // Rental search
  const rentalName: Record<string, string> = {
    en: 'Rental Search',
    ru: 'Поиск аренды',
    bg: 'Търсене на наем',
    de: 'Mietsuche',
    it: 'Ricerca affitto',
  };

  const rentalPrice: Record<string, string> = {
    en: '50% of monthly rent',
    ru: '50% от месячной арендной платы',
    bg: '50% от месечния наем',
    de: '50% der Monatsmiete',
    it: '50% del canone mensile',
  };

  // Property management
  const propMgmtName: Record<string, string> = {
    en: 'Property Management & Rental',
    ru: 'Управление недвижимостью, сдача в аренду',
    bg: 'Управление на имот, отдаване под наем',
    de: 'Immobilienverwaltung & Vermietung',
    it: 'Gestione immobiliare e affitto',
  };

  const propMgmtPrice: Record<string, string> = {
    en: '30% of net profit',
    ru: '30% от чистой прибыли',
    bg: '30% от нетната печалба',
    de: '30% des Nettogewinns',
    it: '30% del profitto netto',
  };

  // ─── Website & AI sections (unchanged titles) ────────────────────────────────
  const websiteSectionTitle: Record<string, string> = {
    en: 'Professional Real Estate Website Creation',
    ru: 'Создание профессионального сайта по недвижимости',
    bg: 'Създаване на професионален сайт за недвижими имоти',
    de: 'Erstellung einer professionellen Immobilien-Website',
    it: 'Creazione di un sito professionale per il settore immobiliare',
  };

  const websiteName: Record<string, string> = {
    en: 'SEO Professional Real Estate Website',
    ru: 'SEO-профессиональный сайт по недвижимости',
    bg: 'SEO професионален сайт за недвижими имоти',
    de: 'SEO-optimierte professionelle Immobilien-Website',
    it: 'Sito immobiliare professionale ottimizzato SEO',
  };

  const websiteInc: Record<string, string[]> = {
    en: [
      'Modern responsive design',
      'Basic SEO page structure',
      'Prepared for real estate listings and promotion',
    ],
    ru: [
      'Современный адаптивный дизайн',
      'Базовая SEO-структура страниц',
      'Подготовка под продвижение объектов недвижимости',
    ],
    bg: [
      'Съвременен адаптивен дизайн',
      'Базова SEO структура на страниците',
      'Подготовка за представяне на имоти',
    ],
    de: [
      'Modernes responsives Design',
      'Grundlegende SEO-Seitenstruktur',
      'Vorbereitung für die Präsentation von Immobilienobjekten',
    ],
    it: [
      'Design moderno e responsive',
      'Struttura SEO di base delle pagine',
      'Preparazione per la presentazione degli immobili',
    ],
  };

  const aiSectionTitle: Record<string, string> = {
    en: 'AI Automation & Auto-Posting',
    ru: 'ИИ-автоматизация и автопостинг',
    bg: 'AI автоматизация и автопостинг',
    de: 'KI-Automatisierung und Auto-Posting',
    it: 'Automazione AI e autoposting',
  };

  const tgBotName: Record<string, string> = {
    en: 'AI Auto-Posting Assistant for Your Telegram Channel or Telegram Group',
    ru: 'Создание ИИ-ассистента автопостинга для вашего Telegram-канала или Telegram-группы',
    bg: 'Създаване на AI асистент за автопостинг за вашия Telegram канал или Telegram група',
    de: 'Erstellung eines KI-Auto-Posting-Assistenten für Ihren Telegram-Kanal oder Ihre Telegram-Gruppe',
    it: 'Creazione di un assistente AI per autoposting per il tuo canale o gruppo Telegram',
  };

  const tgBotPrice: Record<string, string> = {
    en: '€220 one-time + €28 / mo',
    ru: '€220 one-time + €28 / mo',
    bg: '€220 еднократно + €28 / мес',
    de: '€220 einmalig + €28 / Mon.',
    it: '€220 una tantum + €28 / mese',
  };

  const tgBotInc: Record<string, string[]> = {
    en: [
      'Auto-posting logic setup',
      'Basic adaptation to your content',
      'Monthly support and maintenance',
    ],
    ru: [
      'Настройка логики автопостинга',
      'Базовая адаптация под ваш контент',
      'Ежемесячная поддержка и сопровождение',
    ],
    bg: [
      'Настройка на логика за автопостинг',
      'Базова адаптация към вашето съдържание',
      'Месечна поддръжка и съдействие',
    ],
    de: [
      'Einrichtung der Auto-Posting-Logik',
      'Grundlegende Anpassung an Ihren Content',
      'Monatliche Betreuung und Support',
    ],
    it: [
      'Impostazione della logica di autoposting',
      'Adattamento di base ai tuoi contenuti',
      'Supporto e manutenzione mensile',
    ],
  };

  const aiTransName: Record<string, string> = {
    en: 'AI Translation & Content Adaptation for Website, Telegram, and Listings',
    ru: 'ИИ-перевод и адаптация контента для сайта, Telegram и объявлений',
    bg: 'AI превод и адаптация на съдържание за сайт, Telegram и обяви',
    de: 'KI-Übersetzung und Content-Anpassung für Website, Telegram und Anzeigen',
    it: 'Traduzione AI e adattamento dei contenuti per sito, Telegram e annunci',
  };

  const aiTransInc: Record<string, string[]> = {
    en: ['Translation and style adaptation', 'Support for multilingual content'],
    ru: ['Перевод и адаптация под нужный стиль', 'Поддержка мультиязычного контента'],
    bg: ['Превод и адаптация към желания стил', 'Поддръжка на многоезично съдържание'],
    de: [
      'Übersetzung und Anpassung an den gewünschten Stil',
      'Unterstützung für mehrsprachige Inhalte',
    ],
    it: ['Traduzione e adattamento allo stile richiesto', 'Supporto per contenuti multilingua'],
  };

  const aiLeadName: Record<string, string> = {
    en: 'AI Assistant for Handling Real Estate Website Leads',
    ru: 'ИИ-ассистент для обработки заявок с сайта недвижимости',
    bg: 'AI асистент за обработка на запитвания от сайт за имоти',
    de: 'KI-Assistent zur Bearbeitung von Anfragen über eine Immobilien-Website',
    it: 'Assistente AI per la gestione delle richieste dal sito immobiliare',
  };

  const aiLeadInc: Record<string, string[]> = {
    en: [
      'Collection and structuring of incoming leads',
      'Suitable for real estate websites and service pages',
    ],
    ru: [
      'Сбор и структурирование входящих заявок',
      'Подходит для сайтов недвижимости и сервисных страниц',
    ],
    bg: [
      'Събиране и структуриране на входящи запитвания',
      'Подходящо за сайтове за имоти и сервизни страници',
    ],
    de: [
      'Erfassung und Strukturierung eingehender Anfragen',
      'Geeignet für Immobilien-Websites und Service-Seiten',
    ],
    it: [
      'Raccolta e strutturazione delle richieste in entrata',
      'Adatto a siti immobiliari e pagine di servizi',
    ],
  };

  const aiInsurName: Record<string, string> = {
    en: 'Insurance Inquiry Automation & Initial Request Processing',
    ru: 'Автоматизация страховых заявок и первичной обработки запросов',
    bg: 'Автоматизация на застрахователни запитвания и първична обработка',
    de: 'Automatisierung von Versicherungsanfragen und Erstbearbeitung',
    it: 'Automazione delle richieste assicurative e pre-elaborazione',
  };

  const aiInsurInc: Record<string, string[]> = {
    en: [
      'Suitable for insurance brokers and service companies',
      'Basic routing and sorting of inquiries',
    ],
    ru: [
      'Подходит для страховых брокеров и сервисных компаний',
      'Базовая маршрутизация и сортировка заявок',
    ],
    bg: [
      'Подходящо за застрахователни брокери и сервизни компании',
      'Базово маршрутизиране и сортиране на запитвания',
    ],
    de: [
      'Geeignet für Versicherungsmakler und Serviceunternehmen',
      'Grundlegende Weiterleitung und Sortierung von Anfragen',
    ],
    it: [
      'Adatto per broker assicurativi e società di servizi',
      'Instradamento e smistamento di base delle richieste',
    ],
  };

  // ─── Government & Administrative section ─────────────────────────────────────
  const govSectionTitle: Record<string, string> = {
    en: 'Government & Administrative Services',
    ru: 'Государственные и административные услуги',
    bg: 'Държавни и административни услуги',
    de: 'Behördliche & administrative Dienste',
    it: 'Servizi governativi e amministrativi',
  };

  const taxNumName: Record<string, string> = {
    en: 'Bulgarian Tax Number & NAP PIN Acquisition',
    ru: 'Получение налогового номера в Болгарии и ПИК на НАП',
    bg: 'Получаване на данъчен номер в България и ПИК на НАП',
    de: 'Steuernummer in Bulgarien & PIN des Finanzamts (NAP)',
    it: 'Ottenimento codice fiscale in Bulgaria e PIN NAP',
  };

  const taxNumPrice: Record<string, string> = {
    en: '€30 / person',
    ru: '€30 / чел.',
    bg: '€30 / човек',
    de: '€30 / Person',
    it: '€30 / persona',
  };

  const contactCertName: Record<string, string> = {
    en: 'Company Contact Person Certificate for Bank (for opening capital or current account)',
    ru: 'Справка — контактное лицо фирмы для банка (для открытия набирательного или расчётного счёта)',
    bg: 'Удостоверение — контактно лице на фирмата за банка (за откриване на набирателна или разплащателна сметка)',
    de: 'Bescheinigung — Kontaktperson der Firma für die Bank (zur Eröffnung eines Kapital- oder Girokontos)',
    it: 'Certificato — persona di contatto della società per la banca (per apertura conto vincolato o corrente)',
  };

  // ─── Design section ───────────────────────────────────────────────────────────
  const designSectionTitle: Record<string, string> = {
    en: 'Design & Architecture',
    ru: 'Дизайн и архитектура',
    bg: 'Дизайн и архитектура',
    de: 'Design & Architektur',
    it: 'Design e architettura',
  };

  const interiorName: Record<string, string> = {
    en: 'Interior Design Sketch Project for Your Property',
    ru: 'Дизайн-эскиз проекта вашей недвижимости (интерьер)',
    bg: 'Дизайн-скица на проекта за вашия имот (интериор)',
    de: 'Design-Skizzenprojekt Ihrer Immobilie (Inneneinrichtung)',
    it: 'Progetto di design del vostro immobile (interni)',
  };

  const interiorInc: Record<string, string> = {
    en: 'Price depends on project complexity and area',
    ru: 'Цена зависит от сложности проекта и площади',
    bg: 'Цената зависи от сложността на проекта и площта',
    de: 'Preis abhängig von Projektkomplexität und Fläche',
    it: 'Prezzo in base alla complessità del progetto e alla superficie',
  };

  // ─── Additional services ──────────────────────────────────────────────────────
  const interpreterName: Record<string, string> = {
    en: 'Interpreter Services',
    ru: 'Услуги переводчика',
    bg: 'Услуги на преводач',
    de: 'Dolmetscherdienste',
    it: 'Servizi di interprete',
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // Build sections array
  // ─────────────────────────────────────────────────────────────────────────────
  const sections: PriceSection[] = [
    // 1. Company Registration
    {
      icon: Building2,
      title: t('pricelist.section1Title', { defaultValue: 'Company Registration in Bulgaria' }),
      groups: [
        {
          groupTitle: euCitizensLabel[lang],
          services: [
            {
              name: eoodName[lang],
              price: '€535',
              includes: [
                eoodIncludes[lang],
                bankNotIncluded[lang],
              ],
              time: eoodTime[lang],
            },
            {
              name: oodName[lang],
              price: '€535',
              includes: [
                oodIncludes[lang],
                bankNotIncluded[lang],
              ],
              extras: [oodExtra[lang]],
              time: oodTime[lang],
            },
          ],
        },
        {
          groupTitle: nonEuLabel[lang],
          services: [
            {
              name: nonEuRegName[lang],
              price: '€785',
              includes: [eoodIncludes[lang]],
              time: nonEuTimeline[lang],
            },
            {
              name: capitalAccountName[lang],
              price: '€295',
            },
            {
              name: poaName[lang],
              price: '€65',
            },
            {
              name: specimenName[lang],
              price: '€65',
            },
            {
              name: contactDeclName[lang],
              price: '€95',
            },
          ],
        },
      ],
      services: [
        {
          name: bankAccompName[lang],
          price: '€65 / hr',
          includes: bankAccompIncludes[lang],
          time: bankAccompTime[lang],
        },
        {
          name: legalConsultRegName[lang],
          price: '€35 / 30 min',
        },
        {
          name: companyAddressLabel,
          price: individualLabel,
        },
      ],
    },

    // 2. Trade Representation Office
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
          price: '€2,100',
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
              defaultValue: 'Each additional trade representative: +€2100',
            }),
          ],
          time: t('pricelist.tradeRepTime', {
            defaultValue: '10–20 business days (typical)',
          }),
        },
      ],
    },

    // 3. Contract Drafting
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

    // 4. Consulting
    {
      icon: MessageSquare,
      title: t('pricelist.section4Title', { defaultValue: 'Consulting' }),
      services: [
        {
          name: businessConsultName[lang],
          price: '€35 / 30 min',
        },
        {
          name: legalConsultName[lang],
          price: '€55 / 30 min',
        },
        {
          name: govAccompName[lang],
          price: '€65 / hr',
          includes: govAccompIncludes[lang],
        },
        {
          name: euGrantName[lang],
          price: euGrantPrice[lang],
          includes: [euGrantIncludes[lang]],
        },
      ],
    },

    // 5. Legal Subscription
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

    // 6. Real Estate Services
    {
      icon: Home,
      title: t('pricelist.section7Title', { defaultValue: 'Real Estate Services' }),
      services: [
        {
          name: apartmentDocsPrepName[lang],
          price: '€625',
          includes: apartmentDocsIncludes[lang],
        },
        {
          name: propSearchName,
          price: individualLabel,
          includes: [propSearchInc1, propSearchInc2],
          time: propSearchTime,
        },
        {
          name: brokerName,
          price: brokerPrice,
          includes: [brokerInc1, brokerInc2],
        },
        {
          name: rentalName[lang],
          price: rentalPrice[lang],
        },
        {
          name: propMgmtName[lang],
          price: propMgmtPrice[lang],
        },
      ],
    },

    // 7. Insurance
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
            t('pricelist.insLiability', { defaultValue: 'Third-party liability insurance' }),
            t('pricelist.insCasco', { defaultValue: 'Motor insurance (CASCO)' }),
          ],
          time: t('pricelist.insuranceTime', {
            defaultValue: 'Depends on the insurer and coverage',
          }),
        },
      ],
    },

    // 8. Website Creation
    {
      icon: Globe,
      title: websiteSectionTitle[lang],
      services: [
        {
          name: websiteName[lang],
          price: `${fromLabel} €275`,
          includes: websiteInc[lang],
          time: nonEuTimeline[lang],
        },
      ],
    },

    // 9. AI Automation
    {
      icon: Bot,
      title: aiSectionTitle[lang],
      services: [
        {
          name: tgBotName[lang],
          price: tgBotPrice[lang],
          includes: tgBotInc[lang],
        },
        {
          name: aiTransName[lang],
          price: individualLabel,
          includes: aiTransInc[lang],
        },
        {
          name: aiLeadName[lang],
          price: individualLabel,
          includes: aiLeadInc[lang],
        },
        {
          name: aiInsurName[lang],
          price: individualLabel,
          includes: aiInsurInc[lang],
        },
      ],
    },

    // 10. Government & Administrative
    {
      icon: Landmark,
      title: govSectionTitle[lang],
      services: [
        {
          name: taxNumName[lang],
          price: taxNumPrice[lang],
        },
        {
          name: contactCertName[lang],
          price: '€75',
        },
      ],
    },

    // 11. Design & Architecture
    {
      icon: Palette,
      title: designSectionTitle[lang],
      services: [
        {
          name: interiorName[lang],
          price: '€5–15 / m²',
          includes: [interiorInc[lang]],
        },
      ],
    },

    // 12. Additional Services
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
          name: interpreterName[lang],
          price: '€45 / 30 min',
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
      'Apartment sale and purchase document preparation',
      'Insurance assistance',
      'Website creation',
      'AI automation',
      'Telegram auto-posting setup',
      'Translation and legalization',
      'Tax number acquisition in Bulgaria',
      'EU grant application',
      'Interior design',
      'Interpreter services',
      'Property management',
      'Rental search',
      'Government office accompaniment',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services & Pricing',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'EOOD Company Registration (EU Citizens)',
          price: '535',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'OOD Company Registration (EU Citizens)',
          price: '535',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'EOOD / OOD Registration for Non-EU Citizens',
          price: '785',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Trade Representation Office Registration',
          price: '2100',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Accompanied Visit to Bank for Account Opening',
          price: '65',
          priceCurrency: 'EUR',
          description: 'Per hour — specialist time only, bank fees not included',
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
          name: 'Accompaniment to Bulgarian Government Offices',
          price: '65',
          priceCurrency: 'EUR',
          description: 'Per hour — specialist time only, document costs not included',
        },
        {
          '@type': 'Offer',
          name: 'Monthly Legal Support',
          price: '295',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'Document Preparation for Apartment Sale or Purchase',
          price: '625',
          priceCurrency: 'EUR',
          description: 'Specialist time only, document costs not included',
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
              ? 'Регистрация ЕООД и ООД начинается от €535 для граждан ЕС (открытие банковского счёта не включено). Для граждан вне ЕС регистрация ЕООД / ООД начинается от €485.'
              : lang === 'bg'
                ? 'Регистрацията на ЕООД и ООД започва от €535 за граждани на ЕС (откриването на банкова сметка не е включено). За граждани извън ЕС регистрацията на ЕООД / ООД започва от €485.'
                : lang === 'de'
                  ? 'Die EOOD- und OOD-Gründung beginnt bei €535 für EU-Bürger (Kontoeröffnung nicht enthalten). Für Nicht-EU-Bürger beginnt die EOOD / OOD-Registrierung bei €485.'
                  : lang === 'it'
                    ? 'La registrazione di EOOD e OOD parte da €535 per cittadini UE (apertura conto bancario non inclusa). Per cittadini non UE la registrazione EOOD / OOD parte da €485.'
                    : 'EOOD and OOD registration starts from €535 for EU citizens (bank account opening not included). For non-EU citizens, EOOD / OOD registration starts from €485.',
        },
      },
      {
        '@type': 'Question',
        name:
          lang === 'ru'
            ? 'Включено ли открытие банковского счёта в стоимость регистрации компании?'
            : lang === 'bg'
              ? 'Включено ли е откриването на банкова сметка в цената на регистрацията?'
              : lang === 'de'
                ? 'Ist die Kontoeröffnung im Preis der Firmengründung enthalten?'
                : lang === 'it'
                  ? "L'apertura del conto bancario è inclusa nel prezzo di registrazione della società?"
                  : 'Is bank account opening included in the company registration price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'ru'
              ? 'Нет. Открытие банковского счёта — дополнительная услуга. Сопровождение в банк для открытия счёта оплачивается отдельно по ставке €65 в час (время специалиста). Расходы на документы не включены.'
              : lang === 'bg'
                ? 'Не. Откриването на банкова сметка е допълнителна услуга. Придружаването в банката за сметка се заплаща отделно по €65 на час (времето на специалиста). Разходите за документи не са включени.'
                : lang === 'de'
                  ? 'Nein. Die Kontoeröffnung ist eine separate Leistung. Die Begleitung zur Bank zur Kontoeröffnung wird separat nach Aufwand berechnet (€65/Stunde — nur Spezialistenzeit). Dokumentenkosten nicht enthalten.'
                  : lang === 'it'
                    ? "No. L'apertura del conto bancario è un servizio separato. L'accompagnamento in banca per l'apertura del conto viene addebitato separatamente a €65/ora (solo tempo dello specialista). I costi dei documenti non sono inclusi."
                    : 'No. Bank account opening is a separate service. Accompanied bank visits for account opening are billed at €65/hour (specialist time only). Document costs are not included.',
        },
      },
      {
        '@type': 'Question',
        name:
          lang === 'ru'
            ? 'Сколько стоит подготовка документов для продажи или покупки квартиры?'
            : lang === 'bg'
              ? 'Колко струва подготовката на документи за продажба или покупка на апартамент?'
              : lang === 'de'
                ? 'Wie viel kostet die Dokumentenvorbereitung für Kauf oder Verkauf einer Wohnung?'
                : lang === 'it'
                  ? "Quanto costa la preparazione dei documenti per vendere o acquistare un appartamento?"
                  : 'How much does document preparation for apartment sale or purchase cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'ru'
              ? 'Подготовка и сопровождение всех документов для продажи или покупки квартиры стоит €625. Расходы на сами документы (госпошлины, нотариальные сборы, переводы и т.д.) не включены — цена покрывает только время специалиста.'
              : lang === 'bg'
                ? 'Пълната подготовка и придружаване на документите за продажба или покупка на апартамент струва €625. Разходите за самите документи (държавни такси, нотариални такси, преводи и др.) не са включени — цената покрива само времето на специалиста.'
                : lang === 'de'
                  ? 'Die vollständige Vorbereitung und Nachverfolgung aller Unterlagen für Kauf oder Verkauf einer Wohnung kostet €625. Dokumentenkosten (Staatsgebühren, Notargebühren, Übersetzungen usw.) sind nicht enthalten — der Preis deckt nur die Spezialistenzeit ab.'
                  : lang === 'it'
                    ? "La preparazione completa e il follow-up di tutti i documenti per vendere o acquistare un appartamento costa €625. I costi dei documenti (tasse statali, onorari notarili, traduzioni, ecc.) non sono inclusi — il prezzo copre solo il tempo dello specialista."
                    : 'Full preparation and follow-up of all documents for apartment sale or purchase costs €625. Document costs (state fees, notary fees, translations, etc.) are not included — the price covers specialist time only.',
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
            content="Bulgaria company registration prices, legal services Bulgaria, real estate services Bulgaria, AI automation Bulgaria, Telegram auto posting, website creation Bulgaria, trade representation office Bulgaria, contract drafting Bulgaria, apartment sale purchase documents Bulgaria"
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
          {/* Hero */}
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

          {/* Intro + TOC */}
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
              <nav aria-label={tocTitle} className="rounded-2xl border bg-card p-6 sm:p-8">
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

          {/* Price sections */}
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

          {/* CTA */}
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