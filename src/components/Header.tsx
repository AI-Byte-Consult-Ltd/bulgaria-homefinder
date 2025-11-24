import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { Home, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export const Header = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.buy'), href: '/buy' },
    { label: t('nav.rent'), href: '/rent' },
    { label: t('nav.sell'), href: '/sell' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Home className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            BulgariaEstate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          {user ? (
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link to="/dashboard">{t('nav.dashboard')}</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
                <Link to="/auth">{t('nav.signIn')}</Link>
              </Button>
              <Button asChild size="sm" className="hidden md:inline-flex">
                <Link to="/auth">{t('nav.signUp')}</Link>
              </Button>
            </>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t flex flex-col gap-2">
                  {user ? (
                    <Button asChild size="sm">
                      <Link to="/dashboard">{t('nav.dashboard')}</Link>
                    </Button>
                  ) : (
                    <>
                      <Button asChild variant="ghost" size="sm">
                        <Link to="/auth">{t('nav.signIn')}</Link>
                      </Button>
                      <Button asChild size="sm">
                        <Link to="/auth">{t('nav.signUp')}</Link>
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
