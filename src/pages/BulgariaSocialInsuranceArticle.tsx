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
  Euro,
  FileText,
  Users,
  Landmark,
  TrendingUp,
  Shield,
  BarChart3,
  Info,
  Calculator,
  Building,
  UserCheck,
} from 'lucide-react';

const BulgariaSocialInsuranceArticle = () => {
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
      'https://ipfs.io/ipfs/bafybeiao2vgs2fim3ry5zmxga4z7fcvpknrnjodyrs47yfpbambfmdbnmm',
    unsplash_author_name: 'Towfiqu barbhuiya',
    unsplash_author_url: 'https://unsplash.com/@towfiqu999999',
    unsplash_photo_url: 'https://unsplash.com/photos/person-in-black-suit-jacket-holding-white-tablet-computer-nApaSgkzaxg',
  };

  const sources = [
    {
      label: 'NRA Bulgaria — Social insurance contributions',
      url: 'https://nra.bg/wps/portal/nra/podatsi-i-osigurovki/osigurovki',
    },
    {
      label: 'NRA Bulgaria — Official portal',
      url: 'https://nra.bg/',
    },
    {
      label: 'NSSI — Self-insured persons',
      url: 'https://www.nssi.bg/',
    },
    {
      label: 'Ministry of Labour and Social Policy',
      url: 'https://www.mlsp.government.bg/',
    },
    {
      label: 'Social Insurance Code (КСО)',
      url: 'https://lex.bg/bg/laws/ldoc/2135637484',
    },
    {
      label: 'Personal Income Tax Act (ЗДДФЛ)',
      url: 'https://lex.bg/bg/laws/ldoc/2135533906',
    },
    {
      label: 'European Commission — Bulgaria and the euro',
      url: 'https://economy-finance.ec.europa.eu/euro/eu-countries-and-euro/bulgaria-and-euro_en',
    },
    {
      label: 'ECB — Bulgaria joins the euro area',
      url: 'https://www.ecb.europa.eu/euro/changeover/bulgaria/html/index.en.html',
    },
  ];

  const translations: Record<string, any> = {
    en: {
      back: 'Back to Home',
      date: 'March 7, 2026',
      readTime: 'Reading time: ~18 minutes',
      title:
        'Social Insurance Contributions in Bulgaria 2026: Who Pays, How Much, and How to Calculate — In Euro',
      subtitle:
        '2026 guide in euro: employee payroll, manager with salary, manager without salary, self-employed rules, health insurance, and real examples after Bulgaria’s euro adoption.',
      seoTitle:
        'Bulgaria Social Insurance 2026 in Euro: Employee, Manager, Self-Employed',
      seoDescription:
        'Detailed 2026 guide to social insurance contributions in Bulgaria after euro adoption: employee payroll, employer cost, manager with salary, manager without salary, self-employed rules, health insurance, and worked examples in euro.',
      tocTitle: 'In this guide',
      keyFactsTitle: 'Key Numbers — 2026',
      noteTitle: 'Disclaimer',
      noteText:
        'Bulgaria adopted the euro on 1 January 2026. This article shows euro amounts recalculated from the fixed conversion rate €1 = 1.95583 BGN. Social rates and thresholds should always be verified with a licensed Bulgarian accountant or labour law adviser.',
      sourcesTitle: 'Sources',
      photoCreditLabel: 'Article photo:',
      photoCreditOn: 'on',
      keyFacts: [
        'Minimum wage 2026: €550.66/month (former BGN 1,077). This is the minimum insurance base for most employees.',
        'Maximum insurance ceiling 2026: €1,738.39/month (former BGN 3,400). Contributions are not charged above this threshold.',
        'Total employee contribution rate: 12.9% of gross salary.',
        'Total employer contribution rate: 18.92%–19.62% of gross salary, depending on occupational risk category.',
        'Combined total burden: around 31.82%–32.52% of gross salary.',
        'Minimum self-employed insurance base 2026: €477.03/month (former BGN 933).',
        'Manager with salary: standard employee + employer contribution model applies.',
        'Manager without salary in an active company: usually must register as self-insured and contribute on the self-employed base.',
        'Health insurance: 8% total (3.2% employee + 4.8% employer, or 8% self-paid).',
        'Flat personal income tax: 10% after deduction of employee contributions.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'introduction',
          h2: 'Introduction: why social insurance is one of the most important real costs in Bulgaria',
          p: [
            'When international entrepreneurs look at Bulgaria, they usually focus on the 10% corporate tax rate. That is understandable, but it is only part of the picture. The more practical cost driver in day-to-day operations is social insurance — especially when a company hires staff or when the owner actively manages the business.',
            'From 1 January 2026, Bulgaria uses the euro. That means that planning payroll, management remuneration, and self-insurance now makes much more sense directly in euro terms. This article therefore presents the figures in euro, using the official fixed conversion rate of €1 = 1.95583 BGN.',
            'Below you will find the main 2026 scenarios: employee payroll, manager of own company with salary, manager without salary in an active company, self-insured persons, and the practical position of Bulgarian citizens, EU nationals, Ukrainians, and third-country nationals.',
          ],
        },
        {
          icon: 'calculator',
          id: 'rates-2026',
          h2: '2026 contribution rates: full breakdown',
          p: [
            'The percentages below remain the same. Only the currency presentation changes: all examples are shown in euro based on the fixed conversion rate.',
          ],
          blocks: [
            {
              h3: 'Social insurance rates 2026',
              bullets: [
                'State pension fund: employee 5.7% + employer 9.22% = total 14.92%',
                'General illness and maternity: employee 1.4% + employer 2.1% = total 3.5%',
                'Occupational accident and illness: employer only 0.4%–1.1%',
                'Unemployment fund: employee 0.4% + employer 0.6% = total 1.0%',
                'Supplementary pension fund: employee 2.2% + employer 2.8% = total 5.0% for persons born after 31 December 1959',
                'Total social insurance: employee about 9.7% + employer about 14.72%–15.42%',
              ],
            },
            {
              h3: 'Health insurance rates 2026',
              bullets: [
                'Employee share: 3.2% of gross salary',
                'Employer share: 4.8% of gross salary',
                'Total health insurance: 8.0%',
                'Self-employed persons pay the full 8% themselves on their chosen base',
              ],
            },
            {
              h3: 'Combined totals',
              bullets: [
                'Employee total deduction: 12.9% of gross salary',
                'Employer total extra cost: 18.92%–19.62% above gross salary',
                'Combined burden on gross wage: roughly 31.82%–32.52%',
                'Income tax: 10% flat tax on taxable income after employee contributions',
              ],
            },
            {
              h3: 'Key thresholds in euro',
              bullets: [
                'Minimum monthly wage: €550.66 (former BGN 1,077)',
                'Maximum monthly insurance ceiling: €1,738.39 (former BGN 3,400)',
                'Minimum self-employed insurance base: €477.03/month (former BGN 933)',
                'Maximum self-employed base: same ceiling of €1,738.39/month',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'scenario-a',
          h2: 'Scenario A: Employee under a labour contract',
          p: [
            'If a person works under a Bulgarian labour contract, the employer registers them and withholds the employee share while paying the employer share separately.',
          ],
          blocks: [
            {
              h3: 'Example A1: Gross salary €1,022.58/month (former BGN 2,000)',
              bullets: [
                'Gross salary: €1,022.58/month',
                'Employee social insurance deductions: €99.19',
                'Employee health insurance: €32.72',
                'Total employee deductions: €131.91',
                'Taxable base for income tax: €890.67',
                'Income tax 10%: €89.07',
                'Net take-home salary: €801.60/month',
                '─────────────────────',
                'Employer social insurance cost: €157.68',
                'Employer health insurance: €49.08',
                'Total employer cost: €1,229.34/month',
              ],
            },
            {
              h3: 'Example A2: Minimum wage employee — gross €550.66/month',
              bullets: [
                'Gross salary: €550.66',
                'Employee deductions: €71.03',
                'Taxable base: €479.63',
                'Income tax 10%: €47.96',
                'Net salary: €431.67/month',
                '─────────────────────',
                'Employer extra cost: €108.04',
                'Total employer cost: €658.70/month',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'scenario-b',
          h2: 'Scenario B: Manager of own company with salary',
          p: [
            'A manager of an EOOD or OOD who pays themselves a salary is usually treated like an employee for contribution purposes. This is the clearest structure for an active owner who wants regular personal income and a clean payroll trail.',
          ],
          blocks: [
            {
              h3: 'Example B1: Manager salary €1,022.58/month gross',
              bullets: [
                'Company acts as employer; manager acts as employee',
                'Company pays employer-side contributions: about €206.76/month',
                'Manager receives net salary: about €801.60/month',
                'Annual company cost for this salary level: €14,753.53',
                'Annual net received by manager: €9,619.20',
                'Salary remains a deductible business expense for the company',
              ],
            },
            {
              h3: 'Example B2: Manager on minimum wage €550.66/month',
              bullets: [
                'A common planning model is minimum salary plus dividend distribution',
                'Annual company salary cost: about €7,904.40',
                'Annual net salary received: about €5,180.04',
                'If the company is profitable, the remaining profit may later be distributed as dividends',
                'This often produces a lower effective overall tax-and-contribution burden than paying everything as salary',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'scenario-c',
          h2: 'Scenario C: Manager without salary in an active company',
          p: [
            'This is the rule that surprises many foreign founders. If the company is active and the manager is actually performing management functions, the absence of salary does not automatically mean the absence of social insurance obligations.',
            'In practice, a manager without salary in an active company usually needs to register as a self-insured person and contribute on at least the minimum self-employed base.',
          ],
          blocks: [
            {
              h3: 'Example C1: Minimum self-employed base €477.03/month',
              bullets: [
                'Chosen insurance base: €477.03/month',
                'Social insurance contributions: €132.62/month',
                'Health insurance: €38.16/month',
                'Total monthly mandatory payment: €170.78',
                'Total annual mandatory payment: €2,049.36',
                'If the person does not draw salary, there may be no salary income tax at personal level for that month',
              ],
            },
            {
              h3: 'Example C2: Higher chosen base €1,022.58/month',
              bullets: [
                'Social insurance contributions: €284.28/month',
                'Health insurance: €81.81/month',
                'Total monthly payment: €366.09',
                'Total annual payment: €4,393.08',
                'Higher base may improve future pension and some benefit calculations',
              ],
            },
          ],
        },
        {
          icon: 'usercheck',
          id: 'nationality-matrix',
          h2: 'Nationality matrix: what changes and what does not',
          p: [
            'Contribution logic in Bulgaria is driven mainly by where the work is performed and under what legal basis, not by citizenship itself. Citizenship matters mostly for paperwork, permits, residence status, and EU coordination rules.',
          ],
          blocks: [
            {
              h3: 'Bulgarian citizen',
              bullets: [
                'Standard Bulgarian contribution system applies immediately',
                'Employee, manager, and self-insured rules work in the normal way',
                'The cleanest administrative path',
              ],
            },
            {
              h3: 'EU / EEA citizen',
              bullets: [
                'If working only in Bulgaria, Bulgarian contributions generally apply in the same way',
                'If there is cross-border EU work, an A1 certificate may become relevant',
                'EU citizens can usually work and establish business without the extra work-permit layer',
              ],
            },
            {
              h3: 'Ukrainian national',
              bullets: [
                'Where the person has lawful status and the right to work in Bulgaria, the same contribution percentages generally apply',
                'For company management and self-insurance, lawful residence or another valid basis is important in practice',
                'The contribution rates themselves are not special or reduced just because the person is Ukrainian',
              ],
            },
            {
              h3: 'Third-country national',
              bullets: [
                'Residence and work-permit structure should be checked before employment starts',
                'Once lawfully resident and working, the same Bulgarian contribution percentages generally apply',
                'The main difference is administrative route, not the contribution formula itself',
              ],
            },
          ],
        },
        {
          icon: 'calendar',
          id: 'deadlines',
          h2: 'When and how to pay',
          blocks: [
            {
              h3: 'For employers',
              bullets: [
                'Payroll declarations are generally submitted monthly to the NRA',
                'Contributions are generally due by the 25th of the following month',
                'Late payment leads to interest and possible penalties',
              ],
            },
            {
              h3: 'For self-insured persons',
              bullets: [
                'Advance contributions are generally paid monthly',
                'Annual reconciliation may be required depending on actual income and filing position',
                'Registration as self-insured should be completed before activity starts',
              ],
            },
          ],
        },
        {
          icon: 'chart',
          id: 'summary',
          h2: 'Summary comparison',
          blocks: [
            {
              h3: 'At roughly €1,022.58 gross equivalent',
              bullets: [
                'Employee: net salary about €801.60 | employer total cost about €1,229.34',
                'Manager with salary: broadly same payroll effect as employee',
                'Manager without salary on minimum self-employed base: about €170.78/month personal contribution cost',
                'Manager without salary on higher base €1,022.58: about €366.09/month',
                'Main insight: the structure chosen changes annual cash cost significantly',
              ],
            },
          ],
        },
        {
          icon: 'strategy',
          id: 'strategies',
          h2: 'Practical optimisation strategies',
          blocks: [
            {
              h3: 'Strategy 1: Minimum salary plus dividends',
              bullets: [
                'Useful where the company is profitable and the owner wants to minimise payroll burden',
                'A lower salary means lower monthly contributions',
                'Later profit distribution may be more efficient than paying everything as salary',
              ],
            },
            {
              h3: 'Strategy 2: Manager without salary during early-stage operations',
              bullets: [
                'Can be practical where the owner does not need immediate personal salary',
                'The monthly cost is much lower than a full employee-style payroll',
                'Must be structured correctly from the start',
              ],
            },
            {
              h3: 'Strategy 3: Cross-border EU planning where relevant',
              bullets: [
                'For EU nationals with genuine multi-state activity, A1 analysis may matter',
                'This is a specialist area and should be handled with professional advice',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'conclusion',
          h2: 'Our assessment',
          p: [
            'Bulgaria remains one of the more efficient jurisdictions in Europe for company formation and operating structure, but social insurance is one of the areas where international founders most often underestimate the real cost.',
            'The move to euro makes planning easier, because payroll, thresholds, and business forecasts can now be viewed directly in euro without conversion noise. The key question is not only what the percentage rate is, but which legal structure applies: employee, manager with salary, or self-insured manager without salary.',
            'At European Gateway, we help international clients structure payroll, management remuneration, company setup, and compliance in Bulgaria so that the model is both lawful and financially efficient.',
          ],
        },
      ],
    },

    ru: {
      back: 'На главную',
      date: '7 марта 2026',
      readTime: 'Время чтения: ~18 минут',
      title:
        'Осигуровки в Болгарии 2026: кто платит, сколько и как рассчитывать — в евро',
      subtitle:
        'Полное руководство на 2026 год уже в евро: работник, управитель с зарплатой, управитель без зарплаты, самоосигуряване, здравные взносы и реальные примеры после перехода Болгарии на евро.',
      seoTitle:
        'Осигуровки в Болгарии 2026 в евро: работник, управитель, самоосигуряване',
      seoDescription:
        'Подробное руководство по осигуровкам в Болгарии в 2026 году после перехода на евро: ставки для работника и работодателя, управитель с зарплатой и без зарплаты, самоосигуряващо се лице, здравное страхование и примеры расчёта в евро.',
      tocTitle: 'Содержание',
      keyFactsTitle: 'Ключевые цифры — 2026',
      noteTitle: 'Дисклеймер',
      noteText:
        'Болгария перешла на евро с 1 января 2026 года. Все суммы в статье пересчитаны в евро по фиксированному курсу €1 = 1.95583 BGN. Актуальные правила всегда уточняйте у лицензированного болгарского бухгалтера или юриста.',
      sourcesTitle: 'Источники',
      photoCreditLabel: 'Фото к статье:',
      photoCreditOn: 'на',
      keyFacts: [
        'Минимальная зарплата 2026: €550.66 в месяц (бывшие 1 077 лв). Это минимальная осигурительная база для большинства работников.',
        'Максимальный осигурительный потолок 2026: €1,738.39 в месяц (бывшие 3 400 лв). С дохода выше этой суммы взносы не начисляются.',
        'Ставка удержаний работника: 12.9% от брутто-зарплаты.',
        'Ставка расходов работодателя: 18.92%–19.62% сверх брутто-зарплаты.',
        'Совокупная нагрузка: примерно 31.82%–32.52% от брутто.',
        'Минимальная база самоосигуряващо се лице в 2026 году: €477.03 в месяц (бывшие 933 лв).',
        'Управитель с зарплатой: применяется стандартная модель работник + работодатель.',
        'Управитель без зарплаты при активной компании: как правило, должен зарегистрироваться как самоосигуряващ се.',
        'Здравное страхование: 8% всего.',
        'ДДФЛ: плоская ставка 10% после вычета взносов работника.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'vvedenie',
          h2: 'Введение: почему осигуровки — одна из ключевых реальных расходов в Болгарии',
          p: [
            'Когда иностранцы смотрят на Болгарию как на юрисдикцию для бизнеса, они почти всегда в первую очередь видят корпоративный налог 10%. Но на практике одна из самых важных и часто недооценённых статей расходов — это осигуровки, особенно если компания нанимает персонал или если собственник сам активно управляет фирмой.',
            'С 1 января 2026 года Болгария использует евро. Поэтому расчёты зарплат, базы для взносов и модель работы управителя теперь логичнее смотреть сразу в евро. В этой статье все суммы показаны уже в евро, с пересчётом по официальному фиксированному курсу €1 = 1.95583 BGN.',
            'Ниже разобраны главные сценарии 2026 года: наёмный работник, управитель собственной компании с зарплатой, управитель без зарплаты, самоосигуряване, а также практические нюансы для граждан Болгарии, ЕС, Украины и третьих стран.',
          ],
        },
        {
          icon: 'calculator',
          id: 'stavki',
          h2: 'Ставки взносов в 2026 году: полная разбивка',
          p: [
            'Процентные ставки не изменяются из-за перехода на евро. Меняется только валюта представления сумм: ниже всё показано в евро.',
          ],
          blocks: [
            {
              h3: 'Ставки социального страхования 2026',
              bullets: [
                'Пенсионный фонд: работник 5.7% + работодатель 9.22% = всего 14.92%',
                'Общее заболевание и материнство: работник 1.4% + работодатель 2.1% = всего 3.5%',
                'Трудовая злополука и профболезнь: только работодатель 0.4%–1.1%',
                'Безработица: работник 0.4% + работодатель 0.6% = всего 1.0%',
                'Дополнительное пенсионное: работник 2.2% + работодатель 2.8% = всего 5.0%',
                'Итого социальное страхование: работник около 9.7% + работодатель около 14.72%–15.42%',
              ],
            },
            {
              h3: 'Здравное страхование 2026',
              bullets: [
                'Доля работника: 3.2%',
                'Доля работодателя: 4.8%',
                'Итого здравное: 8%',
                'Самоосигуряващи се платят полные 8% самостоятельно',
              ],
            },
            {
              h3: 'Совокупные показатели',
              bullets: [
                'Общее удержание с работника: 12.9%',
                'Дополнительный расход работодателя: 18.92%–19.62%',
                'Общая нагрузка на брутто-зарплату: примерно 31.82%–32.52%',
                'ДДФЛ: 10% на налогооблагаемый доход после вычета взносов работника',
              ],
            },
            {
              h3: 'Ключевые пороги уже в евро',
              bullets: [
                'Минимальная зарплата: €550.66 (бывшие 1 077 лв)',
                'Максимальный осигурительный потолок: €1,738.39 (бывшие 3 400 лв)',
                'Минимальная база самоосигуряване: €477.03 в месяц (бывшие 933 лв)',
                'Максимальная база для самоосигуряване: тот же потолок €1,738.39',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'scenario-a',
          h2: 'Сценарий А: наёмный работник по трудовому договору',
          p: [
            'Если человек работает по болгарскому трудовому договору, компания регистрирует его и удерживает часть работника, а свою часть работодателя перечисляет отдельно.',
          ],
          blocks: [
            {
              h3: 'Пример А1: брутто-зарплата €1,022.58 в месяц (бывшие 2 000 лв)',
              bullets: [
                'Брутто-зарплата: €1,022.58',
                'Социальные взносы работника: €99.19',
                'Здравное работника: €32.72',
                'Всего удержаний с работника: €131.91',
                'Налогооблагаемая база: €890.67',
                'ДДФЛ 10%: €89.07',
                'Нетто на руки: €801.60 в месяц',
                '─────────────────────',
                'Социальные взносы работодателя: €157.68',
                'Здравное работодателя: €49.08',
                'Общая стоимость для работодателя: €1,229.34 в месяц',
              ],
            },
            {
              h3: 'Пример А2: работник на минимальной зарплате — брутто €550.66',
              bullets: [
                'Брутто: €550.66',
                'Удержания работника: €71.03',
                'Налогооблагаемая база: €479.63',
                'ДДФЛ 10%: €47.96',
                'Нетто: €431.67 в месяц',
                '─────────────────────',
                'Дополнительный расход работодателя: €108.04',
                'Общая стоимость для работодателя: €658.70 в месяц',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'scenario-b',
          h2: 'Сценарий Б: управитель своей компании с зарплатой',
          p: [
            'Если управитель ЕООД или ООД оформляет себе зарплату, для целей взносов он обычно рассматривается как обычный работник своей компании. Это самая понятная модель для активного собственника, которому нужен регулярный личный доход.',
          ],
          blocks: [
            {
              h3: 'Пример Б1: зарплата управителя €1,022.58 брутто',
              bullets: [
                'Компания выступает работодателем, управитель — работником',
                'Компания платит взносы работодателя: около €206.76 в месяц',
                'Управитель получает нетто: около €801.60 в месяц',
                'Годовая стоимость для компании при такой зарплате: €14,753.53',
                'Годовой нетто-доход управителя: €9,619.20',
                'Зарплата остаётся расходом компании',
              ],
            },
            {
              h3: 'Пример Б2: управитель на минимальной зарплате €550.66',
              bullets: [
                'Часто используется модель: минимальная зарплата + дивиденды',
                'Годовая стоимость зарплаты для компании: около €7,904.40',
                'Годовая нетто-зарплата управителя: около €5,180.04',
                'Оставшаяся прибыль может позже распределяться дивидендами',
                'Во многих случаях это эффективнее, чем выплачивать всё только зарплатой',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'scenario-c',
          h2: 'Сценарий В: управитель без зарплаты при активной компании',
          p: [
            'Именно этот сценарий чаще всего удивляет иностранных собственников. Если компания активна и управитель фактически выполняет управленческие функции, отсутствие зарплаты не означает автоматическое отсутствие обязательств по социальному страхованию.',
            'На практике управитель без зарплаты в активной компании обычно должен зарегистрироваться как самоосигуряващо се лице и платить взносы хотя бы с минимальной базы.',
          ],
          blocks: [
            {
              h3: 'Пример В1: минимальная база самоосигуряване €477.03 в месяц',
              bullets: [
                'Выбранная база: €477.03',
                'Социальные взносы: €132.62 в месяц',
                'Здравное: €38.16 в месяц',
                'Общий обязательный платёж в месяц: €170.78',
                'Общий обязательный платёж в год: €2,049.36',
                'Если зарплата не выплачивается, то зарплатного налога у физлица за этот месяц может не возникать',
              ],
            },
            {
              h3: 'Пример В2: повышенная база €1,022.58 в месяц',
              bullets: [
                'Социальные взносы: €284.28 в месяц',
                'Здравное: €81.81 в месяц',
                'Всего в месяц: €366.09',
                'Всего в год: €4,393.08',
                'Более высокая база может улучшать будущие пенсионные и некоторые страховые показатели',
              ],
            },
          ],
        },
        {
          icon: 'usercheck',
          id: 'status',
          h2: 'Матрица по статусу и гражданству: что меняется, а что нет',
          p: [
            'Логика взносов в Болгарии определяется прежде всего местом работы и правовым основанием деятельности, а не самим гражданством. Гражданство влияет в основном на документы, разрешения, статус пребывания и европейские координационные правила.',
          ],
          blocks: [
            {
              h3: 'Гражданин Болгарии',
              bullets: [
                'Обычная болгарская система применяется сразу',
                'Правила работника, управителя и самоосигуряване действуют в стандартном виде',
                'Наиболее простой административный путь',
              ],
            },
            {
              h3: 'Гражданин ЕС / ЕЭЗ',
              bullets: [
                'Если работа ведётся только в Болгарии, обычно применяются болгарские взносы',
                'Если деятельность идёт сразу в нескольких странах ЕС, может возникать вопрос А1',
                'Как правило, отдельный слой разрешений на работу не требуется',
              ],
            },
            {
              h3: 'Гражданин Украины',
              bullets: [
                'При наличии законного статуса и права на работу обычно применяются те же проценты взносов',
                'Для управления компанией и самоосигуряване важен законный статус пребывания',
                'Сами ставки не становятся ниже только из-за украинского гражданства',
              ],
            },
            {
              h3: 'Гражданин третьей страны',
              bullets: [
                'Перед началом работы нужно проверить структуру ВНЖ и разрешения на работу',
                'После законного допуска к работе обычно применяются те же болгарские ставки',
                'Основное отличие — в административном маршруте, а не в формуле взносов',
              ],
            },
          ],
        },
        {
          icon: 'calendar',
          id: 'deadlines',
          h2: 'Когда и как платить',
          blocks: [
            {
              h3: 'Для работодателей',
              bullets: [
                'Зарплатные декларации обычно подаются ежемесячно в НАП',
                'Взносы обычно подлежат уплате до 25-го числа следующего месяца',
                'Просрочка ведёт к начислению процентов и возможным санкциям',
              ],
            },
            {
              h3: 'Для самоосигуряващи се',
              bullets: [
                'Авансовые взносы обычно платятся ежемесячно',
                'По итогам года может требоваться сверка',
                'Регистрация как самоосигуряващо се должна быть сделана до начала деятельности',
              ],
            },
          ],
        },
        {
          icon: 'chart',
          id: 'summary',
          h2: 'Краткое сравнение сценариев',
          blocks: [
            {
              h3: 'На уровне эквивалента €1,022.58 брутто',
              bullets: [
                'Работник: нетто около €801.60 | общая стоимость для работодателя около €1,229.34',
                'Управитель с зарплатой: по сути тот же зарплатный эффект',
                'Управитель без зарплаты на минимальной базе: около €170.78 в месяц личных взносов',
                'Управитель без зарплаты на базе €1,022.58: около €366.09 в месяц',
                'Главный вывод: выбранная модель сильно меняет годовой денежный расход',
              ],
            },
          ],
        },
        {
          icon: 'strategy',
          id: 'strategies',
          h2: 'Практические стратегии оптимизации',
          blocks: [
            {
              h3: 'Стратегия 1: минимальная зарплата плюс дивиденды',
              bullets: [
                'Подходит, если компания прибыльна и собственник хочет снизить зарплатную нагрузку',
                'Чем ниже зарплата, тем ниже ежемесячные взносы',
                'Распределение прибыли позже может оказаться выгоднее, чем выплата всего только зарплатой',
              ],
            },
            {
              h3: 'Стратегия 2: управитель без зарплаты на старте',
              bullets: [
                'Практично, если собственнику не нужен немедленный личный доход',
                'Ежемесячная нагрузка заметно ниже, чем при полноценной зарплатной модели',
                'Структуру нужно оформить правильно с самого начала',
              ],
            },
            {
              h3: 'Стратегия 3: трансграничное планирование для ЕС там, где это реально применимо',
              bullets: [
                'Для граждан ЕС с реальной деятельностью в нескольких странах может быть важен анализ по А1',
                'Это уже специальная тема и требует профессиональной проверки',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'conclusion',
          h2: 'Наша оценка',
          p: [
            'Болгария остаётся одной из самых эффективных юрисдикций Европы для регистрации и ведения компании, но осигуровки — это именно та зона, где международные собственники чаще всего недооценивают реальную стоимость.',
            'Переход на евро делает планирование проще: зарплаты, пороги и прогнозы теперь можно смотреть сразу в евро без лишнего шума от пересчётов. Но ключевой вопрос не только в проценте, а в том, какая модель к вам применяется: работник, управитель с зарплатой или управитель без зарплаты как самоосигуряващ се.',
            'В European Gateway мы помогаем международным клиентам выстраивать зарплатную модель, вознаграждение управителя, структуру компании и соответствие требованиям в Болгарии так, чтобы схема была одновременно законной и финансово эффективной.',
          ],
        },
      ],
    },

    bg: {
      back: 'Към началото',
      date: '7 март 2026',
      readTime: 'Време за четене: ~18 минути',
      title:
        'Осигуровки в България 2026: кой плаща, колко и как се изчисляват — в евро',
      subtitle:
        'Практическо ръководство за 2026 г. вече в евро: наето лице, управител със заплата, управител без заплата, самоосигуряване, здравни вноски и реални примери след приемането на еврото.',
      seoTitle:
        'Осигуровки в България 2026 в евро: служител, управител, самоосигуряване',
      seoDescription:
        'Подробно ръководство за осигуровките в България през 2026 г. след приемането на еврото: служител, работодател, управител със и без заплата, самоосигуряване, здравно осигуряване и примери в евро.',
      tocTitle: 'Съдържание',
      keyFactsTitle: 'Ключови цифри — 2026',
      noteTitle: 'Отказ от отговорност',
      noteText:
        'България прие еврото от 1 януари 2026 г. Всички суми в статията са преизчислени в евро по фиксирания курс €1 = 1.95583 BGN. Проверявайте актуалните правила при счетоводител или адвокат.',
      sourcesTitle: 'Източници',
      photoCreditLabel: 'Снимка:',
      photoCreditOn: 'в',
      keyFacts: [
        'Минимална работна заплата 2026: €550.66 месечно.',
        'Максимален осигурителен доход 2026: €1,738.39 месечно.',
        'Осигуровки на работника: 12.9% от брутното възнаграждение.',
        'Осигуровки на работодателя: 18.92%–19.62% над брутната заплата.',
        'Минимална основа за самоосигуряване: €477.03 месечно.',
        'Управител със заплата: стандартен модел работник + работодател.',
        'Управител без заплата при активна фирма: обичайно се самоосигурява.',
        'Здравно осигуряване: 8% общо.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'bg-intro',
          h2: 'Въведение',
          p: [
            'След 1 януари 2026 г. България вече използва евро, затова е най-логично осигуровките и разходите по възнаграждения да се планират директно в евро.',
            'Най-честата грешка при чуждестранните предприемачи е да гледат само 10% корпоративен данък, а да подценяват реалния ефект на осигурителните вноски върху заплати и управление на дружество.',
          ],
        },
        {
          icon: 'calculator',
          id: 'bg-rates',
          h2: 'Основни ставки и прагове',
          blocks: [
            {
              h3: 'Осигурителни проценти',
              bullets: [
                'Работник: общо 12.9%',
                'Работодател: общо 18.92%–19.62%',
                'Здравно: 8% общо',
                'Самоосигуряващо се лице: плаща своята пълна вноска самостоятелно',
              ],
            },
            {
              h3: 'Прагове в евро',
              bullets: [
                'Минимална заплата: €550.66',
                'Максимален осигурителен доход: €1,738.39',
                'Минимална основа за самоосигуряване: €477.03',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'bg-employee',
          h2: 'Сценарий А: наето лице',
          blocks: [
            {
              h3: 'Пример при брутно възнаграждение €1,022.58',
              bullets: [
                'Нетно възнаграждение: около €801.60',
                'Общо месечен разход за работодателя: около €1,229.34',
              ],
            },
            {
              h3: 'Пример при минимална заплата €550.66',
              bullets: [
                'Нетно възнаграждение: около €431.67',
                'Общо месечен разход за работодателя: около €658.70',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'bg-manager-salary',
          h2: 'Сценарий Б: управител със заплата',
          p: [
            'Управителят, който си определя възнаграждение, обичайно се третира като наето лице за целите на осигуряването.',
          ],
          blocks: [
            {
              h3: 'Практически модел',
              bullets: [
                'Минимална заплата + дивиденти често е по-ефективно решение',
                'При по-ниска заплата месечната осигурителна тежест е по-ниска',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'bg-manager-no-salary',
          h2: 'Сценарий В: управител без заплата',
          p: [
            'Липсата на заплата не означава автоматично липса на осигуровки. При активна фирма управителят обичайно трябва да се регистрира като самоосигуряващо се лице.',
          ],
          blocks: [
            {
              h3: 'Минимална основа',
              bullets: [
                'Месечна обща тежест при база €477.03: около €170.78',
                'Годишна тежест: около €2,049.36',
              ],
            },
            {
              h3: 'По-висока основа',
              bullets: [
                'При база €1,022.58 месечната тежест е около €366.09',
                'По-високата база може да влияе положително върху бъдещи права',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'bg-conclusion',
          h2: 'Нашата оценка',
          p: [
            'Въпреки ниския корпоративен данък, реалната цена на дейността често се определя от осигурителната структура. Най-важното е не само процентът, а правилният правен модел: служител, управител със заплата или самоосигуряващ се управител.',
          ],
        },
      ],
    },

    de: {
      back: 'Zur Startseite',
      date: '7. März 2026',
      readTime: 'Lesezeit: ~18 Minuten',
      title:
        'Sozialversicherung in Bulgarien 2026: Wer zahlt, wie viel und wie wird gerechnet — in Euro',
      subtitle:
        'Praxisleitfaden 2026 in Euro: Arbeitnehmer, Geschäftsführer mit Gehalt, Geschäftsführer ohne Gehalt, Selbstversicherung, Krankenversicherung und reale Beispiele nach der Euro-Einführung.',
      seoTitle:
        'Sozialversicherung Bulgarien 2026 in Euro: Arbeitnehmer und Geschäftsführer',
      seoDescription:
        'Leitfaden zu Sozialversicherungsbeiträgen in Bulgarien 2026 nach der Euro-Einführung: Arbeitnehmer, Arbeitgeber, Geschäftsführer, Selbständige, Krankenversicherung und Beispiele in Euro.',
      tocTitle: 'Inhalt',
      keyFactsTitle: 'Schlüsselzahlen — 2026',
      noteTitle: 'Haftungsausschluss',
      noteText:
        'Bulgarien hat den Euro am 1. Januar 2026 eingeführt. Alle Beträge wurden mit dem festen Kurs €1 = 1.95583 BGN in Euro umgerechnet.',
      sourcesTitle: 'Quellen',
      photoCreditLabel: 'Artikelfoto:',
      photoCreditOn: 'auf',
      keyFacts: [
        'Mindestlohn 2026: €550.66 monatlich.',
        'Höchstbemessungsgrundlage 2026: €1,738.39 monatlich.',
        'Arbeitnehmeranteil: 12.9%.',
        'Arbeitgeberanteil: 18.92%–19.62%.',
        'Mindestbasis für Selbständige: €477.03 monatlich.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'de-intro',
          h2: 'Einführung',
          p: [
            'Seit dem 1. Januar 2026 verwendet Bulgarien den Euro. Deshalb ist es sinnvoll, Löhne, Geschäftsführervergütung und Sozialversicherung direkt in Euro zu planen.',
            'Viele ausländische Unternehmer sehen zuerst nur die 10% Körperschaftsteuer. In der Praxis sind die Sozialversicherungsbeiträge oft der relevantere laufende Kostenfaktor.',
          ],
        },
        {
          icon: 'calculator',
          id: 'de-rates',
          h2: 'Wichtige Sätze und Schwellenwerte',
          blocks: [
            {
              h3: 'Beiträge',
              bullets: [
                'Arbeitnehmer insgesamt: 12.9%',
                'Arbeitgeber insgesamt: 18.92%–19.62%',
                'Krankenversicherung gesamt: 8%',
                'Selbständige zahlen ihre Beiträge selbst',
              ],
            },
            {
              h3: 'Schwellen in Euro',
              bullets: [
                'Mindestlohn: €550.66',
                'Höchstgrenze: €1,738.39',
                'Mindestbasis Selbständige: €477.03',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'de-employee',
          h2: 'Szenario A: Arbeitnehmer',
          blocks: [
            {
              h3: 'Beispiel bei €1,022.58 brutto',
              bullets: [
                'Nettogehalt: etwa €801.60',
                'Gesamtkosten Arbeitgeber: etwa €1,229.34',
              ],
            },
            {
              h3: 'Beispiel beim Mindestlohn €550.66',
              bullets: [
                'Nettogehalt: etwa €431.67',
                'Gesamtkosten Arbeitgeber: etwa €658.70',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'de-manager-salary',
          h2: 'Szenario B: Geschäftsführer mit Gehalt',
          p: [
            'Ein Geschäftsführer mit Gehalt wird für Beitragszwecke typischerweise wie ein Arbeitnehmer behandelt.',
          ],
          blocks: [
            {
              h3: 'Praktische Struktur',
              bullets: [
                'Mindestgehalt plus Dividenden kann effizienter sein',
                'Niedrigeres Gehalt bedeutet niedrigere laufende Beiträge',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'de-manager-no-salary',
          h2: 'Szenario C: Geschäftsführer ohne Gehalt',
          p: [
            'Kein Gehalt bedeutet nicht automatisch keine Beiträge. Bei aktiver Gesellschaft muss der Geschäftsführer sich in der Praxis oft als Selbständiger versichern.',
          ],
          blocks: [
            {
              h3: 'Mindestbasis',
              bullets: [
                'Monatliche Belastung bei €477.03 Basis: etwa €170.78',
                'Jährliche Belastung: etwa €2,049.36',
              ],
            },
            {
              h3: 'Höhere Basis',
              bullets: [
                'Bei €1,022.58 Basis: etwa €366.09 monatlich',
                'Eine höhere Basis kann spätere Ansprüche verbessern',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'de-conclusion',
          h2: 'Unsere Einschätzung',
          p: [
            'Nicht nur der Prozentsatz ist wichtig, sondern die richtige rechtliche Struktur: Arbeitnehmer, Geschäftsführer mit Gehalt oder selbständiger Geschäftsführer ohne Gehalt.',
          ],
        },
      ],
    },

    it: {
      back: 'Torna alla home',
      date: '7 marzo 2026',
      readTime: 'Tempo di lettura: ~18 minuti',
      title:
        'Contributi previdenziali in Bulgaria 2026: chi paga, quanto e come si calcolano — in euro',
      subtitle:
        'Guida pratica 2026 in euro: dipendente, amministratore con stipendio, amministratore senza stipendio, lavoro autonomo, assicurazione sanitaria ed esempi reali dopo l’adozione dell’euro.',
      seoTitle:
        'Contributi previdenziali Bulgaria 2026 in euro: dipendenti e amministratori',
      seoDescription:
        'Guida ai contributi previdenziali in Bulgaria nel 2026 dopo l’adozione dell’euro: dipendenti, datori di lavoro, amministratori, autonomi, assicurazione sanitaria ed esempi in euro.',
      tocTitle: 'Indice',
      keyFactsTitle: 'Numeri chiave — 2026',
      noteTitle: 'Avvertenza',
      noteText:
        'La Bulgaria ha adottato l’euro dal 1° gennaio 2026. Tutti gli importi sono stati ricalcolati in euro con il tasso fisso €1 = 1.95583 BGN.',
      sourcesTitle: 'Fonti',
      photoCreditLabel: 'Foto articolo:',
      photoCreditOn: 'su',
      keyFacts: [
        'Salario minimo 2026: €550.66 al mese.',
        'Massimale contributivo 2026: €1,738.39 al mese.',
        'Quota lavoratore: 12.9%.',
        'Quota datore di lavoro: 18.92%–19.62%.',
        'Base minima per autonomi: €477.03 al mese.',
      ],
      sections: [
        {
          icon: 'info',
          id: 'it-intro',
          h2: 'Introduzione',
          p: [
            'Dal 1° gennaio 2026 la Bulgaria usa l’euro. Per questo oggi è più corretto analizzare stipendi, compensi dell’amministratore e contributi direttamente in euro.',
            'Molti imprenditori stranieri guardano soprattutto al 10% di imposta societaria, ma nella pratica i contributi previdenziali sono spesso il costo operativo più importante.',
          ],
        },
        {
          icon: 'calculator',
          id: 'it-rates',
          h2: 'Aliquote e soglie principali',
          blocks: [
            {
              h3: 'Contributi',
              bullets: [
                'Lavoratore: 12.9% complessivo',
                'Datore di lavoro: 18.92%–19.62% complessivo',
                'Assicurazione sanitaria: 8% totale',
                'Gli autonomi pagano integralmente la propria quota',
              ],
            },
            {
              h3: 'Soglie in euro',
              bullets: [
                'Salario minimo: €550.66',
                'Massimale: €1,738.39',
                'Base minima autonomi: €477.03',
              ],
            },
          ],
        },
        {
          icon: 'users',
          id: 'it-employee',
          h2: 'Scenario A: lavoratore dipendente',
          blocks: [
            {
              h3: 'Esempio con €1,022.58 lordi',
              bullets: [
                'Netto mensile: circa €801.60',
                'Costo totale per il datore: circa €1,229.34',
              ],
            },
            {
              h3: 'Esempio con salario minimo €550.66',
              bullets: [
                'Netto mensile: circa €431.67',
                'Costo totale per il datore: circa €658.70',
              ],
            },
          ],
        },
        {
          icon: 'building',
          id: 'it-manager-salary',
          h2: 'Scenario B: amministratore con stipendio',
          p: [
            'L’amministratore che percepisce uno stipendio viene normalmente trattato come dipendente ai fini contributivi.',
          ],
          blocks: [
            {
              h3: 'Struttura pratica',
              bullets: [
                'Stipendio minimo più dividendi può essere una soluzione più efficiente',
                'Uno stipendio più basso riduce il costo contributivo mensile',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          id: 'it-manager-no-salary',
          h2: 'Scenario C: amministratore senza stipendio',
          p: [
            'L’assenza di stipendio non elimina automaticamente gli obblighi contributivi. Con una società attiva, in pratica l’amministratore spesso deve registrarsi come autonomo.',
          ],
          blocks: [
            {
              h3: 'Base minima',
              bullets: [
                'Costo mensile con base €477.03: circa €170.78',
                'Costo annuale: circa €2,049.36',
              ],
            },
            {
              h3: 'Base più alta',
              bullets: [
                'Con base €1,022.58: circa €366.09 al mese',
                'Una base più alta può migliorare alcuni diritti futuri',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          id: 'it-conclusion',
          h2: 'La nostra valutazione',
          p: [
            'Non conta solo la percentuale, ma soprattutto la struttura giuridica corretta: dipendente, amministratore con stipendio o amministratore autonomo senza stipendio.',
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

    const upsertMeta = (
      selector: string,
      attrs: Record<string, string>,
      content: string,
    ) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([key, value]) =>
          el?.setAttribute(key, value),
        );
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const upsertLink = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        Object.entries(attrs).forEach(([key, value]) =>
          el?.setAttribute(key, value),
        );
        document.head.appendChild(el);
      } else {
        Object.entries(attrs).forEach(([key, value]) =>
          el?.setAttribute(key, value),
        );
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
        'Bulgaria social insurance 2026',
        'osigurovki Bulgaria',
        'Bulgaria euro payroll',
        'manager without salary Bulgaria',
        'self-employed Bulgaria',
        'Bulgarian payroll in euro',
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

    upsertScript('article-structured-data-social-insurance-euro', articleSchema);
    upsertScript('breadcrumb-structured-data-social-insurance-euro', breadcrumbSchema);
  }, [articleUrl, cover.image_url, d.seoDescription, d.seoTitle, d.subtitle, d.title, lang]);

  const iconMap: Record<string, ReactNode> = {
    info: <Info className="w-5 h-5 text-primary shrink-0" />,
    calculator: <Calculator className="w-5 h-5 text-primary shrink-0" />,
    users: <Users className="w-5 h-5 text-primary shrink-0" />,
    building: <Building className="w-5 h-5 text-primary shrink-0" />,
    shield: <Shield className="w-5 h-5 text-primary shrink-0" />,
    usercheck: <UserCheck className="w-5 h-5 text-primary shrink-0" />,
    calendar: <Clock className="w-5 h-5 text-primary shrink-0" />,
    chart: <BarChart3 className="w-5 h-5 text-primary shrink-0" />,
    strategy: <TrendingUp className="w-5 h-5 text-primary shrink-0" />,
    conclusion: <Euro className="w-5 h-5 text-primary shrink-0" />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageSEO
        title={d.title}
        description="Social insurance contributions in Bulgaria 2026. Rates, self-employment, health insurance, practical examples in euro. Complete guide for expats and business owners."
        path="/article/bulgaria-social-insurance-2026"
        type="article"
        article={{ publishedTime: '2026-03-05', author: 'BulgariaEstate by AI Byte Consult' }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: d.title, url: '/article/bulgaria-social-insurance-2026' },
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
              <Calculator className="w-5 h-5 text-primary" />
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
                  {iconMap[s.icon] ?? (
                    <Info className="w-5 h-5 text-primary shrink-0" />
                  )}
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

                {s.blocks?.map((b: any, bi: number) => (
                  <section
                    key={bi}
                    className="rounded-xl border p-5 space-y-3 bg-background"
                  >
                    <h3 className="text-base font-semibold flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary shrink-0" />
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
                ))}
              </section>
            ))}
          </article>

          <section
            className="border rounded-xl p-6 mt-10 mb-10"
            aria-labelledby="sources-title"
          >
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
                European Gateway — Payroll & Company Services in Bulgaria
              </h2>
              <p className="text-xs text-muted-foreground">
                {lang === 'ru'
                  ? 'Полное сопровождение: настройка расчёта заработной платы, регистрация осигуровок, налоговая оптимизация, регистрация компаний для международных клиентов в Болгарии.'
                  : lang === 'bg'
                    ? 'Пълна подкрепа: изграждане на ведомост, регистрация на осигуровки, данъчна оптимизация, регистрация на фирми за международни клиенти в България.'
                    : lang === 'de'
                      ? 'Vollständige Unterstützung: Lohnbuchhaltung, Sozialversicherungsregistrierung, Steueroptimierung, Firmengründung für internationale Kunden in Bulgarien.'
                      : lang === 'it'
                        ? 'Supporto completo: gestione paghe, registrazione previdenziale, ottimizzazione fiscale, costituzione societaria per clienti internazionali in Bulgaria.'
                        : 'Full support: payroll setup, social insurance registration, tax optimisation, company registration for international clients in Bulgaria.'}
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
              <p className="text-xs text-muted-foreground mt-1">
                estate@aibyteconsult.com
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BulgariaSocialInsuranceArticle;