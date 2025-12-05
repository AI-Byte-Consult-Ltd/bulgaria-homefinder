import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { restorationProjects } from '@/data/restorationProjects';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, User, Calendar, ArrowRight } from 'lucide-react';

const RestorationProject = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  
  const project = restorationProjects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">{t('restoration.projectNotFound')}</h1>
            <Link to="/" className="text-primary hover:underline">
              {t('restoration.backToHome')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Back Button */}
      <div className="container pt-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('restoration.backToHome')}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-8 container">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">{t('restoration.completedProject')}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-5 w-5 text-primary" />
                <span>{project.architect}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
          
          <div className="aspect-video rounded-xl overflow-hidden">
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">{t('restoration.beforeAfter')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-muted-foreground">{t('restoration.before')}</h3>
              <div className="grid gap-4">
                {project.beforeImages.map((img, idx) => (
                  <div key={idx} className="aspect-video rounded-lg overflow-hidden">
                    <img src={img} alt={`Before ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{t('restoration.after')}</h3>
              <div className="grid gap-4">
                {project.afterImages.map((img, idx) => (
                  <div key={idx} className="aspect-video rounded-lg overflow-hidden">
                    <img src={img} alt={`After ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Stages */}
      <section className="py-16 container">
        <h2 className="text-2xl font-bold mb-8">{t('restoration.stages')}</h2>
        
        <div className="space-y-6">
          {project.stages.map((stage, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={stage.image} 
                    alt={stage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="md:col-span-2 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{stage.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{stage.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container text-center space-y-6">
          <h2 className="text-2xl font-bold">{t('restoration.ctaTitle')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('restoration.ctaDescription')}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t('restoration.getQuote')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RestorationProject;
