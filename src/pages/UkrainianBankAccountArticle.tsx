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
  Building,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Euro,
  FileText,
  Users,
  Landmark,
  TrendingUp,
  Shield,
  BarChart3,
  Info,
} from 'lucide-react';

const UkrainianBankAccountArticle = () => {
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
      'https://ipfs.io/ipfs/bafybeia5yab2t4k2sv2sbb5jqnbz2hgeghq66jndnsw5c3ooia43ucancu',
    unsplash_author_name: 'Vlad Hilitanu',
    unsplash_author_url: 'https://unsplash.com/@vladhilitanu',
    unsplash_photo_url: 'https://unsplash.com/photos/a-car-is-parked-in-front-of-a-bank-ngjscU-zck0',
  };

  const sources = [
    {
      label: 'Bulgarian Commercial Register — OOD/EOOD Registration Requirements 2025',
      url: 'https://portal.registryagency.bg/',
    },
    {
      label: 'Bank DSK — Business Account Requirements for Foreign Nationals 2025',
      url: 'https://dskbank.bg/',
    },
    {
      label: 'UniCredit Bulbank — Account Opening for Non-Residents',
      url: 'https://www.unicreditbulbank.bg/',
    },
    {
      label: 'Postbank Bulgaria — Business Services',
      url: 'https://www.postbank.bg/',
    },
    {
      label: 'NRA Bulgaria (НАП) — Company Registration Tax Requirements',
      url: 'https://nra.bg/',
    },
    {
      label: 'EU AML Directive 6 (AMLD6) — Implementation in Bulgaria 2021–2025',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32018L1673',
    },
    {
      label: 'Bulgarian National Bank — AML Compliance Requirements 2025',
      url: 'https://www.bnb.bg/',
    },
  ];

  const t: Record<string, any> = {
    en: {
      back: 'Back to Home',
      date: 'March 7, 2026',
      readTime: 'Reading time: ~15 minutes',
      title:
        'How Ukrainian Citizens Can Open a Bank Account to Register a Company in Bulgaria in 2026',
      subtitle:
        'A complete practical guide: nabiratelna smetka, bank requirements, timelines, costs, and strategies for successful account opening — updated Q1 2026.',
      seoTitle:
        'Ukrainian Citizens Opening a Company Bank Account in Bulgaria (2026 Guide)',
      seoDescription:
        'Detailed 2026 guide on how Ukrainian citizens can open a bank account and nabiratelna smetka to register an EOOD or OOD company in Bulgaria: bank requirements, costs, timelines, and practical strategies.',
      keyFactsTitle: 'Key Facts — Q1 2026',
      noteTitle: 'Disclaimer',
      noteText:
        'Bank policies change frequently. The information in this article reflects the practice of Bulgarian banks as of Q1 2026. Always verify current requirements directly with the bank or through a licensed Bulgarian legal adviser before initiating the process.',
      sourcesTitle: 'Sources',
      photoCreditLabel: 'Article photo:',
      photoCreditOn: 'on',
      tocTitle: 'In this guide',
      keyFacts: [
        'To register an OOD or EOOD in Bulgaria, a nabiratelna smetka (capital accumulation account) is mandatory — minimum share capital: BGN 2 (≈€1) for EOOD, BGN 2+ for OOD.',
        'As of 2026, most Bulgarian banks require a demonstrable economic link to Bulgaria from Ukrainian nationals: property ownership, existing business, or employment.',
        'OBB (United Bulgarian Bank) does NOT open nabiratelna accounts for Ukrainian citizens for company registration purposes.',
        'Bank DSK: possible but strict — fee €400 (non-refundable), total timeline ~50 days.',
        'Postbank: most accessible option — total fee €100, timeline 10–40 days.',
        'UniCredit Bulbank: requires a notarized declaration from a Bulgarian citizen or permanent resident as contact person.',
        'The root cause of tighter requirements: EU AML Directive 6 (AMLD6) and the Bulgarian AML Act, combined with elevated risk classification for Ukrainian nationals post-2022.',
        'Professional legal support from a Bulgarian lawyer or registered agent significantly increases success rates and reduces timeline.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'introduction-2026',
          h2: 'Introduction: why this matters in 2026',
          p: [
            'Bulgaria remains one of the most accessible EU jurisdictions for company registration. The EOOD (single-member LLC) and OOD (multi-member LLC) are the most popular legal forms for foreign entrepreneurs — featuring a 10% corporate tax rate (the lowest in the EU), a straightforward registration process, and full access to the EU single market.',
            'For Ukrainian nationals specifically, Bulgaria holds additional appeal: geographic proximity, cultural familiarity, a large Ukrainian diaspora established since 2022, and the practical advantage of euro adoption from January 2026 eliminating currency risk.',
            'However, one step in the company registration process has become significantly more difficult since 2022: opening a nabiratelna smetka — the mandatory capital accumulation bank account required to register an OOD or EOOD. This article provides a complete, practical guide to navigating this process in 2026.',
          ],
        },
        {
          icon: 'file',
          id: 'nabiratelna-smetka-bulgaria',
          h2: 'What is a nabiratelna smetka and why is it mandatory',
          p: [
            'A nabiratelna smetka (набирателна сметка — literally "accumulation account") is a special-purpose temporary bank account opened in the name of the company being registered. Its sole purpose is to receive and hold the initial share capital contribution until the company is formally registered with the Bulgarian Commercial Register (Търговски регистър).',
            'Under the Bulgarian Commercial Act (Търговски закон), the registration of an OOD or EOOD requires a bank certificate confirming that the minimum share capital has been deposited. Without this certificate, the Commercial Register will not process the registration application.',
            'The minimum share capital requirements: EOOD (ЕООД) — BGN 2 (approximately €1 at the fixed BGN/EUR rate of 1.95583). OOD (ООД) — BGN 2 total, divided between shareholders. While the legal minimum is symbolic, many banks require a minimum deposit of BGN 100–500 (€50–255) to open the nabiratelna account.',
            "Once the company is registered, the nabiratelna smetka is closed and the capital is transferred to the company's regular operating account. The entire lifecycle of the nabiratelna smetka exists solely to satisfy the registration requirement — it is not an operational account.",
          ],
        },
        {
          icon: 'shield',
          id: 'why-bank-opening-is-harder',
          h2: 'Why bank account opening became harder for foreign nationals',
          p: [
            'Prior to 2020, opening a nabiratelna smetka for a Bulgarian OOD or EOOD was a routine, low-friction process for most foreign nationals. The post-2020 tightening has multiple causes, each building on the previous.',
            "The EU's Sixth Anti-Money Laundering Directive (AMLD6), fully implemented across EU member states including Bulgaria by 2022, significantly expanded the definition of predicate offences, increased individual liability for money laundering, and imposed stricter Customer Due Diligence (CDD) requirements on financial institutions. Bulgarian banks, responding to regulatory pressure from the Bulgarian National Bank (BNB) and the Financial Intelligence Directorate (ФИД), implemented substantially more rigorous KYC processes.",
            `Following Russia's full-scale invasion of Ukraine in February 2022, Bulgarian banks — like all EU financial institutions — applied heightened scrutiny to customers from conflict-adjacent geographies. Ukrainian nationals, despite being victims of the conflict rather than perpetrators, were categorised as "elevated risk" in many banks' internal risk models. This is a result of compliance automation, not deliberate policy.`,
            'Additionally, an increase in fraud cases involving Bulgarian shell companies — registered by non-residents with no genuine business activity — prompted banks to require demonstrable economic substance before facilitating registration-related accounts.',
          ],
        },
        {
          icon: 'building',
          id: 'bank-requirements-foreign-nationals',
          h2: 'Core bank requirements for foreign nationals in 2026',
          p: [
            'While each bank sets its own requirements, the following criteria are consistently applied across Bulgarian banks when evaluating account opening requests from foreign nationals — and Ukrainian citizens specifically.',
          ],
          blocks: [
            {
              h3: 'Economic link to Bulgaria',
              bullets: [
                'Ownership of real estate in Bulgaria (residential or commercial) — the strongest qualifying factor',
                'Existing registered company in Bulgaria where the applicant is a founder or manager',
                'Employment contract with a Bulgarian company',
                "Long-term lease agreement (1–2 years minimum, notarized, with landlord's permission for address use) — accepted by some banks but often insufficient on its own",
              ],
            },
            {
              h3: 'Identity documentation',
              bullets: [
                'Valid international passport',
                'Ukrainian biometric passport (preferred) or ID card',
                'Bulgarian residence permit (ВНЖ/ДВЖ) if held — significantly simplifies the process',
                'Proof of address in Bulgaria (utility bill, official correspondence) or notarized address declaration',
              ],
            },
            {
              h3: 'Business documentation',
              bullets: [
                'Completed bank application form',
                'Description of intended business activity',
                'Source of funds declaration',
                'In some cases: business plan or projected financial activity',
                'Draft company articles of association (устав)',
              ],
            },
          ],
        },
        {
          icon: 'bank',
          id: 'banks-analysis-bulgaria-2026',
          h2: 'Bank-by-bank analysis: requirements, costs, timelines',
          p: [
            'The following analysis is based on the current practice of the four main Bulgarian banks handling nabiratelna account requests from Ukrainian nationals as of Q1 2026.',
          ],
          blocks: [
            {
              h3: '✅ Postbank (Пощенска банка) — Most accessible option',
              bullets: [
                'STAGE 1 — Client registration: ~10 days | Fee: €50 (non-refundable)',
                'STAGE 2 — Nabiratelna smetka opening: up to 30 days | Fee: €50 (covers opening + maintenance + closure)',
                'TOTAL: €100 | Timeline: 10–40 days',
                'Includes: account opening, maintenance during registration period, and account closure after company registration',
                'Requirements: standard KYC documents, economic link to Bulgaria required but verification is more proportionate',
                'RECOMMENDATION: Best starting point for most Ukrainian entrepreneurs. Lower barrier, reasonable timeline.',
              ],
            },
            {
              h3: '⚠️ UniCredit Bulbank — Possible, with specific requirements',
              bullets: [
                'STAGE 1 — Client registration: ~10 business days | STAGE 2 — Account opening: additional review',
                'Total fee: €100 (compliance review)',
                'SPECIFIC REQUIREMENT: Notarized declaration from a Bulgarian citizen OR a person with permanent/long-term Bulgarian residence (ПМЖ/ДВЖ) serving as contact person for the bank',
                'Documents: passport + ID card or Bulgarian residence permit (if held)',
                'The contact person requirement adds complexity — requires an established relationship with a Bulgarian national',
                'RECOMMENDATION: Viable if you have a trusted Bulgarian contact willing to serve this role. The notarized declaration adds cost (~€50–100 notary fee).',
              ],
            },
            {
              h3: '⚠️ Bank DSK — Possible but most demanding',
              bullets: [
                'STAGE 1 — Client KYC review: ~10 business days',
                'STAGE 2 — Account opening review: 30–40 additional days',
                'TOTAL timeline: ~50 days | Fee: €400 (non-refundable)',
                'STRONG PREFERENCE for real estate ownership in Bulgaria (residential or commercial)',
                'Lease agreements accepted in principle but often insufficient in practice — bank typically requires property ownership',
                'If lease used: minimum 1–2 year term, notarized, with landlord permission for address use',
                'RECOMMENDATION: Justified if you already own Bulgarian property or are purchasing it. The €400 non-refundable fee makes this a high-cost option for others.',
              ],
            },
            {
              h3: '❌ OBB (ОББ / United Bulgarian Bank) — Not available',
              bullets: [
                'OBB does NOT open nabiratelna accounts for Ukrainian nationals for company registration purposes',
                'This is bank policy as of 2026 — not subject to negotiation or exceptions',
                'Do not invest time pursuing this option',
              ],
            },
          ],
        },
        {
          icon: 'chart',
          id: 'comparison-costs-timelines',
          h2: 'Comparative summary: costs and timelines',
          blocks: [
            {
              h3: 'Side-by-side comparison',
              bullets: [
                'Postbank: Fee €100 | Timeline 10–40 days | Accessibility ★★★★★ | Best for: most applicants',
                'UniCredit Bulbank: Fee €100 | Timeline ~10–20 days | Accessibility ★★★☆☆ | Best for: those with Bulgarian contact person',
                'Bank DSK: Fee €400 | Timeline ~50 days | Accessibility ★★☆☆☆ | Best for: property owners in Bulgaria',
                'OBB: Not available for Ukrainian nationals | ✗',
              ],
            },
          ],
        },
        {
          icon: 'strategy',
          id: 'practical-strategies-2026',
          h2: 'Practical strategies for 2026',
          p: [
            'Based on the current landscape, here are the strategies that maximize the probability of successful nabiratelna account opening for Ukrainian nationals.',
          ],
          blocks: [
            {
              h3: 'Strategy 1: Use Postbank as the primary route',
              bullets: [
                'Postbank offers the lowest barrier and most proportionate review process',
                'Prepare a complete document package before approaching the bank — incomplete applications are rejected and fees are non-refundable',
                'Engage a Bulgarian lawyer or registered agent to present the application — banks respond more positively to professionally prepared submissions',
                'Total cost with legal support: €100 (bank) + €200–500 (legal) = €300–600 total',
              ],
            },
            {
              h3: 'Strategy 2: Establish Bulgarian residency first',
              bullets: [
                'Ukrainian nationals who obtained temporary protection (закрила) in Bulgaria typically have access to address registration and simplified bank onboarding',
                'Applying for a Bulgarian residence permit (ВНЖ) on grounds of property ownership or business activity unlocks significantly more bank options',
                'Timeline: ВНЖ processing ~1–3 months, but dramatically simplifies all subsequent financial operations',
              ],
            },
            {
              h3: 'Strategy 3: Purchase Bulgarian property',
              bullets: [
                "Real estate ownership is the single most powerful qualifying factor for Bank DSK and significantly helps at Postbank",
                "For investors already considering Bulgarian property, synchronising the property purchase with company registration is efficient: the property ownership satisfies bank requirements for the nabiratelna account",
                "Entry-level apartments in Burgas, Plovdiv, or secondary Sofia districts: €45,000–85,000 — qualifying for Bank DSK's economic link requirement",
              ],
            },
            {
              h3: 'Strategy 4: Use a Bulgarian registered agent',
              bullets: [
                'A Bulgarian lawyer or company formation agent with existing bank relationships can substantially improve outcomes',
                'Agents with established KYC track records at specific banks reduce review times and rejection rates',
                'Cost: €300–800 for full company registration including nabiratelna account support',
                'This is not an optional luxury — for Ukrainian nationals without Bulgarian connections, it is close to mandatory in 2026',
              ],
            },
          ],
        },
        {
          icon: 'process',
          id: 'step-by-step-company-registration',
          h2: 'Step-by-step process: from decision to registered company',
          blocks: [
            {
              h3: 'Complete timeline',
              bullets: [
                'STEP 1 — Prepare documents (3–7 days): Gather passport, proof of Bulgarian address or economic link, source of funds statement, intended business description',
                'STEP 2 — Engage Bulgarian lawyer / registered agent (1 day): Brief them on your situation; they will identify the optimal bank and prepare the application',
                'STEP 3 — Submit nabiratelna account application (Day 1): Submit to chosen bank with full document package',
                'STEP 4 — Bank KYC review (10–50 days depending on bank): Respond promptly to any bank requests for additional information',
                'STEP 5 — Deposit share capital (Day of account opening): Transfer minimum BGN 2 (or bank minimum, typically BGN 100–500) to the nabiratelna account',
                'STEP 6 — Obtain bank certificate (1–2 days): Bank issues certificate confirming capital deposit — this is the document required by the Commercial Register',
                'STEP 7 — Submit company registration application (same day or next): File with Bulgarian Commercial Register via lawyer',
                'STEP 8 — Company registered (3–7 business days after filing): Receive UIC (ЕИК) — company registration number',
                'STEP 9 — Close nabiratelna, open operating account (1–5 days): Capital transferred to company operating account; nabiratelna closed',
                'TOTAL TIMELINE: 30–65 days (Postbank route) | 55–75 days (Bank DSK route)',
              ],
            },
          ],
        },
        {
          icon: 'risk',
          id: 'risks-and-rejections',
          h2: 'Risks, rejections, and how to handle them',
          p: [
            'Rejection is a real possibility, and since most bank fees are non-refundable, a failed application has a direct financial cost. Understanding the main rejection reasons helps structure a stronger application.',
          ],
          blocks: [
            {
              h3: 'Main rejection causes and mitigations',
              bullets: [
                'Insufficient economic link: most common reason — mitigate by providing property ownership documents, employment contract, or existing Bulgarian business registration',
                'Incomplete documentation: banks reject applications missing any required document — use a checklist and have a lawyer verify completeness before submission',
                'Unclear source of funds: banks require clarity on where the share capital and business funding originates — provide bank statements and a written explanation',
                'High-risk business category: certain business types (crypto, fintech, international trading) trigger additional scrutiny — consider simplifying the stated business activity for initial registration',
                'If rejected: request written reasons, address them, and reapply to a different bank — Postbank and UniCredit serve different client profiles',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'our-assessment',
          h2: 'Our assessment',
          p: [
            'Opening a nabiratelna smetka as a Ukrainian national in Bulgaria in 2026 is more complex than it was three years ago — but it remains achievable with the right preparation and the right professional support.',
            'The Postbank route offers the most accessible path for most applicants. UniCredit Bulbank is a viable alternative for those with Bulgarian connections. Bank DSK is optimal for property owners. OBB is not an option.',
            "The broader context is positive: Bulgaria's company registration framework remains one of the most investor-friendly in the EU — 10% corporate tax, 9% effective income tax on dividends, eurozone membership from January 2026, and full EU market access. The nabiratelna account requirement is a process challenge, not a structural barrier.",
            'At European Gateway, we provide end-to-end company registration support for Ukrainian and international clients in Bulgaria — from nabiratelna account preparation and bank liaison through to Commercial Register filing, tax registration, and operational account setup.',
          ],
        },
      ],
    },

    ru: {
      back: 'На главную',
      date: '7 марта 2026',
      readTime: 'Время чтения: ~15 минут',
      title:
        'Как гражданам Украины открыть банковский счёт для регистрации компании в Болгарии в 2026 году',
      subtitle:
        'Полное практическое руководство: набирательная сметка, требования банков, сроки, стоимость и стратегии успешного открытия счёта — обновлено I квартал 2026 г.',
      seoTitle:
        'Как гражданам Украины открыть счёт для регистрации компании в Болгарии в 2026 году',
      seoDescription:
        'Подробное руководство 2026 года о том, как гражданам Украины открыть банковский счёт и набирательную сметку для регистрации ЕООД или ООД в Болгарии: требования банков, сроки, стоимость и практические стратегии.',
      keyFactsTitle: 'Ключевые данные — I квартал 2026',
      noteTitle: 'Дисклеймер',
      noteText:
        'Политика банков меняется. Информация в статье отражает практику болгарских банков по состоянию на I квартал 2026 года. Всегда уточняйте актуальные требования непосредственно в банке или через лицензированного болгарского юриста.',
      sourcesTitle: 'Источники',
      photoCreditLabel: 'Фото к статье:',
      photoCreditOn: 'на',
      tocTitle: 'Содержание',
      keyFacts: [
        'Для регистрации ООД или ЕООД в Болгарии обязательна набирательная сметка — минимальный уставной капитал: 2 левa (≈€1) для ЕООД.',
        'С 2026 года большинство болгарских банков требуют от граждан Украины реальной экономической связи с Болгарией: собственность, действующий бизнес или трудоустройство.',
        'ОББ (Обединена Българска Банка) НЕ открывает набирательные счета гражданам Украины для регистрации компаний.',
        'Банк ДСК: возможно, но строгие условия — такса €400 (невозвратная), общий срок ~50 дней.',
        'Пощенска банка: наиболее доступный вариант — итоговая стоимость €100, срок 10–40 дней.',
        'UniCredit Bulbank: требует нотариально заверенную декларацию от гражданина Болгарии или обладателя ПМЖ/ДВЖ в качестве контактного лица.',
        'Причина ужесточения требований: Директива ЕС об отмывании денег AMLD6 и болгарский Закон о ПОД, в сочетании с повышенной категорией риска для украинских граждан после 2022 года.',
        'Профессиональная юридическая поддержка болгарского юриста или зарегистрированного агента существенно повышает шансы на успех.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'vvedenie-2026',
          h2: 'Введение: почему это актуально в 2026 году',
          p: [
            'Болгария остаётся одной из наиболее доступных юрисдикций ЕС для регистрации компаний. ЕООД (аналог российского ООО с единственным участником) и ООД (аналог ООО с несколькими участниками) — самые популярные правовые формы для иностранных предпринимателей. Привлекательность определяется ставкой корпоративного налога 10% (самой низкой в ЕС), простотой регистрационных процедур и полным доступом к единому рынку ЕС.',
            'Для граждан Украины в частности Болгария обладает дополнительными преимуществами: географическая близость, культурное родство, крупная украинская диаспора, сформировавшаяся с 2022 года, и практическое преимущество вступления Болгарии в еврозону с января 2026 года, что исключает валютный риск.',
            'Тем не менее один шаг в процессе регистрации компании существенно усложнился с 2022 года: открытие набирательной сметки — обязательного временного накопительного банковского счёта, необходимого для регистрации ООД или ЕООД. Данная статья предоставляет полное практическое руководство по прохождению этого процесса в 2026 году.',
          ],
        },
        {
          icon: 'file',
          id: 'nabiratelnaya-smetka-bolgariya',
          h2: 'Что такое набирательная сметка и зачем она нужна',
          p: [
            'Набирательная сметка (набирателна сметка) — это специальный временный банковский счёт, открываемый на имя регистрируемой компании. Его единственная функция — принять и удерживать взнос в уставный капитал до момента формальной регистрации компании в Торговом регистре Болгарии (Търговски регистър).',
            'В соответствии с болгарским Торговым законом (Търговски закон), регистрация ООД или ЕООД требует предоставления банковской справки, подтверждающей внесение минимального уставного капитала. Без этой справки Торговый регистр не примет заявку на регистрацию.',
            'Минимальные требования к уставному капиталу: ЕООД — 2 лева (≈€1 по фиксированному курсу 1,95583 BGN/EUR). ООД — от 2 лева, распределённых между участниками. Несмотря на символический законодательный минимум, большинство банков требуют реального депозита от 100 до 500 лева (€50–255) для открытия набирательного счёта.',
            'После регистрации компании набирательная сметка закрывается, а капитал переводится на расчётный операционный счёт компании. Весь жизненный цикл набирательной сметки существует исключительно для удовлетворения регистрационного требования — это не операционный счёт.',
          ],
        },
        {
          icon: 'shield',
          id: 'pochemu-scheta-stali-slozhnee',
          h2: 'Почему открытие счетов для иностранцев стало сложнее',
          p: [
            'До 2020 года открытие набирательной сметки для болгарского ООД или ЕООД было стандартной, малозатратной процедурой для большинства иностранных граждан. Последующее ужесточение обусловлено несколькими факторами, усиливающими друг друга.',
            'Шестая директива ЕС о противодействии отмыванию денег (AMLD6), полностью имплементированная во всех государствах-членах ЕС, включая Болгарию, к 2022 году, существенно расширила перечень предикатных преступлений, ужесточила индивидуальную ответственность за отмывание денег и установила более строгие требования Due Diligence (CDD) в отношении клиентов. Болгарские банки, реагируя на регуляторное давление со стороны Болгарского народного банка (БНБ) и Дирекции финансовой разведки (ФИД), внедрили существенно более жёсткие процедуры KYC.',
            'После начала полномасштабного вторжения России в Украину в феврале 2022 года болгарские банки — как и все финансовые институты ЕС — применили повышенный контроль к клиентам из географий, связанных с конфликтом. Граждане Украины, несмотря на то что они являются жертвами конфликта, а не его участниками, были классифицированы как "повышенный риск" во внутренних риск-моделях многих банков. Это результат автоматизации комплаенса, а не намеренной политики.',
            'Дополнительный фактор: рост числа мошеннических схем с использованием болгарских компаний-пустышек, зарегистрированных нерезидентами без реальной деловой активности, побудил банки требовать доказательства реальной экономической деятельности перед открытием счетов, связанных с регистрацией.',
          ],
        },
        {
          icon: 'building',
          id: 'trebovaniya-bankov-k-inostrantsam',
          h2: 'Основные требования банков к иностранным гражданам в 2026 году',
          p: [
            'При всём разнообразии политик отдельных банков, следующие критерии применяются единообразно при рассмотрении заявок от иностранных граждан — и от граждан Украины в частности.',
          ],
          blocks: [
            {
              h3: 'Экономическая связь с Болгарией',
              bullets: [
                'Наличие недвижимости в собственности в Болгарии (жилой или коммерческой) — наиболее весомый квалифицирующий фактор',
                'Действующая зарегистрированная компания в Болгарии, где заявитель является учредителем или управителем',
                'Трудовой договор с болгарской компанией',
                'Долгосрочный договор аренды (минимум 1–2 года, нотариально заверенный, с разрешением собственника на использование адреса) — принимается рядом банков, но нередко недостаточен сам по себе',
              ],
            },
            {
              h3: 'Документы, удостоверяющие личность',
              bullets: [
                'Действующий загранпаспорт',
                'Биометрический паспорт Украины (предпочтительно) или ID-карта',
                'Болгарское разрешение на пребывание (ВНЖ/ДВЖ) при наличии — существенно упрощает процесс',
                'Подтверждение адреса в Болгарии (счёт за коммунальные услуги, официальная корреспонденция) или нотариально заверенная декларация об адресе',
              ],
            },
            {
              h3: 'Деловые документы',
              bullets: [
                'Заполненная банковская анкета',
                'Описание планируемой деловой деятельности',
                'Декларация о происхождении средств',
                'В ряде случаев: бизнес-план или прогноз финансовой активности',
                'Проект устава компании',
              ],
            },
          ],
        },
        {
          icon: 'bank',
          id: 'analiz-bankov-bolgariya-2026',
          h2: 'Анализ банков: требования, стоимость, сроки',
          p: [
            'Следующий анализ основан на актуальной практике четырёх основных болгарских банков, работающих с заявками на набирательные счета от граждан Украины по состоянию на I квартал 2026 года.',
          ],
          blocks: [
            {
              h3: '✅ Пощенска банка (Postbank) — Наиболее доступный вариант',
              bullets: [
                'ЭТАП 1 — Регистрация клиента: ~10 дней | Такса: €50 (невозвратная)',
                'ЭТАП 2 — Открытие набирательной сметки: до 30 дней | Такса: €50 (включает открытие + обслуживание + закрытие)',
                'ИТОГО: €100 | Срок: 10–40 дней',
                'Включает: открытие счёта, обслуживание в период регистрации компании и закрытие счёта после регистрации',
                'Требования: стандартные KYC-документы, экономическая связь с Болгарией требуется, но проверка более соразмерна',
                'РЕКОМЕНДАЦИЯ: Лучший отправной пункт для большинства украинских предпринимателей. Более низкий порог входа, разумные сроки.',
              ],
            },
            {
              h3: '⚠️ UniCredit Bulbank — Возможно при выполнении специфических требований',
              bullets: [
                'ЭТАП 1 — Регистрация клиента: ~10 рабочих дней | ЭТАП 2 — Открытие счёта: дополнительная проверка',
                'Итоговая такса: €100 (комплаенс-проверка)',
                'СПЕЦИФИЧЕСКОЕ ТРЕБОВАНИЕ: Нотариально заверенная декларация от гражданина Болгарии ИЛИ лица с постоянным/долгосрочным видом на жительство в Болгарии (ПМЖ/ДВЖ) в качестве контактного лица для банка',
                'Документы: паспорт + ID-карта или болгарское разрешение на пребывание (при наличии)',
                'Требование о контактном лице усложняет процесс — необходимо наличие доверенного болгарского контакта',
                'РЕКОМЕНДАЦИЯ: Реализуемо при наличии надёжного болгарского контакта, готового выступить в этой роли. Нотариальная декларация добавляет ~€50–100 к расходам.',
              ],
            },
            {
              h3: '⚠️ Банк ДСК — Возможно, но наиболее требовательный',
              bullets: [
                'ЭТАП 1 — KYC-проверка клиента: ~10 рабочих дней',
                'ЭТАП 2 — Проверка для открытия счёта: ещё 30–40 дней',
                'ИТОГОВЫЙ СРОК: ~50 дней | Такса: €400 (невозвратная)',
                'ТРЕБОВАНИЕ: Устойчивая предпочтительность к наличию недвижимости в собственности в Болгарии (жилой или коммерческой)',
                'Договор аренды принципиально принимается, но на практике банк, как правило, требует именно права собственности',
                'При использовании аренды: минимальный срок 1–2 года, нотариальное заверение, разрешение собственника на использование адреса',
                'РЕКОМЕНДАЦИЯ: Оправдан при наличии болгарской недвижимости или при её приобретении. Невозвратная такса €400 делает этот вариант дорогостоящим для остальных.',
              ],
            },
            {
              h3: '❌ ОББ (Обединена Българска Банка) — Недоступно',
              bullets: [
                'ОББ НЕ открывает набирательные счета гражданам Украины для регистрации компаний',
                'Это банковская политика по состоянию на 2026 год — переговоры и исключения не предусмотрены',
                'Не тратьте время на этот вариант',
              ],
            },
          ],
        },
        {
          icon: 'chart',
          id: 'sravnenie-stoimosti-i-srokov',
          h2: 'Сравнительная таблица: стоимость и сроки',
          blocks: [
            {
              h3: 'Сравнение по ключевым параметрам',
              bullets: [
                'Пощенска банка: Такса €100 | Срок 10–40 дней | Доступность ★★★★★ | Для кого: большинство заявителей',
                'UniCredit Bulbank: Такса €100 | Срок ~10–20 дней | Доступность ★★★☆☆ | Для кого: наличие болгарского контактного лица',
                'Банк ДСК: Такса €400 | Срок ~50 дней | Доступность ★★☆☆☆ | Для кого: владельцы недвижимости в Болгарии',
                'ОББ: Недоступно для граждан Украины | ✗',
              ],
            },
          ],
        },
        {
          icon: 'strategy',
          id: 'prakticheskie-strategii-2026',
          h2: 'Практические рекомендации для предпринимателей в 2026 году',
          p: [
            'На основе текущей ситуации — стратегии, максимизирующие вероятность успешного открытия набирательной сметки для граждан Украины.',
          ],
          blocks: [
            {
              h3: 'Стратегия 1: Начать с Пощенска банка',
              bullets: [
                'Предлагает наиболее низкий порог входа и наиболее соразмерную процедуру проверки',
                'Подготовьте полный пакет документов до обращения в банк — неполные заявки отклоняются, таксы невозвратны',
                'Привлеките болгарского юриста или зарегистрированного агента для подачи заявки — банки реагируют позитивнее на профессионально подготовленные обращения',
                'Итоговые расходы с юридической поддержкой: €100 (банк) + €200–500 (юридические услуги) = €300–600 всего',
              ],
            },
            {
              h3: 'Стратегия 2: Предварительно получить болгарский ВНЖ',
              bullets: [
                'Граждане Украины, получившие временную защиту (закрила) в Болгарии, как правило, имеют доступ к регистрации адреса и упрощённому банковскому обслуживанию',
                'Оформление болгарского ВНЖ на основании владения недвижимостью или деловой активности открывает значительно больше банковских опций',
                'Срок: оформление ВНЖ ~1–3 месяца, но это кардинально упрощает все последующие финансовые операции',
              ],
            },
            {
              h3: 'Стратегия 3: Приобрести недвижимость в Болгарии',
              bullets: [
                'Наличие недвижимости в собственности — наиболее весомый квалифицирующий фактор для Банк ДСК и существенно усиливает позиции в Пощенска банка',
                'Для инвесторов, уже рассматривающих болгарскую недвижимость, синхронизация покупки с регистрацией компании эффективна: собственность удовлетворяет требованиям банка к набирательному счёту',
                'Объекты начального уровня в Бургасе, Пловдиве или периферийных районах Софии: €45 000–85 000 — достаточно для квалификации по требованию Банк ДСК',
              ],
            },
            {
              h3: 'Стратегия 4: Работать через болгарского зарегистрированного агента',
              bullets: [
                'Болгарский юрист или агент по регистрации компаний с налаженными банковскими отношениями существенно улучшает результаты',
                'Агенты с устоявшейся репутацией в конкретных банках сокращают сроки проверки и процент отказов',
                'Стоимость: €300–800 за полный пакет регистрации компании, включая поддержку по набирательному счёту',
                'В 2026 году для граждан Украины без болгарских связей это практически обязательный шаг',
              ],
            },
          ],
        },
        {
          icon: 'process',
          id: 'poshagovyy-protsess-registratsii',
          h2: 'Пошаговый процесс: от решения до зарегистрированной компании',
          blocks: [
            {
              h3: 'Полный временной план',
              bullets: [
                'ШАГ 1 — Подготовка документов (3–7 дней): паспорт, подтверждение болгарского адреса или экономической связи, декларация о происхождении средств, описание деятельности',
                'ШАГ 2 — Привлечение болгарского юриста / агента (1 день): брифинг по вашей ситуации; определение оптимального банка и подготовка заявки',
                'ШАГ 3 — Подача заявки на набирательную сметку (День 1): подача в выбранный банк с полным пакетом документов',
                'ШАГ 4 — KYC-проверка банка (10–50 дней в зависимости от банка): незамедлительно реагируйте на запросы банка о дополнительных документах',
                'ШАГ 5 — Внесение уставного капитала (день открытия счёта): перевод минимум 2 лева (или банковского минимума, как правило 100–500 лева) на набирательный счёт',
                'ШАГ 6 — Получение банковской справки (1–2 дня): банк выдаёт справку о внесении капитала — документ, необходимый Торговому регистру',
                'ШАГ 7 — Подача заявки на регистрацию компании (в тот же или следующий день): подача через юриста в Торговый регистр Болгарии',
                'ШАГ 8 — Регистрация компании (3–7 рабочих дней после подачи): получение ЕИК — регистрационного номера компании',
                'ШАГ 9 — Закрытие набирательной, открытие операционного счёта (1–5 дней): капитал переводится на расчётный счёт компании; набирательная сметка закрывается',
                'ОБЩИЙ СРОК: 30–65 дней (маршрут через Пощенска банка) | 55–75 дней (маршрут через Банк ДСК)',
              ],
            },
          ],
        },
        {
          icon: 'risk',
          id: 'riski-i-otkazy',
          h2: 'Риски, отказы и как с ними работать',
          p: [
            'Отказ — реальная возможность, и поскольку большинство банковских такс невозвратны, неудачная заявка влечёт прямые финансовые потери. Понимание основных причин отказа помогает выстроить более сильную заявку.',
          ],
          blocks: [
            {
              h3: 'Основные причины отказов и меры противодействия',
              bullets: [
                'Недостаточная экономическая связь с Болгарией: наиболее частая причина — устраните, предоставив документы о собственности, трудовой договор или регистрацию действующей болгарской компании',
                'Неполный пакет документов: банки отклоняют заявки при отсутствии любого требуемого документа — используйте чек-лист и проверьте полноту пакета с юристом до подачи',
                'Неясное происхождение средств: банки требуют чёткого объяснения источника уставного капитала и финансирования бизнеса — предоставьте выписки и письменное пояснение',
                'Высокорисковая категория деятельности: ряд видов бизнеса (крипто, финтех, международная торговля) вызывает дополнительный контроль — рассмотрите упрощение формулировки вида деятельности на этапе первичной регистрации',
                'При отказе: запросите письменное обоснование, устраните замечания и подайте заявку в другой банк — Пощенска банка и UniCredit работают с разными профилями клиентов',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'nasha-otsenka',
          h2: 'Наша оценка',
          p: [
            'Открытие набирательной сметки для гражданина Украины в Болгарии в 2026 году сложнее, чем три года назад — но это осуществимо при правильной подготовке и профессиональной поддержке.',
            'Маршрут через Пощенска банку предлагает наиболее доступный путь для большинства заявителей. UniCredit Bulbank — рабочая альтернатива при наличии болгарских связей. Банк ДСК — оптимален для владельцев недвижимости. ОББ — не вариант.',
            'Более широкий контекст позитивен: болгарская система регистрации компаний остаётся одной из наиболее дружественных для инвесторов в ЕС — 10% налог на прибыль, 9% эффективная ставка на дивиденды, членство в еврозоне с января 2026 года и полный доступ к рынку ЕС. Требование набирательной сметки — процессуальная сложность, а не структурный барьер.',
            'В European Gateway мы обеспечиваем полное сопровождение регистрации компаний для украинских и международных клиентов в Болгарии — от подготовки к открытию набирательного счёта и взаимодействия с банком до подачи в Торговый регистр, налоговой регистрации и открытия операционного счёта.',
          ],
        },
      ],
    },

    bg: {
      back: 'Към началото',
      date: '7 март 2026',
      readTime: 'Време за четене: ~15 минути',
      title:
        'Как граждани на Украйна могат да открият банкова сметка за регистрация на фирма в България през 2026 г.',
      subtitle:
        'Пълно практическо ръководство: набирателна сметка, изисквания на банките, срокове, разходи и стратегии — актуализирано I тримесечие 2026 г.',
      seoTitle:
        'Как украински граждани могат да открият сметка за регистрация на фирма в България през 2026 г.',
      seoDescription:
        'Подробно ръководство за 2026 г. как граждани на Украйна могат да открият банкова сметка и набирателна сметка за регистрация на ЕООД или ООД в България: банкови изисквания, срокове, разходи и практически стратегии.',
      keyFactsTitle: 'Ключови данни — I тримесечие 2026',
      noteTitle: 'Отказ от отговорност',
      noteText:
        'Политиките на банките се променят. Информацията отразява практиката на българските банки към I тримесечие на 2026 г. Винаги проверявайте актуалните изисквания директно в банката или чрез лицензиран български юрист.',
      sourcesTitle: 'Източници',
      photoCreditLabel: 'Снимка към статията:',
      photoCreditOn: 'в',
      tocTitle: 'Съдържание',
      keyFacts: [
        'За регистрация на ООД или ЕООД в България е задължителна набирателна сметка — минимален капитал: 2 лева (≈€1) за ЕООД.',
        'От 2026 г. повечето банки изискват от украинските граждани реална икономическа връзка с България: собственост, бизнес или трудово правоотношение.',
        'ОББ (Обединена Българска Банка) НЕ открива набирателни сметки на граждани на Украйна за регистрация на фирми.',
        'Банка ДСК: възможно, но строги условия — такса €400 (невъзстановима), общ срок ~50 дни.',
        'Пощенска банка: най-достъпният вариант — обща стойност €100, срок 10–40 дни.',
        'UniCredit Bulbank: изисква нотариално заверена декларация от български гражданин или лице с ПМЖ/ДВЖ като контактно лице.',
        'Причина за затягане: Директива AMLD6 на ЕС и българският Закон за МИПОМФТ, в комбинация с повишена рискова категория за украински граждани след 2022 г.',
        'Професионалната правна подкрепа от български адвокат или регистрационен агент значително повишава шансовете за успех.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'vavedenie-2026',
          h2: 'Въведение: защо това е актуално през 2026 г.',
          p: [
            'България остава една от най-достъпните юрисдикции в ЕС за регистрация на фирми. ЕООД и ООД са най-популярните правни форми за чуждестранни предприемачи — с корпоративен данък 10% (най-нисък в ЕС), опростена процедура и пълен достъп до единния пазар на ЕС.',
            'За гражданите на Украйна България има допълнителни предимства: географска близост, културна близост, голяма украинска диаспора, установена от 2022 г., и практическото предимство от приемането на еврото от януари 2026 г.',
            'Въпреки това един етап от процеса на регистрация се усложни значително от 2022 г.: откриването на набирателна сметка — задължителна временна банкова сметка за регистрация на ООД или ЕООД.',
          ],
        },
        {
          icon: 'file',
          id: 'nabiratelna-smetka-kakvo-e',
          h2: 'Какво е набирателна сметка и защо е задължителна',
          p: [
            'Набирателната сметка е специална временна банкова сметка, открита на името на регистрираното дружество. Единствената й функция е да приеме и задържи вноската в уставния капитал до формалната регистрация в Търговския регистър.',
            'Съгласно Търговския закон, регистрацията на ООД или ЕООД изисква банково удостоверение, потвърждаващо внасянето на минималния капитал. Без това удостоверение Търговският регистър не приема заявка за регистрация.',
            'Минимален капитал: ЕООД — 2 лева (≈€1). Повечето банки изискват реален депозит от 100–500 лева (€50–255). След регистрацията набирателната сметка се закрива и капиталът се прехвърля към оперативната сметка на дружеството.',
          ],
        },
        {
          icon: 'bank',
          id: 'analiz-na-bankite-2026',
          h2: 'Анализ на банките: изисквания, разходи, срокове',
          p: [
            'Следва анализ на четирите основни банки, работещи с набирателни сметки за украински граждани към I тримесечие на 2026 г.',
          ],
          blocks: [
            {
              h3: '✅ Пощенска банка — Най-достъпният вариант',
              bullets: [
                'ЕТАП 1 — Регистрация на клиент: ~10 дни | Такса: €50 (невъзстановима)',
                'ЕТАП 2 — Набирателна сметка: до 30 дни | Такса: €50 (включва откриване + поддръжка + закриване)',
                'ОБЩО: €100 | Срок: 10–40 дни',
                'ПРЕПОРЪКА: Най-добрата отправна точка за повечето украински предприемачи.',
              ],
            },
            {
              h3: '⚠️ UniCredit Bulbank — Възможно при специфични изисквания',
              bullets: [
                'Срок: ~10 работни дни | Такса: €100',
                'СПЕЦИФИЧНО ИЗИСКВАНЕ: Нотариално заверена декларация от български гражданин или лице с ПМЖ/ДВЖ като контактно лице',
                'ПРЕПОРЪКА: Приложимо при наличие на надежден български контакт.',
              ],
            },
            {
              h3: '⚠️ Банка ДСК — Възможно, но най-взискателно',
              bullets: [
                'Срок: ~50 дни | Такса: €400 (невъзстановима)',
                'ИЗИСКВАНЕ: Собственост на недвижим имот в България е на практика задължителна',
                'ПРЕПОРЪКА: Оправдано само при вече налична или планирана покупка на имот.',
              ],
            },
            {
              h3: '❌ ОББ — Недостъпно',
              bullets: [
                'ОББ НЕ открива набирателни сметки на украински граждани за регистрация на фирми.',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'nashata-otsenka',
          h2: 'Нашата оценка',
          p: [
            'Откриването на набирателна сметка като украински гражданин в България през 2026 г. е по-сложно от преди — но е напълно постижимо при правилна подготовка и професионална подкрепа.',
            'Маршрутът през Пощенска банка е най-достъпният за повечето кандидати. UniCredit е алтернатива при наличие на български контакти. Банка ДСК — оптимална за собственици на имоти. ОББ — не е вариант.',
            'В European Gateway предоставяме пълна подкрепа при регистрацията на фирми за украински и международни клиенти в България.',
          ],
        },
      ],
    },

    de: {
      back: 'Zur Startseite',
      date: '7. März 2026',
      readTime: 'Lesezeit: ~15 Minuten',
      title:
        'Wie ukrainische Staatsbürger ein Bankkonto zur Firmengründung in Bulgarien eröffnen können — 2026',
      subtitle:
        'Vollständiger Praxisleitfaden: Nabiratelna Smetka, Bankanforderungen, Fristen, Kosten und Strategien — aktualisiert Q1 2026.',
      seoTitle:
        'Bankkonto zur Firmengründung in Bulgarien für Ukrainer (Leitfaden 2026)',
      seoDescription:
        'Detaillierter Leitfaden 2026 zur Eröffnung eines Bankkontos und einer Nabiratelna Smetka für die Registrierung einer EOOD oder OOD in Bulgarien durch ukrainische Staatsbürger: Bankanforderungen, Kosten, Fristen und Strategien.',
      keyFactsTitle: 'Wichtige Fakten — Q1 2026',
      noteTitle: 'Haftungsausschluss',
      noteText:
        'Bankrichtlinien ändern sich häufig. Dieser Artikel spiegelt die Praxis bulgarischer Banken im Q1 2026 wider. Überprüfen Sie aktuelle Anforderungen stets direkt bei der Bank oder einem zugelassenen bulgarischen Rechtsberater.',
      sourcesTitle: 'Quellen',
      photoCreditLabel: 'Artikelfoto:',
      photoCreditOn: 'auf',
      tocTitle: 'Inhalt',
      keyFacts: [
        'Zur Registrierung einer OOD oder EOOD in Bulgarien ist eine Nabiratelna Smetka (Kapitaleinzahlungskonto) Pflicht — Mindestkapital: BGN 2 (≈€1) für EOOD.',
        'Ab 2026 verlangen die meisten bulgarischen Banken von ukrainischen Staatsangehörigen eine nachweisbare wirtschaftliche Verbindung zu Bulgarien.',
        'OBB (Vereinte Bulgarische Bank) eröffnet KEINE Nabiratelna-Konten für ukrainische Staatsbürger zur Firmengründung.',
        'Bank DSK: möglich, aber streng — Gebühr €400 (nicht erstattungsfähig), Gesamtlaufzeit ~50 Tage.',
        'Postbank: zugänglichste Option — Gesamtgebühr €100, Laufzeit 10–40 Tage.',
        'UniCredit Bulbank: erfordert notariell beglaubigte Erklärung eines bulgarischen Staatsbürgers oder Daueraufenthaltsberechtigten als Kontaktperson.',
        'Ursache: EU-Geldwäscherichtlinie AMLD6 und bulgarisches AML-Gesetz plus erhöhte Risikoeinstufung für ukrainische Staatsangehörige ab 2022.',
        'Professionelle Rechtsunterstützung erhöht die Erfolgsquote erheblich.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'einfuehrung-2026',
          h2: 'Einführung: Warum dies 2026 relevant ist',
          p: [
            'Bulgarien bleibt eine der zugänglichsten EU-Jurisdiktionen für die Firmengründung. EOOD und OOD sind die beliebtesten Rechtsformen für ausländische Unternehmer — mit einem Körperschaftsteuersatz von 10% (dem niedrigsten in der EU), einem unkomplizierten Registrierungsprozess und vollem Zugang zum EU-Binnenmarkt.',
            'Für ukrainische Staatsangehörige bietet Bulgarien zusätzliche Vorteile: geografische Nähe, kulturelle Vertrautheit, eine große ukrainische Diaspora seit 2022 und den praktischen Vorteil der Euro-Einführung ab Januar 2026.',
            'Allerdings ist ein Schritt im Firmenregistrierungsprozess seit 2022 erheblich schwieriger geworden: die Eröffnung einer Nabiratelna Smetka — des obligatorischen temporären Kapitaleinzahlungskontos.',
          ],
        },
        {
          icon: 'bank',
          id: 'bankanalyse-bulgarien-2026',
          h2: 'Bankanalyse: Anforderungen, Kosten, Fristen',
          p: [
            'Analyse der vier Hauptbanken für Nabiratelna-Konten ukrainischer Staatsbürger, Stand Q1 2026.',
          ],
          blocks: [
            {
              h3: '✅ Postbank — Zugänglichste Option',
              bullets: [
                'STUFE 1 — Kundenregistrierung: ~10 Tage | Gebühr: €50 (nicht erstattungsfähig)',
                'STUFE 2 — Nabiratelna-Konto: bis 30 Tage | Gebühr: €50 (inkl. Eröffnung + Verwaltung + Schließung)',
                'GESAMT: €100 | Laufzeit: 10–40 Tage',
                'EMPFEHLUNG: Bester Ausgangspunkt für die meisten ukrainischen Unternehmer.',
              ],
            },
            {
              h3: '⚠️ UniCredit Bulbank — Möglich mit spezifischen Anforderungen',
              bullets: [
                'Laufzeit: ~10 Werktage | Gebühr: €100',
                'SPEZIFISCHE ANFORDERUNG: Notariell beglaubigte Erklärung eines bulgarischen Staatsbürgers oder Daueraufenthaltsberechtigten als Kontaktperson',
                'EMPFEHLUNG: Machbar, wenn Sie einen vertrauenswürdigen bulgarischen Kontakt haben.',
              ],
            },
            {
              h3: '⚠️ Bank DSK — Möglich, aber anspruchsvollste Option',
              bullets: [
                'Laufzeit: ~50 Tage | Gebühr: €400 (nicht erstattungsfähig)',
                'ANFORDERUNG: Immobilieneigentum in Bulgarien praktisch obligatorisch',
                'EMPFEHLUNG: Gerechtfertigt für Immobilieneigentümer in Bulgarien.',
              ],
            },
            {
              h3: '❌ OBB — Nicht verfügbar',
              bullets: [
                'OBB eröffnet KEINE Nabiratelna-Konten für ukrainische Staatsbürger zur Firmengründung.',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'unsere-einschaetzung',
          h2: 'Unsere Einschätzung',
          p: [
            'Die Eröffnung einer Nabiratelna Smetka als ukrainischer Staatsbürger in Bulgarien ist 2026 komplexer als früher — aber mit der richtigen Vorbereitung und professioneller Unterstützung durchaus möglich.',
            'Der Postbank-Weg bietet für die meisten Antragsteller den zugänglichsten Pfad. UniCredit ist eine Alternative für Antragsteller mit bulgarischen Kontakten. Bank DSK ist optimal für Immobilieneigentümer. OBB ist keine Option.',
            'Bei European Gateway bieten wir vollständige Firmengründungsunterstützung für ukrainische und internationale Kunden in Bulgarien.',
          ],
        },
      ],
    },

    it: {
      back: 'Torna alla home',
      date: '7 marzo 2026',
      readTime: 'Tempo di lettura: ~15 minuti',
      title:
        'Come i cittadini ucraini possono aprire un conto bancario per registrare una società in Bulgaria nel 2026',
      subtitle:
        'Guida pratica completa: nabiratelna smetka, requisiti bancari, tempistiche, costi e strategie — aggiornato Q1 2026.',
      seoTitle:
        'Come aprire un conto per registrare una società in Bulgaria nel 2026',
      seoDescription:
        'Guida dettagliata 2026 su come i cittadini ucraini possono aprire un conto bancario e una nabiratelna smetka per registrare una EOOD o OOD in Bulgaria: requisiti bancari, costi, tempistiche e strategie pratiche.',
      keyFactsTitle: 'Dati chiave — Q1 2026',
      noteTitle: 'Avvertenza',
      noteText:
        'Le politiche bancarie cambiano frequentemente. Questo articolo riflette la pratica delle banche bulgare nel Q1 2026. Verificate sempre i requisiti attuali direttamente con la banca o tramite un consulente legale bulgaro autorizzato.',
      sourcesTitle: 'Fonti',
      photoCreditLabel: 'Foto articolo:',
      photoCreditOn: 'su',
      tocTitle: 'Indice',
      keyFacts: [
        'Per registrare una OOD o EOOD in Bulgaria è obbligatoria una nabiratelna smetka — capitale minimo: BGN 2 (≈€1) per EOOD.',
        'Dal 2026 la maggior parte delle banche bulgare richiede ai cittadini ucraini un collegamento economico dimostrabile con la Bulgaria.',
        'OBB (Banca Bulgara Unita) NON apre conti nabiratelna per cittadini ucraini per la registrazione di società.',
        'Bank DSK: possibile ma severo — commissione €400 (non rimborsabile), tempistica totale ~50 giorni.',
        'Postbank: opzione più accessibile — commissione totale €100, tempistica 10–40 giorni.',
        'UniCredit Bulbank: richiede dichiarazione notarile da un cittadino bulgaro o residente permanente come persona di contatto.',
        "Causa dell'inasprimento: Direttiva UE antiriciclaggio AMLD6 e Legge bulgara AML, combinati con elevata classificazione di rischio per i cittadini ucraini dal 2022.",
        'Il supporto legale professionale aumenta significativamente il tasso di successo.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'introduzione-2026',
          h2: 'Introduzione: perché questo è rilevante nel 2026',
          p: [
            "La Bulgaria rimane una delle giurisdizioni UE più accessibili per la registrazione di società. EOOD e OOD sono le forme giuridiche più popolari per gli imprenditori stranieri — con un'aliquota di imposta sulle società del 10% (la più bassa nell'UE) e pieno accesso al mercato unico europeo.",
            "Per i cittadini ucraini in particolare, la Bulgaria offre vantaggi aggiuntivi: vicinanza geografica, affinità culturale, una grande diaspora ucraina formatasi dal 2022 e il vantaggio pratico dell'adozione dell'euro da gennaio 2026.",
            "Tuttavia, un passaggio nel processo di registrazione societaria è diventato significativamente più difficile dal 2022: l'apertura di una nabiratelna smetka — il conto bancario temporaneo obbligatorio necessario per registrare una OOD o EOOD.",
          ],
        },
        {
          icon: 'bank',
          id: 'analisi-banche-bulgaria-2026',
          h2: 'Analisi delle banche: requisiti, costi, tempistiche',
          p: [
            'Analisi delle quattro banche principali per i conti nabiratelna dei cittadini ucraini, aggiornata al Q1 2026.',
          ],
          blocks: [
            {
              h3: '✅ Postbank — Opzione più accessibile',
              bullets: [
                'FASE 1 — Registrazione cliente: ~10 giorni | Commissione: €50 (non rimborsabile)',
                'FASE 2 — Nabiratelna smetka: fino a 30 giorni | Commissione: €50 (include apertura + gestione + chiusura)',
                'TOTALE: €100 | Tempistica: 10–40 giorni',
                'RACCOMANDAZIONE: Punto di partenza migliore per la maggior parte degli imprenditori ucraini.',
              ],
            },
            {
              h3: '⚠️ UniCredit Bulbank — Possibile con requisiti specifici',
              bullets: [
                'Tempistica: ~10 giorni lavorativi | Commissione: €100',
                'REQUISITO SPECIFICO: Dichiarazione notarile da un cittadino bulgaro o residente permanente (ПМЖ/ДВЖ) come persona di contatto',
                'RACCOMANDAZIONE: Fattibile se si dispone di un contatto bulgaro affidabile disponibile a svolgere questo ruolo.',
              ],
            },
            {
              h3: '⚠️ Bank DSK — Possibile ma più esigente',
              bullets: [
                'Tempistica: ~50 giorni | Commissione: €400 (non rimborsabile)',
                'REQUISITO: Proprietà immobiliare in Bulgaria praticamente obbligatoria in pratica',
                'RACCOMANDAZIONE: Giustificata per chi possiede già immobili in Bulgaria.',
              ],
            },
            {
              h3: '❌ OBB — Non disponibile',
              bullets: [
                'OBB NON apre conti nabiratelna per cittadini ucraini per la registrazione di società.',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'nostra-valutazione',
          h2: 'La nostra valutazione',
          p: [
            "L'apertura di una nabiratelna smetka come cittadino ucraino in Bulgaria nel 2026 è più complessa di tre anni fa — ma è realizzabile con la giusta preparazione e il giusto supporto professionale.",
            "Il percorso Postbank offre il cammino più accessibile per la maggior parte dei richiedenti. UniCredit è un'alternativa valida per chi ha contatti bulgari. Bank DSK è ottimale per i proprietari di immobili. OBB non è un'opzione.",
            'In European Gateway forniamo supporto completo per la registrazione societaria per clienti ucraini e internazionali in Bulgaria.',
          ],
        },
      ],
    },
  };

  const d = t[lang];
  const articleUrl =
    typeof window !== 'undefined' ? window.location.href : 'https://estate.aibyteconsult.com/';
  const siteName = 'European Gateway';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.lang = lang;

    const metaTitle = d.seoTitle || d.title;
    const metaDescription = d.seoDescription || d.subtitle;
    document.title = `${metaTitle} | ${siteName}`;

    const upsertMeta = (
      selector: string,
      attrs: Record<string, string>,
      content: string,
    ) => {
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
    upsertMeta(
      'meta[name="twitter:description"]',
      { name: 'twitter:description' },
      metaDescription,
    );
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
      author: {
        '@type': 'Organization',
        name: siteName,
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
      },
      datePublished: '2026-03-07',
      dateModified: '2026-03-07',
      articleSection: 'Business',
      keywords: [
        'Bulgaria company registration',
        'nabiratelna smetka',
        'bank account Bulgaria',
        'EOOD registration',
        'OOD registration',
        'Ukrainian citizens Bulgaria',
      ],
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://estate.aibyteconsult.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: d.title,
          item: articleUrl,
        },
      ],
    };

    upsertScript('article-structured-data', articleSchema);
    upsertScript('breadcrumb-structured-data', breadcrumbSchema);
  }, [d.seoDescription, d.seoTitle, d.subtitle, d.title, articleUrl, cover.image_url, lang]);

  const iconMap: Record<string, ReactNode> = {
    info: <Info className="w-5 h-5 text-primary" />,
    file: <FileText className="w-5 h-5 text-primary" />,
    shield: <Shield className="w-5 h-5 text-primary" />,
    building: <Building className="w-5 h-5 text-primary" />,
    bank: <Landmark className="w-5 h-5 text-primary" />,
    chart: <BarChart3 className="w-5 h-5 text-primary" />,
    strategy: <TrendingUp className="w-5 h-5 text-primary" />,
    process: <CheckCircle className="w-5 h-5 text-primary" />,
    risk: <AlertTriangle className="w-5 h-5 text-primary" />,
    conclusion: <Euro className="w-5 h-5 text-primary" />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={d.title}
        description="How to open a bank account in Bulgaria as a Ukrainian citizen in 2026. Required documents, best banks, fees and step-by-step process."
        path="/article/ukraine-bank-account-bulgaria-2026"
        type="article"
        article={{ publishedTime: '2026-03-07', author: 'BulgariaEstate by AI Byte Consult' }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: d.title, url: '/article/ukraine-bank-account-bulgaria-2026' },
        ]}
      />
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative py-14 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                {d.back}
              </Link>
            </nav>

            <header className="mb-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <time dateTime="2026-03-07">{d.date}</time>
                </span>
                <span className="inline-flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  {d.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {d.title}
              </h1>
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
          <aside
            aria-labelledby="article-toc"
            className="border rounded-xl p-6 mb-8 bg-background"
          >
            <h2 id="article-toc" className="text-xl font-bold mb-4">
              {d.tocTitle}
            </h2>
            <nav aria-label={d.tocTitle}>
              <ul className="grid gap-2 text-sm md:grid-cols-2">
                {d.sections.map((section: any, index: number) => (
                  <li key={index}>
                    <a
                      href={`#${section.id}`}
                      className="text-primary hover:underline"
                    >
                      {section.h2}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <section className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
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

          <section className="border rounded-xl p-5 mb-8 flex gap-3 items-start">
            <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold mb-1">{d.noteTitle}</h2>
              <p className="text-sm text-muted-foreground">{d.noteText}</p>
            </div>
          </section>

          <article
            className="space-y-10"
            itemScope
            itemType="https://schema.org/Article"
          >
            <meta itemProp="headline" content={d.title} />
            <meta itemProp="description" content={d.seoDescription || d.subtitle} />
            <meta itemProp="datePublished" content="2026-03-07" />
            <meta itemProp="dateModified" content="2026-03-07" />
            <meta itemProp="inLanguage" content={lang} />
            <meta itemProp="mainEntityOfPage" content={articleUrl} />
            <meta itemProp="image" content={cover.image_url} />

            {d.sections.map((s: any, idx: number) => (
              <section key={idx} id={s.id} className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl font-bold leading-tight flex items-center gap-2">
                  {iconMap[s.icon] ?? <Info className="w-5 h-5 text-primary" />}
                  {s.h2}
                </h2>

                {s.p?.map((p: string, pi: number) => (
                  <p key={pi} className="text-base leading-7 text-foreground/90">
                    {p}
                  </p>
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

                {s.blocks?.map((b: any, bi: number) => {
                  const isPositive = b.h3?.startsWith('✅');
                  const isWarning = b.h3?.startsWith('⚠️');
                  const isNegative = b.h3?.startsWith('❌');
                  const borderClass = isPositive
                    ? 'border-green-500/40 bg-green-500/5'
                    : isWarning
                      ? 'border-yellow-500/40 bg-yellow-500/5'
                      : isNegative
                        ? 'border-destructive/40 bg-destructive/5'
                        : 'border bg-background';

                  return (
                    <section
                      key={bi}
                      className={`rounded-xl border p-5 space-y-3 ${borderClass}`}
                    >
                      <h3 className="text-base font-semibold flex items-center gap-2">
                        {isPositive ? (
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                        ) : isWarning ? (
                          <AlertTriangle className="w-4 h-4 text-yellow-600 shrink-0" />
                        ) : isNegative ? (
                          <XCircle className="w-4 h-4 text-destructive shrink-0" />
                        ) : (
                          <Building className="w-4 h-4 text-primary shrink-0" />
                        )}
                        {b.h3}
                      </h3>

                      {b.bullets?.length ? (
                        <ul className="space-y-1.5 text-sm">
                          {b.bullets.map((it: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-foreground/85"
                            >
                              <span className="text-primary mt-0.5 shrink-0">›</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  );
                })}
              </section>
            ))}
          </article>

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

          <section className="rounded-xl border bg-primary/5 p-6 flex items-start gap-4">
            <Users className="w-6 h-6 text-primary mt-0.5 shrink-0" />
            <div>
              <h2 className="text-sm font-semibold mb-1">
                European Gateway — Company Registration in Bulgaria
              </h2>
              <p className="text-xs text-muted-foreground">
                {lang === 'ru'
                  ? 'Полное сопровождение регистрации компаний для украинских и международных клиентов: подбор банка, подготовка документов, взаимодействие с банком, подача в Торговый регистр, налоговая регистрация, открытие операционного счёта.'
                  : lang === 'bg'
                    ? 'Пълно съдействие при регистрация на фирми за украински и международни клиенти: избор на банка, подготовка на документи, взаимодействие с банката, подаване в Търговския регистър, данъчна регистрация.'
                    : lang === 'de'
                      ? 'Vollständige Firmengründungsunterstützung für ukrainische und internationale Kunden: Bankauswahl, Dokumentenvorbereitung, Bankkorrespondenz, Handelsregistereinreichung, Steuerregistrierung.'
                      : lang === 'it'
                        ? 'Supporto completo per la registrazione societaria per clienti ucraini e internazionali: selezione banca, preparazione documenti, corrispondenza bancaria, deposito al Registro Commerciale, registrazione fiscale.'
                        : 'End-to-end company registration support for Ukrainian and international clients: bank selection, document preparation, bank liaison, Commercial Register filing, tax registration, and operating account setup.'}
              </p>
              <a
                href="https://wa.me/359988899109"
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

export default UkrainianBankAccountArticle;