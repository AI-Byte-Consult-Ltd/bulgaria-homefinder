
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  TrendingUp,
  MapPin,
  Landmark,
  BarChart3,
  Clock,
  Home,
  Building,
} from 'lucide-react';

/**
 * Статья «Bulgaria Property Price Forecasts: 2026, 5-Year & 10-Year Outlook».
 * SEO-страница/артикль с ключевыми выводами и развернутым анализом.
 * Доступна на RU / EN / BG (в зависимости от i18n.language).
 */
const BulgariaPriceForecastsArticle = () => {
  const { i18n } = useTranslation();

  const langRaw = (i18n.language || 'en').toLowerCase();
  const lang = langRaw.startsWith('ru') ? 'ru' : langRaw.startsWith('bg') ? 'bg' : 'en';

  const content = {
    ru: {
      back: 'На главную',
      date: '10 февраля 2026',
      title: 'Прогноз цен на недвижимость в Болгарии: 2026, 5 лет и 10 лет',
      subtitle:
        'Полный анализ текущих тенденций, прогнозов и факторов, влияющих на рынок недвижимости Болгарии после вступления в еврозону.',
      sourceLabel: 'Источник:',
      insightsTitle: 'Ключевые выводы',
      readTime: 'Время чтения: ~8–10 минут',
      noteTitle: 'Важно',
      noteText:
        'Это аналитический обзор и сценарный прогноз (а не инвестиционный совет). Цифры и оценки опираются на публичные данные и источник ниже; рынок может меняться быстрее ожиданий.',
      sections: [
        {
          h2: '1) Почему рынок Болгарии сейчас в фокусе',
          p: [
            'Болгария остаётся одним из наиболее «доступных» рынков недвижимости в ЕС по цене входа, при этом спрос формируют сразу несколько групп: местные покупатели, релокация внутри ЕС, инвесторы под аренду и иностранцы, покупающие «второй дом» на море или в крупных городах.',
            'В 2024–2025 рынок активно рос, а на фоне снижения валютной неопределённости после принятия евро и сохраняющихся ипотечных продуктов спрос остаётся устойчивым. Однако темпы роста почти всегда цикличны: после резких подъемов возможна нормализация.',
          ],
        },
        {
          h2: '2) Что действительно двигает цены: 7 ключевых факторов',
          blocks: [
            {
              h3: 'Макроэкономика и доходы',
              p: [
                'Рост доходов, занятости и миграционный приток поддерживают спрос. Но если экономика замедляется, покупатели становятся более чувствительными к цене, а сроки экспозиции объектов растут.',
              ],
            },
            {
              h3: 'Кредитование и ипотечные ставки',
              p: [
                'Доступность ипотечных кредитов — один из главных драйверов. Когда ставки низкие и банки активно кредитуют, «потолок» цен становится выше. При ужесточении кредитной политики спрос быстро охлаждается.',
              ],
            },
            {
              h3: 'Предложение и новостройки',
              p: [
                'В Софии, Пловдиве и Варне объём новых проектов напрямую влияет на баланс рынка. Новостройки часто дорожают быстрее (особенно в хороших локациях), но при избытке предложения рост может притормозить.',
              ],
            },
            {
              h3: 'Инфраструктура и транспорт',
              p: [
                'Метро, дороги, деловые кластеры, университеты, больницы — всё это повышает ликвидность. Локации, куда «приходит инфраструктура», часто растут быстрее среднего по городу.',
              ],
            },
            {
              h3: 'Туризм и краткосрочная аренда',
              p: [
                'Побережье и курортные зоны чувствительны к туристическим сезонам, авиасообщению и регулированию краткосрочной аренды. Это влияет и на доходность, и на инвестиционный спрос.',
              ],
            },
            {
              h3: 'Регуляторика и налоги',
              p: [
                'Изменения в налогах, правилах строительства и регистрации могут резко менять привлекательность отдельных сегментов. Особенно важно следить за требованиями к документации и статусу объектов.',
              ],
            },
            {
              h3: 'Психология рынка',
              p: [
                'Рынок недвижимости часто движется ожиданиями: «сейчас подорожает — надо брать». На пике ожиданий сделки ускоряются, но затем рынок может перейти в режим торга и стабилизации.',
              ],
            },
          ],
        },
        {
          h2: '3) Сценарии прогноза: 2026, 5 лет и 10 лет',
          p: [
            'Ниже — сценарная рамка. Это не «точное число», а диапазон возможных траекторий. В реальности разные города и сегменты могут идти с разной скоростью.',
          ],
          table: {
            head: ['Горизонт', 'Базовый сценарий', 'Оптимистичный', 'Консервативный'],
            rows: [
              [
                '2026 (1 год)',
                'умеренный рост / стабилизация',
                'рост выше среднего (сильный спрос + дефицит качественных объектов)',
                'стабилизация / небольшая коррекция в перегретых сегментах',
              ],
              [
                '5 лет',
                'среднегодовой рост в «здоровом» коридоре',
                'ускорение при сильной экономике и инвестициях',
                'рост ближе к инфляции при ужесточении кредитов',
              ],
              [
                '10 лет',
                'долгий рост с циклами и паузами',
                'опережение региона при устойчивом притоке капитала',
                'замедление при демографии/оттоке и регуляторных ограничениях',
              ],
            ],
          },
          bullets: [
            'Крупные города (София/Пловдив/Варна): чаще растут стабильнее и ликвиднее.',
            'Курорты: могут давать сильные циклы (рывки и паузы), сильно зависят от аренды/туризма.',
            'Сельская недвижимость: самая дешёвая точка входа, но ликвидность и спрос сильно локальны.',
          ],
        },
        {
          h2: '4) Где рост вероятнее: локации и типы объектов',
          blocks: [
            {
              h3: 'София',
              p: [
                'Обычно лидирует по цене, ликвидности и спросу на аренду. Наиболее устойчивы районы с сильной инфраструктурой, транспортом и качественными новостройками.',
              ],
              bullets: [
                'Квартиры у метро и крупных бизнес-зон — чаще растут выше среднего.',
                'Новые проекты с хорошими планировками и парковкой держат цену лучше.',
              ],
            },
            {
              h3: 'Пловдив',
              p: [
                'Сильный промышленный и логистический центр. Спрос формируют рабочие места и переезды. Здесь важно качество дома и расположение относительно транспортных узлов.',
              ],
            },
            {
              h3: 'Варна / Бургас и побережье',
              p: [
                'Побережье часто выбирают под аренду и «второй дом». Важно различать: первая линия/вид/качество управления зданием vs. массовые проекты далеко от моря.',
              ],
              bullets: [
                'Доходность по аренде сильно зависит от сезона и стратегии управления.',
                'Проверяйте расходы: таксы поддержки, ремонты, страхование.',
              ],
            },
            {
              h3: 'Коммерческая недвижимость',
              p: [
                'Коммерция может быть интереснее по доходности, но сложнее по договорам, арендаторам и оценке рисков. Здесь особенно важны юридическая проверка, назначение объекта и инфраструктура.',
              ],
            },
          ],
        },
        {
          h2: '5) Риски, которые чаще всего недооценивают',
          bullets: [
            'Переплата на «хайпе» (когда объект продают дороже аналогов без реальных преимуществ).',
            'Юридические нюансы: статус земли/объекта, разрешения, доли, обременения.',
            'Скрытые расходы владения: обслуживание комплекса, налоги, ремонты, коммунальные платежи.',
            'Снижение спроса на аренду в отдельных локациях при росте предложения.',
            'Качество строительства и управляющей компании (особенно в курортных комплексах).',
          ],
        },
        {
          h2: '6) Практический чек-лист покупателя',
          bullets: [
            'Сравните аналоги: цена за м², состояние, этаж, вид, инфраструктура.',
            'Проверьте документы (лучше с юристом): право собственности, отсутствие обременений, разрешения.',
            'Оцените ликвидность: насколько быстро объект реально продать/сдать.',
            'Посчитайте “владение”: налоги + обслуживание + ремонты + простой по аренде.',
            'Если цель — аренда, заранее продумайте управление: кто будет заселять, убирать, решать вопросы.',
          ],
        },
        {
          h2: '7) Итог',
          p: [
            'Болгарский рынок остаётся перспективным, но лучший результат чаще даёт не попытка угадать «идеальный момент», а правильный выбор локации, юридическая чистота и понятная стратегия (жить / сдавать / перепродавать).',
            'Если вам нужен подбор объектов, проверка документов, регистрация компании, переводы и легализация — это как раз то, что мы закрываем “под ключ”.',
          ],
        },
      ],
    },

    en: {
      back: 'Back to Home',
      date: 'February 10, 2026',
      title: 'Bulgaria Property Price Forecasts: 2026, 5-Year & 10-Year Outlook',
      subtitle:
        "A comprehensive analysis of current trends, forecasts, and factors shaping Bulgaria's property market after euro adoption.",
      sourceLabel: 'Source:',
      insightsTitle: 'Key Insights',
      readTime: 'Reading time: ~8–10 minutes',
      noteTitle: 'Important',
      noteText:
        'This is a market overview and scenario-based outlook (not investment advice). Figures and statements are based on public information and the source below; market conditions can change quickly.',
      sections: [
        {
          h2: '1) Why Bulgaria is in focus',
          p: [
            'Bulgaria remains one of the most affordable EU markets in terms of entry price, while demand comes from multiple segments: local buyers, intra-EU relocation, rental investors, and foreigners buying a second home.',
            'After strong growth in 2024–2025, demand remains supported by reduced currency uncertainty and still-available mortgage products. However, property markets are cyclical — rapid growth is often followed by normalization.',
          ],
        },
        {
          h2: '2) What truly drives prices: 7 key factors',
          blocks: [
            {
              h3: 'Economy and household income',
              p: [
                'Income growth, employment, and net migration support demand. If the economy slows, buyers become more price-sensitive and listings stay longer on the market.',
              ],
            },
            {
              h3: 'Credit availability and mortgage rates',
              p: [
                'Mortgage affordability is a major driver. When rates are low and lending is active, price ceilings rise. If banks tighten, demand can cool quickly.',
              ],
            },
            {
              h3: 'Supply and new developments',
              p: [
                'In Sofia, Plovdiv, and Varna, the pipeline of new projects shapes market balance. New builds can outperform, but oversupply can slow appreciation.',
              ],
            },
            {
              h3: 'Infrastructure and transport',
              p: [
                'Metro expansions, roads, business clusters, universities, and healthcare increase liquidity. Areas “receiving infrastructure” often outperform city averages.',
              ],
            },
            {
              h3: 'Tourism and short-term rentals',
              p: [
                'Coastal and resort markets are sensitive to seasonality, air connectivity, and STR regulations — impacting both yield and investor demand.',
              ],
            },
            {
              h3: 'Regulation and taxes',
              p: [
                'Changes in taxes, building rules, and registration requirements can shift attractiveness. Documentation and property status checks are essential.',
              ],
            },
            {
              h3: 'Market psychology',
              p: [
                'Expectations move markets: “prices will rise — buy now.” At peaks, deals accelerate; later the market often shifts into negotiation and stabilization.',
              ],
            },
          ],
        },
        {
          h2: '3) Scenario outlook: 2026, 5 years, 10 years',
          p: [
            'Below is a scenario framework — not a single exact number. Different cities and segments can move at different speeds.',
          ],
          table: {
            head: ['Horizon', 'Base case', 'Optimistic', 'Conservative'],
            rows: [
              [
                '2026 (1 year)',
                'moderate growth / stabilization',
                'above-average growth (strong demand + limited prime supply)',
                'flat / mild correction in overheated pockets',
              ],
              [
                '5 years',
                'healthy annual growth corridor',
                'acceleration with strong economy and investment',
                'closer to inflation if credit tightens',
              ],
              [
                '10 years',
                'long-term growth with cycles and pauses',
                'outperformance with sustained capital inflow',
                'slower growth under demographic / regulatory pressure',
              ],
            ],
          },
          bullets: [
            'Major cities (Sofia/Plovdiv/Varna): typically more liquid and resilient.',
            'Resorts: can be highly cyclical, strongly driven by rental/tourism dynamics.',
            'Rural markets: low entry price, but liquidity and demand are very local.',
          ],
        },
        {
          h2: '4) Where growth is more likely: locations & property types',
          blocks: [
            {
              h3: 'Sofia',
              p: [
                'Often leads on price, liquidity, and rental demand. Strong infrastructure, transit access, and quality new builds tend to hold value best.',
              ],
              bullets: [
                'Homes near metro lines and business zones often outperform.',
                'Quality layouts, parking, and good building management matter.',
              ],
            },
            {
              h3: 'Plovdiv',
              p: [
                'A strong industrial and logistics hub. Demand is supported by jobs and relocations. Quality and connectivity are key.',
              ],
            },
            {
              h3: 'Varna / Burgas & the coast',
              p: [
                'Coastal markets are popular for rentals and second homes. Distinguish prime sea views and strong complexes from mass supply far from the sea.',
              ],
              bullets: [
                'Rental yield depends heavily on seasonality and management.',
                'Model all costs: maintenance fees, repairs, insurance.',
              ],
            },
            {
              h3: 'Commercial real estate',
              p: [
                'Commercial can offer stronger yields but requires deeper due diligence on leases, tenants, permitted use, and legal status.',
              ],
            },
          ],
        },
        {
          h2: '5) Risks buyers often underestimate',
          bullets: [
            'Overpaying during hype cycles (pricing not supported by comparable value).',
            'Legal nuances: title, permits, encumbrances, shares, land status.',
            'Hidden ownership costs: maintenance, taxes, repairs, utilities.',
            'Rental demand softening in pockets where supply grows quickly.',
            'Build quality and property management (especially in resort complexes).',
          ],
        },
        {
          h2: '6) Practical buyer checklist',
          bullets: [
            'Compare true comps: €/m², condition, floor, view, infrastructure.',
            'Verify documents (ideally with a lawyer): title, no liens, permits.',
            'Assess liquidity: how fast you can sell or rent in reality.',
            'Model total cost of ownership: taxes + fees + repairs + vacancy.',
            'If buying for rental, plan management upfront: bookings, cleaning, support.',
          ],
        },
        {
          h2: '7) Conclusion',
          p: [
            'Bulgaria remains attractive, but outcomes depend less on “perfect timing” and more on location quality, legal clarity, and a clear strategy (live / rent / resell).',
            'If you need sourcing, due diligence, legal services, company registration, certified translations, or document legalization — that’s exactly what we do end-to-end.',
          ],
        },
      ],
    },

    bg: {
      back: 'Към началото',
      date: '10 февруари 2026',
      title: 'Прогноза за цените на имотите в България: 2026, 5 години и 10 години',
      subtitle:
        'Подробен анализ на текущите тенденции, прогнози и фактори, които влияят на пазара на имоти в България след приемането на еврото.',
      sourceLabel: 'Източник:',
      insightsTitle: 'Ключови изводи',
      readTime: 'Време за четене: ~8–10 минути',
      noteTitle: 'Важно',
      noteText:
        'Това е аналитичен обзор и сценарна прогноза (не е инвестиционен съвет). Данните и твърденията са базирани на публична информация и посочения източник; пазарът може да се променя бързо.',
      sections: [
        {
          h2: '1) Защо България е във фокус',
          p: [
            'България остава един от най-достъпните пазари в ЕС по входна цена, а търсенето идва от няколко групи: местни купувачи, релокация в рамките на ЕС, инвеститори под наем и чужденци, които купуват втори дом.',
            'След силен ръст през 2024–2025 г. търсенето се подкрепя от по-ниска валутна несигурност и налични ипотечни продукти. Но пазарът е цикличен — след бърз ръст често идва нормализиране.',
          ],
        },
        {
          h2: '2) Какво реално движи цените: 7 ключови фактора',
          blocks: [
            {
              h3: 'Икономика и доходи',
              p: [
                'Ръстът на доходите, заетостта и миграцията подкрепят търсенето. При забавяне на икономиката купувачите стават по-чувствителни към цена и обявите се задържат по-дълго.',
              ],
            },
            {
              h3: 'Кредитиране и ипотечни лихви',
              p: [
                'Достъпът до ипотека е основен двигател. При ниски лихви и активни банки таванът на цените се вдига. При затягане търсенето може бързо да се охлади.',
              ],
            },
            {
              h3: 'Предлагане и ново строителство',
              p: [
                'В София, Пловдив и Варна новите проекти влияят директно на баланса. Новото строителство често се представя по-добре, но при свръхпредлагане ръстът може да се забави.',
              ],
            },
            {
              h3: 'Инфраструктура и транспорт',
              p: [
                'Метро, пътища, бизнес зони, университети и болници повишават ликвидността. Районите, където “влиза инфраструктура”, често надминават средното за града.',
              ],
            },
            {
              h3: 'Туризъм и краткосрочни наеми',
              p: [
                'Крайбрежните и курортни пазари са чувствителни към сезонност, полети и регулации на краткосрочното отдаване под наем — това влияе на доходността и инвестиционното търсене.',
              ],
            },
            {
              h3: 'Регулации и данъци',
              p: [
                'Промени в данъци, правила за строителство и регистрации могат рязко да сменят атрактивността. Статусът и документите на имота са критични.',
              ],
            },
            {
              h3: 'Пазарна психология',
              p: [
                'Очакванията движат пазара: “ще поскъпва — купувам сега”. При пик сделките се ускоряват, а после често следва период на преговори и стабилизация.',
              ],
            },
          ],
        },
        {
          h2: '3) Сценарии: 2026, 5 години и 10 години',
          p: [
            'По-долу е сценарна рамка — не едно “точно” число. Различни градове и сегменти могат да се движат с различна скорост.',
          ],
          table: {
            head: ['Хоризонт', 'Базов сценарий', 'Оптимистичен', 'Консервативен'],
            rows: [
              [
                '2026 (1 година)',
                'умерен ръст / стабилизация',
                'по-висок ръст (силно търсене + ограничено качествено предлагане)',
                'стагнация / лека корекция в прегрели сегменти',
              ],
              [
                '5 години',
                'здравословен годишен ръст',
                'ускорение при силна икономика и инвестиции',
                'ръст близо до инфлацията при затягане на кредита',
              ],
              [
                '10 години',
                'дългосрочен ръст с цикли и паузи',
                'изпреварване при устойчив капиталов приток',
                'по-бавен ръст при демографски/регулаторни ограничения',
              ],
            ],
          },
          bullets: [
            'Големи градове (София/Пловдив/Варна): по-ликвидни и устойчиви.',
            'Курорти: силно циклични, зависими от туризъм/наеми.',
            'Селски райони: ниска входна цена, но много локална ликвидност.',
          ],
        },
        {
          h2: '4) Къде е по-вероятен ръст: локации и типове имоти',
          blocks: [
            {
              h3: 'София',
              p: [
                'Често води по цена, ликвидност и търсене за наем. Райони с добра инфраструктура, транспорт и качествено ново строителство обикновено задържат стойност най-добре.',
              ],
              bullets: [
                'Имоти до метро и бизнес зони често надминават средното.',
                'Качеството на сградата, разпределението и паркирането са важни.',
              ],
            },
            {
              h3: 'Пловдив',
              p: [
                'Силен индустриален и логистичен център. Търсенето се подкрепя от работни места и релокации. Качеството и свързаността са ключови.',
              ],
            },
            {
              h3: 'Варна / Бургас и морето',
              p: [
                'Крайбрежието е популярно за наеми и втори дом. Важно е да се различават премиум локации (гледка/първа линия/управление) от масови комплекси далеч от морето.',
              ],
              bullets: [
                'Доходността зависи силно от сезонност и управление.',
                'Сметнете всички разходи: поддръжка, ремонти, застраховка.',
              ],
            },
            {
              h3: 'Търговски имоти',
              p: [
                'Търговските имоти могат да дадат по-висока доходност, но изискват по-дълбока проверка на договори, наематели, предназначение и правен статус.',
              ],
            },
          ],
        },
        {
          h2: '5) Рискове, които често се подценяват',
          bullets: [
            'Надплащане в “хайп” период (цена без реални предимства спрямо аналози).',
            'Правни нюанси: собственост, тежести, разрешителни, статут на земя.',
            'Скрити разходи: поддръжка, данъци, ремонти, комунални услуги.',
            'Отслабване на търсенето за наем при ръст на предлагането.',
            'Качество на строителство и управление (особено в курортни комплекси).',
          ],
        },
        {
          h2: '6) Практичен чек-лист за купувача',
          bullets: [
            'Сравнете аналози: цена/м², състояние, етаж, гледка, инфраструктура.',
            'Проверете документите (най-добре с юрист): собственост, тежести, разрешителни.',
            'Оценете ликвидността: реално време за продажба/отдаване под наем.',
            'Сметнете общата цена на притежание: данъци + такси + ремонти + празни периоди.',
            'Ако целта е наем, планирайте управление предварително: резервации, почистване, поддръжка.',
          ],
        },
        {
          h2: '7) Заключение',
          p: [
            'България остава атрактивен пазар, но резултатът рядко зависи от “перфектен момент” и много повече — от локация, правна чистота и ясна стратегия (живеене / наем / препродажба).',
            'Ако ви трябват подбор, правна проверка, регистрация на фирма, преводи и легализация — това са услуги, които предоставяме “под ключ”.',
          ],
        },
      ],
    },
  }[lang];

  const keyInsights = {
    ru: [
      'Цены на недвижимость в Болгарии выросли примерно на 15% в годовом исчислении в начале 2025 года — второе место в ЕС по росту.',
      'София остаётся самым дорогим городом — около 2 250 евро/м², что всё ещё вдвое дешевле большинства европейских столиц.',
      'Введение евро снизило валютные риски для иностранных покупателей (по оценкам рынка).',
      'Ипотечные ставки в Болгарии остаются одними из самых низких в ЕС (ориентировочно 2,6%–4% по рынку).',
      'Новостройки в Софии, Варне и Пловдиве часто дорожают быстрее вторичного жилья — особенно в сильных локациях.',
      'Районы вдоль расширяющегося метро Софии нередко показывают рост выше среднего по городу.',
      'Сельская Болгария по-прежнему предлагает очень низкую цену входа, но ликвидность сильно локальна.',
      'Прогноз на 5 лет: сценарно возможен существенный совокупный рост при сохранении спроса и кредитования.',
    ],
    en: [
      "Bulgaria's property prices grew about 15% year-on-year in early 2025 — second in the EU for house price growth.",
      'Sofia remains the most expensive city at ~€2,250/m², still roughly half of most European capitals.',
      'Euro adoption has reduced currency risk for foreign buyers (market estimates).',
      'Mortgage rates in Bulgaria remain among the lowest in the EU (roughly 2.6%–4% market range).',
      'New-builds in Sofia, Varna, and Plovdiv often outperform older stock, especially in prime locations.',
      "Areas along Sofia's expanding metro corridors often see above-average price dynamics.",
      'Rural Bulgaria still offers a low entry price, but liquidity is highly local.',
      '5-year outlook: scenario-based potential for strong cumulative growth if demand and credit remain supportive.',
    ],
    bg: [
      'Цените на имотите в България нараснаха с около 15% на годишна база в началото на 2025 г. — второ място в ЕС по ръст.',
      'София остава най-скъпият пазар — около €2 250/м², все още приблизително наполовина спрямо много европейски столици.',
      'Приемането на еврото намалява валутния риск за чуждестранните купувачи (пазарни оценки).',
      'Ипотечните лихви в България остават сред най-ниските в ЕС (ориентировъчно 2,6%–4%).',
      'Новото строителство в София, Варна и Пловдив често се представя по-добре от старото — особено в силни локации.',
      'Райони около разширяващото се метро в София често показват динамика над средната.',
      'Селските райони имат ниска входна цена, но ликвидността е много локална.',
      'Перспектива 5 години: сценарно е възможен силен кумулативен ръст при устойчиво търсене и кредитиране.',
    ],
  }[lang];

  const icons = {
    ru: {
      why: 'Пазарен контекст',
      factors: 'Фактори',
      scenarios: 'Сценарии',
      locations: 'Локации',
      risks: 'Рискове',
      checklist: 'Чек-лист',
      conclusion: 'Заключение',
    },
    en: {
      why: 'Market Context',
      factors: 'Drivers',
      scenarios: 'Scenarios',
      locations: 'Locations',
      risks: 'Risks',
      checklist: 'Checklist',
      conclusion: 'Conclusion',
    },
    bg: {
      why: 'Контекст',
      factors: 'Фактори',
      scenarios: 'Сценарии',
      locations: 'Локации',
      risks: 'Рискове',
      checklist: 'Чек-лист',
      conclusion: 'Заключение',
    },
  }[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            {content.back}
          </Link>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {content.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              {content.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{content.title}</h1>

          <p className="text-lg text-muted-foreground mb-4">{content.subtitle}</p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{content.sourceLabel}</span>
            <a
              href="https://investropa.com/blogs/news/bulgaria-price-forecasts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              INVESTROPA <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 container max-w-4xl">
        {/* Key Insights */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            {content.insightsTitle}
          </h2>

          <ul className="space-y-3 text-sm">
            {keyInsights.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note / Disclaimer */}
        <div className="border rounded-xl p-6 mb-10 bg-background">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-primary" />
            {content.noteTitle}
          </h3>
          <p className="text-sm text-muted-foreground">{content.noteText}</p>
        </div>

        {/* Article Body */}
        <article className="space-y-10">
          {content.sections.map((s, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold leading-tight">{s.h2}</h2>

              {s.p?.map((p, pi) => (
                <p key={pi} className="text-base leading-7 text-foreground/90">
                  {p}
                </p>
              ))}

              {s.blocks?.map((b, bi) => (
                <div key={bi} className="rounded-xl border p-5 space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    {b.h3}
                  </h3>
                  {b.p?.map((bp, bpi) => (
                    <p key={bpi} className="text-sm leading-6 text-foreground/85">
                      {bp}
                    </p>
                  ))}
                  {b.bullets?.length ? (
                    <ul className="space-y-2 text-sm">
                      {b.bullets.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              {s.table ? (
                <div className="rounded-xl border overflow-hidden">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-accent/10">
                        <tr>
                          {s.table.head.map((h, hi) => (
                            <th key={hi} className="text-left p-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, ri) => (
                          <tr key={ri} className="border-t">
                            {row.map((cell, ci) => (
                              <td key={ci} className="p-3 align-top text-foreground/85">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}

              {s.bullets?.length ? (
                <ul className="space-y-2 text-sm">
                  {s.bullets.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Home className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>

        {/* Small internal TOC / badges (optional, keeps SEO-friendly structure visually) */}
        <div className="mt-12 border rounded-xl p-6 bg-accent/5">
          <h3 className="font-semibold mb-3">{lang === 'ru' ? 'Разделы статьи' : lang === 'bg' ? 'Раздели' : 'Sections'}</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full border">{icons.why}</span>
            <span className="px-2 py-1 rounded-full border">{icons.factors}</span>
            <span className="px-2 py-1 rounded-full border">{icons.scenarios}</span>
            <span className="px-2 py-1 rounded-full border">{icons.locations}</span>
            <span className="px-2 py-1 rounded-full border">{icons.risks}</span>
            <span className="px-2 py-1 rounded-full border">{icons.checklist}</span>
            <span className="px-2 py-1 rounded-full border">{icons.conclusion}</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BulgariaPriceForecastsArticle;
