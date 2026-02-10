import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BuyingMistakesArticle = () => {
  const { i18n } = useTranslation();
  const isRussian = i18n.language === 'ru';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <article className="container py-12 max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          {isRussian ? 'На главную' : 'Back to Home'}
        </Link>

        <p className="text-sm text-muted-foreground mb-4">Feb 5, 2026</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          {isRussian
            ? 'Покупка недвижимости в Болгарии в 2026 году: 7 ошибок, которые стоят покупателям десятки тысяч евро'
            : 'Buying Property in Bulgaria in 2026: 7 Mistakes That Cost Buyers Tens of Thousands of Euros'}
        </h1>

        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>
            {isRussian
              ? 'Рынок недвижимости Болгарии остаётся одним из самых доступных в Евросоюзе. Здесь по-прежнему можно купить квартиру у моря по цене студии во многих европейских столицах, а в Софии — найти объекты с хорошим инвестиционным потенциалом.'
              : "Bulgaria's real estate market remains one of the most affordable in the EU. You can still buy a seaside apartment for the price of a studio in many European capitals, and find properties with strong investment potential in Sofia."}
          </p>
          <p>
            {isRussian
              ? 'Но доступность создаёт опасную иллюзию простоты.'
              : 'But affordability creates a dangerous illusion of simplicity.'}
          </p>
          <p>
            {isRussian
              ? 'Каждый год покупатели теряют деньги не из-за кризисов или падения рынка, а из-за типичных ошибок — часто незаметных на этапе выбора объекта.'
              : 'Every year, buyers lose money not due to crises or market downturns, but because of typical mistakes — often invisible during the property selection stage.'}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Ошибка №1. Ориентироваться только на низкую цену' : 'Mistake #1. Focusing Only on Low Price'}
          </h2>
          <p>
            {isRussian
              ? 'Если объект заметно дешевле аналогов — почти всегда есть причина.'
              : 'If a property is noticeably cheaper than comparable ones — there is almost always a reason.'}
          </p>
          <p>
            {isRussian ? 'Чаще всего это:' : 'Most often it is:'}
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{isRussian ? 'проблемы с документами' : 'documentation issues'}</li>
            <li>{isRussian ? 'высокий ежегодный сбор за обслуживание' : 'high annual maintenance fees'}</li>
            <li>{isRussian ? 'слабая ликвидность' : 'low liquidity'}</li>
            <li>{isRussian ? 'неудачное расположение' : 'poor location'}</li>
            <li>{isRussian ? 'устаревшее строительство' : 'outdated construction'}</li>
          </ul>
          <p className="font-semibold">
            {isRussian
              ? 'Дешёвая покупка нередко оказывается самой дорогой на дистанции.'
              : 'A cheap purchase often turns out to be the most expensive in the long run.'}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Ошибка №2. Не считать полную стоимость владения' : "Mistake #2. Not Calculating the Total Cost of Ownership"}
          </h2>
          <p>
            {isRussian
              ? 'Цена в объявлении — это ещё не итоговый бюджет. Дополнительно покупатель оплачивает: налог при покупке, нотариальные расходы, государственные сборы, регистрацию, иногда — комиссию агентства, ежегодный налог на недвижимость, таксу поддержки (в курортных комплексах).'
              : 'The listing price is not the final budget. Buyers additionally pay: purchase tax, notary fees, government charges, registration, sometimes agency commission, annual property tax, and maintenance fees (in resort complexes).'}
          </p>
          <p className="font-semibold">
            {isRussian
              ? 'В среднем дополнительные расходы составляют 4–6% от стоимости объекта.'
              : 'On average, additional costs amount to 4–6% of the property value.'}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Ошибка №3. Покупать без юридической проверки' : 'Mistake #3. Buying Without Legal Due Diligence'}
          </h2>
          <p>
            {isRussian
              ? 'Даже если объект выглядит идеально — проверка обязательна. Необходимо убедиться: что продавец действительно владеет недвижимостью, что отсутствуют обременения, что нет долгов, что объект введён в эксплуатацию, что строительство законно.'
              : 'Even if the property looks perfect — verification is mandatory. You need to ensure: the seller actually owns the property, there are no encumbrances, no debts exist, the property is commissioned, and construction is legal.'}
          </p>
          <p className="font-semibold">
            {isRussian
              ? 'Пропуск этого этапа — одна из самых дорогих ошибок.'
              : 'Skipping this step is one of the most expensive mistakes.'}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Ошибка №4. Выбирать «сердцем», а не задачей' : 'Mistake #4. Choosing with Your Heart, Not Your Goals'}
          </h2>
          <p>
            {isRussian
              ? 'Перед поиском важно ответить на простой вопрос: Зачем вам эта недвижимость? Для жизни, для отдыха или как инвестиция. Проблема возникает, когда покупатель пытается совместить всё сразу.'
              : "Before searching, it's important to answer a simple question: Why do you need this property? For living, for vacation, or as an investment. Problems arise when buyers try to combine everything at once."}
          </p>
          <p className="font-semibold">
            {isRussian ? 'Чёткая цель — главный фильтр правильного выбора.' : 'A clear goal is the main filter for the right choice.'}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Ошибка №5. Игнорировать ликвидность' : 'Mistake #5. Ignoring Liquidity'}
          </h2>
          <p>
            {isRussian
              ? 'Хороший объект — это не только комфорт сегодня, но и возможность выгодно продать его завтра. Ликвидность зависит от района, транспортной доступности, качества строительства, инфраструктуры, планировки и спроса на аренду.'
              : "A good property isn't just about comfort today — it's about being able to sell it profitably tomorrow. Liquidity depends on the area, transport accessibility, construction quality, infrastructure, layout, and rental demand."}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Ошибка №6. Пытаться пройти сделку самостоятельно' : 'Mistake #6. Trying to Handle the Deal Alone'}
          </h2>
          <p>
            {isRussian
              ? 'На первый взгляд процесс кажется понятным — особенно если у покупателя уже был опыт в другой стране. Но каждая юрисдикция имеет свои особенности: структура договора, порядок расчётов, требования банков, налоговые нюансы.'
              : "At first glance, the process seems straightforward — especially if the buyer has experience in another country. But every jurisdiction has its own specifics: contract structure, payment procedures, bank requirements, and tax nuances."}
          </p>
          <p className="font-semibold">
            {isRussian
              ? 'Опытное сопровождение — это не дополнительный расход, а инструмент защиты капитала.'
              : 'Professional guidance is not an additional expense — it is a capital protection tool.'}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Ошибка №7. Ждать «идеальный момент»' : 'Mistake #7. Waiting for the "Perfect Moment"'}
          </h2>
          <p>
            {isRussian
              ? 'Некоторые покупатели откладывают решение в ожидании снижения цен, кризиса или выгодных распродаж. На практике качественные объекты всегда находят своего покупателя.'
              : "Some buyers postpone decisions waiting for price drops, crises, or sales. In practice, quality properties always find their buyer."}
          </p>
          <p className="font-semibold">
            {isRussian
              ? 'Лучшая недвижимость редко дешевеет существенно. Гораздо важнее выбрать правильный объект, чем пытаться угадать идеальный момент входа.'
              : "The best properties rarely depreciate significantly. It's far more important to choose the right property than to try to guess the perfect entry moment."}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Что действительно важно при покупке недвижимости в Болгарии' : 'What Really Matters When Buying Property in Bulgaria'}
          </h2>
          <p>{isRussian ? 'Если обобщить профессиональный опыт, безопасная покупка почти всегда строится на трёх принципах:' : 'Based on professional experience, a safe purchase is almost always built on three principles:'}</p>
          <ul className="list-none space-y-2 font-semibold">
            <li>✔ {isRussian ? 'Чёткая цель покупки' : 'Clear purchase goal'}</li>
            <li>✔ {isRussian ? 'Юридическая проверка' : 'Legal due diligence'}</li>
            <li>✔ {isRussian ? 'Понимание полной стоимости владения' : 'Understanding the total cost of ownership'}</li>
          </ul>
          <p>
            {isRussian
              ? 'И, конечно, спокойный, рациональный выбор без спешки.'
              : 'And, of course, a calm, rational choice without rushing.'}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            {isRussian ? 'Вместо вывода' : 'Conclusion'}
          </h2>
          <p>
            {isRussian
              ? 'Болгарский рынок остаётся привлекательным как для жизни, так и для инвестиций. Но успешной покупку делает не удача — а грамотный подход.'
              : "The Bulgarian market remains attractive for both living and investment. But a successful purchase is not about luck — it's about a competent approach."}
          </p>
          <p>
            {isRussian
              ? 'Если вы только начинаете рассматривать покупку недвижимости в Болгарии и хотите понять: какие районы действительно перспективны, где не переплачивают, какие объекты лучше избегать, как безопасно провести сделку — имеет смысл начать с профессиональной консультации.'
              : "If you're just starting to consider buying property in Bulgaria and want to understand: which areas are truly promising, where you won't overpay, which properties to avoid, and how to safely conduct a deal — it makes sense to start with a professional consultation."}
          </p>
          <p className="font-semibold">
            {isRussian
              ? 'Это экономит не только деньги, но и месяцы самостоятельных поисков.'
              : 'This saves not only money but also months of independent searching.'}
          </p>
          <p>
            {isRussian
              ? 'Свяжитесь с нами удобным способом — и мы поможем подобрать решение, соответствующее вашим целям.'
              : 'Contact us in any convenient way — and we will help you find a solution that matches your goals.'}
          </p>

          <div className="mt-8 p-6 bg-primary/10 rounded-xl text-center">
            <p className="font-semibold mb-3">{isRussian ? 'Готовы начать?' : 'Ready to get started?'}</p>
            <a
              href="https://wa.me/491628184658"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {isRussian ? 'Связаться с нами' : 'Contact Us'}
            </a>
            <p className="text-sm text-muted-foreground mt-3">estate@aibyteconsult.com</p>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BuyingMistakesArticle;
