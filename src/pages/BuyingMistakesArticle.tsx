import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BuyingMistakesArticle = () => {
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

  const t: Record<string, any> = {
    en: {
      back: 'Back to Home',
      date: 'February 21, 2026',
      title: 'Buying Property in Bulgaria in 2026: 7 Mistakes That Cost Buyers Tens of Thousands of Euros',
      intro: [
        "Bulgaria's real estate market remains one of the most affordable in the EU. Transaction values on the coast grew 23% year-on-year in Q2 2025, and NSI data shows nationwide prices rose 15.4% in Q3 2025 - ranking Bulgaria 3rd in the EU for price growth. Euro adoption on January 1, 2026 has further accelerated demand from eurozone buyers.",
        'But affordability creates a dangerous illusion of simplicity.',
        'Every year, buyers lose money not due to crises or market downturns, but because of typical mistakes - often invisible during the property selection stage. Here are the seven most costly ones.',
      ],
      mistakes: [
        {
          title: 'Mistake #1. Focusing Only on Low Price',
          body: [
            'If a property is noticeably cheaper than comparable ones - there is almost always a reason. With coastal holiday property prices rising ~30% year-on-year in 2025 (Green Life Development, Mar 2025), a significantly below-market listing is a warning signal, not a bargain.',
            'Most often the reason is: documentation problems, high annual maintenance fees (6-18 EUR/m²/month in resort complexes), low liquidity, poor location, or outdated construction.',
          ],
          bold: 'A cheap purchase often turns out to be the most expensive in the long run.',
        },
        {
          title: 'Mistake #2. Not Calculating the Total Cost of Ownership',
          body: [
            'The listing price is not the final budget. Buyers additionally pay: purchase tax (around 3% of declared value), notary fees, government charges, registration, sometimes agency commission, annual property tax, and maintenance fees in resort complexes.',
            'In Sunny Beach and Sveti Vlas complexes, annual maintenance fees alone can reach 15-18 EUR/m²/month - meaning a 60m² apartment costs up to 12,960 EUR per year in fixed costs before any rental income.',
          ],
          bold: 'On average, additional one-time costs amount to 4-6% of the property value. Annual running costs vary enormously by complex and location.',
        },
        {
          title: 'Mistake #3. Buying Without Legal Due Diligence',
          body: [
            'Even if the property looks perfect - verification is mandatory. You need to confirm: the seller actually owns the property, there are no encumbrances or debts on the title, the building has Act 16 (permission to use), construction is legal, and land status is correctly documented.',
            "In historic zones like Nessebar (UNESCO World Heritage Site), there may be additional renovation restrictions that fundamentally affect the property's usability and resale value.",
          ],
          bold: 'Skipping legal due diligence is one of the most expensive mistakes a buyer can make in Bulgaria.',
        },
        {
          title: 'Mistake #4. Choosing with Your Heart, Not Your Goals',
          body: [
            'Before searching, answer a simple question: why do you need this property? For living full-time, for seasonal vacation use, as a rental investment, or as a capital-preservation asset post-euro adoption? Each objective points to a different location, property type, and management model.',
            'Problems arise when buyers try to combine everything at once - and end up with a property that does none of those things well.',
          ],
          bold: 'A clear goal is the main filter for the right choice.',
        },
        {
          title: 'Mistake #5. Ignoring Liquidity',
          body: [
            "A good property isn't just about comfort today - it's about being able to sell it profitably tomorrow. SeaPropertiesBG data (Oct 2025) shows that first-line sea-view units in established complexes sell in weeks; inland units in oversupplied complexes in the same resort can take 12+ months.",
            'With Burgas port modernization completed in January 2025 and euro adoption from January 2026, locations tied to these structural drivers have meaningfully different liquidity profiles than pure seasonal resorts.',
          ],
          bold: 'Always assess how quickly this specific unit type in this specific complex sells in a normal market before purchasing.',
        },
        {
          title: 'Mistake #6. Trying to Handle the Deal Alone',
          body: [
            "At first glance, the process seems straightforward - especially if the buyer has experience in another country. But Bulgarian specifics include: the role of notaries in the transaction structure, the significance of Act 16 vs earlier completion certificates, specific bank requirements for foreign buyers, and tax nuances for non-resident owners.",
            "Post-euro adoption, additional legal and banking procedures apply for euro-denominated transactions that didn't exist before January 2026.",
          ],
          bold: 'Professional guidance is not an additional expense - it is a capital protection tool.',
        },
        {
          title: 'Mistake #7. Waiting for the "Perfect Moment"',
          body: [
            'Some buyers postpone decisions waiting for price drops or better conditions. NSI Q3 2025 data shows Bulgaria ranked 3rd in the EU for housing price growth at +15.4% year-on-year. Investropa\'s base-case forecast projects 45% cumulative appreciation over 5 years (7.7% average annual).',
            'The buyers who waited for the "right moment" through 2023-2025 have already missed 25-30% appreciation in the most active coastal markets.',
          ],
          bold: "Quality properties rarely depreciate significantly. It's far more important to choose the right property than to try to guess the perfect entry moment.",
        },
      ],
      principlesTitle: 'What Really Matters When Buying Property in Bulgaria',
      principlesIntro: 'Based on professional experience, a safe purchase is almost always built on three principles:',
      principles: ['Clear purchase goal', 'Legal due diligence', 'Understanding the total cost of ownership'],
      principlesOutro: 'And, of course, a calm, rational choice without rushing.',
      conclusionTitle: 'Conclusion',
      conclusion: [
        'The Bulgarian market remains attractive for both living and investment - and euro adoption from January 2026 has made it more accessible and lower-risk for eurozone buyers than at any point in the past decade.',
        "If you're considering buying property in Bulgaria and want to understand which areas are truly promising, where not to overpay, which properties to avoid, and how to safely conduct a deal - start with a professional consultation.",
      ],
      bold_conclusion: 'This saves not only money but also months of independent searching.',
      cta: 'Contact us in any convenient way - and we will help you find a solution that matches your goals.',
      cta_button: 'Contact Us',
      ready: 'Ready to get started?',
      sources:
        'Sources: NSI Bulgaria Housing Price Statistics Q3 2025 | Investropa Bulgaria Forecasts 2026 | Green Life Development Market Report Mar 2025 | SeaPropertiesBG Deep Dive Oct 2025 | Eurostat House Price Index Q3 2025',
    },

    it: {
      back: 'Torna alla home',
      date: '21 febbraio 2026',
      title: 'Acquistare immobili in Bulgaria nel 2026: 7 errori che costano ai compratori decine di migliaia di euro',
      intro: [
        "Il mercato immobiliare bulgaro rimane uno dei piu' accessibili nell'UE. I valori delle transazioni sulla costa sono cresciuti del 23% su base annua nel Q2 2025, e i dati NSI mostrano prezzi nazionali in aumento del 15,4% nel Q3 2025. L'adozione dell'euro il 1° gennaio 2026 ha ulteriormente accelerato la domanda degli acquirenti della zona euro.",
        "Ma l'accessibilita' crea una pericolosa illusione di semplicita'.",
        "Ogni anno, gli acquirenti perdono denaro non a causa di crisi o ribassi di mercato, ma a causa di errori tipici - spesso invisibili nella fase di selezione dell'immobile. Ecco i sette piu' costosi.",
      ],
      mistakes: [
        {
          title: 'Errore #1. Concentrarsi solo sul prezzo basso',
          body: [
            "Se un immobile e' notevolmente piu' economico rispetto ad analoghi - c'e' quasi sempre una ragione. Con i prezzi degli immobili vacanza costieri in aumento di circa il 30% su base annua nel 2025, un annuncio sotto il mercato e' un segnale d'allarme, non un affare.",
            "La ragione piu' comune: problemi di documentazione, alte spese condominiali annuali (6-18 EUR/m²/mese nei complessi resort), bassa liquidita', posizione sfavorevole o costruzione obsoleta.",
          ],
          bold: "Un acquisto economico spesso si rivela il piu' costoso nel lungo periodo.",
        },
        {
          title: "Errore #2. Non calcolare il costo totale di proprieta'",
          body: [
            "Il prezzo in annuncio non e' il budget finale. Gli acquirenti pagano inoltre: imposta di acquisto (circa 3%), spese notarili, oneri governativi, registrazione, a volte commissione d'agenzia, imposta annuale sulla proprieta' e spese di manutenzione nei complessi resort.",
            "Nei complessi di Sunny Beach e Sveti Vlas, le sole spese condominiali possono raggiungere 15-18 EUR/m²/mese - un appartamento di 60m² costa fino a 12.960 EUR all'anno in costi fissi prima di qualsiasi reddito da locazione.",
          ],
          bold: "In media, i costi aggiuntivi una tantum ammontano al 4-6% del valore dell'immobile. I costi annuali variano enormemente per complesso e localita'.",
        },
        {
          title: 'Errore #3. Acquistare senza due diligence legale',
          body: [
            "Anche se l'immobile sembra perfetto - la verifica e' obbligatoria. E' necessario confermare: il venditore possiede effettivamente l'immobile, non ci sono gravami o debiti, l'edificio ha l'Act 16 (permesso di utilizzo), la costruzione e' legale e lo stato del terreno e' correttamente documentato.",
            "Nelle zone storiche come Nessebar (Patrimonio Mondiale UNESCO), potrebbero esserci restrizioni alla ristrutturazione che influenzano fondamentalmente l'usabilita' e il valore di rivendita.",
          ],
          bold: "Saltare la due diligence legale e' uno degli errori piu' costosi in Bulgaria.",
        },
        {
          title: 'Errore #4. Scegliere con il cuore, non con gli obiettivi',
          body: [
            "Prima di cercare, rispondete: perche' avete bisogno di questo immobile? Per viverci a tempo pieno, per uso vacanziero, come investimento in affitto o come asset post-adozione euro? Ciascun obiettivo indica una localita', un tipo di immobile e un modello di gestione diversi.",
            "I problemi sorgono quando gli acquirenti cercano di combinare tutto - e finiscono con un immobile che non soddisfa nessuno scopo adeguatamente.",
          ],
          bold: "Un obiettivo chiaro e' il filtro principale per la scelta giusta.",
        },
        {
          title: "Errore #5. Ignorare la liquidita'",
          body: [
            "Un buon immobile riguarda anche la possibilita' di venderlo proficuamente domani. I dati SeaPropertiesBG (ott. 2025) mostrano che le unita' con vista mare in prima linea si vendono in settimane; le unita' nell'entroterra in complessi con eccesso di offerta possono richiedere 12+ mesi.",
            "Le localita' legate alla modernizzazione del porto di Burgas (gennaio 2025) e all'adozione dell'euro hanno profili di liquidita' significativamente diversi rispetto ai resort puramente stagionali.",
          ],
          bold: "Valutate sempre la velocita' di vendita di questo tipo di unita' in questo complesso specifico prima di acquistare.",
        },
        {
          title: 'Errore #6. Cercare di gestire la trattativa da soli',
          body: [
            "Le specificita' bulgare includono: il ruolo dei notai nella struttura della transazione, il significato dell'Act 16, i requisiti delle banche per acquirenti stranieri e le nuances fiscali per proprietari non residenti.",
            "Post-adozione euro, si applicano procedure legali e bancarie aggiuntive per le transazioni in euro che non esistevano prima del gennaio 2026.",
          ],
          bold: "La guida professionale non e' una spesa aggiuntiva - e' uno strumento di protezione del capitale.",
        },
        {
          title: 'Errore #7. Aspettare il "momento perfetto"',
          body: [
            "I dati NSI Q3 2025 mostrano la Bulgaria al 3° posto nell'UE per crescita dei prezzi abitativi con +15,4% annuo. La previsione base di Investropa proietta il 45% di rivalutazione cumulativa in 5 anni (7,7% medio annuo).",
            "Gli acquirenti che hanno aspettato il 'momento giusto' nel 2023-2025 hanno gia' perso il 25-30% di rivalutazione nei mercati costieri piu' attivi.",
          ],
          bold: "Gli immobili di qualita' raramente si svalutano significativamente. E' molto piu' importante scegliere l'immobile giusto che indovinare il momento perfetto.",
        },
      ],
      principlesTitle: 'Cosa conta davvero quando si acquista un immobile in Bulgaria',
      principlesIntro: "Sulla base dell'esperienza professionale, un acquisto sicuro si basa su tre principi:",
      principles: ['Obiettivo di acquisto chiaro', 'Due diligence legale', "Comprensione del costo totale di proprieta'"],
      principlesOutro: 'E, naturalmente, una scelta calma e razionale senza fretta.',
      conclusionTitle: 'Conclusione',
      conclusion: [
        "Il mercato bulgaro rimane attraente sia per vivere che per investire - e l'adozione dell'euro da gennaio 2026 lo ha reso piu' accessibile per gli acquirenti della zona euro.",
        "Se state considerando l'acquisto in Bulgaria, ha senso iniziare con una consulenza professionale per capire quali aree sono promettenti, dove non spendere troppo e come condurre un'operazione in sicurezza.",
      ],
      bold_conclusion: 'Questo fa risparmiare non solo denaro, ma anche mesi di ricerche indipendenti.',
      cta: "Contattateci nel modo piu' conveniente - e vi aiuteremo a trovare la soluzione adatta ai vostri obiettivi.",
      cta_button: 'Contattaci',
      ready: 'Pronti a iniziare?',
      sources:
        'Fonti: NSI Bulgaria Q3 2025 | Investropa Previsioni 2026 | Green Life Development mar. 2025 | SeaPropertiesBG ott. 2025 | Eurostat Q3 2025',
    },

    de: {
      back: 'Zur Startseite',
      date: '21. Februar 2026',
      title: 'Immobilienkauf in Bulgarien 2026: 7 Fehler, die Käufer Zehntausende Euro kosten',
      intro: [
        'Bulgariens Immobilienmarkt bleibt einer der erschwinglichsten in der EU. Transaktionswerte an der Küste wuchsen im Q2 2025 um 23% im Jahresvergleich, NSI-Daten zeigen +15,4% landesweiten Preisanstieg im Q3 2025 - Platz 3 in der EU. Die Euro-Einführung am 1. Januar 2026 hat die Nachfrage weiter beschleunigt.',
        'Aber Erschwinglichkeit schafft eine gefährliche Illusion der Einfachheit.',
        'Jedes Jahr verlieren Käufer Geld nicht aufgrund von Krisen, sondern aufgrund typischer Fehler - oft unsichtbar während der Objektauswahl. Hier sind die sieben kostspieligsten.',
      ],
      mistakes: [
        {
          title: 'Fehler #1. Nur auf den niedrigen Preis achten',
          body: [
            'Wenn eine Immobilie deutlich günstiger als vergleichbare ist - gibt es fast immer einen Grund. Da Ferienimmobilienpreise an der Küste 2025 um ~30% gestiegen sind (Green Life Development, März 2025), ist ein Angebot deutlich unter Marktniveau ein Warnsignal.',
            'Die häufigsten Gründe: Dokumentationsprobleme, hohe Jahresgebühren (6-18 EUR/m²/Monat in Resort-Komplexen), geringe Liquidität, schlechte Lage oder veraltete Bausubstanz.',
          ],
          bold: 'Ein günstiger Kauf entpuppt sich langfristig oft als der teuerste.',
        },
        {
          title: 'Fehler #2. Die Gesamtbesitzkosten nicht berechnen',
          body: [
            'Der Angebotspreis ist nicht das endgültige Budget. Käufer zahlen zusätzlich: Kaufsteuer (ca. 3%), Notargebühren, Staatsgebühren, Registrierung, manchmal Maklercourtage, jährliche Grundsteuer und Instandhaltungsgebühren in Resort-Komplexen.',
            'In Sunny Beach und Sveti Vlas können Jahresinstandhaltungsgebühren 15-18 EUR/m²/Monat erreichen - eine 60m² Wohnung kostet bis zu 12.960 EUR pro Jahr an Fixkosten vor jeglichen Mieteinnahmen.',
          ],
          bold: 'Einmalige Zusatzkosten belaufen sich im Schnitt auf 4-6% des Immobilienwerts. Laufende Jahreskosten variieren enorm je nach Komplex.',
        },
        {
          title: 'Fehler #3. Kaufen ohne rechtliche Due Diligence',
          body: [
            'Auch wenn die Immobilie perfekt aussieht - eine Überprüfung ist Pflicht. Sicherstellen: Der Verkäufer besitzt die Immobilie, keine Belastungen oder Schulden, das Gebäude hat Act 16, die Bauweise ist legal und der Grundstücksstatus korrekt dokumentiert.',
            'In historischen Zonen wie Nessebar (UNESCO-Weltkulturerbe) kann es Renovierungsbeschränkungen geben, die die Nutzbarkeit und den Wiederverkaufswert grundlegend beeinflussen.',
          ],
          bold: 'Die rechtliche Due Diligence zu überspringen ist einer der teuersten Fehler in Bulgarien.',
        },
        {
          title: 'Fehler #4. Mit dem Herzen wählen, nicht nach Zielen',
          body: [
            'Beantworten Sie zuerst: Warum brauchen Sie diese Immobilie? Zum Vollzeitleben, Urlaub, als Mietinvestition oder als Kapitalerhalt nach der Euro-Einführung? Jedes Ziel verweist auf eine andere Lage, Immobilientyp und Verwaltungsmodell.',
            'Probleme entstehen, wenn Käufer alles kombinieren wollen - und am Ende eine Immobilie haben, die keines der Ziele gut erfüllt.',
          ],
          bold: 'Ein klares Ziel ist der wichtigste Filter für die richtige Wahl.',
        },
        {
          title: 'Fehler #5. Liquidität ignorieren',
          body: [
            'SeaPropertiesBG-Daten (Okt. 2025) zeigen: Meerblick-Einheiten in der ersten Reihe in etablierten Komplexen verkaufen sich in Wochen; Inland-Einheiten in überangebotenen Komplexen können 12+ Monate dauern.',
            'Mit Burgаs-Hafenmodernisierung (Januar 2025) und Euro-Einführung ab Januar 2026 haben Standorte, die mit diesen strukturellen Treibern verbunden sind, deutlich andere Liquiditätsprofile als rein saisonale Resorts.',
          ],
          bold: 'Beurteilen Sie stets, wie schnell dieser Einheitentyp in diesem Komplex auf einem normalen Markt verkauft wird.',
        },
        {
          title: 'Fehler #6. Die Transaktion alleine abwickeln wollen',
          body: [
            'Bulgarische Besonderheiten: Rolle von Notaren in der Transaktionsstruktur, Bedeutung von Act 16, spezifische Bankanforderungen für ausländische Käufer, steuerliche Nuancen für Nicht-EU-Eigentümer.',
            'Nach der Euro-Einführung gelten zusätzliche rechtliche und bankentechnische Verfahren für Euro-Transaktionen, die vor Januar 2026 nicht existierten.',
          ],
          bold: 'Professionelle Begleitung ist keine Zusatzausgabe - sie ist ein Kapitalschutzinstrument.',
        },
        {
          title: 'Fehler #7. Auf den "perfekten Moment" warten',
          body: [
            'NSI Q3 2025: Bulgarien Platz 3 in der EU beim Wohnimmobilienpreiswachstum mit +15,4% im Jahresvergleich. Investropas Basisfall: 45% kumulierte Wertsteigerung über 5 Jahre (7,7% durchschnittlich jährlich).',
            'Käufer, die 2023-2025 auf den "richtigen Moment" gewartet haben, haben bereits 25-30% Wertsteigerung in den aktivsten Küstenmärkten verpasst.',
          ],
          bold: 'Qualitätsimmobilien verlieren selten wesentlich an Wert. Die richtige Immobilie zu wählen ist wichtiger als den perfekten Eintrittszeitpunkt zu erraten.',
        },
      ],
      principlesTitle: 'Was wirklich wichtig ist beim Immobilienkauf in Bulgarien',
      principlesIntro: 'Basierend auf professioneller Erfahrung basiert ein sicherer Kauf fast immer auf drei Prinzipien:',
      principles: ['Klares Kaufziel', 'Rechtliche Due Diligence', 'Verständnis der Gesamtbesitzkosten'],
      principlesOutro: 'Und natürlich eine ruhige, rationale Wahl ohne Eile.',
      conclusionTitle: 'Fazit',
      conclusion: [
        'Der bulgarische Markt bleibt attraktiv zum Leben und Investieren - die Euro-Einführung ab Januar 2026 hat ihn zugänglicher und risikoärmer für Eurozone-Käufer gemacht.',
        'Wenn Sie den Kauf in Bulgarien erwägen und verstehen möchten, welche Gebiete vielversprechend sind, wo Sie nicht zu viel zahlen und wie Sie sicher abwickeln - beginnen Sie mit einer professionellen Beratung.',
      ],
      bold_conclusion: 'Das spart nicht nur Geld, sondern auch Monate unabhängiger Suche.',
      cta: 'Kontaktieren Sie uns auf beliebigem Weg - und wir helfen Ihnen, die passende Lösung zu finden.',
      cta_button: 'Kontakt aufnehmen',
      ready: 'Bereit anzufangen?',
      sources: 'Quellen: NSI Bulgarien Q3 2025 | Investropa 2026 | Green Life Development März 2025 | SeaPropertiesBG Okt. 2025 | Eurostat Q3 2025',
    },

    bg: {
      back: 'Към началото',
      date: '21 февруари 2026',
      title:
        'Покупка на имот в България през 2026 г.: 7 грешки, които струват на купувачите десетки хиляди евро',
      intro: [
        'Пазарът на недвижими имоти в България остава един от най-достъпните в ЕС. Стойностите на сделките по крайбрежието нараснаха с 23% на годишна база в Q2 2025, а данните на НСИ показват национален ръст от 15,4% в Q3 2025 - 3-то място в ЕС. Приемането на еврото на 1 януари 2026 г. допълнително ускори търсенето.',
        'Но достъпността създава опасна илюзия за простота.',
        'Всяка година купувачите губят пари не заради кризи, а заради типични грешки - често невидими при избора на имот. Ето седемте най-скъпоструващи.',
      ],
      mistakes: [
        {
          title: 'Грешка №1. Ориентиране само към ниска цена',
          body: [
            'Ако даден имот е забележимо по-евтин от аналозите - почти винаги има причина. При ръст на цените с ~30% на годишна база през 2025 г. (Green Life Development, март 2025), обява значително под пазара е предупредителен сигнал.',
            'Най-честите причини: проблеми с документите, високи годишни такси (6-18 EUR/м²/месец в курортни комплекси), ниска ликвидност, неудобно местоположение или остаряло строителство.',
          ],
          bold: 'Евтината покупка нерядко се оказва най-скъпата в дългосрочен план.',
        },
        {
          title: 'Грешка №2. Да не се изчислява пълната цена на притежание',
          body: [
            'Цената в обявата не е крайният бюджет. Купувачите допълнително плащат: данък при покупка (около 3%), нотариални разходи, държавни такси, регистрация, понякога комисионна, годишен данък и такса за поддръжка в курортни комплекси.',
            'В комплексите на Слънчев бряг и Свети Влас годишните такси могат да достигнат 15-18 EUR/м²/месец - апартамент от 60м² струва до 12 960 EUR годишно в постоянни разходи преди всякакъв наемен приход.',
          ],
          bold: 'Средно еднократните допълнителни разходи са 4-6% от стойността. Годишните оперативни разходи варират огромно по комплекс и локация.',
        },
        {
          title: 'Грешка №3. Покупка без правна проверка',
          body: [
            'Дори имотът да изглежда перфектен - проверката е задължителна. Необходимо е да се потвърди: продавачът притежава имота, няма тежести или задължения, сградата има Акт 16, строителството е законно и статутът на земята е правилно документиран.',
            'В исторически зони като Несебър (ЮНЕСКО) може да има ограничения за ремонт, засягащи фундаментално използваемостта и стойността при препродажба.',
          ],
          bold: 'Пропускането на правната проверка е една от най-скъпоструващите грешки в България.',
        },
        {
          title: 'Грешка №4. Избор по усещане, а не по цел',
          body: [
            'Преди търсенето отговорете: защо ви трябва този имот? За целогодишно живеене, сезонна почивка, наемна инвестиция или запазване на капитала след еврото? Всяка цел сочи към различна локация, тип и модел на управление.',
            'Проблеми възникват, когато купувачите се опитват да комбинират всичко - и накрая получават имот, неотговарящ добре на никоя цел.',
          ],
          bold: 'Ясната цел е главният филтър за правилния избор.',
        },
        {
          title: 'Грешка №5. Игнориране на ликвидността',
          body: [
            'Данните на SeaPropertiesBG (окт. 2025) показват: единиците с морска гледка на първа линия в установени комплекси се продават за седмици; вътрешни единици в свръхпредлагани комплекси могат да отнемат 12+ месеца.',
            'С модернизацията на пристанище Бургас (януари 2025) и еврото от януари 2026 г., локациите, свързани с тези структурни катализатори, имат значително по-различни профили на ликвидност.',
          ],
          bold: 'Винаги преценявайте колко бързо се продава точно този тип единица в точно този комплекс на нормален пазар.',
        },
        {
          title: 'Грешка №6. Опит да се мине сделката самостоятелно',
          body: [
            'Българските специфики включват: ролята на нотариусите в структурата на сделката, значението на Акт 16, специфичните банкови изисквания за чуждестранни купувачи и данъчните нюанси за собственици нерезиденти.',
            'След приемането на еврото се прилагат допълнителни процедури за деноминирани в евро сделки, несъществували преди януари 2026 г.',
          ],
          bold: 'Професионалното придружаване не е допълнителен разход - то е инструмент за защита на капитала.',
        },
        {
          title: 'Грешка №7. Чакане на "идеалния момент"',
          body: [
            'Данните на НСИ за Q3 2025 показват България на 3-то място в ЕС по ценови ръст +15,4% на годишна база. Базовата прогноза на Investropa проектира 45% кумулативно поскъпване за 5 години (7,7% средно годишно).',
            'Купувачите, чакали "правилния момент" през 2023-2025 г., вече са пропуснали 25-30% поскъпване в най-активните крайбрежни пазари.',
          ],
          bold: 'Качествените имоти рядко поевтиняват съществено. Много по-важно е да изберете правилния имот, отколкото да познаете идеалния момент.',
        },
      ],
      principlesTitle: 'Какво наистина има значение при покупка на имот в България',
      principlesIntro: 'Въз основа на професионален опит, безопасната покупка почти винаги се гради на три принципа:',
      principles: ['Ясна цел на покупката', 'Правна проверка', 'Разбиране на пълната цена на притежание'],
      principlesOutro: 'И, разбира се, спокоен, рационален избор без бързане.',
      conclusionTitle: 'Заключение',
      conclusion: [
        'Българският пазар остава привлекателен за живеене и инвестиции - а еврото от януари 2026 г. го направи по-достъпен и по-малко рисков за купувачите от еврозоната.',
        'Ако обмисляте покупка в България и искате да разберете кои райони са перспективни, къде не надплащате и как безопасно да проведете сделка - започнете с професионална консултация.',
      ],
      bold_conclusion: 'Това спестява не само пари, но и месеци самостоятелно търсене.',
      cta: 'Свържете се с нас по удобен начин - и ние ще ви помогнем да намерите решение, съответстващо на вашите цели.',
      cta_button: 'Свържете се с нас',
      ready: 'Готови ли сте да започнете?',
      sources: 'Източници: НСИ България Q3 2025 | Investropa 2026 | Green Life Development март 2025 | SeaPropertiesBG окт. 2025 | Eurostat Q3 2025',
    },

    ru: {
      back: 'На главную',
      date: '21 февраля 2026',
      title: 'Покупка недвижимости в Болгарии в 2026 году: 7 ошибок, которые стоят покупателям десятки тысяч евро',
      intro: [
        'Рынок недвижимости Болгарии остаётся одним из самых доступных в ЕС. Стоимость сделок на побережье выросла на 23% в год в Q2 2025, данные NSI показывают рост цен на 15,4% в Q3 2025 - Болгария занимает 3-е место в ЕС. Принятие евро 1 января 2026 дополнительно ускорило спрос.',
        'Но доступность создаёт опасную иллюзию простоты.',
        'Каждый год покупатели теряют деньги не из-за кризисов, а из-за типичных ошибок - часто незаметных на этапе выбора. Вот семь наиболее дорогостоящих.',
      ],
      mistakes: [
        {
          title: 'Ошибка №1. Ориентироваться только на низкую цену',
          body: [
            'Если объект заметно дешевле аналогов - почти всегда есть причина. При росте цен на прибрежные курортные объекты на ~30% в год в 2025 году (Green Life Development, март 2025), объявление значительно ниже рынка - это сигнал предупреждения, а не выгода.',
            'Чаще всего это: проблемы с документами, высокий ежегодный взнос (6-18 EUR/м²/мес в курортных комплексах), слабая ликвидность, неудачное расположение или устаревшее строительство.',
          ],
          bold: 'Дешёвая покупка нередко оказывается самой дорогой на дистанции.',
        },
        {
          title: 'Ошибка №2. Не считать полную стоимость владения',
          body: [
            'Цена в объявлении - не итоговый бюджет. Дополнительно: налог при покупке (около 3%), нотариальные расходы, государственные сборы, регистрация, иногда комиссия агентства, ежегодный налог и взнос на обслуживание в курортных комплексах.',
            'В комплексах Солнечного Берега и Свети Власа ежегодные взносы могут достигать 15-18 EUR/м²/мес - квартира 60м² обходится в до 12 960 EUR в год в виде фиксированных расходов до каких-либо арендных поступлений.',
          ],
          bold:
            'В среднем дополнительные единовременные расходы - 4-6% от стоимости. Ежегодные эксплуатационные расходы кардинально варьируются по комплексу и локации.',
        },
        {
          title: 'Ошибка №3. Покупать без юридической проверки',
          body: [
            'Даже если объект выглядит идеально - проверка обязательна. Необходимо убедиться: продавец действительно владеет объектом, отсутствуют обременения и долги, есть Акт 16, строительство законно, статус земли правильно задокументирован.',
            'В исторических зонах, таких как Несебр (ЮНЕСКО), могут быть ограничения на ремонт, принципиально влияющие на использование объекта и стоимость при перепродаже.',
          ],
          bold: 'Пропуск этапа юридической проверки - одна из самых дорогостоящих ошибок покупателя в Болгарии.',
        },
        {
          title: 'Ошибка №4. Выбирать «сердцем», а не задачей',
          body: [
            'Перед поиском ответьте: зачем вам эта недвижимость? Для постоянного проживания, сезонного отдыха, арендной инвестиции или сохранения капитала после принятия евро? Каждая цель указывает на иную локацию, тип объекта и модель управления.',
            'Проблема возникает, когда покупатель пытается совместить всё сразу - и в итоге получает объект, который ни одну из задач не решает хорошо.',
          ],
          bold: 'Чёткая цель - главный фильтр правильного выбора.',
        },
        {
          title: 'Ошибка №5. Игнорировать ликвидность',
          body: [
            'Данные SeaPropertiesBG (окт. 2025) показывают: объекты с видом на море на первой линии в устоявшихся комплексах продаются за недели; объекты внутри территории в переизбыточно предложенных комплексах того же курорта - 12+ месяцев.',
            'После модернизации порта Бургаса (январь 2025) и принятия евро с января 2026 локации, связанные с этими структурными драйверами, имеют принципиально иные профили ликвидности, чем чисто сезонные курорты.',
          ],
          bold: 'Всегда оценивайте, как быстро продаётся этот конкретный тип объекта в этом конкретном комплексе на нормальном рынке.',
        },
        {
          title: 'Ошибка №6. Пытаться пройти сделку самостоятельно',
          body: [
            'Болгарские особенности: роль нотариусов в структуре сделки, значение Акта 16 в отличие от более ранних сертификатов, специфические требования банков к иностранным покупателям, налоговые нюансы для собственников-нерезидентов.',
            'После принятия евро действуют дополнительные юридические и банковские процедуры для деноминированных в евро сделок, которых не существовало до января 2026.',
          ],
          bold: 'Опытное сопровождение - это не дополнительный расход, а инструмент защиты капитала.',
        },
        {
          title: 'Ошибка №7. Ждать «идеальный момент»',
          body: [
            'Данные NSI за Q3 2025: Болгария занимает 3-е место в ЕС по росту цен на жильё - +15,4% в год. Базовый прогноз Investropa: 45% совокупного прироста за 5 лет (7,7% в среднем в год).',
            'Покупатели, ждавшие «правильного момента» в 2023-2025 годах, уже упустили 25-30% прироста стоимости на наиболее активных прибрежных рынках.',
          ],
          bold: 'Лучшая недвижимость редко дешевеет существенно. Гораздо важнее выбрать правильный объект, чем угадать идеальный момент входа.',
        },
      ],
      principlesTitle: 'Что действительно важно при покупке недвижимости в Болгарии',
      principlesIntro: 'Если обобщить профессиональный опыт, безопасная покупка почти всегда строится на трёх принципах:',
      principles: ['Чёткая цель покупки', 'Юридическая проверка', 'Понимание полной стоимости владения'],
      principlesOutro: 'И, конечно, спокойный, рациональный выбор без спешки.',
      conclusionTitle: 'Вместо вывода',
      conclusion: [
        'Болгарский рынок остаётся привлекательным как для жизни, так и для инвестиций - а принятие евро с января 2026 сделало его более доступным и менее рисковым для покупателей еврозоны.',
        'Если вы рассматриваете покупку недвижимости в Болгарии и хотите понять, какие районы перспективны, где не переплачивать и как безопасно провести сделку - начните с профессиональной консультации.',
      ],
      bold_conclusion: 'Это экономит не только деньги, но и месяцы самостоятельных поисков.',
      cta: 'Свяжитесь с нами удобным способом - и мы поможем подобрать решение, соответствующее вашим целям.',
      cta_button: 'Связаться с нами',
      ready: 'Готовы начать?',
      sources: 'Источники: NSI Болгария Q3 2025 | Investropa 2026 | Green Life Development март 2025 | SeaPropertiesBG окт. 2025 | Eurostat Q3 2025',
    },
  };

  const d = t[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-12 max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          {d.back}
        </Link>

        <p className="text-sm text-muted-foreground mb-4">{d.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{d.title}</h1>

        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          {d.intro.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}

          {d.mistakes.map((m: any, i: number) => (
            <div key={i}>
              <h2 className="text-2xl font-bold mt-10 mb-4">{m.title}</h2>
              {m.body.map((p: string, pi: number) => (
                <p key={pi}>{p}</p>
              ))}
              <p className="font-semibold">{m.bold}</p>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-10 mb-4">{d.principlesTitle}</h2>
          <p>{d.principlesIntro}</p>
          <ul className="list-none space-y-2 font-semibold">
            {d.principles.map((p: string, i: number) => (
              <li key={i}>✔ {p}</li>
            ))}
          </ul>
          <p>{d.principlesOutro}</p>

          <h2 className="text-2xl font-bold mt-10 mb-4">{d.conclusionTitle}</h2>
          {d.conclusion.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
          <p className="font-semibold">{d.bold_conclusion}</p>
          <p>{d.cta}</p>

          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">{d.sources}</p>
          </div>

          <div className="mt-8 p-6 bg-primary/10 rounded-xl text-center">
            <p className="font-semibold mb-3">{d.ready}</p>
            <a
              href="https://wa.me/491628184658"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {d.cta_button}
            </a>
            <p className="text-sm text-muted-foreground mt-3">estate@aibyteconsult.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyingMistakesArticle;