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
  Euro,
  AlertTriangle,
} from 'lucide-react';

/**
 * Article: Bulgaria Property Price Forecasts - 2026, 5-Year & 10-Year Outlook
 * Languages: EN / IT / DE / BG / RU (based on i18n.language)
 * Agency: European Gateway
 * Data: NSI Bulgaria, Eurostat Q3 2025, Investropa, Global Property Guide, BNR - Feb 2026
 */
const BulgariaPriceForecastsArticle = () => {
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
      'https://images.unsplash.com/photo-1758695537300-cc5f7c85a578?w=900&q=80&auto=format&fit=crop',
    unsplash_author_name: 'Unsplash',
    unsplash_author_url: 'https://unsplash.com',
    unsplash_photo_url: 'https://unsplash.com',
  };

  const sources = [
    { label: 'NSI Bulgaria - Housing Price Statistics Q3 2025', url: 'https://www.nsi.bg/en/announcement/housing-price-statistics-third-quarter-of-2025-8900' },
    { label: 'Eurostat - House Price Index Q3 2025', url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Housing_price_statistics_-_house_price_index' },
    { label: 'Investropa - Bulgaria Price Forecasts 2026', url: 'https://investropa.com/blogs/news/bulgaria-price-forecasts' },
    { label: 'Global Property Guide - Bulgaria 2025', url: 'https://www.globalpropertyguide.com/europe/bulgaria/price-history' },
    { label: 'Bulgarian National Radio / Eurostat - Q1 2025', url: 'https://bnrnews.bg/en/post/137425/bulgaria-ranks-second-in-eu-for-house-price-growth-in-early-2025-eurostat' },
  ];

  const translations: Record<string, any> = {
    en: {
      back: 'Back to Home',
      date: 'February 18, 2026',
      readTime: 'Reading time: ~10-12 minutes',
      title: 'Bulgaria Property Price Forecasts: 2026, 5-Year & 10-Year Outlook',
      subtitle:
        'A detailed analysis of current market data, city-by-city dynamics, and forward-looking scenarios - based on NSI Bulgaria, Eurostat, Investropa and Global Property Guide data as of February 2026.',
      keyFactsTitle: 'Key Data Points - February 2026',
      noteTitle: 'Disclaimer',
      noteText:
        'This is a market analysis and scenario-based outlook, not investment advice. All figures reference public sources listed below. Real estate markets are cyclical and outcomes can differ from forecasts.',
      sourcesTitle: 'Sources',
      photoCreditLabel: 'Article photo:',
      photoCreditOn: 'on',
      sections: [
        {
          h2: '1. Where the market stands right now',
          p: [
            'Bulgaria entered 2026 on the back of one of the strongest multi-year property price runs in its history - and in the EU. The NSI (National Statistical Institute) confirmed that nationwide house prices grew 15.4% year-on-year in Q3 2025, following 15.5% in Q2 and 15.1% in Q1. For context, the EU average in the same period was 5.5% (Eurostat, Q3 2025). Bulgaria ranked third in the EU for price growth in Q3 2025, behind Hungary (+21.1%) and Portugal (+17.7%).',
            'What is especially significant is the character of this growth. It is not a single-quarter spike - it has been running at 15-18% annually since Q1 2024. Transaction values rose 23% year-on-year in Q2 2025 even as transaction volumes grew only 2.8%, which means buyers are paying more per deal, not just doing more deals. That is a signal of genuine demand pressure, not speculative volume.',
            'The January 1, 2026 euro adoption - fixing the lev at the long-standing rate of 1 EUR = 1.95583 BGN - has now removed the last major psychological barrier for eurozone investors. Early market indicators from January and February 2026 show continued transaction activity without the sharp post-transition correction some analysts had feared.',
          ],
        },
        {
          h2: '2. City-by-city breakdown: what the NSI data shows',
          blocks: [
            {
              h3: 'Sofia',
              p: [
                'Sofia leads on price and liquidity. Average residential values range from approximately 1,500 to 1,900 EUR/m² for existing stock, with quality new-build developments in prime districts (Lozenets, Manastirski Livadi, Vitosha, Krastova Vada) reaching 2,300-4,500 EUR/m² depending on specification and stage.',
                'NSI data confirms Sofia recorded +10.6% year-on-year in Q1 2025, accelerating to a quarterly gain of +5.3% in Q3 2025 - the second highest quarterly move among major cities. Investropa identifies the southern growth ring (Krastova Vada, Vitosha, Malinova Dolina, Bistritsa, Pancharevo) as the top area for 5-year appreciation in Bulgaria.',
              ],
              bullets: [
                'Price range: 1,500-1,900 EUR/m² (secondary); 2,300-4,500 EUR/m² (new-build, prime)',
                'Gross rental yield: 4-6% in established residential zones',
                'Q3 2025 quarterly growth: +5.3% (NSI)',
                'Best sub-markets: metro corridors, southern growth ring, business district adjacencies',
              ],
            },
            {
              h3: 'Varna',
              p: [
                'Varna is the clear standout on growth rate. It recorded +19% year-on-year in Q2 2025 and +18.4% in Q1 2025 - the highest among all cities tracked by the NSI. New-build prices in Varna grew 21.1% year-on-year in Q2 2025. The city combines coastal lifestyle with a growing tech and services sector, and short-term rental yields are among the strongest in the country during peak season.',
                'Transaction values in Varna grew 27.2% year-on-year in Q2 2025 - the joint highest alongside Sofia. Investropa names Varna\'s lifestyle districts (Levski, Briz, Chayka) as top picks for 5-year growth.',
              ],
              bullets: [
                'Price range: 1,200-1,600 EUR/m² average; sea-view new-build can exceed 2,000 EUR/m²',
                'Short-term rental yield potential: 6-9% gross in peak season',
                'YoY growth Q2 2025: +19% (NSI) - highest in Bulgaria',
                'Growing year-round demand from remote workers and digital nomads',
              ],
            },
            {
              h3: 'Plovdiv',
              p: [
                'Plovdiv is Bulgaria\'s second city and a major industrial and logistics hub. Transaction values grew 21% year-on-year in Q2 2025. In Q3 2025, Plovdiv was the only major city to register a marginal quarterly decline (-0.1%), which analysts attribute to a temporary supply release from new completions rather than a demand shift.',
                'Investropa identifies Plovdiv\'s expanding business and university districts as the third top area for 5-year appreciation. Long-term rental demand is structurally supported by the student population, business parks, and internal migration from smaller towns.',
              ],
              bullets: [
                'Price range: 1,100-1,400 EUR/m² quality new-build',
                'Long-term rental yield: 4.5-6%, driven by universities and business parks',
                'Transaction value growth Q2 2025: +21% (NSI)',
                'Lower entry price with solid demand fundamentals',
              ],
            },
            {
              h3: 'Burgas & the Black Sea coast',
              p: [
                'Burgas recorded the highest single-quarter growth in Q2 2025 at +6.2% quarter-on-quarter (NSI). The broader Black Sea coast - including Sunny Beach, Nessebar, Sozopol, and Sveti Vlas - remains the primary market for short-term rental investors and lifestyle buyers.',
                'Analysts at apartestate.com project coastal resort price growth of up to 15% in 2026 in premium segments. Administrative delays in new construction approvals mean the fewest new apartments in a decade are expected to reach the market in 2027-2028, which is likely to sustain price pressure in well-located coastal assets.',
              ],
              bullets: [
                'Price range: 800-1,600 EUR/m² (wide variance by quality, sea proximity, and complex)',
                'Peak-season gross yield: 8-12% in top-tier complexes with strong management',
                'Burgas Q2 2025 quarterly growth: +6.2% - highest in Bulgaria (NSI)',
                'New supply pipeline tightening in 2027-2028 - structural support for prices',
              ],
            },
            {
              h3: 'Stara Zagora - the surprise performer',
              p: [
                'Often overlooked by international investors, Stara Zagora recorded the highest quarterly growth in Q3 2025 at +7.2% (NSI) - above Sofia and Varna. The city is Bulgaria\'s fifth largest and an important industrial and energy sector hub. The low price base and strong local employment make it an interesting secondary market for long-term rental investors seeking yield over capital appreciation.',
              ],
              bullets: [
                'Q3 2025 quarterly growth: +7.2% - highest in Bulgaria (NSI)',
                'Industrial and energy sector employment base',
                'Very low entry price - strong yield potential for buy-to-let',
              ],
            },
          ],
        },
        {
          h2: '3. The 7 structural drivers behind the numbers',
          blocks: [
            {
              h3: '1 - Euro adoption and currency risk elimination',
              p: [
                'Bulgaria\'s eurozone entry on January 1, 2026 is the single most significant structural change to the investment case. For buyers from Germany, Austria, France, Italy, and other eurozone countries, the currency risk that previously complicated Bulgarian property investment has been fully eliminated. The Deloitte Property Index 2025 cited "optimism around eurozone accession" as a key driver of recent demand.',
              ],
            },
            {
              h3: '2 - Mortgage rates: lowest in the EU',
              p: [
                'As of May 2025, average mortgage rates for housing loans in Bulgaria ranged from 2.60% to 4.20% (Bulgarian National Radio / Bulgarian National Bank data). Investropa confirms these remain among the lowest in the EU. Euro adoption is expected to gradually align these toward ECB-influenced eurozone averages (approximately 3.0-3.5%), which remains highly supportive for affordability relative to income levels.',
              ],
            },
            {
              h3: '3 - Wage convergence: 6-8% annual real growth',
              p: [
                'Investropa identifies 6-8% annual real wage growth as the central assumption across all major 5-year forecasting models for Bulgaria. The IMF confirms GDP growth of approximately 3% in both 2025 and 2026, with the economy "operating above potential." GDP per capita reached approximately 17,400 USD in 2024 and is expected to breach 20,000 USD in 2025 (Global Property Guide / IMF). Rising purchasing power directly expands the domestic buyer pool.',
              ],
            },
            {
              h3: '4 - Supply constraints tightening',
              p: [
                'Administrative approval processes are delaying new construction projects. Market analysts project that 2027-2028 will see the fewest new apartment deliveries in a decade. In the near term, this creates a structural imbalance between demand - which euro adoption and wage growth are actively expanding - and supply, which is constrained. This is the clearest quantifiable support for sustained price appreciation.',
              ],
            },
            {
              h3: '5 - Remote work and digital nomad demand',
              p: [
                'Sofia, Plovdiv, and the coastal cities are increasingly attracting young professionals and digital nomads from Western Europe drawn by fast internet, low living costs, EU residency, and an improving cultural and lifestyle offer. This provides a year-round demand floor for rental markets that previously depended heavily on peak-season tourism alone.',
              ],
            },
            {
              h3: '6 - Schengen membership and investor confidence',
              p: [
                'Bulgaria\'s full Schengen area accession, combined with eurozone membership, has materially improved its standing as an investment destination. The homesoverseas.ru 2025 summary notes growing interest from German and Israeli buyers in particular. EU citizens can now purchase all property types including land directly - a legal framework improvement from the pre-2012 restrictions.',
              ],
            },
            {
              h3: '7 - Croatia precedent: what history suggests',
              p: [
                'Croatia joined the eurozone in January 2023. In the two subsequent years, Dubrovnik and Split saw prices surge considerably. The hn-partners.com analysis notes that post-euro transitions typically bring "a mild driver of additional demand and the legalisation of [the country] as an emerging market in the eurozone." Bulgaria\'s market is larger, its price base lower, and its economic diversification broader than Croatia\'s was at accession.',
              ],
            },
          ],
        },
        {
          h2: '4. Price forecast scenarios: 2026, 5-year, 10-year',
          p: [
            'The table below synthesises published forecasts from Investropa, esalesinternational.com, apartestate.com, and Global Property Guide as of February 2026. These are scenario ranges, not guaranteed outcomes. Different cities and segments will move at different speeds.',
          ],
          table: {
            head: ['Horizon', 'Conservative', 'Base Case', 'Optimistic'],
            rows: [
              [
                '2026 (full year)',
                '3-5% - moderation after 2025 peak; correction in overheated pockets',
                '6-10% - fundamentals-driven, sustained by wages, euro confidence and tight supply',
                '10-15% - accelerated foreign inflows + continued domestic demand surge',
              ],
              [
                '5-year cumulative',
                '~30% - slower eurozone recovery, credit tightening',
                '~45% - Investropa base case: 7.7% avg annual, wage convergence holds',
                '~60% - accelerated income convergence + sustained foreign capital inflow',
              ],
              [
                '10-year',
                'Gradual alignment with regional peers (Romania/Croatia levels)',
                'Sustained outperformance vs EU average, multi-cycle appreciation',
                'Approach Central European benchmarks (Warsaw/Prague/Bratislava range)',
              ],
            ],
          },
          bullets: [
            'Investropa projects 7.7% average annual appreciation over the next 5 years as the base case.',
            '5-year cumulative range: 30% (conservative) to 60% (optimistic) - Investropa, Feb 2026.',
            'From 2015 to Q3 2025, Bulgarian house prices rose 156% in real terms - the 5th highest in the EU (Eurostat).',
            'Since 2000, Bulgarian residential prices have risen approximately 300% in nominal terms (Global Property Guide).',
          ],
        },
        {
          h2: '5. Key risks: what could slow or reverse the trajectory',
          bullets: [
            'Localized oversupply: the highest-probability risk according to Investropa. Several Sofia districts have multiple large developments completing simultaneously - temporary price stagnation in specific corridors is possible even as the broader market rises.',
            'Eurozone credit tightening: if ECB policy tightens sharply, Bulgarian mortgage rates - currently 2.6-4.2% - could rise and compress affordability. This is the second key macro risk.',
            'Demographic pressure: Bulgaria continues to face long-term population decline through emigration. In smaller cities and rural areas, this is a real structural headwind for demand and liquidity.',
            'Regulatory and tax changes: Croatia introduced property tax measures post-euro to control speculation. Bulgaria may follow with similar mechanisms, particularly targeting short-term rental markets on the coast.',
            'Construction quality and management: especially in resort complexes, high annual maintenance fees and poor management can significantly compress net yields. Due diligence on the operating entity matters as much as the property itself.',
            'Overvaluation risk in specific segments: the combination of fear-driven buying (pre-euro hedge) and genuine investment demand has pushed some segments - particularly central Sofia new-build and prime coastal - to levels where the margin of safety for new buyers is thinner.',
          ],
        },
        {
          h2: '6. What to look for: practical buyer framework',
          bullets: [
            'Compare true comps: EUR/m², building age, energy class, floor, parking, sea/city view, and complex management quality.',
            'Run a full ownership cost model: annual maintenance fees, property tax, insurance, estimated repairs, and vacancy periods.',
            'Verify all documents: title deed, no encumbrances, building permits, Act 16 completion certificate, legal status of the complex.',
            'Model your exit: how fast could you realistically sell this asset in a normal market? Liquidity varies enormously by city, district, and property type.',
            'If buying for rental: decide on management model before purchase. Self-managing from abroad is complex; management companies typically charge 20-30% of rental revenue but handle bookings, maintenance, and tenant relations.',
            'Stress-test the yield: model at 50% occupancy and at 70% to understand the range of outcomes, not just the best-case scenario.',
          ],
        },
        {
          h2: '7. Our view',
          p: [
            'The data as of February 2026 supports a clear picture: Bulgaria is in a genuine structural appreciation cycle, not a speculative bubble. The foundations - wage convergence, euro stability, tight supply, improving infrastructure, and growing foreign investor awareness - are real and measurable. The risk is not that prices will collapse. The risk is that buyers overpay for the wrong asset in the wrong location at the wrong quality level.',
            'The market rewards precision. A well-located, well-documented, energy-efficient new-build in a city with strong employment and rental demand - Sofia\'s southern ring, Varna\'s lifestyle districts, Plovdiv\'s business corridors - is a fundamentally different investment to a 2008-era panel apartment in a resort complex with a 15 EUR/m² monthly maintenance fee and no management company.',
            'At European Gateway, we source, verify, and transact. If you need property search, legal due diligence, company registration, certified translations, or document legalization in Bulgaria - that is exactly what we do end-to-end.',
          ],
        },
      ],
      keyFacts: [
        'NSI official data: Bulgarian house prices rose 15.4% YoY in Q3 2025 - third highest in the EU (Eurostat).',
        'Varna leads all cities: +19% YoY in Q2 2025, +21.1% for new-build (NSI).',
        'Sofia Q3 2025 quarterly growth: +5.3% - second highest quarterly gain among major cities (NSI).',
        'Burgas quarterly record: +6.2% in a single quarter (Q2 2025) - highest in the country (NSI).',
        'Mortgage rates: 2.60-4.20% - among the lowest in the EU (Bulgarian National Bank, May 2025).',
        'Investropa base case: 45% cumulative growth over 5 years (7.7% avg/year).',
        'Since 2015: Bulgarian house prices rose 156% in real terms - 5th highest in the EU (Eurostat Q3 2025).',
        'New supply tightening: fewest new apartments expected in a decade in 2027-2028 (market analysis).',
      ],
    },

    it: {
      back: 'Torna alla home',
      date: '18 febbraio 2026',
      readTime: 'Tempo di lettura: ~10-12 minuti',
      title: 'Previsioni dei prezzi immobiliari in Bulgaria: 2026, 5 anni e 10 anni',
      subtitle:
        'Analisi dettagliata dei dati di mercato attuali, dinamiche città per città e scenari prospettici - basata su dati NSI Bulgaria, Eurostat, Investropa e Global Property Guide a febbraio 2026.',
      keyFactsTitle: 'Dati chiave - Febbraio 2026',
      noteTitle: 'Avvertenza',
      noteText:
        'Questa è un\'analisi di mercato e una panoramica di scenari, non un consiglio di investimento. Tutte le cifre fanno riferimento alle fonti pubbliche elencate. I mercati immobiliari sono ciclici e i risultati possono differire dalle previsioni.',
      sourcesTitle: 'Fonti',
      photoCreditLabel: 'Foto articolo:',
      photoCreditOn: 'su',
      sections: [
        {
          h2: '1. Dove si trova il mercato in questo momento',
          p: [
            'La Bulgaria è entrata nel 2026 sulla scia di uno dei cicli di crescita dei prezzi immobiliari più forti della sua storia e dell\'intera UE. L\'NSI (Istituto nazionale di statistica) ha confermato che i prezzi delle case a livello nazionale sono cresciuti del 15,4% su base annua nel Q3 2025, dopo il 15,5% nel Q2 e il 15,1% nel Q1. Per confronto, la media UE nello stesso periodo era del 5,5% (Eurostat, Q3 2025). La Bulgaria si è classificata terza in UE per crescita dei prezzi nel Q3 2025, dietro Ungheria (+21,1%) e Portogallo (+17,7%).',
            'Ciò che è particolarmente significativo è la natura di questa crescita: non si tratta di un picco di un singolo trimestre, ma di una crescita che si mantiene al 15-18% annuo dal Q1 2024. I valori delle transazioni sono cresciuti del 23% su base annua nel Q2 2025, mentre i volumi di transazione sono cresciuti solo del 2,8%, il che significa che gli acquirenti pagano di più per ogni transazione. Questo è un segnale di vera pressione della domanda.',
            'L\'adozione dell\'euro il 1° gennaio 2026 - fissando il lev al tasso di 1 EUR = 1,95583 BGN - ha ora eliminato l\'ultimo grande ostacolo psicologico per gli investitori dell\'eurozona. I primi indicatori di mercato di gennaio e febbraio 2026 mostrano un\'attività transazionale continua senza la brusca correzione post-transizione temuta da alcuni analisti.',
          ],
        },
        {
          h2: '2. Analisi città per città: cosa mostrano i dati NSI',
          blocks: [
            {
              h3: 'Sofia',
              p: [
                'Sofia guida su prezzo e liquidità. I valori residenziali medi vanno da circa 1.500 a 1.900 EUR/m² per gli immobili esistenti, con nuove costruzioni di qualità nei quartieri prime che raggiungono 2.300-4.500 EUR/m².',
                'I dati NSI confermano che Sofia ha registrato +10,6% su base annua nel Q1 2025, con una accelerazione a un guadagno trimestrale di +5,3% nel Q3 2025. Investropa identifica l\'anello di crescita meridionale (Krastova Vada, Vitosha, Malinova Dolina) come l\'area principale per l\'apprezzamento a 5 anni in Bulgaria.',
              ],
              bullets: [
                'Fascia di prezzo: 1.500-1.900 EUR/m² (secondario); 2.300-4.500 EUR/m² (nuova costruzione, prime)',
                'Rendimento lordo da locazione: 4-6% nelle zone residenziali consolidate',
                'Crescita trimestrale Q3 2025: +5,3% (NSI)',
              ],
            },
            {
              h3: 'Varna',
              p: [
                'Varna è la performance più evidente per tasso di crescita. Ha registrato +19% su base annua nel Q2 2025 e +18,4% nel Q1 2025 - il più alto tra tutte le città monitorate dall\'NSI. I prezzi delle nuove costruzioni a Varna sono cresciuti del 21,1% su base annua nel Q2 2025.',
              ],
              bullets: [
                'Fascia di prezzo: 1.200-1.600 EUR/m² media; nuova costruzione con vista mare oltre 2.000 EUR/m²',
                'Rendimento lordo locazione breve: 6-9% in alta stagione',
                'Crescita YoY Q2 2025: +19% - più alta in Bulgaria (NSI)',
              ],
            },
            {
              h3: 'Plovdiv',
              p: [
                'Plovdiv è la seconda città della Bulgaria e un importante hub industriale e logistico. I valori delle transazioni sono cresciuti del 21% su base annua nel Q2 2025. Nel Q3 2025, Plovdiv è stato l\'unico grande città a registrare un marginale calo trimestrale (-0,1%), attribuito a un rilascio temporaneo di offerta da nuovi completamenti.',
              ],
              bullets: [
                'Fascia di prezzo: 1.100-1.400 EUR/m² nuova costruzione di qualità',
                'Rendimento locazione lunga: 4,5-6%, sostenuto da università e parchi commerciali',
              ],
            },
            {
              h3: 'Burgas e la costa del Mar Nero',
              p: [
                'Burgas ha registrato la crescita trimestrale più alta nel Q2 2025 a +6,2% (NSI). La costa del Mar Nero - inclusi Sunny Beach, Nessebar, Sozopol e Sveti Vlas - rimane il mercato principale per gli investitori in locazioni brevi.',
              ],
              bullets: [
                'Fascia di prezzo: 800-1.600 EUR/m² (ampia varianza per qualità e prossimità al mare)',
                'Rendimento lordo di picco: 8-12% nei complessi di prima categoria',
                'Crescita trimestrale Burgas Q2 2025: +6,2% - più alta in Bulgaria (NSI)',
              ],
            },
          ],
        },
        {
          h2: '3. I 7 driver strutturali dietro i numeri',
          blocks: [
            {
              h3: '1 - Adozione dell\'euro ed eliminazione del rischio valutario',
              p: ['L\'ingresso della Bulgaria nell\'eurozona il 1° gennaio 2026 è il cambiamento strutturale più significativo. Per gli acquirenti da Germania, Austria, Francia, Italia, il rischio di cambio è stato completamente eliminato. Il Deloitte Property Index 2025 cita "l\'ottimismo attorno all\'accession all\'eurozona" come driver chiave.'],
            },
            {
              h3: '2 - Tassi mutui: tra i più bassi in UE',
              p: ['A maggio 2025, i tassi medi per mutui abitativi in Bulgaria variavano dal 2,60% al 4,20% (Banca Nazionale Bulgara). Investropa conferma che questi rimangono tra i più bassi nell\'UE, con convergenza attesa verso il range BCE del 3,0-3,5%.'],
            },
            {
              h3: '3 - Convergenza salariale: 6-8% di crescita reale annua',
              p: ['Il PIL pro capite ha raggiunto circa 17.400 USD nel 2024, con attesa di superare 20.000 USD nel 2025 (Global Property Guide / FMI). Il potere d\'acquisto in crescita espande direttamente il bacino di acquirenti domestici.'],
            },
            {
              h3: '4 - Offerta in contrazione',
              p: ['I ritardi nelle approvazioni amministrative significano che il 2027-2028 vedrà il minor numero di nuovi appartamenti immessi sul mercato in un decennio. Squilibrio strutturale tra domanda crescente e offerta limitata.'],
            },
            {
              h3: '5 - Precedente croato',
              p: ['La Croazia ha aderito all\'eurozona nel gennaio 2023. Nei due anni successivi, i prezzi a Dubrovnik e Spalato sono aumentati considerevolmente. Il mercato bulgaro è più grande, la base dei prezzi più bassa, l\'economia più diversificata.'],
            },
            {
              h3: '6 - Nomadi digitali e lavoro da remoto',
              p: ['Sofia, Plovdiv e le città costiere attraggono sempre più giovani professionisti dall\'Europa occidentale. Questo fornisce una domanda di locazione annuale che in precedenza dipendeva principalmente dal turismo stagionale.'],
            },
            {
              h3: '7 - Schengen e fiducia degli investitori',
              p: ['L\'adesione completa all\'area Schengen, combinata con l\'appartenenza all\'eurozona, ha migliorato materialmente la posizione della Bulgaria come destinazione di investimento, con crescente interesse da acquirenti tedeschi e israeliani.'],
            },
          ],
        },
        {
          h2: '4. Scenari di previsione: 2026, 5 anni, 10 anni',
          p: ['La tabella seguente sintetizza le previsioni pubblicate da Investropa, esalesinternational.com, apartestate.com e Global Property Guide a febbraio 2026.'],
          table: {
            head: ['Orizzonte', 'Conservativo', 'Base', 'Ottimistico'],
            rows: [
              ['2026', '3-5% - moderazione dopo il picco 2025', '6-10% - guidato dai fondamentali', '10-15% - afflussi esteri accelerati'],
              ['5 anni cumulativi', '~30% - ripresa più lenta', '~45% - caso base Investropa (7,7% medio/anno)', '~60% - convergenza accelerata'],
              ['10 anni', 'Allineamento graduale ai peer regionali', 'Sovraperformance sostenuta vs media UE', 'Avvicinamento ai benchmark dell\'Europa centrale'],
            ],
          },
          bullets: [
            'Investropa base case: 7,7% apprezzamento annuo medio nei prossimi 5 anni.',
            'Range cumulativo 5 anni: 30% (conservativo) - 60% (ottimistico).',
            'Dal 2015 al Q3 2025: prezzi bulgari +156% in termini reali - 5° più alto in UE (Eurostat).',
          ],
        },
        {
          h2: '5. Rischi principali',
          bullets: [
            'Eccesso di offerta localizzato: il rischio più probabile secondo Investropa - diversi grandi sviluppi in completamento simultaneo in alcuni quartieri di Sofia.',
            'Aumento tassi BCE: se la politica della BCE si restringe bruscamente, i tassi mutui bulgari (attualmente 2,6-4,2%) potrebbero aumentare e comprimere l\'accessibilità.',
            'Pressione demografica: declino della popolazione a lungo termine attraverso l\'emigrazione - vento contrario nelle città più piccole.',
            'Modifiche normative: la Croazia ha introdotto misure fiscali post-euro. La Bulgaria potrebbe seguire, in particolare per le locazioni brevi sulla costa.',
            'Qualità costruttiva e gestione: soprattutto nei complessi resort, le alte spese di manutenzione e la cattiva gestione possono comprimere i rendimenti netti.',
          ],
        },
        {
          h2: '6. Framework pratico per l\'acquirente',
          bullets: [
            'Confronta parametri reali: EUR/m², classe energetica, piano, parcheggio, vista mare/città, qualità della gestione del complesso.',
            'Modella il costo totale di proprietà: spese annuali di manutenzione, imposta sugli immobili, assicurazione, riparazioni stimate, periodi di sfitto.',
            'Verifica tutti i documenti: atto di proprietà, assenza di vincoli, permessi di costruzione, certificato di completamento Atto 16.',
            'Valuta la liquidità: quanto velocemente potresti vendere realisticamente questo asset?',
            'Stress-test del rendimento: modella al 50% e al 70% di occupazione per comprendere la gamma di risultati.',
          ],
        },
        {
          h2: '7. La nostra valutazione',
          p: [
            'I dati di febbraio 2026 supportano un quadro chiaro: la Bulgaria è in un ciclo di apprezzamento strutturale genuino, non in una bolla speculativa. Le fondamenta - convergenza salariale, stabilità dell\'euro, offerta limitata, infrastrutture in miglioramento, crescente consapevolezza degli investitori esteri - sono reali e misurabili.',
            'Il mercato premia la precisione. Un nuovo edificio ben posizionato, ben documentato ed energeticamente efficiente in una città con forte occupazione e domanda di locazione è un investimento fondamentalmente diverso da un vecchio appartamento prefabbricato in un complesso resort con spese di manutenzione elevate e nessuna società di gestione.',
            'In European Gateway selezioniamo, verifichiamo e gestiamo le transazioni. Se hai bisogno di ricerca immobiliare, due diligence legale, costituzione di società, traduzioni certificate o legalizzazione di documenti in Bulgaria - è esattamente quello che facciamo.',
          ],
        },
      ],
      keyFacts: [
        'Dati ufficiali NSI: prezzi delle case bulgare +15,4% YoY nel Q3 2025 - terzo più alto in UE (Eurostat).',
        'Varna guida tutte le città: +19% YoY nel Q2 2025, +21,1% per le nuove costruzioni (NSI).',
        'Sofia crescita trimestrale Q3 2025: +5,3% - secondo guadagno trimestrale più alto (NSI).',
        'Burgas record trimestrale: +6,2% in un solo trimestre Q2 2025 - più alto in Bulgaria (NSI).',
        'Tassi mutui: 2,60-4,20% - tra i più bassi in UE (Banca Nazionale Bulgara, maggio 2025).',
        'Caso base Investropa: 45% crescita cumulativa in 5 anni (7,7% media/anno).',
        'Dal 2015: prezzi bulgari +156% in termini reali - 5° più alto in UE (Eurostat Q3 2025).',
        'Offerta in contrazione: meno nuovi appartamenti attesi in un decennio nel 2027-2028.',
      ],
    },

    de: {
      back: 'Zur Startseite',
      date: '18. Februar 2026',
      readTime: 'Lesezeit: ~10-12 Minuten',
      title: 'Prognose der Immobilienpreise in Bulgarien: 2026, 5 Jahre & 10 Jahre',
      subtitle:
        'Eine detaillierte Analyse aktueller Marktdaten, städteweise Dynamiken und Zukunftsszenarien - basierend auf Daten von NSI Bulgarien, Eurostat, Investropa und Global Property Guide, Stand Februar 2026.',
      keyFactsTitle: 'Wichtige Fakten - Februar 2026',
      noteTitle: 'Haftungsausschluss',
      noteText:
        'Dies ist eine Marktanalyse und eine szenariobasierte Übersicht, keine Anlageberatung. Alle Zahlen beziehen sich auf die unten aufgeführten öffentlichen Quellen. Immobilienmärkte sind zyklisch und Ergebnisse können von Prognosen abweichen.',
      sourcesTitle: 'Quellen',
      photoCreditLabel: 'Artikelfoto:',
      photoCreditOn: 'auf',
      sections: [
        {
          h2: '1. Wo der Markt gerade steht',
          p: [
            'Bulgarien ist mit einem der stärksten mehrjährigen Immobilienpreisanstiege seiner Geschichte und der EU in das Jahr 2026 gestartet. Das NSI (Nationales Statistisches Institut) bestätigte, dass die landesweiten Hauspreise im Q3 2025 um 15,4% gegenüber dem Vorjahr gestiegen sind - nach 15,5% im Q2 und 15,1% im Q1. Der EU-Durchschnitt im gleichen Zeitraum betrug 5,5% (Eurostat, Q3 2025). Bulgarien belegte den dritten Platz in der EU für Preiswachstum im Q3 2025, hinter Ungarn (+21,1%) und Portugal (+17,7%).',
            'Besonders bedeutsam ist der Charakter dieses Wachstums: Es handelt sich nicht um einen einmaligen Quartalspeak, sondern um ein seit Q1 2024 anhaltendes Wachstum von 15-18% jährlich. Transaktionswerte stiegen im Q2 2025 um 23% gegenüber dem Vorjahr, obwohl die Transaktionsvolumen nur um 2,8% stiegen - ein klares Signal für echten Nachfragedruck.',
            'Die Euro-Einführung am 1. Januar 2026 - mit der Fixierung des Lew bei 1 EUR = 1,95583 BGN - hat nun die letzte psychologische Hürde für Eurozone-Investoren beseitigt. Frühe Marktindikatoren aus Januar und Februar 2026 zeigen anhaltende Transaktionsaktivität ohne die befürchtete Korrektur.',
          ],
        },
        {
          h2: '2. Städteweise Analyse: Was die NSI-Daten zeigen',
          blocks: [
            {
              h3: 'Sofia',
              p: [
                'Sofia führt bei Preis und Liquidität. Durchschnittliche Wohnwerte liegen bei etwa 1.500 bis 1.900 EUR/m² für Bestandsimmobilien, mit qualitativ hochwertigen Neubauten in Prime-Bezirken bei 2.300-4.500 EUR/m².',
                'NSI-Daten bestätigen +10,6% YoY im Q1 2025, beschleunigt auf +5,3% im Quartalsvergleich im Q3 2025. Investropa identifiziert den südlichen Wachstumsring (Krastova Vada, Vitosha, Malinova Dolina) als Top-Bereich für 5-Jahres-Wertsteigerung.',
              ],
              bullets: [
                'Preisspanne: 1.500-1.900 EUR/m² (Bestand); 2.300-4.500 EUR/m² (Neubau, Prime)',
                'Bruttomietrendite: 4-6% in etablierten Wohngebieten',
                'Quartalswachstum Q3 2025: +5,3% (NSI)',
              ],
            },
            {
              h3: 'Varna',
              p: [
                'Varna ist die deutliche Spitzenperformerin bei der Wachstumsrate. +19% YoY im Q2 2025 und +18,4% im Q1 2025 - das höchste unter allen vom NSI erfassten Städten. Neubaupreise in Varna stiegen im Q2 2025 um 21,1% YoY.',
              ],
              bullets: [
                'Preisspanne: 1.200-1.600 EUR/m² durchschnittlich; Meerblick-Neubauten über 2.000 EUR/m²',
                'Kurzzeit-Mietrendite: 6-9% brutto in der Hochsaison',
                'YoY-Wachstum Q2 2025: +19% - höchstes in Bulgarien (NSI)',
              ],
            },
            {
              h3: 'Plovdiv',
              p: [
                'Plovdiv ist Bulgariens zweitgrößte Stadt und ein wichtiger Industrie- und Logistik-Hub. Transaktionswerte stiegen im Q2 2025 um 21% YoY. Im Q3 2025 verzeichnete Plovdiv als einzige große Stadt einen marginalen Quartalrückgang (-0,1%), der Analysten auf eine vorübergehende Angebotserweiterung durch Fertigstellungen zurückführen.',
              ],
              bullets: [
                'Preisspanne: 1.100-1.400 EUR/m² Qualitätsneubau',
                'Langzeitmietrendite: 4,5-6%, getrieben durch Universitäten und Gewerbegebiete',
              ],
            },
            {
              h3: 'Burgas & die Schwarzmeerküste',
              p: [
                'Burgas verzeichnete das höchste Quartalswachstum im Q2 2025 mit +6,2% (NSI). Die gesamte Schwarzmeerküste bleibt der Hauptmarkt für Kurzzeitvermietungsinvestoren.',
              ],
              bullets: [
                'Preisspanne: 800-1.600 EUR/m² (breite Varianz je nach Qualität und Meeresnähe)',
                'Peak-Saison Bruttorendite: 8-12% in erstklassigen Komplexen',
                'Burgas Quartalswachstum Q2 2025: +6,2% - höchstes in Bulgarien (NSI)',
              ],
            },
          ],
        },
        {
          h2: '3. Die 7 strukturellen Treiber hinter den Zahlen',
          blocks: [
            {
              h3: '1 - Euro-Einführung und Eliminierung des Währungsrisikos',
              p: ['Bulgariens Eurozone-Beitritt am 1. Januar 2026 ist die bedeutsamste strukturelle Veränderung für den Investitionsfall. Für Käufer aus Deutschland, Österreich, Frankreich und anderen Eurozone-Ländern wurde das Währungsrisiko vollständig eliminiert. Der Deloitte Property Index 2025 nennt "Optimismus rund um den Eurozone-Beitritt" als Schlüsseltreiber.'],
            },
            {
              h3: '2 - Hypothekenzinsen: Niedrigste in der EU',
              p: ['Ab Mai 2025 lagen die durchschnittlichen Hypothekenzinsen in Bulgarien zwischen 2,60% und 4,20% (Bulgarische Nationalbank). Eine schrittweise Annäherung an EZB-beeinflusste Eurozonen-Durchschnitte (ca. 3,0-3,5%) wird erwartet.'],
            },
            {
              h3: '3 - Lohnkonvergenz: 6-8% reales Jahreswachstum',
              p: ['Das BIP pro Kopf erreichte ca. 17.400 USD im Jahr 2024, mit Erwartung über 20.000 USD im Jahr 2025 (IWF). Steigende Kaufkraft erweitert den inländischen Käuferpool direkt.'],
            },
            {
              h3: '4 - Angebotsengpass',
              p: ['Verzögerungen im Genehmigungsprozess bedeuten, dass 2027-2028 die wenigsten neuen Wohnungen seit einem Jahrzehnt auf den Markt kommen werden. Strukturelles Ungleichgewicht zwischen wachsender Nachfrage und begrenztem Angebot.'],
            },
            {
              h3: '5 - Kroatisches Präzedenzfall',
              p: ['Kroatien trat der Eurozone im Januar 2023 bei. In den darauf folgenden zwei Jahren stiegen die Preise in Dubrovnik und Split erheblich. Bulgariens Markt ist größer, die Preisbasis niedriger und die Wirtschaft breiter diversifiziert.'],
            },
            {
              h3: '6 - Digitale Nomaden und Remote-Arbeit',
              p: ['Sofia, Plovdiv und die Küstenstädte ziehen zunehmend junge Fachkräfte aus Westeuropa an - was für eine ganzjährige Mietnachfrage sorgt, die zuvor stark von der Hauptsaison abhängig war.'],
            },
            {
              h3: '7 - Schengen-Mitgliedschaft und Investorenvertrauen',
              p: ['Die vollständige Schengen-Mitgliedschaft kombiniert mit der Eurozone-Zugehörigkeit hat Bulgariens Position als Investitionsziel erheblich verbessert, mit wachsendem Interesse von deutschen und israelischen Käufern.'],
            },
          ],
        },
        {
          h2: '4. Preisszenarien: 2026, 5 Jahre, 10 Jahre',
          p: ['Die folgende Tabelle fasst veröffentlichte Prognosen von Investropa, esalesinternational.com, apartestate.com und Global Property Guide per Februar 2026 zusammen.'],
          table: {
            head: ['Horizont', 'Konservativ', 'Basisfall', 'Optimistisch'],
            rows: [
              ['2026', '3-5% - Moderierung nach 2025-Peak', '6-10% - fundamentalgetrieben', '10-15% - beschleunigte Auslandsflüsse'],
              ['5 Jahre kumulativ', '~30% - langsamere Erholung', '~45% - Investropa-Basisfall (7,7% Durchschnitt/Jahr)', '~60% - beschleunigte Konvergenz'],
              ['10 Jahre', 'Schrittweise Angleichung an regionale Peers', 'Anhaltende Outperformance vs. EU-Durchschnitt', 'Annäherung an mitteleuropäische Benchmarks'],
            ],
          },
          bullets: [
            'Investropa-Basisfall: 7,7% durchschnittliche jährliche Wertsteigerung über die nächsten 5 Jahre.',
            '5-Jahres-Kumulativbereich: 30% (konservativ) bis 60% (optimistisch).',
            'Von 2015 bis Q3 2025: Bulgarische Hauspreise +156% in realen Werten - 5. höchstes in der EU (Eurostat).',
          ],
        },
        {
          h2: '5. Hauptrisiken',
          bullets: [
            'Lokalisiertes Überangebot: Laut Investropa das wahrscheinlichste Risiko - mehrere große Projekte schließen gleichzeitig in bestimmten Sofia-Bezirken ab.',
            'EZB-Zinssteigerungen: Wenn die EZB-Politik stark anzieht, könnten bulgarische Hypothekenzinsen (aktuell 2,6-4,2%) steigen.',
            'Demografischer Druck: Langfristiger Bevölkerungsrückgang durch Emigration - Gegenwind in kleineren Städten.',
            'Regulatorische Änderungen: Kroatien hat nach Euro-Einführung Immobiliensteuermaßnahmen eingeführt. Bulgarien könnte folgen.',
            'Bauqualität und Verwaltung: Besonders in Resort-Komplexen können hohe Wartungsgebühren und schlechtes Management die Nettorenditen erheblich komprimieren.',
          ],
        },
        {
          h2: '6. Praktischer Käuferrahmen',
          bullets: [
            'Echte Vergleiche: EUR/m², Energieklasse, Etage, Parkplatz, Meerblick/Stadtblick, Komplexverwaltungsqualität.',
            'Modell der Gesamtbesitzkosten: Jährliche Wartungsgebühren, Grundsteuer, Versicherung, geschätzte Reparaturen, Leerstandszeiten.',
            'Alle Dokumente prüfen: Eigentumsnachweis, keine Belastungen, Baugenehmigungen, Akt-16-Abnahmebescheinigung.',
            'Liquidität bewerten: Wie schnell könnten Sie diesen Vermögenswert realistischerweise verkaufen?',
            'Rendite-Stresstest: Modell bei 50% und 70% Auslastung, um die Ergebnispalette zu verstehen.',
          ],
        },
        {
          h2: '7. Unsere Einschätzung',
          p: [
            'Die Daten von Februar 2026 unterstützen ein klares Bild: Bulgarien befindet sich in einem echten strukturellen Aufwertungszyklus, nicht in einer Spekulationsblase. Die Grundlagen - Lohnkonvergenz, Euro-Stabilität, knappes Angebot, verbesserte Infrastruktur und wachsendes ausländisches Investorenbewusstsein - sind real und messbar.',
            'Der Markt belohnt Präzision. Eine gut gelegene, gut dokumentierte, energieeffiziente Neubauwohnung in einer Stadt mit starker Beschäftigung und Mietnachfrage ist eine fundamental andere Investition als eine Plattenbaunung in einem Resort-Komplex mit hohen Wartungsgebühren.',
            'Bei European Gateway suchen, prüfen und verhandeln wir. Wenn Sie Immobiliensuche, rechtliche Due-Diligence, Unternehmensgründung, beglaubigte Übersetzungen oder Dokumentenlegalisierung in Bulgarien benötigen - genau das machen wir.',
          ],
        },
      ],
      keyFacts: [
        'Offizielle NSI-Daten: Bulgarische Hauspreise +15,4% YoY in Q3 2025 - dritthöchstes in der EU (Eurostat).',
        'Varna führt alle Städte: +19% YoY in Q2 2025, +21,1% für Neubauten (NSI).',
        'Sofia Quartalswachstum Q3 2025: +5,3% - zweithöchster Quartalsgewinn (NSI).',
        'Burgas Quartalsrekord: +6,2% in einem Quartal Q2 2025 - höchstes in Bulgarien (NSI).',
        'Hypothekenzinsen: 2,60-4,20% - unter den niedrigsten in der EU (Bulgarische Nationalbank, Mai 2025).',
        'Investropa-Basisfall: 45% kumulatives Wachstum über 5 Jahre (7,7% Durchschnitt/Jahr).',
        'Seit 2015: Bulgarische Preise +156% in realen Werten - 5. höchstes in der EU (Eurostat Q3 2025).',
        'Angebotsverknappung: Wenigste neue Wohnungen in einem Jahrzehnt erwartet 2027-2028.',
      ],
    },

    bg: {
      back: 'Към началото',
      date: '18 февруари 2026',
      readTime: 'Време за четене: ~10-12 минути',
      title: 'Прогноза за цените на имотите в България: 2026, 5 години и 10 години',
      subtitle:
        'Подробен анализ на актуални пазарни данни, динамика по градове и бъдещи сценарии - базиран на данни на НСИ България, Евростат, Investropa и Global Property Guide към февруари 2026 г.',
      keyFactsTitle: 'Ключови данни - Февруари 2026',
      noteTitle: 'Отказ от отговорност',
      noteText:
        'Това е пазарен анализ и сценарен преглед, а не инвестиционен съвет. Всички данни препращат към публичните източници по-долу. Пазарите на имоти са циклични и резултатите могат да се различават от прогнозите.',
      sourcesTitle: 'Източници',
      photoCreditLabel: 'Снимка към статията:',
      photoCreditOn: 'в',
      sections: [
        {
          h2: '1. Къде стои пазарът в момента',
          p: [
            'България навлезе в 2026 г. след един от най-силните многогодишни цикли на ръст на цените на имотите в своята история и в ЕС. НСИ потвърди, че националните цени на жилищата са нараснали с 15,4% на годишна база в Q3 2025, след 15,5% в Q2 и 15,1% в Q1. За сравнение, средното за ЕС в същия период беше 5,5% (Евростат, Q3 2025). България се нареди трета в ЕС по ръст на цените в Q3 2025, след Унгария (+21,1%) и Португалия (+17,7%).',
            'Особено значимо е характера на този ръст: не става дума за пик в един квартал, а за устойчив ръст от 15-18% годишно от Q1 2024. Стойностите на сделките нараснаха с 23% на годишна база в Q2 2025, докато обемите на сделките нараснаха само с 2,8% - сигнал за реален натиск от страна на търсенето.',
            'Приемането на еврото на 1 януари 2026 г. - фиксирайки лева на 1 EUR = 1,95583 BGN - вече елиминира последната голяма психологическа бариера за инвеститорите от еврозоната. Ранните пазарни индикатори от януари и февруари 2026 г. показват продължаваща сделкова активност без острата корекция след прехода, от която се опасяваха някои анализатори.',
          ],
        },
        {
          h2: '2. Анализ по градове: какво показват данните на НСИ',
          blocks: [
            {
              h3: 'София',
              p: [
                'София води по цена и ликвидност. Средните жилищни стойности варират от приблизително 1,500 до 1,900 EUR/м² за съществуващ фонд, с качествени новострои в prime квартали (Лозенец, Манастирски ливади, Витоша, Кръстова вада) достигащи 2,300-4,500 EUR/м².',
                'Данните на НСИ потвърждават +10,6% на годишна база в Q1 2025, ускорявайки се до тримесечен ръст от +5,3% в Q3 2025 - втория най-висок тримесечен ход сред основните градове. Investropa идентифицира южния растежен пръстен (Кръстова вада, Витоша, Малинова долина) като топ зона за 5-годишно поскъпване в България.',
              ],
              bullets: [
                'Ценови диапазон: 1,500-1,900 EUR/м² (вторичен); 2,300-4,500 EUR/м² (ново строителство, prime)',
                'Брутна наемна доходност: 4-6% в утвърдени жилищни зони',
                'Тримесечен ръст Q3 2025: +5,3% (НСИ)',
                'Най-добри под-пазари: метро коридори, южен растежен пръстен',
              ],
            },
            {
              h3: 'Варна',
              p: [
                'Варна е ясният лидер по темп на ръст. Регистрира +19% на годишна база в Q2 2025 и +18,4% в Q1 2025 - най-висок сред всички градове, наблюдавани от НСИ. Цените на новото строителство във Варна нараснаха с 21,1% на годишна база в Q2 2025. Стойностите на сделките нараснаха с 27,2% на годишна база в Q2 2025 - съвместно най-висок заедно със София.',
              ],
              bullets: [
                'Ценови диапазон: средно 1,200-1,600 EUR/м²; ново строителство с морска гледка може да надхвърли 2,000 EUR/м²',
                'Потенциал за краткосрочна наемна доходност: 6-9% бруто в пиковия сезон',
                'Годишен ръст Q2 2025: +19% - най-висок в България (НСИ)',
              ],
            },
            {
              h3: 'Пловдив',
              p: [
                'Пловдив е вторият град в България и важен индустриален и логистичен хъб. Стойностите на сделките нараснаха с 21% на годишна база в Q2 2025. В Q3 2025 Пловдив беше единственият голям град с маргинален тримесечен спад (-0,1%), приписван на временно освобождаване на предлагане от нови завършвания.',
              ],
              bullets: [
                'Ценови диапазон: 1,100-1,400 EUR/м² качествено ново строителство',
                'Дългосрочна наемна доходност: 4,5-6%, подкрепена от университети и бизнес паркове',
              ],
            },
            {
              h3: 'Бургас и Черноморското крайбрежие',
              p: [
                'Бургас регистрира най-висок единичен тримесечен ръст в Q2 2025 от +6,2% (НСИ). По-широкото Черноморско крайбрежие - включително Слънчев бряг, Несебър, Созопол и Свети Влас - остава основният пазар за инвеститори в краткосрочни наеми. Административните забавяния в одобренията за ново строителство означават, че 2027-2028 г. ще донесат най-малко нови апартаменти на пазара за десетилетие.',
              ],
              bullets: [
                'Ценови диапазон: 800-1,600 EUR/м² (широк диапазон по качество и близост до морето)',
                'Пикова сезонна брутна доходност: 8-12% в топ комплекси',
                'Тримесечен ръст на Бургас Q2 2025: +6,2% - най-висок в България (НСИ)',
              ],
            },
            {
              h3: 'Стара Загора - изненадващият изпълнител',
              p: [
                'Стара Загора регистрира най-висок тримесечен ръст в Q3 2025 от +7,2% (НСИ) - над София и Варна. Петият по-голям град в България е важен индустриален и енергиен хъб с ниска входна цена и силна местна заетост.',
              ],
              bullets: [
                'Тримесечен ръст Q3 2025: +7,2% - най-висок в България (НСИ)',
                'Индустриална и енергийна заетостна база',
                'Много ниска входна цена - силен потенциал за доходност',
              ],
            },
          ],
        },
        {
          h2: '3. 7-те структурни двигателя зад числата',
          blocks: [
            {
              h3: '1 - Приемане на еврото и елиминиране на валутния риск',
              p: ['Влизането на България в еврозоната на 1 януари 2026 г. е най-значимата структурна промяна за инвестиционния case. За купувачи от Германия, Австрия, Франция, Италия и други страни от еврозоната валутният риск е напълно елиминиран. Deloitte Property Index 2025 цитира "оптимизма около присъединяването към еврозоната" като ключов двигател.'],
            },
            {
              h3: '2 - Ипотечни лихви: сред най-ниските в ЕС',
              p: ['Към май 2025 г. средните ипотечни лихви в България варираха от 2,60% до 4,20% (БНБ). Очаква се постепенно сближаване с лихвите, повлияни от ЕЦБ (~3,0-3,5%).'],
            },
            {
              h3: '3 - Конвергенция на заплатите: 6-8% реален годишен ръст',
              p: ['БВП на глава от населението достигна около 17,400 USD през 2024 г., с очаквания да надхвърли 20,000 USD през 2025 г. (МВФ). Нарастващата покупателна способност пряко разширява вътрешния купувачески пул.'],
            },
            {
              h3: '4 - Свиване на предлагането',
              p: ['Административните забавяния в одобренията означават, че 2027-2028 г. ще донесат най-малко нови апартаменти за десетилетие. Структурен дисбаланс между нарастващото търсене и ограниченото предлагане.'],
            },
            {
              h3: '5 - Хърватски прецедент',
              p: ['Хърватия се присъедини към еврозоната през януари 2023 г. През следващите две години цените в Дубровник и Сплит се повишиха значително. Българският пазар е по-голям, ценовата основа е по-ниска, икономиката е по-диверсифицирана.'],
            },
            {
              h3: '6 - Дигитални номади и отдалечена работа',
              p: ['София, Пловдив и крайбрежните градове привличат все повече млади специалисти от Западна Европа, осигурявайки целогодишно търсене на наеми, което преди беше силно зависимо от сезонния туризъм.'],
            },
            {
              h3: '7 - Шенген членство и доверие на инвеститорите',
              p: ['Пълното Шенген членство в комбинация с еврозоната значително подобри позицията на България като инвестиционна дестинация, с нарастващ интерес от германски и израелски купувачи.'],
            },
          ],
        },
        {
          h2: '4. Ценови сценарии: 2026, 5 години, 10 години',
          p: ['Таблицата по-долу синтезира публикувани прогнози от Investropa, esalesinternational.com, apartestate.com и Global Property Guide към февруари 2026 г.'],
          table: {
            head: ['Хоризонт', 'Консервативен', 'Базов', 'Оптимистичен'],
            rows: [
              ['2026', '3-5% - нормализиране след пика от 2025 г.', '6-10% - движено от фундаменти', '10-15% - ускорени чуждестранни притоци'],
              ['5 години кумулативно', '~30% - по-бавно възстановяване', '~45% - базов случай на Investropa (ср. 7,7%/год)', '~60% - ускорена конвергенция'],
              ['10 години', 'Постепенно изравняване с регионалните peers', 'Устойчиво надпредставяне спрямо средното за ЕС', 'Приближаване до централноевропейски benchmark'],
            ],
          },
          bullets: [
            'Базов случай на Investropa: 7,7% средно годишно поскъпване за следващите 5 години.',
            'Кумулативен диапазон за 5 години: 30% (консервативен) до 60% (оптимистичен).',
            'От 2015 г. до Q3 2025 г.: Български цени +156% в реално изражение - 5-то най-високо в ЕС (Евростат).',
          ],
        },
        {
          h2: '5. Основни рискове',
          bullets: [
            'Локализирано свръхпредлагане: най-вероятният риск според Investropa - няколко големи проекта завършват едновременно в определени квартали на София.',
            'Затягане на лихвите на ЕЦБ: при рязко затягане на политиката на ЕЦБ ипотечните лихви (2,6-4,2%) могат да нараснат.',
            'Демографски натиск: дългосрочен спад на населението чрез емиграция - насрещен вятър в по-малките градове.',
            'Регулаторни промени: Хърватия въведе данъчни мерки за имоти след еврото. България може да последва, особено за краткосрочни наеми по крайбрежието.',
            'Качество на строителство и управление: особено в курортни комплекси, високите такси за поддръжка могат значително да компресират нетната доходност.',
          ],
        },
        {
          h2: '6. Практическа рамка за купувача',
          bullets: [
            'Сравнете реални аналози: EUR/м², енергиен клас, етаж, паркиране, гледка, качество на управление на комплекса.',
            'Моделирайте пълната цена на притежание: годишни такси, данъци, застраховка, ремонти, периоди без наематели.',
            'Проверете всички документи: нотариален акт, без тежести, строителни разрешения, Акт 16.',
            'Оценете ликвидността: колко бързо реалистично бихте могли да продадете този актив?',
            'Стрес-тест на доходността: моделирайте при 50% и 70% заетост за разбиране на диапазона от резултати.',
          ],
        },
        {
          h2: '7. Нашата оценка',
          p: [
            'Данните от февруари 2026 г. подкрепят ясна картина: България е в истински структурен цикъл на поскъпване, а не в спекулативен балон. Основите - конвергенция на заплатите, евро стабилност, ограничено предлагане, подобряваща се инфраструктура и нарастваща осведоменост на чуждестранни инвеститори - са реални и измерими.',
            'Пазарът възнаграждава точността. Добре позициониран, добре документиран, енергийноефективен новострой в град с силна заетост и наемно търсене е фундаментално различна инвестиция от панелен апартамент в курортен комплекс с високи такси и без управляваща компания.',
            'В European Gateway подбираме, проверяваме и сключваме сделки. Ако имате нужда от подбор на имоти, правна проверка, регистрация на фирма, заверени преводи или легализация на документи в България - точно това правим.',
          ],
        },
      ],
      keyFacts: [
        'Официални данни на НСИ: Цени на жилищата в България +15,4% на годишна база в Q3 2025 - трето най-висок в ЕС (Евростат).',
        'Варна води всички градове: +19% на годишна база в Q2 2025, +21,1% за ново строителство (НСИ).',
        'Тримесечен ръст на София Q3 2025: +5,3% - втори по-висок тримесечен ръст (НСИ).',
        'Рекорд на Бургас за тримесечие: +6,2% за едно тримесечие Q2 2025 - най-висок в България (НСИ).',
        'Ипотечни лихви: 2,60-4,20% - сред най-ниските в ЕС (БНБ, май 2025 г.).',
        'Базов случай на Investropa: 45% кумулативен ръст за 5 години (ср. 7,7%/год).',
        'От 2015 г.: Български цени +156% в реално изражение - 5-то най-високо в ЕС (Евростат Q3 2025).',
        'Свиване на предлагането: най-малко нови апартаменти за десетилетие се очакват 2027-2028 г.',
      ],
    },

    ru: {
      back: 'На главную',
      date: '18 февраля 2026',
      readTime: 'Время чтения: ~10-12 минут',
      title: 'Прогноз цен на недвижимость в Болгарии: 2026, 5 лет и 10 лет',
      subtitle:
        'Детальный анализ актуальных рыночных данных, городская динамика и сценарные прогнозы - на основе данных NSI Болгарии, Eurostat, Investropa и Global Property Guide по состоянию на февраль 2026 года.',
      keyFactsTitle: 'Ключевые данные - Февраль 2026',
      noteTitle: 'Дисклеймер',
      noteText:
        'Это рыночный анализ и сценарный обзор, а не инвестиционная рекомендация. Все цифры ссылаются на публичные источники, перечисленные ниже. Рынки недвижимости цикличны, и результаты могут отличаться от прогнозов.',
      sourcesTitle: 'Источники',
      photoCreditLabel: 'Фото к статье:',
      photoCreditOn: 'на',
      sections: [
        {
          h2: '1. Где рынок находится прямо сейчас',
          p: [
            'Болгария вошла в 2026 год на фоне одного из самых сильных многолетних циклов роста цен на недвижимость в своей истории и в ЕС. NSI (Национальный статистический институт) подтвердил, что общенациональные цены на жильё выросли на 15,4% в годовом выражении в Q3 2025, после 15,5% в Q2 и 15,1% в Q1. Для контекста: среднее по ЕС за тот же период составило 5,5% (Eurostat, Q3 2025). Болгария заняла третье место в ЕС по росту цен в Q3 2025, уступив только Венгрии (+21,1%) и Португалии (+17,7%).',
            'Особенно значим характер этого роста: это не разовый квартальный пик, а устойчивый рост на 15-18% в год, продолжающийся с Q1 2024. Стоимость сделок выросла на 23% в годовом выражении в Q2 2025, тогда как объём сделок вырос лишь на 2,8% - сигнал реального давления спроса, а не спекулятивного объёма.',
            'Принятие евро 1 января 2026 года - фиксация лева на давно установленном курсе 1 EUR = 1,95583 BGN - теперь устранило последний крупный психологический барьер для инвесторов из еврозоны. Ранние рыночные индикаторы за январь и февраль 2026 года показывают продолжение транзакционной активности без резкой посттрансформационной коррекции, которой опасались некоторые аналитики.',
          ],
        },
        {
          h2: '2. Поцитовое разбивка по городам: что показывают данные NSI',
          blocks: [
            {
              h3: 'София',
              p: [
                'София лидирует по цене и ликвидности. Средние жилые стоимости варьируются от приблизительно 1 500 до 1 900 EUR/м² для вторичного рынка, при этом качественные новостройки в прайм-районах (Лозенец, Манастирски ливади, Витоша, Кръстова вада) достигают 2 300-4 500 EUR/м² в зависимости от спецификации и стадии.',
                'Данные NSI подтверждают +10,6% в годовом выражении в Q1 2025, с ускорением до квартального прироста +5,3% в Q3 2025 - второй по величине квартальный показатель среди крупных городов. Investropa определяет южное кольцо роста Софии (Кръстова вада, Витоша, Малинова долина, Бистрица, Панчарево) как топ-зону для 5-летнего роста в Болгарии.',
              ],
              bullets: [
                'Ценовой диапазон: 1 500-1 900 EUR/м² (вторичный); 2 300-4 500 EUR/м² (новостройки, прайм)',
                'Валовая арендная доходность: 4-6% в устоявшихся жилых зонах',
                'Квартальный рост Q3 2025: +5,3% (NSI)',
                'Лучшие под-рынки: метро-коридоры, южное кольцо роста, деловые зоны',
              ],
            },
            {
              h3: 'Варна',
              p: [
                'Варна - явный лидер по темпу роста. Зафиксировала +19% в годовом выражении в Q2 2025 и +18,4% в Q1 2025 - наивысший показатель среди всех городов, отслеживаемых NSI. Цены на новостройки в Варне выросли на 21,1% в годовом выражении в Q2 2025. Стоимость сделок в Варне выросла на 27,2% в годовом выражении в Q2 2025 - совместно наивысший показатель вместе с Софией.',
                'Investropa называет lifestyle-районы Варны (Левски, Бриз, Чайка) лучшими для 5-летнего роста.',
              ],
              bullets: [
                'Ценовой диапазон: в среднем 1 200-1 600 EUR/м²; новостройки с видом на море могут превышать 2 000 EUR/м²',
                'Потенциал краткосрочной аренды: 6-9% валовой доходности в сезон',
                'Годовой рост Q2 2025: +19% - наивысший в Болгарии (NSI)',
                'Растущий круглогодичный спрос от удалённых работников и цифровых кочевников',
              ],
            },
            {
              h3: 'Пловдив',
              p: [
                'Пловдив - второй город Болгарии и важный промышленный и логистический хаб. Стоимость сделок выросла на 21% в годовом выражении в Q2 2025. В Q3 2025 Пловдив был единственным крупным городом, показавшим маргинальное квартальное снижение (-0,1%), которое аналитики объясняют временным высвобождением предложения от новых завершений, а не сдвигом спроса.',
              ],
              bullets: [
                'Ценовой диапазон: 1 100-1 400 EUR/м² качественные новостройки',
                'Доходность долгосрочной аренды: 4,5-6%, поддерживаемая университетами и бизнес-парками',
                'Рост стоимости сделок Q2 2025: +21% (NSI)',
              ],
            },
            {
              h3: 'Бургас и Черноморское побережье',
              p: [
                'Бургас зафиксировал наивысший единичный квартальный рост в Q2 2025 - +6,2% (NSI). Всё Черноморское побережье - включая Солнечный Берег, Несебр, Созопол и Святой Влас - остаётся основным рынком для инвесторов в краткосрочную аренду.',
                'Аналитики apartestate.com прогнозируют рост цен в прибрежных курортах до 15% в 2026 году в премиальных сегментах. Административные задержки в разрешении нового строительства означают, что в 2027-2028 годах на рынок выйдет меньше всего новых квартир за десятилетие.',
              ],
              bullets: [
                'Ценовой диапазон: 800-1 600 EUR/м² (широкий разброс по качеству и близости к морю)',
                'Пиковая сезонная валовая доходность: 8-12% в топовых комплексах',
                'Квартальный рост Бургаса Q2 2025: +6,2% - наивысший в Болгарии (NSI)',
                'Сужение нового предложения в 2027-2028 - структурная поддержка цен',
              ],
            },
            {
              h3: 'Стара-Загора - неожиданный лидер',
              p: [
                'Часто упускаемая международными инвесторами, Стара-Загора зафиксировала наивысший квартальный рост в Q3 2025 - +7,2% (NSI) - превзойдя Софию и Варну. Пятый по размеру город Болгарии является важным промышленным и энергетическим хабом с низкой ценовой базой и сильной местной занятостью.',
              ],
              bullets: [
                'Квартальный рост Q3 2025: +7,2% - наивысший в Болгарии (NSI)',
                'Промышленная и энергетическая занятостная база',
                'Очень низкая цена входа - высокий потенциал доходности',
              ],
            },
          ],
        },
        {
          h2: '3. 7 структурных драйверов за цифрами',
          blocks: [
            {
              h3: '1 - Принятие евро и устранение валютного риска',
              p: ['Вступление Болгарии в еврозону 1 января 2026 года - наиболее значимое структурное изменение для инвестиционного кейса. Для покупателей из Германии, Австрии, Франции, Италии и других стран еврозоны валютный риск, ранее осложнявший инвестиции в болгарскую недвижимость, был полностью устранён. Deloitte Property Index 2025 назвал "оптимизм вокруг вступления в еврозону" ключевым драйвером недавнего спроса.'],
            },
            {
              h3: '2 - Ипотечные ставки: одни из самых низких в ЕС',
              p: ['По состоянию на май 2025 года средние ставки по ипотечным кредитам в Болгарии варьировались от 2,60% до 4,20% (Болгарский национальный банк). Investropa подтверждает, что они остаются одними из самых низких в ЕС. Ожидается постепенное сближение с уровнями, определяемыми политикой ЕЦБ (~3,0-3,5%).'],
            },
            {
              h3: '3 - Конвергенция заработных плат: 6-8% реального роста в год',
              p: ['Investropa определяет реальный годовой рост заработных плат 6-8% как центральное допущение во всех крупных 5-летних прогностических моделях для Болгарии. МВФ подтверждает рост ВВП около 3% в 2025 и 2026 годах. ВВП на душу населения достиг около 17 400 USD в 2024 году и, по ожиданиям, превысит 20 000 USD в 2025 году.'],
            },
            {
              h3: '4 - Сужение предложения',
              p: ['Административные процессы задерживают одобрение новых строительных проектов. Аналитики прогнозируют, что в 2027-2028 годах на рынок выйдет наименьшее количество новых квартир за десятилетие. Структурный дисбаланс между растущим спросом и ограниченным предложением - наиболее чёткая количественная поддержка для устойчивого роста цен.'],
            },
            {
              h3: '5 - Прецедент Хорватии',
              p: ['Хорватия вступила в еврозону в январе 2023 года. В последующие два года цены в Дубровнике и Сплите значительно выросли. Болгарский рынок крупнее, ценовая база ниже, а экономика более диверсифицирована, чем хорватская была на момент вступления.'],
            },
            {
              h3: '6 - Цифровые кочевники и удалённая работа',
              p: ['София, Пловдив и прибрежные города всё активнее привлекают молодых специалистов и цифровых кочевников из Западной Европы. Это обеспечивает круглогодичный спрос на аренду, который ранее во многом зависел от пикового туристического сезона.'],
            },
            {
              h3: '7 - Шенгенское членство и доверие инвесторов',
              p: ['Полное вступление в Шенгенскую зону в сочетании с членством в еврозоне существенно улучшило позиции Болгарии как инвестиционного направления, при этом отмечается растущий интерес немецких и израильских покупателей. Граждане ЕС теперь могут напрямую приобретать все виды недвижимости, включая землю.'],
            },
          ],
        },
        {
          h2: '4. Сценарии прогноза цен: 2026, 5 лет, 10 лет',
          p: [
            'Таблица ниже синтезирует опубликованные прогнозы Investropa, esalesinternational.com, apartestate.com и Global Property Guide по состоянию на февраль 2026 года. Это сценарные диапазоны, а не гарантированные результаты. Разные города и сегменты будут двигаться с разной скоростью.',
          ],
          table: {
            head: ['Горизонт', 'Консервативный', 'Базовый', 'Оптимистичный'],
            rows: [
              [
                '2026 (полный год)',
                '3-5% - нормализация после пика 2025 года; коррекция в перегретых сегментах',
                '6-10% - движимый фундаменталами, поддерживаемый заработными платами, евро-уверенностью и дефицитом предложения',
                '10-15% - ускорение иностранных притоков + продолжение внутреннего спроса',
              ],
              [
                '5 лет (накопительный)',
                '~30% - замедленное восстановление еврозоны, ужесточение кредитования',
                '~45% - базовый кейс Investropa: 7,7% среднегодовых, конвергенция доходов сохраняется',
                '~60% - ускоренная конвергенция доходов + устойчивый приток иностранного капитала',
              ],
              [
                '10 лет',
                'Постепенное выравнивание с региональными аналогами (Румыния/Хорватия)',
                'Устойчивое опережение среднего по ЕС, многоцикловая динамика',
                'Приближение к центральноевропейским бенчмаркам (Варшава/Прага/Братислава)',
              ],
            ],
          },
          bullets: [
            'Базовый кейс Investropa: 7,7% среднегодового прироста в следующие 5 лет.',
            '5-летний накопительный диапазон: 30% (консервативный) до 60% (оптимистичный) - Investropa, февраль 2026.',
            'С 2015 по Q3 2025: Болгарские цены на жильё выросли на 156% в реальном выражении - 5-й по величине показатель в ЕС (Eurostat).',
            'С 2000 года: болгарские цены на жильё выросли примерно на 300% в номинальном выражении (Global Property Guide).',
          ],
        },
        {
          h2: '5. Ключевые риски: что может замедлить или развернуть траекторию',
          bullets: [
            'Локализованный избыток предложения: наиболее вероятный риск по Investropa. Несколько крупных проектов в ряде районов Софии завершаются одновременно - временная стагнация цен в конкретных коридорах возможна даже при росте более широкого рынка.',
            'Ужесточение кредитования в еврозоне: при резком ужесточении политики ЕЦБ болгарские ипотечные ставки (2,6-4,2%) могут вырасти и сократить доступность жилья.',
            'Демографическое давление: Болгария продолжает сталкиваться с долгосрочным сокращением населения из-за эмиграции. В небольших городах и сельских районах это реальный структурный встречный ветер.',
            'Регуляторные и налоговые изменения: Хорватия ввела меры по налогообложению недвижимости после евро для контроля спекуляций. Болгария может последовать аналогичным механизмам, особенно направленным против рынка краткосрочной аренды на побережье.',
            'Качество строительства и управления: особенно в курортных комплексах, высокие ежегодные взносы на обслуживание и плохое управление могут существенно сократить чистую доходность.',
            'Риск переоценки в отдельных сегментах: комбинация покупок из страха (хедж перед евро) и реального инвестиционного спроса подтолкнула часть сегментов к уровням с тонким запасом прочности для новых покупателей.',
          ],
        },
        {
          h2: '6. Практическая рамка для покупателя',
          bullets: [
            'Сравнивайте реальные аналоги: EUR/м², возраст здания, энергокласс, этаж, парковка, вид на море/город, качество управления комплексом.',
            'Моделируйте полные расходы на владение: ежегодные взносы на обслуживание, налог на недвижимость, страхование, ремонты, периоды простоя.',
            'Проверяйте все документы: правоустанавливающие документы, отсутствие обременений, разрешения на строительство, Акт 16.',
            'Оценивайте ликвидность: как быстро вы реально могли бы продать этот актив?',
            'Если покупаете под аренду - заранее определите модель управления: самостоятельно или через управляющую компанию (как правило, 20-30% от дохода).',
            'Стресс-тест доходности: моделируйте при 50% и 70% загрузке для понимания диапазона результатов.',
          ],
        },
        {
          h2: '7. Наша оценка',
          p: [
            'Данные по состоянию на февраль 2026 года поддерживают чёткую картину: Болгария находится в настоящем структурном цикле роста, а не в спекулятивном пузыре. Основания - конвергенция заработных плат, евро-стабильность, дефицит предложения, улучшение инфраструктуры и растущая осведомлённость иностранных инвесторов - реальны и измеримы.',
            'Рынок вознаграждает точность. Качественно расположенная, хорошо документально подтверждённая, энергоэффективная новостройка в городе с сильной занятостью и арендным спросом - например, в южном кольце роста Софии, lifestyle-районах Варны, деловых коридорах Пловдива - это фундаментально иная инвестиция, нежели панельная квартира 2008 года в курортном комплексе с высоким ежемесячным взносом на обслуживание и отсутствующей управляющей компанией.',
            'В European Gateway мы ищем, проверяем и проводим сделки. Если вам нужен подбор недвижимости, юридическая проверка, регистрация компании, заверенные переводы или легализация документов в Болгарии - именно это мы и делаем, "под ключ".',
          ],
        },
      ],
      keyFacts: [
        'Официальные данные NSI: Цены на жильё в Болгарии +15,4% в год в Q3 2025 - третье место в ЕС (Eurostat).',
        'Варна лидирует среди всех городов: +19% в год в Q2 2025, +21,1% для новостроек (NSI).',
        'Квартальный рост Софии Q3 2025: +5,3% - второй по величине квартальный прирост (NSI).',
        'Рекорд Бургаса за квартал: +6,2% за один квартал Q2 2025 - наивысший в Болгарии (NSI).',
        'Ипотечные ставки: 2,60-4,20% - одни из самых низких в ЕС (БНБ, май 2025).',
        'Базовый кейс Investropa: 45% накопительного роста за 5 лет (7,7% среднегодовых).',
        'С 2015 года: болгарские цены +156% в реальном выражении - 5-й по величине в ЕС (Eurostat Q3 2025).',
        'Сужение предложения: наименьшее число новых квартир за десятилетие ожидается в 2027-2028 гг.',
      ],
    },
  };

  const t = translations[lang];

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
              alt="Bulgaria real estate market analysis 2026"
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
        <div className="border rounded-xl p-6 mb-8 bg-background">
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            {t.noteTitle}
          </h3>
          <p className="text-sm text-muted-foreground">{t.noteText}</p>
        </div>

        {/* Sources */}
        <div className="border rounded-xl p-6 mb-10 bg-background">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-primary" />
            {t.sourcesTitle}
          </h3>
          <ul className="space-y-2">
            {sources.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <ExternalLink className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
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

              {s.table ? (
                <div className="rounded-xl border overflow-hidden">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-accent/10">
                        <tr>
                          {s.table.head.map((h: string, hi: number) => (
                            <th key={hi} className="text-left p-3 font-semibold border-b">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row: string[], ri: number) => (
                          <tr key={ri} className="border-t">
                            {row.map((cell: string, ci: number) => (
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
            </section>
          ))}
        </article>

        {/* Agency CTA footer */}
        <div className="mt-16 rounded-xl border bg-primary/5 p-6 flex items-start gap-4">
          <Euro className="w-6 h-6 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold mb-1">European Gateway</p>
            <p className="text-xs text-muted-foreground">
              {lang === 'ru'
                ? 'Профессиональное агентство недвижимости и юридическое сопровождение в Болгарии. Подбор объектов, due diligence, оформление сделок, регистрация компаний, переводы и легализация.'
                : lang === 'bg'
                ? 'Професионална агенция за недвижими имоти и правна поддръжка в България. Подбор, due diligence, сделки, регистрация на фирми, преводи и легализация.'
                : lang === 'it'
                ? 'Agenzia immobiliare professionale e supporto legale in Bulgaria. Ricerca, due diligence, transazioni, costituzione societaria, traduzioni e legalizzazione.'
                : lang === 'de'
                ? 'Professionelle Immobilienagentur und Rechtsbetreuung in Bulgarien. Objektsuche, Due Diligence, Transaktionen, Firmengründung, Übersetzungen und Legalisierung.'
                : 'Professional real estate advisory and legal support in Bulgaria. Property search, due diligence, transactions, company registration, translations and legalization.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BulgariaPriceForecastsArticle;