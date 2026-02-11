import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Mail, Youtube, Twitter, Phone, MessageCircle, Send } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 grid md:grid-cols-4 gap-8">
        {/* Логотип и контакты */}
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
            <Home className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BulgariaEstate
            </span>
          </Link>
          <p className="text-sm text-muted-foreground mb-2">
            Your trusted partner in Bulgarian real estate
          </p>
          <p className="text-sm font-medium text-foreground mb-4">
            by AI Byte Consult Ltd.
          </p>
          <p className="text-sm text-primary font-medium mb-4">
            made in EU 🇪🇺 for the World 🗺️
          </p>
          <div className="flex gap-3 flex-wrap">
            {/* Email */}
            <a
              href="mailto:info@aibyteconsult.com"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 text-primary" />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/491628184658"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
            </a>
            {/* Phone */}
            <a
              href="tel:+359988899109"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-4 w-4 text-primary" />
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/navajjoo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4 text-primary" />
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com/@bulgariaestate"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4 text-primary" />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/bulgariaestate"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 text-primary" />
            </a>
            {/* TikTok (SVG) */}
            <a
              href="https://tiktok.com/@bulgariaestate"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="TikTok"
            >
              <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Навигация Buy */}
        <div>
          <h3 className="font-semibold mb-4">{t('nav.buy')}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/properties" className="hover:text-primary transition-colors">All Properties</Link></li>
            <li><Link to="/buy" className="hover:text-primary transition-colors">For Sale</Link></li>
            <li><Link to="/rent" className="hover:text-primary transition-colors">For Rent</Link></li>
          </ul>
        </div>

        {/* Раздел Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
            <li><Link to="/sell" className="hover:text-primary transition-colors">{t('nav.sell')}</Link></li>
          </ul>
        </div>

        {/* Контактная информация */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:info@aibyteconsult.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@aibyteconsult.com
              </a>
            </li>
            <li>
              <a href="tel:+359988899109" className="hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" /> +359 988 899 109
              </a>
            </li>
            <li>
              <a href="https://wa.me/491628184658" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://t.me/navajjoo" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <Send className="h-4 w-4" /> Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Нижняя строка: копирайт, информация об авторах и атрибуция фото */}
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} BulgariaEstate. All rights reserved.</p>
          <p className="text-center md:text-right">
            Made by <span className="font-semibold text-foreground">NICS AI</span>, owned by{' '}
            <a href="https://aibyteconsult.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline">
              AI Byte Consult Ltd
            </a>
          </p>
          <p className="text-center">
            Photo by{' '}
            <a
              href="https://unsplash.com/@kopcap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Neven Myst
            </a>{' '}
            on{' '}
            <a
              href="https://unsplash.com/photos/houses-near-body-of-water-during-daytime-EFVuZbNYbG8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
