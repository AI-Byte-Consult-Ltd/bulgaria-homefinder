import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, Users, TrendingUp } from 'lucide-react';

const Sell = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('sell.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('sell.subtitle')}
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('sell.whyUs')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t('sell.benefit1Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('sell.benefit1Text')}
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t('sell.benefit2Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('sell.benefit2Text')}
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t('sell.benefit3Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('sell.benefit3Text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('sell.getStarted')}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t('sell.signUpToList')}
            </p>
            <Button size="lg" variant="secondary">
              {t('nav.signUp')}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;
