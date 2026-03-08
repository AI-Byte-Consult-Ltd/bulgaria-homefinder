import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Georgi Petrov',
    location: '🇧🇬 Sofia, Bulgaria',
    rating: 5,
    text: 'BulgariaEstate helped me sell my apartment in Plovdiv within 3 weeks. Professional service, clear communication, and great market knowledge. Highly recommended!',
    textBg: 'BulgariaEstate ми помогна да продам апартамента си в Пловдив за 3 седмици. Професионално обслужване, ясна комуникация и отлично познаване на пазара.',
    textRu: 'BulgariaEstate помогли продать квартиру в Пловдиве за 3 недели. Профессиональный сервис, чёткая коммуникация и отличное знание рынка.',
    textDe: 'BulgariaEstate hat mir geholfen, meine Wohnung in Plovdiv innerhalb von 3 Wochen zu verkaufen. Professioneller Service und hervorragende Marktkenntnis.',
    textIt: 'BulgariaEstate mi ha aiutato a vendere il mio appartamento a Plovdiv in 3 settimane. Servizio professionale e ottima conoscenza del mercato.',
  },
  {
    name: 'Ivanka Dimitrova',
    location: '🇧🇬 Burgas, Bulgaria',
    rating: 5,
    text: 'I was looking for a seaside property for years. The team found me the perfect house near Sozopol at an amazing price. The whole process was smooth and transparent.',
    textBg: 'Търсех крайморски имот с години. Екипът ми намери перфектната къща близо до Созопол на страхотна цена. Целият процес беше гладък и прозрачен.',
    textRu: 'Я искала дом у моря годами. Команда нашла идеальный вариант рядом с Созополем по отличной цене. Весь процесс был прозрачным.',
    textDe: 'Ich suchte jahrelang eine Immobilie am Meer. Das Team fand mir das perfekte Haus bei Sozopol zu einem tollen Preis.',
    textIt: 'Cercavo una proprietà al mare da anni. Il team ha trovato la casa perfetta vicino a Sozopol a un prezzo incredibile.',
  },
  {
    name: 'Anna Kowalska',
    location: '🇵🇱 Warsaw, Poland',
    rating: 5,
    text: 'As a foreign buyer, I was nervous about purchasing in Bulgaria. BulgariaEstate guided me through every step — legal, financial, and logistical. Now I own a beautiful apartment in Sunny Beach!',
    textBg: 'Като чуждестранен купувач се притеснявах за покупка в България. BulgariaEstate ме води през всяка стъпка — правна, финансова и логистична.',
    textRu: 'Как иностранный покупатель, я переживала за покупку в Болгарии. BulgariaEstate провели меня через каждый шаг. Теперь у меня квартира в Солнечном Берегу!',
    textDe: 'Als ausländische Käuferin war ich nervös. BulgariaEstate hat mich bei jedem Schritt begleitet. Jetzt besitze ich eine Wohnung in Sonnenstrand!',
    textIt: "Come acquirente straniera ero nervosa. BulgariaEstate mi ha guidato in ogni passaggio. Ora possiedo un appartamento a Sunny Beach!",
  },
  {
    name: 'Hans Müller',
    location: '🇩🇪 Munich, Germany',
    rating: 5,
    text: 'Excellent investment advice. I bought two properties in Bansko through BulgariaEstate and the rental yield has exceeded my expectations. Very professional team.',
    textBg: 'Отлични инвестиционни съвети. Купих два имота в Банско чрез BulgariaEstate и доходността от наем надмина очакванията ми.',
    textRu: 'Отличные инвестиционные консультации. Купил два объекта в Банско через BulgariaEstate — доходность от аренды превзошла ожидания.',
    textDe: 'Ausgezeichnete Anlageberatung. Ich habe zwei Immobilien in Bansko gekauft und die Mietrendite hat meine Erwartungen übertroffen. Sehr professionelles Team.',
    textIt: "Ottimi consigli d'investimento. Ho acquistato due proprietà a Bansko e il rendimento locativo ha superato le aspettative.",
  },
  {
    name: 'Petra Schmidt',
    location: '🇩🇪 Berlin, Germany',
    rating: 5,
    text: 'From the first video call to signing the contract — everything was handled with care. They even helped me set up utilities and find a property manager. Outstanding!',
    textBg: 'От първия видео разговор до подписването на договора — всичко беше изпипано. Дори ми помогнаха с комуналните услуги и управлението на имота.',
    textRu: 'От первого видеозвонка до подписания договора — всё было на высшем уровне. Даже помогли с коммунальными услугами и управляющей компанией.',
    textDe: 'Vom ersten Videoanruf bis zur Vertragsunterzeichnung — alles wurde mit Sorgfalt erledigt. Sie haben mir sogar bei den Nebenkosten und der Hausverwaltung geholfen. Hervorragend!',
    textIt: "Dalla prima videochiamata alla firma del contratto — tutto gestito con cura. Mi hanno anche aiutato con le utenze e la gestione dell'immobile.",
  },
  {
    name: 'James & Sarah Thompson',
    location: '🇬🇧 London, United Kingdom',
    rating: 5,
    text: 'We dreamed of a holiday home in Bulgaria for years. BulgariaEstate made it happen — found us a stunning villa near Varna with sea views. The after-sale support is brilliant.',
    textBg: 'Мечтаехме за ваканционен дом в България с години. BulgariaEstate го направиха реалност — намериха ни зашеметяваща вила близо до Варна с морска гледка.',
    textRu: 'Мы годами мечтали о доме для отдыха в Болгарии. BulgariaEstate воплотили мечту — нашли потрясающую виллу под Варной с видом на море.',
    textDe: 'Wir träumten jahrelang von einem Ferienhaus in Bulgarien. BulgariaEstate hat es möglich gemacht — eine atemberaubende Villa bei Varna mit Meerblick.',
    textIt: 'Sognavamo una casa vacanze in Bulgaria da anni. BulgariaEstate lo ha reso possibile — una villa stupenda vicino a Varna con vista mare.',
  },
  {
    name: 'David Williams',
    location: '🇬🇧 Manchester, United Kingdom',
    rating: 5,
    text: 'Best decision I ever made. Bought an apartment in Sofia for half the price of anything comparable in the UK. The team speaks perfect English and handles everything remotely.',
    textBg: 'Най-доброто решение, което съм вземал. Купих апартамент в София на половината цена от подобен в UK. Екипът говори перфектен английски и управлява всичко дистанционно.',
    textRu: 'Лучшее решение в моей жизни. Купил квартиру в Софии за половину цены аналога в Великобритании. Команда отлично говорит по-английски и работает удалённо.',
    textDe: 'Die beste Entscheidung, die ich je getroffen habe. Ich habe eine Wohnung in Sofia für die Hälfte des UK-Preises gekauft. Das Team spricht perfektes Englisch.',
    textIt: "La miglior decisione che abbia mai preso. Ho comprato un appartamento a Sofia a metà prezzo rispetto al Regno Unito. Il team parla un inglese perfetto.",
  },
];

function getTestimonialText(t: any, lang: string) {
  return (item: typeof testimonials[0]) => {
    switch (lang) {
      case 'bg': return item.textBg;
      case 'ru': return item.textRu;
      case 'de': return item.textDe;
      case 'it': return item.textIt;
      default: return item.text;
    }
  };
}

export const Testimonials = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const getText = getTestimonialText(null, lang);

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const getText = getTestimonialText(null, lang);

  const sectionTitle = t('common.whatClientsSay');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{sectionTitle}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="h-full p-8 rounded-2xl bg-card border border-border/50 shadow-sm flex flex-col gap-4">
                  <Quote className="h-8 w-8 text-primary/30 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
                    "{getText(item)}"
                  </p>
                  <div className="flex items-center gap-1 mt-auto">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-14 border-primary/20 text-primary hover:bg-primary/10" />
          <CarouselNext className="hidden md:flex -right-14 border-primary/20 text-primary hover:bg-primary/10" />
        </Carousel>
      </div>
    </section>
  );
};
