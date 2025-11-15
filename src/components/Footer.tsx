import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Mail, Youtube, Twitter, Phone } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 grid md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
            <Home className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BulgariaEstate
            </span>
          </Link>
          <p className="text-sm text-muted-foreground mb-4">
            Your trusted partner in Bulgarian real estate
          </p>
          <div className="flex gap-3">
            <a 
              href="mailto:info@bulgariaestate.com" 
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 text-primary" />
            </a>
            <a 
              href="https://wa.me/359123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="h-4 w-4 text-primary" />
            </a>
            <a 
              href="https://youtube.com/@bulgariaestate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4 text-primary" />
            </a>
            <a 
              href="https://twitter.com/bulgariaestate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 text-primary" />
            </a>
            <a 
              href="https://tiktok.com/@bulgariaestate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="TikTok"
            >
              <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">{t('nav.buy')}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/properties" className="hover:text-primary transition-colors">All Properties</Link></li>
            <li><Link to="/buy" className="hover:text-primary transition-colors">For Sale</Link></li>
            <li><Link to="/rent" className="hover:text-primary transition-colors">For Rent</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
            <li><Link to="/sell" className="hover:text-primary transition-colors">{t('nav.sell')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BulgariaEstate. All rights reserved.</p>
          <p className="text-center md:text-right">
            Made by <span className="font-semibold text-foreground">NICS AI</span>, owned by <span className="font-semibold text-foreground">AI Byte Consult Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
