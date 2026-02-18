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
} from 'lucide-react';

/**
 * Article: Why Bulgaria Is Still 2x Cheaper Than the EU Average
 * Languages: EN / IT / DE / BG / RU (based on i18n.language)
 * Agency: European Gateway
 * Notes:
 * - No "—" dashes, only "-"
 * - Key Facts shown first
 * - Full article body follows
 */
const BulgariaCheaperThanEUArticle = () => {
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
      'https://ipfs.io/ipfs/bafybeibgzot364jw3ajiqptptaqqmx3gdfe7ockdfsznn3po5amrdvvb3a',
    unsplash_author_name: 'Jakub Żerdzicki',
    unsplash_author_url:
      'https://unsplash.com/@jakubzerdzicki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    unsplash_photo_url:
      'https://ipfs.io/ipfs/bafybeibgzot364jw3ajiqptptaqqmx3gdfe7ockdfsznn3po5amrdvvb3a',
  };

  const translations: Record<string, any> = {
    en: {
      back: 'Back to Home',
      date: 'February 18, 2026',
      readTime: 'Reading time: ~8-10 minutes',
      title: 'Why Bulgaria Is Still 2x Cheaper Than the EU Average - And Why That Window Won\'t Stay Open Forever',
      subtitle:
        'A professional market analysis by European Gateway: the structural reasons behind Bulgaria\'s price gap, what euro adoption changes, and why 2026 may be the last year to enter at today\'s valuations.',
      keyFactsTitle: 'Key Facts',
      noteTitle: 'Disclaimer',
      noteText:
        'This is a market analysis and forward-looking scenario overview, not investment advice. Always conduct legal due diligence and model the full economics before purchasing any property.',
      photoCreditLabel: 'Article photo:',
      photoCreditOn: 'on',
      sections: [
        {
          h2: 'The Numbers That Tell the Story',
          p: [
            'The gap between Bulgarian and European property prices is not marginal. It is structural. Sofia, the country\'s economic capital and most expensive city, sits at an average of roughly 2,000-2,250 EUR per square metre for residential property. Plovdiv and Burgas hover in the 1,100-1,400 EUR range. Varna, the jewel of the Black Sea coast, averages between 1,200 and 1,600 EUR per square metre. Resort destinations like Sunny Beach can still be entered at 800-1,200 EUR per square metre.',
            'Compare that to the EU average - which for comparable properties in capital cities regularly runs between 3,500 and 6,000+ EUR per square metre - and the arithmetic is unambiguous. Bulgaria is not 20% cheaper than the EU average. It is, in most segments, 50 to 60% cheaper. In some coastal and rural areas, the discount runs even deeper.',
            'This is what "2x cheaper" means in practice. A 200,000 EUR budget that buys a modest one-bedroom in Lisbon or Warsaw buys a spacious, modern two-bedroom apartment in Sofia\'s most desirable neighbourhoods - or a beachfront property on the Black Sea coast. That kind of price differential does not exist anywhere else within the EU\'s borders.',
          ],
        },
        {
          h2: 'Why Has the Gap Persisted So Long?',
          p: [
            'The persistence of Bulgaria\'s discount to the rest of Europe is rooted in a convergence story that is still, structurally, only half told. Bulgaria joined the EU in 2007, but GDP per capita has lagged far behind Western peers for nearly two decades. That is changing fast - the IMF projects Bulgarian GDP per capita to breach the 20,000 USD mark in 2025, up from a figure that was less than a quarter of that just twenty years ago - but wage levels and purchasing power still sit below those of Central European peers like Poland, the Czech Republic, or Romania\'s capital, Bucharest.',
            'Real estate prices, over time, track incomes. When a country\'s wages rise relative to the EU average, its property prices follow. Bulgaria\'s wages have been rising aggressively - analysts track 6-8% annual real-term wage growth as the central assumption underpinning medium-term property forecasts - and that upward pressure on purchasing power is feeding directly into housing demand in the major urban centres.',
            'The second structural driver has been investment underrepresentation. For years, foreign capital has been relatively absent from the Bulgarian market compared to its Eastern European peers. That is changing. Euro adoption removes currency risk entirely for investors from the eurozone, making the comparison between a Lisbon apartment and a Sofia apartment a straightforward euro-for-euro calculation for the first time. The transparency that comes with eurozone membership - predictable monetary policy, ECB oversight, standardised reporting - is a powerful attractor for institutional and private capital alike.',
          ],
        },
        {
          h2: 'What 2026 Is Already Showing',
          p: [
            'On January 1, 2026, Bulgaria officially joined the eurozone, replacing the lev with the euro at the long-fixed rate of 1 EUR = 1.95583 BGN. For property investors who have been watching this market, that date is not just a headline - it is a dividing line. Everything before it was the pre-convergence era. Everything after marks the beginning of something new.',
            'Bulgaria recorded the second-highest annual house price growth in the entire EU during the first quarter of 2025, at 15.1% year-on-year - trailing only Portugal, and nearly three times the EU average of 5.7%. By mid-2025, full-year growth across the country was tracking at 13-18% depending on segment, with new-build developments in prime Sofia locations and coastal resort cities at the upper end of that range.',
            'The pre-euro surge has not reversed since January 2026. What has changed is the character of demand. Market analysts describe the shift as a transition from fear-driven buying - local savers converting cash into bricks before the currency switch - to fundamentals-driven buying: genuine owner-occupiers, long-term investors, and a growing cohort of international buyers for whom the currency risk barrier has now been removed.',
          ],
        },
        {
          h2: 'The Convergence Clock Is Running',
          p: [
            'Here is the critical point every investor must internalise: the affordability gap exists precisely because convergence has not yet completed. The 2x discount is not a permanent feature of Bulgaria\'s economic landscape - it is a snapshot of a country mid-transition.',
            'The forces that will close this gap are already in motion. Euro adoption means Bulgarian mortgage rates will increasingly align with ECB monetary policy, reducing borrowing costs and unlocking demand from a new generation of domestic buyers. Wage growth is accelerating, and as it does, the local purchasing pool for property deepens. Foreign investment is entering at a pace the market has not previously seen. Meanwhile, the supply of quality new-build properties in the major cities - while active - cannot expand infinitely, and demand pressure in the most desirable urban and coastal locations is real and sustained.',
            'The experience of comparable convergence markets is instructive. In the years following Estonia, Latvia, and Lithuania\'s eurozone accessions, property prices in their capitals rose sharply as the credibility premium and foreign capital inflow materialised. Croatia, which joined the euro in January 2023, saw Dubrovnik and Split prices surge considerably in the subsequent two years. Bulgaria\'s market is larger, its economy more diversified, and its price base lower still - which means both the opportunity and the room to run are, arguably, even more significant.',
          ],
        },
        {
          h2: 'Where the Best Opportunities Sit Today',
          p: [
            'Not all of Bulgaria\'s property market is identical, and professional investors should approach it with geographic and segment precision.',
          ],
          blocks: [
            {
              h3: 'Sofia - The Core Market',
              p: [
                'Sofia remains the core market - the deepest liquidity, the broadest demand, and the strongest employment base. The city is no longer simply catching up to Central European benchmarks; it is increasingly benchmarked against Warsaw and Bucharest. Quality new-build developments in established districts such as Lozenets, Manastirski Livadi, and Mladost continue to attract both owner-occupiers and buy-to-let investors.',
              ],
              bullets: [
                'Average price: 2,000-2,250 EUR/m² (new build, prime districts)',
                'Gross rental yield: 4-6% in established residential zones',
                'Price growth forecast 2026: 5-10% annually',
              ],
            },
            {
              h3: 'Varna - The Standout Growth Story',
              p: [
                'Varna is emerging as the market\'s standout growth story. Coastal city fundamentals - tourism, foreign buyer demand, a growing tech and services sector, and strong summer rental economics - combine with a price base that still undercuts Sofia in many segments. Annual growth rates in Varna exceeded 18-20% through much of 2025.',
              ],
              bullets: [
                'Average price: 1,200-1,600 EUR/m² (wide range by zone and quality)',
                'Strong short-term rental yield potential: 6-9% gross in season',
                'Growing year-round demand from remote workers and digital nomads',
              ],
            },
            {
              h3: 'Plovdiv - Stable Yield, Affordable Entry',
              p: [
                'Plovdiv offers a compelling combination of cultural vibrancy, a growing young professional population, and property prices that remain among the most accessible of any major EU city. For investors focused on long-term rental income over speculative appreciation, Plovdiv\'s student population and expanding service economy provide stable demand.',
              ],
              bullets: [
                'Average price: 1,100-1,400 EUR/m² for quality new build',
                'Strong long-term rental demand driven by universities and business parks',
                'Lower entry cost with solid fundamentals',
              ],
            },
            {
              h3: 'Black Sea Coast - Lifestyle and Rental Yield',
              p: [
                'The Black Sea coast - from Varna south through Burgas, Sozopol, and Nessebar - retains its appeal for short-term rental investors and lifestyle buyers. Well-chosen coastal properties in quality developments continue to deliver strong seasonal rental yields and steady appreciation.',
              ],
              bullets: [
                'Entry prices: 800-1,600 EUR/m² depending on location and quality',
                'Peak-season occupancy can support gross yields of 8-12% in top locations',
                'Eurozone status now makes this directly comparable to Croatian coast pricing',
              ],
            },
          ],
        },
        {
          h2: 'A Professional Assessment',
          p: [
            'At European Gateway, we have been operating in this market long enough to have watched multiple cycles unfold. Our considered view, supported by the data available as of 2026, is that Bulgaria represents one of the last credible value plays within the eurozone - a market where an investor can still enter at prices that the rest of Europe\'s comparable cities passed through a decade ago, with the structural tailwinds of wage convergence, euro integration, and rising foreign capital inflow firmly in place.',
            'Quality matters enormously. Location within cities matters. The distinction between energy-efficient new-build stock and the ageing panel apartment inventory is increasingly commercially significant, as Bulgarian buyers - like buyers elsewhere in the EU - are demonstrating a growing willingness to pay a premium for quality.',
            'What it does mean is that the combination of affordable entry prices, an EU legal and regulatory framework, eurozone membership, improving infrastructure, and strong near-term price momentum makes Bulgaria a market that rewards early, well-researched action over a wait-and-see approach. The window is open. The clock is running.',
          ],
        },
      ],
      keyFacts: [
        'Sofia averages 2,000-2,250 EUR/m² vs. 3,500-6,000+ EUR/m² for EU capital city averages - a 50-60% discount.',
        'Bulgaria recorded 15.1% annual house price growth in Q1 2025 - second highest in the entire EU.',
        'Bulgaria joined the eurozone on January 1, 2026 - removing currency risk for euro-based investors entirely.',
        'Wages growing 6-8% annually in real terms - the structural engine behind demand convergence.',
        'Analysts project 45-60% cumulative price growth over the next five years in the base and optimistic scenarios.',
      ],
    },

    it: {
      back: 'Torna alla home',
      date: '18 febbraio 2026',
      readTime: 'Tempo di lettura: ~8-10 minuti',
      title: 'Perché la Bulgaria è ancora 2 volte più economica rispetto alla media UE - e perché questa finestra non resterà aperta per sempre',
      subtitle:
        'Un\'analisi di mercato professionale di European Gateway: le ragioni strutturali del divario di prezzo bulgaro, cosa cambia con l\'adozione dell\'euro e perché il 2026 potrebbe essere l\'ultimo anno per entrare alle valutazioni attuali.',
      keyFactsTitle: 'Dati chiave',
      noteTitle: 'Avvertenza',
      noteText:
        'Questa è un\'analisi di mercato e una panoramica di scenari prospettici, non un consiglio di investimento. Effettuare sempre una due diligence legale e modellare l\'economia completa prima di acquistare qualsiasi immobile.',
      photoCreditLabel: 'Foto articolo:',
      photoCreditOn: 'su',
      sections: [
        {
          h2: 'I numeri che raccontano la storia',
          p: [
            'Il divario tra i prezzi immobiliari bulgari ed europei non è marginale. È strutturale. Sofia, la capitale economica e la città più cara del Paese, si attesta a una media di circa 2.000-2.250 EUR al metro quadro per gli immobili residenziali. Plovdiv e Burgas si aggirano nella fascia 1.100-1.400 EUR. Varna, il gioiello della costa del Mar Nero, ha una media tra 1.200 e 1.600 EUR al metro quadro. Le destinazioni turistiche come Sunny Beach sono ancora accessibili a 800-1.200 EUR al metro quadro.',
            'Confrontando questi prezzi con la media UE - che per proprietà comparabili nelle capitali si aggira regolarmente tra 3.500 e 6.000+ EUR al metro quadro - l\'aritmetica è inequivocabile. La Bulgaria non è il 20% più economica della media UE. È, nella maggior parte dei segmenti, dal 50 al 60% più economica.',
            'Con un budget di 200.000 EUR che a Lisbona o Varsavia compra un modesto monolocale, in Bulgaria si acquista un ampio bilocale moderno nei quartieri più desiderabili di Sofia - o una proprietà fronte mare sulla costa del Mar Nero.',
          ],
        },
        {
          h2: 'Perché il divario è persistito così a lungo?',
          p: [
            'La persistenza dello sconto bulgaro rispetto al resto d\'Europa è radicata in una storia di convergenza che, strutturalmente, è ancora a metà strada. La Bulgaria è entrata nell\'UE nel 2007, ma il PIL pro capite è rimasto molto indietro rispetto ai paesi occidentali per quasi due decenni.',
            'I prezzi degli immobili, nel tempo, seguono i redditi. I salari bulgari sono cresciuti in modo aggressivo - gli analisti stimano una crescita salariale annua reale del 6-8% - e questa pressione al rialzo sul potere d\'acquisto si riflette direttamente nella domanda abitativa nei principali centri urbani.',
            'Il secondo fattore strutturale è stata la sottorappresentazione degli investimenti esteri. L\'adozione dell\'euro elimina completamente il rischio valutario per gli investitori dell\'eurozona, rendendo per la prima volta un confronto diretto in euro tra un appartamento a Lisbona e uno a Sofia.',
          ],
        },
        {
          h2: 'Cosa sta già mostrando il 2026',
          p: [
            'Il 1° gennaio 2026, la Bulgaria ha ufficialmente aderito all\'eurozona, sostituendo il lev con l\'euro al tasso fisso di 1 EUR = 1,95583 BGN. Per gli investitori immobiliari che seguono questo mercato, quella data non è solo un titolo - è una linea di demarcazione.',
            'La Bulgaria ha registrato la seconda crescita annua dei prezzi delle case più alta dell\'intera UE nel primo trimestre del 2025, al 15,1% su base annua - superata solo dal Portogallo e quasi tre volte la media UE del 5,7%.',
            'Gli analisti descrivono il cambiamento come una transizione dall\'acquisto guidato dalla paura - i risparmiatori locali che convertivano il contante in mattone prima del passaggio valutario - all\'acquisto guidato dai fondamentali: veri acquirenti per uso proprio, investitori a lungo termine e una crescente quota di acquirenti internazionali.',
          ],
        },
        {
          h2: 'L\'orologio della convergenza sta girando',
          p: [
            'Il punto critico che ogni investitore deve interiorizzare: il divario di accessibilità esiste proprio perché la convergenza non è ancora completata. Lo sconto del 2x non è una caratteristica permanente del panorama economico bulgaro - è una fotografia di un paese a metà transizione.',
            'Le forze che chiuderanno questo divario sono già in moto. L\'adozione dell\'euro significa che i tassi dei mutui bulgari si allineeranno sempre più alla politica monetaria della BCE. La crescita salariale sta accelerando. Gli investimenti esteri entrano a un ritmo che il mercato non aveva mai visto prima.',
            'L\'esperienza di mercati di convergenza comparabili è istruttiva. La Croazia, che ha aderito all\'euro nel gennaio 2023, ha visto i prezzi di Dubrovnik e Spalato aumentare considerevolmente nei due anni successivi. Il mercato bulgaro è più grande, la sua economia più diversificata e la sua base di prezzi ancora più bassa.',
          ],
        },
        {
          h2: 'Dove si trovano le migliori opportunità oggi',
          p: [
            'Non tutto il mercato immobiliare bulgaro è uguale, e gli investitori professionali dovrebbero approcciarlo con precisione geografica e di segmento.',
          ],
          blocks: [
            {
              h3: 'Sofia - Il mercato principale',
              p: [
                'Sofia rimane il mercato principale - la liquidità più profonda, la domanda più ampia e la base occupazionale più forte. La città non sta più semplicemente recuperando i benchmark dell\'Europa centrale; viene sempre più confrontata con Varsavia e Bucarest.',
              ],
              bullets: [
                'Prezzo medio: 2.000-2.250 EUR/m² (nuova costruzione, quartieri prime)',
                'Rendimento lordo da locazione: 4-6% nelle zone residenziali consolidate',
                'Previsione crescita prezzi 2026: 5-10% annuo',
              ],
            },
            {
              h3: 'Varna - La storia di crescita emergente',
              p: [
                'Varna emerge come la storia di crescita più significativa del mercato. I fondamentali della città costiera - turismo, domanda da acquirenti stranieri, settore tech in crescita e forti rendimenti da locazione estiva - si combinano con una base di prezzi che in molti segmenti è ancora inferiore a Sofia.',
              ],
              bullets: [
                'Prezzo medio: 1.200-1.600 EUR/m² (ampio range per zona e qualità)',
                'Forte potenziale di rendimento da locazione breve: 6-9% lordo in stagione',
                'Domanda crescente tutto l\'anno da lavoratori da remoto e nomadi digitali',
              ],
            },
            {
              h3: 'Plovdiv - Rendimento stabile, ingresso accessibile',
              p: [
                'Plovdiv offre una combinazione interessante di vivacità culturale, una crescente popolazione giovane professionale e prezzi immobiliari tra i più accessibili di qualsiasi grande città UE.',
              ],
              bullets: [
                'Prezzo medio: 1.100-1.400 EUR/m² per nuova costruzione di qualità',
                'Forte domanda di locazione a lungo termine da università e parchi commerciali',
                'Costo d\'ingresso inferiore con fondamentali solidi',
              ],
            },
            {
              h3: 'Costa del Mar Nero - Stile di vita e rendimento da locazione',
              p: [
                'La costa del Mar Nero - da Varna verso sud fino a Burgas, Sozopol e Nessebar - mantiene il suo fascino per gli investitori in locazioni a breve termine e gli acquirenti di lifestyle.',
              ],
              bullets: [
                'Prezzi d\'ingresso: 800-1.600 EUR/m² in base a posizione e qualità',
                'L\'occupazione di picco stagionale può supportare rendimenti lordi dell\'8-12% nelle migliori location',
                'Lo status Eurozona rende ora questa area direttamente comparabile alla costa croata',
              ],
            },
          ],
        },
        {
          h2: 'Una valutazione professionale',
          p: [
            'In European Gateway, operiamo in questo mercato da abbastanza tempo da aver osservato più cicli. La nostra valutazione ponderata, supportata dai dati disponibili a partire dal 2026, è che la Bulgaria rappresenta uno degli ultimi giochi di valore credibili all\'interno dell\'eurozona.',
            'La qualità conta enormemente. La posizione all\'interno delle città conta. La combinazione di prezzi d\'ingresso accessibili, quadro giuridico e normativo UE, appartenenza all\'eurozona e forte slancio dei prezzi a breve termine rende la Bulgaria un mercato che premia un\'azione precoce e ben studiata rispetto a un approccio attendista. La finestra è aperta. L\'orologio sta girando.',
          ],
        },
      ],
      keyFacts: [
        'Sofia media 2.000-2.250 EUR/m² vs. 3.500-6.000+ EUR/m² per le medie delle capitali UE - uno sconto del 50-60%.',
        'La Bulgaria ha registrato una crescita annua dei prezzi delle case del 15,1% nel Q1 2025 - la seconda più alta in tutta l\'UE.',
        'La Bulgaria ha aderito all\'eurozona il 1° gennaio 2026 - eliminando completamente il rischio valutario per gli investitori in euro.',
        'Salari in crescita del 6-8% annuo in termini reali - il motore strutturale della convergenza della domanda.',
        'Gli analisti prevedono una crescita cumulativa dei prezzi del 45-60% nei prossimi cinque anni.',
      ],
    },

    de: {
      back: 'Zur Startseite',
      date: '18. Februar 2026',
      readTime: 'Lesezeit: ~8-10 Minuten',
      title: 'Warum Bulgarien noch immer 2x günstiger ist als der EU-Durchschnitt - und warum dieses Fenster nicht für immer offen bleiben wird',
      subtitle:
        'Eine professionelle Marktanalyse von European Gateway: die strukturellen Gründe für Bulgariens Preislücke, was die Euro-Einführung ändert und warum 2026 das letzte Jahr sein könnte, um zu heutigen Bewertungen einzusteigen.',
      keyFactsTitle: 'Wichtige Fakten',
      noteTitle: 'Haftungsausschluss',
      noteText:
        'Dies ist eine Marktanalyse und eine zukunftsorientierte Szenarioübersicht, keine Anlageberatung. Führen Sie stets eine rechtliche Due Diligence durch und modellieren Sie die vollständige Wirtschaftlichkeit, bevor Sie eine Immobilie erwerben.',
      photoCreditLabel: 'Artikelfoto:',
      photoCreditOn: 'auf',
      sections: [
        {
          h2: 'Die Zahlen, die die Geschichte erzählen',
          p: [
            'Die Lücke zwischen bulgarischen und europäischen Immobilienpreisen ist nicht marginal. Sie ist strukturell. Sofia, die Wirtschaftshauptstadt und teuerste Stadt des Landes, liegt bei einem Durchschnitt von etwa 2.000-2.250 EUR pro Quadratmeter für Wohnimmobilien. Plovdiv und Burgas bewegen sich im Bereich 1.100-1.400 EUR. Varna, das Juwel der Schwarzmeerküste, liegt im Durchschnitt zwischen 1.200 und 1.600 EUR pro Quadratmeter. Touristenziele wie Sunny Beach sind noch ab 800-1.200 EUR pro Quadratmeter erhältlich.',
            'Vergleicht man dies mit dem EU-Durchschnitt - der für vergleichbare Immobilien in Hauptstädten regelmäßig zwischen 3.500 und 6.000+ EUR pro Quadratmeter liegt - ist die Rechnung eindeutig. Bulgarien ist nicht 20% günstiger als der EU-Durchschnitt. In den meisten Segmenten ist es 50 bis 60% günstiger.',
            'Ein Budget von 200.000 EUR, das in Lissabon oder Warschau eine bescheidene Einzimmerwohnung kauft, kauft in Bulgariens begehrtesten Vierteln eine geräumige, moderne Zweizimmerwohnung - oder eine Strandimmobilie an der Schwarzmeerküste.',
          ],
        },
        {
          h2: 'Warum ist die Lücke so lange bestehen geblieben?',
          p: [
            'Die anhaltende Bewertungslücke zu Europa wurzelt in einer Konvergenzgeschichte, die strukturell erst zur Hälfte erzählt ist. Bulgarien ist 2007 der EU beigetreten, aber das BIP pro Kopf lag fast zwei Jahrzehnte lang weit hinter westlichen Vergleichsländern zurück.',
            'Immobilienpreise folgen langfristig den Einkommen. Bulgariens Löhne steigen aggressiv - Analysten gehen von einem realen jährlichen Lohnwachstum von 6-8% aus - und dieser Aufwärtsdruck auf die Kaufkraft fließt direkt in die Wohnungsnachfrage in den großen städtischen Zentren.',
            'Der zweite strukturelle Treiber war die Unterrepräsentation von Investitionen. Die Euro-Einführung eliminiert das Währungsrisiko für Investoren aus dem Euroraum vollständig und macht den Vergleich zwischen einer Lissaboner und einer Sofioter Wohnung erstmals zu einer direkten Euro-für-Euro-Kalkulation.',
          ],
        },
        {
          h2: 'Was 2026 bereits zeigt',
          p: [
            'Am 1. Januar 2026 ist Bulgarien offiziell dem Euroraum beigetreten und hat den Lew durch den Euro zum langfristig festen Kurs von 1 EUR = 1,95583 BGN ersetzt. Für Immobilieninvestoren, die diesen Markt beobachtet haben, ist dieses Datum nicht nur eine Schlagzeile - es ist eine Trennlinie.',
            'Bulgarien verzeichnete im ersten Quartal 2025 das zweithöchste jährliche Hauspreisswachstum in der gesamten EU mit 15,1% im Jahresvergleich - nur hinter Portugal und fast dreimal so hoch wie der EU-Durchschnitt von 5,7%.',
            'Analysten beschreiben den Wandel als Übergang vom angstgetriebenen Kauf - lokale Sparer, die Bargeld vor dem Währungswechsel in Immobilien umwandelten - zum fundamentalgetriebenen Kauf: echte Eigennutzer, langfristige Investoren und eine wachsende Gruppe internationaler Käufer.',
          ],
        },
        {
          h2: 'Die Konvergenzuhr läuft',
          p: [
            'Der entscheidende Punkt, den jeder Investor verinnerlichen muss: Die Erschwinglichkeitslücke existiert genau deshalb, weil die Konvergenz noch nicht abgeschlossen ist. Der 2x-Rabatt ist kein dauerhaftes Merkmal der bulgarischen Wirtschaftslandschaft - er ist eine Momentaufnahme eines Landes mitten im Übergang.',
            'Die Kräfte, die diese Lücke schließen werden, sind bereits in Gang gesetzt. Die Euro-Einführung bedeutet, dass sich bulgarische Hypothekenzinsen zunehmend an der EZB-Geldpolitik orientieren werden. Das Lohnwachstum beschleunigt sich. Ausländische Investitionen fließen in einem Tempo ein, das der Markt bisher nicht erlebt hat.',
            'Das Beispiel vergleichbarer Konvergenzmärkte ist aufschlussreich. Kroatien, das im Januar 2023 den Euro eingeführt hat, erlebte in den zwei folgenden Jahren erhebliche Preissteigerungen in Dubrovnik und Split. Bulgariens Markt ist größer, seine Wirtschaft diversifizierter und seine Preisbasis noch niedriger.',
          ],
        },
        {
          h2: 'Wo liegen heute die besten Chancen?',
          p: [
            'Nicht der gesamte bulgarische Immobilienmarkt ist gleich, und professionelle Investoren sollten ihn mit geographischer und segmentspezifischer Präzision angehen.',
          ],
          blocks: [
            {
              h3: 'Sofia - Der Kernmarkt',
              p: [
                'Sofia bleibt der Kernmarkt - die tiefste Liquidität, die breiteste Nachfrage und die stärkste Beschäftigungsbasis. Die Stadt holt nicht mehr nur gegenüber mitteleuropäischen Benchmarks auf; sie wird zunehmend mit Warschau und Bukarest verglichen.',
              ],
              bullets: [
                'Durchschnittspreis: 2.000-2.250 EUR/m² (Neubau, Prime-Bezirke)',
                'Bruttomietrendite: 4-6% in etablierten Wohngebieten',
                'Preiswachstumsprognose 2026: 5-10% jährlich',
              ],
            },
            {
              h3: 'Varna - Die herausragende Wachstumsgeschichte',
              p: [
                'Varna entwickelt sich zur herausragenden Wachstumsgeschichte des Marktes. Die Grundlagen der Küstenstadt - Tourismus, ausländische Käufernachfrage, ein wachsender Tech- und Dienstleistungssektor und starke Sommermietrenditen - kombinieren sich mit einer Preisbasis, die in vielen Segmenten noch unter Sofia liegt.',
              ],
              bullets: [
                'Durchschnittspreis: 1.200-1.600 EUR/m² (breite Spanne nach Zone und Qualität)',
                'Starkes Kurzzeitvermietungspotenzial: 6-9% Bruttorendite in der Saison',
                'Wachsende ganzjährige Nachfrage von Remote-Arbeitern und digitalen Nomaden',
              ],
            },
            {
              h3: 'Plovdiv - Stabile Rendite, erschwinglicher Einstieg',
              p: [
                'Plovdiv bietet eine überzeugende Kombination aus kultureller Lebendigkeit, einer wachsenden jungen Berufsgruppe und Immobilienpreisen, die zu den erschwinglichsten jeder größeren EU-Stadt gehören.',
              ],
              bullets: [
                'Durchschnittspreis: 1.100-1.400 EUR/m² für Qualitätsneubauten',
                'Starke Langzeitmieternachfrage durch Universitäten und Gewerbegebiete',
                'Niedrigere Einstiegskosten bei soliden Fundamentaldaten',
              ],
            },
            {
              h3: 'Schwarzmeerküste - Lifestyle und Mietrendite',
              p: [
                'Die Schwarzmeerküste - von Varna südwärts über Burgas, Sozopol und Nessebar - behält ihre Attraktivität für Kurzzeitvermietungsinvestoren und Lifestyle-Käufer.',
              ],
              bullets: [
                'Einstiegspreise: 800-1.600 EUR/m² je nach Lage und Qualität',
                'Saisonale Spitzenauslastung kann Bruttorenditen von 8-12% in Top-Lagen unterstützen',
                'Der Eurozone-Status macht diese Region jetzt direkt mit der kroatischen Küste vergleichbar',
              ],
            },
          ],
        },
        {
          h2: 'Eine professionelle Einschätzung',
          p: [
            'Bei European Gateway sind wir lange genug in diesem Markt tätig, um mehrere Zyklen beobachtet zu haben. Unsere fundierte Einschätzung, gestützt auf die Daten, die ab 2026 verfügbar sind, ist, dass Bulgarien eines der letzten glaubwürdigen Wertspiele innerhalb der Eurozone darstellt.',
            'Qualität ist enorm wichtig. Die Lage innerhalb der Städte ist wichtig. Die Kombination aus erschwinglichen Einstiegspreisen, EU-Rechtsrahmen, Eurozone-Mitgliedschaft und starker kurzfristiger Preisdynamik macht Bulgarien zu einem Markt, der frühzeitiges, gut recherchiertes Handeln gegenüber einem Abwarten belohnt. Das Fenster ist offen. Die Uhr läuft.',
          ],
        },
      ],
      keyFacts: [
        'Sofia liegt im Durchschnitt bei 2.000-2.250 EUR/m² gegenüber 3.500-6.000+ EUR/m² im EU-Hauptstadtdurchschnitt - ein Rabatt von 50-60%.',
        'Bulgarien verzeichnete im Q1 2025 ein jährliches Hauspreisswachstum von 15,1% - das zweithöchste in der gesamten EU.',
        'Bulgarien ist am 1. Januar 2026 dem Euroraum beigetreten - Währungsrisiko für Euro-Investoren vollständig eliminiert.',
        'Löhne wachsen jährlich um 6-8% in realen Werten - der strukturelle Motor der Nachfragekonvergenz.',
        'Analysten prognostizieren ein kumulatives Preiswachstum von 45-60% in den nächsten fünf Jahren.',
      ],
    },

    bg: {
      back: 'Към началото',
      date: '18 февруари 2026',
      readTime: 'Време за четене: ~8-10 минути',
      title: 'Защо България е още 2 пъти по-евтина от средното ниво в ЕС - и защо тази възможност няма да остане отворена завинаги',
      subtitle:
        'Професионален пазарен анализ от European Gateway: структурните причини зад ценовата разлика на България, какво промени приемането на еврото и защо 2026 г. може да е последната година за влизане при сегашните оценки.',
      keyFactsTitle: 'Ключови факти',
      noteTitle: 'Отказ от отговорност',
      noteText:
        'Това е пазарен анализ и преглед на сценарии, а не инвестиционен съвет. Винаги провеждайте правна проверка и моделирайте пълната икономика преди покупка на имот.',
      photoCreditLabel: 'Снимка към статията:',
      photoCreditOn: 'в',
      sections: [
        {
          h2: 'Числата, които разказват историята',
          p: [
            'Разликата между цените на имотите в България и в Европа не е малка. Тя е структурна. София, икономическата столица и най-скъпият град в страната, се позиционира средно около 2,000-2,250 EUR на квадратен метър за жилищни имоти. Пловдив и Бургас са в диапазона 1,100-1,400 EUR. Варна, бижуто на Черноморието, средно е между 1,200 и 1,600 EUR на квадратен метър. Курортни дестинации като Слънчев бряг все още могат да се намерят на цени 800-1,200 EUR на квадратен метър.',
            'В сравнение с европейската средна стойност - която за сравними имоти в столиците редовно е между 3,500 и 6,000+ EUR на квадратен метър - аритметиката е безспорна. България не е с 20% по-евтина от средното за ЕС. В повечето сегменти тя е с 50 до 60% по-евтина.',
            'Бюджет от 200,000 EUR, с който в Лисабон или Варшава се купува скромен едностаен апартамент, в България купува просторен, модерен двустаен в най-желаните квартали на София - или имот на брега на морето.',
          ],
        },
        {
          h2: 'Защо разликата е устояла толкова дълго?',
          p: [
            'Упоритостта на bulgarian discount спрямо останала Европа е вкоренена в история на конвергенция, която структурно е изказана само наполовина. България влезе в ЕС през 2007 г., но БВП на глава от населението изостава значително от западните си партньори почти две десетилетия.',
            'Цените на недвижимите имоти следват доходите. Заплатите в България растат агресивно - анализаторите приемат реален годишен ръст на заплатите от 6-8% като централна прогноза - и този натиск нагоре върху покупателната способност директно захранва търсенето на жилища в основните градски центрове.',
            'Вторият структурен двигател беше ниската чуждестранна инвестиционна активност. Приемането на еврото елиминира напълно валутния риск за инвеститорите от еврозоната, правейки за пръв път сравнението между апартамент в Лисабон и апартамент в София директно изчисление в евро.',
          ],
        },
        {
          h2: 'Какво показва вече 2026 г.',
          p: [
            'На 1 януари 2026 г. България официално се присъедини към еврозоната, заменяйки лева с еврото по дълго фиксирания курс 1 EUR = 1.95583 BGN. За инвеститорите в имоти, следящи този пазар, тази дата не е просто заглавие - тя е разделителна линия.',
            'България регистрира втория най-висок годишен ръст на цените на жилищата в цялата ЕС през Q1 2025 - 15,1% на годишна база, отстъпвайки само на Португалия и почти три пъти над средното за ЕС от 5,7%.',
            'Анализаторите описват промяната като преход от покупки, движени от страх - местни спестители, превръщащи пари в тухли преди смяната на валутата - към покупки, движени от фундаменти: реални собственици-обитатели, дългосрочни инвеститори и нарастваща група международни купувачи.',
          ],
        },
        {
          h2: 'Часовникът на конвергенцията тиктака',
          p: [
            'Критичният момент, който всеки инвеститор трябва да осмисли: ценовата разлика съществува именно защото конвергенцията все още не е завършила. Отстъпката от 2x не е постоянна характеристика на икономическия пейзаж на България - тя е снимка на страна в средата на преход.',
            'Силите, които ще затворят тази разлика, вече са в движение. Приемането на еврото означава, че лихвите по ипотечни кредити в България ще се изравняват все повече с паричната политика на ЕЦБ. Ръстът на заплатите се ускорява. Чуждестранни инвестиции влизат с темп, който пазарът не е виждал досега.',
            'Опитът на сравними пазари на конвергенция е поучителен. Хърватия, която се присъедини към еврото през януари 2023 г., видя значителен ръст на цените в Дубровник и Сплит през следващите две години. Българският пазар е по-голям, неговата икономика е по-диверсифицирана, а ценовата основа е още по-ниска.',
          ],
        },
        {
          h2: 'Където се намират най-добрите възможности днес',
          p: [
            'Не целият пазар на недвижими имоти в България е еднакъв и професионалните инвеститори трябва да го подхождат с географска и сегментна прецизност.',
          ],
          blocks: [
            {
              h3: 'София - Основният пазар',
              p: [
                'София остава основният пазар - с най-дълбока ликвидност, най-широко търсене и най-силна заетостна база. Градът вече не просто наваксва с централноевропейски еталони; той се сравнява все повече с Варшава и Букурещ.',
              ],
              bullets: [
                'Средна цена: 2,000-2,250 EUR/м² (ново строителство, prime квартали)',
                'Брутна наемна доходност: 4-6% в утвърдени жилищни зони',
                'Прогноза за ценови ръст 2026: 5-10% годишно',
              ],
            },
            {
              h3: 'Варна - Изпъкващата история на растеж',
              p: [
                'Варна се очертава като изпъкващата история на растеж на пазара. Фундаментите на крайбрежния град - туризъм, търсене от чуждестранни купувачи, нарастващ технологичен сектор и силна икономика от летни наеми - се комбинират с ценова основа, която в много сегменти все още е под тази на София.',
              ],
              bullets: [
                'Средна цена: 1,200-1,600 EUR/м² (широк диапазон по зона и качество)',
                'Силен потенциал за краткосрочна наемна доходност: 6-9% бруто в сезона',
                'Нарастващо целогодишно търсене от дистанционни работещи и дигитални номади',
              ],
            },
            {
              h3: 'Пловдив - Стабилна доходност, достъпен вход',
              p: [
                'Пловдив предлага убедително съчетание от културна живост, нарастваща млада професионална популация и цени на имоти, останали сред най-достъпните за голям град в ЕС.',
              ],
              bullets: [
                'Средна цена: 1,100-1,400 EUR/м² за качествено ново строителство',
                'Силно търсене за дългосрочен наем от университети и бизнес паркове',
                'По-нисък вход с солидни фундаменти',
              ],
            },
            {
              h3: 'Черноморското крайбрежие - Лайфстайл и наемна доходност',
              p: [
                'Черноморското крайбрежие - от Варна на юг към Бургас, Созопол и Несебър - запазва привлекателността си за инвеститори в краткосрочни наеми и купувачи на лайфстайл имоти.',
              ],
              bullets: [
                'Входни цени: 800-1,600 EUR/м² в зависимост от локация и качество',
                'Пиковата сезонна заетост може да поддържа брутна доходност 8-12% в топ локации',
                'Статутът на еврозона прави сега тази зона директно сравнима с хърватското крайбрежие',
              ],
            },
          ],
        },
        {
          h2: 'Професионална оценка',
          p: [
            'В European Gateway работим достатъчно дълго на този пазар, за да сме наблюдавали множество цикли. Нашата обмислена гледна точка, подкрепена от данните, налични към 2026 г., е, че България представлява едно от последните достоверни предложения за стойност в рамките на еврозоната.',
            'Качеството има огромно значение. Местоположението в рамките на градовете има значение. Комбинацията от достъпни входни цени, правна рамка на ЕС, членство в еврозоната и силен ценови импулс в краткосрочен план прави България пазар, който възнаграждава ранните, добре проучени действия. Прозорецът е отворен. Часовникът тиктака.',
          ],
        },
      ],
      keyFacts: [
        'София средно 2,000-2,250 EUR/м² срещу 3,500-6,000+ EUR/м² за средните стойности на столиците в ЕС - отстъпка от 50-60%.',
        'България регистрира 15,1% годишен ръст на цените на жилищата в Q1 2025 - втори по-висок в целия ЕС.',
        'България се присъедини към еврозоната на 1 януари 2026 г. - валутен риск за инвеститори в евро напълно елиминиран.',
        'Заплатите растат с 6-8% годишно в реално изражение - структурният двигател на конвергенцията на търсенето.',
        'Анализаторите прогнозират кумулативен ценови ръст от 45-60% през следващите пет години.',
      ],
    },

    ru: {
      back: 'На главную',
      date: '18 февраля 2026',
      readTime: 'Время чтения: ~8-10 минут',
      title: 'Почему Болгария всё ещё в 2 раза дешевле среднего по ЕС - и почему это окно не будет открыто вечно',
      subtitle:
        'Профессиональный анализ рынка от European Gateway: структурные причины ценового разрыва Болгарии, что меняет принятие евро и почему 2026 год может быть последним для входа по сегодняшним ценам.',
      keyFactsTitle: 'Ключевые факты',
      noteTitle: 'Дисклеймер',
      noteText:
        'Это рыночный анализ и сценарный обзор, а не инвестиционная рекомендация. Перед покупкой любой недвижимости обязательно проводите юридическую проверку и моделируйте полную экономику сделки.',
      photoCreditLabel: 'Фото к статье:',
      photoCreditOn: 'на',
      sections: [
        {
          h2: 'Цифры, которые говорят сами за себя',
          p: [
            'Разрыв между ценами на недвижимость в Болгарии и в Европе не является незначительным. Он носит структурный характер. София - экономическая столица и самый дорогой город страны - находится на уровне примерно 2 000-2 250 EUR за квадратный метр жилой недвижимости. Пловдив и Бургас - в диапазоне 1 100-1 400 EUR. Варна, жемчужина черноморского побережья, в среднем - от 1 200 до 1 600 EUR за квадратный метр. Курортные направления, такие как Солнечный Берег, по-прежнему доступны от 800 до 1 200 EUR за квадратный метр.',
            'Сравнивая с общеевропейским уровнем - который для сопоставимой недвижимости в столицах регулярно составляет от 3 500 до 6 000+ EUR за квадратный метр - арифметика однозначна. Болгария не на 20% дешевле среднего по ЕС. В большинстве сегментов она дешевле на 50-60%.',
            'Бюджет в 200 000 EUR, которого в Лиссабоне или Варшаве хватит на скромную однокомнатную квартиру, в Болгарии позволяет купить просторные современные "двушки" в самых востребованных районах Софии - или недвижимость на берегу Черного моря.',
          ],
        },
        {
          h2: 'Почему разрыв сохранялся так долго?',
          p: [
            'Устойчивость болгарского дисконта по отношению к остальной Европе коренится в истории конвергенции, которая структурно рассказана лишь наполовину. Болгария вступила в ЕС в 2007 году, но ВВП на душу населения значительно отставал от западных партнёров почти два десятилетия.',
            'Цены на недвижимость со временем следуют за доходами. Зарплаты в Болгарии активно растут - аналитики используют реальный годовой рост заплат на 6-8% как центральное предположение - и этот восходящий ценовой давление напрямую питает спрос на жильё в крупных городах.',
            'Второй структурный фактор - недопредставленность иностранных инвестиций. Принятие евро полностью устраняет валютный риск для инвесторов из еврозоны, впервые делая сравнение квартиры в Лиссабоне и квартиры в Софии прямым расчётом в евро.',
          ],
        },
        {
          h2: 'Что уже показывает 2026 год',
          p: [
            '1 января 2026 года Болгария официально вступила в еврозону, заменив лев на евро по давно фиксированному курсу 1 EUR = 1,95583 BGN. Для инвесторов в недвижимость, следивших за этим рынком, эта дата - не просто заголовок. Это разделительная черта.',
            'Болгария зафиксировала второй по величине годовой рост цен на жильё в ЕС в первом квартале 2025 года - 15,1% год к году, уступая только Португалии и почти втрое превышая средний показатель по ЕС в 5,7%.',
            'Аналитики описывают сдвиг как переход от покупок, движимых страхом - местных вкладчиков, перекладывавших деньги в недвижимость перед сменой валюты - к покупкам, движимым фундаменталами: реальным собственникам-пользователям, долгосрочным инвесторам и растущей когорте международных покупателей.',
          ],
        },
        {
          h2: 'Часы конвергенции запущены',
          p: [
            'Ключевой момент, который каждый инвестор должен усвоить: разрыв в доступности существует именно потому, что конвергенция ещё не завершена. Двукратный дисконт - не постоянная черта болгарской экономики. Это снимок страны на полпути к трансформации.',
            'Силы, которые закроют этот разрыв, уже запущены. Принятие евро означает, что ипотечные ставки в Болгарии будут всё больше выравниваться с денежно-кредитной политикой ЕЦБ. Рост зарплат ускоряется. Иностранные инвестиции поступают в темпе, которого рынок ранее не видел.',
            'Опыт сопоставимых рынков конвергенции поучителен. Хорватия, вступившая в еврозону в январе 2023 года, увидела значительный рост цен в Дубровнике и Сплите за последующие два года. Болгарский рынок крупнее, её экономика диверсифицированнее, а ценовая база ещё ниже.',
          ],
        },
        {
          h2: 'Где сегодня находятся лучшие возможности',
          p: [
            'Рынок недвижимости Болгарии неоднороден, и профессиональные инвесторы должны подходить к нему с географической и сегментной точностью.',
          ],
          blocks: [
            {
              h3: 'София - Основной рынок',
              p: [
                'София остаётся основным рынком - с наибольшей глубиной ликвидности, самым широким спросом и самой сильной занятостью. Город уже не просто догоняет центральноевропейские ориентиры; он всё чаще сравнивается с Варшавой и Бухарестом.',
              ],
              bullets: [
                'Средняя цена: 2 000-2 250 EUR/м² (новостройки, prime районы)',
                'Валовая арендная доходность: 4-6% в устоявшихся жилых зонах',
                'Прогноз роста цен 2026: 5-10% в год',
              ],
            },
            {
              h3: 'Варна - Выдающаяся история роста',
              p: [
                'Варна становится выдающейся историей роста рынка. Фундаментальные характеристики прибрежного города - туризм, спрос от иностранных покупателей, растущий технологический сектор и высокие летние арендные доходы - сочетаются с ценовой базой, которая во многих сегментах по-прежнему ниже, чем в Софии.',
              ],
              bullets: [
                'Средняя цена: 1 200-1 600 EUR/м² (широкий диапазон по зоне и качеству)',
                'Высокий потенциал краткосрочной аренды: 6-9% валовой доходности в сезон',
                'Растущий круглогодичный спрос со стороны удалённых работников и цифровых кочевников',
              ],
            },
            {
              h3: 'Пловдив - Стабильная доходность, доступный вход',
              p: [
                'Пловдив предлагает убедительное сочетание культурной яркости, растущей молодой профессиональной аудитории и цен на недвижимость, остающихся одними из самых доступных среди крупных городов ЕС.',
              ],
              bullets: [
                'Средняя цена: 1 100-1 400 EUR/м² для качественных новостроек',
                'Высокий долгосрочный арендный спрос от университетов и бизнес-парков',
                'Более низкий порог входа при солидных фундаменталах',
              ],
            },
            {
              h3: 'Черноморское побережье - Лайфстайл и арендная доходность',
              p: [
                'Черноморское побережье - от Варны на юг через Бургас, Созопол и Несебр - сохраняет привлекательность для инвесторов в краткосрочную аренду и покупателей лайфстайл-недвижимости.',
              ],
              bullets: [
                'Входные цены: 800-1 600 EUR/м² в зависимости от локации и качества',
                'Пиковая сезонная загрузка может обеспечить валовую доходность 8-12% в топовых локациях',
                'Статус еврозоны делает этот рынок напрямую сопоставимым с хорватским побережьем',
              ],
            },
          ],
        },
        {
          h2: 'Профессиональная оценка',
          p: [
            'В European Gateway мы работаем на этом рынке достаточно долго, чтобы наблюдать несколько циклов. Наша взвешенная позиция, подкреплённая данными на 2026 год: Болгария является одной из последних достоверных историй стоимости внутри еврозоны.',
            'Качество имеет огромное значение. Локация внутри городов имеет значение. Сочетание доступных входных цен, правовой базы ЕС, членства в еврозоне и сильного ценового импульса в краткосрочной перспективе делает Болгарию рынком, который вознаграждает ранние, хорошо обоснованные действия. Окно открыто. Часы запущены.',
          ],
        },
      ],
      keyFacts: [
        'София в среднем 2 000-2 250 EUR/м² против 3 500-6 000+ EUR/м² в среднем по столицам ЕС - скидка 50-60%.',
        'Болгария зафиксировала годовой рост цен на жильё 15,1% в Q1 2025 - второй по величине во всём ЕС.',
        'Болгария вступила в еврозону 1 января 2026 г. - валютный риск для евро-инвесторов полностью устранён.',
        'Зарплаты растут на 6-8% в год в реальном выражении - структурный двигатель конвергенции спроса.',
        'Аналитики прогнозируют кумулятивный рост цен на 45-60% в течение следующих пяти лет.',
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
              alt="Sofia, Bulgaria - city skyline"
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

        {/* Agency CTA footer */}
        <div className="mt-16 rounded-xl border bg-primary/5 p-6 flex items-start gap-4">
          <Euro className="w-6 h-6 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold mb-1">European Gateway</p>
            <p className="text-xs text-muted-foreground">
              {lang === 'ru'
                ? 'Профессиональное агентство недвижимости и юридическое сопровождение в Болгарии. Подбор объектов, due diligence, оформление сделок.'
                : lang === 'bg'
                ? 'Професионална агенция за недвижими имоти и правна поддръжка в България. Подбор на имоти, due diligence, сделки.'
                : lang === 'it'
                ? 'Agenzia immobiliare professionale e supporto legale in Bulgaria. Ricerca immobili, due diligence, chiusura transazioni.'
                : lang === 'de'
                ? 'Professionelle Immobilienagentur und rechtliche Betreuung in Bulgarien. Objektsuche, Due Diligence, Transaktionsabwicklung.'
                : 'Professional real estate advisory and acquisition agency in Bulgaria. Property search, due diligence, and end-to-end transaction support.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BulgariaCheaperThanEUArticle;