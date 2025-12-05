import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { restorationProjects } from '@/data/restorationProjects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowRight } from 'lucide-react';

export const RestorationShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">{t('restoration.badge')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('restoration.sectionTitle')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('restoration.sectionDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restorationProjects.map((project) => (
            <Link key={project.id} to={`/restoration/${project.id}`}>
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90">{project.year}</Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    {t('restoration.viewProject')}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            {t('restoration.viewAllServices')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
