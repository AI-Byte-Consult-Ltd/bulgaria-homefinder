import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              {t('about.ourStory')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.storyText')}
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-muted/50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              {t('about.ourMission')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">
              {t('about.whyChooseUs')}
            </h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">
                    {t(`about.reason${num}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
