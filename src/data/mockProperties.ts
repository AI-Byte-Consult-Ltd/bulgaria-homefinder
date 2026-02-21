export const mockProperties = [
  {
  id: 'mellia-park-10-ravda-77544',

  // ── Titles ──────────────────────────────────────────────
  title:   'Panoramic Sea-View Residence | Mellia Park 10, Ravda',
  titleRu: 'Панорамная резиденция с видом на море | Mellia Park 10, Равда',
  titleBg: 'Панорамна резиденция с морска гледка | Мелия Парк 10, Равда',
  titleDe: 'Panorama-Meerblick-Residenz | Mellia Park 10, Rawda',
  titleIt: 'Residenza Panoramica Vista Mare | Mellia Park 10, Ravda',

  // ── Price & Location ─────────────────────────────────────
  price:    120000,
  location:   'Ravda, Burgas Region',
  locationRu: 'Равда, область Бургас',
  locationBg: 'Равда, област Бургас',
  locationDe: 'Rawda, Region Burgas',
  locationIt: 'Ravda, Regione di Burgas',

  // ── Images (IPFS) ────────────────────────────────────────
  images: [
    'https://ipfs.io/ipfs/bafybeidylrpkiheyqiut4hamwqdcubm5yc543u7rsn4fc7vztc4hdo6kba',
    'https://ipfs.io/ipfs/bafybeif44c4jydc6yur73ssehtshgyfujeymlwgxqkncinv4cmzlyzcaam',
    'https://ipfs.io/ipfs/bafybeicfeafagpaanfp7ivjlh2qelvu23ey5bn4x2l37xs2deswj2aijqu',
    'https://ipfs.io/ipfs/bafybeie5sf52o33upacbecj3qkjbi3ejzpuqswxwvhvulcckhir7hoxbue',
    'https://ipfs.io/ipfs/bafybeigmgurhqngm4zsiipqtnacknsqndiynulli4fccxgyuptq7qznyqa',
    'https://ipfs.io/ipfs/bafybeiapqjnmdxgxzhkjdhvdlt4pnubgbpgkcbwk4tanxmsenug7ffvaxm',
    'https://ipfs.io/ipfs/bafybeie3avbkahyqzddr7vb7kl7wsnlsdctb4u7wjxtkjnmwnrfva44eiq',
    'https://ipfs.io/ipfs/bafybeifmfx6jykeasl6fxbqpfdu4nmads6y76pb66mrlijfwwkdwsnugnu',
    'https://ipfs.io/ipfs/bafybeic2cjbifpdx6uz6k3xkmyq4mcmh6q5fipihb5u7xv6mwxw47dnuli',
    'https://ipfs.io/ipfs/bafybeidvcocgvemqmjnsdpk6a52632kualzopbq4mlyxqzidx7bs64s7ny',
    'https://ipfs.io/ipfs/bafybeievyblhpqwbobrfr6mz4jgwqetiuag6byazthmvbx72nj72wujtoq',
    'https://ipfs.io/ipfs/bafybeicblnxaain7klti5d7r55sxho7ikrmou7luvkkk2kmkox3q5lpfqe',
    'https://ipfs.io/ipfs/bafybeiepaf5h22g3mbyjh6lomsiyr22a5wwzpcqnj7hujunekosgnlafle',
    'https://ipfs.io/ipfs/bafybeiewahasytvotmuxdb4yvdpi6tuj4nmpkwub5zl37odq2fcan4tili',
    'https://ipfs.io/ipfs/bafybeiemrnzyzks3mbpdu3mcichvvexqpr7jlcx4xrws7fybtroak4rvpa',
  ],

  // ── Type & Transaction ───────────────────────────────────
  type:            'apartment',   // apartment | house | land | block | farm | commercial | garage | industrial | office | other
  transactionType: 'sale' as const,

  // ── Status & Availability ────────────────────────────────
  status:         'for-sale',     // for-sale | for-rent | sold-out | coming-soon | reserved
  featured:       true,
  availableUnits: 1,

  // ── Core Specs ───────────────────────────────────────────
  area:        91,   // m² — total apartment area
  bedrooms:    2,
  bathrooms:   1,
  livingRooms: 1,    // TODO: confirm

  // ── Floor & Building ─────────────────────────────────────
  floor:       5, // TODO: add floor number (e.g. 4)
  totalFloors: 5, // TODO: add total floors in building (e.g. 4 — top floor)
  yearBuilt:   2016,
  actSixteen:  true, // Act 16 confirmed — building legally commissioned

  // ── View & Terrace ───────────────────────────────────────
  view:        'Sea view',  // near-360° panoramic sea view — Ravda + Nessebar coastline
  terraceArea: 28,        // TODO: add terrace m² (large panoramic terrace — confirm size)

  // ── Land ─────────────────────────────────────────────────
  landArea:    null,        // N/A for apartment

  // ── Parking ──────────────────────────────────────────────
  parkingSpots: null,       // TODO: confirm parking availability in complex

  // ── Maintenance ──────────────────────────────────────────
  maintenanceFee: 7,        // EUR/m²/year — one of the lowest on the coast

  // ── Descriptions ─────────────────────────────────────────
  description: `Panoramic near-360° sea view from Ravda and Nessebar along the full coastline. Steps from Ravda central beach in Mellia Park 10. Layout: open living room with kitchen, 2 bedrooms, bathroom, and a large panoramic terrace. Complex amenities: pool, kids playground, 24/7 security, landscaped gardens. Built 2016, top floor. Annual maintenance: 7 EUR/m². Ideal for year-round living, a holiday home, or a rental investment.`,

  descriptionRu: `Панорамный почти 360° вид на море — от Равды и Несебра вдоль всей береговой линии. В нескольких шагах от центрального пляжа Равды, комплекс Mellia Park 10. Планировка: гостиная с кухней открытого типа, 2 спальни, санузел и большая панорамная терраса. Инфраструктура комплекса: бассейн, детская площадка, круглосуточная охрана, озеленённая территория. Год постройки — 2016, верхний этаж. Такса поддержки: 7 EUR/м² в год. Отлично подходит для круглогодичного проживания, отдыха или арендной инвестиции.`,

  descriptionBg: `Панорамна почти 360° морска гледка от Равда и Несебър по цялата крайбрежна линия. На крачки от централния плаж на Равда, в комплекс Мелия Парк 10. Разпределение: дневна с кухня от отворен тип, 2 спални, баня и голяма панорамна тераса. Удобства в комплекса: басейн, детска площадка, 24/7 охрана, озеленени площи. Построен 2016 г., последен етаж. Годишна такса поддръжка: 7 EUR/кв.м. Отличен избор за целогодишно живеене, ваканционен дом или инвестиция под наем.`,

  descriptionDe: `Panoramablick auf das Meer — fast 360° von Rawda und Nessebar entlang der gesamten Küstenlinie. Nur wenige Schritte vom Zentralstrand Rawdas entfernt, im Komplex Mellia Park 10. Grundriss: offene Wohnküche, 2 Schlafzimmer, Bad und eine große Panoramaterrasse. Komplex-Ausstattung: Pool, Kinderspielplatz, 24/7-Sicherheitsdienst, gepflegte Gartenanlagen. Baujahr 2016, Dachgeschoss. Jährliche Instandhaltungsgebühr: 7 EUR/m². Ideal als Ganzjahreswohnsitz, Feriendomizil oder Mietinvestition.`,

  descriptionIt: `Vista mare panoramica quasi a 360° da Ravda e Nessebar lungo l'intera costa. A pochi passi dalla spiaggia centrale di Ravda, nel complesso Mellia Park 10. Planimetria: soggiorno con cucina open space, 2 camere da letto, bagno e un'ampia terrazza panoramica. Servizi del complesso: piscina, parco giochi per bambini, sicurezza 24/7, giardini curati. Costruito nel 2016, ultimo piano. Quota annuale di manutenzione: 7 EUR/m². Ideale come residenza tutto l'anno, casa vacanza o investimento da affitto.`,
},
  // FEATURED PROPERTY - Zornitsa House
  {
  id: 'zornitsa-house-75239',

  // ── Titles ──────────────────────────────────────────────
  title:   'Value-Add Investment: Two-Storey Stone House + 1,910 m² Plot | Zornitsa Village',
  titleRu: 'Инвестиционный проект: двухэтажный каменный дом + участок 1 910 м² | с. Зорница',
  titleBg: 'Инвестиционен проект: двуетажна каменна къща + парцел 1 910 м² | с. Зорница',
  titleDe: 'Investment-Projekt: Zweistöckiges Steinhaus + 1.910 m² Grundstück | Dorf Zornitsa',
  titleIt: 'Progetto Investimento: Casa in Pietra + Terreno 1.910 m² | Villaggio Zornitsa',

  // ── Price & Location ─────────────────────────────────────
  price:    19700,
  location:   'Zornitsa, Sredets Municipality, Burgas Region',
  locationRu: 'с. Зорница, общ. Средец, область Бургас',
  locationBg: 'с. Зорница, общ. Средец, обл. Бургас',
  locationDe: 'Dorf Zornitsa, Gemeinde Sredets, Region Burgas',
  locationIt: 'Villaggio Zornitsa, Comune di Sredets, Regione di Burgas',

  // ── Images ───────────────────────────────────────────────
  images: [
    'https://www.listproperty4free.com/uploaded_files/6/c/e/c/6cec5672ff1ccdc22f5c331063b8ff32.jpeg',
    // TODO: add more photos of exterior, interior, plot, well, surroundings
  ],

  // ── Type & Transaction ───────────────────────────────────
  type:            'house',
  transactionType: 'sale' as const,

  // ── Status & Availability ────────────────────────────────
  status:         'for-sale',
  featured:       true,
  availableUnits: 1,

  // ── Core Specs ───────────────────────────────────────────
  area:        112,   // m² — total house area (two floors)
  bedrooms:    4,
  bathrooms:   2,
  livingRooms: 1,     // TODO: confirm room count layout

  // ── Floor & Building ─────────────────────────────────────
  floor:       null,  // N/A — detached house
  totalFloors: 2,
  yearBuilt:   1969,
  actSixteen:  null,  // TODO: confirm — older rural properties often require verification

  // ── View & Outdoor ───────────────────────────────────────
  view:        'Village & nature view',
  terraceArea: null,  // TODO: confirm — likely has yard/porch area

  // ── Land ─────────────────────────────────────────────────
  landArea:    1910,  // m² — privately owned, fully fenced plot

  // ── Parking ──────────────────────────────────────────────
  parkingSpots: null, // TODO: confirm — large plot likely allows 2+ cars

  // ── Maintenance ──────────────────────────────────────────
  maintenanceFee: null, // N/A — standalone rural house, no complex fees

  // ── Investment Case ──────────────────────────────────────
  investmentCase: {
    purchasePrice:          19700,   // EUR — acquisition cost
    renovationEstimateMin:  20000,   // EUR
    renovationEstimateMax:  25000,   // EUR
    totalInvestmentMin:     39700,   // EUR
    totalInvestmentMax:     44700,   // EUR
    comparableMarketValueMin: 78000, // EUR — renovated comparable houses in area
    potentialUpsideMin:     33300,   // EUR vs total investment max
    potentialUpsideMax:     38300,   // EUR vs total investment min
    roiEstimateMin:         74,      // % — (78k - 44.7k) / 44.7k
    roiEstimateMax:         97,      // % — (78k - 39.7k) / 39.7k
    useCase: ['private-home', 'guest-house', 'airbnb', 'eu-residency-base'],
    distanceToSea:          50,      // km
    mineralSprings:         150,     // m — natural mineral springs nearby
    utilities:              ['electricity', 'water-mains', 'well'],
    construction:           'stone-ground-floor-brick-upper',
    conditionOnPurchase:    'full-renovation-required',
  },

  // ── Descriptions ─────────────────────────────────────────
  description: `Value-add investment opportunity: two-storey detached house (112 m²) on a privately owned 1,910 m² plot in the quiet village of Zornitsa, Burgas Region — 50 km from the Black Sea coast.

Purchase price: €19,700. Estimated full renovation budget: €20,000–25,000. Total investment: ~€40,000–45,000. Comparable renovated houses in the area start from €78,000 — implying potential upside of €33,000–38,000 (74–97% ROI on total invested capital).

The house requires full renovation and represents a blank canvas. Ground floor: stone construction. Upper floor: brick. Connected to mains electricity and water; private well on plot. Natural mineral springs 150m away. The plot is large enough for a garden, terrace extension, outbuilding, or parking.

Use cases: primary or secondary private residence, guest house, rural retreat, Airbnb / short-term rental operation, or a base for EU residency via Bulgarian property ownership. Bulgaria has been an EU member since 2007 — property ownership grants legal grounds for residency applications.

Ideal for investors, renovation specialists, or buyers seeking an EU foothold at the lowest possible entry price.`,

  descriptionRu: `Инвестиционный проект с добавленной стоимостью: двухэтажный отдельно стоящий дом (112 м²) на частном земельном участке 1 910 м² в тихом селе Зорница, Бургасская область — 50 км от Черноморского побережья.

Цена покупки: €19 700. Расчётный бюджет полной реконструкции: €20 000–25 000. Совокупный объём инвестиций: ~€40 000–45 000. Сопоставимые отремонтированные дома в районе продаются от €78 000 — потенциальный прирост стоимости: €33 000–38 000 (ROI 74–97% на вложенный капитал).

Дом требует полного ремонта — это чистый холст для реализации. Первый этаж: каменная кладка. Второй этаж: кирпич. Подключён к электросети и центральному водоснабжению; на участке имеется собственный колодец. Минеральные источники в 150 м. Участок позволяет разбить сад, обустроить террасу, построить хозблок или организовать парковку.

Варианты использования: основное или второе жильё, гостевой дом, сельский ретрит, работа по модели Airbnb / краткосрочная аренда, а также база для получения вида на жительство в ЕС через владение недвижимостью в Болгарии. Болгария является членом ЕС с 2007 года — право собственности на недвижимость является законным основанием для оформления вида на жительство.

Подходит для инвесторов, специалистов по реновации или покупателей, которым нужна точка входа в ЕС по минимальной цене.`,

  descriptionBg: `Инвестиционен проект с добавена стойност: двуетажна самостоятелна къща (112 м²) на частен поземлен имот от 1 910 м² в тихото село Зорница, обл. Бургас — 50 км от Черноморието.

Покупна цена: €19 700. Прогнозен бюджет за пълна реновация: €20 000–25 000. Обща инвестиция: ~€40 000–45 000. Сравними реновирани къщи в района се предлагат от €78 000 — потенциална добавена стойност: €33 000–38 000 (ROI 74–97% върху вложения капитал).

Имотът изисква цялостна реновация — напълно свободен за концепция. Първи етаж: каменна зидария. Втори етаж: тухлена конструкция. Включена електричество и водоснабдяване; собствен кладенец в двора. Минерални извори на 150 м. Парцелът позволява градина, тераса, стопанска постройка или паркинг.

Приложения: основно или ваканционно жилище, гостилница, селски retreat, Airbnb / краткосрочен наем или база за получаване на разрешение за пребиваване в ЕС. България е член на ЕС от 2007 г. — притежаването на имот е законово основание за кандидатстване за пребиваване.

Идеален за инвеститори, специалисти по реновации или купувачи, търсещи достъп до ЕС на минимална цена.`,

  descriptionDe: `Wertsteigerungsprojekt: zweistöckiges freistehendes Haus (112 m²) auf einem privaten Grundstück von 1.910 m² im ruhigen Dorf Zornitsa, Region Burgas — 50 km vom Schwarzen Meer entfernt.

Kaufpreis: €19.700. Geschätztes Renovierungsbudget: €20.000–25.000. Gesamtinvestition: ~€40.000–45.000. Vergleichbare renovierte Häuser in der Region beginnen bei €78.000 — potenzieller Wertzuwachs: €33.000–38.000 (ROI 74–97% auf das investierte Kapital).

Das Haus erfordert eine Vollrenovierung. Erdgeschoss: Steinbau. Obergeschoss: Ziegel. Anschluss an Strom und Wasserversorgung; eigener Brunnen auf dem Grundstück. Mineralquellen in 150 m Entfernung. Das Grundstück bietet Platz für Garten, Terrasse, Nebengebäude oder Stellplätze.

Verwendungsmöglichkeiten: Erst- oder Zweitwohnsitz, Gästehaus, Landhaus, Airbnb / Kurzzeitvermietung oder Basis für einen EU-Aufenthaltstitel durch bulgarischen Immobilienbesitz. Bulgarien ist seit 2007 EU-Mitglied — Immobilieneigentum bildet eine rechtliche Grundlage für Aufenthaltsanträge.

Ideal für Investoren, Renovierungsspezialisten oder Käufer, die einen EU-Einstieg zum niedrigstmöglichen Preis suchen.`,

  descriptionIt: `Progetto di investimento a valore aggiunto: casa indipendente su due piani (112 m²) su un terreno privato di 1.910 m² nel tranquillo villaggio di Zornitsa, Regione di Burgas — 50 km dalla costa del Mar Nero.

Prezzo di acquisto: €19.700. Budget stimato per la ristrutturazione completa: €20.000–25.000. Investimento totale: ~€40.000–45.000. Case ristrutturate comparabili nella zona partono da €78.000 — potenziale plusvalore: €33.000–38.000 (ROI 74–97% sul capitale investito).

La casa richiede una ristrutturazione completa — tela bianca per qualsiasi progetto. Piano terra: costruzione in pietra. Piano superiore: mattoni. Allacciata a elettricità e acqua; pozzo privato nel terreno. Sorgenti minerali a 150 m. Il terreno consente giardino, terrazza, dependance o parcheggio.

Utilizzi: residenza principale o secondaria, casa per gli ospiti, agriturismo, Airbnb / affitto breve, o base per la residenza UE tramite proprietà immobiliare bulgara. La Bulgaria è membro UE dal 2007 — la proprietà immobiliare costituisce base legale per le domande di residenza.

Ideale per investitori, specialisti di ristrutturazione o acquirenti che cercano un accesso all'UE al prezzo minimo possibile.`,
},
  // FEATURED PROPERTY - Burgas, Slaveykov 50 - Luxury Apartment
// ── INVESTMENT APARTMENT — Burgas Slaveykov, active rental income ────────────
{
  id: 'burgas-slaveykov-50-lux',

  // ── Titles ──────────────────────────────────────────────
  title:   'Income-Generating Luxury Apartment | Signed Rental Contract €450/mo | Slaveykov, Burgas',
  titleRu: 'Доходная люкс-квартира | Действующий договор аренды €450/мес | Славейков, Бургас',
  titleBg: 'Апартамент с доход | Активен наемен договор €450/мес | Славейков, Бургас',
  titleDe: 'Rendite-Luxuswohnung | Laufender Mietvertrag €450/Monat | Slaveykov, Burgas',
  titleIt: 'Appartamento con Reddito Attivo | Contratto Affitto €450/mese | Slaveykov, Burgas',

  // ── Price & Location ─────────────────────────────────────
  price:    140000,
  location:   'Burgas, Slaveykov District',
  locationRu: 'Бургас, квартал Славейков',
  locationBg: 'Бургас, кв. Славейков',
  locationDe: 'Burgas, Stadtviertel Slaveykov',
  locationIt: 'Burgas, Quartiere Slaveykov',

  // ── Images (IPFS) ────────────────────────────────────────
  images: [
    'https://ipfs.io/ipfs/bafybeidb6jnowpx77vumucgl3ymyqz3rh3xvzum3ebwdvbxmjrqz5z4bvq',
    'https://ipfs.io/ipfs/bafkreihsb3mxv6ap4sn6jnmllwocd37cmjyydwudtw2rhcjncqik7x2lja',
    'https://ipfs.io/ipfs/bafkreidmkv7eqmppkh2fsmt3s74ovpfk4zneztxomqrbce3smulrzf4eja',
    'https://ipfs.io/ipfs/bafkreifxpqobjmd6po22clcwtfylegrvviswsmsg5rhntonuibaife2f4e',
    'https://ipfs.io/ipfs/bafkreigrsjl3ybpbwu5b37k62lgjveg5al6dccdos6pjjjhyhzcwzs4i4i',
    'https://ipfs.io/ipfs/bafkreiauptmf6kxm2owndnuz5ofxiavcgkadkarirquejycpgc6p2x336q',
    'https://ipfs.io/ipfs/bafkreielabiz2y63bchhk4d6yfzczqlugzn3xo7hdlm4cgjyseg3netmia',
    'https://ipfs.io/ipfs/bafkreic2tompgwqvtoi5mlcmmjkd5qfa27h4fth3ypifkkstlkjbt6gyla',
    'https://ipfs.io/ipfs/bafkreidhtexyik42alqr2vcgmlkz6hzxvyf7643oerlt7xhrw3ebze4x2a',
    'https://ipfs.io/ipfs/bafkreihpxox57oawokplglr7suqptljjlp24zutlwqpddqagorsmyml32m',
    'https://ipfs.io/ipfs/bafkreibhz6iwatxvnwjjj7rzh75gyogiyolodmuje7ilw4be2m2jtltlkq',
    'https://ipfs.io/ipfs/bafkreighoezlcpqxgih62s665jg56pwfslig4acqmwx4brgx6i3rifm6i4',
    'https://ipfs.io/ipfs/bafkreihkxdvc3c6saqb6c7zifnw6wmbx6er7exbgsaajxn5i6npbputwum',
    'https://ipfs.io/ipfs/bafkreihb7b4jkl7rmi2fox2rnqmigz3pwbvdt4log7mfqcwssu24walyw4',
    'https://ipfs.io/ipfs/bafkreifcnactqbdqc3z3ysyxjgzgeu6dsbv22zy4ry5pbqymrgoy7b5zpu',
    'https://ipfs.io/ipfs/bafkreie5rnjdxb7ffotk5xz7skua2j2ine43six7pknw7k6lah6yjbis3q',
    'https://ipfs.io/ipfs/bafkreictnolyaor4oagnxvqj2l4ggyqrppwpio4btxhy7dynggjhnwyobm',
    'https://ipfs.io/ipfs/bafkreidaxv4t5ddxlvkmpxk2ecsxuix7yoc4upwugtzdgoddvu4iy6hhkq',
    'https://ipfs.io/ipfs/bafkreigfojsbo6incm5nvxupi4zlrtcyfe5hltemjytgeysagljm6iawea',
    'https://ipfs.io/ipfs/bafkreicjfvowjmdnw4hqsigrfkwfuhtxngjaukqn6y7qurmtusrab5kawe',
    'https://ipfs.io/ipfs/bafkreicadb6xllurz4nbl2yy3qyh6adgx2rcwywchja3ajlhveapko6tsi',
    'https://ipfs.io/ipfs/bafkreiflcszws3ycebuk6gshjgs7v677fsl7ii26fxzseyd2ykuv5a4f6e',
    'https://ipfs.io/ipfs/bafkreibydttajeseyc7xhkpvvfs4caswyyuyf5i3mxejszcfxspjne5n2e',
    'https://ipfs.io/ipfs/bafkreidifsckd76oguxzu2oaq7mxcn7idy4zlfmj2gwqe3lthxsyfjgvua',
    'https://ipfs.io/ipfs/bafkreicvfejrqavlco2lwo6o3c5n2mcouegzi4qwxafvxnr6auwe2bujki',
    'https://ipfs.io/ipfs/bafkreia3riuwecssgneio6eys4ibptyiyupncm2pu3ztskietl7tc7cy2q',
    'https://ipfs.io/ipfs/bafkreidvffc5fzn63xsl5kn5veal5hdajetyspd3d2of4jng2tgvo6juua',
    'https://ipfs.io/ipfs/bafkreihpnl6mplfro4rtovgviomn6cwnirsfju3d4qwmw3sm5ia2z77a6a',
    'https://ipfs.io/ipfs/bafkreianqglq3ffckxufzlzucqr4ahslucbxr6hyvi5lip46n3s7t3rqwq',
    'https://ipfs.io/ipfs/bafkreieytezkhooq2e6e5qgdo5sdfkfugm752bx4ao7gb5hlevuk4rymii',
    'https://ipfs.io/ipfs/bafkreicfwnvzud6jyji226t7oljtflrinvzlcqh4g6mdk5vubtpfqe7ggu',
    'https://ipfs.io/ipfs/bafkreicvah22gltry3e6xc7tj2zfvnpa22pscya5ewnajidcn4iu2yvnnq',
  ],

  // ── Type & Transaction ───────────────────────────────────
  type:            'apartment',
  transactionType: 'sale' as const,

  // ── Status & Availability ────────────────────────────────
  status:         'for-sale',
  featured:       true,
  availableUnits: 1,

  // ── Core Specs ───────────────────────────────────────────
  area:        60,   // m²
  bedrooms:    1,
  bathrooms:   1,
  livingRooms: 1,

  // ── Floor & Building ─────────────────────────────────────
  floor:       16,
  totalFloors: null,  // TODO: confirm total floors (not top floor per description)
  yearBuilt:   null,  // TODO: confirm
  actSixteen:  true,

  // ── View & Outdoor ───────────────────────────────────────
  view:        null,  // TODO: confirm — 16th floor likely has city / sea view
  terraceArea: null,  // TODO: confirm balcony/terrace

  // ── Land & Parking ───────────────────────────────────────
  landArea:     null,   // N/A — apartment
  parkingSpots: null,   // TODO: confirm

  // ── Maintenance ──────────────────────────────────────────
  maintenanceFee: null, // TODO: confirm — request from seller

  // ── Furnishing ───────────────────────────────────────────
  furnished:       true,
  furnishingLevel: 'luxury', // luxury | full | partial | unfurnished

  // ── Investment Case ──────────────────────────────────────
  investmentCase: {
    // Income
    monthlyRent:         450,    // EUR/month — signed contract
    annualRentalIncome:  5400,   // EUR/year (450 × 12)
    rentalContractStatus: 'signed-active', // signed-active | verbal | none

    // Acquisition costs (Bulgaria standard)
    purchasePrice:       140000,
    acquisitionCosts:    7000,   // ~5% — transfer tax ~3% + notary + registration
    totalCashIn:         147000, // purchase + acquisition costs

    // Gross yield on purchase price
    grossYieldOnPrice:   3.86,   // % = 5400 / 140000 × 100

    // Gross yield on total cash invested (incl. acquisition costs)
    grossYieldOnTotal:   3.67,   // % = 5400 / 147000 × 100

    // Net yield estimate (deduct ~15% for tax, minor maintenance, vacancy buffer)
    estimatedNetYield:   3.10,   // % conservative estimate

    // Payback
    paybackYearsGross:   25.9,   // years = 140000 / 5400
    paybackYearsOnTotal: 27.2,   // years = 147000 / 5400

    // Monthly cash flow (before tax)
    monthlyCashFlowGross: 450,   // EUR

    // Capital appreciation context (NSI Q3 2025: Burgas +6.2% single quarter)
    marketAppreciationNote: 'Burgas recorded +6.2% in Q2 2025 alone (NSI). At 5% annual appreciation, asset reaches ~€178,500 in 5 years.',

    // 5-year total return scenario (conservative)
    fiveYearRentalIncome:    27000,  // EUR = 5400 × 5
    fiveYearAppreciation:    38500,  // EUR = 140000 × (1.05^5 - 1), ~27.6%
    fiveYearTotalReturn:     65500,  // EUR combined
    fiveYearROI:             44.6,   // % = 65500 / 147000 × 100

    useCase: ['passive-income', 'long-term-rental', 'capital-appreciation', 'eu-residency-base'],
  },

  // ── Descriptions ─────────────────────────────────────────
  description: `Turnkey income-generating investment: luxury 1-bedroom apartment on the 16th floor in Slaveykov district, Burgas — sold with an active signed rental contract at €450/month.

INVESTMENT NUMBERS:
- Purchase price: €140,000
- Monthly rental income: €450 (signed contract — income starts Day 1)
- Annual rental income: €5,400
- Gross yield: 3.86% on purchase price
- 5-year scenario: €27,000 rental income + ~€38,500 capital appreciation = ~€65,500 total return on €147,000 invested (~44.6% ROI over 5 years)
- Burgas market: +6.2% in a single quarter (NSI Q2 2025) — one of the fastest-growing EU coastal cities

The apartment: 60 m², fully furnished with premium furniture and high-end appliances. Modern designer interior, functional layout. Floor 16 — panoramic views. No renovation needed. No management overhead — tenant in place.

Buy it today, receive rent from Day 1. Ideal for passive income investors, EU residency applicants, or buyers seeking a premium Burgas city asset.`,

  descriptionRu: `Готовая доходная инвестиция: люкс однокомнатная квартира на 16-м этаже в квартале Славейков, Бургас — продаётся с действующим подписанным договором аренды на €450 в месяц.

ИНВЕСТИЦИОННЫЕ ПОКАЗАТЕЛИ:
- Цена покупки: €140 000
- Ежемесячный арендный доход: €450 (подписанный договор — доход с первого дня)
- Годовой арендный доход: €5 400
- Валовая доходность: 3,86% от цены покупки
- Сценарий на 5 лет: €27 000 аренды + ~€38 500 прироста стоимости = ~€65 500 совокупная доходность на €147 000 вложенных (~44,6% ROI за 5 лет)
- Рынок Бургаса: +6,2% за один квартал (NSI, Q2 2025) — один из самых быстрорастущих прибрежных городов ЕС

Квартира: 60 м², полностью меблирована мебелью и техникой премиум-класса. Современный дизайнерский интерьер, продуманная планировка. 16-й этаж — панорамные виды. Ремонт не требуется. Управление не нужно — арендатор уже есть.

Покупаете сегодня — получаете арендный доход с первого дня. Идеально для пассивных инвесторов, желающих получить вид на жительство в ЕС или премиальный актив в Бургасе.`,

  descriptionBg: `Готова доходна инвестиция: луксозен едностаен апартамент на 16-и етаж в кв. Славейков, Бургас — продава се с активен подписан наемен договор на €450/месец.

ИНВЕСТИЦИОННИ ПОКАЗАТЕЛИ:
- Покупна цена: €140 000
- Месечен наемен приход: €450 (подписан договор — доход от първия ден)
- Годишен наемен приход: €5 400
- Брутна доходност: 3,86% от покупната цена
- Сценарий за 5 години: €27 000 наем + ~€38 500 ценово поскъпване = ~€65 500 обща доходност на €147 000 вложени (~44,6% ROI за 5 години)
- Пазар Бургас: +6,2% за едно тримесечие (НСИ, Q2 2025) — един от най-бързо растящите крайбрежни градове в ЕС

Апартаментът: 60 м², напълно обзаведен с висококласни мебели и уреди. Модерен дизайнерски интериор, функционално разпределение. 16-и етаж — панорамна гледка. Не се изисква ремонт. Без управленски усилия — наемателят е на място.

Купувате днес — получавате наем от първия ден. Идеален за пасивни инвеститори, кандидати за пребиваване в ЕС или купувачи, търсещи премиален актив в Бургас.`,

  descriptionDe: `Schlüsselfertige Renditeanlage: Luxuriöse 1-Zimmer-Wohnung im 16. Stock im Stadtviertel Slaveykov, Burgas — verkauft mit aktivem unterzeichnetem Mietvertrag über €450/Monat.

INVESTITIONSKENNZAHLEN:
- Kaufpreis: €140.000
- Monatliche Mieteinnahme: €450 (unterzeichneter Vertrag — Einnahmen ab Tag 1)
- Jährliche Mieteinnahme: €5.400
- Bruttorendite: 3,86% auf den Kaufpreis
- 5-Jahres-Szenario: €27.000 Mieteinnahmen + ~€38.500 Wertsteigerung = ~€65.500 Gesamtrendite auf €147.000 investiertes Kapital (~44,6% ROI in 5 Jahren)
- Markt Burgas: +6,2% in einem einzigen Quartal (NSI, Q2 2025) — eine der am schnellsten wachsenden Küstenstädte der EU

Die Wohnung: 60 m², vollständig mit Premiummöbeln und hochwertigen Geräten ausgestattet. Modernes Designer-Interieur, funktionale Raumaufteilung. 16. Etage — Panoramablick. Keine Renovierung erforderlich. Kein Verwaltungsaufwand — Mieter ist bereits vorhanden.

Kaufen Sie heute — erhalten Sie Mieteinnahmen ab dem ersten Tag. Ideal für Passiveinkommensinvestoren, EU-Aufenthaltsbewerber oder Käufer, die ein Premium-Asset in Burgas suchen.`,

  descriptionIt: `Investimento chiavi in mano con reddito attivo: appartamento di lusso con 1 camera da letto al 16° piano nel quartiere Slaveykov, Burgas — venduto con contratto d'affitto firmato e attivo a €450/mese.

DATI DELL'INVESTIMENTO:
- Prezzo di acquisto: €140.000
- Reddito mensile da locazione: €450 (contratto firmato — reddito dal giorno 1)
- Reddito annuale da locazione: €5.400
- Rendimento lordo: 3,86% sul prezzo di acquisto
- Scenario a 5 anni: €27.000 di affitti + ~€38.500 di rivalutazione = ~€65.500 rendimento totale su €147.000 investiti (~44,6% ROI in 5 anni)
- Mercato di Burgas: +6,2% in un solo trimestre (NSI, Q2 2025) — una delle città costiere UE in più rapida crescita

L'appartamento: 60 m², completamente arredato con mobili ed elettrodomestici premium. Interior design moderno, planimetria funzionale. 16° piano — viste panoramiche. Nessuna ristrutturazione necessaria. Nessuna gestione — l'inquilino è già presente.

Acquistate oggi — ricevete l'affitto dal primo giorno. Ideale per investitori a reddito passivo, richiedenti residenza UE o acquirenti che cercano un asset premium a Burgas.`,
},

// ── SKARABEY MADIKA — New Development Block ─────────────────────────────────
{
  id: 'skarabey-madika',

  // ── Titles ──────────────────────────────────────────────
  title:   'New Development | Skarabey Madika Residential Building | Burgas',
  titleRu: 'Новостройка | Жилой комплекс «Скарабей Мадика» | Бургас',
  titleBg: 'Ново строителство | Жилищна сграда "Скарабей Мадика" | Бургас',
  titleDe: 'Neubau | Wohngebäude Skarabey Madika | Burgas',
  titleIt: 'Nuova Costruzione | Edificio Residenziale Skarabey Madika | Burgas',

  // ── Price & Location ─────────────────────────────────────
  price:    85000,
  location:   'Burgas, Madika District',
  locationRu: 'Бургас, квартал Мадика',
  locationBg: 'Бургас, кв. Мадика',
  locationDe: 'Burgas, Stadtviertel Madika',
  locationIt: 'Burgas, Quartiere Madika',

  // ── Images ───────────────────────────────────────────────
  images: [
    'https://ipfs.io/ipfs/bafybeih2yeesnsbwv66tm7yjmor77ngfeocf7htpd4lixfzinpk2ml7wju',
    // TODO: add more photos — exterior, interior units, floor plans, common areas
  ],

  // ── Type & Transaction ───────────────────────────────────
  type:            'apartment',
  transactionType: 'sale' as const,

  // ── Status & Availability ────────────────────────────────
  status:         'for-sale',
  featured:       true,
  availableUnits: 25,

  // ── Core Specs (per unit — confirm per floor plan) ───────
  area:        75,   // m² — confirm per specific unit chosen
  bedrooms:    2,
  bathrooms:   1,
  livingRooms: 1,

  // ── Floor & Building ─────────────────────────────────────
  floor:       null,  // varies by unit — TODO: specify per unit
  totalFloors: null,  // TODO: confirm building height
  yearBuilt:   null,  // TODO: confirm completion / delivery date
  actSixteen:  null,  // TODO: confirm — new build, check completion stage

  // ── View & Outdoor ───────────────────────────────────────
  view:        null,  // TODO: confirm per floor/unit
  terraceArea: null,  // TODO: confirm balcony size per unit

  // ── Land & Parking ───────────────────────────────────────
  landArea:     null,  // N/A — apartment block
  parkingSpots: null,  // TODO: confirm parking availability

  // ── Maintenance ──────────────────────────────────────────
  maintenanceFee: null, // TODO: confirm — request from developer Skarabey

  // ── Furnishing ───────────────────────────────────────────
  furnished:       false,
  furnishingLevel: 'unfurnished', // new build — buyer finishes

  // ── Investment Case ──────────────────────────────────────
  investmentCase: {
    purchasePrice:    85000,
    acquisitionCosts: 4250,   // ~5% standard Bulgaria
    totalCashIn:      89250,

    // Estimated rental potential (Madika district, Burgas — 2-bed)
    estimatedMonthlyRent:   400,   // EUR/month — conservative estimate
    estimatedAnnualIncome:  4800,  // EUR/year
    estimatedGrossYield:    5.65,  // % = 4800 / 85000 × 100
    rentalContractStatus:   'none', // new build — no tenant yet

    // 5-year scenario
    fiveYearRentalIncome:    24000,  // EUR
    fiveYearAppreciation:    23100,  // EUR = 85000 × (1.05^5 - 1)
    fiveYearTotalReturn:     47100,  // EUR
    fiveYearROI:             52.8,   // % = 47100 / 89250 × 100

    useCase: ['new-build-discount', 'long-term-rental', 'capital-appreciation', 'eu-residency-base'],
    note: '25 units available — bulk purchase discount may be negotiable with developer.',
  },

  // ── Descriptions ─────────────────────────────────────────
  description: `New residential building in Madika district, Burgas — 25 units available now. Entry price from €85,000 for a 75 m² 2-bedroom apartment.

INVESTMENT NUMBERS:
- Purchase price: €85,000
- Estimated rental yield: ~5.65% gross (2-bed in Madika, Burgas market)
- Estimated monthly rent: ~€400/month
- 5-year scenario: €24,000 rental income + ~€23,100 appreciation = ~€47,100 total return (~52.8% ROI)
- Burgas market context: +6.2% single-quarter growth Q2 2025 (NSI)

Quality new construction with excellent amenities. Multiple units available — contact us about bulk purchase pricing. Ideal for investors building a Burgas portfolio or buyers seeking a modern city apartment at below-market price per m².`,

  descriptionRu: `Новый жилой дом в квартале Мадика, Бургас — в продаже 25 квартир. Входная цена от €85 000 за 2-комнатную квартиру площадью 75 м².

ИНВЕСТИЦИОННЫЕ ПОКАЗАТЕЛИ:
- Цена покупки: €85 000
- Расчётная арендная доходность: ~5,65% валовых (2-комн., рынок Бургаса)
- Расчётная аренда: ~€400/мес
- Сценарий на 5 лет: €24 000 аренды + ~€23 100 прироста = ~€47 100 совокупно (~52,8% ROI)
- Рынок Бургаса: +6,2% за один квартал Q2 2025 (NSI)

Качественное новое строительство с развитой инфраструктурой. Доступно несколько квартир — уточните скидку при покупке нескольких объектов. Отлично подходит для формирования портфеля в Бургасе.`,

  descriptionBg: `Нова жилищна сграда в кв. Мадика, Бургас — 25 апартамента в продажба. Входна цена от €85 000 за двустаен апартамент от 75 м².

ИНВЕСТИЦИОННИ ПОКАЗАТЕЛИ:
- Покупна цена: €85 000
- Прогнозна наемна доходност: ~5,65% брутни (2-стаен, пазар Бургас)
- Прогнозен наем: ~€400/месец
- Сценарий за 5 години: €24 000 наем + ~€23 100 поскъпване = ~€47 100 общо (~52,8% ROI)
- Пазар Бургас: +6,2% за едно тримесечие Q2 2025 (НСИ)

Качествено ново строителство с отлична инфраструктура. Налични множество апартаменти — свържете се с нас за ценова оферта при покупка на повече от един.`,

  descriptionDe: `Neues Wohngebäude im Stadtviertel Madika, Burgas — 25 Einheiten verfügbar. Einstiegspreis ab €85.000 für eine 75 m² 2-Zimmer-Wohnung.

INVESTITIONSKENNZAHLEN:
- Kaufpreis: €85.000
- Geschätzte Mietrendite: ~5,65% brutto (2-Zimmer, Burgas-Markt)
- Geschätzte Monatsmiete: ~€400/Monat
- 5-Jahres-Szenario: €24.000 Mieteinnahmen + ~€23.100 Wertsteigerung = ~€47.100 gesamt (~52,8% ROI)
- Markt Burgas: +6,2% in einem Quartal Q2 2025 (NSI)

Qualitätsneu bau mit ausgezeichneter Ausstattung. Mehrere Einheiten verfügbar — fragen Sie nach Mengenrabatt. Ideal für Investoren, die ein Burgas-Portfolio aufbauen.`,

  descriptionIt: `Nuovo edificio residenziale nel quartiere Madika, Burgas — 25 unità disponibili. Prezzo di ingresso da €85.000 per un appartamento di 75 m² con 2 camere da letto.

DATI DELL'INVESTIMENTO:
- Prezzo di acquisto: €85.000
- Rendimento locativo stimato: ~5,65% lordo (2 camere, mercato Burgas)
- Affitto mensile stimato: ~€400/mese
- Scenario a 5 anni: €24.000 di affitti + ~€23.100 di rivalutazione = ~€47.100 totale (~52,8% ROI)
- Mercato Burgas: +6,2% in un solo trimestre Q2 2025 (NSI)

Nuova costruzione di qualità con ottime dotazioni. Più unità disponibili — contattateci per prezzi su acquisto multiplo. Ideale per investitori che costruiscono un portafoglio a Burgas.`,
},
  // FEATURED PROPERTIES - From Skarabey
  {
    id: 'skarabey-madika',
    title: 'SKARABEY MADIKA - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ МАДИКА", кв.Мадика',
    price: 85000,
    location: 'Burgas, Madika District',
    image: 'https://ipfs.io/ipfs/bafybeih2yeesnsbwv66tm7yjmor77ngfeocf7htpd4lixfzinpk2ml7wju',
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    availableUnits: 25,
    status: 'for-sale',
    description: 'Modern residential building in Madika district, Burgas. Now on SALE! Quality construction with excellent amenities.',
  },
  {
    id: 'skarabey-tortuga-a',
    title: 'SKARABEY TORTUGA - Entrance A, Horizont',
    titleBg: 'Жилищна сграда "SKARABEY TORTUGA"-вход А, кв.Хоризонт',
    price: 95000,
    location: 'Burgas, Horizont District',
    image: 'https://ipfs.io/ipfs/bafybeigzvzizfmbr6tkveurkvdtqx5tljwtqpa2d45xwbhy4rbgkb65zmq',
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    availableUnits: 20,
    status: 'for-sale',
    description: 'Unique residential project by SKARABEY BUILD construction company in Horizont district.',
  },
  {
    id: 'skarabey-zornitsa-3',
    title: 'SKARABEY ZORNITSA 3 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ ЗОРНИЦА 3"',
    price: 78000,
    location: 'Burgas, Zornitsa District',
    image: 'https://ipfs.io/ipfs/bafkreihjomg3ourvto2j55mrermgvqewfl3a5ejzl2r2mkbupqlqijxy2e',
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    availableUnits: 15,
    status: 'for-sale',
    description: 'SKARABEY ZORNITSA 3 - Your new home in the heart of Burgas! Why choose this project?',
  },
  {
    id: 'skarabey-pomorie',
    title: 'SKARABEY POMORIE - Seaside Living',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ ПОМОРИЕ"',
    price: 92000,
    location: 'Pomorie, City Center',
    image: 'https://ipfs.io/ipfs/bafybeidhzjb37mwujajwkjg2eh6illndpwpxy3turzphu5xnikgw2lqhvq',
    bedrooms: 2,
    bathrooms: 1,
    area: 72,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    availableUnits: 19,
    status: 'for-sale',
    description: 'New residential project in the heart of Pomorie! Investment in the future - a home by the sea!',
  },
  // ALL OTHER SKARABEY PROPERTIES
  {
    id: 'skarabey-tortuga-2',
    title: 'SKARABEY TORTUGA 2 - Coming Soon',
    titleBg: 'Жилищна сграда "SKARABEY TORTUGA 2" ОЧАКВАЙТЕ СКОРО!',
    price: 0,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeif74fte3ipu7pw6ln6ycuo6gzwxfc5g4cqe7wtvs44izocbf4vpe4',
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'coming-soon',
    description: 'New project coming soon! Stay tuned for this exciting development.',
  },
  {
    id: 'skarabey-tortuga-b',
    title: 'SKARABEY TORTUGA - Entrance B, Horizont',
    titleBg: 'Жилищна сграда "SKARABEY TORTUGA"-вход Б, кв.Хоризонт',
    price: 92000,
    location: 'Burgas, Horizont District',
    image: 'https://ipfs.io/ipfs/bafybeigzfcid7sc5pg3s2lsgfbxfqntab3gfhasyurb3y2xvfwcd7te76e',
    bedrooms: 2,
    bathrooms: 1,
    area: 78,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 16,
    status: 'for-sale',
    description: 'Unique residential project by SKARABEY BUILD construction company - Entrance B.',
  },
  {
    id: 'skarabey-25',
    title: 'SKARABEY 25 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 25"',
    price: 88000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeicgyfk3cdd53aqvi57iuqh46hxrbk5qozmkdcj5voz3y252yd4eiy',
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 4,
    status: 'for-sale',
    description: 'SKARABEY BUILD presents its new residential building SKARABEY 25.',
  },
  {
    id: 'skarabey-24',
    title: 'SKARABEY 24 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 24"',
    price: 86000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeietyhxo7nage64qqkrb73mqixjmr6u2ppsu6z4n6xcmuvtjnlvs3i',
    bedrooms: 2,
    bathrooms: 1,
    area: 74,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 3,
    status: 'for-sale',
    description: 'One of our upcoming projects - residential building SKARABEY 24!',
  },
  {
    id: 'skarabey-puzzle',
    title: 'SKARABEY PUZZLE - Sarafovo',
    titleBg: 'Жилищна сграда "SKARABEY PUZZLE"',
    price: 115000,
    location: 'Burgas, Sarafovo District',
    image: 'https://ipfs.io/ipfs/bafybeifzwng4hrogcud2cdq57ss4fat2b7yxpwpajou5st6pbbejdoi3s4',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 7,
    status: 'for-sale',
    description: 'New residential building in Burgas, Sarafovo district, Angel Dimitrov str. 98! Modern home in a quiet seaside location.',
  },
  {
    id: 'skarabey-zornitsa-1',
    title: 'SKARABEY ZORNITSA 1',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ ЗОРНИЦА 1"',
    price: 75000,
    location: 'Burgas, Zornitsa District',
    image: 'https://ipfs.io/ipfs/bafybeiec7zdee7gwtqcmz3z2wjxxnyssdwepx2ecloqlzxwvtvu25oufea',
    bedrooms: 2,
    bathrooms: 1,
    area: 68,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 3,
    status: 'for-sale',
    description: 'We are pleased to present our newest project - modern residential building SKARABEY ZORNITSA 1.',
  },
  {
    id: 'city-scape',
    title: 'CITY SCAPE - Bratya Miladinovi',
    titleBg: 'Жилищна сграда "CITY SCAPE" - ж.к.Братя Миладинови',
    price: 98000,
    location: 'Burgas, Bratya Miladinovi District',
    image: 'https://ipfs.io/ipfs/bafybeiedmpzaemhgqb7utgi66inppzurssydhkfwrjy63sclg2oye4uoze',
    bedrooms: 2,
    bathrooms: 1,
    area: 82,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 2,
    status: 'for-sale',
    description: 'CITY SCAPE is the newest project by SKARABEY construction company in Bratya Miladinovi district.',
  },
  {
    id: 'villa-kraymorie',
    title: 'VILLA KRAYMORIE',
    titleBg: 'Жилищна сграда "VILLA KRAYMORIE"',
    price: 125000,
    location: 'Burgas, Kraymorie',
    image: 'https://ipfs.io/ipfs/bafybeifxfucecoyqm5nmj2viuto337roqlwld6h5kgqyqpx2q3thddtuhq',
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    type: 'villa',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 1,
    status: 'for-sale',
    description: 'VILLA KRAYMORIE is the newest addition by SKARABEY BUILD construction company.',
  },
  {
    id: 'skarabey-21',
    title: 'SKARABEY 21 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 21"',
    price: 82000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeigw5dl4zbunynk3q2ylzy6jinx4s5ve5gagv43kjqzhe23subicum',
    bedrooms: 2,
    bathrooms: 1,
    area: 72,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 2,
    status: 'for-sale',
    description: 'SKARABEY BUILD is pleased to present the opportunity to get acquainted with our project.',
  },
  // SOLD OUT PROJECTS
  {
    id: 'skarabey-zornitsa-2',
    title: 'SKARABEY ZORNITSA 2',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ ЗОРНИЦА 2"',
    price: 76000,
    location: 'Burgas, Zornitsa District',
    image: 'https://ipfs.io/ipfs/bafybeighbxouwqzmz62jgocut7kclg6u54f3thi4tz4xaqwnqsoosf7boy',
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'Modern residential building SKARABEY ZORNITSA 2 - All units sold.',
  },
  {
    id: 'skarabey-26',
    title: 'SKARABEY 26 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 26"',
    price: 89000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeihatlbpnu2a4v3ejymidmpclf47d43s3blwlqz6fqy4x6u4zjn4ga',
    bedrooms: 2,
    bathrooms: 1,
    area: 76,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'SKARABEY BUILD presents its newest residential building SKARABEY 26 - All units sold.',
  },
  {
    id: 'skarabey-27',
    title: 'SKARABEY 27 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 27"',
    price: 91000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeigbxfm43757gy3efp5xnat2yn54xwmdbzw7lyx43fsrnepbztch3m',
    bedrooms: 2,
    bathrooms: 1,
    area: 78,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'SKARABEY BUILD presents one of our newest projects - All units sold.',
  },
  {
    id: 'skarabey-18',
    title: 'SKARABEY 18 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 18"',
    price: 79000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeihjefoub2msv4467ilxfn5asymvo3ixnmaxo6i6zxi2cvmvkqfvui',
    bedrooms: 2,
    bathrooms: 1,
    area: 68,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'SKARABEY BUILD presents another unique project - All units sold.',
  },
  {
    id: 'skarabey-17',
    title: 'SKARABEY 17 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 17"',
    price: 77000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeieuzpstkr2vjui6iskm2psek7btipfflfiavg7dq4wxwnjuvrlrz4',
    bedrooms: 2,
    bathrooms: 1,
    area: 66,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'SKARABEY BUILD presents one of our newest projects - All units sold.',
  },
  {
    id: 'sarafovo-houses',
    title: 'Single-Family Houses - Sarafovo, Lahana',
    titleBg: 'Еднофамилни къщи - кв.Сарафово, местност Лахана',
    price: 185000,
    location: 'Burgas, Sarafovo, Lahana',
    image: 'https://ipfs.io/ipfs/bafybeig6dylcrgzavrpco4wkgsbzxyd4jcdskbifyi4dfzld25g3ucybuy',
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    type: 'house',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'SKARABEY BUILD offers a unique opportunity to purchase a three-story house - All sold.',
  },
  {
    id: 'skarabey-evolution-1',
    title: 'SKARABEY EVOLUTION - Building 1',
    titleBg: 'Жилищен комплекс "SKARABEY EVOLUTION" - Сграда 1',
    price: 105000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeiaxbbsdfdovatbmotxvefszpvy2hjos43wqmt62kzmreneq6nsb5a',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'Residential complex SKARABEY EVOLUTION - your new home combining modern design - All sold.',
  },
  {
    id: 'skarabey-evolution-2',
    title: 'SKARABEY EVOLUTION - Building 2',
    titleBg: 'Жилищен комплекс "SKARABEY EVOLUTION" - Сграда 2',
    price: 108000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeiensano2tqqjzxwjksgcmpxkueyq66rsepnahgqbpirdnkhb52faq',
    bedrooms: 2,
    bathrooms: 1,
    area: 87,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'Residential complex SKARABEY EVOLUTION Building 2 - your new home - All sold.',
  },
  {
    id: 'skarabey-23',
    title: 'SKARABEY 23 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 23"',
    price: 84000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeihxsd4xwgve2hobccf2sllkl3yxli4b7vp3edsqik6bncs33m54s4',
    bedrooms: 2,
    bathrooms: 1,
    area: 73,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'SKARABEY BUILD presents our newest project SKARABEY 23 - All units sold.',
  },
  {
    id: 'skarabey-22',
    title: 'SKARABEY 22 - Seaside Living',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 22"',
    price: 95000,
    location: 'Burgas, Seaside',
    image: 'https://ipfs.io/ipfs/bafkreidivengwuyogonht5zb7yrbdktqyf4ihh55qpr7h5yjzofgomxotq',
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'SKARABEY 22 - Now with Act 16! Located meters from the seaside - All sold.',
  },
  {
    id: 'skarabey-20',
    title: 'SKARABEY 20 - Residential Building',
    titleBg: 'Жилищна сграда "СКАРАБЕЙ 20"',
    price: 81000,
    location: 'Burgas',
    image: 'https://ipfs.io/ipfs/bafybeiamzknyuodtqblc76gvv6nzfkcau3axvvkkwhq26ayvqtybctp5wu',
    bedrooms: 2,
    bathrooms: 1,
    area: 71,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'SKARABEY 20 residential building - All units sold.',
  },
  // UNIHOME PROPERTIES
  {
    id: 'unihome-elysium',
    title: 'ELYSIUM - Premium Residential & Commercial Complex',
    titleBg: 'ЕЛИЗИУМ - Висок клас жилищен и търговски комплекс',
    price: 0,
    location: 'Burgas, Main Boulevard',
    image: 'https://www.unihome.bg/medias/properties_for_sale/big/570/elysium-burgas1.png',
    bedrooms: 2,
    bathrooms: 1,
    area: 0,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    availableUnits: 0,
    status: 'coming-soon',
    description: 'High-class modern residential and commercial complex ELYSIUM at a prime location on a main boulevard near the city center, Mall Galleria and the new Retail Park in Burgas. The residential part offers comfortable two-bedroom, three-bedroom and four-bedroom apartments: apartments with landscaped terraces, apartments overlooking a lake and sea, luxury maisonettes on the top two floors with stunning views, enclosed parking in a spacious two-level underground garage, green areas with playground, walkways and recreation spots. ELYSIUM CENTER occupies the first two floors with a grocery store, restaurant, bakery, café, medical center, fitness center, beauty center and more. NO MAINTENANCE FEE! Construction start: March/April 2026. Completion: 30 months.',
    descriptionBg: 'Започваме изграждането на висок клас модерен жилищен и търговски комплекс ELYSIUM на първокласна локация на главен булевард близо до центъра, мол Галерия и новия Ритейл парк в гр. Бургас. Жилищната част предлага различни типове комфортни двустайни, тристайни и четиристайни апартаменти: апартаменти с озеленена тераса, апартаменти с изглед към езеро и море, луксозни мезонети на последните два етажа с впечатляващи гледки, закрити паркоместа в просторен подземен паркинг на две нива, зелени площи с детска площадка, алеи и места за отдих. ELYSIUM ЦЕНТЪР е разположен на първите два етажа — голям магазин за хранителни стоки, ресторант, пекарна, кафе, медицински център, фитнес център, център за красота и много други. БЕЗ ТАКСА ПОДДРЪЖКА! Начало на строителството: март/април 2026. Срок на изпълнение: 30 месеца.',
  },
  {
    id: 'unihome-horizon2',
    title: 'HORIZON 2 - Residential Building',
    titleBg: 'ХОРИЗОНТ 2 - Жилищна сграда',
    price: 80000,
    location: 'Burgas, Horizont/Izgrev District',
    image: 'https://www.unihome.bg/medias/properties_for_sale/big/591/horizon2-1.jpg',
    bedrooms: 2,
    bathrooms: 1,
    area: 67,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    availableUnits: 30,
    status: 'for-sale',
    description: 'Horizon 2 is an upcoming project immediately next to Complex Horizont. Close to Metro, Mall Plaza, Kaufland and Lidl. The complex consists of functional two-bedroom and three-bedroom apartments, above-ground and underground parking. NO MAINTENANCE FEE. Installment payment available. Construction start: March 2026. Completion: 24 months. High-quality construction: granite tiles in common areas, hydraulic ORONA elevators, 5-chamber energy-efficient "4 Seasons" windows, anti-burglary entrance doors, polypropylene plumbing, full electrical installation.',
    descriptionBg: 'Жилищна сграда Хоризонт 2/Horizon 2 е предстоящ проект непосредствено до Комплекс Хоризонт. В близост до Метро, мол Плаза, Кауфланд и Лидл. Комплекс ХОРИЗОНТ 2 се състои от функционални двустайни и тристайни апартаменти, надземни и подземни паркоместа. БЕЗ ТАКСА ПОДДРЪЖКА. РАЗСРОЧЕНО ПЛАЩАНЕ. Начало на строителството: март 2026. Срок на изпълнение: 24 месеца. Висококачествено строителство: гранитогрес в общите части, хидравлични асансьори ORONA, петкамерна енергоефективна дограма „4 сезона", противовзломни апартаментни входни врати, полипропиленов водопровод, изградена електроинсталация.',
  },
  {
    id: 'unihome-horizont',
    title: 'Complex HORIZONT - Burgas',
    titleBg: 'КОМПЛЕКС ХОРИЗОНТ - Бургас',
    price: 72000,
    location: 'Burgas, Horizont/Izgrev District',
    image: 'https://www.unihome.bg/medias/properties_for_sale/big/561/1.jpg',
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    availableUnits: 20,
    status: 'for-sale',
    description: 'Complex Horizont is a project in the new expansion of Horizont district in Izgrev, Burgas. In close proximity to Metro, Mall Plaza, Kaufland and Lidl. Quick and easy access to main roads, entirely new infrastructure, high level of comfort, green spaces. The complex consists of shops, functional two-bedroom and three-bedroom apartments, above-ground and underground parking. NO MAINTENANCE FEE. Installment payment available. Construction start: December 2024. Completion: 24 months. Developer: Unihome Comfort Ltd. Builder: Comfort Stroy 2009 Ltd.',
    descriptionBg: 'Комплекс Хоризонт/Horizon е проект в новото разширение кв. Хоризонт на к-с Изгрев – гр. Бургас. В непосредствена близост до Метро, мол Плаза, Кауфланд и Лидл. Бърз и лесен достъп до основните пътни артерии, изцяло нова инфраструктура, висока степен на комфорт на живущите, зелени пространства. Комплексът се състои от магазини, функционални двустайни и тристайни апартаменти, надземни и подземни паркоместа. БЕЗ ТАКСА ПОДДРЪЖКА. РАЗСРОЧЕНО ПЛАЩАНЕ. Начало на строителството: декември 2024. Срок на изпълнение: 24 месеца. Инвеститор: Унихоум Комфорт ООД. Изпълнител: Комфорт Строй 2009 ООД.',
  },
  {
    id: 'unihome-greenpark2',
    title: 'GREEN PARK 2 - Slaveykov District',
    titleBg: 'GREEN PARK 2 - к-с Славейков',
    price: 150000,
    location: 'Burgas, Slaveykov District',
    image: 'https://www.unihome.bg/medias/properties_for_sale/big/590/green-park-burgasakt16.png',
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'GREEN PARK Phase 2 is located next to Green Park 1, in close proximity to LIDL in Slaveykov district, Burgas, near the main transport arteries towards the city center, Sunny Beach, Sozopol and the highway to Sofia, and close to malls Galleria and Plaza. THE BUILDING IS SOLD OUT. For potential resales, please contact us.',
    descriptionBg: 'GREEN PARK - Етап 2 се намира до Green Park 1, в непосредствена близост до магазин LIDL в к-с Славейков, гр. Бургас, до главните транспортни артерии в посока центъра на града, Слънчев бряг, Созопол и магистралата за София и в близост до моловете "Галерия" и "Плаза". СГРАДАТА Е ПРОДАДЕНА. ЗА ЕВЕНТУАЛНИ ПРЕПРОДАЖБИ, МОЛЯ СВЪРЖЕТЕ СЕ С НАС.',
  },
  {
    id: 'unihome-greenpark',
    title: 'GREEN PARK - Slaveykov',
    titleBg: 'GREEN PARK - Славейков',
    price: 17000,
    location: 'Burgas, Slaveykov District',
    image: 'https://www.unihome.bg/medias/properties_for_sale/big/559/gp.jpg',
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'PARKING SPACES ON BASEMENT LEVEL FROM €17,000. ALL APARTMENTS ARE SOLD. For potential resales, please contact us.',
    descriptionBg: 'ПАРКОМЕСТА НА НИВО СУТЕРЕН ОТ 17.000 ЕВРО. ВСИЧКИ АПАРТАМЕНТИ СА ПРОДАДЕНИ. ЗА ЕВЕНТУАЛНИ ПРЕПРОДАЖБИ, МОЛЯ СВЪРЖЕТЕ СЕ С НАС.',
  },
  {
    id: 'unihome-evea',
    title: 'EVEA RESIDENCE - Izgrev District',
    titleBg: 'ЕВЕА РЕЗИДЕНС - к-с Изгрев',
    price: 15000,
    location: 'Burgas, Izgrev District',
    image: 'https://www.unihome.bg/medias/properties_for_sale/big/525/evea.jpg',
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 0,
    status: 'sold-out',
    description: 'EVEA RESIDENCE BURGAS. AVAILABLE PARKING SPACES ON BASEMENT LEVEL FROM €15,000. ALL APARTMENTS ARE SOLD. For potential resales, please contact us.',
    descriptionBg: 'ЕВЕА РЕЗИДЕНС БУРГАС. СВОБОДНИ ПАРКОМЕСТА НА НИВО СУТЕРЕН ОТ 15.000 ЕВРО. ВСИЧКИ АПАРТАМЕНТИ СА ПРОДАДЕНИ. ЗА ЕВЕНТУАЛНИ ПРЕПРОДАЖБИ, МОЛЯ СВЪРЖЕТЕ СЕ С НАС.',
  },
  {
    id: 'unihome-sarafovo',
    title: 'Residential Building - Sarafovo Center',
    titleBg: 'Жилищна сграда - кв. Сарафово Център',
    price: 39000,
    location: 'Burgas, Sarafovo District',
    image: 'https://www.unihome.bg/medias/properties_for_sale/big/411/1-copy.jpg',
    bedrooms: 2,
    bathrooms: 1,
    area: 46,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 10,
    status: 'for-sale',
    description: 'Residential building in Sarafovo district, Burgas. Two-bedroom and three-bedroom apartments with installment payment plan: 20% at preliminary contract signing, 20% at ground level completion, 30% at Act 14, 20% at Act 15, 10% at Act 16. Price from €850/sq.m.',
    descriptionBg: 'Жилищна сграда в кв. Сарафово, Бургас. Двустайни и тристайни апартаменти на разсрочено плащане: 20% при подписване на предварителен договор, 20% при достигане кота 0.00, 30% при Акт 14, 20% при Акт 15, 10% при Акт 16. Цена от 850 €/кв.м.',
  },
  {
    id: 'unihome-kraimorie',
    title: 'Stylish Residential Building - Kraimorie',
    titleBg: 'Стилна жилищна сграда - кв. Крайморие',
    price: 45700,
    location: 'Burgas, Kraimorie District',
    image: 'https://www.unihome.bg/medias/properties_for_sale/big/409/33.jpg',
    bedrooms: 2,
    bathrooms: 1,
    area: 61,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    availableUnits: 15,
    status: 'for-sale',
    description: 'Stylish residential building in Kraimorie district with 34 two-bedroom and three-bedroom apartments overlooking the Burgas Bay. The beach is just 150 meters away. High energy efficiency with Baumit/Ceresit facade system with 10cm insulation and 7-chamber PVC windows with triple glazing. Wienerberger Porotherm brick masonry, anti-burglary doors, elevator for 6 persons. Price from €750/sq.m.',
    descriptionBg: 'Стилна жилищна сграда в кв. Крайморие с 34 двустайни и тристайни апартаменти с гледка към Бургаския залив. Плажната ивица е на едва 150 метра. Висока енергийна ефективност, благодарение на фасадна система с топлоизолация Baumit/Ceresit с дебелина 10 cm, и 7-камерна PVC дограма с троен стъклопакет. Тухлена зидария Wienerberger Porotherm, блиндирани входни врати, асансьор за 6 лица. Цена от 750 €/кв.м.',
  },
  // LEO CASTLE PROPERTIES - STUDIOS
  {
    id: 'lc-perla-studio',
    title: 'PERLA Complex - Studio Apartment',
    titleBg: 'Комплекс ПЕРЛА - Студио',
    price: 53900,
    location: 'Sunny Beach',
    image: 'https://ipfs.io/ipfs/bafybeig5vhwuic7vatjugtdfx2i7miixwlo6562vqiviugzcn5yshjemwm',
    bedrooms: 0,
    bathrooms: 1,
    area: 39,
    type: 'studio',
    transactionType: 'sale' as const,
    featured: false,
    status: 'for-sale',
    description: 'Furnished studio in PERLA complex, Sunny Beach. Total area 38.52 m² (living 27.8 m², common parts 4.40 m² + 6.50 m² terrace). 2nd floor with street view. Annual tax: €60. Move-in ready with full furniture package.',
    descriptionBg: 'Обзаведено студио в комплекс ПЕРЛА, Слънчев бряг. Обща площ 38,52 м² (жилищна 27,8 м², общи части 4,40 м² + 6,50 м² тераса). 2-ри етаж с изглед към улицата. Годишен данък: 60 €. Готово за нанасяне с пълно обзавеждане.',
  },
  {
    id: 'lc-gerber4-studio',
    title: 'GERBER 4 - Studio Apartment',
    titleBg: 'ГЕРБЕР 4 - Студио',
    price: 54900,
    location: 'Sunny Beach',
    image: 'https://ipfs.io/ipfs/bafybeicbgz37e5t6sf2laqy5we2otc6siwp7fe2ts5hc3cr5cv3aaacmri',
    bedrooms: 0,
    bathrooms: 1,
    area: 29,
    type: 'studio',
    transactionType: 'sale' as const,
    featured: false,
    status: 'for-sale',
    description: 'Compact studio in GERBER 4 complex, Sunny Beach. Total area 29.19 m². 6th floor with yard view. Sold without furniture. Annual tax: €10. Great investment opportunity in one of the most popular resort areas.',
    descriptionBg: 'Компактно студио в комплекс ГЕРБЕР 4, Слънчев бряг. Обща площ 29,19 м². 6-ти етаж с изглед към двора. Продава се без обзавеждане. Годишен данък: 10 €. Отлична инвестиционна възможност в един от най-популярните курортни райони.',
  },
  {
    id: 'lc-amadeus11-studio',
    title: 'AMADEUS 11 - Large Studio with Pool View',
    titleBg: 'АМАДЕУС 11 - Голямо студио с изглед към басейна',
    price: 83900,
    location: 'Sunny Beach',
    image: 'https://ipfs.io/ipfs/bafybeihrdvkvht5iz52rhkx6h7tj4j5qlmmyc5oakztoagx76hqqcdomwy',
    bedrooms: 0,
    bathrooms: 1,
    area: 72,
    type: 'studio',
    transactionType: 'sale' as const,
    featured: true,
    status: 'for-sale',
    description: 'Spacious furnished studio in AMADEUS 11 complex, Sunny Beach. Total area 72.44 m² (living 55.96 m², common parts 16.48 m² + 40 m² terrace). 6th floor with stunning pool view. Annual tax: €10. Exceptionally large terrace perfect for entertaining.',
    descriptionBg: 'Просторно обзаведено студио в комплекс АМАДЕУС 11, Слънчев бряг. Обща площ 72,44 м² (жилищна 55,96 м², общи части 16,48 м² + 40 м² тераса). 6-ти етаж с великолепен изглед към басейна. Годишен данък: 10 €. Изключително голяма тераса, идеална за отдих.',
  },
  // LEO CASTLE PROPERTIES - 1 BEDROOM
  {
    id: 'lc-pomorie-1bed-30b',
    title: 'New Residential Building - 1 Bed, Pomorie',
    titleBg: 'Жилое здание (сдача лето 2026) - 1 спалня, Поморие',
    price: 83900,
    location: 'Pomorie',
    image: 'https://ipfs.io/ipfs/bafkreib5khc66rcmwgdv3bveipbngajcd547nv7y2cbtvmczg5tv4hxvhe',
    bedrooms: 1,
    bathrooms: 1,
    area: 56,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    status: 'for-sale',
    description: 'One-bedroom apartment in a new residential building in Pomorie. Completion: Summer 2026. Total area 55.79 m² (living 49.71 m²). 5th floor with lake view. Without furniture. Annual tax: €150. Excellent opportunity for early buyers in a brand new development.',
    descriptionBg: 'Едностаен апартамент в нова жилищна сграда в Поморие. Завършване: лято 2026. Обща площ 55,79 м² (жилищна 49,71 м²). 5-ти етаж с изглед към езерото. Без обзавеждане. Годишен данък: 150 €. Отлична възможност за ранни купувачи в чисто ново строителство.',
  },
  {
    id: 'lc-pomorie-1bed-26b',
    title: 'New Residential Building - 1 Bed Spacious, Pomorie',
    titleBg: 'Жилое здание (сдача лето 2026) - 1 спалня, просторен, Поморие',
    price: 91500,
    location: 'Pomorie',
    image: 'https://ipfs.io/ipfs/bafkreigw4y76v663khvjdq5adzylej3mo2qnv3ip2kfz4lraiqheniwwom',
    bedrooms: 1,
    bathrooms: 1,
    area: 61,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    status: 'for-sale',
    description: 'Spacious one-bedroom apartment in a new residential building in Pomorie. Completion: Summer 2026. Total area 61.25 m² (living 54.08 m²). 5th floor with lake view. Without furniture. Annual tax: €150. Modern construction in the charming seaside town of Pomorie.',
    descriptionBg: 'Просторен едностаен апартамент в нова жилищна сграда в Поморие. Завършване: лято 2026. Обща площ 61,25 м² (жилищна 54,08 м²). 5-ти етаж с изглед към езерото. Без обзавеждане. Годишен данък: 150 €. Модерно строителство в очарователния крайбрежен град Поморие.',
  },
  {
    id: 'lc-panorama-bay-1bed',
    title: 'PANORAMA BAY 1 - 1 Bedroom, Saint Vlas',
    titleBg: 'ПАНОРАМА БЕЙ 1 - 1 спалня, Свети Влас',
    price: 100000,
    location: 'Saint Vlas',
    image: 'https://ipfs.io/ipfs/bafybeifwbtttn4h7rebemcyktrpvh7q7c6pvqnk667eoungmqevz4jtpb4',
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    status: 'for-sale',
    description: 'Furnished one-bedroom apartment in PANORAMA BAY 1 complex, Saint Vlas. Total area 75.19 m² (living 56.07 m², common parts 19.12 m²). Ground floor with pool and yard view. Annual tax: €10. Beautiful complex with pool in the prestigious resort of Saint Vlas.',
    descriptionBg: 'Обзаведен едностаен апартамент в комплекс ПАНОРАМА БЕЙ 1, Свети Влас. Обща площ 75,19 м² (жилищна 56,07 м², общи части 19,12 м²). Партерен етаж с изглед към басейн и двор. Годишен данък: 10 €. Красив комплекс с басейн в престижния курорт Свети Влас.',
  },
  {
    id: 'lc-pomorie-residence-1bed',
    title: 'Pomorie Residence - 1 Bedroom',
    titleBg: 'Поморие Резиденс - 1 спалня',
    price: 110000,
    location: 'Pomorie',
    image: 'https://ipfs.io/ipfs/bafkreidz4frmmqejotybf7jgbkykecu4mmvegevtr3u6gxuqtvhi4xbnem',
    bedrooms: 1,
    bathrooms: 1,
    area: 66,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    status: 'for-sale',
    description: 'Furnished one-bedroom apartment in Pomorie Residence. Total area 66.02 m². 4th floor with pool and yard view. Annual tax: €8. Deposit required. Upscale complex in the historical town of Pomorie with excellent rental potential.',
    descriptionBg: 'Обзаведен едностаен апартамент в Поморие Резиденс. Обща площ 66,02 м². 4-ти етаж с изглед към басейн и двор. Годишен данък: 8 €. Необходим депозит. Луксозен комплекс в историческия град Поморие с отличен потенциал за отдаване под наем.',
  },
  // LEO CASTLE PROPERTIES - 2 BEDROOMS
  {
    id: 'lc-nessebar-view-2bed',
    title: 'Nessebar View - 2 Bedroom, Kosharitsa',
    titleBg: 'Несебър Вю - 2 спални, Кошарица',
    price: 72900,
    location: 'Kosharitsa',
    image: 'https://ipfs.io/ipfs/bafybeifpultidxftcwvf3qdibxi2w5u5dix26rrvju2avttree6jgtsefa',
    bedrooms: 2,
    bathrooms: 1,
    area: 76,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    status: 'for-sale',
    description: 'Furnished two-bedroom apartment in Nessebar View complex, Kosharitsa. Total area 76 m². 2nd floor with breathtaking sea, pool and mountain views. Annual tax: €760. Ideal holiday home or rental investment near Sunny Beach.',
    descriptionBg: 'Обзаведен двустаен апартамент в комплекс Несебър Вю, Кошарица. Обща площ 76 м². 2-ри етаж с невероятен изглед към морето, басейна и планината. Годишен данък: 760 €. Идеален за ваканционен дом или инвестиция под наем близо до Слънчев бряг.',
  },
  {
    id: 'lc-holiday-fort-2bed',
    title: 'Holiday Fort Club - 2 Bedroom, Sunny Beach',
    titleBg: 'Холидей Форт Клуб - 2 спални, Слънчев бряг',
    price: 81900,
    location: 'Sunny Beach',
    image: 'https://ipfs.io/ipfs/bafkreiezk6x4mpnjocxmgrhetgh7kv3ahqcvfb32cr4ehy65cvchg3kqvq',
    bedrooms: 2,
    bathrooms: 1,
    area: 90,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    status: 'for-sale',
    description: 'Furnished two-bedroom apartment in Holiday Fort Club, Sunny Beach. Total area 89.82 m² (living 78.21 m²). 1st floor with complex and pool view. Annual tax: €13.50. Well-maintained resort complex with excellent facilities.',
    descriptionBg: 'Обзаведен двустаен апартамент в Холидей Форт Клуб, Слънчев бряг. Обща площ 89,82 м² (жилищна 78,21 м²). 1-ви етаж с изглед към комплекса и басейна. Годишен данък: 13,50 €. Добре поддържан курортен комплекс с отлични удобства.',
  },
  {
    id: 'lc-pomorie-2bed-stopsale',
    title: 'Residential Building - 2 Bed, Pomorie',
    titleBg: 'Жилищна сграда - 2 спални, Поморие',
    price: 116500,
    location: 'Pomorie',
    image: 'https://ipfs.io/ipfs/bafkreihwcx623espjlaboxii2cb6izewrk4ibl73jw2jgap4y6oytlokwu',
    bedrooms: 2,
    bathrooms: 1,
    area: 93,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    status: 'sold-out',
    description: 'Two-bedroom apartment in a residential building in Pomorie. Total area 93.04 m². 6th floor with sea and city views. Without furniture. Currently not available for sale.',
    descriptionBg: 'Двустаен апартамент в жилищна сграда в Поморие. Обща площ 93,04 м². 6-ти етаж с изглед към морето и града. Без обзавеждане. В момента не е наличен за продажба.',
  },
  {
    id: 'lc-panorama-bay-2bed',
    title: 'PANORAMA BAY 1 - 2 Bedroom, Saint Vlas',
    titleBg: 'ПАНОРАМА БЕЙ 1 - 2 спални, Свети Влас',
    price: 100000,
    location: 'Saint Vlas',
    image: 'https://ipfs.io/ipfs/bafkreifx2vktbgfpnssbixbendkq6lshrtie4pbsjvifg5qb4sspckjdxy',
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    status: 'for-sale',
    description: 'Furnished two-bedroom apartment in PANORAMA BAY 1 complex, Saint Vlas. Total area 75.06 m² (living 55.8 m², common parts 19.19 m²). Pool and yard view. Annual tax: €10. Excellent value in one of the Black Sea coast\'s most desirable locations.',
    descriptionBg: 'Обзаведен двустаен апартамент в комплекс ПАНОРАМА БЕЙ 1, Свети Влас. Обща площ 75,06 м² (жилищна 55,8 м², общи части 19,19 м²). Изглед към басейн и двор. Годишен данък: 10 €. Отлично съотношение цена/качество на едно от най-желаните места по Черноморието.',
  },
  {
    id: 'lc-casa-real-2bed',
    title: 'CASA REAL - Luxury 2 Bedroom, Saint Vlas',
    titleBg: 'КАСА РЕАЛ - Луксозен 2 спални, Свети Влас',
    price: 330000,
    location: 'Saint Vlas',
    image: 'https://ipfs.io/ipfs/bafkreiaxejeqsoytovtxbuxlnmewn75oct2chimn7jgkyvknw2yo7acoly',
    bedrooms: 2,
    bathrooms: 2,
    area: 149,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: true,
    status: 'for-sale',
    description: 'Luxury furnished two-bedroom apartment in CASA REAL, Saint Vlas. Total area 149.25 m² (living 134.4 m², common parts 14.85 m²). 3rd floor with stunning sea and pool views. Annual tax: €14. Premium property in an exclusive complex with high-end finishes.',
    descriptionBg: 'Луксозен обзаведен двустаен апартамент в КАСА РЕАЛ, Свети Влас. Обща площ 149,25 м² (жилищна 134,4 м², общи части 14,85 м²). 3-ти етаж с великолепен изглед към морето и басейна. Годишен данък: 14 €. Премиум имот в ексклузивен комплекс с висококачествено обзавеждане.',
  },
  {
    id: 'lc-orhideya-penthouse',
    title: 'ORHIDEYA - Luxury Penthouse 255 m², Saint Vlas',
    titleBg: 'ОРХИДЕЯ - Луксозен пентхаус 255 м², Свети Влас',
    price: 335900,
    location: 'Saint Vlas',
    image: 'https://ipfs.io/ipfs/bafkreiflieov6medhr4hxu2qngwhv2coxda5grpauqyil66fwqiaxic7hy',
    bedrooms: 2,
    bathrooms: 2,
    area: 255,
    type: 'penthouse',
    transactionType: 'sale' as const,
    featured: true,
    status: 'for-sale',
    description: 'Stunning furnished penthouse in ORHIDEYA complex, Saint Vlas. Total area 255 m². 6th floor with panoramic sea and city views. Annual tax: €300. A rare opportunity to own a massive penthouse in one of Bulgaria\'s most prestigious coastal resorts.',
    descriptionBg: 'Великолепен обзаведен пентхаус в комплекс ОРХИДЕЯ, Свети Влас. Обща площ 255 м². 6-ти етаж с панорамен изглед към морето и града. Годишен данък: 300 €. Рядка възможност да притежавате огромен пентхаус в един от най-престижните крайбрежни курорти на България.',
  },
  // LEO CASTLE PROPERTIES - 3 BEDROOMS
  {
    id: 'lc-saintvlas-3bed-stopsale',
    title: 'Residential Building - 3 Bed, Saint Vlas',
    titleBg: 'Жилищна сграда - 3 спални, Свети Влас',
    price: 137000,
    location: 'Saint Vlas',
    image: 'https://ipfs.io/ipfs/bafkreiekankdy6eeecnwlcqde2zccyfhzkwi4bll6vni6h4cd4p34ducem',
    bedrooms: 3,
    bathrooms: 2,
    area: 99,
    type: 'apartment',
    transactionType: 'sale' as const,
    featured: false,
    status: 'sold-out',
    description: 'Three-bedroom furnished apartment in a residential building in Saint Vlas. Total area 98.6 m². 2nd floor with sea and city views. Currently not available for sale.',
    descriptionBg: 'Тристаен обзаведен апартамент в жилищна сграда в Свети Влас. Обща площ 98,6 м². 2-ри етаж с изглед към морето и града. В момента не е наличен за продажба.',
  },
  // LEO CASTLE PROPERTIES - HOUSES & LANDS
  {
    id: 'lc-goritsa-land-house',
    title: 'Land Plot + Old House - Goritsa Village',
    titleBg: 'ПАРЦЕЛ + Стара къща - с. Горица',
    price: 35900,
    location: 'Goritsa',
    image: 'https://ipfs.io/ipfs/bafkreieiqbepoaumd7yb6d6hdkehy5lnhrlwfkiz26nbpojh23y7aebcia',
    bedrooms: 1,
    bathrooms: 1,
    area: 0,
    type: 'house',
    transactionType: 'sale' as const,
    featured: false,
    status: 'for-sale',
    description: 'Land plot with an old house in Goritsa village. 1,936 m² total plot. Without furniture. Great opportunity for those looking to build a new home or renovate in a peaceful Bulgarian village setting.',
    descriptionBg: 'Парцел със стара къща в село Горица. 1 936 м² общ парцел. Без обзавеждане. Чудесна възможност за тези, които искат да построят нов дом или да ремонтират в спокойна българска селска обстановка.',
  },
  {
    id: 'lc-alexandrovo-house',
    title: 'New Single-Storey House - Alexandrovo',
    titleBg: 'Нова едноетажна къща - Александрово',
    price: 250000,
    location: 'Alexandrovo',
    image: 'https://ipfs.io/ipfs/bafkreiawxuc7hvc2m776t2ylavp6flkvzzl7wqkri4aeu3rgw2trfntib4',
    bedrooms: 3,
    bathrooms: 2,
    area: 265,
    type: 'house',
    transactionType: 'sale' as const,
    featured: true,
    status: 'for-sale',
    description: 'Brand new single-storey house in Alexandrovo. Total area 265 m². Without furniture. Spacious modern home with 3 bedrooms, perfect for families seeking a quiet countryside lifestyle near the Black Sea coast.',
    descriptionBg: 'Чисто нова едноетажна къща в Александрово. Обща площ 265 м². Без обзавеждане. Просторен модерен дом с 3 спални, идеален за семейства, търсещи спокоен провинциален начин на живот близо до Черноморието.',
  },
  {
    id: 'lc-kosharitsa-house-pool',
    title: 'Private House with Pool & Garage - Kosharitsa',
    titleBg: 'Частна КЪЩА с басейн и гараж - Кошарица',
    price: 575000,
    location: 'Kosharitsa',
    image: 'https://ipfs.io/ipfs/bafkreia65swzwnaudf4ofbg2bpbwq3ywwvjdruz6setyltkodcmcjmivne',
    bedrooms: 4,
    bathrooms: 3,
    area: 239,
    type: 'house',
    transactionType: 'sale' as const,
    featured: true,
    status: 'for-sale',
    description: 'Luxurious private house with swimming pool and garage in Kosharitsa. Total area 209.82 m² + 29 m² garage. Furnished. Breathtaking sea, pool and mountain views. An exceptional family home in one of the most scenic locations near Sunny Beach.',
    descriptionBg: 'Луксозна частна къща с басейн и гараж в Кошарица. Обща площ 209,82 м² + 29 м² гараж. Обзаведена. Невероятен изглед към морето, басейна и планината. Изключителен семеен дом на едно от най-живописните места близо до Слънчев бряг.',
  },
  // Original sample properties for rent
  {
    id: 'rent-1',
    title: 'Modern Apartment in City Center',
    price: 1200,
    location: 'Sofia Center',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    type: 'apartment',
    transactionType: 'rent' as const,
    featured: false,
  },
  {
    id: 'rent-2',
    title: 'Beachfront Apartment',
    price: 2500,
    location: 'Sunny Beach',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    type: 'apartment',
    transactionType: 'rent' as const,
    featured: false,
  },
  {
    id: 'rent-3',
    title: 'Commercial Space Downtown',
    price: 3500,
    location: 'Burgas Center',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    bedrooms: 0,
    bathrooms: 2,
    area: 200,
    type: 'commercial',
    transactionType: 'rent' as const,
    featured: false,
  },
];
