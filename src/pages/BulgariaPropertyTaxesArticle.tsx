import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, TrendingUp, MapPin,
  BarChart3, Clock, Building, Home, Landmark,
  Euro, AlertTriangle, Calculator,
} from 'lucide-react';

const BulgariaPropertyTaxesArticle = () => {
  const { i18n } = useTranslation();
  const langRaw = (i18n.language || 'en').toLowerCase();
  const lang = langRaw.startsWith('ru') ? 'ru' : langRaw.startsWith('bg') ? 'bg' : langRaw.startsWith('it') ? 'it' : langRaw.startsWith('de') ? 'de' : 'en';

  const cover = {
    image_url: 'https://ipfs.io/ipfs/bafybeiarxej25ipcdazsrji3el5ruie7vhiqrlpguowrrsiehj67sjnfnm',
    unsplash_author_name: 'Kelly Sikkema',
    unsplash_author_url: 'https://unsplash.com/@kellysikkema',
    unsplash_photo_url: 'https://unsplash.com/photos/person-holding-paper-near-pen-and-calculator-xoU52jUVUXA',
  };

  const sources = [
    { label: 'МРРБ — Наредба за определяне на данъка върху недвижимите имоти (Bulgarian MRDPW, Municipal Tax Regulations 2025)', url: 'https://www.mrrb.bg/' },
    { label: 'Sofia Municipality — Property Tax Rates 2025-2026', url: 'https://www.sofia.bg/property-tax' },
    { label: 'NRA Bulgaria (НАП) — Local Taxes and Fees Act, updated 2025', url: 'https://nra.bg/page?id=287' },
    { label: 'Global Property Guide — Bulgaria Tax Summary 2025', url: 'https://www.globalpropertyguide.com/europe/bulgaria/Taxes-and-Costs' },
    { label: 'Investropa — Bulgaria Property Ownership Costs 2025', url: 'https://investropa.com/blogs/news/bulgaria-property-ownership-costs' },
    { label: 'Burgas Municipality — Local Tax Rates 2025', url: 'https://www.burgas.bg/bg/info/index/240' },
    { label: 'NSI Bulgaria — Housing Price Statistics Q3 2025', url: 'https://www.nsi.bg/en/announcement/housing-price-statistics-third-quarter-of-2025-8900' },
  ];

  const translations: Record<string, any> = {
    en: {
      back: 'Back to Home',
      date: 'February 21, 2026',
      readTime: 'Reading time: ~12-14 minutes',
      title: 'Property Taxes in Bulgaria 2026: Complete Guide for Sofia, Burgas, Varna, Plovdiv, the Black Sea Coast and Mountain Resorts',
      subtitle: 'Annual property tax rates, municipal garbage fees, rental income tax, acquisition costs, and city-by-city breakdown for every major Bulgarian market — updated February 2026.',
      keyFactsTitle: 'Key Facts — February 2026',
      noteTitle: 'Disclaimer',
      noteText: 'Tax rates are set annually by each municipality and may be updated mid-year. This article reflects rates effective as of February 2026. Always verify current rates with your municipality or a licensed Bulgarian tax adviser before making financial decisions.',
      sourcesTitle: 'Sources',
      photoCreditLabel: 'Article photo:',
      photoCreditOn: 'on',
      keyFacts: [
        'Bulgarian annual property tax is among the lowest in the EU: 0.01%–0.45% of the municipal assessed value — not market value.',
        'Municipal assessed value (данъчна оценка) is typically 20–40% of market price, making effective tax rates extremely low in real terms.',
        'Sofia: annual property tax rate 0.275% of assessed value. On a €150,000 apartment with assessed value ~€45,000: approx. €124/year.',
        'Black Sea coast (Sunny Beach, Sozopol, Sveti Vlas): rates 0.20%–0.25% — but assessed values have risen sharply following 2022–2025 market appreciation.',
        'Mountain resorts (Bansko, Pamporovo, Borovets): rates 0.15%–0.22% — among the lowest in Bulgaria by rate, offset by lower assessed values.',
        'Rental income from Bulgarian property is taxed at a flat 10% after a standard 10% deductible expense allowance — effective rate 9% of gross rent.',
        'Annual garbage fee (такса смет) is a separate municipal charge: varies from €30–250/year depending on location and property size.',
        'Capital gains on property held under 3 years: taxed at 10% on profit. Property held 3+ years: exempt from capital gains tax for primary residence.',
      ],
      sections: [
        {
          h2: 'How Bulgarian property tax works — the fundamentals',
          p: [
            'Bulgaria operates a system that confuses many foreign buyers: annual property tax (данък върху недвижимите имоти) is calculated not on market value but on the municipal assessed value (данъчна оценка). This assessed value is set by a government formula based on construction type, location zone, year built, and floor area — and is typically 20–40% of actual market price.',
            'What this means in practice: a €150,000 apartment in Sofia will carry an assessed value of roughly €40,000–55,000. Tax at 0.275% on that assessed value equals approximately €110–150 per year. This is not a typo. Bulgarian property taxation is genuinely among the lightest in the entire European Union.',
            'The Local Taxes and Fees Act (ЗМДТ) sets the framework, but each municipality sets its own rate within the permitted band of 0.01%–0.45%. Rates are revised annually — the figures in this article reflect the rates effective as of January 2026.',
          ],
        },
        {
          h2: 'The three taxes every property owner pays',
          bullets: [
            'Annual property tax (данък върху недвижимите имоти): 0.01%–0.45% of municipal assessed value. Paid annually, 5% discount if paid in full before 30 April.',
            'Annual garbage collection fee (такса смет): a separate local fee for waste collection services. Set per municipality, typically calculated as a percentage of assessed value or as a fixed amount per property. Ranges from ~€30 to €250/year depending on location.',
            'Acquisition tax (данък при придобиване): one-time tax paid on purchase. Rate: approximately 3% of the higher of purchase price or assessed value. Varies slightly by municipality — Sofia: 3.0%, Burgas: 3.0%, Varna: 3.0%, Nessebar: 2.6%.',
          ],
        },
        {
          h2: 'Sofia — rates, assessed values, and real costs in 2026',
          p: [
            'Sofia Municipality sets an annual property tax rate of 0.275% (2026). For a 70 m² apartment in a central Sofia district (Lozenets, Oborishte, Sredets) with a market value of €180,000–220,000, the municipal assessed value will typically be in the range of €50,000–75,000. Annual property tax: €138–206. Annual garbage fee in central Sofia: approximately €80–120 per year.',
            'Total annual ownership cost (tax + garbage): €220–330 per year on a premium central Sofia apartment. This compares with Prague at ~€800–1,200/year or Warsaw at ~€500–900/year for equivalent assets.',
          ],
          blocks: [{
            h3: 'Sofia: property tax reference 2026',
            bullets: [
              'Annual property tax rate: 0.275% of assessed value',
              'Garbage fee: ~€80–120/year (central districts)',
              'Acquisition tax: 3.0% of purchase price or assessed value (whichever is higher)',
              'Example: €180,000 apartment → assessed value ~€55,000 → annual tax ~€151 + garbage ~€100 = ~€251/year total',
              'Early payment discount: 5% if paid in full before 30 April',
            ],
          }],
        },
        {
          h2: 'Plovdiv — second city, lower rates',
          p: [
            'Plovdiv sets one of the more competitive property tax rates among Bulgarian cities at 0.20% (2026). Plovdiv\'s assessed values have historically lagged behind Sofia but have been catching up as the city\'s property market grew strongly through 2023–2025.',
            'For a 70 m² apartment in central Plovdiv (Kapana, Tsentar) with a market value of €100,000–130,000, assessed value typically falls in the €25,000–40,000 range. Annual tax: €50–80. Garbage fee: approximately €60–90/year. Total annual ownership cost: €110–170/year.',
          ],
          blocks: [{
            h3: 'Plovdiv: property tax reference 2026',
            bullets: [
              'Annual property tax rate: 0.20% of assessed value',
              'Garbage fee: ~€60–90/year',
              'Acquisition tax: 3.0%',
              'Example: €110,000 apartment → assessed value ~€30,000 → annual tax ~€60 + garbage ~€75 = ~€135/year total',
            ],
          }],
        },
        {
          h2: 'Varna — coastal city premium, moderate tax rate',
          p: [
            'Varna, Bulgaria\'s third-largest city and primary Black Sea city, applies a property tax rate of 0.225% (2026). Varna recorded 18% annual price growth through 2025 (SeaPropertiesBG Oct 2025) and new-build quality units are now trading at €1,200–2,500/m². Assessed values in Varna have been rising accordingly, though they continue to significantly lag market prices.',
            'For a new-build 65 m² apartment in Varna with a market value of €130,000–160,000, the assessed value falls approximately in the €30,000–50,000 range. Annual tax: €68–113. Garbage fee: approximately €70–110/year.',
          ],
          blocks: [{
            h3: 'Varna: property tax reference 2026',
            bullets: [
              'Annual property tax rate: 0.225% of assessed value',
              'Garbage fee: ~€70–110/year',
              'Acquisition tax: 3.0%',
              'Example: €145,000 apartment → assessed value ~€40,000 → annual tax ~€90 + garbage ~€90 = ~€180/year total',
            ],
          }],
        },
        {
          h2: 'Burgas — fastest-growing city, stable tax rates',
          p: [
            'Burgas applies a property tax rate of 0.21% (2026). The city recorded the highest single-quarter growth in Bulgaria in Q2 2025 at +6.2% (NSI), driven partly by the Burgas port modernization completed January 2025. Despite rapidly rising market values, assessed values adjust more slowly through the government formula.',
            'For a 65 m² apartment in central Burgas with a market value of €100,000–130,000, assessed value typically falls in the €25,000–38,000 range. Annual tax: €53–80. Garbage fee: approximately €55–90/year.',
          ],
          blocks: [{
            h3: 'Burgas: property tax reference 2026',
            bullets: [
              'Annual property tax rate: 0.21% of assessed value',
              'Garbage fee: ~€55–90/year',
              'Acquisition tax: 3.0%',
              'Example: €115,000 apartment → assessed value ~€32,000 → annual tax ~€67 + garbage ~€70 = ~€137/year total',
            ],
          }],
        },
        {
          h2: 'Black Sea coast: Nessebar, Sunny Beach, Sozopol, Sveti Vlas',
          p: [
            'Coastal resort properties fall under the Nessebar Municipality (for Sunny Beach, Sveti Vlas, Ravda, Nessebar old town) or Sozopol Municipality — each setting its own rate. These municipalities have historically applied rates of 0.20%–0.25%. However, the key dynamic for coastal investors is not the rate but the trajectory of assessed values.',
            'With coastal holiday property prices rising ~30% year-on-year in 2025 (Green Life Development Mar 2025) and beachfront prime now trading at 2,500–3,000 EUR/m², assessed values are being revised upward. Premium sea-view apartments in Sveti Vlas or Sozopol that were assessed at €20,000–25,000 three years ago may now carry assessed values of €28,000–38,000.',
            'The annual complex maintenance fee (такса поддръжка) — which ranges from 6–18 EUR/m²/month in major resort complexes — is a private contractual fee paid to the management company, entirely separate from municipal property tax. This distinction is critical: the €9,100/year maintenance fee on a premium Sveti Vlas complex is not a tax — but it is a significant ownership cost that must be modelled.',
          ],
          blocks: [{
            h3: 'Nessebar Municipality (Sunny Beach, Sveti Vlas, Ravda, Nessebar): 2026',
            bullets: [
              'Annual property tax rate: 0.22% of assessed value',
              'Garbage fee: ~€80–150/year (higher in resort areas — larger waste volumes)',
              'Acquisition tax: 2.6% (Nessebar Municipality — one of the lowest in Bulgaria)',
              'Example: €120,000 sea-view apartment → assessed value ~€30,000 → annual tax ~€66 + garbage ~€100 = ~€166/year',
              'IMPORTANT: Complex maintenance fee (6–18 EUR/m²/month) is a SEPARATE private contractual cost — not a tax',
            ],
          }, {
            h3: 'Sozopol Municipality: 2026',
            bullets: [
              'Annual property tax rate: 0.20% of assessed value',
              'Garbage fee: ~€80–130/year',
              'Acquisition tax: 3.0%',
              'Example: €130,000 sea-view apartment → assessed value ~€32,000 → annual tax ~€64 + garbage ~€100 = ~€164/year',
            ],
          }],
        },
        {
          h2: 'Golden Sands (Zlatni Pyasatsi) — Varna Municipality',
          p: [
            'Golden Sands falls under Varna Municipality and therefore applies Varna\'s rate of 0.225%. As a premium resort zone, properties here carry higher assessed values than standard Varna city apartments due to location zone coefficients in the assessment formula. A premium apartment at Golden Sands with a market value of €110,000–150,000 may carry an assessed value of €28,000–40,000.',
          ],
          blocks: [{
            h3: 'Golden Sands (Varna Municipality): 2026',
            bullets: [
              'Annual property tax rate: 0.225% (Varna Municipality rate)',
              'Garbage fee: ~€80–130/year (resort zone)',
              'Acquisition tax: 3.0%',
              'Example: €130,000 apartment → assessed value ~€35,000 → annual tax ~€79 + garbage ~€105 = ~€184/year',
            ],
          }],
        },
        {
          h2: 'Mountain resorts: Bansko, Pamporovo, Borovets',
          p: [
            'Bulgaria\'s mountain ski resorts apply some of the lowest property tax rates in the country. Bansko falls under Bansko Municipality (0.15%–0.18%), Pamporovo under Smolyan Municipality (0.15%), and Borovets under Samokov Municipality (0.17%). These rates reflect the rural-adjacent nature of these municipalities.',
            'Mountain resort assessed values are notably lower than coastal equivalents. A 50 m² studio in Bansko with a market value of €55,000–75,000 typically carries an assessed value of €8,000–15,000. Annual tax: €12–27. Total annual tax + garbage: €50–120/year. This makes mountain resort ownership exceptionally cheap from a holding-cost perspective.',
            'The trade-off is that mountain resort markets have lower liquidity and more concentrated demand windows (ski season Dec–Mar, hiking season Jun–Sep) than the coast. But for investors focused on holding costs, the numbers are compelling.',
          ],
          blocks: [{
            h3: 'Bansko (Bansko Municipality): 2026',
            bullets: [
              'Annual property tax rate: 0.15%–0.18% of assessed value',
              'Garbage fee: ~€40–80/year',
              'Acquisition tax: 3.0%',
              'Example: €65,000 studio → assessed value ~€12,000 → annual tax ~€18–22 + garbage ~€60 = ~€78–82/year',
            ],
          }, {
            h3: 'Pamporovo (Smolyan Municipality): 2026',
            bullets: [
              'Annual property tax rate: 0.15% of assessed value',
              'Garbage fee: ~€35–70/year',
              'Acquisition tax: 3.0%',
              'Example: €50,000 studio → assessed value ~€9,000 → annual tax ~€14 + garbage ~€50 = ~€64/year',
            ],
          }, {
            h3: 'Borovets (Samokov Municipality): 2026',
            bullets: [
              'Annual property tax rate: 0.17% of assessed value',
              'Garbage fee: ~€35–70/year',
              'Acquisition tax: 3.0%',
              'Example: €55,000 studio → assessed value ~€10,000 → annual tax ~€17 + garbage ~€55 = ~€72/year',
            ],
          }],
        },
        {
          h2: 'Rental income tax — what landlords pay in 2026',
          p: [
            'Rental income from Bulgarian property is subject to personal income tax (ДДФЛ) at a flat rate of 10% after a standard 10% deductible allowance for expenses. In practice: gross rent × 0.90 × 10% = effective 9% of gross rental income.',
            'Example: €450/month × 12 = €5,400 annual gross rent. Taxable base: €5,400 × 0.90 = €4,860. Tax: €4,860 × 10% = €486/year. Net rental income after tax: €4,914/year.',
            'Non-resident owners (EU and non-EU citizens who are not Bulgarian tax residents) are subject to the same 10% flat rate on Bulgarian-sourced rental income. The obligation to declare and pay exists regardless of whether the owner lives in Bulgaria. Tax returns are filed annually by 30 April for the preceding year.',
            'Short-term rental (Airbnb/Booking.com) income is taxed identically unless the owner registers as a sole trader (ЕТ) or company, in which case corporate tax rates (10% corporate tax — Bulgaria has the lowest corporate tax rate in the EU) may apply instead.',
          ],
        },
        {
          h2: 'Capital gains tax — the rules most buyers ask about',
          p: [
            'Bulgaria\'s capital gains rules for residential property are straightforward and relatively investor-friendly. For Bulgarian tax residents: gains on sale of a primary residence are exempt from capital gains tax regardless of holding period. Gains on a second property held for more than 3 years are also exempt. Gains on property held under 3 years are taxed at 10% on the net gain (sale price minus acquisition cost minus documented improvement costs).',
            'For non-residents: the same 10% rate applies on gains from Bulgarian property, payable in Bulgaria. The acquisition costs (purchase price + documented transaction costs) are fully deductible from the taxable gain.',
            'Example: bought for €120,000 (including €6,000 acquisition costs = €126,000 total cost basis), sold for €160,000 after 2 years. Taxable gain: €34,000. Tax: €3,400. Net proceeds: €156,600.',
          ],
        },
        {
          h2: 'City-by-city comparison table — annual ownership cost on a €120,000 apartment',
          p: [
            'The following reference figures use a standardised €120,000 apartment in each location. Assessed values are estimated using standard municipal formula multipliers. All figures are approximate and for comparative purposes only.',
          ],
          blocks: [{
            h3: 'Annual tax + garbage fee — comparative reference',
            bullets: [
              'Sofia: rate 0.275% | assessed value ~€35,000 | annual tax ~€96 | garbage ~€100 | TOTAL ~€196/year',
              'Plovdiv: rate 0.20% | assessed value ~€28,000 | annual tax ~€56 | garbage ~€75 | TOTAL ~€131/year',
              'Varna: rate 0.225% | assessed value ~€32,000 | annual tax ~€72 | garbage ~€90 | TOTAL ~€162/year',
              'Burgas: rate 0.21% | assessed value ~€30,000 | annual tax ~€63 | garbage ~€75 | TOTAL ~€138/year',
              'Nessebar/Sunny Beach/Sveti Vlas: rate 0.22% | assessed value ~€28,000 | annual tax ~€62 | garbage ~€110 | TOTAL ~€172/year',
              'Golden Sands: rate 0.225% | assessed value ~€30,000 | annual tax ~€68 | garbage ~€105 | TOTAL ~€173/year',
              'Sozopol: rate 0.20% | assessed value ~€27,000 | annual tax ~€54 | garbage ~€100 | TOTAL ~€154/year',
              'Bansko: rate 0.17% | assessed value ~€14,000 | annual tax ~€24 | garbage ~€60 | TOTAL ~€84/year',
              'Pamporovo: rate 0.15% | assessed value ~€11,000 | annual tax ~€17 | garbage ~€50 | TOTAL ~€67/year',
              'Borovets: rate 0.17% | assessed value ~€12,000 | annual tax ~€20 | garbage ~€55 | TOTAL ~€75/year',
            ],
          }],
        },
        {
          h2: 'The cost the table does not show — resort complex maintenance fees',
          p: [
            'For coastal and mountain resort apartments in managed complexes, the annual maintenance fee (такса поддръжка) paid to the management company typically dwarfs the municipal property tax. This fee covers security, pool maintenance, common area cleaning, gardening, and building management.',
            'In Sunny Beach, Sveti Vlas, and Golden Sands, fees range from 6–18 EUR/m²/month. On a 60 m² apartment: €4,320–12,960 per year. This is the number that makes or breaks the economics of a coastal investment — not the €150–180 annual property tax.',
            'In mountain resorts (Bansko, Pamporovo), fees are typically lower: 3–8 EUR/m²/month. On a 50 m² studio: €1,800–4,800/year.',
            'Always request the exact maintenance fee schedule from the management company before any purchase commitment. Ask what it covers and what it excludes. Some complexes charge separately for pool use, parking, and lift maintenance.',
          ],
        },
        {
          h2: 'How to pay property tax in Bulgaria — practical process',
          p: [
            'Property tax and garbage fee are assessed and billed annually by the local municipality. Bills are typically issued in January-February for the current year. Payment can be made: in person at the municipal tax office, via bank transfer to the municipality\'s account, or online via the municipality\'s e-services portal (Sofia, Varna, Burgas, and Plovdiv all have functional online payment systems).',
            'A 5% early payment discount applies if the full annual amount is paid by 30 April. Installment payment is permitted: first installment by 30 June, second by 31 October, with no discount.',
            'Non-residents who own Bulgarian property are fully liable for annual property tax regardless of whether they live in Bulgaria. Property management companies and lawyers typically handle tax payment as part of their service package.',
          ],
        },
        {
          h2: 'Our view — what the numbers mean for investors in 2026',
          p: [
            'Bulgarian property taxation is genuinely competitive by EU standards. Total annual holding costs (tax + garbage) on a €120,000–150,000 property range from €67/year in Pamporovo to €200/year in Sofia — figures that would be unrecognisable to owners in France, Spain, or Germany.',
            'The cost that matters most for coastal and resort investors is not the municipal tax — it is the private complex maintenance fee. A resort apartment with a 15 EUR/m²/month fee costs more to hold annually than a Sofia city apartment where total taxes are under €200.',
            'For buy-to-let investors: at Bulgaria\'s 9% effective rental income tax rate (10% flat on 90% of gross), the tax burden on rental income is also among the lowest in the EU. Combined with the capital gains exemption for properties held 3+ years, the Bulgarian tax framework creates one of the most investor-friendly environments in Europe.',
            'At European Gateway, we provide full tax calculation support, connect clients with licensed Bulgarian tax advisers, and ensure every ownership cost is modelled transparently before purchase.',
          ],
        },
      ],
    },

    it: {
      back: 'Torna alla home',
      date: '21 febbraio 2026',
      readTime: 'Tempo di lettura: ~12-14 minuti',
      title: "Tasse sugli immobili in Bulgaria 2026: Guida completa per Sofia, Burgas, Varna, Plovdiv, la costa del Mar Nero e le localita' di montagna",
      subtitle: "Aliquote annuali, tasse comunali sui rifiuti, tassazione dei redditi da locazione, costi di acquisizione e analisi citta' per citta' — aggiornato febbraio 2026.",
      keyFactsTitle: 'Dati chiave — Febbraio 2026',
      noteTitle: 'Avvertenza',
      noteText: "Le aliquote fiscali sono stabilite annualmente da ogni comune e possono essere aggiornate nel corso dell'anno. Questo articolo riflette le aliquote in vigore a febbraio 2026. Verificate sempre le aliquote attuali con il vostro comune o un consulente fiscale bulgaro autorizzato prima di prendere decisioni finanziarie.",
      sourcesTitle: 'Fonti',
      photoCreditLabel: 'Foto articolo:',
      photoCreditOn: 'su',
      keyFacts: [
        "La tassa annuale sugli immobili bulgari e' tra le piu' basse dell'UE: 0,01%–0,45% del valore imponibile comunale — non del valore di mercato.",
        "Il valore imponibile comunale e' tipicamente il 20–40% del prezzo di mercato, rendendo le aliquote fiscali effettive estremamente basse.",
        "Sofia: aliquota 0,275% del valore imponibile. Su un appartamento da €150.000 con valore imponibile ~€45.000: circa €124/anno.",
        "Costa del Mar Nero (Sunny Beach, Sozopol, Sveti Vlas): aliquote 0,20%–0,25% — i valori imponibili sono aumentati significativamente con l'apprezzamento del mercato 2022–2025.",
        "Localita' di montagna (Bansko, Pamporovo, Borovets): aliquote 0,15%–0,22% — tra le piu' basse in Bulgaria.",
        "Il reddito da locazione e' tassato al 10% forfettario dopo una detrazione standard del 10% — aliquota effettiva 9% del canone lordo.",
        "La tassa annuale sui rifiuti e' un onere comunale separato: da €30 a €250/anno secondo la localita'.",
        "Plusvalenze su immobili detenuti meno di 3 anni: 10% sul profitto. Oltre 3 anni: esenzione per la residenza principale.",
      ],
      sections: [
        {
          h2: "Come funziona la tassa immobiliare bulgara — i fondamentali",
          p: [
            "La Bulgaria applica un sistema che spesso confonde gli acquirenti stranieri: la tassa annuale sugli immobili viene calcolata non sul valore di mercato ma sul valore imponibile comunale, stabilito da una formula governativa basata su tipo di costruzione, zona, anno di edificazione e superficie. Tale valore e' tipicamente il 20–40% del prezzo di mercato effettivo.",
            "In pratica: un appartamento da €150.000 a Sofia avra' un valore imponibile di circa €40.000–55.000. La tassa allo 0,275% su quel valore equivale a circa €110–150 all'anno. La tassazione immobiliare bulgara e' genuinamente tra le piu' leggere dell'intera Unione Europea.",
            "La Legge sulle imposte e tasse locali (ЗМДТ) fissa il quadro normativo, ma ogni comune stabilisce la propria aliquota entro la fascia consentita dello 0,01%–0,45%. Le aliquote vengono riviste annualmente.",
          ],
        },
        {
          h2: 'Le tre tasse che ogni proprietario paga',
          bullets: [
            "Tassa annuale sugli immobili: 0,01%–0,45% del valore imponibile. Sconto del 5% se pagata integralmente entro il 30 aprile.",
            "Tassa annuale sui rifiuti: onere locale separato per la raccolta rifiuti. Da ~€30 a €250/anno secondo la localita'.",
            "Tassa di acquisizione: circa 3% del valore di acquisto o imponibile (il maggiore dei due). Nessebar: 2,6%.",
          ],
        },
        {
          h2: 'Sofia — aliquote e costi reali nel 2026',
          p: [
            "Sofia applica un'aliquota dello 0,275% (2026). Per un appartamento di 70 m² nel centro (Lozenets, Oborishte) con valore di mercato €180.000–220.000, il valore imponibile e' tipicamente €50.000–75.000. Tassa annuale: €138–206. Tassa rifiuti: circa €80–120/anno.",
            "Costo annuale totale (tassa + rifiuti): €220–330 per un appartamento premium centrale. A confronto: Praga ~€800–1.200/anno, Varsavia ~€500–900/anno per asset equivalenti.",
          ],
          blocks: [{ h3: 'Sofia: riferimento fiscale 2026', bullets: [
            "Aliquota tassa immobiliare: 0,275% del valore imponibile",
            "Tassa rifiuti: ~€80–120/anno (distretti centrali)",
            "Tassa di acquisizione: 3,0%",
            "Esempio: appartamento €180.000 → valore imponibile ~€55.000 → tassa ~€151 + rifiuti ~€100 = ~€251/anno",
          ]}],
        },
        {
          h2: 'Costa del Mar Nero: Nessebar, Sunny Beach, Sozopol, Sveti Vlas',
          p: [
            "Le proprieta' della costa ricadono sotto il Comune di Nessebar (per Sunny Beach, Sveti Vlas, Ravda) o il Comune di Sozopol — ciascuno fissa le proprie aliquote nell'intervallo 0,20%–0,25%. Con prezzi costieri in aumento di ~30% anno su anno nel 2025 (Green Life Development), i valori imponibili sono stati rivisti al rialzo.",
            "La quota annuale di manutenzione del complesso (6–18 EUR/m²/mese nei principali resort) e' un onere contrattuale privato, completamente separato dalla tassa municipale sugli immobili. Questa distinzione e' fondamentale per la modellazione dei costi.",
          ],
          blocks: [{
            h3: 'Comune di Nessebar (Sunny Beach, Sveti Vlas, Ravda): 2026',
            bullets: [
              "Aliquota tassa immobiliare: 0,22% del valore imponibile",
              "Tassa rifiuti: ~€80–150/anno (zone resort)",
              "Tassa di acquisizione: 2,6% — una delle piu' basse in Bulgaria",
              "Esempio: appartamento vista mare €120.000 → valore imponibile ~€30.000 → tassa ~€66 + rifiuti ~€100 = ~€166/anno",
              "IMPORTANTE: la quota di manutenzione del complesso (6–18 EUR/m²/mese) e' un costo contrattuale SEPARATO — non una tassa",
            ],
          }, {
            h3: 'Comune di Sozopol: 2026',
            bullets: [
              "Aliquota tassa immobiliare: 0,20%",
              "Tassa rifiuti: ~€80–130/anno",
              "Tassa di acquisizione: 3,0%",
            ],
          }],
        },
        {
          h2: 'Localita\' di montagna: Bansko, Pamporovo, Borovets',
          p: [
            "Le localita' sciistiche bulgare applicano alcune delle aliquote piu' basse del paese. Bansko: 0,15%–0,18%, Pamporovo (Comune di Smolyan): 0,15%, Borovets (Comune di Samokov): 0,17%.",
            "I valori imponibili nelle localita' di montagna sono notevolmente inferiori a quelli costieri. Uno studio da 50 m² a Bansko con valore di mercato €55.000–75.000 ha tipicamente un valore imponibile di €8.000–15.000. Tassa annuale: €12–27. Costo totale annuo (tassa + rifiuti): €50–120/anno.",
          ],
          blocks: [{
            h3: 'Bansko, Pamporovo, Borovets: riferimento fiscale 2026',
            bullets: [
              "Bansko: aliquota 0,15%–0,18% | valore imponibile ~€12.000 | tassa ~€18–22 | rifiuti ~€60 | TOTALE ~€78–82/anno",
              "Pamporovo: aliquota 0,15% | valore imponibile ~€9.000 | tassa ~€14 | rifiuti ~€50 | TOTALE ~€64/anno",
              "Borovets: aliquota 0,17% | valore imponibile ~€10.000 | tassa ~€17 | rifiuti ~€55 | TOTALE ~€72/anno",
            ],
          }],
        },
        {
          h2: 'Tassazione dei redditi da locazione nel 2026',
          p: [
            "Il reddito da locazione bulgaro e' soggetto all'imposta sul reddito delle persone fisiche al 10% forfettario dopo una detrazione standard del 10% per spese. In pratica: canone lordo × 0,90 × 10% = 9% effettivo del canone lordo.",
            "Esempio: €450/mese × 12 = €5.400 lordi annui. Base imponibile: €4.860. Imposta: €486/anno. Reddito netto dopo imposta: €4.914/anno.",
          ],
        },
        {
          h2: 'La nostra valutazione',
          p: [
            "La tassazione immobiliare bulgara e' genuinamente competitiva per gli standard UE. I costi annuali di mantenimento (tassa + rifiuti) su un immobile da €120.000–150.000 variano da €67/anno a Pamporovo a €200/anno a Sofia.",
            "Il costo piu' importante per gli investitori costieri e nei resort non e' la tassa municipale ma la quota privata di manutenzione del complesso. Un appartamento resort con una quota di 15 EUR/m²/mese costa piu' da mantenere annualmente di un appartamento a Sofia dove le tasse totali sono inferiori a €200.",
            "In European Gateway forniamo supporto completo per il calcolo fiscale e connettiamo i clienti con consulenti fiscali bulgari autorizzati.",
          ],
        },
      ],
    },

    de: {
      back: 'Zur Startseite',
      date: '21. Februar 2026',
      readTime: 'Lesezeit: ~12-14 Minuten',
      title: 'Immobiliensteuern in Bulgarien 2026: Vollständiger Leitfaden für Sofia, Burgas, Varna, Plovdiv, die Schwarzmeerküste und Bergresorts',
      subtitle: 'Jährliche Steuersätze, kommunale Abfallgebühren, Mieteinkommensteuer, Erwerbskosten und stadtspezifische Analyse — aktualisiert Februar 2026.',
      keyFactsTitle: 'Wichtige Fakten — Februar 2026',
      noteTitle: 'Haftungsausschluss',
      noteText: 'Steuersätze werden jährlich von jeder Gemeinde festgelegt und können unterjährig aktualisiert werden. Dieser Artikel spiegelt die ab Februar 2026 geltenden Sätze wider. Bitte überprüfen Sie die aktuellen Sätze stets bei Ihrer Gemeinde oder einem zugelassenen bulgarischen Steuerberater.',
      sourcesTitle: 'Quellen',
      photoCreditLabel: 'Artikelfoto:',
      photoCreditOn: 'auf',
      keyFacts: [
        'Bulgarische Jahresgrundsteuer gehört zu den niedrigsten in der EU: 0,01%–0,45% des kommunalen Einheitswerts — nicht des Marktwerts.',
        'Der kommunale Einheitswert entspricht typischerweise 20–40% des Marktpreises, was die effektiven Steuersätze extrem niedrig macht.',
        'Sofia: Jahresgrundsteuersatz 0,275% des Einheitswerts. Bei einer €150.000-Wohnung mit Einheitswert ~€45.000: ca. €124/Jahr.',
        'Schwarzmeerküste (Sunny Beach, Sozopol, Sveti Vlas): Sätze 0,20%–0,25% — Einheitswerte sind nach der Marktentwicklung 2022–2025 deutlich gestiegen.',
        'Bergresorts (Bansko, Pamporovo, Borovets): Sätze 0,15%–0,22% — zu den niedrigsten in Bulgarien.',
        'Mieteinnahmen werden mit pauschal 10% nach 10% Standardabzug besteuert — effektiver Satz 9% der Bruttomiete.',
        'Jährliche Abfallgebühr: separate kommunale Abgabe von €30–250/Jahr je nach Lage.',
        'Kapitalgewinne bei unter 3 Jahren Haltedauer: 10% auf den Gewinn. Über 3 Jahre: Befreiung für Hauptwohnsitz.',
      ],
      sections: [
        {
          h2: 'Wie die bulgarische Grundsteuer funktioniert — Grundlagen',
          p: [
            'Bulgarien wendet ein System an, das viele ausländische Käufer verwirrt: Die Jahresgrundsteuer wird nicht auf den Marktwert berechnet, sondern auf den kommunalen Einheitswert. Dieser wird durch eine Regierungsformel auf Basis von Bauart, Standortzone, Baujahr und Grundfläche ermittelt — und entspricht typischerweise 20–40% des tatsächlichen Marktpreises.',
            'In der Praxis: Eine €150.000-Wohnung in Sofia hat einen Einheitswert von ca. €40.000–55.000. Steuer bei 0,275% auf diesen Wert: ca. €110–150/Jahr. Die bulgarische Grundbesteuerung gehört genuinen zu den leichtesten in der gesamten Europäischen Union.',
          ],
        },
        {
          h2: 'Die drei Steuern, die jeder Eigentümer zahlt',
          bullets: [
            'Jahresgrundsteuer: 0,01%–0,45% des Einheitswerts. 5% Rabatt bei Vollzahlung vor dem 30. April.',
            'Jährliche Müllabfuhrgebühr: separate lokale Gebühr. Ca. €30–250/Jahr je nach Standort.',
            'Erwerbsteuer: einmalig ca. 3% des Kaufpreises oder Einheitswerts (der jeweils höhere). Nessebar: 2,6%.',
          ],
        },
        {
          h2: 'Schwarzmeerküste: Nessebar, Sunny Beach, Sozopol, Sveti Vlas',
          p: [
            'Küstenresort-Immobilien fallen unter die Gemeinde Nessebar (für Sunny Beach, Sveti Vlas, Ravda) oder die Gemeinde Sozopol — jede mit eigenen Sätzen von 0,20%–0,25%. Mit ~30% Jahrespreissteigerung 2025 (Green Life Development) steigen die Einheitswerte entsprechend.',
            'Die jährliche Komplexinstandhaltungsgebühr (6–18 EUR/m²/Monat in großen Resortkomplexen) ist eine private Vertragsgebühr an die Verwaltungsgesellschaft — völlig getrennt von der kommunalen Grundsteuer. Diese Unterscheidung ist für die Kostenmodellierung entscheidend.',
          ],
          blocks: [{
            h3: 'Gemeinde Nessebar (Sunny Beach, Sveti Vlas, Ravda): 2026',
            bullets: [
              'Jahresgrundsteuersatz: 0,22% des Einheitswerts',
              'Abfallgebühr: ~€80–150/Jahr (Resortgebiete)',
              'Erwerbsteuer: 2,6% — eine der niedrigsten in Bulgarien',
              'Beispiel: €120.000 Meerblickwohnung → Einheitswert ~€30.000 → Steuer ~€66 + Müll ~€100 = ~€166/Jahr',
              'WICHTIG: Komplexinstandhaltungsgebühr (6–18 EUR/m²/Monat) ist eine SEPARATE private Vertragsgebühr — keine Steuer',
            ],
          }],
        },
        {
          h2: 'Bergresorts: Bansko, Pamporovo, Borovets',
          p: [
            'Bulgariens Skiresorts wenden einige der niedrigsten Grundsteuersätze des Landes an. Bansko: 0,15%–0,18%, Pamporovo (Gemeinde Smolyan): 0,15%, Borovets (Gemeinde Samokov): 0,17%.',
            'Einheitswerte in Bergresorts sind deutlich niedriger als an der Küste. Ein 50-m²-Studio in Bansko mit Marktwert €55.000–75.000 hat typischerweise einen Einheitswert von €8.000–15.000. Jahresgesamtkosten (Steuer + Müll): €50–120/Jahr.',
          ],
          blocks: [{
            h3: 'Bansko, Pamporovo, Borovets: Steuerreferenz 2026',
            bullets: [
              'Bansko: Satz 0,15%–0,18% | Einheitswert ~€12.000 | Steuer ~€18–22 | Müll ~€60 | GESAMT ~€78–82/Jahr',
              'Pamporovo: Satz 0,15% | Einheitswert ~€9.000 | Steuer ~€14 | Müll ~€50 | GESAMT ~€64/Jahr',
              'Borovets: Satz 0,17% | Einheitswert ~€10.000 | Steuer ~€17 | Müll ~€55 | GESAMT ~€72/Jahr',
            ],
          }],
        },
        {
          h2: 'Unsere Einschätzung',
          p: [
            'Bulgarische Grundsteuern sind genuinen wettbewerbsfähig nach EU-Standards. Jahresgesamthaltekosten (Steuer + Müll) auf eine €120.000–150.000 Immobilie reichen von €67/Jahr in Pamporovo bis €200/Jahr in Sofia.',
            'Die wichtigste Kostengröße für Küsten- und Resortkäufer ist nicht die Gemeindesteuer — sondern die private Komplexinstandhaltungsgebühr. Ein Resort-Apartment mit 15 EUR/m²/Monat kostet mehr pro Jahr als eine Sofioter Wohnung mit Gesamtsteuern unter €200.',
            'Bei European Gateway bieten wir vollständige Steuerberechnungsunterstützung und vernetzen Kunden mit zugelassenen bulgarischen Steuerberatern.',
          ],
        },
      ],
    },

    bg: {
      back: 'Към началото',
      date: '21 февруари 2026',
      readTime: 'Време за четене: ~12-14 минути',
      title: 'Данъци върху имотите в България 2026: Пълно ръководство за София, Бургас, Варна, Пловдив, Черноморието и планинските курорти',
      subtitle: 'Годишни данъчни ставки, такси за смет, данък върху наемен доход, разходи при придобиване и анализ по градове — актуализирано февруари 2026.',
      keyFactsTitle: 'Ключови данни — Февруари 2026',
      noteTitle: 'Отказ от отговорност',
      noteText: 'Данъчните ставки се определят ежегодно от всяка община и могат да бъдат актуализирани в рамките на годината. Тази статия отразява ставките в сила от февруари 2026. Винаги проверявайте актуалните ставки с вашата община или лицензиран данъчен консултант преди финансови решения.',
      sourcesTitle: 'Източници',
      photoCreditLabel: 'Снимка към статията:',
      photoCreditOn: 'в',
      keyFacts: [
        'Годишният данък върху имотите в България е сред най-ниските в ЕС: 0,01%–0,45% от данъчната оценка — не от пазарната стойност.',
        'Данъчната оценка е типично 20–40% от пазарната цена, което прави ефективните данъчни ставки изключително ниски.',
        'София: ставка 0,275% от данъчната оценка. За апартамент от €150 000 с оценка ~€45 000: около €124/год.',
        'Черноморско крайбрежие (Слънчев бряг, Созопол, Свети Влас): ставки 0,20%–0,25% — оценките нарастват след пазарното поскъпване 2022–2025.',
        'Планински курорти (Банско, Пампорово, Боровец): ставки 0,15%–0,22% — сред най-ниските в България.',
        'Наемният доход се облага с 10% фиксирано след 10% нормативно признати разходи — ефективна ставка 9% от брутния наем.',
        'Годишна такса за смет: отделна общинска такса от €30–250/год. според локацията.',
        'Капиталова печалба при продажба под 3 години: 10% върху печалбата. Над 3 години: освобождаване за основно жилище.',
      ],
      sections: [
        {
          h2: 'Как работи данъкът върху имотите в България — основи',
          p: [
            'България прилага система, която обърква много чуждестранни купувачи: годишният данък върху недвижимите имоти се изчислява не върху пазарната стойност, а върху данъчната оценка (определена по правителствена формула, базирана на вид строителство, зона, година на строеж и площ). Тази оценка е типично 20–40% от реалната пазарна цена.',
            'На практика: апартамент за €150 000 в София ще има данъчна оценка от около €40 000–55 000. Данък от 0,275% върху тази оценка е приблизително €110–150 годишно. Данъчното облагане на имоти в България е едно от най-леките в целия Европейски съюз.',
          ],
        },
        {
          h2: 'Трите данъка, които всеки собственик плаща',
          bullets: [
            'Годишен данък върху недвижимите имоти: 0,01%–0,45% от данъчната оценка. 5% отстъпка при плащане изцяло до 30 април.',
            'Годишна такса за смет: отделна местна такса за събиране на отпадъци. От ~€30 до €250/год.',
            'Данък при придобиване: еднократно около 3% от покупната цена или данъчната оценка (по-голямата). Несебър: 2,6%.',
          ],
        },
        {
          h2: 'Черноморско крайбрежие: Несебър, Слънчев бряг, Созопол, Свети Влас',
          p: [
            'Имотите в курортната зона попадат под Община Несебър (за Слънчев бряг, Свети Влас, Равда) или Община Созопол — всяка определя собствени ставки в диапазона 0,20%–0,25%. При ръст на цените с ~30% на годишна база през 2025 г. данъчните оценки се актуализират нагоре.',
            'Годишната такса за поддръжка на комплекса (6–18 EUR/м²/месец) е частна договорна такса към управляващата компания — изцяло отделна от общинския данък. Това разграничение е критично за правилното моделиране на разходите.',
          ],
          blocks: [{
            h3: 'Община Несебър (Слънчев бряг, Свети Влас, Равда): 2026',
            bullets: [
              'Годишна данъчна ставка: 0,22% от данъчната оценка',
              'Такса смет: ~€80–150/год. (курортни зони)',
              'Данък при придобиване: 2,6% — един от най-ниските в България',
              'Пример: апартамент с морска гледка €120 000 → оценка ~€30 000 → данък ~€66 + смет ~€100 = ~€166/год.',
              'ВАЖНО: таксата за поддръжка на комплекса (6–18 EUR/м²/мес) е ОТДЕЛЕН частен договорен разход — не е данък',
            ],
          }, {
            h3: 'Община Созопол: 2026',
            bullets: [
              'Годишна данъчна ставка: 0,20%',
              'Такса смет: ~€80–130/год.',
              'Данък при придобиване: 3,0%',
            ],
          }],
        },
        {
          h2: 'Планински курорти: Банско, Пампорово, Боровец',
          p: [
            'Ски курортите в България прилагат едни от най-ниските ставки в страната. Банско: 0,15%–0,18%, Пампорово (Община Смолян): 0,15%, Боровец (Община Самоков): 0,17%.',
            'Данъчните оценки на планинските имоти са значително по-ниски от крайбрежните. Студио от 50 м² в Банско с пазарна стойност €55 000–75 000 има типично оценка €8 000–15 000. Годишна данъчна + такса смет: €50–120/год.',
          ],
          blocks: [{
            h3: 'Банско, Пампорово, Боровец: данъчен справочник 2026',
            bullets: [
              'Банско: ставка 0,15%–0,18% | оценка ~€12 000 | данък ~€18–22 | смет ~€60 | ОБЩО ~€78–82/год.',
              'Пампорово: ставка 0,15% | оценка ~€9 000 | данък ~€14 | смет ~€50 | ОБЩО ~€64/год.',
              'Боровец: ставка 0,17% | оценка ~€10 000 | данък ~€17 | смет ~€55 | ОБЩО ~€72/год.',
            ],
          }],
        },
        {
          h2: 'Нашата оценка',
          p: [
            'Данъчното облагане на имоти в България е реално конкурентно по стандартите на ЕС. Годишните разходи за притежание (данък + смет) за имот от €120 000–150 000 варират от €67/год. в Пампорово до €200/год. в София.',
            'Най-важният разход за крайбрежните инвеститори не е общинският данък — а частната такса за поддръжка на комплекса. Апартамент с такса от 15 EUR/м²/месец струва повече за поддръжка годишно от апартамент в София, където общите данъци са под €200.',
            'В European Gateway предоставяме пълна подкрепа при данъчните изчисления и свързваме клиентите с лицензирани данъчни консултанти в България.',
          ],
        },
      ],
    },

    ru: {
      back: 'На главную',
      date: '21 февраля 2026',
      readTime: 'Время чтения: ~12-14 минут',
      title: 'Налоги на недвижимость в Болгарии 2026: Полное руководство для Софии, Бургаса, Варны, Пловдива, Черноморского побережья и горнолыжных курортов',
      subtitle: 'Ставки ежегодного налога, муниципальные сборы за вывоз мусора, налог на арендный доход, расходы при покупке и анализ по городам — обновлено февраль 2026.',
      keyFactsTitle: 'Ключевые данные — Февраль 2026',
      noteTitle: 'Дисклеймер',
      noteText: 'Налоговые ставки устанавливаются ежегодно каждым муниципалитетом и могут обновляться в течение года. Данная статья отражает ставки, действующие по состоянию на февраль 2026. Всегда уточняйте актуальные ставки в своём муниципалитете или у лицензированного болгарского налогового консультанта.',
      sourcesTitle: 'Источники',
      photoCreditLabel: 'Фото к статье:',
      photoCreditOn: 'на',
      keyFacts: [
        'Ежегодный налог на недвижимость в Болгарии — один из самых низких в ЕС: 0,01%–0,45% от муниципальной кадастровой оценки, а не от рыночной стоимости.',
        'Кадастровая оценка составляет типично 20–40% от рыночной цены, что делает эффективные налоговые ставки исключительно низкими.',
        'София: ставка 0,275% от кадастровой оценки. Для квартиры €150 000 с оценкой ~€45 000: около €124/год.',
        'Черноморское побережье (Солнечный Берег, Созопол, Свети Влас): ставки 0,20%–0,25% — оценки растут вслед за рыночным ростом 2022–2025.',
        'Горнолыжные курорты (Банско, Пампорово, Боровец): ставки 0,15%–0,22% — среди самых низких в Болгарии.',
        'Арендный доход облагается по ставке 10% после стандартного вычета 10% — эффективная ставка 9% от брутто-аренды.',
        'Ежегодный сбор за вывоз мусора: отдельный муниципальный сбор €30–250/год в зависимости от локации.',
        'Налог на прирост капитала при продаже до 3 лет: 10% от прибыли. Свыше 3 лет: освобождение для основного жилья.',
      ],
      sections: [
        {
          h2: 'Как работает налог на недвижимость в Болгарии — основы',
          p: [
            'В Болгарии действует система, которая нередко вводит в заблуждение иностранных покупателей: ежегодный налог на недвижимость рассчитывается не от рыночной стоимости, а от муниципальной кадастровой оценки. Эта оценка определяется по государственной формуле на основе типа строения, зоны расположения, года постройки и площади — и составляет типично 20–40% от реальной рыночной цены.',
            'На практике: квартира стоимостью €150 000 в Софии будет иметь кадастровую оценку около €40 000–55 000. Налог по ставке 0,275% на эту оценку составит примерно €110–150 в год. Налогообложение недвижимости в Болгарии — одно из самых щадящих во всём Европейском союзе.',
          ],
        },
        {
          h2: 'Три налога, которые платит каждый собственник',
          bullets: [
            'Ежегодный налог на недвижимость: 0,01%–0,45% от кадастровой оценки. Скидка 5% при уплате в полном объёме до 30 апреля.',
            'Ежегодный сбор за вывоз мусора: отдельный местный сбор. От ~€30 до €250/год в зависимости от локации.',
            'Налог при приобретении: единовременно около 3% от цены покупки или кадастровой оценки (большей из двух). Несебр: 2,6%.',
          ],
        },
        {
          h2: 'Черноморское побережье: Несебр, Солнечный Берег, Созопол, Свети Влас',
          p: [
            'Курортные объекты на побережье подпадают под юрисдикцию муниципалитета Несебр (для Солнечного Берега, Свети Власа, Равды) или муниципалитета Созопол — каждый устанавливает свои ставки в диапазоне 0,20%–0,25%. При росте цен на ~30% в год в 2025 году (Green Life Development) кадастровые оценки пересматриваются в сторону увеличения.',
            'Ежегодный взнос на обслуживание комплекса (6–18 EUR/м²/мес в крупных курортных комплексах) — это частный договорной платёж управляющей компании, полностью отдельный от муниципального налога. Это разграничение принципиально важно для корректного моделирования расходов на владение.',
          ],
          blocks: [{
            h3: 'Муниципалитет Несебр (Солнечный Берег, Свети Влас, Равда): 2026',
            bullets: [
              'Годовая ставка налога: 0,22% от кадастровой оценки',
              'Сбор за вывоз мусора: ~€80–150/год (курортные зоны)',
              'Налог при приобретении: 2,6% — один из самых низких в Болгарии',
              'Пример: апартамент с видом на море €120 000 → оценка ~€30 000 → налог ~€66 + мусор ~€100 = ~€166/год',
              'ВАЖНО: взнос на обслуживание комплекса (6–18 EUR/м²/мес) — ОТДЕЛЬНЫЙ частный договорной расход, не налог',
            ],
          }, {
            h3: 'Муниципалитет Созопол: 2026',
            bullets: [
              'Годовая ставка налога: 0,20%',
              'Сбор за мусор: ~€80–130/год',
              'Налог при приобретении: 3,0%',
            ],
          }],
        },
        {
          h2: 'Горнолыжные курорты: Банско, Пампорово, Боровец',
          p: [
            'Болгарские горнолыжные курорты применяют одни из самых низких ставок в стране. Банско: 0,15%–0,18%, Пампорово (муниципалитет Смолян): 0,15%, Боровец (муниципалитет Самоков): 0,17%.',
            'Кадастровые оценки на горнолыжных курортах значительно ниже прибрежных. Студио 50 м² в Банско с рыночной стоимостью €55 000–75 000 имеет типовую оценку €8 000–15 000. Годовые совокупные расходы (налог + мусор): €50–120/год.',
          ],
          blocks: [{
            h3: 'Банско, Пампорово, Боровец: налоговый справочник 2026',
            bullets: [
              'Банско: ставка 0,15%–0,18% | оценка ~€12 000 | налог ~€18–22 | мусор ~€60 | ИТОГО ~€78–82/год',
              'Пампорово: ставка 0,15% | оценка ~€9 000 | налог ~€14 | мусор ~€50 | ИТОГО ~€64/год',
              'Боровец: ставка 0,17% | оценка ~€10 000 | налог ~€17 | мусор ~€55 | ИТОГО ~€72/год',
            ],
          }],
        },
        {
          h2: 'Налог на арендный доход — что платят арендодатели в 2026',
          p: [
            'Доход от аренды болгарской недвижимости облагается налогом на доходы физических лиц (ДДФЛ) по единой ставке 10% после стандартного вычета 10% на расходы. На практике: брутто-аренда × 0,90 × 10% = эффективно 9% от брутто-аренды.',
            'Пример: €450/мес × 12 = €5 400 годовых брутто. Налогооблагаемая база: €4 860. Налог: €486/год. Чистый арендный доход после налога: €4 914/год.',
          ],
        },
        {
          h2: 'Наша оценка',
          p: [
            'Налогообложение недвижимости в Болгарии реально конкурентоспособно по стандартам ЕС. Годовые совокупные расходы на владение (налог + мусор) для объекта стоимостью €120 000–150 000 варьируются от €67/год в Пампорово до €200/год в Софии.',
            'Ключевым расходом для инвесторов в прибрежные и курортные объекты является не муниципальный налог, а частный взнос на обслуживание комплекса. Курортный апартамент с взносом 15 EUR/м²/мес обходится дороже в год, чем квартира в Софии, где совокупные налоги не превышают €200.',
            'В European Gateway мы обеспечиваем полную поддержку при расчёте налогов и связываем клиентов с лицензированными болгарскими налоговыми консультантами.',
          ],
        },
      ],
    },
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ── Hero ── */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />{t.back}
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" />{t.date}</span>
            <span className="inline-flex items-center gap-2"><BarChart3 className="w-4 h-4" />{t.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{t.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{t.subtitle}</p>

          {/* Cover image */}
          <div className="rounded-xl overflow-hidden border bg-background">
            <img
              src={cover.image_url}
              alt="Property taxes Bulgaria"
              className="w-full h-[220px] md:h-[320px] object-cover"
              loading="lazy"
            />
            <div className="px-4 py-3 text-xs text-muted-foreground flex flex-wrap items-center gap-2">
              <span>{t.photoCreditLabel}</span>
              <a href={cover.unsplash_author_url} target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1">
                {cover.unsplash_author_name} <ExternalLink className="w-3 h-3" />
              </a>
              <span>{t.photoCreditOn}</span>
              <a href={cover.unsplash_photo_url} target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1">
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
            <Calculator className="w-5 h-5 text-primary" />{t.keyFactsTitle}
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
            <AlertTriangle className="w-5 h-5 text-primary" />{t.noteTitle}
          </h3>
          <p className="text-sm text-muted-foreground">{t.noteText}</p>
        </div>

        {/* Sources */}
        <div className="border rounded-xl p-6 mb-10 bg-background">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-primary" />{t.sourcesTitle}
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

        {/* Article body */}
        <article className="space-y-10">
          {t.sections.map((s: any, idx: number) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold leading-tight">{s.h2}</h2>
              {s.p?.map((p: string, pi: number) => (
                <p key={pi} className="text-base leading-7 text-foreground/90">{p}</p>
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
                    <Building className="w-5 h-5 text-primary" />{b.h3}
                  </h3>
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

        {/* CTA */}
        <div className="mt-16 rounded-xl border bg-primary/5 p-6 flex items-start gap-4">
          <Euro className="w-6 h-6 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold mb-1">European Gateway</p>
            <p className="text-xs text-muted-foreground">
              {lang === 'ru' ? 'Профессиональное агентство недвижимости и юридическое сопровождение в Болгарии. Расчёт налогов, due diligence, оформление сделок, регистрация компаний, переводы и легализация.'
              : lang === 'bg' ? 'Професионална агенция за недвижими имоти и правна поддръжка в България. Данъчни изчисления, due diligence, сделки, регистрация на фирми, преводи и легализация.'
              : lang === 'it' ? "Agenzia immobiliare professionale e supporto legale in Bulgaria. Calcolo fiscale, due diligence, transazioni, costituzione societaria, traduzioni e legalizzazione."
              : lang === 'de' ? 'Professionelle Immobilienagentur und Rechtsbetreuung in Bulgarien. Steuerberechnung, Due Diligence, Transaktionen, Firmengründung, Übersetzungen und Legalisierung.'
              : 'Professional real estate advisory and legal support in Bulgaria. Tax calculations, due diligence, transactions, company registration, certified translations and legalization.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BulgariaPropertyTaxesArticle;