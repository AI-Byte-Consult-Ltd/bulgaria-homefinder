import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <Home className="h-5 w-5 text-primary" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BulgariaEstate
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">{t('nav.home')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.buy')}
                </Link>
              </li>
              <li>
                <Link to="/properties?type=rent" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.rent')}
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.sell')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">{t('nav.about')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">{t('nav.contact')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@bulgariaestate.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +359 2 XXX XXXX
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Sofia, Bulgaria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BulgariaEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
