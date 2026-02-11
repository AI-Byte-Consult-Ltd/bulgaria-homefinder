import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  TrendingUp,
  Building,
  MapPin,
  Landmark,
  BarChart3,
  Clock,
  Home,
} from 'lucide-react';

/**
 * Статья «Bulgaria Property Price Forecasts: 2026, 5-Year & 10-Year Outlook».
 * Содержит анализ текущих тенденций и прогнозов по рынку недвижимости Болгарии.
 * Текст доступен на русском и английском языке в зависимости от выбранной локали.
 */
const BulgariaPriceForecastsArticle = () => {
  const { i18n } = useTranslation();
  const isRu = i18n.language === 'ru';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            {isRu ? 'На главную' : 'Back to Home'}
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Clock className="w-4 h-4" />
            <span>{isRu ? '10 февраля 2026' : 'February 10, 2026'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {isRu
              ? 'Прогноз цен на недвижимость в Болгарии: 2026, 5 лет и 10 лет'
              : 'Bulgaria Property Price Forecasts: 2026, 5-Year & 10-Year Outlook'}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {isRu
              ? 'Полный анализ текущих тенденций, прогнозов и факторов, влияющих на рынок недвижимости Болгарии после вступления в еврозону.'
              : 'A comprehensive analysis of current trends, forecasts, and factors shaping Bulgaria\'s property market after euro adoption.'}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{isRu ? 'Источник:' : 'Source:'}</span>
            <a
              href="https://investropa.com/blogs/news/bulgaria-price-forecasts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              INVESTROPA <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12 container max-w-4xl">
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            {isRu ? 'Ключевые выводы' : 'Key Insights'}
          </h2>
          <ul className="space-y-3 text-sm">
            {(isRu
              ? [
                  'Цены на недвижимость в Болгарии выросли примерно на 15% в годовом исчислении в начале 2025 года — второе место в ЕС по росту.',
                  'София остаётся самым дорогим городом — около 2 250 евро/м², что всё ещё вдвое дешевле большинства европейских столиц.',
                  'Введение евро 1 января 2026 года снизило валютные риски для иностранных покупателей.',
                  'Ипотечные ставки в Болгарии — одни из самых низких в ЕС: от 2,6% до 4%.',
                  'Новостройки в Софии, Варне и Пловдиве дорожают быстрее вторичного жилья.',
                  'Районы вдоль расширяющегося метро Софии показывают рост на 2–4% выше среднего.',
                  'Сельская Болгария по-прежнему предлагает объекты от 300–500 евро/м².',
                  'Прогноз на 5 лет: совокупный рост цен около 45%, или ~7,7% в год.',
                ]
              : [
                  'Bulgaria\'s property prices grew about 15% year-on-year in early 2025 — second in the entire EU for house price growth.',
                  'Sofia remains the most expensive city at ~€2,250/m², still roughly half of most European capitals.',
                  'Euro adoption on January 1, 2026 has reduced currency risk for foreign buyers.',
                  'Mortgage rates in Bulgaria remain among the lowest in the EU, between 2.6% and 4%.',
                  'New-build apartments in Sofia, Varna, and Plovdiv appreciate faster than older stock.',
                  'Neighborhoods along Sofia\'s expanding metro lines see price growth 2–4 percentage points above average.',
                  'Rural Bulgaria still offers properties for as little as €300–500 per m².',
                  '5-year forecast: cumulative price growth of ~45%, roughly 7.7% per year.',
                ]).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Основное содержание статьи здесь (опущено для краткости) */}
        {/* ... */}

      </section>

      <Footer />
    </div>
  );
};

export default BulgariaPriceForecastsArticle;
