import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Clock, BarChart3,
  TrendingUp, AlertTriangle, CheckCircle,
  Euro, FileText, Landmark, Calculator,
  Building, Home, Wrench, Zap, Shield, Info,
} from 'lucide-react';

const BulgariaRealOwnershipCostsArticle = () => {
  const { i18n } = useTranslation();
  const langRaw = (i18n.language || 'en').toLowerCase();
  const lang = langRaw.startsWith('ru') ? 'ru'
    : langRaw.startsWith('bg') ? 'bg'
    : langRaw.startsWith('de') ? 'de'
    : langRaw.startsWith('fr') ? 'fr'
    : 'en';

  const BASE_URL = 'https://estate.aibyteconsult.com';
  const SLUG     = '/article/bulgaria-real-ownership-costs-2026';

  const cover = {
    image_url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    og_image:  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=630&q=80&auto=format&fit=crop',
    unsplash_author_name: 'Sean Oulashin',
    unsplash_author_url:  'https://unsplash.com/@oulashin',
    unsplash_photo_url:   'https://unsplash.com/photos/KMn4VEeEPR8',
  };

  const metaByLang: Record<string, { title: string; description: string }> = {
    ru: {
      title: 'Сколько реально стоит содержать недвижимость в Болгарии в 2026 году | BulgariaEstate',
      description: 'Журналистский разбор: такса поддержки, коммунальные, налоги, страховка, управление — реальные цифры и расчёты для студии и квартиры у моря на 2026 год.',
    },
    en: {
      title: 'True Cost of Owning Property in Bulgaria in 2026: A Journalist\'s Breakdown | BulgariaEstate',
      description: 'Maintenance fees, utilities, property tax, insurance, management — real figures and annual cost calculations for a studio and sea-view apartment in Bulgaria 2026.',
    },
    bg: {
      title: 'Колко реално струва поддръжката на имот в България през 2026 г. | BulgariaEstate',
      description: 'Журналистски анализ: такса поддръжка, комунални, данъци, застраховка — реални цифри и изчисления за студио и апартамент на море за 2026 г.',
    },
    de: {
      title: 'Was kostet es wirklich, eine Immobilie in Bulgarien 2026 zu halten | BulgariaEstate',
      description: 'Instandhaltungsgebühren, Nebenkosten, Grundsteuer, Versicherung — reale Zahlen und Jahreskosten-Berechnungen für Studio und Meerwohnung in Bulgarien 2026.',
    },
    fr: {
      title: 'Combien coûte vraiment la détention d\'un bien en Bulgarie en 2026 | BulgariaEstate',
      description: 'Charges de copropriété, eau, électricité, taxe foncière, assurance — chiffres réels et calculs annuels pour un studio et un appartement vue mer en Bulgarie 2026.',
    },
  };

  const meta = metaByLang[lang] ?? metaByLang['en'];

  const sources = [
    { label: 'НАП България — Местни данъци и такси 2026', url: 'https://nra.bg/wps/portal/nra/podatsi-i-osigurovki/mestni-danaci' },
    { label: 'НСИ — Статистика на цените на жилищата Q3 2025', url: 'https://www.nsi.bg/en/announcement/housing-price-statistics-third-quarter-of-2025-8900' },
    { label: 'Global Property Guide — Bulgaria Taxes and Costs 2025', url: 'https://www.globalpropertyguide.com/europe/bulgaria/Taxes-and-Costs' },
    { label: 'Investropa — Bulgaria Property Ownership Costs 2025–2026', url: 'https://investropa.com/blogs/news/bulgaria-property-ownership-costs' },
    { label: 'Burgas Municipality — Local Tax Rates 2026', url: 'https://www.burgas.bg/bg/info/index/240' },
    { label: 'Eurostat — Housing Cost Overburden Rate EU 2025', url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php/Housing_cost_overburden_rate' },
  ];

  const t: Record<string, any> = {

    /* ══════════════════════════════════ RU ══════════════════════════════════ */
    ru: {
      back: 'На главную',
      date: '18 марта 2026',
      readTime: 'Время чтения: ~18 минут',
      photoCreditLabel: 'Фото:',
      photoCreditOn: 'на',
      title: 'Сколько реально стоит содержать недвижимость в Болгарии в 2026 году',
      lead: 'Болгария остаётся одним из самых доступных рынков недвижимости в Евросоюзе. Студию у моря здесь можно купить от €35 000, а апартамент с видом на воду — от €80 000. Именно эта доступность привлекает тысячи покупателей из России, Украины, Германии, Израиля и других стран. Но цена покупки — лишь половина финансовой картины. Вторая половина — ежегодные расходы на содержание. И здесь начинаются сюрпризы.',
      sections: [
        {
          h2: 'Главная ошибка покупателей: смотреть только на цену',
          icon: 'alert',
          body: [
            'Большинство иностранных покупателей болгарской недвижимости оценивают объект по двум критериям: цена покупки и потенциальный арендный доход. Третья переменная — стоимость владения — нередко остаётся за скобками до момента, когда счёт уже оплачен.',
            'Реальность такова: апартамент в курортном комплексе у моря за €80 000 может обходиться в содержание от €1 800 до €13 000 в год. Разница — семикратная. И она определяется не налогами (они в Болгарии одни из самых низких в ЕС), а таксой поддержки — платежом управляющей компании комплекса.',
            'Именно поэтому анализ объекта без понимания структуры ежегодных расходов — это финансово опасная практика.',
          ],
        },
        {
          h2: 'Такса поддержки: от €4 до €18 за квадратный метр в месяц',
          icon: 'building',
          body: [
            'Такса поддержки (болг. такса за поддръжка) — это ежемесячный или ежегодный платёж управляющей компании жилого комплекса за обслуживание общей инфраструктуры: бассейн, территория, охрана, уборка, лифты, ресепшн. Это не государственный налог — это частный договорной платёж, прописанный в договоре с управляющей компанией.',
            'По состоянию на 2026 год диапазон ставок такс поддержки на болгарском побережье выглядит следующим образом:',
          ],
          blocks: [
            {
              h3: 'Диапазоны такс поддержки (Черноморское побережье, 2026)',
              bullets: [
                'Простые комплексы без охраны и бассейна: €4–6/м²/месяц. Апартамент 55 м² — €2 640–3 960/год.',
                'Стандартные комплексы с бассейном и базовой охраной: €7–10/м²/месяц. Апартамент 55 м² — €4 620–6 600/год.',
                'Комплексы среднего класса (охрана 24/7, ландшафт, обслуживание): €10–14/м²/месяц. 55 м² — €6 600–9 240/год.',
                'Премиальные резорт-комплексы (SPA, ресторан, консьерж): €15–18/м²/месяц. 55 м² — €9 900–11 880/год.',
                'Среднее значение по Солнечному Берегу и Свети Власу: €9–13/м²/месяц.',
                'Горнолыжные курорты (Банско, Пампорово): €3–8/м²/месяц — существенно ниже побережья.',
              ],
            },
          ],
          body2: [
            'Принципиальный момент: такса поддержки не регулируется государством. Управляющая компания устанавливает её самостоятельно и вправе пересматривать ежегодно. Перед покупкой необходимо запросить историю изменений ставки за 3–5 лет и точный перечень услуг, входящих в платёж. Часть комплексов взимает отдельно за парковку, использование бассейна и лифт.',
          ],
        },
        {
          h2: 'Налог на недвижимость: механизм, который удивляет приятно',
          icon: 'calculator',
          body: [
            'Болгарский налог на недвижимость (данък върху недвижимите имоти) рассчитывается не с рыночной стоимости объекта, а с его налоговой (кадастровой) оценки. Последняя определяется муниципалитетом по государственной формуле и, как правило, составляет 20–40% от рыночной цены. Ставка налога устанавливается каждым муниципалитетом в диапазоне 0,01%–0,45%.',
            'Что это означает на практике: апартамент рыночной стоимостью €120 000 в Бургасе будет иметь налоговую оценку порядка €28 000–32 000. Налог по ставке 0,21% составит €59–67 в год. Плюс отдельная такса за вывоз мусора — ещё €60–110 в год.',
          ],
          blocks: [
            {
              h3: 'Ставки налога на недвижимость по основным муниципалитетам, 2026',
              bullets: [
                'София: 0,275% — один из самых высоких среди болгарских городов.',
                'Варна: 0,225%.',
                'Бургас: 0,21%.',
                'Несебр (Солнечный Берег, Свети Влас, Равда): 0,22%.',
                'Созопол: 0,20% — минимум среди курортных муниципалитетов побережья.',
                'Банско: 0,15%–0,18% — один из самых низких показателей в стране.',
              ],
            },
          ],
          body2: [
            'Ранняя уплата налога (до 30 апреля текущего года) даёт скидку 5%. Оплата возможна в кассе муниципалитета, банковским переводом или через портал е-услуги. Суммарно муниципальный налог и такса за мусор редко превышают €200–250 в год даже для объектов стоимостью €150 000–200 000 — это один из самых низких показателей в ЕС.',
          ],
        },
        {
          h2: 'Коммунальные платежи: электричество, вода, интернет',
          icon: 'zap',
          body: [
            'Болгария вступила в еврозону с 1 января 2026 года. Теперь все счета для иностранных собственников выставляются в евро, что упрощает бюджетирование.',
          ],
          blocks: [
            {
              h3: 'Электроэнергия (ЧЕЗ / ЕВН)',
              bullets: [
                'Дневной тариф: €0,12–0,16/кВт·ч. Ночной: €0,07–0,09/кВт·ч.',
                'Апартамент 50–70 м², сезонное использование (3 мес.): €100–180 за сезон.',
                'Апартамент 50–70 м², постоянное проживание (12 мес.): €35–75/месяц.',
                'Дом 120–150 м² с электрическим отоплением: €120–250/месяц (зима).',
                'Тепловой насос снижает зимние расходы на 40–50% по сравнению с прямым электрообогревом.',
                'Незаселённый апартамент (только абонентская плата): €5–12/месяц.',
              ],
            },
            {
              h3: 'Водоснабжение и канализация',
              bullets: [
                'Тариф: €1,20–2,10/м³ в зависимости от муниципалитета.',
                'Апартамент, постоянное проживание: €12–25/месяц.',
                'Дом с садом и частным бассейном в летний сезон: €40–90/месяц.',
                'Сезонное использование 3 месяца в год: €60–120 за весь сезон.',
              ],
            },
            {
              h3: 'Интернет и кабельное ТВ',
              bullets: [
                'Широкополосный интернет 200–500 Мбит/с: €8–14/месяц.',
                'Пакет интернет + кабельное ТВ: €15–25/месяц.',
                'Болгария входит в тройку стран с наиболее дешёвым интернетом в ЕС.',
              ],
            },
          ],
        },
        {
          h2: 'Управление объектом и налог на аренду',
          icon: 'home',
          body: [
            'Для большинства иностранных собственников, не проживающих постоянно в Болгарии, управление объектом предполагает привлечение профессионального управляющего или агентства.',
          ],
          blocks: [
            {
              h3: 'Стоимость управления (2026)',
              bullets: [
                'Долгосрочная аренда (от 6 мес.): 8–12% от ежемесячного арендного дохода.',
                'Краткосрочная аренда (Airbnb, Booking.com): 15–25% от дохода — включает коммуникацию с гостями, заселение, уборку.',
                'Комплексное обслуживание (счета, мелкий ремонт, отчётность): €100–250/месяц фиксированно + % от аренды.',
                'Разовый поиск долгосрочного арендатора: 50–100% от месячной арендной ставки.',
                'Бухгалтерское сопровождение и подача налоговой декларации по аренде: €80–200/год.',
              ],
            },
            {
              h3: 'Налог на арендный доход',
              bullets: [
                'Ставка: 10% с дохода после стандартного вычета 10% нормативных расходов.',
                'Эффективная ставка: 9% от валового арендного дохода.',
                'Пример: арендный доход €450/мес × 12 = €5 400 → налог €486/год.',
                'Декларация подаётся до 30 апреля следующего года в НАП (Национальное агентство по доходам).',
                'Резиденты и нерезиденты уплачивают налог по одной и той же ставке.',
              ],
            },
          ],
        },
        {
          h2: 'Страхование и резерв на ремонт: о чём молчат продавцы',
          icon: 'shield',
          body: [
            'Страхование недвижимости в Болгарии не является обязательным по закону, но фактически необходимо — особенно при сдаче объекта в аренду.',
          ],
          blocks: [
            {
              h3: 'Страхование имущества (2026)',
              bullets: [
                'Базовый полис апартамента (огонь, вода, кража): €80–150/год.',
                'Расширенный полис с гражданской ответственностью: €140–250/год.',
                'Страхование дома (120–150 м² + участок): €200–380/год.',
                'Полис для сдаваемого в аренду объекта (специальные условия): €170–350/год.',
                'Страховые тарифы в Болгарии на 30–50% ниже, чем в Германии, Австрии или Франции.',
              ],
            },
            {
              h3: 'Резерв на ремонт и замену оборудования',
              bullets: [
                'Рекомендуемый резерв: 0,5–1% рыночной стоимости объекта в год.',
                'Апартамент €80 000: €400–800/год.',
                'Апартамент €120 000: €600–1 200/год.',
                'Дом €180 000: €900–1 800/год.',
                'Объекты старше 15 лет: увеличьте резерв до 1,5%/год.',
                'Типичные статьи расходов: замена кондиционера — €600–1 200, бойлер — €250–500, межкомнатные двери — €300–600, косметический ремонт 1 раз в 5 лет — €1 500–4 000.',
              ],
            },
          ],
        },
        {
          h2: 'Реальные расчёты: сколько стоит содержать студию и апартамент в год',
          icon: 'chart',
          body: [
            'Приведём три модели — от минимальной до реалистичной для инвестора, сдающего объект в аренду.',
          ],
          blocks: [
            {
              h3: 'Модель 1: Студия 35 м², бюджетный комплекс, Равда / Поморие, стоимость €38 000',
              bullets: [
                'Налог на недвижимость + такса за мусор: €55/год.',
                'Такса поддержки (€5/м²/мес): €2 100/год.',
                'Коммунальные (сезон 3 мес.): €100/год.',
                'Страхование: €90/год.',
                'Резерв на ремонт (0,8%): €304/год.',
                '─────────────────',
                'ИТОГО в год: ~€2 649 (≈€221/месяц)',
                'Арендный доход (€280/мес × 7 мес. сезон): €1 960/год.',
                'ВЫВОД: Операционный убыток ~€689/год. Объект экономически оправдан только для личного использования.',
              ],
            },
            {
              h3: 'Модель 2: Апартамент 65 м², средний комплекс, Солнечный Берег, стоимость €75 000',
              bullets: [
                'Налог на недвижимость + такса за мусор: €120/год.',
                'Такса поддержки (€9/м²/мес): €7 020/год.',
                'Коммунальные (сезон 4 мес.): €200/год.',
                'Страхование: €140/год.',
                'Резерв на ремонт (0,7%): €525/год.',
                'Управление арендой (20%): €864/год.',
                '─────────────────',
                'ИТОГО расходов в год: ~€8 869',
                'Арендный доход (€360/мес × 12 мес.): €4 320/год.',
                'ВЫВОД: Глубокий операционный убыток. Такса поддержки уничтожает инвестиционную логику.',
                'Инвестиционный вывод: этот объект работает только при такса поддержки не выше €5/м²/мес.',
              ],
            },
            {
              h3: 'Модель 3: Апартамент 65 м², бюджетный комплекс без бассейна, Бургас (город), стоимость €85 000',
              bullets: [
                'Налог на недвижимость + такса за мусор: €130/год.',
                'Такса поддержки: €0 (городской жилой дом, этажная собственность).',
                'Коммунальные (постоянное проживание): €600/год.',
                'Страхование: €150/год.',
                'Резерв на ремонт (0,7%): €595/год.',
                'Управление долгосрочной арендой (10%): €516/год.',
                '─────────────────',
                'ИТОГО расходов в год: ~€1 991',
                'Арендный доход (€430/мес × 12 мес.): €5 160/год.',
                'Налог на аренду (9%): €464/год.',
                'Чистый доход: €2 705/год → доходность ~3,2% годовых.',
                'ВЫВОД: Единственная модель из трёх с положительным денежным потоком. Городская квартира без такса поддержки — принципиально иная экономика.',
              ],
            },
          ],
        },
        {
          h2: 'Где ошибаются чаще всего: 5 типичных просчётов',
          icon: 'warning',
          blocks: [
            {
              h3: 'Типичные ошибки покупателей',
              bullets: [
                '1. Не запрашивают историю такс поддержки за 3–5 лет. Ставка, зафиксированная в рекламном буклете застройщика, нередко вырастает вдвое к 5-му году эксплуатации.',
                '2. Путают такса поддержки с налогом. Первая — частный платёж управляющей компании, второй — государственный сбор. Это разные статьи с принципиально разной логикой роста.',
                '3. Покупают студию под аренду без финансовой модели. Студии в курортных комплексах сдаются 3–5 месяцев в году. При такса поддержки €5/м²/мес годовые расходы уже превышают реалистичный арендный доход.',
                '4. Не учитывают управляющие расходы. 20% от краткосрочной аренды — существенная статья, которую часто "забывают" в оптимистичных расчётах.',
                '5. Игнорируют резерв на ремонт. Объекты 2005–2012 годов постройки на побережье начинают требовать значительных вложений. Фасадный ремонт, замена сетей, гидроизоляция — суммы до €3 000–8 000 за апартамент.',
              ],
            },
          ],
        },
        {
          h2: 'Как снизить расходы на содержание: практические советы',
          icon: 'strategy',
          blocks: [
            {
              h3: 'Реальные инструменты оптимизации',
              bullets: [
                'Выбирайте комплексы с таксой поддержки не выше €6–7/м²/мес, если цель — арендная инвестиция. Узнавайте ставку до, а не после подписания.',
                'Рассматривайте городские квартиры в Бургасе, Варне, Пловдиве — там нет курортной такса поддержки, а арендный спрос круглогодичный.',
                'Ранняя уплата налога на недвижимость даёт 5% скидку — небольшая, но стабильная экономия.',
                'Тепловой насос вместо электрических нагревательных приборов снижает счёт за электричество на 40–50% в зимний период.',
                'Страхуйте объект заблаговременно — новый страховой договор, заключённый за 30–60 дней до истечения старого, нередко позволяет зафиксировать прежний тариф.',
                'Если сдаёте в аренду — платите налог как физическое лицо (9% эффективная ставка) или рассмотрите структуру через болгарское ООД (ЕООД) при доходе выше €20 000/год: корпоративный налог 10% с возможностью вычета расходов.',
              ],
            },
          ],
        },
        {
          h2: 'Болгария в контексте ЕС: сравнительная таблица',
          icon: 'info',
          blocks: [
            {
              h3: 'Ежегодные расходы на содержание апартамента €100 000 / 60 м²',
              bullets: [
                'Болгария (город, без такса): €800–1 400/год',
                'Болгария (курорт, низкая такса): €3 500–5 500/год',
                'Болгария (курорт, высокая такса): €8 000–12 000/год',
                'Черногория: €1 000–1 800/год',
                'Греция (материк): €1 200–2 000/год',
                'Испания (Коста Бланка): €1 800–2 800/год',
                'Германия (земли востока): €2 500–3 800/год',
                'Франция (Прованс): €3 500–5 500/год',
                'Португалия (Алгарве): €2 000–3 200/год',
                'ВЫВОД: Болгарский город конкурирует с Черногорией за место самого бюджетного рынка ЕС. Болгарский курорт с высокой таксой — уже дороже Испании.',
              ],
            },
          ],
        },
        {
          h2: 'Вывод: правильный вопрос при выборе объекта',
          icon: 'conclusion',
          body: [
            'Вопрос "сколько стоит квартира" — это только первый вопрос. Второй, не менее важный: "сколько стоит её держать".',
            'В Болгарии государственный налог на недвижимость — один из самых низких в ЕС: €50–200/год для большинства объектов стоимостью до €150 000. Но такса поддержки курортного комплекса способна увеличить реальные расходы до €10 000–13 000/год — и это уже другая инвестиционная реальность.',
            'Три вопроса, которые необходимо задать перед покупкой. Первый: какова текущая такса поддержки и как она менялась за последние 5 лет? Второй: какой реальный арендный доход генерирует этот тип объекта в данной локации при данной загрузке? Третий: каков чистый денежный поток с учётом всех расходов, включая налоги, управление и резерв на ремонт?',
            'Только после ответа на эти три вопроса покупка превращается из эмоционального решения в финансово обоснованное.',
          ],
        },
      ],
      cta_title: 'Рассчитать расходы под ваш объект',
      cta_body: 'Если вы рассматриваете покупку недвижимости в Болгарии — мы готовы построить финансовую модель под конкретный объект: налоги, такса поддержки, арендный доход, чистая доходность. Это занимает 30 минут и позволяет принять взвешенное решение.',
      cta_button: 'Связаться с нами',
      sourcesTitle: 'Источники и ссылки',
      noteTitle: 'Примечание',
      noteText: 'Данные актуальны на март 2026 года. Ставки налогов, тарифы ЖКХ и условия управляющих компаний могут меняться. Проверяйте актуальные условия перед принятием финансового решения.',
    },

    /* ══════════════════════════════════ EN ══════════════════════════════════ */
    en: {
      back: 'Back to Home',
      date: 'March 18, 2026',
      readTime: 'Reading time: ~18 minutes',
      photoCreditLabel: 'Photo:', photoCreditOn: 'on',
      title: 'True Cost of Owning Property in Bulgaria in 2026: A Journalist\'s Breakdown',
      lead: 'Bulgaria remains one of the most affordable real estate markets in the EU. A studio by the sea starts from €35,000; a sea-view apartment from €80,000. This affordability attracts thousands of buyers from Germany, Ukraine, Russia, Israel and beyond. But the purchase price is only half the financial picture. The other half is the annual cost of ownership. And that\'s where the surprises begin.',
      sections: [
        {
          h2: 'The main mistake buyers make: looking only at the price',
          icon: 'alert',
          body: [
            'Most foreign buyers of Bulgarian property evaluate a unit on two criteria: purchase price and potential rental income. The third variable — cost of ownership — is often left out until the first bill arrives.',
            'Reality: a €80,000 sea-view apartment in a resort complex can cost between €1,800 and €13,000 per year to hold. The difference is sevenfold. And it is driven not by taxes — which are among the lowest in the EU — but by the complex maintenance fee.',
            'Analysing a property without understanding the structure of annual ownership costs is a financially dangerous practice.',
          ],
        },
        {
          h2: 'Maintenance fee: €4 to €18 per square metre per month',
          icon: 'building',
          body: [
            'The maintenance fee (Bulgarian: такса за поддръжка) is the monthly or annual payment to the complex management company for shared infrastructure: pool, grounds, security, cleaning, lifts, reception. This is not a state tax — it is a private contractual payment defined in the management agreement.',
            '2026 maintenance fee ranges on the Bulgarian Black Sea coast:',
          ],
          blocks: [
            {
              h3: 'Maintenance fee ranges (Black Sea coast, 2026)',
              bullets: [
                'Basic complexes (no pool, no security): €4–6/m²/month. 55 m² apartment — €2,640–3,960/year.',
                'Standard complexes (pool, basic security): €7–10/m²/month. 55 m² — €4,620–6,600/year.',
                'Mid-range complexes (24/7 security, landscaping): €10–14/m²/month. 55 m² — €6,600–9,240/year.',
                'Premium resort complexes (SPA, restaurant, concierge): €15–18/m²/month. 55 m² — €9,900–11,880/year.',
                'Average for Sunny Beach and Sveti Vlas: €9–13/m²/month.',
                'Mountain resorts (Bansko, Pamporovo): €3–8/m²/month — significantly lower than the coast.',
              ],
            },
          ],
          body2: [
            'Key point: the maintenance fee is not state-regulated. The management company sets it independently and can revise it annually. Before purchase, always request the fee history for 3–5 years and a precise breakdown of what is included. Some complexes charge separately for parking, pool access and lift maintenance.',
          ],
        },
        {
          h2: 'Property tax: the mechanism that pleasantly surprises',
          icon: 'calculator',
          body: [
            'Bulgarian property tax is calculated on the municipal assessed value — not market value. The assessed value is determined by a government formula and typically equals 20–40% of market price. Each municipality sets its own rate within a 0.01%–0.45% band.',
            'In practice: a €120,000 apartment in Burgas will carry an assessed value of approximately €28,000–32,000. Tax at 0.21% is €59–67/year, plus a separate garbage collection fee of €60–110/year.',
          ],
          blocks: [
            {
              h3: 'Municipal property tax rates 2026',
              bullets: [
                'Sofia: 0.275% — highest among major Bulgarian cities.',
                'Varna: 0.225%.',
                'Burgas: 0.21%.',
                'Nessebar (Sunny Beach, Sveti Vlas, Ravda): 0.22%.',
                'Sozopol: 0.20% — lowest among coastal resort municipalities.',
                'Bansko: 0.15%–0.18% — one of the lowest in the country.',
              ],
            },
          ],
          body2: [
            'Early payment (before April 30) earns a 5% discount. Combined, the property tax and garbage fee rarely exceed €200–250/year even for properties worth €150,000–200,000 — one of the lowest ownership tax burdens in the EU.',
          ],
        },
        {
          h2: 'Utilities: electricity, water, internet',
          icon: 'zap',
          body: [
            'Bulgaria joined the eurozone on January 1, 2026. All utility bills for foreign owners are now issued in euros.',
          ],
          blocks: [
            {
              h3: 'Electricity (ЧЕЗ / ЕВН)',
              bullets: [
                'Day rate: €0.12–0.16/kWh. Night rate: €0.07–0.09/kWh.',
                '50–70 m² apartment, seasonal use (3 months): €100–180 for the season.',
                '50–70 m² apartment, year-round occupancy: €35–75/month.',
                '120–150 m² house with electric heating: €120–250/month (winter).',
                'Heat pump reduces winter electricity cost by 40–50% vs. direct electric heating.',
                'Vacant apartment (standing charge only): €5–12/month.',
              ],
            },
            {
              h3: 'Water and sewage',
              bullets: [
                'Tariff: €1.20–2.10/m³ depending on municipality.',
                'Apartment with year-round occupancy: €12–25/month.',
                'House with garden and private pool (summer): €40–90/month.',
                'Seasonal use (3 months): €60–120 for the season.',
              ],
            },
            {
              h3: 'Internet and cable TV',
              bullets: [
                'Broadband 200–500 Mbps: €8–14/month.',
                'Internet + cable TV bundle: €15–25/month.',
                'Bulgaria ranks among the top 3 EU countries for cheapest internet.',
              ],
            },
          ],
        },
        {
          h2: 'Calculation models: three real scenarios',
          icon: 'chart',
          blocks: [
            {
              h3: 'Model 1: Studio 35 m², budget complex, Ravda / Pomorie, value €38,000',
              bullets: [
                'Property tax + garbage: €55/year.',
                'Maintenance fee (€5/m²/month): €2,100/year.',
                'Utilities (3-month season): €100/year.',
                'Insurance: €90/year.',
                'Repair reserve (0.8%): €304/year.',
                '─────────────────',
                'TOTAL annual costs: ~€2,649',
                'Rental income (€280/month × 7 months): €1,960/year.',
                'RESULT: Operating loss ~€689/year. Viable only for personal use.',
              ],
            },
            {
              h3: 'Model 2: Apartment 65 m², mid-range complex, Sunny Beach, value €75,000',
              bullets: [
                'Property tax + garbage: €120/year.',
                'Maintenance fee (€9/m²/month): €7,020/year.',
                'Utilities (4-month season): €200/year.',
                'Insurance: €140/year.',
                'Repair reserve (0.7%): €525/year.',
                'Rental management (20%): €864/year.',
                '─────────────────',
                'TOTAL annual costs: ~€8,869',
                'Rental income (€360/month × 12): €4,320/year.',
                'RESULT: Deep operating loss. The maintenance fee destroys the investment case.',
              ],
            },
            {
              h3: 'Model 3: Apartment 65 m², city building (no pool), Burgas city, value €85,000',
              bullets: [
                'Property tax + garbage: €130/year.',
                'Maintenance fee: €0 (standard residential building).',
                'Utilities (year-round): €600/year.',
                'Insurance: €150/year.',
                'Repair reserve (0.7%): €595/year.',
                'Long-term rental management (10%): €516/year.',
                '─────────────────',
                'TOTAL annual costs: ~€1,991',
                'Rental income (€430/month × 12): €5,160/year.',
                'Rental tax (9%): €464/year.',
                'NET income: €2,705/year → yield ~3.2% p.a.',
                'RESULT: Only model with positive cash flow. City apartment without maintenance fee — fundamentally different economics.',
              ],
            },
          ],
        },
        {
          h2: 'Five typical mistakes',
          icon: 'warning',
          blocks: [
            {
              h3: 'What buyers get wrong',
              bullets: [
                '1. Not requesting the 3–5 year maintenance fee history. The rate in the developer\'s brochure often doubles by year five.',
                '2. Confusing maintenance fee with property tax. The former is a private payment; the latter a state levy. They follow completely different growth trajectories.',
                '3. Buying a studio as an investment without a financial model. Coastal studios rent for 3–5 months per year. At €5/m²/month maintenance, annual costs already exceed realistic rental income.',
                '4. Ignoring management costs. 20% of short-term rental income is a significant line item, routinely omitted from optimistic projections.',
                '5. Skipping the repair reserve. Properties built in 2005–2012 on the coast are entering a major maintenance cycle. Façade work, systems replacement, waterproofing — €3,000–8,000 per apartment.',
              ],
            },
          ],
        },
        {
          h2: 'Conclusion: the right question when evaluating a property',
          icon: 'conclusion',
          body: [
            '"How much does the apartment cost?" is only the first question. The second, equally important one: "How much does it cost to hold?"',
            'In Bulgaria, the state property tax is among the lowest in the EU: €50–200/year for most properties up to €150,000. But the resort complex maintenance fee can push true annual costs to €10,000–13,000/year — and that is an entirely different investment reality.',
            'Three questions to ask before any purchase: What is the current maintenance fee and how has it changed over the past five years? What is the realistic rental income for this property type in this location at a realistic occupancy rate? What is the net cash flow after all costs — taxes, management, and repair reserve?',
            'Only after answering these three questions does a purchase become a financially grounded decision rather than an emotional one.',
          ],
        },
      ],
      cta_title: 'Calculate ownership costs for your property',
      cta_body: 'If you are considering buying property in Bulgaria, we can build a financial model for your specific target: taxes, maintenance fee, rental income, net yield. The conversation takes 30 minutes and gives you the numbers you need to decide.',
      cta_button: 'Contact Us',
      sourcesTitle: 'Sources',
      noteTitle: 'Note',
      noteText: 'Data is current as of March 2026. Tax rates, utility tariffs, and management company terms are subject to change. Verify current conditions before making any financial decision.',
    },

    /* ══════════════════════════════════ BG ══════════════════════════════════ */
    bg: {
      back: 'Към началото',
      date: '18 март 2026',
      readTime: 'Време за четене: ~18 минути',
      photoCreditLabel: 'Снимка:', photoCreditOn: 'в',
      title: 'Колко реално струва поддръжката на имот в България през 2026 г.',
      lead: 'България остава един от най-достъпните пазари на недвижими имоти в ЕС. Студио на море може да се купи от €35 000, а апартамент с морска гледка — от €80 000. Именно тази достъпност привлича хиляди купувачи. Но покупната цена е само половината от финансовата картина. Втората половина са годишните разходи за поддръжка.',
      sections: [
        {
          h2: 'Основната грешка на купувачите',
          icon: 'alert',
          body: [
            'Повечето чуждестранни купувачи оценяват имота по два критерия: покупна цена и потенциален наемен доход. Третата променлива — разходите за притежание — нерядко остава извън полезрението до получаването на първата сметка.',
            'Реалността: апартамент в курортен комплекс на море за €80 000 може да струва между €1 800 и €13 000 годишно за поддръжка. Разликата е седемкратна. И тя се определя не от данъците, а от таксата за поддръжка на комплекса.',
          ],
        },
        {
          h2: 'Такса поддръжка: от €4 до €18 на квадратен метър месечно',
          icon: 'building',
          body: ['Таксата за поддръжка е месечното или годишно плащане към управляващата компания за обслужване на общата инфраструктура: басейн, охрана, озеленяване, почистване, асансьори. Не е държавен данък — частно договорно плащане.'],
          blocks: [
            {
              h3: 'Диапазони такси поддръжка (Черноморие, 2026 г.)',
              bullets: [
                'Базисни комплекси: €4–6/м²/мес. → 55 м² = €2 640–3 960/год.',
                'Стандартни комплекси (басейн): €7–10/м²/мес. → €4 620–6 600/год.',
                'Среден клас (охрана 24/7): €10–14/м²/мес. → €6 600–9 240/год.',
                'Премиални комплекси (SPA, ресторант): €15–18/м²/мес. → €9 900–11 880/год.',
                'Средно за Слънчев бряг и Свети Влас: €9–13/м²/мес.',
                'Ски курорти (Банско): €3–8/м²/мес. — значително по-евтино.',
              ],
            },
          ],
          body2: ['Таксата не е регулирана от държавата. Управляващата компания я определя самостоятелно. Преди покупка е задължително да поискате история на ставката за последните 3–5 години.'],
        },
        {
          h2: 'Данък върху имотите: приятна изненада',
          icon: 'calculator',
          body: ['Данъкът върху имотите се изчислява върху данъчната оценка — не пазарната стойност. Тя е 20–40% от пазарната цена. За апартамент €120 000 в Бургас: данъчна оценка ~€30 000, данък ~€63/год. + такса смет €80/год. Общо: ~€143/год.'],
          blocks: [
            {
              h3: 'Ставки на основните общини 2026 г.',
              bullets: [
                'София: 0,275%.', 'Варна: 0,225%.', 'Бургас: 0,21%.',
                'Несебър: 0,22%.', 'Созопол: 0,20%.', 'Банско: 0,15%–0,18%.',
              ],
            },
          ],
        },
        {
          h2: 'Реални изчисления: три модела',
          icon: 'chart',
          blocks: [
            {
              h3: 'Модел 1: Студио 35 м², бюджетен комплекс, Равда, €38 000',
              bullets: [
                'Данъци: €55/год. | Такса поддръжка (€5/м²): €2 100/год.',
                'Комунални (сезон 3 мес.): €100/год. | Застраховка: €90/год. | Резерв: €304/год.',
                'ОБЩО: ~€2 649/год. | Наем (€280 × 7 мес.): €1 960/год.',
                'ИЗВОД: Операционна загуба ~€689/год. Подходящ само за лично ползване.',
              ],
            },
            {
              h3: 'Модел 2: Апартамент 65 м², среден комплекс, Слънчев бряг, €75 000',
              bullets: [
                'Данъци: €120/год. | Такса поддръжка (€9/м²): €7 020/год.',
                'Комунални: €200/год. | Застраховка: €140/год. | Резерв: €525/год. | Управление (20%): €864/год.',
                'ОБЩО: ~€8 869/год. | Наем (€360 × 12 мес.): €4 320/год.',
                'ИЗВОД: Дълбока операционна загуба. Таксата поддръжка унищожава инвестиционната логика.',
              ],
            },
            {
              h3: 'Модел 3: Апартамент 65 м², жилищна сграда, Бургас, €85 000',
              bullets: [
                'Данъци: €130/год. | Такса поддръжка: €0.',
                'Комунални: €600/год. | Застраховка: €150/год. | Резерв: €595/год. | Управление (10%): €516/год.',
                'ОБЩО: ~€1 991/год. | Наем (€430 × 12): €5 160/год. | Данък аренда (9%): €464/год.',
                'НЕТЕН ДОХОД: €2 705/год. → ~3,2% годишно.',
                'ИЗВОД: Единственият модел с положителен паричен поток.',
              ],
            },
          ],
        },
        {
          h2: 'Заключение',
          icon: 'conclusion',
          body: [
            'Въпросът "колко струва апартаментът" е само първият. Вторият, не по-малко важен: "колко струва да го поддържам".',
            'Данъкът върху имотите в България е сред най-ниските в ЕС: €50–200/год. за повечето обекти. Но таксата поддръжка на курортен комплекс може да доведе разходите до €10 000–13 000/год.',
            'Три въпроса преди покупка: каква е таксата поддръжка и как се е менила; какъв е реалният наемен доход; какъв е нетният паричен поток след всички разходи.',
          ],
        },
      ],
      cta_title: 'Изчислете разходите за вашия имот',
      cta_body: 'Ако разглеждате покупка на имот в България, можем да изградим финансов модел за конкретния обект: данъци, такса поддръжка, наемен доход, нетна доходност.',
      cta_button: 'Свържете се с нас',
      sourcesTitle: 'Източници',
      noteTitle: 'Забележка',
      noteText: 'Данните са актуални към март 2026 г. Ставките и тарифите подлежат на промяна.',
    },

    /* ══════════════════════════════════ DE ══════════════════════════════════ */
    de: {
      back: 'Zur Startseite',
      date: '18. März 2026',
      readTime: 'Lesezeit: ~18 Minuten',
      photoCreditLabel: 'Foto:', photoCreditOn: 'auf',
      title: 'Was kostet es wirklich, eine Immobilie in Bulgarien 2026 zu halten',
      lead: 'Bulgarien bleibt einer der erschwinglichsten Immobilienmärkte in der EU. Ein Studio am Meer beginnt ab €35.000; eine Meerblick-Wohnung ab €80.000. Doch der Kaufpreis ist nur die halbe finanzielle Wahrheit. Die andere Hälfte sind die jährlichen Eigentumskosten.',
      sections: [
        {
          h2: 'Der häufigste Fehler: nur auf den Kaufpreis schauen',
          icon: 'alert',
          body: [
            'Die meisten ausländischen Käufer bewerten eine Immobilie nach zwei Kriterien: Kaufpreis und potenzielle Mieteinnahmen. Die dritte Variable — die Eigentumskosten — bleibt oft außen vor.',
            'Realität: Eine €80.000-Meerblick-Wohnung in einer Resortanlage kann zwischen €1.800 und €13.000 pro Jahr kosten. Der Unterschied ist siebenfach. Er wird nicht durch Steuern bestimmt, sondern durch die Instandhaltungsgebühr.',
          ],
        },
        {
          h2: 'Instandhaltungsgebühr: €4 bis €18 pro Quadratmeter monatlich',
          icon: 'building',
          body: ['Die Instandhaltungsgebühr ist die monatliche Zahlung an die Komplexverwaltung für gemeinsame Infrastruktur: Pool, Sicherheit, Grünflächen, Reinigung. Keine Staatsgebühr — eine private Vertragszahlung.'],
          blocks: [
            {
              h3: 'Instandhaltungsgebühren Schwarzmeerküste 2026',
              bullets: [
                'Basiskomplexe: €4–6/m²/Monat → 55 m² = €2.880–4.320/Jahr.',
                'Standardkomplexe (Pool): €7–10/m²/Monat → €4.620–6.600/Jahr.',
                'Mittelklasse (24/7 Sicherheit): €10–14/m²/Monat → €6.600–9.240/Jahr.',
                'Premium (SPA, Restaurant): €15–18/m²/Monat → €9.900–11.880/Jahr.',
                'Durchschnitt Sunny Beach / Sveti Vlas: €9–13/m²/Monat.',
                'Bansko (Ski): €3–8/m²/Monat — deutlich günstiger.',
              ],
            },
          ],
          body2: ['Die Gebühr ist nicht staatlich reguliert. Die Verwaltungsgesellschaft legt sie eigenständig fest. Vor dem Kauf: Gebührenhistorie der letzten 3–5 Jahre anfordern.'],
        },
        {
          h2: 'Drei Berechnungsmodelle',
          icon: 'chart',
          blocks: [
            {
              h3: 'Modell 1: Studio 35 m², Basisanlage, Ravda, €38.000',
              bullets: [
                'Steuern: €55/Jahr | Instandhaltung (€5/m²): €2.100/Jahr.',
                'Nebenkosten (Saison): €100 | Versicherung: €90 | Reserve: €304.',
                'GESAMT: ~€2.649/Jahr | Mieteinnahmen (€280 × 7 Monate): €1.960.',
                'ERGEBNIS: Operativer Verlust ~€689/Jahr.',
              ],
            },
            {
              h3: 'Modell 2: Wohnung 65 m², Mittelklasse, Sunny Beach, €75.000',
              bullets: [
                'Steuern: €120 | Instandhaltung (€9/m²): €7.020.',
                'Nebenkosten: €200 | Versicherung: €140 | Reserve: €525 | Verwaltung (20%): €864.',
                'GESAMT: ~€8.869/Jahr | Mieteinnahmen (€360 × 12): €4.320.',
                'ERGEBNIS: Tiefer operativer Verlust. Die Instandhaltungsgebühr zerstört die Investitionslogik.',
              ],
            },
            {
              h3: 'Modell 3: Wohnung 65 m², Stadtgebäude ohne Pool, Burgas, €85.000',
              bullets: [
                'Steuern: €130 | Instandhaltung: €0.',
                'Nebenkosten: €600 | Versicherung: €150 | Reserve: €595 | Verwaltung (10%): €516.',
                'GESAMT: ~€1.991/Jahr | Mieteinnahmen (€430 × 12): €5.160.',
                'Mietsteuer (9%): €464 | NETTOEINNAHMEN: €2.705/Jahr → ~3,2% p.a.',
                'ERGEBNIS: Einziges Modell mit positivem Cashflow.',
              ],
            },
          ],
        },
        {
          h2: 'Fazit',
          icon: 'conclusion',
          body: [
            '"Wie viel kostet die Wohnung?" ist nur die erste Frage. Die zweite: "Was kostet es, sie zu halten?"',
            'Die Grundsteuer in Bulgarien gehört zu den niedrigsten in der EU. Die Instandhaltungsgebühr einer Resortanlage kann die Jahreskosten auf €10.000–13.000 treiben.',
            'Drei Fragen vor dem Kauf: Wie hoch ist die Instandhaltungsgebühr und wie hat sie sich entwickelt? Welche realistischen Mieteinnahmen sind erzielbar? Wie sieht der Netto-Cashflow nach allen Kosten aus?',
          ],
        },
      ],
      cta_title: 'Eigentumskosten für Ihr Objekt berechnen',
      cta_body: 'Wenn Sie den Kauf einer Immobilie in Bulgarien erwägen, erstellen wir für Sie ein vollständiges Kostenmodell: Steuern, Instandhaltungsgebühr, Mieteinnahmen, Nettorendite.',
      cta_button: 'Kontakt aufnehmen',
      sourcesTitle: 'Quellen',
      noteTitle: 'Hinweis',
      noteText: 'Daten entsprechen dem Stand März 2026. Steuersätze und Tarife können sich ändern.',
    },

    /* ══════════════════════════════════ FR ══════════════════════════════════ */
    fr: {
      back: "Retour à l'accueil",
      date: '18 mars 2026',
      readTime: 'Temps de lecture : ~18 minutes',
      photoCreditLabel: 'Photo :', photoCreditOn: 'sur',
      title: "Combien coûte vraiment la détention d'un bien en Bulgarie en 2026",
      lead: "La Bulgarie reste l'un des marchés immobiliers les plus accessibles de l'UE. Un studio en bord de mer commence à €35 000 ; un appartement vue mer à €80 000. Mais le prix d'achat n'est que la moitié de la réalité financière. L'autre moitié, ce sont les coûts annuels de détention.",
      sections: [
        {
          h2: "L'erreur principale des acheteurs",
          icon: 'alert',
          body: [
            "La plupart des acheteurs étrangers évaluent un bien sur deux critères : prix d'achat et revenus locatifs potentiels. La troisième variable — le coût de détention — est souvent ignorée jusqu'à la première facture.",
            "Réalité : un appartement vue mer à €80 000 dans un complexe balnéaire peut coûter entre €1 800 et €13 000 par an. L'écart est de sept fois. Il est déterminé non par les taxes, mais par la charge de copropriété.",
          ],
        },
        {
          h2: "Charges de copropriété : de €4 à €18 par m² par mois",
          icon: 'building',
          body: ["La charge de copropriété est le paiement mensuel à la société de gestion pour l'infrastructure commune : piscine, sécurité, espaces verts, nettoyage. Ce n'est pas une taxe d'État — c'est un paiement contractuel privé."],
          blocks: [
            {
              h3: 'Fourchettes de charges, côte de la mer Noire, 2026',
              bullets: [
                'Complexes basiques : €4–6/m²/mois → 55 m² = €2 880–3 960/an.',
                'Complexes standard (piscine) : €7–10/m²/mois → €4 620–6 600/an.',
                'Gamme intermédiaire (sécurité 24h/24) : €10–14/m²/mois → €6 600–9 240/an.',
                'Complexes premium (SPA, restaurant) : €15–18/m²/mois → €9 900–11 880/an.',
                'Moyenne Sunny Beach / Sveti Vlas : €9–13/m²/mois.',
                'Stations de ski (Bansko) : €3–8/m²/mois.',
              ],
            },
          ],
          body2: ["La charge n'est pas régulée par l'État. La société de gestion la fixe de manière indépendante. Avant tout achat : demandez l'historique des 3 à 5 dernières années."],
        },
        {
          h2: 'Trois modèles de calcul',
          icon: 'chart',
          blocks: [
            {
              h3: 'Modèle 1 : Studio 35 m², complexe basique, Ravda, €38 000',
              bullets: [
                'Taxes : €55/an | Charges (€5/m²) : €2 100/an.',
                'Services : €100 | Assurance : €90 | Réserve : €304.',
                'TOTAL : ~€2 649/an | Revenus locatifs (€280 × 7 mois) : €1 960.',
                'RÉSULTAT : Perte opérationnelle ~€689/an.',
              ],
            },
            {
              h3: 'Modèle 2 : Appartement 65 m², complexe intermédiaire, Sunny Beach, €75 000',
              bullets: [
                'Taxes : €120 | Charges (€9/m²) : €7 020.',
                'Services : €200 | Assurance : €140 | Réserve : €525 | Gestion (20%) : €864.',
                'TOTAL : ~€8 869/an | Revenus locatifs (€360 × 12) : €4 320.',
                'RÉSULTAT : Perte opérationnelle profonde. Les charges détruisent la logique d\'investissement.',
              ],
            },
            {
              h3: 'Modèle 3 : Appartement 65 m², immeuble urbain, Burgas, €85 000',
              bullets: [
                'Taxes : €130 | Charges : €0.',
                'Services : €600 | Assurance : €150 | Réserve : €595 | Gestion (10%) : €516.',
                'TOTAL : ~€1 991/an | Revenus locatifs (€430 × 12) : €5 160.',
                'Impôt location (9%) : €464 | REVENU NET : €2 705/an → ~3,2%.',
                'RÉSULTAT : Seul modèle avec cash-flow positif.',
              ],
            },
          ],
        },
        {
          h2: 'Conclusion',
          icon: 'conclusion',
          body: [
            "\"Combien coûte l'appartement ?\" est seulement la première question. La deuxième, tout aussi importante : \"Combien coûte-t-il à conserver ?\"",
            "La taxe foncière en Bulgarie est parmi les plus basses de l'UE. Mais les charges de copropriété d'un complexe balnéaire peuvent porter les coûts annuels à €10 000–13 000.",
            "Trois questions avant tout achat : quel est le montant des charges et comment a-t-il évolué ? Quels revenus locatifs sont réalistement envisageables ? Quel est le cash-flow net après tous les coûts ?",
          ],
        },
      ],
      cta_title: 'Calculer les coûts pour votre bien',
      cta_body: "Si vous envisagez d'acheter un bien en Bulgarie, nous pouvons construire un modèle financier complet : taxes, charges, revenus locatifs, rendement net.",
      cta_button: 'Nous contacter',
      sourcesTitle: 'Sources',
      noteTitle: 'Note',
      noteText: 'Données à jour en mars 2026. Les taux et tarifs sont susceptibles de modification.',
    },
  };

  const d = t[lang] ?? t['en'];

  const iconMap: Record<string, React.ReactNode> = {
    alert:      <AlertTriangle className="w-5 h-5 text-primary shrink-0" />,
    building:   <Building      className="w-5 h-5 text-primary shrink-0" />,
    calculator: <Calculator    className="w-5 h-5 text-primary shrink-0" />,
    zap:        <Zap           className="w-5 h-5 text-primary shrink-0" />,
    home:       <Home          className="w-5 h-5 text-primary shrink-0" />,
    shield:     <Shield        className="w-5 h-5 text-primary shrink-0" />,
    chart:      <BarChart3     className="w-5 h-5 text-primary shrink-0" />,
    warning:    <AlertTriangle className="w-5 h-5 text-primary shrink-0" />,
    strategy:   <TrendingUp    className="w-5 h-5 text-primary shrink-0" />,
    info:       <Info          className="w-5 h-5 text-primary shrink-0" />,
    conclusion: <Euro          className="w-5 h-5 text-primary shrink-0" />,
  };

  const ogLocale = lang === 'ru' ? 'ru_RU' : lang === 'bg' ? 'bg_BG' : lang === 'de' ? 'de_DE' : lang === 'fr' ? 'fr_FR' : 'en_US';

  return (
    <div className="min-h-screen flex flex-col">

      {/* ══════════════ SEO / OG / Twitter meta ══════════════ */}
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description"        content={meta.description} />
        <link rel="canonical"           href={`${BASE_URL}${SLUG}`} />

        {/* ── Open Graph (Facebook, LinkedIn, WhatsApp, Telegram, Threads) ── */}
        <meta property="og:type"         content="article" />
        <meta property="og:url"          content={`${BASE_URL}${SLUG}`} />
        <meta property="og:title"        content={meta.title} />
        <meta property="og:description"  content={meta.description} />
        <meta property="og:image"        content={cover.og_image} />
        <meta property="og:image:secure_url" content={cover.og_image} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type"   content="image/jpeg" />
        <meta property="og:image:alt"    content="Bulgaria sea view property 2026" />
        <meta property="og:site_name"    content="BulgariaEstate by AI Byte Consult" />
        <meta property="og:locale"       content={ogLocale} />

        {/* ── Twitter / X Card (large image) ── */}
        <meta name="twitter:card"         content="summary_large_image" />
        <meta name="twitter:title"        content={meta.title} />
        <meta name="twitter:description"  content={meta.description} />
        <meta name="twitter:image"        content={cover.og_image} />
        <meta name="twitter:image:alt"    content="Bulgaria sea view property 2026" />

        {/* ── Article structured meta ── */}
        <meta property="article:published_time" content="2026-03-18T09:00:00Z" />
        <meta property="article:modified_time"  content="2026-03-18T09:00:00Z" />
        <meta property="article:author"         content="BulgariaEstate by AI Byte Consult" />
        <meta property="article:section"        content="Real Estate Analytics" />
        <meta property="article:tag"            content="Bulgaria property, ownership costs, maintenance fee, property tax 2026" />

        {/* ── Google / Schema preload hint ── */}
        <link rel="preload" as="image" href={cover.og_image} />
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
          <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">{d.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{d.lead}</p>

          {/* Cover image */}
          <div className="rounded-xl overflow-hidden border bg-background">
            <img
              src={cover.image_url}
              alt={d.title}
              className="w-full h-[220px] md:h-[340px] object-cover"
              loading="eager"
              fetchPriority="high"
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

        {/* Disclaimer */}
        <div className="border rounded-xl p-5 mb-10 flex gap-3 items-start">
          <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1 text-sm">{d.noteTitle}</p>
            <p className="text-xs text-muted-foreground">{d.noteText}</p>
          </div>
        </div>

        {/* Article body */}
        <article className="space-y-12">
          {d.sections.map((s: any, idx: number) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold leading-tight flex items-center gap-2">
                {iconMap[s.icon] ?? <Info className="w-5 h-5 text-primary shrink-0" />}
                {s.h2}
              </h2>

              {s.body?.map((p: string, pi: number) => (
                <p key={pi} className="text-base leading-7 text-foreground/90">{p}</p>
              ))}

              {s.blocks?.map((b: any, bi: number) => (
                <div key={bi} className="rounded-xl border p-5 space-y-3 bg-background">
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary shrink-0" />{b.h3}
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {b.bullets.map((it: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/85">
                        <span className="text-primary mt-0.5 shrink-0">›</span><span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {s.body2?.map((p: string, pi: number) => (
                <p key={pi} className="text-base leading-7 text-foreground/90">{p}</p>
              ))}
            </section>
          ))}
        </article>

        {/* Sources */}
        <div className="border rounded-xl p-6 mt-12 mb-10">
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
            <p className="text-sm font-semibold mb-2">{d.cta_title}</p>
            <p className="text-xs text-muted-foreground mb-3">{d.cta_body}</p>
            <a href="https://wa.me/359988899109" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ExternalLink className="w-4 h-4" />{d.cta_button}
            </a>
            <p className="text-xs text-muted-foreground mt-2">estate@aibyteconsult.com</p>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default BulgariaRealOwnershipCostsArticle;