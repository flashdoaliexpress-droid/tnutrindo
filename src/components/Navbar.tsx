import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { BOOKING_URL } from '../config';

interface UiPrefs {
  navSolid: boolean;
  lastSection: string;
}

const DEFAULT_PREFS: UiPrefs = { navSolid: false, lastSection: '' };

interface CtaClicks {
  count: number;
  lastClick: string;
}

const DEFAULT_CTA: CtaClicks = { count: 0, lastClick: '' };

export default function Navbar() {
  const [prefs, setPrefs] = useLocalStorage<UiPrefs>('tnutrindo_ui_prefs', DEFAULT_PREFS);
  const [, setCtaClicks] = useLocalStorage<CtaClicks>('tnutrindo_cta_clicks', DEFAULT_CTA);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const solid = window.scrollY > 48;
      setPrefs((prev) => ({ ...prev, navSolid: solid }));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [setPrefs]);

  const handleCtaClick = () => {
    setCtaClicks((prev) => ({ count: prev.count + 1, lastClick: new Date().toISOString() }));
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atendimento', href: '#atendimento' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        prefs.navSolid
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="font-headline italic text-2xl font-bold text-on-primary tracking-tight"
          >
            TNutrindo
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-on-primary/80 hover:text-on-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleCtaClick}
              className="ml-4 px-5 py-2 rounded-sm bg-transparent text-white border border-white/40 text-sm font-semibold hover:bg-white/10 transition-all"
            >
              Agendar
            </button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-on-primary"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <span className="material-symbols-outlined text-2xl">close</span>
            ) : (
              <span className="material-symbols-outlined text-2xl">menu</span>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 flex flex-col gap-3 bg-primary/95 backdrop-blur-md px-4 rounded-b-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-on-primary/80 hover:text-on-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMobileOpen(false); handleCtaClick(); }}
              className="mt-1 px-10 py-4 rounded-sm bg-white font-semibold text-base hover:brightness-95 transition-all"
              style={{ color: '#1B4332' }}
            >
              Agendar Consulta
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
