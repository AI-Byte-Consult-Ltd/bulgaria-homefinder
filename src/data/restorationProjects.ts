import rhodopeBefore1 from '@/assets/restoration/rhodope-before-1.jpg';
import rhodopeAfter1 from '@/assets/restoration/rhodope-after-1.jpg';
import rhodopeStage1 from '@/assets/restoration/rhodope-stage-1.jpg';
import rhodopeStage2 from '@/assets/restoration/rhodope-stage-2.jpg';
import rhodopeStage3 from '@/assets/restoration/rhodope-stage-3.jpg';

import koprivshtitsaBefore1 from '@/assets/restoration/koprivshtitsa-before-1.jpg';
import koprivshtitsaAfter1 from '@/assets/restoration/koprivshtitsa-after-1.jpg';
import koprivshtitsaStage1 from '@/assets/restoration/koprivshtitsa-stage-1.jpg';
import koprivshtitsaStage2 from '@/assets/restoration/koprivshtitsa-stage-2.jpg';

import balkanBefore1 from '@/assets/restoration/balkan-before-1.jpg';
import balkanAfter1 from '@/assets/restoration/balkan-after-1.jpg';
import balkanStage1 from '@/assets/restoration/balkan-stage-1.jpg';
import balkanStage2 from '@/assets/restoration/balkan-stage-2.jpg';

/** Localised text keyed by language code */
type L10n = { en: string; bg: string; ru: string; de: string; it: string };

export interface RestorationStage {
  title: L10n;
  description: L10n;
  image: string;
}

export interface RestorationProject {
  id: string;
  title: L10n;
  location: L10n;
  architect: string;
  year: string;
  description: L10n;
  thumbnail: string;
  beforeImages: string[];
  afterImages: string[];
  stages: RestorationStage[];
}

/** Helper – pick localised value; falls back to English */
export const l = (text: L10n, lang: string): string =>
  (text as Record<string, string>)[lang] ?? text.en;

export const restorationProjects: RestorationProject[] = [
  {
    id: 'rhodope-stone-house',
    title: {
      en: 'Traditional Rhodope Stone House Revival',
      bg: 'Възстановяване на традиционна родопска каменна къща',
      ru: 'Восстановление традиционного родопского каменного дома',
      de: 'Restaurierung eines traditionellen Rhodopen-Steinhauses',
      it: 'Restauro di una tradizionale casa in pietra dei Rodopi',
    },
    location: {
      en: 'Shiroka Laka, Rhodope Mountains',
      bg: 'Широка лъка, Родопи',
      ru: 'Широка Лыка, Родопы',
      de: 'Shiroka Laka, Rhodopen',
      it: 'Shiroka Laka, Monti Rodopi',
    },
    architect: "NIC's Renovation Team",
    year: '2024',
    description: {
      en: 'Full restoration of a 19th-century Rhodope stone house in the picturesque village of Shiroka Laka. The original stone masonry, traditional wooden balcony and clay tile roof were carefully restored while adding modern insulation, plumbing and underfloor heating. The house now serves as a family retreat with 3 bedrooms and panoramic mountain views.',
      bg: 'Пълна реставрация на родопска каменна къща от XIX век в живописното село Широка лъка. Оригиналната каменна зидария, традиционният дървен балкон и покривът с керемиди бяха внимателно възстановени, като бяха добавени модерна изолация, ВиК и подово отопление. Къщата днес служи като семейно убежище с 3 спални и панорамна планинска гледка.',
      ru: 'Полная реставрация родопского каменного дома XIX века в живописном селе Широка Лыка. Оригинальная каменная кладка, традиционный деревянный балкон и черепичная крыша были тщательно восстановлены с добавлением современной изоляции, водопровода и тёплого пола. Дом теперь служит семейным убежищем с 3 спальнями и панорамным видом на горы.',
      de: 'Vollständige Restaurierung eines Rhodopen-Steinhauses aus dem 19. Jahrhundert im malerischen Dorf Shiroka Laka. Originales Steinmauerwerk, traditioneller Holzbalkon und Ziegeldach wurden sorgfältig restauriert, moderne Isolierung, Sanitäranlagen und Fußbodenheizung hinzugefügt. Das Haus dient heute als Familiendomizil mit 3 Schlafzimmern und Bergpanorama.',
      it: 'Restauro completo di una casa in pietra dei Rodopi del XIX secolo nel pittoresco villaggio di Shiroka Laka. La muratura in pietra originale, il balcone in legno tradizionale e il tetto in tegole sono stati attentamente restaurati aggiungendo isolamento moderno, impianto idraulico e riscaldamento a pavimento. La casa ora funge da rifugio familiare con 3 camere da letto e vista panoramica sulle montagne.',
    },
    thumbnail: rhodopeAfter1,
    beforeImages: [rhodopeBefore1],
    afterImages: [rhodopeAfter1],
    stages: [
      {
        title: {
          en: 'Stone Wall Restoration',
          bg: 'Възстановяване на каменните стени',
          ru: 'Восстановление каменных стен',
          de: 'Restaurierung der Steinmauern',
          it: 'Restauro delle pareti in pietra',
        },
        description: {
          en: 'Local stonemasons rebuilt crumbling sections using authentic Rhodope stone and traditional lime mortar techniques. Each stone was hand-selected to match the original pattern.',
          bg: 'Местни каменоделци възстановиха срутените участъци с автентичен родопски камък и традиционна варова техника. Всеки камък беше ръчно подбран, за да съвпада с оригиналния модел.',
          ru: 'Местные каменщики восстановили разрушенные участки с использованием аутентичного родопского камня и традиционных известковых растворов. Каждый камень был подобран вручную.',
          de: 'Lokale Steinmetze bauten bröckelnde Abschnitte mit authentischem Rhodopen-Stein und traditioneller Kalkmörteltechnik wieder auf.',
          it: 'Scalpellini locali hanno ricostruito le sezioni crollate utilizzando autentica pietra dei Rodopi e tecniche tradizionali di malta di calce.',
        },
        image: rhodopeStage1,
      },
      {
        title: {
          en: 'Roof & Timber Replacement',
          bg: 'Подмяна на покрива и дървената конструкция',
          ru: 'Замена кровли и деревянных конструкций',
          de: 'Dach- und Holzerneuerung',
          it: 'Sostituzione del tetto e delle travi',
        },
        description: {
          en: 'The collapsed roof was entirely rebuilt with new oak beams and traditional clay tiles. Modern waterproofing membrane was added beneath the tiles for long-term durability.',
          bg: 'Рухналият покрив беше изцяло възстановен с нови дъбови греди и традиционни керемиди. Под керемидите беше добавена съвременна хидроизолация за дълготрайност.',
          ru: 'Обрушившаяся крыша была полностью восстановлена с новыми дубовыми балками и традиционной черепицей. Под черепицей была добавлена современная гидроизоляционная мембрана.',
          de: 'Das eingestürzte Dach wurde mit neuen Eichenbalken und traditionellen Tonziegeln komplett erneuert. Eine moderne Abdichtungsmembran wurde unter den Ziegeln verlegt.',
          it: 'Il tetto crollato è stato interamente ricostruito con nuove travi in rovere e tegole tradizionali in argilla. Una moderna membrana impermeabilizzante è stata aggiunta sotto le tegole.',
        },
        image: rhodopeStage2,
      },
      {
        title: {
          en: 'Interior Modernisation',
          bg: 'Модернизация на интериора',
          ru: 'Модернизация интерьера',
          de: 'Innenmodernisierung',
          it: 'Modernizzazione degli interni',
        },
        description: {
          en: 'New oak plank floors, white lime-plastered walls and restored ceiling beams. A fully equipped modern kitchen was installed while preserving the traditional Bulgarian aesthetic.',
          bg: 'Нови дъбови подове, бели варосани стени и реставрирани тавански греди. Монтирана е напълно оборудвана модерна кухня, като е запазена традиционната българска естетика.',
          ru: 'Новые дубовые полы, белые оштукатуренные стены и восстановленные потолочные балки. Установлена полностью оснащённая современная кухня с сохранением традиционной болгарской эстетики.',
          de: 'Neue Eichendielen, weiß gekalkte Wände und restaurierte Deckenbalken. Eine voll ausgestattete moderne Küche wurde installiert und die traditionelle bulgarische Ästhetik bewahrt.',
          it: 'Nuovi pavimenti in rovere, pareti intonacate a calce bianca e travi del soffitto restaurate. È stata installata una cucina moderna completamente attrezzata preservando l\'estetica tradizionale bulgara.',
        },
        image: rhodopeStage3,
      },
    ],
  },
  {
    id: 'koprivshtitsa-revival-house',
    title: {
      en: 'Bulgarian Revival House Restoration',
      bg: 'Реставрация на Възрожденска къща',
      ru: 'Реставрация дома эпохи Болгарского Возрождения',
      de: 'Restaurierung eines bulgarischen Wiedergeburtshauses',
      it: 'Restauro di una casa del Rinascimento bulgaro',
    },
    location: {
      en: 'Koprivshtitsa, Sofia Province',
      bg: 'Копривщица, Софийска област',
      ru: 'Копривщица, Софийская область',
      de: 'Koprivshtitsa, Provinz Sofia',
      it: 'Koprivshtitsa, Provincia di Sofia',
    },
    architect: "NIC's Renovation Team",
    year: '2025',
    description: {
      en: 'Meticulous restoration of a Bulgarian Revival-era house in the historic town of Koprivshtitsa. The project focused on preserving the ornate hand-carved wooden bay windows (erker), restoring original wall frescoes and the colourful painted facade — a hallmark of the National Revival period. The building is now a fully functioning guesthouse.',
      bg: 'Щателна реставрация на Възрожденска къща в историческия град Копривщица. Проектът е фокусиран върху запазването на богато дърворезбованите еркери, възстановяването на оригиналните стенописи и цветната фасада — емблема на Възрожденската епоха. Сградата вече функционира като къща за гости.',
      ru: 'Тщательная реставрация дома эпохи Болгарского Возрождения в историческом городе Копривщица. Проект был сосредоточен на сохранении богато украшенных резных деревянных эркеров, восстановлении оригинальных фресок и красочного фасада — визитной карточки Национального Возрождения. Здание теперь работает как гостевой дом.',
      de: 'Sorgfältige Restaurierung eines Hauses aus der bulgarischen Wiedergeburtszeit in der historischen Stadt Koprivshtitsa. Das Projekt konzentrierte sich auf die Erhaltung der kunstvoll geschnitzten Erker, die Wiederherstellung originaler Wandfresken und der farbenfrohen Fassade. Das Gebäude dient heute als Gästehaus.',
      it: 'Restauro meticoloso di una casa dell\'era del Rinascimento bulgaro nella storica città di Koprivshtitsa. Il progetto si è concentrato sulla conservazione dei bovindi lignei intagliati a mano, sul restauro degli affreschi originali e della facciata dipinta — un segno distintivo del periodo del Rinascimento Nazionale. L\'edificio è ora una pensione funzionante.',
    },
    thumbnail: koprivshtitsaAfter1,
    beforeImages: [koprivshtitsaBefore1],
    afterImages: [koprivshtitsaAfter1],
    stages: [
      {
        title: {
          en: 'Woodwork & Erker Restoration',
          bg: 'Дърворезба и реставрация на еркера',
          ru: 'Реставрация деревянных элементов и эркера',
          de: 'Holzarbeiten und Erker-Restaurierung',
          it: 'Restauro degli intagli in legno e del bovindo',
        },
        description: {
          en: 'Master woodcarvers painstakingly restored the ornate bay-window panels and decorative facade elements using traditional hand tools and aged walnut timber.',
          bg: 'Майстори дърворезбари щателно възстановиха орнаментираните еркерни панели и декоративните фасадни елементи с традиционни ръчни инструменти и състарен орех.',
          ru: 'Мастера-резчики кропотливо восстановили орнаментальные панели эркера и декоративные элементы фасада традиционными ручными инструментами из выдержанного ореха.',
          de: 'Meisterholzschnitzer restaurierten sorgfältig die verzierten Erkerpaneele und dekorativen Fassadenelemente mit traditionellen Handwerkzeugen und gealtertem Nussbaumholz.',
          it: 'Maestri intagliatori hanno restaurato con pazienza i pannelli ornamentali del bovindo e gli elementi decorativi della facciata usando strumenti tradizionali e legno di noce stagionato.',
        },
        image: koprivshtitsaStage1,
      },
      {
        title: {
          en: 'Fresco & Facade Painting',
          bg: 'Стенописи и боядисване на фасадата',
          ru: 'Фрески и роспись фасада',
          de: 'Fresken und Fassadenmalerei',
          it: 'Affreschi e pittura della facciata',
        },
        description: {
          en: 'Art conservators cleaned and repainted the traditional floral wall frescoes using period-correct natural pigments bound in lime wash.',
          bg: 'Реставратори почистиха и пребоядисаха традиционните флорални стенописи с естествени пигменти, свързани с варов разтвор, характерни за епохата.',
          ru: 'Реставраторы очистили и восстановили традиционные цветочные фрески с использованием натуральных пигментов на известковой основе, соответствующих эпохе.',
          de: 'Kunstkonservatoren reinigten und restaurierten die traditionellen floralen Wandfresken mit zeitgemäßen Naturpigmenten in Kalkbindung.',
          it: 'I conservatori d\'arte hanno pulito e ridipinto gli affreschi floreali tradizionali usando pigmenti naturali d\'epoca legati nella calce.',
        },
        image: koprivshtitsaStage2,
      },
    ],
  },
  {
    id: 'balkan-village-house',
    title: {
      en: 'Rural Village House Transformation',
      bg: 'Преобразяване на селска къща',
      ru: 'Преобразование сельского дома',
      de: 'Verwandlung eines Dorfhauses',
      it: 'Trasformazione di una casa di villaggio rurale',
    },
    location: {
      en: 'Teteven, Stara Planina',
      bg: 'Тетевен, Стара планина',
      ru: 'Тетевен, Стара Планина',
      de: 'Teteven, Balkangebirge',
      it: 'Teteven, Stara Planina',
    },
    architect: "NIC's Renovation Team",
    year: '2025',
    description: {
      en: 'Complete transformation of a derelict single-storey village house at the foot of the Balkan Mountains near Teteven. The collapsed roof and crumbling walls were rebuilt from the foundations up. New wooden shutters, a garden with traditional wooden fence and a modern interior make this an ideal countryside retreat — purchased for under €10,000 and renovated on a budget.',
      bg: 'Пълно преобразяване на изоставена едноетажна селска къща в подножието на Стара планина край Тетевен. Рухналият покрив и разрушените стени бяха възстановени от основите нагоре. Нови дървени капаци, градина с традиционна дървена ограда и модерен интериор правят това идеално селско убежище — закупено за под €10 000 и ремонтирано с ограничен бюджет.',
      ru: 'Полная трансформация заброшенного одноэтажного сельского дома у подножия Балканских гор близ Тетевена. Обрушившаяся крыша и разрушенные стены были восстановлены с фундамента. Новые деревянные ставни, сад с традиционным деревянным забором и современный интерьер делают это идеальным загородным убежищем — куплено менее чем за €10 000 и отремонтировано с ограниченным бюджетом.',
      de: 'Vollständige Verwandlung eines verfallenen einstöckigen Dorfhauses am Fuße des Balkangebirges bei Teteven. Das eingestürzte Dach und die bröckelnden Wände wurden von Grund auf neu aufgebaut. Neue Holzläden, ein Garten mit traditionellem Holzzaun und ein modernes Interieur machen es zum idealen Landsitz — gekauft für unter 10.000 € und mit kleinem Budget renoviert.',
      it: 'Trasformazione completa di una casa di villaggio fatiscente a un piano ai piedi dei Monti Balcani vicino a Teteven. Il tetto crollato e le pareti sgretolate sono stati ricostruiti dalle fondamenta. Nuove persiane in legno, un giardino con recinzione tradizionale in legno e interni moderni ne fanno un rifugio di campagna ideale — acquistato per meno di €10.000 e ristrutturato con un budget contenuto.',
    },
    thumbnail: balkanAfter1,
    beforeImages: [balkanBefore1],
    afterImages: [balkanAfter1],
    stages: [
      {
        title: {
          en: 'Foundation Reinforcement',
          bg: 'Укрепване на основите',
          ru: 'Укрепление фундамента',
          de: 'Fundamentverstärkung',
          it: 'Rinforzo delle fondazioni',
        },
        description: {
          en: 'The original river-stone foundation was excavated, repaired and reinforced with a concrete ring beam to ensure structural stability for decades to come.',
          bg: 'Оригиналната основа от речен камък беше изкопана, ремонтирана и укрепена с бетонен пояс за осигуряване на конструктивна стабилност за десетилетия напред.',
          ru: 'Оригинальный фундамент из речного камня был откопан, отремонтирован и укреплён бетонным армопоясом для обеспечения конструктивной устойчивости на десятилетия вперёд.',
          de: 'Das ursprüngliche Flussstein-Fundament wurde freigelegt, repariert und mit einem Betonringbalken verstärkt, um langfristige Stabilität zu gewährleisten.',
          it: 'Le fondazioni originali in pietra di fiume sono state scavate, riparate e rinforzate con una trave anulare in calcestruzzo per garantire stabilità strutturale per decenni.',
        },
        image: balkanStage1,
      },
      {
        title: {
          en: 'Veranda & Woodwork',
          bg: 'Веранда и дърводелски работи',
          ru: 'Веранда и столярные работы',
          de: 'Veranda und Holzarbeiten',
          it: 'Veranda e lavori in legno',
        },
        description: {
          en: 'A new traditional-style wooden veranda and balcony were constructed using locally sourced pine, adding character and extra living space.',
          bg: 'Нова веранда и балкон в традиционен стил бяха построени от местен бор, добавяйки характер и допълнително жилищно пространство.',
          ru: 'Новая веранда и балкон в традиционном стиле были построены из местной сосны, добавляя характер и дополнительное жилое пространство.',
          de: 'Eine neue Holzveranda und ein Balkon im traditionellen Stil wurden aus lokal beschafftem Kiefernholz gebaut und verleihen Charakter und zusätzlichen Wohnraum.',
          it: 'Una nuova veranda in legno e un balcone in stile tradizionale sono stati costruiti con legno di pino locale, aggiungendo carattere e spazio abitativo extra.',
        },
        image: balkanStage2,
      },
    ],
  },
];
