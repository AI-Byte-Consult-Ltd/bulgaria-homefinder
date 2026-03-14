import { useEffect, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageSEO } from '@/components/PageSEO';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Clock,
  AlertTriangle,
  CheckCircle,
  FileText,
  Users,
  Landmark,
  TrendingUp,
  Shield,
  BarChart3,
  Info,
  Globe,
  Building,
  UserCheck,
  MapPin,
  Briefcase,
  Wallet,
} from 'lucide-react';

const BulgariaDigitalNomadVisaArticle = () => {
  const { i18n } = useTranslation();

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

  const cover = {
    image_url:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80',
    unsplash_author_name: 'Austin Distel',
    unsplash_author_url: 'https://unsplash.com/@austindistel',
    unsplash_photo_url:
      'https://unsplash.com/photos/man-sitting-on-sofa-while-using-laptop-wD1LRb9OeEo',
  };

  const sources = [
    {
      label: 'Parliament of Bulgaria — Law on Foreigners (ЗЧРБ), current edition',
      url: 'https://www.parliament.bg/bg/laws/ID/156869',
    },
    {
      label: 'Ministry of Foreign Affairs of Bulgaria — Visa D application',
      url: 'https://www.mfa.bg',
    },
    {
      label: 'Directorate "Migration" — Ministry of Interior Bulgaria',
      url: 'https://www.mvr.bg/migration',
    },
    {
      label: 'State Gazette (Държавен вестник) — Publication of laws',
      url: 'https://dv.parliament.bg',
    },
    {
      label: 'VFS Global — Consulate appointment booking',
      url: 'https://www.vfsglobal.com',
    },
    {
      label: 'European Commission — Bulgaria and the euro',
      url: 'https://economy-finance.ec.europa.eu/euro/eu-countries-and-euro/bulgaria-and-euro_en',
    },
    {
      label: 'NRA Bulgaria — Tax rates and income tax',
      url: 'https://nra.bg/',
    },
    {
      label: 'Sofia Offices — Digital nomad visa guide Bulgaria',
      url: 'https://sofiaoffices.com',
    },
  ];

  const translations: Record<string, any> = {
    en: {
      back: 'Back to Home',
      date: 'March 14, 2026',
      readTime: 'Reading time: ~20 minutes',
      title:
        'Bulgaria Digital Nomad Visa 2026: Complete Guide to Obtaining Residence Permit — Updated March 2026',
      subtitle:
        'Full step-by-step guide for non-EU remote workers: legal basis, eligibility categories, income requirements, complete document checklists for Visa D and residence permit, family reunion, apostille rules, and key advantages of Bulgaria as a base in 2026.',
      seoTitle:
        'Bulgaria Digital Nomad Visa 2026: Complete Residence Permit Guide',
      seoDescription:
        'Comprehensive March 2026 guide to Bulgaria digital nomad visa and residence permit: legal basis чл.24с ЗЧРБ, income threshold €31,000/year, Visa D documents, Migration Directorate checklist, apostille requirements, family members, 10% flat tax, Schengen access.',
      tocTitle: 'In this guide',
      keyFactsTitle: 'Key Facts — March 2026',
      noteTitle: 'Disclaimer',
      noteText:
        'This article is prepared for informational purposes based on legislation in force as of March 2026. Bulgarian migration law continues to evolve. We recommend verifying current requirements with the consulate or a qualified immigration lawyer before submitting documents. Our specialists are ready to provide full legal support at all stages.',
      sourcesTitle: 'Official Sources',
      photoCreditLabel: 'Article photo:',
      photoCreditOn: 'on',
      keyFacts: [
        'Legal basis: Art. 24, para. 1, item 23 and Art. 24с of the Law on Foreigners in Bulgaria (ЗЧРБ), in force since December 20, 2025.',
        'Minimum annual income threshold 2026: €31,010 (50 × minimum monthly wage of €620.20).',
        'Who qualifies: employees of non-EU companies, business owners with 25%+ stake, and freelancers with 1+ year of documented remote work history.',
        'Visa D processing time: 35–45 working days at a Bulgarian consulate abroad.',
        'After entry: residence permit application must be filed within 14 days at the Migration Directorate.',
        'Residence permit validity: 1 year, renewable for 1 additional year (maximum 2 years total on this basis).',
        'Income tax rate in Bulgaria: flat 10% — one of the lowest in the EU.',
        'Bulgaria joined Schengen in 2025 and adopted the euro on January 1, 2026.',
        'Family members (spouse + minor children) can obtain residence permits through family reunification.',
        'Health insurance: minimum €30,000 coverage required, valid across Bulgaria and the EU.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'introduction',
          h2: 'Introduction: why Bulgaria has become one of Europe\'s most attractive bases for digital nomads',
          p: [
            'Bulgaria has firmly established itself among the European jurisdictions actively competing for global digital professionals. In December 2025, the country officially launched its digital nomad residence permit programme — and by March 2026 it is operating at full capacity. The timing is particularly significant: Bulgaria joined the Schengen Area in 2025 and adopted the euro on January 1, 2026, creating a combination that is difficult to match anywhere else in the EU at this cost level.',
            'Unlike a simple tourist visa that restricts your stay to 90 days out of 180, the digital nomad residence permit gives you a legal right to live in Bulgaria for up to two years, open a bank account, access the Schengen zone freely, and bring your immediate family. The cost of living remains substantially below Western European capitals, the flat income tax is 10%, and internet infrastructure in Sofia, Plovdiv, Varna, and Bansko is genuinely fit for professional remote work.',
            'This guide covers everything you need: the legal framework, eligibility requirements, income thresholds, the complete document checklist for both the Visa D application at the consulate and the residence permit filing at the Migration Directorate, apostille and translation rules, family documentation, and the full step-by-step procedure.',
          ],
        },
        {
          icon: 'landmark',
          id: 'legal-basis',
          h2: 'Legal framework: what the law says',
          p: [
            'The digital nomad residence permit was introduced by amendments to the Law on Foreigners in the Republic of Bulgaria (ЗЧРБ), adopted by the National Assembly on June 18, 2025, and published in the State Gazette (Държавен вестник) on June 27, 2025. The legal basis is Art. 24, para. 1, item 23 and Art. 24с of the ЗЧРБ.',
            'The secondary legislation — the Regulations for the Application of the ЗЧРБ (ППЗЧРБ) — was updated twice: the amendments entered into force on December 20, 2025 (the date from which applications began being accepted), with a further correction on January 20, 2026.',
          ],
          blocks: [
            {
              h3: 'Official legal references',
              bullets: [
                'Law on Foreigners (ЗЧРБ), current edition: parliament.bg/bg/laws/ID/156869',
                'Art. 24, para. 1, item 23 ЗЧРБ — grounds for long-term residence permit for digital nomad',
                'Art. 24с ЗЧРБ — income requirements and categories of eligible applicants',
                'Regulations for Application of ЗЧРБ (ППЗЧРБ) — procedural rules, in force since December 20, 2025',
                'State Gazette issue 27.06.2025 — original publication of amendments',
                'State Gazette correction 20.01.2026 — latest regulatory update',
              ],
            },
          ],
        },
        {
          icon: 'usercheck',
          id: 'eligibility',
          h2: 'Who can apply: three eligible categories',
          p: [
            'Art. 24с ЗЧРБ defines three categories of applicants. All must be citizens of non-EU/EEA/Swiss countries, work remotely, and derive their income exclusively from sources outside Bulgaria and the EU/EEA/Switzerland.',
          ],
          blocks: [
            {
              h3: 'Category 1 — Remote Employees',
              bullets: [
                'Foreign nationals employed under a contract with a company registered outside the EU/EEA/Switzerland',
                'Work is performed fully online and remotely',
                'The employer must be a foreign legal entity — not a Bulgarian company',
                'Required proof: employment contract explicitly stating remote work, employer confirmation letter',
              ],
            },
            {
              h3: 'Category 2 — Business Owners and Company Directors',
              bullets: [
                'Owners, shareholders, or directors with a stake of at least 25% in a foreign company',
                'The company must be registered outside the EU/EEA/Switzerland',
                'Digital services must be delivered remotely',
                'Required proof: corporate documents, shareholder registry, extract from the foreign trade register',
              ],
            },
            {
              h3: 'Category 3 — Freelancers and Independent Professionals',
              bullets: [
                'Self-employed specialists providing services to clients based outside Bulgaria',
                'Minimum 1 year of documented freelance history prior to application',
                'Must demonstrate that 100% of income comes from foreign sources',
                'Required proof: active contracts with foreign clients, reference letters, invoices for the past 12 months',
                'Key restriction: providing services to Bulgarian clients is prohibited under this status',
              ],
            },
          ],
        },
        {
          icon: 'wallet',
          id: 'income-requirements',
          h2: 'Financial requirements: how much you need to earn',
          p: [
            'Art. 24с(1) ЗЧРБ ties the income threshold to 50 times the Bulgarian national minimum monthly wage for the year of application. As of January 1, 2026, the minimum wage is €620.20/month, which sets the annual threshold at €31,010.',
            'The income must come exclusively from work outside Bulgaria and outside EU/EEA/Swiss territory. It cannot include Bulgarian social benefits, rental income from Bulgarian property (unless alongside qualifying remote income), or income from Bulgarian clients.',
          ],
          blocks: [
            {
              h3: 'What counts as qualifying income',
              bullets: [
                'Salary from a non-EU employer, shown on payslips and bank statements',
                'Dividends or director remuneration from a non-EU company (with supporting corporate documents)',
                'Freelance income from non-Bulgarian, non-EU clients (supported by invoices and contracts)',
                'Income documentation period: last 6–12 months, covering the prior calendar year',
              ],
            },
            {
              h3: 'How to document income',
              bullets: [
                'Bank statements showing regular income flows (the most common and reliable method)',
                'Payslips for the relevant period — for employees',
                'Tax declarations or financial statements — for business owners',
                'Invoice collections with payment confirmations — for freelancers',
                'Payment platform reports (Wise, PayPal, Stripe) — acceptable as supplementary evidence, official translation may be required',
              ],
            },
          ],
        },
        {
          icon: 'filetext',
          id: 'visa-d-documents',
          h2: 'Stage I — Documents for Visa D (consulate submission)',
          p: [
            'Visa D (long-stay visa, type D) is applied for at a Bulgarian embassy or consulate outside Bulgaria. Personal attendance is mandatory — no exceptions, no proxies. The application can be filed no earlier than 3 months before the intended entry date. The consulate fee ranges from €100 to €300 depending on the country of submission.',
          ],
          blocks: [
            {
              h3: 'A. Personal and identity documents',
              bullets: [
                'Valid international passport — minimum 2 blank pages, issued less than 10 years ago, valid for at least 6 months beyond the intended entry date',
                'Copy of the biographical data page and copies of any previous Bulgarian visas',
                'Colour passport photograph meeting the consulate\'s current specifications',
                'Completed Visa D application form from mfa.bg — in Bulgarian or English, Latin block capitals only',
                'Receipt confirming payment of the consulate fee',
              ],
            },
            {
              h3: 'B. Proof of remote employment (by category)',
              bullets: [
                'Remote employees: employment contract explicitly stating remote format, salary level, and employer registration outside EU/EEA/Switzerland; employer cover letter confirming fully remote work',
                'Business owners: company incorporation documents (certificate of registration, articles of association); document proving ownership stake above 25%; extract from the foreign trade register of the country of incorporation',
                'Freelancers: active contracts with foreign clients with reference letters confirming fully remote service delivery over at least 1 year; invoices or acts of completion for the past 12 months',
                'All categories: description of the nature of the professional activity and confirmation that no Bulgarian clients or employers are involved',
              ],
            },
            {
              h3: 'C. Financial documents',
              bullets: [
                'Bank statements for the last 6–12 months showing regular income flows meeting the €31,010 annual threshold',
                'Payslips for the corresponding period — for employees',
                'Tax declarations or company financial statements — for business owners',
                'Invoice collections and payment confirmations — for freelancers',
              ],
            },
            {
              h3: 'D. Medical insurance',
              bullets: [
                'Health insurance policy valid in Bulgaria and across the full EU/Schengen area',
                'Minimum coverage: €30,000 — including emergency medical care, hospitalisation, and medical repatriation',
                'The policy must cover the entire intended period of stay',
                'Insurer must be authorised to operate in Bulgaria or the EU',
              ],
            },
            {
              h3: 'E. Proof of accommodation in Bulgaria',
              bullets: [
                'Rental contract with the property address and the rental period',
                'Hotel reservation for the initial period (for early entry) — note: a long-term rental with a registered address will be required for the residence permit stage',
                'Proof of property ownership — if you own real estate in Bulgaria',
              ],
            },
            {
              h3: 'F. Criminal record certificate',
              bullets: [
                'Issued by the country of citizenship and/or current country of residence (if different)',
                'Must have an Apostille stamp in accordance with the Hague Convention of October 5, 1961',
                'Must be accompanied by a notarially certified translation into Bulgarian',
                'Certificate must not be older than 6 months at the time of submission',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'vnzh-documents',
          h2: 'Stage II — Documents for residence permit at the Migration Directorate',
          p: [
            'After entering Bulgaria on Visa D, the applicant must personally file for a residence permit at the territorial division of the Migration Directorate of the Ministry of Interior at the place of residence in Bulgaria. Filing must be completed within 14 calendar days of entry. The application is submitted in paper form only and requires personal attendance.',
          ],
          blocks: [
            {
              h3: 'Full document package for residence permit',
              bullets: [
                'Valid passport with Visa D stamp + photocopy',
                'Application form for the "Digital Nomad" residence category (form issued by the Migration Directorate)',
                '2 colour passport photographs meeting the established specifications',
                'Proof of Bulgarian residential address: long-term rental contract or property ownership documents',
                'Current proof of remote employment and income (the same documents as for Visa D, updated to the application date)',
                'Valid medical insurance policy (minimum €30,000 coverage)',
                'Criminal record certificate — if the certificate submitted at the consulate has expired (valid for 6 months)',
                'Receipts confirming payment of state fees',
              ],
            },
            {
              h3: 'State fees for residence permit',
              bullets: [
                '10 BGN (~€5.11) — application review fee',
                '500 BGN (~€255.64) — 1-year residence permit fee',
                '40–200 BGN (~€20–€102) — residence card issuance fee',
                'Fees are paid at the Migration Directorate cashier or via bank transfer to the MoI account',
              ],
            },
            {
              h3: 'Processing times after filing',
              bullets: [
                'Standard review period: 14 calendar days',
                'In cases of legal or factual complexity: may be extended by 1 additional month',
                'Residence card production: 3 to 30 days after approval',
                'During review, the applicant receives a receipt confirming pending application — this document allows temporary legal stay',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'apostille-translation',
          h2: 'Apostille and translation requirements: what you need to know',
          p: [
            'All foreign official documents submitted to Bulgarian authorities must be legalised through the apostille procedure and accompanied by a certified Bulgarian translation. This is one of the most time-consuming preparation stages — apostilles in some countries take 2–4 weeks, and the certified translation must be done by an accredited translator.',
          ],
          blocks: [
            {
              h3: 'The Apostille procedure',
              bullets: [
                'Bulgaria is a signatory to the Hague Convention of October 5, 1961 — apostilled documents are recognised without further legalisation',
                'The apostille is affixed by a competent authority in the country that issued the document (court, ministry of justice, notary supervisory body — varies by country)',
                'Documents issued within the EU by state authorities generally do not require an apostille between EU member states, but do require one for submission in Bulgarian immigration procedures as a third country\'s document',
                'Practical advice: start the apostille and criminal record procedures 6–8 weeks before your planned consulate appointment',
              ],
            },
            {
              h3: 'Translation into Bulgarian',
              bullets: [
                'Performed by a licensed translator accredited in Bulgaria or in the country of submission',
                'Must be notarially certified (wet stamp and signature of notary)',
                'All documents are submitted in original + notarially certified copies',
                'Translation agencies accredited by the Bulgarian Ministry of Foreign Affairs are the most reliable option for consular submissions',
                'Business documents (corporate registry extracts, contracts) must also be translated and certified',
              ],
            },
            {
              h3: 'Documents typically requiring apostille + translation',
              bullets: [
                'Criminal record certificate — apostille + certified Bulgarian translation',
                'Birth certificates (for children) — apostille + certified Bulgarian translation',
                'Marriage certificate (for spouse) — apostille + certified Bulgarian translation',
                'Corporate documents (for business owners) — apostille + certified Bulgarian translation',
                'Educational diplomas — only if specifically requested by the consulate (rare for this visa category)',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'family-documents',
          h2: 'Documents for family members',
          p: [
            'Spouses and minor children of the main applicant can obtain a Bulgarian residence permit through the family reunification procedure, provided the main applicant already holds or has applied for their own residence permit. Each family member submits a separate, independent document package.',
          ],
          blocks: [
            {
              h3: 'For the spouse',
              bullets: [
                'Valid international passport + photocopy',
                'Marriage certificate with Apostille stamp and notarially certified Bulgarian translation',
                'Own criminal record certificate from country of citizenship and/or residence — with Apostille and certified Bulgarian translation (not older than 6 months)',
                'Medical insurance policy — minimum €30,000 coverage',
                'Documents confirming financial dependency on the main applicant, or own financial documents demonstrating independent means',
                'Proof of the main applicant\'s residence permit or pending application',
                'State fee: 200 BGN (~€102) for the residence permit',
              ],
            },
            {
              h3: 'For minor children',
              bullets: [
                'Valid passport of the child + photocopy',
                'Birth certificate with Apostille stamp and notarially certified Bulgarian translation',
                'Medical insurance policy covering the child — minimum €30,000',
                'Notarially certified consent of the second parent to the child\'s residence in Bulgaria — if the second parent is not entering Bulgaria alongside the child',
                'If the child travels with one parent only: certified copy of the other parent\'s passport and notarially certified consent',
                'Documents confirming financial support from the main applicant',
                'State fee: 200 BGN (~€102) per child',
              ],
            },
            {
              h3: 'Important notes on family reunification timing',
              bullets: [
                'Family members may file for their residence permit simultaneously with the main applicant or after the main applicant\'s permit is approved',
                'Each family member must appear in person at the Migration Directorate',
                'The family reunification route does not impose a separate income threshold on family members — the main applicant\'s income covers the family',
                'Family members with a Bulgarian residence permit gain the same Schengen travel rights as the main applicant',
              ],
            },
          ],
        },
        {
          icon: 'globe',
          id: 'procedure',
          h2: 'Step-by-step procedure: from application to residence card',
          blocks: [
            {
              h3: 'Step 1 — Prepare documents (6–8 weeks before consulate appointment)',
              bullets: [
                'Collect and apostille the criminal record certificate in your country of citizenship/residence',
                'Have all foreign documents translated into Bulgarian by an accredited translator and notarially certified',
                'Prepare financial documentation: bank statements, payslips or invoices for 6–12 months',
                'Obtain health insurance: minimum €30,000 coverage, valid in Bulgaria and the EU',
                'Secure proof of accommodation in Bulgaria (lease agreement or hotel reservation)',
              ],
            },
            {
              h3: 'Step 2 — Book consulate appointment and file Visa D',
              bullets: [
                'Book via mfa.bg or VFS Global — no earlier than 3 months before the intended entry date',
                'Personal attendance is mandatory — proxies are not permitted for Visa D',
                'Pay the consulate fee: €100–€300 depending on the country',
                'Processing time: 35–45 working days on average; in some cases up to 2 months',
                'The consulate may request additional documents — respond promptly to avoid delays',
              ],
            },
            {
              h3: 'Step 3 — Enter Bulgaria',
              bullets: [
                'After approval, Visa D is issued for up to 6 months',
                'Enter Bulgaria with the visa',
                'Immediately begin the next step — do not wait until close to the 14-day deadline',
              ],
            },
            {
              h3: 'Step 4 — File for residence permit at Migration Directorate',
              bullets: [
                'Within 14 calendar days of entry: submit application in person at the territorial Migration Directorate division by place of residence',
                'Bring the full document package (see Stage II list above)',
                'Receive application receipt — this confirms legal status during review',
                'Review period: 14 calendar days (extendable by 1 month in complex cases)',
                'After approval: residence card issued within 3–30 days',
              ],
            },
            {
              h3: 'Total timeline',
              bullets: [
                'Document preparation: 4–8 weeks',
                'Visa D processing at consulate: 35–45 working days (up to 2 months)',
                'Entry + residence permit filing + review + card: 4–8 weeks',
                'Full process from first consulate submission to residence card: approximately 3–4 months',
              ],
            },
          ],
        },
        {
          icon: 'trendingup',
          id: 'advantages',
          h2: 'Key advantages of Bulgaria as a digital nomad base in 2026',
          blocks: [
            {
              h3: 'Schengen membership',
              bullets: [
                'Bulgaria joined the Schengen Area in 2025',
                'Bulgarian residence permit holders can travel visa-free across all Schengen countries',
                'Right to stay up to 90 days in any 180-day period in other Schengen states',
                'Practical access to 27 European countries from a single residence base',
              ],
            },
            {
              h3: 'Euro adoption and financial infrastructure',
              bullets: [
                'Bulgaria adopted the euro on January 1, 2026 — fixed conversion rate €1 = 1.95583 BGN',
                'Eliminates currency conversion costs for euro-denominated income',
                'Access to EU banking system: accounts in UniCredit Bulbank, DSK Bank, Raiffeisen, OTP',
                'Free SEPA transfers across the EU with a Bulgarian bank account',
              ],
            },
            {
              h3: 'Tax environment',
              bullets: [
                'Flat personal income tax rate: 10% — one of the lowest in the European Union',
                'For comparison: Germany up to 45%, France up to 45%, Spain up to 47%, Italy up to 43%',
                'If you spend fewer than 183 days per year in Bulgaria, Bulgarian tax residency does not arise',
                'Corporate tax for Bulgarian companies: also 10% flat rate',
                'Dividend tax: 5% — if you later establish a Bulgarian company',
              ],
            },
            {
              h3: 'Cost of living',
              bullets: [
                'Monthly expenses for a single person: approximately €600–€800 excluding rent',
                'Rent for a 1-bedroom apartment in Sofia city centre: €500–€800/month',
                'Rent in Plovdiv, Varna, Burgas: €350–€550/month',
                'Significantly lower than Lisbon, Barcelona, Prague, or Tallinn',
              ],
            },
            {
              h3: 'Infrastructure and quality of life',
              bullets: [
                'Average internet speed in Sofia: 200–500 Mbps — among the fastest in Europe',
                'Developed coworking network: Sofia, Plovdiv, Varna, Bansko',
                'Active international digital nomad community in all major cities',
                'EU healthcare system access for registered residents with health insurance',
                'Direct international flights from Sofia to all major European hubs',
              ],
            },
          ],
        },
        {
          icon: 'info',
          id: 'restrictions',
          h2: 'Key restrictions and important caveats',
          blocks: [
            {
              h3: 'What is prohibited under this status',
              bullets: [
                'Working for Bulgarian employers or serving Bulgarian clients — strictly prohibited',
                'All professional activity and income must originate from outside Bulgaria',
                'The residence permit does not grant the right to be employed by a Bulgarian company under a Bulgarian labour contract',
                'Running a Bulgarian company under this status requires separate legal analysis — consult a lawyer',
              ],
            },
            {
              h3: 'What this permit does NOT provide',
              bullets: [
                'The digital nomad residence permit does not automatically lead to permanent residence (ПМЖ)',
                'Maximum total duration under this basis: 2 years (two 1-year permits)',
                'After 2 years, a different legal basis is required — for example, registering a Bulgarian company or establishing a branch of a foreign company',
                'The permit does not grant Bulgarian citizenship — separate naturalisation rules apply',
              ],
            },
            {
              h3: 'Renewal conditions',
              bullets: [
                'To renew for the second year: stable foreign income must be demonstrated again',
                'Updated financial documents, valid insurance, confirmed address, and clean legal record required',
                'Renewal application is filed at the Migration Directorate — do not wait until the permit expires',
                'If the renewal is filed before expiry, legal status is maintained during review',
              ],
            },
          ],
        },
        {
          icon: 'barChart',
          id: 'conclusion',
          h2: 'Our assessment',
          p: [
            'Bulgaria\'s digital nomad visa is a structurally sound and well-priced European residence option that became fully operational only at the end of 2025. For non-EU remote professionals earning above €31,000/year, it combines legal clarity, low taxation, Schengen mobility, and a genuinely affordable standard of living in a way that few other EU jurisdictions currently match at this price point.',
            'The documentation requirements are substantial — apostilles, certified translations, income evidence, and the two-stage procedure (consulate + Migration Directorate) demand careful preparation. Underestimating the timeline is the most common mistake: starting document collection 6–8 weeks before the consulate appointment and planning for a total process of 3–4 months is the realistic approach.',
            'At European Gateway, we provide full legal support for international clients navigating the Bulgarian digital nomad visa process: document preparation, apostille coordination, certified translations, consulate appointment assistance, Migration Directorate filing, and post-arrival compliance. Our team is available for initial consultation via the contact details below.',
          ],
        },
      ],
    },

    ru: {
      back: 'На главную',
      date: '14 марта 2026',
      readTime: 'Время чтения: ~20 минут',
      title:
        'ВНЖ для цифровых кочевников в Болгарии 2026: исчерпывающее руководство по получению — актуально март 2026',
      subtitle:
        'Пошаговое руководство для дистанционных специалистов из стран, не входящих в ЕС: правовая база, категории заявителей, требования к доходу, полные списки документов для визы D и ВНЖ, воссоединение семьи, апостиль, налоги и преимущества Болгарии.',
      seoTitle:
        'ВНЖ для цифровых кочевников в Болгарии 2026: полное руководство',
      seoDescription:
        'Полное руководство март 2026 по визе цифрового кочевника и ВНЖ в Болгарии: правовое основание чл.24с ЗЧРБ, доход €31 000/год, документы для визы D, Дирекция миграции, апостиль, семья, налог 10%, шенгенский доступ.',
      tocTitle: 'Содержание',
      keyFactsTitle: 'Ключевые факты — март 2026',
      noteTitle: 'Дисклеймер',
      noteText:
        'Данная статья подготовлена в информационных целях на основании законодательства, действующего по состоянию на март 2026 года. Миграционное законодательство Болгарии продолжает совершенствоваться. Рекомендуем уточнять актуальные требования в консульстве или у квалифицированного юриста перед подачей документов. Наши специалисты готовы оказать полное юридическое сопровождение на всех этапах.',
      sourcesTitle: 'Официальные источники',
      photoCreditLabel: 'Фото к статье:',
      photoCreditOn: 'на',
      keyFacts: [
        'Правовое основание: чл. 24, ал. 1, т. 23 и чл. 24с ЗЧРБ, в силе с 20 декабря 2025 года.',
        'Минимальный годовой доход 2026: €31 010 (50 × минимальная месячная зарплата €620,20).',
        'Кто подходит: сотрудники нe-ЕС компаний, собственники бизнеса с долей ≥25%, фрилансеры с подтверждённым стажем от 1 года.',
        'Срок рассмотрения визы D: 35–45 рабочих дней в консульстве.',
        'После въезда: заявление на ВНЖ подаётся в Дирекцию миграции в течение 14 дней.',
        'Срок действия ВНЖ: 1 год с продлением ещё на 1 год (максимум 2 года по данному основанию).',
        'Подоходный налог в Болгарии: единая ставка 10% — одна из самых низких в ЕС.',
        'Болгария вошла в Шенген в 2025 году и перешла на евро с 1 января 2026 года.',
        'Члены семьи (супруг/супруга и несовершеннолетние дети) могут получить ВНЖ по воссоединению семьи.',
        'Медицинская страховка: минимальное покрытие €30 000, действующая на территории Болгарии и ЕС.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'vvedenie',
          h2: 'Введение: почему Болгария стала одной из самых привлекательных европейских баз для цифровых кочевников',
          p: [
            'Болгария прочно вошла в число европейских юрисдикций, активно конкурирующих за внимание глобальных цифровых профессионалов. В декабре 2025 года страна официально запустила программу ВНЖ для цифровых кочевников — и к марту 2026 года она работает в полную силу. Момент особенно показательный: Болгария вошла в Шенгенское пространство в 2025 году и перешла на евро 1 января 2026 года, создав сочетание, которое сложно найти где-либо ещё в ЕС при сопоставимой стоимости жизни.',
            'В отличие от туристической визы, ограничивающей пребывание до 90 дней из 180, ВНЖ для цифрового кочевника даёт вам законное право проживать в Болгарии до двух лет, открыть банковский счёт, свободно передвигаться по Шенгенской зоне и привезти с собой ближайших членов семьи. Стоимость жизни существенно ниже западноевропейских столиц, ставка подоходного налога — 10%, а интернет-инфраструктура в Софии, Пловдиве, Варне и Банско отвечает профессиональным требованиям.',
            'Это руководство охватывает всё необходимое: правовую базу, требования к кандидатам, финансовые пороги, полный список документов для подачи на визу D в консульстве и для оформления ВНЖ в Дирекции миграции, требования к апостилю и переводу, документы для членов семьи и пошаговую процедуру.',
          ],
        },
        {
          icon: 'landmark',
          id: 'pravovaya-baza',
          h2: 'Правовая база: что говорит закон',
          p: [
            'Разрешение на пребывание для цифровых кочевников введено поправками к Закону о чужденцах в Республике Болгария (ЗЧРБ), принятыми Народным собранием 18 июня 2025 года и опубликованными в «Државен вестник» 27 июня 2025 года. Правовое основание — чл. 24, ал. 1, т. 23 и чл. 24с ЗЧРБ.',
            'Подзаконная база — Правилник за прилагане на ЗЧРБ (ППЗЧРБ) — вступила в силу 20 декабря 2025 года (именно тогда началось принятие заявлений) и была дополнительно скорректирована 20 января 2026 года.',
          ],
          blocks: [
            {
              h3: 'Официальные нормативные ссылки',
              bullets: [
                'Закон о чужденцах (ЗЧРБ), актуальная редакция: parliament.bg/bg/laws/ID/156869',
                'Чл. 24, ал. 1, т. 23 ЗЧРБ — основание для ВНЖ цифрового кочевника',
                'Чл. 24с ЗЧРБ — требования к доходу и категории правомочных заявителей',
                'Правилник за прилагане на ЗЧРБ (ППЗЧРБ) — процедурные правила, в силе с 20.12.2025',
                '«Државен вестник», выпуск 27.06.2025 — первичная публикация поправок',
                '«Државен вестник», корректировка 20.01.2026 — последнее изменение',
              ],
            },
          ],
        },
        {
          icon: 'usercheck',
          id: 'kto-mozhet',
          h2: 'Кто может подать заявление: три категории кандидатов',
          p: [
            'Статья 24с ЗЧРБ определяет три категории заявителей. Все они должны быть гражданами стран, не входящих в ЕС/ЕЭЗ/Швейцарию, работать дистанционно и получать доход исключительно из источников за пределами Болгарии и ЕС/ЕЭЗ/Швейцарии.',
          ],
          blocks: [
            {
              h3: 'Категория 1 — Наёмные дистанционные сотрудники',
              bullets: [
                'Иностранные граждане, работающие по трудовому договору с компанией, зарегистрированной за пределами ЕС/ЕЭЗ/Швейцарии',
                'Работа выполняется полностью онлайн и дистанционно',
                'Работодатель обязан быть иностранным юридическим лицом — не болгарской компанией',
                'Необходимые доказательства: трудовой договор с явным указанием на дистанционный формат, подтверждение от работодателя',
              ],
            },
            {
              h3: 'Категория 2 — Собственники бизнеса и директора компаний',
              bullets: [
                'Владельцы, акционеры или директора с долей не менее 25% в иностранной компании',
                'Компания должна быть зарегистрирована за пределами ЕС/ЕЭЗ/Швейцарии',
                'Цифровые услуги должны оказываться дистанционно',
                'Необходимые доказательства: корпоративные документы, реестр акционеров, выписка из торгового реестра',
              ],
            },
            {
              h3: 'Категория 3 — Фрилансеры и независимые профессионалы',
              bullets: [
                'Самозанятые специалисты, оказывающие услуги клиентам за пределами Болгарии',
                'Минимум 1 год задокументированной фриланс-деятельности до подачи заявления',
                'Должно быть доказано, что 100% дохода поступает из иностранных источников',
                'Необходимые доказательства: действующие договоры с иностранными клиентами, рекомендательные письма, счета за последние 12 месяцев',
                'Ключевое ограничение: оказание услуг болгарским клиентам при данном статусе запрещено',
              ],
            },
          ],
        },
        {
          icon: 'wallet',
          id: 'finansovye-trebovaniya',
          h2: 'Финансовые требования: сколько нужно зарабатывать',
          p: [
            'Чл. 24с(1) ЗЧРБ привязывает финансовый порог к 50-кратному размеру минимальной месячной зарплаты Болгарии за год подачи заявления. С 1 января 2026 года минимальная зарплата составляет €620,20/месяц, что устанавливает годовой порог на уровне €31 010.',
            'Доход должен поступать исключительно от работы за пределами Болгарии и за пределами ЕС/ЕЭЗ/Швейцарии. Он не может включать болгарские социальные пособия, доход от аренды болгарской недвижимости (если только это не сопутствует квалифицирующей дистанционной деятельности) или доход от болгарских клиентов.',
          ],
          blocks: [
            {
              h3: 'Что считается квалифицирующим доходом',
              bullets: [
                'Зарплата от нe-ЕС работодателя, подтверждённая расчётными листками и банковскими выписками',
                'Дивиденды или вознаграждение директора от нe-ЕС компании (с подтверждающими корпоративными документами)',
                'Фриланс-доход от небольгарских, нe-ЕС клиентов (подтверждённый счетами и договорами)',
                'Период документального подтверждения дохода: последние 6–12 месяцев, охватывающие предыдущий календарный год',
              ],
            },
            {
              h3: 'Как документально подтвердить доход',
              bullets: [
                'Банковские выписки с регулярными поступлениями дохода — наиболее распространённый и надёжный способ',
                'Расчётные листки за соответствующий период — для наёмных сотрудников',
                'Налоговые декларации или финансовая отчётность компании — для собственников бизнеса',
                'Подборки счетов с подтверждениями платежей — для фрилансеров',
                'Отчёты платёжных платформ (Wise, PayPal, Stripe) — допустимы как вспомогательное доказательство, может потребоваться официальный перевод',
              ],
            },
          ],
        },
        {
          icon: 'filetext',
          id: 'dokumenty-viza-d',
          h2: 'Этап I — Документы для визы D (подача в консульстве)',
          p: [
            'Виза D (долгосрочная виза типа D) оформляется в болгарском посольстве или консульстве за пределами Болгарии. Личная явка обязательна — исключений нет, представитель по доверенности не допускается. Заявление можно подавать не ранее чем за 3 месяца до предполагаемой даты въезда. Консульский сбор — от €100 до €300 в зависимости от страны подачи.',
          ],
          blocks: [
            {
              h3: 'А. Личные и идентификационные документы',
              bullets: [
                'Действующий заграничный паспорт — минимум 2 пустые страницы, выданный менее 10 лет назад, со сроком действия не менее 6 месяцев с даты предполагаемого въезда',
                'Копия страницы с биографическими данными и копии предыдущих болгарских виз (при наличии)',
                'Цветная фотография, соответствующая текущим требованиям консульства',
                'Заполненное заявление по форме МИД Болгарии с сайта mfa.bg — на болгарском или английском языке, латинскими ПЕЧАТНЫМИ буквами',
                'Квитанция об оплате консульского сбора',
              ],
            },
            {
              h3: 'Б. Доказательства дистанционной занятости (по категориям)',
              bullets: [
                'Наёмные сотрудники: трудовой договор с явным указанием на дистанционный формат, уровень зарплаты и регистрацию работодателя за пределами ЕС/ЕЭЗ/Швейцарии; сопроводительное письмо работодателя, подтверждающее полностью дистанционный формат',
                'Собственники бизнеса: учредительные документы компании (свидетельство о регистрации, устав); документ, подтверждающий долю владения свыше 25%; выписка из торгового реестра страны регистрации',
                'Фрилансеры: действующие договоры с иностранными клиентами с рекомендательными письмами, подтверждающими дистанционный формат оказания услуг не менее 1 года; счета или акты выполненных работ за последние 12 месяцев',
                'Все категории: описание характера профессиональной деятельности и подтверждение отсутствия болгарских клиентов или работодателей',
              ],
            },
            {
              h3: 'В. Финансовые документы',
              bullets: [
                'Банковские выписки за последние 6–12 месяцев, демонстрирующие регулярные поступления дохода, соответствующие порогу €31 010/год',
                'Расчётные листки за соответствующий период — для наёмных сотрудников',
                'Налоговые декларации или финансовая отчётность компании — для собственников бизнеса',
                'Подборки счетов с подтверждениями платежей — для фрилансеров',
              ],
            },
            {
              h3: 'Г. Медицинская страховка',
              bullets: [
                'Полис, действующий на территории Болгарии и по всему ЕС/Шенгену',
                'Минимальное покрытие: €30 000 — включая скорую медицинскую помощь, госпитализацию и медицинскую репатриацию',
                'Полис должен покрывать весь предполагаемый период пребывания',
                'Страховщик должен быть авторизован для работы в Болгарии или ЕС',
              ],
            },
            {
              h3: 'Д. Доказательство наличия жилья в Болгарии',
              bullets: [
                'Договор аренды с адресом объекта и сроком аренды',
                'Бронирование отеля на начальный период (для первичного въезда) — для этапа ВНЖ потребуется долгосрочная аренда с зарегистрированным адресом',
                'Свидетельство о праве собственности на недвижимость в Болгарии',
              ],
            },
            {
              h3: 'Е. Справка о несудимости',
              bullets: [
                'Выдаётся страной гражданства и/или текущего проживания (если они разные)',
                'Должна иметь апостиль в соответствии с Гаагской конвенцией от 5 октября 1961 года',
                'Должна сопровождаться нотариально заверенным переводом на болгарский язык',
                'Справка не должна быть старше 6 месяцев на момент подачи',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'dokumenty-vnzh',
          h2: 'Этап II — Документы для ВНЖ в Дирекции миграции (подача после въезда)',
          p: [
            'После въезда в Болгарию по визе D заявитель обязан лично подать заявление на ВНЖ в территориальном отделении Дирекции «Миграция» МВД по месту проживания в Болгарии. Срок подачи — не позднее 14 календарных дней с момента въезда. Заявление подаётся только в бумажном виде и требует личного присутствия.',
          ],
          blocks: [
            {
              h3: 'Полный пакет документов для ВНЖ',
              bullets: [
                'Действующий паспорт со штампом визы D + копия',
                'Заявление по официальной форме категории «Цифров номад» (бланк выдаётся в Дирекции миграции)',
                '2 цветные фотографии установленного образца',
                'Подтверждение болгарского адреса проживания: долгосрочный договор аренды или правоустанавливающие документы на недвижимость',
                'Актуальные на момент подачи доказательства дистанционной занятости и дохода (те же документы, что и для визы D)',
                'Действующий полис медицинского страхования (минимум €30 000 покрытия)',
                'Справка о несудимости — если срок действия документа, поданного в консульство, истёк (действует 6 месяцев)',
                'Квитанции об оплате государственных пошлин',
              ],
            },
            {
              h3: 'Государственные пошлины при оформлении ВНЖ',
              bullets: [
                '10 лв (~€5,11) — рассмотрение заявления',
                '500 лв (~€255,64) — разрешение на пребывание сроком 1 год',
                '40–200 лв (~€20–€102) — изготовление карты резидента',
                'Оплата производится в кассе Дирекции миграции или банковским переводом',
              ],
            },
            {
              h3: 'Сроки рассмотрения после подачи',
              bullets: [
                'Стандартный срок рассмотрения: 14 календарных дней',
                'В случаях правовой или фактической сложности: может быть продлён на 1 месяц',
                'Изготовление карты резидента: от 3 до 30 дней после одобрения',
                'На период рассмотрения заявитель получает расписку, подтверждающую законный статус пребывания',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'apostil-i-perevod',
          h2: 'Апостиль и требования к переводу: что необходимо знать',
          p: [
            'Все иностранные официальные документы, подаваемые в болгарские органы власти, должны быть легализованы через процедуру апостилизации и сопровождаться заверенным переводом на болгарский язык. Это один из наиболее трудоёмких этапов подготовки — апостиль в ряде стран занимает 2–4 недели, а перевод должен быть выполнен аккредитованным переводчиком.',
          ],
          blocks: [
            {
              h3: 'Процедура апостилизации',
              bullets: [
                'Болгария является участницей Гаагской конвенции от 5 октября 1961 года — апостилированные документы признаются без дополнительной легализации',
                'Апостиль проставляется компетентным органом страны, выдавшей документ (суд, министерство юстиции, нотариальный надзорный орган — варьируется по стране)',
                'Практический совет: начинайте процедуру апостилизации и получения справки о несудимости за 6–8 недель до запланированного визита в консульство',
              ],
            },
            {
              h3: 'Перевод на болгарский язык',
              bullets: [
                'Выполняется лицензированным переводчиком, аккредитованным в Болгарии или в стране подачи',
                'Должен быть нотариально заверен (подпись и печать нотариуса)',
                'Все документы подаются в оригинале + нотариально заверенных копиях',
                'Переводческие агентства, аккредитованные МИД Болгарии — наиболее надёжный выбор для консульских подач',
                'Корпоративные документы (выписки из реестров, договоры) также подлежат переводу и нотариальному заверению',
              ],
            },
            {
              h3: 'Документы, требующие апостиля + перевода',
              bullets: [
                'Справка о несудимости — апостиль + заверенный перевод на болгарский',
                'Свидетельства о рождении детей — апостиль + заверенный перевод',
                'Свидетельство о браке (для супруга/супруги) — апостиль + заверенный перевод',
                'Корпоративные документы (для собственников бизнеса) — апостиль + заверенный перевод',
                'Дипломы об образовании — только если специально запрошены консульством (редко)',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'dokumenty-semya',
          h2: 'Документы для членов семьи',
          p: [
            'Супруги и несовершеннолетние дети основного заявителя могут получить ВНЖ в Болгарии по процедуре воссоединения семьи при условии, что основной заявитель уже получил или подал заявление на свой ВНЖ. Каждый член семьи подаёт самостоятельный и независимый пакет документов.',
          ],
          blocks: [
            {
              h3: 'Для супруга/супруги',
              bullets: [
                'Действующий заграничный паспорт + копия',
                'Свидетельство о браке — с апостилем и нотариально заверенным переводом на болгарский',
                'Собственная справка о несудимости из страны гражданства и/или проживания — с апостилем и заверенным переводом (не старше 6 месяцев)',
                'Полис медицинского страхования — минимальное покрытие €30 000',
                'Документы, подтверждающие финансовую зависимость от основного заявителя, или собственные финансовые документы',
                'Подтверждение наличия ВНЖ основного заявителя или поданного заявления',
                'Государственная пошлина: 200 лв (~€102) за ВНЖ',
              ],
            },
            {
              h3: 'Для несовершеннолетних детей',
              bullets: [
                'Действующий паспорт ребёнка + копия',
                'Свидетельство о рождении — с апостилем и нотариально заверенным переводом',
                'Полис медицинского страхования для ребёнка — минимум €30 000',
                'Нотариально заверенное согласие второго родителя на проживание ребёнка в Болгарии — если второй родитель не въезжает вместе',
                'При поездке с одним родителем: заверенная копия паспорта второго родителя и нотариально заверенное согласие',
                'Документы, подтверждающие финансовое обеспечение со стороны основного заявителя',
                'Государственная пошлина: 200 лв (~€102) за каждого ребёнка',
              ],
            },
            {
              h3: 'Важные замечания по воссоединению семьи',
              bullets: [
                'Члены семьи могут подавать заявление на ВНЖ одновременно с основным заявителем или после одобрения его ВНЖ',
                'Каждый член семьи обязан явиться в Дирекцию миграции лично',
                'Воссоединение семьи не устанавливает отдельного порога дохода для членов семьи — доход основного заявителя покрывает семью',
                'Члены семьи с болгарским ВНЖ получают те же права на шенгенское передвижение, что и основной заявитель',
              ],
            },
          ],
        },
        {
          icon: 'globe',
          id: 'protsedura',
          h2: 'Пошаговая процедура: от подачи заявления до карты резидента',
          blocks: [
            {
              h3: 'Шаг 1 — Подготовка документов (за 6–8 недель до визита в консульство)',
              bullets: [
                'Получить и апостилировать справку о несудимости в стране гражданства/проживания',
                'Перевести все иностранные документы на болгарский язык у аккредитованного переводчика и нотариально заверить',
                'Подготовить финансовые документы: банковские выписки, расчётные листки или счета за 6–12 месяцев',
                'Оформить медицинскую страховку: минимум €30 000 покрытия, действующую в Болгарии и ЕС',
                'Обеспечить подтверждение наличия жилья в Болгарии (договор аренды или бронирование)',
              ],
            },
            {
              h3: 'Шаг 2 — Запись в консульство и подача визы D',
              bullets: [
                'Запись через mfa.bg или VFS Global — не ранее чем за 3 месяца до предполагаемой даты въезда',
                'Личная явка обязательна — представитель по доверенности не допускается',
                'Оплатить консульский сбор: €100–€300 в зависимости от страны',
                'Срок рассмотрения: в среднем 35–45 рабочих дней; в отдельных случаях до 2 месяцев',
                'Консульство может запросить дополнительные документы — реагируйте оперативно',
              ],
            },
            {
              h3: 'Шаг 3 — Въезд в Болгарию',
              bullets: [
                'После одобрения виза D выдаётся сроком до 6 месяцев',
                'Въехать в Болгарию по визе',
                'Незамедлительно приступать к следующему шагу — не ждать до последних дней 14-дневного срока',
              ],
            },
            {
              h3: 'Шаг 4 — Подача на ВНЖ в Дирекции миграции',
              bullets: [
                'В течение 14 календарных дней с момента въезда: лично подать заявление в территориальное отделение Дирекции «Миграция» по месту жительства',
                'Принести полный пакет документов (см. список этапа II)',
                'Получить расписку о принятии заявления — подтверждает законный статус на время рассмотрения',
                'Срок рассмотрения: 14 календарных дней (продлевается на 1 месяц в сложных случаях)',
                'После одобрения: карта резидента изготавливается в течение 3–30 дней',
              ],
            },
            {
              h3: 'Общие сроки процесса',
              bullets: [
                'Подготовка документов: 4–8 недель',
                'Рассмотрение визы D в консульстве: 35–45 рабочих дней (до 2 месяцев)',
                'Въезд + подача ВНЖ + рассмотрение + изготовление карты: 4–8 недель',
                'Весь процесс от первой подачи в консульстве до получения карты резидента: приблизительно 3–4 месяца',
              ],
            },
          ],
        },
        {
          icon: 'trendingup',
          id: 'preimushchestva',
          h2: 'Ключевые преимущества Болгарии как базы для цифровых кочевников в 2026 году',
          blocks: [
            {
              h3: 'Шенгенская зона',
              bullets: [
                'Болгария вступила в Шенгенскую зону в 2025 году',
                'Обладатели болгарского ВНЖ могут свободно перемещаться по всем странам Шенгена',
                'Право пребывания до 90 дней из 180 в других государствах Шенгена',
                'Фактический доступ к 27 европейским странам с единой резидентской базы',
              ],
            },
            {
              h3: 'Переход на евро и финансовая инфраструктура',
              bullets: [
                'Болгария перешла на евро с 1 января 2026 года — фиксированный курс €1 = 1,95583 BGN',
                'Устраняет конверсионные расходы для доходов в евро',
                'Доступ к банковской системе ЕС: счета в UniCredit Bulbank, DSK Bank, Raiffeisen, OTP',
                'Бесплатные SEPA-переводы по всему ЕС с болгарским банковским счётом',
              ],
            },
            {
              h3: 'Налоговая среда',
              bullets: [
                'Единая ставка НДФЛ: 10% — одна из самых низких в Европейском союзе',
                'Для сравнения: Германия — до 45%, Франция — до 45%, Испания — до 47%, Италия — до 43%',
                'При пребывании в Болгарии менее 183 дней в году болгарское налоговое резидентство не возникает',
                'Налог на прибыль для болгарских компаний: также 10%',
                'Налог на дивиденды: 5% — при последующем открытии болгарской компании',
              ],
            },
            {
              h3: 'Стоимость жизни',
              bullets: [
                'Ежемесячные расходы одного человека: около €600–€800 без учёта аренды',
                'Аренда 1-комнатной квартиры в центре Софии: €500–€800 в месяц',
                'Аренда в Пловдиве, Варне, Бургасе: €350–€550 в месяц',
                'Существенно ниже, чем в Лиссабоне, Барселоне, Праге или Таллине',
              ],
            },
            {
              h3: 'Инфраструктура и качество жизни',
              bullets: [
                'Средняя скорость интернета в Софии: 200–500 Мбит/с — в числе самых высоких в Европе',
                'Развитая сеть коворкингов: София, Пловдив, Варна, Банско',
                'Активное международное сообщество цифровых кочевников во всех крупных городах',
                'Доступ к системе здравоохранения ЕС для зарегистрированных резидентов с медицинской страховкой',
                'Прямые международные рейсы из Софии во все крупные европейские хабы',
              ],
            },
          ],
        },
        {
          icon: 'info',
          id: 'ogranicheniya',
          h2: 'Ключевые ограничения и важные оговорки',
          blocks: [
            {
              h3: 'Что запрещено при данном статусе',
              bullets: [
                'Работа на болгарских работодателей или обслуживание болгарских клиентов — строго запрещено',
                'Вся профессиональная деятельность и доход должны происходить за пределами Болгарии',
                'ВНЖ не даёт права на трудоустройство в болгарской компании по болгарскому трудовому договору',
              ],
            },
            {
              h3: 'Что данный ВНЖ НЕ предоставляет',
              bullets: [
                'ВНЖ для цифровых кочевников не ведёт автоматически к постоянному виду на жительство (ПМЖ)',
                'Максимальный совокупный срок по данному основанию: 2 года (два разрешения по 1 году)',
                'После 2 лет необходимо иное правовое основание — например, регистрация болгарской компании',
                'ВНЖ не даёт права на болгарское гражданство — на это действуют отдельные правила натурализации',
              ],
            },
            {
              h3: 'Условия продления',
              bullets: [
                'Для продления на второй год: необходимо вновь подтвердить стабильный иностранный доход',
                'Потребуются обновлённые финансовые документы, действующая страховка, подтверждённый адрес и чистая правовая репутация',
                'Заявление на продление подаётся в Дирекцию миграции — не ждите до истечения срока',
              ],
            },
          ],
        },
        {
          icon: 'barChart',
          id: 'nashy-otsenkа',
          h2: 'Наша оценка',
          p: [
            'Болгарская виза для цифровых кочевников — структурно обоснованный и конкурентоспособный по цене европейский вариант получения резидентства, который заработал в полную силу лишь в конце 2025 года. Для нe-ЕС специалистов, зарабатывающих свыше €31 000/год, он сочетает правовую ясность, низкое налогообложение, шенгенскую мобильность и действительно доступный уровень жизни — комбинацию, которую мало что может предложить в ЕС по столь разумной цене.',
            'Требования к документам существенны: апостили, заверенные переводы, доказательства дохода и двухэтапная процедура (консульство + Дирекция миграции) требуют тщательной подготовки. Недооценка временных затрат — наиболее частая ошибка: начинать сбор документов за 6–8 недель до визита в консульство и планировать общий срок процесса в 3–4 месяца — это реалистичный подход.',
            'В European Gateway мы предоставляем полное юридическое сопровождение международных клиентов в процессе оформления болгарской визы для цифровых кочевников: подготовка документов, координация апостилизации, заверенные переводы, содействие при записи в консульство, подача в Дирекцию миграции и поствъездное соответствие требованиям. Наша команда доступна для первичной консультации по контактным данным ниже.',
          ],
        },
      ],
    },

    bg: {
      back: 'Към началото',
      date: '14 март 2026',
      readTime: 'Време за четене: ~20 минути',
      title:
        'ВНЖ за цифрови номади в България 2026: пълно ръководство за получаване — актуално март 2026',
      subtitle:
        'Стъпка по стъпка за дистанционни специалисти извън ЕС: правна база, категории кандидати, изисквания за доход, пълни списъци с документи за виза D и разрешение за пребиваване, събиране на семейство, апостил, данъчни предимства.',
      seoTitle: 'ВНЖ за цифрови номади България 2026: пълно ръководство',
      seoDescription:
        'Пълно ръководство март 2026 за виза и разрешение за пребиваване за цифрови номади в България: чл.24с ЗЧРБ, доход €31 000/год., документи за виза D, Дирекция Миграция, апостил, семейство, данък 10%, шенгенски достъп.',
      tocTitle: 'Съдържание',
      keyFactsTitle: 'Ключови факти — март 2026',
      noteTitle: 'Отказ от отговорност',
      noteText:
        'Тази статия е изготвена с информационна цел въз основа на законодателството, в сила към март 2026 г. Миграционното право на България продължава да се развива. Препоръчваме да проверявате актуалните изисквания в консулството или при лицензиран юрист преди подаване на документи.',
      sourcesTitle: 'Официални източници',
      photoCreditLabel: 'Снимка:',
      photoCreditOn: 'в',
      keyFacts: [
        'Правна основа: чл. 24, ал. 1, т. 23 и чл. 24с ЗЧРБ, в сила от 20 декември 2025 г.',
        'Минимален годишен доход 2026: €31 010 (50 × минимална работна заплата €620,20).',
        'Категории кандидати: служители на чуждестранни компании, собственици с дял ≥25%, фрийлансъри с над 1 г. стаж.',
        'Срок за разглеждане на виза D: 35–45 работни дни в консулството.',
        'След влизане: заявление за ВНЖ се подава в Дирекция "Миграция" до 14 дни.',
        'Срок на разрешението: 1 година с подновяване за още 1 година (максимум 2 г.).',
        'Данък върху доходите в България: единна ставка 10% — една от най-ниските в ЕС.',
        'България влезе в Шенген през 2025 г. и прие еврото от 1 януари 2026 г.',
        'Членове на семейство (съпруг/а и непълнолетни деца) могат да получат ВНЖ по събиране на семейство.',
        'Здравна застраховка: минимално покритие €30 000, валидна за България и ЕС.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'bg-intro',
          h2: 'Въведение: защо България е едно от най-привлекателните европейски места за цифрови номади',
          p: [
            'България се утвърди сред европейските юрисдикции, активно конкуриращи се за вниманието на глобалните дигитални специалисти. През декември 2025 г. страната официално стартира програмата за разрешение за пребиваване на цифрови номади — и към март 2026 г. тя работи в пълна сила. Моментът е особено значим: България влезе в Шенгенското пространство през 2025 г. и прие еврото от 1 януари 2026 г.',
            'За разлика от туристическата виза, ВНЖ за цифров номад ви дава законно право да живеете в България до две години, да отворите банкова сметка, да се придвижвате свободно в Шенгенската зона и да доведете семейството си. Разходите за живот са значително по-ниски от западноевропейските столици, данъкът върху доходите е 10%, а интернет инфраструктурата в София, Пловдив, Варна и Банско отговаря на професионалните изисквания.',
          ],
        },
        {
          icon: 'landmark',
          id: 'bg-legal',
          h2: 'Правна база',
          p: [
            'Разрешението за пребиваване за цифрови номади е въведено с изменения на ЗЧРБ, приети от Народното събрание на 18 юни 2025 г. и обнародвани в Държавен вестник на 27 юни 2025 г. Правното основание е чл. 24, ал. 1, т. 23 и чл. 24с ЗЧРБ. Правилникът за прилагане на ЗЧРБ е актуализиран и в сила от 20 декември 2025 г., с корекция от 20 януари 2026 г.',
          ],
          blocks: [
            {
              h3: 'Официални нормативни препратки',
              bullets: [
                'ЗЧРБ, актуална редакция: parliament.bg/bg/laws/ID/156869',
                'Чл. 24, ал. 1, т. 23 ЗЧРБ — основание за ВНЖ на цифров номад',
                'Чл. 24с ЗЧРБ — изисквания за доход и категории кандидати',
                'ППЗЧРБ — процедурни правила, в сила от 20.12.2025 г.',
              ],
            },
          ],
        },
        {
          icon: 'usercheck',
          id: 'bg-eligibility',
          h2: 'Категории кандидати',
          blocks: [
            {
              h3: 'Категория 1 — Наети служители на дистанционна работа',
              bullets: [
                'Трудов договор с компания извън ЕС/ЕИП/Швейцария',
                'Работата се извършва изцяло онлайн',
                'Необходими доказателства: трудов договор, потвърдително писмо от работодателя',
              ],
            },
            {
              h3: 'Категория 2 — Собственици и управители на чуждестранен бизнес',
              bullets: [
                'Дял от минимум 25% в чуждестранна компания извън ЕС',
                'Необходими доказателства: учредителни документи, извлечение от търговски регистър',
              ],
            },
            {
              h3: 'Категория 3 — Фрийлансъри',
              bullets: [
                'Минимум 1 г. документиран фрийланс стаж преди кандидатстване',
                'Доходът трябва да е изцяло от чуждестранни клиенти',
                'Необходими доказателства: договори, препоръчителни писма, фактури за 12 месеца',
              ],
            },
          ],
        },
        {
          icon: 'wallet',
          id: 'bg-income',
          h2: 'Финансови изисквания',
          p: [
            'Минималният годишен доход е €31 010 (50 × минималната работна заплата €620,20 за 2026 г.). Доходът трябва да е изцяло от източници извън България и ЕС/ЕИП/Швейцария, доказан с банкови извлечения за 6–12 месеца или данъчни декларации.',
          ],
          blocks: [
            {
              h3: 'Документиране на дохода',
              bullets: [
                'Банкови извлечения с редовни постъпления — основен и надежден метод',
                'Ведомости за заплата — за наети служители',
                'Данъчни декларации или финансови отчети — за собственици',
                'Фактури с потвърждения за плащане — за фрийлансъри',
              ],
            },
          ],
        },
        {
          icon: 'filetext',
          id: 'bg-visa-d',
          h2: 'Етап I — Документи за виза D (консулство)',
          blocks: [
            {
              h3: 'Лични документи',
              bullets: [
                'Валиден паспорт — мин. 2 празни стр., издаден < 10 г., с валидност мин. 6 месеца от влизане',
                'Цветна снимка по изискванията на консулството',
                'Попълнено заявление от mfa.bg — на български или английски, латинска ПЕЧАТНА азбука',
                'Квитанция за платена консулска такса (€100–€300)',
              ],
            },
            {
              h3: 'Доказателства за дистанционна дейност',
              bullets: [
                'Служители: трудов договор с изрично посочен дистанционен характер',
                'Собственици: учредителни документи, дял > 25%, извлечение от търговски регистър',
                'Фрийлансъри: договори с клиенти, препоръчителни писма, фактури за 12 месеца',
              ],
            },
            {
              h3: 'Финансови документи',
              bullets: [
                'Банкови извлечения за 6–12 месеца, доказващи доход ≥ €31 010/год.',
                'Ведомости, данъчни декларации или фактури (според категорията)',
              ],
            },
            {
              h3: 'Здравна застраховка',
              bullets: [
                'Минимално покритие €30 000, валидна за България и ЕС/Шенген',
                'Покрива целия период на престой',
              ],
            },
            {
              h3: 'Доказателство за жилище',
              bullets: [
                'Договор за наем или резервация на хотел',
                'Документ за собственост — ако притежавате имот в България',
              ],
            },
            {
              h3: 'Свидетелство за съдимост',
              bullets: [
                'Издадено от страната на гражданство и/или пребиваване',
                'С апостил и нотариално заверен превод на български',
                'Не по-старо от 6 месеца към датата на подаване',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'bg-vnzh',
          h2: 'Етап II — Документи за ВНЖ в Дирекция "Миграция"',
          p: [
            'В срок от 14 календарни дни след влизане в България трябва да подадете лично заявление за разрешение за пребиваване в съответното звено на Дирекция "Миграция" на МВР по местоживеене.',
          ],
          blocks: [
            {
              h3: 'Пълен пакет документи',
              bullets: [
                'Валиден паспорт с виза D + копие',
                'Заявление по официален образец "Цифров номад"',
                '2 цветни снимки',
                'Доказателство за адрес в България (дългосрочен наем или собственост)',
                'Актуални доказателства за дейност и доход',
                'Валидна здравна застраховка (мин. €30 000)',
                'Свидетелство за съдимост (ако е изтекло)',
                'Квитанции за платени държавни такси',
              ],
            },
            {
              h3: 'Държавни такси',
              bullets: [
                '10 лв (~€5) — разглеждане на заявлението',
                '500 лв (~€256) — разрешение за пребиваване за 1 г.',
                '40–200 лв (~€20–€102) — изработка на карта на пребиваващ',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'bg-apostille',
          h2: 'Апостил и превод: основни правила',
          blocks: [
            {
              h3: 'Апостил',
              bullets: [
                'България е страна по Хагската конвенция от 1961 г. — апостилираните документи се признават без допълнителна легализация',
                'Поставя се от компетентен орган в страната, издала документа',
                'Препоръка: стартирайте процедурата 6–8 седмици преди срещата в консулството',
              ],
            },
            {
              h3: 'Превод',
              bullets: [
                'Извършва се от лицензиран преводач, акредитиран в България',
                'Трябва да бъде нотариално заверен',
                'Всички документи — в оригинал + нотариално заверени копия',
              ],
            },
            {
              h3: 'Документи, изискващи апостил и превод',
              bullets: [
                'Свидетелство за съдимост',
                'Акт за раждане (за деца)',
                'Акт за граждански брак (за съпруг/а)',
                'Учредителни документи (за собственици)',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'bg-family',
          h2: 'Документи за членове на семейство',
          blocks: [
            {
              h3: 'За съпруг/а',
              bullets: [
                'Валиден паспорт + копие',
                'Акт за граждански брак — с апостил и нотариално заверен превод',
                'Свидетелство за съдимост — с апостил и превод (не по-старо от 6 месеца)',
                'Здравна застраховка (мин. €30 000)',
                'Такса: 200 лв (~€102)',
              ],
            },
            {
              h3: 'За непълнолетни деца',
              bullets: [
                'Валиден паспорт на детето + копие',
                'Акт за раждане — с апостил и нотариално заверен превод',
                'Здравна застраховка (мин. €30 000)',
                'Нотариално заверено съгласие на другия родител, ако пътува само с единия',
                'Такса: 200 лв (~€102) на дете',
              ],
            },
          ],
        },
        {
          icon: 'trendingup',
          id: 'bg-advantages',
          h2: 'Ключови предимства на България за цифрови номади',
          blocks: [
            {
              h3: 'Шенгенска зона и евро',
              bullets: [
                'България е в Шенген от 2025 г. — свободно движение в 27 европейски държави',
                'Еврото от 1 януари 2026 г. — без валутни конверсии за евро-деноминирани доходи',
              ],
            },
            {
              h3: 'Данъчна среда',
              bullets: [
                'ДДФЛ: 10% единна ставка — една от най-ниските в ЕС',
                'Корпоративен данък: също 10%',
                'При < 183 дни в България — данъчно местожителство в България не възниква',
              ],
            },
            {
              h3: 'Разходи за живот',
              bullets: [
                '€600–€800/месец без наем за едно лице',
                'Наем в центъра на София: €500–€800/месец',
                'Пловдив, Варна, Бургас: €350–€550/месец',
              ],
            },
          ],
        },
        {
          icon: 'barChart',
          id: 'bg-conclusion',
          h2: 'Нашата оценка',
          p: [
            'Визата за цифрови номади в България е структурно издържана и конкурентна европейска опция за пребиваване, която заработи в пълна сила едва в края на 2025 г. За специалисти извън ЕС с доход над €31 000/год. тя съчетава правна яснота, ниско данъчно облагане, шенгенска мобилност и достъпен стандарт на живот.',
            'В European Gateway предоставяме пълна правна подкрепа за международни клиенти в процеса на кандидатстване: подготовка на документи, координация на апостили, заверени преводи, съдействие при записване в консулство и подаване в Дирекция "Миграция".',
          ],
        },
      ],
    },

    de: {
      back: 'Zur Startseite',
      date: '14. März 2026',
      readTime: 'Lesezeit: ~20 Minuten',
      title:
        'Aufenthaltserlaubnis für digitale Nomaden in Bulgarien 2026: Vollständiger Leitfaden — Stand März 2026',
      subtitle:
        'Schritt-für-Schritt-Anleitung für Remote-Fachkräfte aus Nicht-EU-Ländern: Rechtsgrundlage, Antragskategorien, Einkommensanforderungen, vollständige Dokumentenlisten für Visum D und Aufenthaltserlaubnis, Familiennachzug, Apostille.',
      seoTitle:
        'Aufenthaltserlaubnis digitale Nomaden Bulgarien 2026: Vollständiger Leitfaden',
      seoDescription:
        'Vollständiger Leitfaden März 2026: Digitales Nomaden-Visum Bulgarien, Rechtsgrundlage Art.24с ЗЧРБ, Einkommen €31.000/Jahr, Visum D Dokumente, Migrationsbehörde, Apostille, Familie, 10% Einkommensteuer, Schengen-Zugang.',
      tocTitle: 'Inhalt',
      keyFactsTitle: 'Wichtige Fakten — März 2026',
      noteTitle: 'Haftungsausschluss',
      noteText:
        'Dieser Artikel dient nur zu Informationszwecken und basiert auf dem Stand März 2026. Das bulgarische Migrationsrecht entwickelt sich weiter. Wir empfehlen, die aktuellen Anforderungen vor der Antragstellung beim Konsulat oder bei einem qualifizierten Anwalt zu überprüfen.',
      sourcesTitle: 'Offizielle Quellen',
      photoCreditLabel: 'Artikelfoto:',
      photoCreditOn: 'auf',
      keyFacts: [
        'Rechtsgrundlage: Art. 24 Abs. 1 Nr. 23 und Art. 24с ЗЧРБ, in Kraft seit 20. Dezember 2025.',
        'Mindestjahreseinkommen 2026: €31.010 (50 × Mindestlohn €620,20/Monat).',
        'Antragsberechtigte: Angestellte nicht-EU-Unternehmen, Geschäftsinhaber ≥25%, Freiberufler mit ≥1 Jahr Nachweisgeschichte.',
        'Bearbeitungszeit Visum D: 35–45 Werktage im Konsulat.',
        'Nach Einreise: Aufenthaltserlaubnis innerhalb von 14 Tagen bei der Migrationsbehörde beantragen.',
        'Gültigkeitsdauer: 1 Jahr, verlängerbar um 1 Jahr (maximal 2 Jahre).',
        'Einkommensteuer in Bulgarien: 10% Flat Rate — eine der niedrigsten in der EU.',
        'Bulgarien ist seit 2025 im Schengen-Raum und hat am 1. Januar 2026 den Euro eingeführt.',
        'Familienangehörige (Ehepartner + minderjährige Kinder) können Aufenthaltserlaubnis im Familiennachzug erhalten.',
        'Krankenversicherung: Mindestdeckung €30.000, gültig in Bulgarien und der EU.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'de-intro',
          h2: 'Einführung: Warum Bulgarien zu einem der attraktivsten europäischen Standorte für digitale Nomaden geworden ist',
          p: [
            'Bulgarien hat sich fest unter den europäischen Jurisdiktionen etabliert, die aktiv um globale digitale Fachkräfte konkurrieren. Im Dezember 2025 startete das Land offiziell sein Aufenthaltserlaubnis-Programm für digitale Nomaden — und im März 2026 läuft es auf vollen Touren. Der Zeitpunkt ist besonders bedeutsam: Bulgarien trat 2025 dem Schengen-Raum bei und führte am 1. Januar 2026 den Euro ein.',
            'Im Gegensatz zu einem Touristenvisum, das den Aufenthalt auf 90 von 180 Tagen begrenzt, gibt die Aufenthaltserlaubnis für digitale Nomaden das Recht, bis zu zwei Jahre legal in Bulgarien zu leben, ein Bankkonto zu eröffnen, sich frei im Schengen-Raum zu bewegen und die engsten Familienmitglieder mitzubringen. Die Lebenshaltungskosten liegen deutlich unter westeuropäischen Hauptstädten, der Einkommensteuersatz beträgt 10%.',
          ],
        },
        {
          icon: 'landmark',
          id: 'de-legal',
          h2: 'Rechtsrahmen',
          p: [
            'Die Aufenthaltserlaubnis für digitale Nomaden wurde durch Änderungen des Gesetzes über Ausländer in der Republik Bulgarien (ЗЧРБ) eingeführt. Rechtsgrundlage: Art. 24 Abs. 1 Nr. 23 und Art. 24с ЗЧРБ. Die Durchführungsverordnung gilt seit dem 20. Dezember 2025 und wurde am 20. Januar 2026 ergänzt.',
          ],
          blocks: [
            {
              h3: 'Rechtliche Verweise',
              bullets: [
                'ЗЧРБ, aktuelle Fassung: parliament.bg/bg/laws/ID/156869',
                'Art. 24 Abs. 1 Nr. 23 ЗЧРБ — Grundlage der Aufenthaltserlaubnis',
                'Art. 24с ЗЧРБ — Einkommensanforderungen und Antragskategorien',
                'Durchführungsverordnung ППЗЧРБ — in Kraft seit 20.12.2025',
              ],
            },
          ],
        },
        {
          icon: 'usercheck',
          id: 'de-eligibility',
          h2: 'Antragsberechtigung: drei Kategorien',
          blocks: [
            {
              h3: 'Kategorie 1 — Remote-Angestellte',
              bullets: [
                'Arbeitsvertrag mit einem Nicht-EU-Unternehmen, vollständig remote',
                'Nachweis: Arbeitsvertrag mit Hinweis auf Remote-Arbeit, Bestätigungsschreiben des Arbeitgebers',
              ],
            },
            {
              h3: 'Kategorie 2 — Unternehmer und Geschäftsführer',
              bullets: [
                'Anteil von mindestens 25% an einem Nicht-EU-Unternehmen',
                'Nachweis: Gründungsunterlagen, Gesellschafterliste, Handelsregisterauszug',
              ],
            },
            {
              h3: 'Kategorie 3 — Freiberufler',
              bullets: [
                'Mindestens 1 Jahr dokumentierte freiberufliche Tätigkeit für Nicht-EU-Kunden',
                'Nachweis: Verträge, Empfehlungsschreiben, Rechnungen der letzten 12 Monate',
              ],
            },
          ],
        },
        {
          icon: 'wallet',
          id: 'de-income',
          h2: 'Finanzielle Anforderungen',
          p: [
            'Das Mindesteinkommen beträgt €31.010/Jahr (50 × Mindestlohn €620,20 für 2026). Das Einkommen muss ausschließlich aus Quellen außerhalb Bulgariens und der EU/EWR/Schweiz stammen und durch Kontoauszüge der letzten 6–12 Monate nachgewiesen werden.',
          ],
          blocks: [
            {
              h3: 'Einkommensnachweise',
              bullets: [
                'Kontoauszüge mit regelmäßigen Eingängen — zuverlässigste Methode',
                'Gehaltsabrechnungen — für Angestellte',
                'Steuererklärungen oder Jahresabschlüsse — für Unternehmer',
                'Rechnungssammlungen mit Zahlungsbestätigungen — für Freiberufler',
              ],
            },
          ],
        },
        {
          icon: 'filetext',
          id: 'de-visa-d',
          h2: 'Phase I — Dokumente für Visum D (Konsulat)',
          blocks: [
            {
              h3: 'Persönliche Dokumente',
              bullets: [
                'Gültiger Reisepass — mind. 2 leere Seiten, ausgestellt vor < 10 Jahren, mind. 6 Monate gültig ab Einreise',
                'Farbfoto nach Konsulatsanforderungen',
                'Ausgefülltes Antragsformular von mfa.bg — auf Bulgarisch oder Englisch, lateinische Druckbuchstaben',
                'Quittung der Konsulatsgebühr (€100–€300)',
              ],
            },
            {
              h3: 'Nachweise der Fernbeschäftigung (nach Kategorie)',
              bullets: [
                'Angestellte: Arbeitsvertrag mit explizitem Hinweis auf Remote-Arbeit, Arbeitgeberbestätigung',
                'Unternehmer: Gründungsunterlagen, Anteilsnachweis > 25%, Handelsregisterauszug',
                'Freiberufler: aktive Verträge mit ausländischen Kunden, Empfehlungsschreiben, Rechnungen 12 Monate',
              ],
            },
            {
              h3: 'Finanzdokumente',
              bullets: [
                'Kontoauszüge der letzten 6–12 Monate mit Einkommensnachweisen ≥ €31.010/Jahr',
                'Gehaltsabrechnungen, Steuererklärungen oder Rechnungen (je nach Kategorie)',
              ],
            },
            {
              h3: 'Krankenversicherung',
              bullets: [
                'Mindestdeckung €30.000, gültig in Bulgarien und der EU/Schengen',
                'Muss den gesamten geplanten Aufenthalt abdecken',
              ],
            },
            {
              h3: 'Wohnungsnachweis',
              bullets: [
                'Mietvertrag oder Hotelreservierung',
                'Eigentumsnachweis bei Immobilienbesitz in Bulgarien',
              ],
            },
            {
              h3: 'Strafregisterauszug',
              bullets: [
                'Aus dem Herkunfts- und/oder Wohnsitzland',
                'Mit Apostille und notariell beglaubigter bulgarischer Übersetzung',
                'Nicht älter als 6 Monate',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'de-vnzh',
          h2: 'Phase II — Dokumente für Aufenthaltserlaubnis bei der Migrationsbehörde',
          p: [
            'Nach der Einreise nach Bulgarien muss die Aufenthaltserlaubnis innerhalb von 14 Kalendertagen persönlich bei der zuständigen Stelle der Direktorat "Migration" des Innenministeriums am Wohnort beantragt werden.',
          ],
          blocks: [
            {
              h3: 'Vollständige Dokumentenliste',
              bullets: [
                'Gültiger Reisepass mit Visum D + Kopie',
                'Antragsformular Kategorie "Digitaler Nomade"',
                '2 Farbfotos',
                'Wohnungsnachweis in Bulgarien (Langzeitmietvertrag oder Eigentumsnachweis)',
                'Aktuelle Nachweise zur Fernbeschäftigung und Einkommen',
                'Gültige Krankenversicherung (mind. €30.000)',
                'Strafregisterauszug (falls abgelaufen)',
                'Zahlungsquittungen der Staatsgebühren',
              ],
            },
            {
              h3: 'Staatsgebühren',
              bullets: [
                '10 BGN (~€5) — Antragsbearbeitung',
                '500 BGN (~€256) — Aufenthaltserlaubnis für 1 Jahr',
                '40–200 BGN (~€20–€102) — Ausstellung der Aufenthaltskarte',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'de-apostille',
          h2: 'Apostille und Übersetzungsanforderungen',
          blocks: [
            {
              h3: 'Apostille',
              bullets: [
                'Bulgarien ist Vertragspartei des Haager Übereinkommens von 1961 — apostillierte Dokumente werden anerkannt',
                'Wird von der zuständigen Behörde im Ausstellungsland angebracht',
                'Empfehlung: starten Sie das Verfahren 6–8 Wochen vor dem Konsulattermin',
              ],
            },
            {
              h3: 'Übersetzung ins Bulgarische',
              bullets: [
                'Von einem in Bulgarien akkreditierten Übersetzer',
                'Notariell beglaubigt',
                'Alle Dokumente: Original + notariell beglaubigte Kopie',
              ],
            },
            {
              h3: 'Dokumente mit Apostille + Übersetzung',
              bullets: [
                'Strafregisterauszug',
                'Geburtsurkunden (Kinder)',
                'Heiratsurkunde (Ehepartner)',
                'Unternehmensdokumente (Unternehmer)',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'de-family',
          h2: 'Dokumente für Familienangehörige',
          blocks: [
            {
              h3: 'Für den Ehepartner',
              bullets: [
                'Gültiger Reisepass + Kopie',
                'Heiratsurkunde — mit Apostille und beglaubigter bulgarischer Übersetzung',
                'Eigener Strafregisterauszug — mit Apostille und Übersetzung (max. 6 Monate alt)',
                'Krankenversicherung (mind. €30.000)',
                'Gebühr: 200 BGN (~€102)',
              ],
            },
            {
              h3: 'Für minderjährige Kinder',
              bullets: [
                'Gültiger Reisepass des Kindes + Kopie',
                'Geburtsurkunde — mit Apostille und beglaubigter Übersetzung',
                'Krankenversicherung (mind. €30.000)',
                'Notariell beglaubigte Zustimmung des anderen Elternteils bei Reise mit nur einem Elternteil',
                'Gebühr: 200 BGN (~€102) pro Kind',
              ],
            },
          ],
        },
        {
          icon: 'trendingup',
          id: 'de-advantages',
          h2: 'Wichtigste Vorteile Bulgariens als Basis für digitale Nomaden',
          blocks: [
            {
              h3: 'Schengen-Raum und Euro',
              bullets: [
                'Bulgarien ist seit 2025 im Schengen-Raum — Reisefreiheit in 27 europäischen Ländern',
                'Euro seit 1. Januar 2026 — keine Währungsumrechnung für Euro-Einkommen',
              ],
            },
            {
              h3: 'Steuerumgebung',
              bullets: [
                'Einkommensteuer: 10% Flat Rate — eine der niedrigsten in der EU',
                'Körperschaftsteuer: ebenfalls 10%',
                'Weniger als 183 Tage in Bulgarien — keine bulgarische Steuerpflicht',
              ],
            },
            {
              h3: 'Lebenshaltungskosten',
              bullets: [
                '€600–€800/Monat ohne Miete für eine Person',
                'Miete im Sofioter Stadtzentrum: €500–€800/Monat',
                'Plovdiv, Varna, Burgas: €350–€550/Monat',
              ],
            },
          ],
        },
        {
          icon: 'barChart',
          id: 'de-conclusion',
          h2: 'Unsere Einschätzung',
          p: [
            'Das digitale Nomaden-Visum Bulgariens ist eine strukturell fundierte und preisgünstige europäische Aufenthaltsoption, die erst Ende 2025 voll in Betrieb genommen wurde. Für Nicht-EU-Fachkräfte mit einem Einkommen über €31.000/Jahr bietet sie rechtliche Klarheit, niedrige Besteuerung, Schengen-Mobilität und erschwingliche Lebenshaltungskosten.',
            'Bei European Gateway bieten wir vollständige Rechtsunterstützung für internationale Kunden: Dokumentenvorbereitung, Apostille-Koordination, beglaubigte Übersetzungen, Konsulatsterminunterstützung und Einreichung bei der Migrationsbehörde.',
          ],
        },
      ],
    },

    it: {
      back: 'Torna alla home',
      date: '14 marzo 2026',
      readTime: 'Tempo di lettura: ~20 minuti',
      title:
        'Permesso di soggiorno per nomadi digitali in Bulgaria 2026: guida completa — aggiornata marzo 2026',
      subtitle:
        'Guida passo per passo per lavoratori da remoto extra-UE: base giuridica, categorie di richiedenti, requisiti di reddito, lista completa dei documenti per Visto D e permesso di soggiorno, ricongiungimento familiare, apostille, tasse.',
      seoTitle:
        'Permesso di soggiorno nomadi digitali Bulgaria 2026: guida completa',
      seoDescription:
        'Guida completa marzo 2026: visto nomade digitale Bulgaria, base giuridica art.24с ЗЧРБ, reddito €31.000/anno, documenti visto D, Direzione Migrazione, apostille, famiglia, imposta 10%, accesso Schengen.',
      tocTitle: 'Indice',
      keyFactsTitle: 'Fatti chiave — marzo 2026',
      noteTitle: 'Avvertenza',
      noteText:
        'Questo articolo è redatto a scopo informativo sulla base della legislazione in vigore a marzo 2026. La normativa migratoria bulgara continua ad evolversi. Si raccomanda di verificare i requisiti aggiornati presso il consolato o un avvocato qualificato prima di presentare i documenti.',
      sourcesTitle: 'Fonti ufficiali',
      photoCreditLabel: 'Foto articolo:',
      photoCreditOn: 'su',
      keyFacts: [
        'Base giuridica: art. 24 co. 1 n. 23 e art. 24с ЗЧРБ, in vigore dal 20 dicembre 2025.',
        'Reddito minimo annuo 2026: €31.010 (50 × salario minimo mensile €620,20).',
        'Chi può richiedere: dipendenti di aziende non UE, titolari di impresa con quota ≥25%, liberi professionisti con ≥1 anno di storia documentata.',
        'Tempi elaborazione visto D: 35–45 giorni lavorativi presso il consolato.',
        'Dopo l\'ingresso: richiesta permesso di soggiorno entro 14 giorni alla Direzione Migrazione.',
        'Durata permesso: 1 anno, rinnovabile per 1 anno (massimo 2 anni totali).',
        'Imposta sul reddito in Bulgaria: aliquota flat 10% — tra le più basse nell\'UE.',
        'Bulgaria entrata in Schengen nel 2025 e adozione dell\'euro il 1° gennaio 2026.',
        'Familiari (coniuge + figli minori) possono ottenere permesso tramite ricongiungimento familiare.',
        'Assicurazione sanitaria: copertura minima €30.000, valida in Bulgaria e nell\'UE.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'it-intro',
          h2: 'Introduzione: perché la Bulgaria è diventata una delle basi europee più attraenti per i nomadi digitali',
          p: [
            'La Bulgaria si è affermata tra le giurisdizioni europee che competono attivamente per attirare i professionisti digitali globali. Nel dicembre 2025 il Paese ha ufficialmente avviato il programma di permesso di soggiorno per nomadi digitali — e a marzo 2026 è pienamente operativo. Il momento è particolarmente significativo: la Bulgaria è entrata nell\'area Schengen nel 2025 e ha adottato l\'euro il 1° gennaio 2026.',
            'A differenza di un visto turistico, il permesso di soggiorno per nomade digitale conferisce il diritto legale di vivere in Bulgaria fino a due anni, aprire un conto bancario, spostarsi liberamente nell\'area Schengen e portare con sé i familiari stretti. Il costo della vita è notevolmente inferiore alle capitali dell\'Europa occidentale, l\'aliquota dell\'imposta sul reddito è del 10%.',
          ],
        },
        {
          icon: 'landmark',
          id: 'it-legal',
          h2: 'Quadro normativo',
          p: [
            'Il permesso di soggiorno per nomadi digitali è stato introdotto da modifiche alla Legge sugli stranieri della Repubblica di Bulgaria (ЗЧРБ). Base giuridica: art. 24 co. 1 n. 23 e art. 24с ЗЧРБ. Il regolamento attuativo è in vigore dal 20 dicembre 2025, con modifica del 20 gennaio 2026.',
          ],
          blocks: [
            {
              h3: 'Riferimenti normativi',
              bullets: [
                'ЗЧРБ, edizione aggiornata: parliament.bg/bg/laws/ID/156869',
                'Art. 24 co. 1 n. 23 ЗЧРБ — fondamento del permesso di soggiorno nomade digitale',
                'Art. 24с ЗЧРБ — requisiti di reddito e categorie di richiedenti',
                'Regolamento attuativo ППЗЧРБ — in vigore dal 20.12.2025',
              ],
            },
          ],
        },
        {
          icon: 'usercheck',
          id: 'it-eligibility',
          h2: 'Categorie di richiedenti',
          blocks: [
            {
              h3: 'Categoria 1 — Dipendenti da remoto',
              bullets: [
                'Contratto di lavoro con azienda registrata fuori UE/SEE/Svizzera, lavoro completamente online',
                'Documenti: contratto con indicazione del lavoro da remoto, lettera di conferma del datore',
              ],
            },
            {
              h3: 'Categoria 2 — Imprenditori e dirigenti',
              bullets: [
                'Quota di almeno 25% in azienda estera fuori UE',
                'Documenti: atto costitutivo, registro dei soci, visura camerale estera',
              ],
            },
            {
              h3: 'Categoria 3 — Liberi professionisti',
              bullets: [
                'Almeno 1 anno di attività freelance documentata per clienti non bulgari',
                'Documenti: contratti attivi, lettere di referenza, fatture ultimi 12 mesi',
              ],
            },
          ],
        },
        {
          icon: 'wallet',
          id: 'it-income',
          h2: 'Requisiti economici',
          p: [
            'Il reddito annuo minimo è €31.010 (50 × salario minimo €620,20 per il 2026). Il reddito deve provenire esclusivamente da fonti fuori Bulgaria e UE/SEE/Svizzera, documentato da estratti conto degli ultimi 6–12 mesi.',
          ],
          blocks: [
            {
              h3: 'Come documentare il reddito',
              bullets: [
                'Estratti conto bancari con flussi regolari — metodo più comune e affidabile',
                'Buste paga — per i dipendenti',
                'Dichiarazioni dei redditi o bilanci aziendali — per gli imprenditori',
                'Fatture con conferme di pagamento — per i liberi professionisti',
              ],
            },
          ],
        },
        {
          icon: 'filetext',
          id: 'it-visa-d',
          h2: 'Fase I — Documenti per il Visto D (consolato)',
          blocks: [
            {
              h3: 'Documenti personali',
              bullets: [
                'Passaporto valido — min. 2 pagine libere, rilasciato < 10 anni fa, valido min. 6 mesi dall\'ingresso',
                'Foto a colori secondo le specifiche del consolato',
                'Modulo di domanda da mfa.bg — in bulgaro o inglese, caratteri stampatello latini',
                'Ricevuta del pagamento della tassa consolare (€100–€300)',
              ],
            },
            {
              h3: 'Prove di lavoro da remoto (per categoria)',
              bullets: [
                'Dipendenti: contratto di lavoro con indicazione esplicita del lavoro da remoto, lettera del datore',
                'Imprenditori: atto costitutivo, quota > 25%, visura camerale estera',
                'Freelance: contratti attivi con clienti esteri, referenze, fatture 12 mesi',
              ],
            },
            {
              h3: 'Documenti finanziari',
              bullets: [
                'Estratti conto degli ultimi 6–12 mesi con reddito ≥ €31.010/anno',
                'Buste paga, dichiarazioni o fatture (secondo la categoria)',
              ],
            },
            {
              h3: 'Assicurazione sanitaria',
              bullets: [
                'Copertura minima €30.000, valida in Bulgaria e UE/Schengen',
                'Deve coprire l\'intero periodo di soggiorno previsto',
              ],
            },
            {
              h3: 'Prova di alloggio',
              bullets: [
                'Contratto di affitto o prenotazione hotel',
                'Titolo di proprietà se si possiede un immobile in Bulgaria',
              ],
            },
            {
              h3: 'Certificato penale',
              bullets: [
                'Rilasciato dal Paese di cittadinanza e/o residenza',
                'Con apostilla e traduzione bulgara certificata da notaio',
                'Non antecedente a 6 mesi dalla data di presentazione',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'it-vnzh',
          h2: 'Fase II — Documenti per il permesso di soggiorno (Direzione Migrazione)',
          p: [
            'Entro 14 giorni dall\'ingresso in Bulgaria è necessario presentare personalmente la domanda di permesso di soggiorno presso la sede territoriale della Direzione Migrazione del Ministero dell\'Interno.',
          ],
          blocks: [
            {
              h3: 'Lista completa documenti',
              bullets: [
                'Passaporto valido con visto D + copia',
                'Modulo di domanda categoria "Nomade digitale"',
                '2 fotografie a colori',
                'Prova di domicilio in Bulgaria (contratto d\'affitto a lungo termine o titolo di proprietà)',
                'Prove aggiornate di attività da remoto e reddito',
                'Polizza sanitaria valida (min. €30.000)',
                'Certificato penale (se scaduto)',
                'Ricevute pagamento tasse statali',
              ],
            },
            {
              h3: 'Tasse statali',
              bullets: [
                '10 BGN (~€5) — esame della domanda',
                '500 BGN (~€256) — permesso di soggiorno 1 anno',
                '40–200 BGN (~€20–€102) — emissione carta di soggiorno',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'it-apostille',
          h2: 'Apostille e requisiti di traduzione',
          blocks: [
            {
              h3: 'Apostille',
              bullets: [
                'La Bulgaria è firmataria della Convenzione dell\'Aia del 1961 — i documenti apostillati sono riconosciuti',
                'L\'apostille è apposta dall\'autorità competente nel Paese che ha emesso il documento',
                'Consiglio pratico: avviare la procedura 6–8 settimane prima dell\'appuntamento consolare',
              ],
            },
            {
              h3: 'Traduzione in bulgaro',
              bullets: [
                'Da un traduttore accreditato in Bulgaria',
                'Con autentica notarile',
                'Tutti i documenti in originale + copie autenticate',
              ],
            },
            {
              h3: 'Documenti che richiedono apostille + traduzione',
              bullets: [
                'Certificato penale',
                'Atti di nascita (figli)',
                'Atto di matrimonio (coniuge)',
                'Documenti aziendali (imprenditori)',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'it-family',
          h2: 'Documenti per i familiari',
          blocks: [
            {
              h3: 'Per il coniuge',
              bullets: [
                'Passaporto valido + copia',
                'Atto di matrimonio — con apostille e traduzione bulgara certificata',
                'Certificato penale proprio — con apostille e traduzione (max. 6 mesi)',
                'Assicurazione sanitaria (min. €30.000)',
                'Tassa: 200 BGN (~€102)',
              ],
            },
            {
              h3: 'Per i figli minori',
              bullets: [
                'Passaporto del figlio + copia',
                'Atto di nascita — con apostille e traduzione certificata',
                'Assicurazione sanitaria (min. €30.000)',
                'Consenso notarile dell\'altro genitore se il figlio viaggia con un solo genitore',
                'Tassa: 200 BGN (~€102) per figlio',
              ],
            },
          ],
        },
        {
          icon: 'trendingup',
          id: 'it-advantages',
          h2: 'Principali vantaggi della Bulgaria come base per nomadi digitali',
          blocks: [
            {
              h3: 'Area Schengen ed euro',
              bullets: [
                'Bulgaria nell\'area Schengen dal 2025 — libertà di movimento in 27 Paesi europei',
                'Euro dal 1° gennaio 2026 — nessuna conversione valutaria per redditi in euro',
              ],
            },
            {
              h3: 'Ambiente fiscale',
              bullets: [
                'IRPEF: 10% flat rate — tra le più basse nell\'UE',
                'Imposta sulle società: anche 10%',
                'Meno di 183 giorni in Bulgaria — non si genera residenza fiscale bulgara',
              ],
            },
            {
              h3: 'Costo della vita',
              bullets: [
                '€600–€800/mese senza affitto per una persona',
                'Affitto bilocale a Sofia centro: €500–€800/mese',
                'Plovdiv, Varna, Burgas: €350–€550/mese',
              ],
            },
          ],
        },
        {
          icon: 'barChart',
          id: 'it-conclusion',
          h2: 'La nostra valutazione',
          p: [
            'Il visto per nomadi digitali della Bulgaria è un\'opzione di residenza europea strutturalmente solida e conveniente, diventata pienamente operativa solo a fine 2025. Per professionisti extra-UE con reddito superiore a €31.000/anno, combina chiarezza normativa, bassa fiscalità, mobilità Schengen e un costo della vita accessibile.',
            'In European Gateway offriamo supporto legale completo per i clienti internazionali nel processo del visto per nomadi digitali bulgaro: preparazione documenti, coordinamento apostille, traduzioni certificate, assistenza appuntamento consolare e presentazione alla Direzione Migrazione.',
          ],
        },
      ],
    },
  };

  const d = translations[lang];
  const siteName = 'European Gateway';
  const articleUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://estate.aibyteconsult.com/';

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lang;

    const metaTitle = d.seoTitle || d.title;
    const metaDescription = d.seoDescription || d.subtitle;
    document.title = `${metaTitle} | ${siteName}`;

    const upsertMeta = (selector: string, attrs: Record<string, string>, content: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([key, value]) => el?.setAttribute(key, value));
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const upsertLink = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        Object.entries(attrs).forEach(([key, value]) => el?.setAttribute(key, value));
        document.head.appendChild(el);
      } else {
        Object.entries(attrs).forEach(([key, value]) => el?.setAttribute(key, value));
      }
    };

    const upsertScript = (id: string, json: unknown) => {
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = id;
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(json);
    };

    upsertMeta('meta[name="description"]', { name: 'description' }, metaDescription);
    upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow, max-image-preview:large');
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'article');
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, metaTitle);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, metaDescription);
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, articleUrl);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, cover.image_url);
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, siteName);
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, lang);
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, metaTitle);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, metaDescription);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, cover.image_url);
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: articleUrl });

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: d.title,
      description: metaDescription,
      inLanguage: lang,
      mainEntityOfPage: articleUrl,
      image: [cover.image_url],
      author: { '@type': 'Organization', name: siteName },
      publisher: { '@type': 'Organization', name: siteName },
      datePublished: '2026-03-14',
      dateModified: '2026-03-14',
      articleSection: 'Immigration',
      keywords: [
        'Bulgaria digital nomad visa 2026',
        'ВНЖ цифровой кочевник Болгария',
        'Bulgaria residence permit remote work',
        'чл 24с ЗЧРБ',
        'виза D Болгария',
        'digital nomad Europe 2026',
      ],
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://estate.aibyteconsult.com/' },
        { '@type': 'ListItem', position: 2, name: d.title, item: articleUrl },
      ],
    };

    upsertScript('article-structured-data-digital-nomad-visa', articleSchema);
    upsertScript('breadcrumb-structured-data-digital-nomad-visa', breadcrumbSchema);
  }, [articleUrl, cover.image_url, d, lang]);

  const iconMap: Record<string, ReactNode> = {
    info: <Info className="w-5 h-5 text-primary shrink-0" />,
    landmark: <Landmark className="w-5 h-5 text-primary shrink-0" />,
    usercheck: <UserCheck className="w-5 h-5 text-primary shrink-0" />,
    wallet: <Wallet className="w-5 h-5 text-primary shrink-0" />,
    filetext: <FileText className="w-5 h-5 text-primary shrink-0" />,
    building: <Building className="w-5 h-5 text-primary shrink-0" />,
    shield: <Shield className="w-5 h-5 text-primary shrink-0" />,
    users: <Users className="w-5 h-5 text-primary shrink-0" />,
    globe: <Globe className="w-5 h-5 text-primary shrink-0" />,
    trendingup: <TrendingUp className="w-5 h-5 text-primary shrink-0" />,
    mappin: <MapPin className="w-5 h-5 text-primary shrink-0" />,
    briefcase: <Briefcase className="w-5 h-5 text-primary shrink-0" />,
    barChart: <BarChart3 className="w-5 h-5 text-primary shrink-0" />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={d.title}
        description="Bulgaria digital nomad visa and residence permit 2026. Legal basis, eligibility, income requirements, document checklist, apostille rules, family reunification, 10% tax, Schengen access. Complete guide updated March 2026."
        path="/article/bulgaria-digital-nomad-visa-2026"
        type="article"
        article={{ publishedTime: '2026-03-14', author: 'BulgariaEstate by AI Byte Consult' }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: d.title, url: '/article/bulgaria-digital-nomad-visa-2026' },
        ]}
      />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative py-14 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" />
                {d.back}
              </Link>
            </nav>

            <header className="mb-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <time dateTime="2026-03-14">{d.date}</time>
                </span>
                <span className="inline-flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  {d.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{d.title}</h1>
              <p className="text-lg text-muted-foreground">{d.subtitle}</p>
            </header>

            <figure className="rounded-xl overflow-hidden border bg-background">
              <img
                src={cover.image_url}
                alt={d.title}
                className="w-full h-[220px] md:h-[320px] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption className="px-4 py-3 text-xs text-muted-foreground flex flex-wrap items-center gap-2">
                <span>{d.photoCreditLabel}</span>
                <a
                  href={cover.unsplash_author_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  {cover.unsplash_author_name} <ExternalLink className="w-3 h-3" />
                </a>
                <span>{d.photoCreditOn}</span>
                <a
                  href={cover.unsplash_photo_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Unsplash <ExternalLink className="w-3 h-3" />
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-12 container max-w-4xl">
          {/* TOC */}
          <aside aria-labelledby="article-toc" className="border rounded-xl p-6 mb-8 bg-background">
            <h2 id="article-toc" className="text-xl font-bold mb-4">{d.tocTitle}</h2>
            <nav aria-label={d.tocTitle}>
              <ul className="grid gap-2 text-sm md:grid-cols-2">
                {d.sections.map((section: any, index: number) => (
                  <li key={index}>
                    <a href={`#${section.id}`} className="text-primary hover:underline">
                      {section.h2}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Key Facts */}
          <section className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              {d.keyFactsTitle}
            </h2>
            <ul className="space-y-3 text-sm">
              {d.keyFacts.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="border rounded-xl p-5 mb-8 flex gap-3 items-start">
            <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold mb-1">{d.noteTitle}</h2>
              <p className="text-sm text-muted-foreground">{d.noteText}</p>
            </div>
          </section>

          {/* Article body */}
          <article
            className="space-y-10"
            itemScope
            itemType="https://schema.org/Article"
          >
            <meta itemProp="headline" content={d.title} />
            <meta itemProp="description" content={d.seoDescription || d.subtitle} />
            <meta itemProp="datePublished" content="2026-03-14" />
            <meta itemProp="dateModified" content="2026-03-14" />
            <meta itemProp="inLanguage" content={lang} />
            <meta itemProp="mainEntityOfPage" content={articleUrl} />
            <meta itemProp="image" content={cover.image_url} />

            {d.sections.map((s: any, idx: number) => (
              <section key={idx} id={s.id} className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-bold leading-tight flex items-center gap-2">
                  {iconMap[s.icon] ?? <Info className="w-5 h-5 text-primary shrink-0" />}
                  {s.h2}
                </h2>

                {s.p?.map((p: string, pi: number) => (
                  <p key={pi} className="text-base leading-7 text-foreground/90">{p}</p>
                ))}

                {s.bullets?.length ? (
                  <ul className="space-y-2 text-sm">
                    {s.bullets.map((it: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {s.blocks?.map((b: any, bi: number) => (
                  <section key={bi} className="rounded-xl border p-5 space-y-3 bg-background">
                    <h3 className="text-base font-semibold flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary shrink-0" />
                      {b.h3}
                    </h3>
                    {b.bullets?.length ? (
                      <ul className="space-y-1.5 text-sm">
                        {b.bullets.map((it: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-foreground/85">
                            <span className="text-primary mt-0.5 shrink-0">›</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </section>
            ))}
          </article>

          {/* Sources */}
          <section className="border rounded-xl p-6 mt-10 mb-10" aria-labelledby="sources-title">
            <h2 id="sources-title" className="font-bold mb-3 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-primary" />
              {d.sourcesTitle}
            </h2>
            <ul className="space-y-2">
              {sources.map((source, i) => (
                <li key={i} className="flex items-start gap-2 text-xs">
                  <ExternalLink className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-primary hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="rounded-xl border bg-primary/5 p-6 flex items-start gap-4">
            <Users className="w-6 h-6 text-primary mt-0.5 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold mb-1">
                European Gateway — Immigration & Legal Services in Bulgaria
              </h2>
              <p className="text-xs text-muted-foreground">
                {lang === 'ru'
                  ? 'Полное юридическое сопровождение: подготовка документов, координация апостиля, заверенные переводы, запись в консульство, подача в Дирекцию миграции и поствъездное соответствие требованиям.'
                  : lang === 'bg'
                    ? 'Пълна правна подкрепа: подготовка на документи, координация на апостили, заверени преводи, запис за консулство, подаване в Дирекция Миграция.'
                    : lang === 'de'
                      ? 'Vollständige Rechtsunterstützung: Dokumentenvorbereitung, Apostille-Koordination, beglaubigte Übersetzungen, Konsulatsterminvermittlung, Einreichung bei der Migrationsbehörde.'
                      : lang === 'it'
                        ? 'Supporto legale completo: preparazione documenti, coordinamento apostille, traduzioni certificate, assistenza appuntamento consolare, presentazione alla Direzione Migrazione.'
                        : 'Full legal support: document preparation, apostille coordination, certified translations, consulate appointment assistance, Migration Directorate filing and post-arrival compliance.'}
              </p>
              <a
                href="https://wa.me/491628184658"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                {lang === 'ru'
                  ? 'Связаться с нами'
                  : lang === 'bg'
                    ? 'Свържете се с нас'
                    : lang === 'de'
                      ? 'Kontakt aufnehmen'
                      : lang === 'it'
                        ? 'Contattaci'
                        : 'Contact Us'}
              </a>
              <p className="text-xs text-muted-foreground mt-1">estate@aibyteconsult.com</p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BulgariaDigitalNomadVisaArticle;
