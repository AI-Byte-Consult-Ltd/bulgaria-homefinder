import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Clock, AlertTriangle,
  CheckCircle, Euro, FileText, Landmark,
  TrendingUp, Shield, BarChart3, Info, Calculator,
  Building, Home, Wrench, Zap,
} from 'lucide-react';

const BulgariaOwnershipCostsArticle = () => {
  const { i18n } = useTranslation();
  const langRaw = (i18n.language || 'en').toLowerCase();
  const lang = langRaw.startsWith('ru') ? 'ru'
    : langRaw.startsWith('bg') ? 'bg'
    : langRaw.startsWith('de') ? 'de'
    : langRaw.startsWith('fr') ? 'fr'
    : 'en';

  const cover = {
  image_url:            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80&auto=format&fit=crop',
  og_image:             'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=630&q=80&auto=format&fit=crop',
  unsplash_author_name: 'Digital Marketing Agency NTWRK',
  unsplash_author_url:  'https://unsplash.com/@ntwrk_img',
  unsplash_photo_url:   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w',
};

  const BASE_URL = 'https://estate.aibyteconsult.com';
  const SLUG     = '/article/bulgaria-property-ownership-costs-2026';

  const metaByLang: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Cost of Owning Property in Bulgaria 2026: Taxes, Maintenance & Utilities | BulgariaEstate',
      description: 'Complete 2026 guide: property tax, resort maintenance fees €4–18/m²/month, utilities, insurance and rental management costs — with worked examples for coastal apartment and house.',
    },
    ru: {
      title: 'Стоимость содержания недвижимости в Болгарии 2026: налоги, такса поддержки, ЖКХ | BulgariaEstate',
      description: 'Полный анализ расходов на 2026 год: налог на имущество, такса поддержки €4–18/м²/мес, коммунальные, страховка — с примерами расчётов для апартамента у моря и загородного дома.',
    },
    bg: {
      title: 'Разходи за поддръжка на имот в България 2026: данъци, такса, комунални | BulgariaEstate',
      description: 'Пълен анализ за 2026 г.: данък върху имотите, такса поддръжка €4–18/м²/мес, комунални, застраховка — с примерни изчисления за апартамент на море и самостоятелна къща.',
    },
    de: {
      title: 'Laufende Kosten für Immobilien in Bulgarien 2026: Steuern, Gebühren, Nebenkosten | BulgariaEstate',
      description: 'Vollständige Kostenanalyse 2026: Grundsteuer, Instandhaltungsgebühren €4–18/m²/Monat, Nebenkosten, Versicherung — mit Berechnungsbeispielen für Küstenwohnung und Haus.',
    },
    fr: {
      title: 'Coûts de détention immobilière en Bulgarie 2026 : taxes, charges, services | BulgariaEstate',
      description: 'Analyse complète 2026 : taxe foncière, charges de copropriété €4–18/m²/mois, charges courantes, assurance — avec exemples de calcul pour appartement côtier et maison.',
    },
  };

  const meta = metaByLang[lang] ?? metaByLang['en'];

  const sources = [
    { label: 'NSI Bulgaria — Housing Price Statistics Q3 2025', url: 'https://www.nsi.bg/en/announcement/housing-price-statistics-third-quarter-of-2025-8900' },
    { label: 'НАП България — Данък върху недвижимите имоти 2026', url: 'https://nra.bg/wps/portal/nra/podatsi-i-osigurovki/mestni-danaci' },
    { label: 'Sofia Municipality — Property Tax Rates 2026', url: 'https://www.sofia.bg/property-tax' },
    { label: 'Burgas Municipality — Local Tax Rates 2025–2026', url: 'https://www.burgas.bg/bg/info/index/240' },
    { label: 'Global Property Guide — Bulgaria Ownership Costs 2025', url: 'https://www.globalpropertyguide.com/europe/bulgaria/Taxes-and-Costs' },
    { label: 'Investropa — Cost of Owning Property in Bulgaria 2025–2026', url: 'https://investropa.com/blogs/news/bulgaria-property-ownership-costs' },
    { label: 'SeaPropertiesBG — Resort Complex Maintenance Fee Analysis Oct 2025', url: 'https://seapropertiesbg.com/' },
    { label: 'Eurostat — Comparative Housing Costs EU 2025', url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php/Housing_cost_overburden_rate' },
  ];

  const translations: Record<string, any> = {

    /* ══════════════════════════════ RUSSIAN ══════════════════════════════ */
    ru: {
      back: 'На главную', date: '17 марта 2026', readTime: 'Время чтения: ~16 минут',
      title: 'Стоимость содержания недвижимости в Болгарии в 2026 году: полный анализ расходов для владельцев апартаментов и домов',
      subtitle: 'Налог на недвижимость, такса поддержки, коммунальные платежи, управление арендой, страховка — точные цифры на 2026 год с примерами расчётов для курортного апартамента и частного дома.',
      keyFactsTitle: 'Ключевые показатели — 2026',
      noteTitle: 'Важно',
      noteText: 'Муниципальные налоговые ставки и тарифы ЖКХ обновляются ежегодно. Данные актуальны на март 2026 года. Всегда уточняйте конкретные цифры для вашего объекта.',
      sourcesTitle: 'Источники',
      photoCreditLabel: 'Фото:', photoCreditOn: 'на',
      keyFacts: [
        'Ежегодный налог на недвижимость в Болгарии: 0,10%–0,45% от кадастровой (налоговой) оценки — не от рыночной стоимости.',
        'Кадастровая оценка составляет 20–40% от рыночной цены — реальная налоговая нагрузка исключительно низкая.',
        'Такса поддержки в курортных комплексах: €4–18/м²/месяц — разброс огромный, это ключевой параметр при выборе объекта.',
        'Коммунальные расходы (электричество + вода) для апартамента 60–70 м²: €30–80/месяц в зависимости от сезона.',
        'Управление арендой через управляющую компанию: 15–25% от арендного дохода.',
        'Страхование имущества: €100–350/год в зависимости от типа и стоимости объекта.',
        'Совокупные расходы на содержание апартамента у моря 65 м²: €1 200–4 800/год в зависимости от класса комплекса.',
        'По сравнению с Испанией, Францией и Германией — один из самых низких уровней расходов на содержание в ЕС.',
      ],
      sections: [
        {
          icon: 'info',
          h2: 'Почему расходы на содержание важнее, чем кажется',
          p: [
            'Цена покупки — это только начало. Реальная стоимость владения недвижимостью складывается из ежегодных обязательных платежей, которые идут вне зависимости от того, используете ли вы объект или сдаёте его в аренду. Инвестор, не учитывающий эти расходы при расчёте доходности, рискует получить результат, кардинально отличающийся от плана.',
            'В Болгарии расходы на содержание остаются одними из самых низких в ЕС — но с важным нюансом: разброс между дешёвыми и дорогими объектами внутри самой Болгарии может достигать 4–5 раз. Апартамент в бюджетном комплексе на Солнечном Берегу и аналогичная квартира в премиальном комплексе Свети Власа обойдутся принципиально по-разному в ежегодном содержании.',
            'Данная статья предоставляет точные расчётные данные для всех основных категорий расходов на 2026 год — с конкретными примерами для курортного апартамента и загородного дома.',
          ],
        },
        {
          icon: 'calculator',
          h2: 'Налог на недвижимость — механизм и реальные суммы',
          p: [
            'Болгарский налог на недвижимость (данък върху недвижимите имоти) рассчитывается с налоговой (кадастровой) оценки — не с рыночной стоимости. Налоговая оценка определяется муниципалитетом по государственной формуле и составляет, как правило, 20–40% от рыночной цены. Ставка налога устанавливается каждым муниципалитетом самостоятельно в диапазоне 0,01%–0,45%.',
          ],
          blocks: [
            {
              h3: 'Ставки основных муниципалитетов на 2026 год',
              bullets: [
                'София: 0,275% — минимальный налог на апартамент €150 000 ≈ €110–150/год',
                'Бургас: 0,21% — налог на апартамент €115 000 ≈ €67/год + такса за мусор €70',
                'Варна: 0,225% — налог на апартамент €145 000 ≈ €90/год',
                'Несебр (Солнечный Берег, Свети Влас): 0,22% — налог на апартамент €120 000 ≈ €66/год',
                'Созопол: 0,20% — самая низкая ставка среди прибрежных муниципалитетов',
                'Банско: 0,15%–0,18% — наименьшая ставка в Болгарии среди горнолыжных курортов',
              ],
            },
            {
              h3: 'Такса за вывоз мусора (такса смет) — отдельный обязательный сбор',
              bullets: [
                'Начисляется отдельно от налога на недвижимость муниципалитетом',
                'Диапазон: €35–150/год в зависимости от локации и размера объекта',
                'Курортные зоны: €80–150/год (повышенный объём отходов в сезон)',
                'Горные курорты (Банско, Пампорово): €40–80/год',
                'Городские квартиры (София, Пловдив): €60–100/год',
              ],
            },
          ],
        },
        {
          icon: 'building',
          h2: 'Такса поддержки — самая значимая статья расходов для курортного жилья',
          p: [
            'Такса поддержки (такса за поддръжка) — ежегодный платёж управляющей компании комплекса за обслуживание общей инфраструктуры: бассейн, ресепшн, охрана, озеленение, чистота территории, лифты, общие помещения. Это частный договорной платёж — он не является налогом, но столь же обязателен согласно договору с управляющей компанией.',
            'Именно такса поддержки — а не муниципальный налог — является ключевой статьёй ежегодных расходов для владельцев курортной недвижимости. Разброс ставок колоссален: от €4/м²/месяц в простых комплексах до €18/м²/месяц в премиальных закрытых резорт-комплексах с полным сервисом.',
          ],
          blocks: [
            {
              h3: 'Диапазоны такс поддержки по типу комплекса (2026)',
              bullets: [
                'Простые комплексы без охраны и бассейна: €4–6/м²/мес → апартамент 60 м² = €2 880–4 320/год',
                'Стандартные комплексы с бассейном и базовой охраной: €7–10/м²/мес → 60 м² = €5 040–7 200/год',
                'Комплексы среднего класса (бассейн, охрана 24/7, обслуживание): €10–14/м²/мес → 60 м² = €7 200–10 080/год',
                'Премиальные резорт-комплексы (рецепция, ресторан, SPA, полное обслуживание): €15–18/м²/мес → 60 м² = €10 800–12 960/год',
                'Средняя ставка по Солнечному Берегу и Свети Власу: €9–13/м²/мес',
                'Банско (горнолыжные комплексы): €3–8/м²/мес — существенно дешевле побережья',
              ],
            },
            {
              h3: 'Что критически важно знать перед покупкой',
              bullets: [
                'Такса поддержки не регулируется государством — управляющая компания устанавливает её самостоятельно',
                'Ставка может пересматриваться ежегодно — требуйте историю изменений за 3–5 лет',
                'Уточните, что именно входит в такса: некоторые комплексы взимают отдельно за парковку, лифт, бассейн',
                'При покупке в новостройке — уточняйте предполагаемую ставку поддержки, а не только цену квартиры',
                'Высокая такса поддержки критически снижает инвестиционный доход: при €500/мес аренды и €900/мес такса — объект убыточен',
              ],
            },
          ],
        },
        {
          icon: 'zap',
          h2: 'Коммунальные расходы: электричество, вода, интернет',
          p: [
            'Коммунальные расходы в Болгарии значительно ниже среднеевропейских. После вступления страны в еврозону с января 2026 года счета выставляются в евро, что упрощает планирование бюджета для иностранных владельцев.',
          ],
          blocks: [
            {
              h3: 'Электричество (ЧЕЗ / ЕВН)',
              bullets: [
                'Тариф: €0,12–0,16/кВт·ч (день), €0,07–0,09/кВт·ч (ночь) — бытовые потребители',
                'Апартамент 60–70 м², активное использование: €40–80/месяц (лето с кондиционером), €20–40/месяц (зима без обогрева)',
                'Дом 120–150 м² с электрическим отоплением: €120–250/месяц (зима)',
                'Дом с тепловым насосом: €60–120/месяц (зима) — наиболее эффективное решение',
                'Незанятый апартамент (только базовый учёт): €5–15/месяц',
              ],
            },
            {
              h3: 'Вода и канализация',
              bullets: [
                'Тариф: €1,20–2,10/м³ в зависимости от муниципалитета',
                'Апартамент с постоянным проживанием: €10–25/месяц',
                'Дом с садом и бассейном: €30–80/месяц (летний сезон)',
                'Для сезонного использования 3 месяца в год: €50–100 за сезон',
              ],
            },
            {
              h3: 'Интернет, ТВ, телефон',
              bullets: [
                'Широкополосный интернет 200–500 Мбит/с: €8–15/месяц',
                'Кабельное ТВ + интернет: €15–25/месяц',
                'Болгария имеет один из самых дешёвых интернетов в ЕС',
              ],
            },
          ],
        },
        {
          icon: 'home',
          h2: 'Управление недвижимостью при сдаче в аренду',
          p: [
            'Для иностранных владельцев, проживающих за пределами Болгарии, управление объектом через местную управляющую компанию или профессионального менеджера является стандартной практикой.',
          ],
          blocks: [
            {
              h3: 'Стоимость управления (2026)',
              bullets: [
                'Долгосрочная аренда (12 месяцев): 8–12% от ежемесячного дохода',
                'Краткосрочная аренда (Airbnb / Booking.com): 15–25% от дохода (включает коммуникацию с гостями, заселение, уборку)',
                'Комплексное управление (найм + ремонт + оплата счетов + отчётность): €100–250/месяц фиксированно + % от аренды',
                'Единоразовый поиск арендатора (долгосрочный): 50–100% от месячной аренды',
                'Подача налоговой декларации по аренде: €80–200/год (бухгалтер)',
              ],
            },
            {
              h3: 'Налог на арендный доход (напоминание)',
              bullets: [
                'Ставка: 10% от дохода после стандартного вычета 10% на расходы',
                'Эффективная ставка: 9% от валового арендного дохода',
                'Пример: €450/мес × 12 = €5 400 → налог €486/год',
                'Декларация подаётся до 30 апреля следующего года',
              ],
            },
          ],
        },
        {
          icon: 'shield',
          h2: 'Страхование и резерв на ремонт',
          blocks: [
            {
              h3: 'Страхование имущества',
              bullets: [
                'Базовое страхование апартамента (огонь, вода, кража): €80–160/год',
                'Расширенное страхование с гражданской ответственностью: €150–250/год',
                'Страхование дома (120–150 м² + участок): €200–400/год',
                'Страхование при сдаче в аренду (специальный полис): €180–350/год',
                'Страхование в Болгарии значительно дешевле, чем в Германии, Франции или Испании',
              ],
            },
            {
              h3: 'Резерв на текущий ремонт и замену оборудования',
              bullets: [
                'Рекомендуемый резерв: 0,5–1% от рыночной стоимости объекта в год',
                'Апартамент €120 000: резерв €600–1 200/год',
                'Дом €180 000: резерв €900–1 800/год',
                'Типичные статьи: замена бытовой техники, покраска, сантехника, замки, мебель',
                'Для объектов старше 15 лет — увеличить резерв до 1,5%/год',
              ],
            },
          ],
        },
        {
          icon: 'chart',
          h2: 'Примеры расчётов: апартамент у моря и загородный дом',
          blocks: [
            {
              h3: 'Апартамент 65 м², Свети Влас / Солнечный Берег, рыночная стоимость €120 000',
              bullets: [
                'Налог на недвижимость (0,22% от оценки ~€30 000): €66/год',
                'Такса за мусор: €110/год',
                'Такса поддержки (€10/м²/мес, средний комплекс): €7 800/год',
                'Коммунальные (сезонное использование, 3 мес): €200/год',
                'Страхование: €160/год',
                'Резерв на ремонт (0,7%): €840/год',
                '─────────────────────────────',
                'ИТОГО (без управления): ~€9 176/год (≈€765/мес)',
                'При сдаче через управляющую компанию (+20% от €450/мес × 12): +€1 080/год',
                'ИТОГО с управлением аренды: ~€10 256/год',
                'Арендный доход (€450/мес × 12): €5 400/год — объект операционно убыточен при данной такса поддержки',
                'ВЫВОД: При ставке поддержки выше €8/м²/мес — искать комплексы с программой гарантированной доходности или платить за апартамент меньше €80 000',
              ],
            },
            {
              h3: 'Апартамент 65 м², бюджетный комплекс без бассейна, Равда / Поморие, стоимость €65 000',
              bullets: [
                'Налог на недвижимость: €35/год',
                'Такса за мусор: €80/год',
                'Такса поддержки (€5/м²/мес): €3 900/год',
                'Коммунальные: €150/год',
                'Страхование: €100/год',
                'Резерв на ремонт (0,7%): €455/год',
                '─────────────────────────────',
                'ИТОГО: ~€4 720/год (≈€393/мес)',
                'Арендный доход (€350/мес × 12): €4 200/год → операционно близко к нулю',
                'ВЫВОД: Объект интересен для личного использования; доходность от аренды минимальна',
              ],
            },
            {
              h3: 'Дом 130 м² + участок 500 м², Бургасская область, 10 км от моря, стоимость €85 000',
              bullets: [
                'Налог на недвижимость (0,21% от оценки ~€22 000): €46/год',
                'Такса за мусор: €60/год',
                'Такса поддержки: €0 (отдельный дом)',
                'Электричество (постоянное проживание): €120/мес → €1 440/год',
                'Вода: €25/мес → €300/год',
                'Интернет + ТВ: €20/мес → €240/год',
                'Страхование дома: €250/год',
                'Резерв на ремонт (0,8%): €680/год',
                'Обслуживание участка (газон, сезонные работы): €300/год',
                '─────────────────────────────',
                'ИТОГО (постоянное проживание): ~€3 316/год (≈€276/мес)',
                'ИТОГО (сезонное использование 3 мес): ~€1 800/год',
                'ВЫВОД: Отдельный дом — наиболее экономичный вариант с точки зрения годовых расходов',
              ],
            },
          ],
        },
        {
          icon: 'info',
          h2: 'Болгария vs другие страны ЕС: сравнение расходов на содержание',
          blocks: [
            {
              h3: 'Ежегодные расходы на содержание апартамента €120 000 / 65 м² (налог + коммунальные + страховка, без управления)',
              bullets: [
                'Болгария (Бургас, базовый комплекс): €500–700/год — без такса поддержки',
                'Болгария (Солнечный Берег, премиальный комплекс): €8 000–12 000/год — с высокой такса',
                'Испания (Коста Бланка): €1 500–2 500/год — коммунальный сбор ОСС + налог IBI',
                'Черногория: €800–1 400/год',
                'Греция (острова): €1 200–2 200/год',
                'Германия (Бавария): €2 500–4 000/год — Hausgeld + Grundsteuer',
                'Франция (Лазурный Берег): €3 500–6 000/год — charges de copropriété + taxe foncière',
                'Португалия (Алгарве): €1 800–3 000/год',
                'ВЫВОД: Болгария без высокой такса — дешевле большинства альтернатив. Болгария с высокой такса — сопоставима с Испанией и Грецией',
              ],
            },
          ],
        },
        {
          icon: 'strategy',
          h2: 'Для кого это выгодно: инвестиционная перспектива',
          p: [
            'Болгарская недвижимость остаётся финансово привлекательной для трёх категорий покупателей в 2026 году.',
          ],
          blocks: [
            {
              h3: 'Категория 1: Владелец для личного использования',
              bullets: [
                'Отдельный дом или апартамент в небольшом комплексе с таксой до €6/м²/мес',
                'Ежегодные расходы на содержание: €1 500–4 000/год',
                'При сравнении с арендой аналогичного жилья за рубежом — содержание обходится в разы дешевле',
                'Налог на имущество не превышает €200/год для большинства объектов',
              ],
            },
            {
              h3: 'Категория 2: Инвестор в долгосрочную аренду',
              bullets: [
                'Целевые объекты: квартиры в Бургасе, Варне, Пловдиве — рынки с постоянным арендным спросом',
                'Такса поддержки в городских жилых домах: €0–2/м²/мес (несравнимо дешевле курортных)',
                'Доходность 4–7% годовых при правильном выборе объекта',
                'Расходы на содержание городской квартиры: €500–1 200/год',
              ],
            },
            {
              h3: 'Категория 3: Инвестор в краткосрочную аренду',
              bullets: [
                'Критически важен выбор комплекса с низкой таксой поддержки (до €7/м²/мес)',
                'При ставке €8+ — инвестиция в краткосрочную аренду требует очень высокой загрузки для выхода в плюс',
                'Оптимальная формула: покупная цена до €1 200/м² + такса до €7/м²/мес + арендный доход от €400/мес',
                'Евро с 2026 года упростило финансовое планирование для европейских инвесторов',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          h2: 'Вывод',
          p: [
            'Болгария предлагает один из самых низких уровней налогообложения недвижимости в ЕС. Муниципальный налог на большинство объектов не превышает €100–200/год. Ключевая переменная, определяющая реальный уровень расходов — такса поддержки курортного комплекса. Разница между €5 и €15/м²/мес на объекте 65 м² составляет €7 800/год — больше, чем стоимость всех остальных расходов вместе взятых.',
            'Покупатель, анализирующий объект только по цене покупки, рискует приобрести актив с отрицательным денежным потоком. Профессиональный подход требует полного моделирования стоимости владения до подписания договора.',
          ],
        },
      ],
    },

    /* ══════════════════════════════ ENGLISH ══════════════════════════════ */
    en: {
      back: 'Back to Home', date: 'March 17, 2026', readTime: 'Reading time: ~16 minutes',
      title: 'Cost of Owning Property in Bulgaria in 2026: Complete Analysis for Apartment and House Owners',
      subtitle: 'Property tax, maintenance fees, utilities, rental management, insurance — exact 2026 figures with calculation examples for a coastal apartment and a detached house.',
      keyFactsTitle: 'Key Figures — 2026',
      noteTitle: 'Note',
      noteText: 'Municipal tax rates and utility tariffs are updated annually. Data is current as of March 2026. Always verify exact figures for your specific property.',
      sourcesTitle: 'Sources',
      photoCreditLabel: 'Photo:', photoCreditOn: 'on',
      keyFacts: [
        'Annual property tax in Bulgaria: 0.10%–0.45% of the municipal assessed value — not market value.',
        'Municipal assessed value is typically 20–40% of market price — effective tax burden is exceptionally low.',
        'Complex maintenance fees in resort areas: €4–18/m²/month — the single most impactful ownership cost variable.',
        'Utilities (electricity + water) for a 60–70 m² apartment: €30–80/month depending on season and usage.',
        'Professional rental management: 15–25% of rental income for short-term lets.',
        'Property insurance: €100–350/year depending on property type and value.',
        'Total annual ownership cost for a 65 m² coastal apartment: €1,200–12,000/year — entirely driven by maintenance fee class.',
        'Bulgaria remains one of the lowest-cost EU countries for property ownership — if maintenance fees are controlled.',
      ],
      sections: [
        {
          icon: 'info',
          h2: 'Why ownership costs matter more than the purchase price',
          p: [
            'The purchase price is only the entry point. The true cost of ownership is determined by the annual recurring obligations that apply regardless of whether the property is occupied or let. An investor who ignores these costs when calculating yield will arrive at a return figure that bears little relationship to reality.',
            'In Bulgaria, ownership costs are among the lowest in the EU — but with a critical caveat: the spread between low-cost and high-cost properties within Bulgaria itself can be 4–5x. An apartment in a basic Sunny Beach complex and a comparable unit in a premium Sveti Vlas resort will cost fundamentally different amounts to hold annually.',
            'This article provides precise 2026 figures for all major cost categories, with worked examples for a coastal apartment and a rural house.',
          ],
        },
        {
          icon: 'calculator',
          h2: 'Property tax — mechanism and real amounts',
          p: [
            'Bulgarian property tax (данък върху недвижимите имоти) is calculated on the municipal assessed value — not market value. The assessed value is set by a government formula and typically equals 20–40% of the market price. Each municipality sets its own rate within a band of 0.01%–0.45%.',
          ],
          blocks: [
            {
              h3: 'Key municipal rates for 2026',
              bullets: [
                'Sofia: 0.275% — tax on a €150,000 apartment ≈ €110–150/year',
                'Burgas: 0.21% — tax on a €115,000 apartment ≈ €67/year + garbage fee €70',
                'Varna: 0.225% — tax on a €145,000 apartment ≈ €90/year',
                'Nessebar (Sunny Beach, Sveti Vlas): 0.22% — tax on a €120,000 apartment ≈ €66/year',
                'Sozopol: 0.20% — lowest rate among coastal municipalities',
                'Bansko: 0.15%–0.18% — lowest rates in Bulgaria among ski resorts',
              ],
            },
            {
              h3: 'Garbage collection fee (такса смет) — separate mandatory charge',
              bullets: [
                'Charged separately from property tax by the municipality',
                'Range: €35–150/year depending on location and property size',
                'Resort zones: €80–150/year (higher waste volumes in season)',
                'Mountain resorts (Bansko, Pamporovo): €40–80/year',
                'City apartments (Sofia, Plovdiv): €60–100/year',
              ],
            },
          ],
        },
        {
          icon: 'building',
          h2: 'Complex maintenance fee — the defining cost for resort property',
          p: [
            'The maintenance fee (такса за поддръжка) is the annual payment to the complex management company for shared infrastructure: pool, reception, security, landscaping, cleaning, lifts, common areas. This is a private contractual charge — not a tax — but it is equally non-negotiable under the management agreement.',
            'The maintenance fee — not the municipal tax — is the primary annual cost driver for resort property owners. Rates range from €4/m²/month in basic complexes to €18/m²/month in full-service premium resort complexes.',
          ],
          blocks: [
            {
              h3: 'Maintenance fee ranges by complex class (2026)',
              bullets: [
                'Basic complex (no pool, no security): €4–6/m²/month → 60 m² apartment = €2,880–4,320/year',
                'Standard complex (pool, basic security): €7–10/m²/month → 60 m² = €5,040–7,200/year',
                'Mid-range complex (pool, 24/7 security, maintenance): €10–14/m²/month → 60 m² = €7,200–10,080/year',
                'Premium resort complex (reception, restaurant, SPA, full service): €15–18/m²/month → 60 m² = €10,800–12,960/year',
                'Average rate in Sunny Beach and Sveti Vlas: €9–13/m²/month',
                'Bansko ski complexes: €3–8/m²/month — significantly cheaper than the coast',
              ],
            },
            {
              h3: 'Critical due diligence points before purchase',
              bullets: [
                'Maintenance fees are not regulated — the management company sets them independently',
                'The rate can be revised annually — request the history of changes for the past 3–5 years',
                'Verify exactly what is included: some complexes charge separately for parking, lift, pool access',
                'For off-plan purchases: confirm the anticipated maintenance fee, not just the purchase price',
                'A high maintenance fee can destroy investment economics: at €500/month rent and €900/month maintenance — the asset generates negative cash flow',
              ],
            },
          ],
        },
        {
          icon: 'zap',
          h2: 'Utilities: electricity, water, internet',
          blocks: [
            {
              h3: 'Electricity (ЧЕЗ / ЕВН)',
              bullets: [
                'Tariff: €0.12–0.16/kWh (day rate), €0.07–0.09/kWh (night rate) — residential consumers',
                '60–70 m² apartment, active use: €40–80/month (summer with A/C), €20–40/month (winter, no heating)',
                '120–150 m² house with electric heating: €120–250/month (winter)',
                'House with heat pump: €60–120/month (winter) — most cost-efficient solution',
                'Vacant apartment (meter fee only): €5–15/month',
              ],
            },
            {
              h3: 'Water and sewage',
              bullets: [
                'Tariff: €1.20–2.10/m³ depending on municipality',
                'Apartment with permanent occupancy: €10–25/month',
                'House with garden and pool: €30–80/month (summer season)',
                'Seasonal use (3 months/year): €50–100 for the season',
              ],
            },
            {
              h3: 'Internet, TV, phone',
              bullets: [
                'Broadband 200–500 Mbps: €8–15/month',
                'Cable TV + internet bundle: €15–25/month',
                'Bulgaria has one of the cheapest internet costs in the EU',
              ],
            },
          ],
        },
        {
          icon: 'chart',
          h2: 'Calculation examples: coastal apartment and detached house',
          blocks: [
            {
              h3: 'Apartment 65 m², Sveti Vlas / Sunny Beach, market value €120,000',
              bullets: [
                'Property tax (0.22% on assessed value ~€30,000): €66/year',
                'Garbage fee: €110/year',
                'Maintenance fee (€10/m²/month, mid-range complex): €7,800/year',
                'Utilities (seasonal use, 3 months): €200/year',
                'Insurance: €160/year',
                'Repair reserve (0.7%): €840/year',
                '─────────────────────────────',
                'TOTAL (without rental management): ~€9,176/year (≈€765/month)',
                'At €450/month rent × 12 = €5,400 gross rental income',
                'NET after tax (9%): €4,914 — asset generates negative operating cash flow at this maintenance fee level',
                'CONCLUSION: At €10+/m²/month maintenance, seek complexes with guaranteed yield programs or target purchase prices below €80,000',
              ],
            },
            {
              h3: 'Apartment 65 m², basic complex without pool, Ravda / Pomorie, value €65,000',
              bullets: [
                'Property tax: €35/year',
                'Garbage fee: €80/year',
                'Maintenance fee (€5/m²/month): €3,900/year',
                'Utilities: €150/year',
                'Insurance: €100/year',
                'Repair reserve (0.7%): €455/year',
                '─────────────────────────────',
                'TOTAL: ~€4,720/year (≈€393/month)',
                'Rental income (€350/month × 12): €4,200 — near breakeven operationally',
                'CONCLUSION: Suitable for personal use; rental yield is minimal',
              ],
            },
            {
              h3: 'House 130 m² + 500 m² plot, Burgas region, 10 km from sea, value €85,000',
              bullets: [
                'Property tax (0.21% on assessed value ~€22,000): €46/year',
                'Garbage fee: €60/year',
                'Maintenance fee: €0 (standalone house)',
                'Electricity (permanent occupancy): €120/month → €1,440/year',
                'Water: €25/month → €300/year',
                'Internet + TV: €20/month → €240/year',
                'House insurance: €250/year',
                'Repair reserve (0.8%): €680/year',
                'Garden / seasonal maintenance: €300/year',
                '─────────────────────────────',
                'TOTAL (permanent occupancy): ~€3,316/year (≈€276/month)',
                'TOTAL (seasonal use, 3 months): ~€1,800/year',
                'CONCLUSION: Detached house is the most cost-efficient ownership structure in Bulgaria',
              ],
            },
          ],
        },
        {
          icon: 'info',
          h2: 'Bulgaria vs other EU countries: ownership cost comparison',
          blocks: [
            {
              h3: 'Annual ownership costs for a €120,000 / 65 m² apartment (tax + utilities + insurance, excluding management)',
              bullets: [
                'Bulgaria (Burgas, basic complex): €500–700/year — without maintenance fee',
                'Bulgaria (Sunny Beach, premium complex): €8,000–12,000/year — with high maintenance fee',
                'Spain (Costa Blanca): €1,500–2,500/year — HOA charges + IBI tax',
                'Montenegro: €800–1,400/year',
                'Greece (islands): €1,200–2,200/year',
                'Germany (Bavaria): €2,500–4,000/year — Hausgeld + Grundsteuer',
                "France (Côte d'Azur): €3,500–6,000/year — charges de copropriété + taxe foncière",
                'Portugal (Algarve): €1,800–3,000/year',
                'CONCLUSION: Bulgaria without high maintenance fee is cheaper than most alternatives. Bulgaria with high maintenance fee is comparable to Spain and Greece.',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          h2: 'Conclusion',
          p: [
            'Bulgaria offers one of the lowest property tax regimes in the EU. Municipal tax on most properties does not exceed €100–200/year. The defining cost variable is the resort complex maintenance fee. The difference between €5 and €15/m²/month on a 65 m² apartment is €7,800/year — more than all other ownership costs combined.',
            'A buyer who analyses a property purely on purchase price risks acquiring an asset with negative cash flow. A professional approach requires full ownership cost modelling before any purchase commitment.',
          ],
        },
      ],
    },

    /* ══════════════════════════════ BULGARIAN ══════════════════════════════ */
    bg: {
      back: 'Към началото', date: '17 март 2026', readTime: 'Време за четене: ~16 минути',
      title: 'Разходи за поддръжка на апартамент и дом в България 2026 г.: пълен анализ за собственици',
      subtitle: 'Данък върху имотите, такса поддръжка, комунални разходи, управление под наем, застраховка — точни цифри за 2026 г. с примери за апартамент на море и самостоятелна къща.',
      keyFactsTitle: 'Ключови показатели — 2026',
      noteTitle: 'Важно',
      noteText: 'Общинските данъчни ставки и комуналните тарифи се актуализират ежегодно. Данните са актуални към март 2026 г. Проверявайте конкретните стойности за вашия имот.',
      sourcesTitle: 'Източници',
      photoCreditLabel: 'Снимка:', photoCreditOn: 'в',
      keyFacts: [
        'Годишен данък върху имотите в България: 0,10%–0,45% от данъчната оценка — не от пазарната стойност.',
        'Данъчната оценка е 20–40% от пазарната цена — реалната данъчна тежест е изключително ниска.',
        'Такса поддръжка в курортни комплекси: €4–18/м²/месец — ключовият параметър при избор на имот.',
        'Комунални разходи (ток + вода) за апартамент 60–70 м²: €30–80/месец в зависимост от сезона.',
        'Управление под наем чрез управляваща компания: 15–25% от наемния доход.',
        'Застраховка на имущество: €100–350/год. в зависимост от типа и стойността на имота.',
        'Общи годишни разходи за апартамент 65 м² на море: €1 200–12 000/год. — изцяло определени от класа такса поддръжка.',
        'България остава една от най-евтините страни за притежание на имот в ЕС при разумна такса поддръжка.',
      ],
      sections: [
        {
          icon: 'info',
          h2: 'Защо разходите за поддръжка са по-важни от покупната цена',
          p: [
            'Покупната цена е само входната точка. Реалната стойност на притежанието се определя от ежегодните задължителни плащания, независимо дали използвате имота или го отдавате под наем.',
            'В България разходите за поддръжка са сред най-ниските в ЕС — но с важен нюанс: разликата между евтин и скъп имот в рамките на самата България може да достигне 4–5 пъти.',
          ],
        },
        {
          icon: 'calculator',
          h2: 'Данък върху имотите — механизъм и реални суми',
          blocks: [
            {
              h3: 'Ставки на основните общини за 2026 г.',
              bullets: [
                'София: 0,275% — данък за апартамент €150 000 ≈ €110–150/год.',
                'Бургас: 0,21% — данък за апартамент €115 000 ≈ €67/год. + такса смет €70',
                'Варна: 0,225% — данък за апартамент €145 000 ≈ €90/год.',
                'Несебър (Слънчев бряг, Свети Влас): 0,22% — данък за апартамент €120 000 ≈ €66/год.',
                'Созопол: 0,20% — най-ниска ставка сред крайбрежните общини',
                'Банско: 0,15%–0,18% — най-ниски ставки в България',
              ],
            },
          ],
        },
        {
          icon: 'building',
          h2: 'Такса поддръжка — основният разход за курортни имоти',
          p: ['Таксата за поддръжка е годишното плащане към управляващата компания на комплекса за обслужване на общата инфраструктура. Именно тя — а не общинският данък — е основният разход за собствениците на курортни имоти.'],
          blocks: [
            {
              h3: 'Диапазони такси поддръжка по клас комплекс (2026 г.)',
              bullets: [
                'Базисни комплекси без охрана и басейн: €4–6/м²/мес → 60 м² = €2 880–4 320/год.',
                'Стандартни комплекси с басейн: €7–10/м²/мес → 60 м² = €5 040–7 200/год.',
                'Комплекси среден клас: €10–14/м²/мес → 60 м² = €7 200–10 080/год.',
                'Премиални резорт-комплекси (рецепция, ресторант, SPA): €15–18/м²/мес → 60 м² = €10 800–12 960/год.',
                'Средна ставка на Слънчев бряг и Свети Влас: €9–13/м²/мес',
                'Банско (ски комплекси): €3–8/м²/мес — значително по-евтино от крайбрежието',
              ],
            },
          ],
        },
        {
          icon: 'chart',
          h2: 'Примерни изчисления',
          blocks: [
            {
              h3: 'Апартамент 65 м², Свети Влас, €120 000',
              bullets: [
                'Данък имоти: €66/год.', 'Такса смет: €110/год.', 'Такса поддръжка (€10/м²/мес): €7 800/год.',
                'Комунални (сезонно): €200/год.', 'Застраховка: €160/год.', 'Резерв ремонти: €840/год.',
                '───────', 'ОБЩО: ~€9 176/год. (≈€765/мес.)',
                'Наемен доход €450/мес × 12 = €5 400 — отрицателен паричен поток при тази такса',
              ],
            },
            {
              h3: 'Самостоятелна къща 130 м², Бургаска област, €85 000',
              bullets: [
                'Данък имоти: €46/год.', 'Такса смет: €60/год.', 'Такса поддръжка: €0',
                'Ток (постоянно живеене): €1 440/год.', 'Вода: €300/год.', 'Интернет + ТВ: €240/год.',
                'Застраховка: €250/год.', 'Резерв ремонти: €680/год.',
                '───────', 'ОБЩО (постоянно): ~€3 316/год. (≈€276/мес.)',
                'ИЗВОД: Самостоятелната къща е най-икономичният вариант за притежание',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          h2: 'Извод',
          p: [
            'България предлага едни от най-ниските данъци върху имотите в ЕС. Общинският данък за повечето обекти не надвишава €100–200/год. Ключовата променлива е таксата поддръжка на комплекса.',
            'Купувачът, анализиращ обекта само по покупна цена, рискува да придобие актив с отрицателен паричен поток.',
          ],
        },
      ],
    },

    /* ══════════════════════════════ GERMAN ══════════════════════════════ */
    de: {
      back: 'Zur Startseite', date: '17. März 2026', readTime: 'Lesezeit: ~16 Minuten',
      title: 'Laufende Kosten für Wohnungen und Häuser in Bulgarien 2026: Vollständige Kostenanalyse für Eigentümer',
      subtitle: 'Grundsteuer, Instandhaltungsgebühren, Nebenkosten, Mietverwaltung, Versicherung — exakte Zahlen für 2026 mit Berechnungsbeispielen für eine Küstenwohnung und ein Einfamilienhaus.',
      keyFactsTitle: 'Schlüsselkennzahlen — 2026',
      noteTitle: 'Hinweis',
      noteText: 'Kommunale Steuersätze und Versorgungstarife werden jährlich aktualisiert. Die Angaben entsprechen dem Stand März 2026.',
      sourcesTitle: 'Quellen',
      photoCreditLabel: 'Foto:', photoCreditOn: 'auf',
      keyFacts: [
        'Jährliche Grundsteuer in Bulgarien: 0,10%–0,45% des kommunalen Einheitswerts — nicht des Marktwerts.',
        'Der Einheitswert entspricht 20–40% des Marktpreises — die effektive Steuerbelastung ist außerordentlich gering.',
        'Instandhaltungsgebühr in Resortkomplexen: €4–18/m²/Monat — die entscheidende Kostenvariable.',
        'Nebenkosten (Strom + Wasser) für eine 60–70 m² Wohnung: €30–80/Monat je nach Saison.',
        'Professionelle Mietverwaltung: 15–25% des Mieteinkommens bei Kurzzeitvermietung.',
        'Gebäudeversicherung: €100–350/Jahr je nach Immobilientyp und -wert.',
        'Gesamte Jahreskosten für eine 65 m² Küstenwohnung: €1.200–12.000/Jahr.',
        'Bulgarien bleibt eines der kostengünstigsten EU-Länder für Immobilieneigentümer.',
      ],
      sections: [
        {
          icon: 'info',
          h2: 'Warum laufende Kosten wichtiger sind als der Kaufpreis',
          p: [
            'Der Kaufpreis ist lediglich der Einstiegspunkt. Die tatsächlichen Eigentumskosten werden durch die jährlichen Fixverpflichtungen bestimmt, die unabhängig von Nutzung oder Vermietung anfallen.',
            'In Bulgarien gehören die Eigentumskosten zu den niedrigsten in der EU — mit einem entscheidenden Vorbehalt: Die Bandbreite zwischen günstigen und teuren Objekten kann 4–5-fach sein.',
          ],
        },
        {
          icon: 'calculator',
          h2: 'Grundsteuer — Mechanismus und reale Beträge',
          blocks: [{
            h3: 'Kommunale Steuersätze 2026',
            bullets: [
              'Sofia: 0,275% — Steuer auf €150.000 Wohnung ≈ €110–150/Jahr',
              'Burgas: 0,21% — Steuer auf €115.000 Wohnung ≈ €67/Jahr + Müllgebühr €70',
              'Varna: 0,225% — Steuer auf €145.000 Wohnung ≈ €90/Jahr',
              'Nessebar (Sunny Beach, Sveti Vlas): 0,22% — Steuer auf €120.000 Wohnung ≈ €66/Jahr',
              'Sozopol: 0,20% — niedrigster Satz unter Küstengemeinden',
              'Bansko: 0,15%–0,18% — niedrigste Sätze Bulgariens',
            ],
          }],
        },
        {
          icon: 'building',
          h2: 'Instandhaltungsgebühr — die entscheidende Kostengröße',
          p: ['Die Instandhaltungsgebühr ist die primäre Jahreskostengröße für Resort-Immobilieneigentümer — nicht die Gemeindesteuer.'],
          blocks: [{
            h3: 'Instandhaltungsgebühren nach Komplexklasse (2026)',
            bullets: [
              'Basiskomplexe: €4–6/m²/Monat → 60 m² = €2.880–4.320/Jahr',
              'Standardkomplexe: €7–10/m²/Monat → 60 m² = €5.040–7.200/Jahr',
              'Mittelklasse: €10–14/m²/Monat → 60 m² = €7.200–10.080/Jahr',
              'Premium-Resorts: €15–18/m²/Monat → 60 m² = €10.800–12.960/Jahr',
              'Bansko Skikomplexe: €3–8/m²/Monat — deutlich günstiger als Küste',
            ],
          }],
        },
        {
          icon: 'chart',
          h2: 'Berechnungsbeispiele',
          blocks: [
            {
              h3: 'Wohnung 65 m², Sveti Vlas, €120.000',
              bullets: [
                'Grundsteuer: €66/Jahr', 'Müllgebühr: €110/Jahr', 'Instandhaltung (€10/m²/Monat): €7.800/Jahr',
                'Nebenkosten: €200/Jahr', 'Versicherung: €160/Jahr', 'Reparaturreserve: €840/Jahr',
                '───────', 'GESAMT: ~€9.176/Jahr (≈€765/Monat)',
                'Mieteinnahmen €450 × 12 = €5.400 — negativer Cashflow bei dieser Gebühr',
              ],
            },
            {
              h3: 'Haus 130 m², Region Burgas, €85.000',
              bullets: [
                'Grundsteuer: €46/Jahr', 'Müllgebühr: €60/Jahr', 'Instandhaltung: €0',
                'Strom: €1.440/Jahr', 'Wasser: €300/Jahr', 'Internet + TV: €240/Jahr',
                'Versicherung: €250/Jahr', 'Reparaturreserve: €680/Jahr',
                '───────', 'GESAMT: ~€3.316/Jahr (≈€276/Monat)',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          h2: 'Fazit',
          p: [
            'Bulgarien bietet eine der niedrigsten Grundsteuerbelastungen in der EU. Die entscheidende Kostenvariable ist die Instandhaltungsgebühr des Resortkomplexes — nicht die Gemeindesteuer.',
            'Eine professionelle Vorgehensweise erfordert eine vollständige Eigentumskosten-Modellierung vor jeder Kaufentscheidung.',
          ],
        },
      ],
    },

    /* ══════════════════════════════ FRENCH ══════════════════════════════ */
    fr: {
      back: "Retour à l'accueil", date: '17 mars 2026', readTime: 'Temps de lecture : ~16 minutes',
      title: "Coûts de détention d'un appartement ou d'une maison en Bulgarie en 2026 : analyse complète",
      subtitle: 'Taxe foncière, charges de copropriété, charges courantes, gestion locative, assurance — chiffres précis pour 2026 avec exemples de calcul.',
      keyFactsTitle: 'Chiffres clés — 2026',
      noteTitle: 'Note importante',
      noteText: "Les taux d'imposition municipaux et les tarifs des services sont mis à jour annuellement. Les données sont à jour en mars 2026.",
      sourcesTitle: 'Sources',
      photoCreditLabel: 'Photo :', photoCreditOn: 'sur',
      keyFacts: [
        "Taxe foncière annuelle en Bulgarie : 0,10%–0,45% de la valeur cadastrale — non de la valeur marchande.",
        'La valeur cadastrale représente 20–40% du prix du marché.',
        "Charges de copropriété dans les complexes balnéaires : €4–18/m²/mois — variable déterminante.",
        "Charges courantes (électricité + eau) pour 60–70 m² : €30–80/mois selon la saison.",
        'Gestion locative professionnelle : 15–25% des revenus locatifs.',
        'Assurance habitation : €100–350/an.',
        "Coût total annuel d'un appartement côtier 65 m² : €1 200–12 000/an.",
        "La Bulgarie reste l'un des pays de l'UE les moins coûteux pour la détention immobilière.",
      ],
      sections: [
        {
          icon: 'info',
          h2: "Pourquoi les coûts de détention comptent plus que le prix d'achat",
          p: [
            "Le prix d'achat n'est que le point d'entrée. Le coût réel est déterminé par les obligations annuelles récurrentes.",
            "En Bulgarie, l'écart entre un bien peu coûteux et un bien onéreux peut atteindre 4 à 5 fois.",
          ],
        },
        {
          icon: 'calculator',
          h2: 'Taxe foncière — mécanisme et montants réels',
          blocks: [{
            h3: 'Taux communaux 2026',
            bullets: [
              'Sofia : 0,275% — taxe sur €150 000 ≈ €110–150/an',
              'Burgas : 0,21% — taxe sur €115 000 ≈ €67/an + ordures €70',
              'Varna : 0,225% — taxe sur €145 000 ≈ €90/an',
              'Nessebar : 0,22% — taxe sur €120 000 ≈ €66/an',
              'Sozopol : 0,20% — taux le plus bas parmi les communes côtières',
              'Bansko : 0,15%–0,18% — taux les plus bas de Bulgarie',
            ],
          }],
        },
        {
          icon: 'building',
          h2: 'Charges de copropriété — le poste déterminant',
          p: ["La charge de copropriété est le principal poste de coût annuel — non la taxe municipale."],
          blocks: [{
            h3: 'Fourchettes selon la classe du complexe (2026)',
            bullets: [
              'Complexes basiques : €4–6/m²/mois → 60 m² = €2 880–4 320/an',
              'Complexes standard : €7–10/m²/mois → 60 m² = €5 040–7 200/an',
              'Classe intermédiaire : €10–14/m²/mois → 60 m² = €7 200–10 080/an',
              'Complexes premium : €15–18/m²/mois → 60 m² = €10 800–12 960/an',
              'Bansko : €3–8/m²/mois — nettement moins cher que le littoral',
            ],
          }],
        },
        {
          icon: 'chart',
          h2: 'Exemples de calcul',
          blocks: [
            {
              h3: 'Appartement 65 m², Sveti Vlas, €120 000',
              bullets: [
                'Taxe foncière : €66/an', 'Taxe ordures : €110/an', 'Charges (€10/m²/mois) : €7 800/an',
                'Charges courantes : €200/an', 'Assurance : €160/an', 'Réserve travaux : €840/an',
                '───────', 'TOTAL : ~€9 176/an (≈€765/mois)',
                'Revenus locatifs €450 × 12 = €5 400 — cash-flow négatif à ce niveau de charges',
              ],
            },
            {
              h3: 'Maison 130 m², région de Burgas, €85 000',
              bullets: [
                'Taxe foncière : €46/an', 'Taxe ordures : €60/an', 'Charges : €0',
                'Électricité : €1 440/an', 'Eau : €300/an', 'Internet + TV : €240/an',
                'Assurance : €250/an', 'Réserve travaux : €680/an',
                '───────', 'TOTAL : ~€3 316/an (≈€276/mois)',
              ],
            },
          ],
        },
        {
          icon: 'conclusion',
          h2: 'Conclusion',
          p: [
            "La Bulgarie offre l'un des régimes de taxe foncière les plus avantageux de l'UE. La variable déterminante est la charge de copropriété.",
            "Une approche professionnelle exige une modélisation complète des coûts avant tout engagement.",
          ],
        },
      ],
    },
  };

  const d = translations[lang] ?? translations['en'];

  const iconMap: Record<string, React.ReactNode> = {
    info:       <Info        className="w-5 h-5 text-primary shrink-0" />,
    calculator: <Calculator  className="w-5 h-5 text-primary shrink-0" />,
    building:   <Building    className="w-5 h-5 text-primary shrink-0" />,
    zap:        <Zap         className="w-5 h-5 text-primary shrink-0" />,
    home:       <Home        className="w-5 h-5 text-primary shrink-0" />,
    shield:     <Shield      className="w-5 h-5 text-primary shrink-0" />,
    chart:      <BarChart3   className="w-5 h-5 text-primary shrink-0" />,
    strategy:   <TrendingUp  className="w-5 h-5 text-primary shrink-0" />,
    conclusion: <Euro        className="w-5 h-5 text-primary shrink-0" />,
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── SEO / OG meta ── */}
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`${BASE_URL}${SLUG}`} />

        {/* Open Graph */}
        <meta property="og:type"        content="article" />
        <meta property="og:url"         content={`${BASE_URL}${SLUG}`} />
        <meta property="og:title"       content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image"       content={cover.og_image} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"   content="Property ownership costs in Bulgaria 2026" />
        <meta property="og:site_name"   content="BulgariaEstate by AI Byte Consult" />
        <meta property="og:locale"      content={
          lang === 'ru' ? 'ru_RU' : lang === 'bg' ? 'bg_BG' :
          lang === 'de' ? 'de_DE' : lang === 'fr' ? 'fr_FR' : 'en_US'
        } />

        {/* Twitter / X */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image"       content={cover.og_image} />
        <meta name="twitter:image:alt"   content="Property ownership costs in Bulgaria 2026" />

        {/* Article meta */}
        <meta property="article:published_time" content="2026-03-14T00:00:00Z" />
        <meta property="article:author"         content="BulgariaEstate by AI Byte Consult" />
        <meta property="article:section"        content="Real Estate" />
        <meta property="article:tag"            content="Bulgaria property, ownership costs, maintenance fees, property tax" />
      </Helmet>

      <Header />

      {/* ── Hero ── */}
      <section className="relative py-14 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />{d.back}
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{d.date}</span>
            <span className="inline-flex items-center gap-2"><BarChart3 className="w-4 h-4" />{d.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{d.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{d.subtitle}</p>

          {/* Cover */}
          <div className="rounded-xl overflow-hidden border bg-background">
            <img
              src={cover.image_url}
              alt={d.title}
              className="w-full h-[220px] md:h-[320px] object-cover"
              loading="lazy"
            />
            <div className="px-4 py-3 text-xs text-muted-foreground flex flex-wrap items-center gap-2">
              <span>{d.photoCreditLabel}</span>
              <a href={cover.unsplash_author_url} target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1">
                {cover.unsplash_author_name}<ExternalLink className="w-3 h-3" />
              </a>
              <span>{d.photoCreditOn}</span>
              <a href={cover.unsplash_photo_url} target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1">
                Unsplash<ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 container max-w-4xl">

        {/* Key Facts */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />{d.keyFactsTitle}
          </h2>
          <ul className="space-y-3 text-sm">
            {d.keyFacts.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="border rounded-xl p-5 mb-8 flex gap-3 items-start">
          <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">{d.noteTitle}</p>
            <p className="text-sm text-muted-foreground">{d.noteText}</p>
          </div>
        </div>

        {/* Article body */}
        <article className="space-y-10">
          {d.sections.map((s: any, idx: number) => (
            <section key={idx} className="space-y-4">
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
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>{it}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {s.blocks?.map((b: any, bi: number) => (
                <div key={bi} className="rounded-xl border p-5 space-y-3 bg-background">
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary shrink-0" />{b.h3}
                  </h3>
                  {b.bullets?.length ? (
                    <ul className="space-y-1.5 text-sm">
                      {b.bullets.map((it: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/85">
                          <span className="text-primary mt-0.5 shrink-0">›</span><span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </section>
          ))}
        </article>

        {/* Sources */}
        <div className="border rounded-xl p-6 mt-10 mb-10">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-primary" />{d.sourcesTitle}
          </h3>
          <ul className="space-y-2">
            {sources.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <ExternalLink className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                <a href={s.url} target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-xl border bg-primary/5 p-6 flex items-start gap-4">
          <Wrench className="w-6 h-6 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold mb-1">European Gateway — Property Cost Analysis</p>
            <p className="text-xs text-muted-foreground">
              {lang === 'ru' ? 'Свяжитесь с нами для расчёта стоимости содержания под ваш конкретный объект. Мы предоставляем полное моделирование владения — налоги, такса поддержки, коммунальные, управление арендой — до принятия решения о покупке.'
                : lang === 'bg' ? 'Свържете се с нас за изчисляване на разходите за поддръжка на вашия конкретен имот. Предоставяме пълно моделиране на разходите за притежание преди вземане на решение за покупка.'
                : lang === 'de' ? 'Kontaktieren Sie uns für eine individuelle Kostenberechnung für Ihre spezifische Immobilie. Wir erstellen eine vollständige Eigentumskosten-Modellierung vor der Kaufentscheidung.'
                : lang === 'fr' ? "Contactez-nous pour un calcul personnalisé des coûts de détention de votre bien avant toute décision d'achat."
                : 'Contact us for a personalised ownership cost calculation for your specific property before any purchase commitment.'}
            </p>
            <a href="https://wa.me/359988899109" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-primary hover:underline">
              <ExternalLink className="w-4 h-4" />
              {lang === 'ru' ? 'Связаться с нами' : lang === 'bg' ? 'Свържете се с нас' : lang === 'de' ? 'Kontakt aufnehmen' : lang === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </a>
            <p className="text-xs text-muted-foreground mt-1">estate@aibyteconsult.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BulgariaOwnershipCostsArticle;