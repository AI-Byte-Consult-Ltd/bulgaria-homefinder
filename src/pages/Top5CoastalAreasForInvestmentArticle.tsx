import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  TrendingUp,
  MapPin,
  BarChart3,
  Clock,
  Building,
  Home,
  Landmark,
} from 'lucide-react';

/**
 * Article: Top 5 Coastal Areas for Investment (Black Sea, Bulgaria)
 * Languages: RU / EN / BG (based on i18n.language)
 * Notes:
 * - No emoji spam
 * - Key Facts are shown first
 * - Full article body follows below
 */
const Top5CoastalAreasForInvestmentArticle = () => {
  const { i18n } = useTranslation();

  const langRaw = (i18n.language || 'en').toLowerCase();
  const lang = langRaw.startsWith('ru') ? 'ru' : langRaw.startsWith('bg') ? 'bg' : 'en';

  // Unsplash image (Sunny Beach) — medium
  const cover = {
    image_url: 'https://images.unsplash.com/photo-1757863842644-87f09cd67010?w=900&q=80&auto=format&fit=crop',
    unsplash_author_name: 'Ondrej Bocek',
    unsplash_author_url:
      'https://unsplash.com/@ondrejbocek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    unsplash_photo_url:
      'https://unsplash.com/photos/coastal-city-with-a-long-sandy-beach-and-turquoise-ocean-ygBbaQTXzXQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  };

  const t = {
    ru: {
      back: 'На главную',
      date: '10 февраля 2026',
      readTime: 'Время чтения: ~7–9 минут',
      title: 'Топ-5 прибрежных районов для инвестиций: Солнечный Берег, Святой Влас и ещё 3 точки роста',
      subtitle:
        'Куда смотреть на Черноморском побережье Болгарии в 2026 году: спрос, сезонность, риски и стратегия покупки (включая декабрьский “низкий сезон”).',
      keyFactsTitle: 'Ключевые факты',
      noteTitle: 'Дисклеймер',
      noteText:
        'Это аналитический обзор и сценарные выводы, а не инвестиционная рекомендация. Перед покупкой — юридическая проверка и расчёт экономики (владение, аренда, простои).',
      photoCreditLabel: 'Фото для статьи:',
      photoCreditOn: 'на',
      sections: [
        {
          h2: 'Почему декабрь — недооценённый период для сделок у моря',
          p: [
            'Если вы покупаете недвижимость на побережье под аренду или “второй дом”, декабрь (и в целом низкий сезон) может быть стратегически выгодным временем: меньше ажиотажа, больше готовности к торгу, проще организовать просмотры и проверки документов.',
            'Минус очевидный: реальная сезонная доходность видна летом, а зимой сложнее “почувствовать” поток туристов. Поэтому в низкий сезон критично опираться на цифры: локация, тип дома, такса поддержки, сценарии загрузки и план управления.',
          ],
        },
        {
          h2: 'Как мы оценивали локации',
          bullets: [
            'Ликвидность: насколько легко продать объект в разумный срок.',
            'Спрос на аренду: сезонный и потенциально межсезонный.',
            'Качество фонда: новостройки, комплексы, управление, инфраструктура.',
            'Риски: переизбыток предложения, таксы поддержки, юридические нюансы.',
            'Инфраструктура: транспорт, медицина, магазины, прогулочные зоны, марина.',
          ],
        },
        {
          h2: '1) Sunny Beach (Солнечный Берег) — объём спроса и высокая сезонность',
          p: [
            'Sunny Beach — самая “массовая” точка побережья по туристическому потоку и выбору объектов. Это сильный рынок для стратегии “купить под летнюю аренду”, особенно если объект близко к морю и в комплексе с понятным управлением.',
            'Слабое место — высокая сезонность и конкуренция: похожих студий и 1-bed апартаментов много. Поэтому выигрывают объекты с преимуществом: первая/вторая линия, хороший ремонт, адекватная такса поддержки и сильная управляющая компания.',
          ],
          bullets: [
            'Лучше всего работают: компактные апартаменты под аренду, близко к пляжу.',
            'Риск: конкуренция и зависимость от сезона — нужен план управления.',
          ],
        },
        {
          h2: '2) Saint Vlas (Свети Влас) — более “премиальный” спрос и марина',
          p: [
            'Saint Vlas часто выбирают те, кому важнее спокойствие, видовые характеристики и более “жилой” характер района. Близость к марине и репутация локации дают потенциал на более высокий чек аренды в пик сезона.',
            'Для инвестора это может означать меньшую “массовость”, но лучшее позиционирование. Важно внимательно смотреть расходы: таксы поддержки в некоторых комплексах выше среднего, а это напрямую влияет на чистую доходность.',
          ],
          bullets: [
            'Плюс: “качество спроса” и позиционирование выше среднего.',
            'Риск: расходы владения (поддержка/управление) могут съесть доходность.',
          ],
        },
        {
          h2: '3) Nessebar (Несебр) — историческая ценность и стабильная привлекательность',
          p: [
            'Несебр даёт уникальное сочетание исторической ценности и пляжной локации. Это сильный аргумент для “второго дома” и аренды, особенно если объект удачно расположен относительно старого города и моря.',
            'Как и везде на побережье, качество объекта и документы решают всё: в исторических зонах и старом фонде могут быть нюансы по ремонту, статусу и ограничениям.',
          ],
          bullets: [
            'Плюс: узнаваемость, “вечная” туристическая привлекательность.',
            'Риск: старый фонд и юридические нюансы — требуется тщательная проверка.',
          ],
        },
        {
          h2: '4) Pomorie (Поморие) — более “жилая” среда и потенциал межсезонья',
          p: [
            'Поморие интереснее тем, что это не только курорт, но и город с более стабильной жизнью вне сезона. Это может дать более ровную структуру спроса: часть аренды может быть долгосрочной или “длительной” межсезонной.',
            'Для инвестора важно правильно выбрать микро-локацию: близость к морю, инфраструктура, удобство проживания и качество дома.',
          ],
          bullets: [
            'Плюс: менее “рваная” сезонность, потенциал долгосрочной аренды.',
            'Риск: рост может быть спокойнее, чем в топ-курортах.',
          ],
        },
        {
          h2: '5) Sozopol (Созопол) — атмосфера и высокий спрос на качественные объекты',
          p: [
            'Созопол — про атмосферу и качество, что часто отражается в спросе на более “дорогие” форматы отдыха. Для инвестиций это означает: меньше “массовых” студийных сценариев, больше ценности в хорошем объекте с видом/локацией и сильной презентацией.',
            'При выборе обращайте внимание на доступность парковки, качество подъездов, управление и реальную дистанцию до ключевых пляжей/променадов.',
          ],
          bullets: [
            'Плюс: спрос на качественные объекты и сильный “бренд” локации.',
            'Риск: входной билет часто выше — важна точность выбора.',
          ],
        },
        {
          h2: 'Короткая стратегия покупки (особенно в декабре)',
          bullets: [
            'Сделайте short-лист 5–10 объектов и сравните по €/м², таксе поддержки и ликвидности.',
            'Попросите документы заранее и проверьте: собственность, обременения, разрешения, назначение.',
            'Посчитайте экономику: чистая доходность = аренда минус расходы и простои.',
            'Если цель — аренда: выберите модель управления (самостоятельно / управляющая компания).',
          ],
        },
        {
          h2: 'Итог',
          p: [
            'Если ваша цель — инвестиции на побережье, лучше думать не “где красивее”, а “где понятнее экономика и ликвидность”. Sunny Beach даёт объём спроса, Saint Vlas — более премиальное позиционирование, Nessebar — историческую ценность, Pomorie — более ровную жизнь вне сезона, Sozopol — сильную атмосферу и спрос на качество.',
            'Если нужно — мы можем подобрать объекты, проверить документы, организовать сделки, переводы/легализацию и юридическое сопровождение.',
          ],
        },
      ],
      keyFacts: [
        'Для аренды на побережье сезонность — главный фактор: модель дохода нужно считать заранее.',
        'Декабрь и низкий сезон часто дают лучший торг и спокойную проверку документов.',
        'Лучше всего продаются объекты с понятными преимуществами: локация, вид, качество комплекса, управление.',
        'Такса поддержки и расходы владения могут “съесть” доходность — учитывайте их в расчёте.',
        'Комбинация “локация + документы + управление” важнее, чем просто низкая цена.',
      ],
    },

    en: {
      back: 'Back to Home',
      date: 'February 10, 2026',
      readTime: 'Reading time: ~7–9 minutes',
      title: 'Top 5 Coastal Areas for Investment',
      subtitle:
        'Where to focus on Bulgaria’s Black Sea coast in 2026: demand, seasonality, risks, and a winter (December) buying strategy.',
      keyFactsTitle: 'Key Facts',
      noteTitle: 'Disclaimer',
      noteText:
        'This is a market overview and scenario-based analysis, not investment advice. Always run legal due diligence and model the full economics (ownership costs, rental, vacancy).',
      photoCreditLabel: 'Article photo:',
      photoCreditOn: 'on',
      sections: [
        {
          h2: 'Why December can be a smart time to buy on the coast',
          p: [
            'December (and the broader off-season) can be strategically attractive: fewer competing buyers, more room for negotiation, and easier scheduling for viewings and document checks.',
            'The trade-off is obvious: peak rental performance happens in summer, so in winter you must rely on numbers — location quality, building management, annual fees, realistic occupancy scenarios, and your operations plan.',
          ],
        },
        {
          h2: 'How we assessed locations',
          bullets: [
            'Liquidity: how realistically you can resell within a reasonable time.',
            'Rental demand: peak season and potential off-season resilience.',
            'Stock quality: buildings, complexes, management, infrastructure.',
            'Risks: oversupply, annual fees, legal/document nuances.',
            'Infrastructure: transport, services, walkability, marina access.',
          ],
        },
        {
          h2: '1) Sunny Beach — scale of demand, strong seasonality',
          p: [
            'Sunny Beach is the most “high-volume” resort market with a wide choice of properties. It suits a summer-rental strategy, especially close to the sea and in well-managed complexes.',
            'The weakness is competition and seasonality: many similar studios and 1-bedroom units. Outperformers typically have real advantages: prime proximity, solid renovation, reasonable annual fees, and strong property management.',
          ],
          bullets: [
            'Best fit: compact units for summer rentals near the beach.',
            'Risk: high competition — management and positioning matter.',
          ],
        },
        {
          h2: '2) Saint Vlas — more premium positioning, marina-driven demand',
          p: [
            'Saint Vlas is often chosen for calmer surroundings, views, and a more residential feel. Marina proximity can support higher peak-season rates.',
            'From an investment standpoint, it can mean less “mass market” volume but stronger positioning. Watch ownership costs closely: annual complex fees can materially impact net yield.',
          ],
          bullets: [
            'Upside: higher-quality demand and stronger positioning.',
            'Risk: ownership costs (fees/management) can reduce net returns.',
          ],
        },
        {
          h2: '3) Nessebar — heritage appeal and long-term attractiveness',
          p: [
            'Nessebar combines beach proximity with heritage value, which supports “second home” demand and tourism-driven rentals.',
            'As always, documents and property condition are crucial: older stock may come with renovation, status, and compliance nuances.',
          ],
          bullets: [
            'Upside: timeless tourist appeal and recognition.',
            'Risk: older stock and legal nuances require deeper due diligence.',
          ],
        },
        {
          h2: '4) Pomorie — more year-round feel, better off-season resilience',
          p: [
            'Pomorie can be less purely “resort-only” and more livable beyond summer. That can translate into more stable demand structures — including longer stays or long-term rental opportunities.',
            'Micro-location selection matters: proximity to the sea, services, and building quality.',
          ],
          bullets: [
            'Upside: potentially smoother seasonality, long-term rental options.',
            'Risk: price growth may be steadier rather than explosive.',
          ],
        },
        {
          h2: '5) Sozopol — atmosphere, strong demand for quality units',
          p: [
            'Sozopol tends to attract a “quality-first” holiday segment. Investment outcomes often depend on selecting a genuinely strong unit: views, walkability, and strong presentation.',
            'Pay attention to parking, access roads, building management, and real walking distance to beaches/promenades.',
          ],
          bullets: [
            'Upside: strong “location brand” and quality-driven demand.',
            'Risk: higher entry price — selection must be precise.',
          ],
        },
        {
          h2: 'A simple buying playbook (especially in December)',
          bullets: [
            'Build a shortlist of 5–10 and compare €/m², annual fees, and liquidity.',
            'Request documents upfront: title, liens, permits, property status.',
            'Model net yield: rental income minus costs and vacancy.',
            'Choose your operations plan (self-manage vs property manager).',
          ],
        },
        {
          h2: 'Conclusion',
          p: [
            'For coastal investment, “pretty” matters less than clear economics and liquidity. Sunny Beach offers volume, Saint Vlas more premium positioning, Nessebar heritage appeal, Pomorie off-season resilience, and Sozopol a strong quality-driven brand.',
            'If needed, we can source properties, run due diligence, and handle legal support plus translations/legalization end-to-end.',
          ],
        },
      ],
      keyFacts: [
        'Seasonality is the key variable — model revenue and vacancy realistically.',
        'December can offer better negotiation and calmer due diligence.',
        'Properties with real advantages (location/view/management) resell better.',
        'Annual complex fees can materially reduce net yield — model them.',
        'Location + documents + management beats “cheap price” every time.',
      ],
    },

    bg: {
      back: 'Към началото',
      date: '10 февруари 2026',
      readTime: 'Време за четене: ~7–9 минути',
      title: 'Топ 5 крайбрежни зони за инвестиция',
      subtitle:
        'Къде да гледате по Черноморието през 2026 г.: търсене, сезонност, рискове и стратегия за покупка през декември (извън сезона).',
      keyFactsTitle: 'Ключови факти',
      noteTitle: 'Отказ от отговорност',
      noteText:
        'Това е аналитичен обзор и сценарен анализ, не инвестиционен съвет. Преди покупка — правна проверка и финансов модел (разходи, наем, празни периоди).',
      photoCreditLabel: 'Снимка към статията:',
      photoCreditOn: 'в',
      sections: [
        {
          h2: 'Защо декември може да е добър момент за покупка на морето',
          p: [
            'Декември (и извънсезонният период като цяло) често е стратегически изгоден: по-малко конкуриращи купувачи, повече пространство за преговори и по-лесна организация на огледи и проверки.',
            'Недостатъкът е ясен: пикът на наемите е през лятото. Затова през зимата трябва да се разчита на числа — локация, управление, годишни такси, реалистични сценарии за заетост и план за експлоатация.',
          ],
        },
        {
          h2: 'Как оценявахме локациите',
          bullets: [
            'Ликвидност: колко реалистично е да продадете в разумен срок.',
            'Търсене за наем: пик сезон и устойчивост извън сезона.',
            'Качество на фонда: сгради, комплекси, управление, инфраструктура.',
            'Рискове: свръхпредлагане, годишни такси, правни нюанси.',
            'Инфраструктура: транспорт, услуги, разходка пеша, марина.',
          ],
        },
        {
          h2: '1) Слънчев бряг — мащаб на търсене, силна сезонност',
          p: [
            'Слънчев бряг е най-“обемният” курортен пазар с огромен избор. Подходящ е за стратегия “купувам за летни наеми”, особено близо до морето и в добре управлявани комплекси.',
            'Слабата страна е конкуренцията: много сходни студиа и двустайни. По-добре се представят имоти с реални предимства: отлична локация, качествен ремонт, разумни такси и добро управление.',
          ],
          bullets: [
            'Най-подходящо: компактни апартаменти близо до плажа.',
            'Риск: висока конкуренция — управлението и позиционирането са ключови.',
          ],
        },
        {
          h2: '2) Свети Влас — по-премиум позициониране и марина',
          p: [
            'Свети Влас често се избира за по-спокойна среда, гледки и по-жилищен характер. Близостта до марина може да подкрепи по-високи цени на наем в пиков сезон.',
            'За инвеститор това означава по-силно позициониране, но трябва внимателно да се следят разходите: годишните такси в някои комплекси са над средните и влияят на нетната доходност.',
          ],
          bullets: [
            'Плюс: по-качествено търсене и по-добро позициониране.',
            'Риск: разходите (такси/управление) могат да намалят доходността.',
          ],
        },
        {
          h2: '3) Несебър — историческа стойност и дългосрочна привлекателност',
          p: [
            'Несебър комбинира морска локация с историческа стойност. Това подкрепя търсенето за “втори дом” и туризъм.',
            'Както навсякъде, документите и състоянието са решаващи: по-старият фонд може да има специфики по ремонт, статут и съответствие.',
          ],
          bullets: [
            'Плюс: разпознаваемост и “вечна” туристическа привлекателност.',
            'Риск: по-стар фонд и правни нюанси — нужна е задълбочена проверка.',
          ],
        },
        {
          h2: '4) Поморие — по-целогодишен профил и по-добра устойчивост извън сезона',
          p: [
            'Поморие често е по-жив град извън лятото, което може да даде по-стабилно търсене (вкл. по-дълги престои или дългосрочен наем).',
            'Микро-локацията е критична: близост до морето, услуги, качество на сградата.',
          ],
          bullets: [
            'Плюс: потенциално по-равна сезонност и възможности за дългосрочен наем.',
            'Риск: ръстът може да е по-умерен спрямо топ курортите.',
          ],
        },
        {
          h2: '5) Созопол — атмосфера и силно търсене на качествени имоти',
          p: [
            'Созопол е локация с “атмосфера”, което често означава по-високо търсене за качествени имоти. Инвестиционният резултат зависи от точния избор: гледки, удобство пеша и силно представяне.',
            'Обърнете внимание на паркиране, достъп, управление и реална дистанция до плажове/алея.',
          ],
          bullets: [
            'Плюс: силен “брандинг” на локацията и търсене за качество.',
            'Риск: по-висок вход — изборът трябва да е прецизен.',
          ],
        },
        {
          h2: 'Кратка стратегия за покупка (особено през декември)',
          bullets: [
            'Списък от 5–10 имота и сравнение по €/м², такси и ликвидност.',
            'Документи предварително: собственост, тежести, разрешителни, статут.',
            'Финансов модел: нетен наем = приходи минус разходи и празни периоди.',
            'План за управление: самостоятелно или управляваща компания.',
          ],
        },
        {
          h2: 'Заключение',
          p: [
            'При инвестиция на морето “красиво” е по-малко важно от ясна икономика и ликвидност. Слънчев бряг дава обем, Свети Влас — по-премиум позициониране, Несебър — историческа стойност, Поморие — по-добър профил извън сезона, а Созопол — силна марка и търсене за качество.',
            'При нужда можем да подберем имоти, да направим правна проверка и да осигурим юридическо съдействие плюс преводи/легализация “под ключ”.',
          ],
        },
      ],
      keyFacts: [
        'Сезонността е ключова — смятайте реалистично приходи и празни периоди.',
        'Декември често дава по-добра възможност за преговори и спокойна проверка.',
        'Имот с реални предимства (локация/гледка/управление) се продава по-лесно.',
        'Годишните такси могат значително да намалят нетната доходност.',
        'Локация + документи + управление е по-важно от “евтина цена”.',
      ],
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
            {t.back}
          </Link>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {t.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              {t.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{t.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{t.subtitle}</p>

          {/* Cover image */}
          <div className="rounded-xl overflow-hidden border bg-background">
            <img
              src={cover.image_url}
              alt="Sunny Beach, Bulgaria — Black Sea coast"
              className="w-full h-[220px] md:h-[320px] object-cover"
              loading="lazy"
            />
            <div className="px-4 py-3 text-xs text-muted-foreground flex flex-wrap items-center gap-2">
              <span>{t.photoCreditLabel}</span>
              <a
                href={cover.unsplash_author_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                {cover.unsplash_author_name} <ExternalLink className="w-3 h-3" />
              </a>
              <span>{t.photoCreditOn}</span>
              <a
                href={cover.unsplash_photo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Unsplash <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 container max-w-4xl">
        {/* Key Facts */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            {t.keyFactsTitle}
          </h2>
          <ul className="space-y-3 text-sm">
            {t.keyFacts.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="border rounded-xl p-6 mb-10 bg-background">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-primary" />
            {t.noteTitle}
          </h3>
          <p className="text-sm text-muted-foreground">{t.noteText}</p>
        </div>

        {/* Article */}
        <article className="space-y-10">
          {t.sections.map((s: any, idx: number) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold leading-tight">{s.h2}</h2>

              {s.p?.map((p: string, pi: number) => (
                <p key={pi} className="text-base leading-7 text-foreground/90">
                  {p}
                </p>
              ))}

              {s.bullets?.length ? (
                <ul className="space-y-2 text-sm">
                  {s.bullets.map((it: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <Home className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {s.blocks?.map((b: any, bi: number) => (
                <div key={bi} className="rounded-xl border p-5 space-y-3">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    {b.h3}
                  </h3>
                  {b.p?.map((bp: string, bpi: number) => (
                    <p key={bpi} className="text-sm leading-6 text-foreground/85">
                      {bp}
                    </p>
                  ))}
                  {b.bullets?.length ? (
                    <ul className="space-y-2 text-sm">
                      {b.bullets.map((it: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </section>
          ))}
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default Top5CoastalAreasForInvestmentArticle;
