import { useLocalStorage } from '../hooks/useLocalStorage';
import { BOOKING_URL } from '../config';

interface CtaClicks {
  count: number;
  lastClick: string;
}

const DEFAULT_CTA: CtaClicks = { count: 0, lastClick: '' };

const HERO_IMAGE_DESKTOP = '/Imagem Hero Desktop.png';
const HERO_IMAGE_MOBILE = '/Imagem Hero Mobile.png';

export default function Hero() {
  const [, setCtaClicks] = useLocalStorage<CtaClicks>('tnutrindo_cta_clicks', DEFAULT_CTA);

  const handleCtaClick = () => {
    setCtaClicks((prev) => ({ count: prev.count + 1, lastClick: new Date().toISOString() }));
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end sm:items-center justify-center overflow-hidden"
    >
      {/* Desktop image */}
      <img
        src={HERO_IMAGE_DESKTOP}
        alt="Prato com alimentos naturais frescos representando nutrição saudável"
        className="absolute inset-0 w-full h-full object-cover object-center hidden sm:block"
        loading="eager"
      />
      {/* Mobile image */}
      <img
        src={HERO_IMAGE_MOBILE}
        alt="Stefani Moreira — nutricionista clínica e comportamental"
        className="absolute inset-0 w-full h-full object-cover object-top block sm:hidden"
        loading="eager"
      />

      {/* Desktop overlay — solid */}
      <div className="absolute inset-0 editorial-overlay hidden sm:block" />
      {/* Mobile overlay — gradient escuro no topo, transparente embaixo */}
      <div
        className="absolute inset-0 block sm:hidden"
        style={{ background: 'linear-gradient(to top, rgba(0,20,10,0.90) 0%, rgba(0,20,10,0.75) 40%, rgba(0,20,10,0.10) 68%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-0 sm:pt-16">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-label font-semibold uppercase tracking-widest text-secondary-fixed-dim mb-4">
            Nutricionista Clínica &amp; Comportamental
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-on-primary leading-tight mb-6">
            Nutrição que transforma de dentro para fora.
          </h1>
          <p className="text-base sm:text-lg text-on-primary/80 leading-relaxed mb-10 max-w-xl">
            Atendimento personalizado para quem quer resultados reais e duradouros, unindo ciência e consciência alimentar.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleCtaClick}
              className="px-8 py-3.5 rounded-sm bg-secondary-container text-on-secondary-container font-semibold text-sm hover:brightness-105 transition-all shadow-lg"
            >
              Agendar Consulta
            </button>
            <a
              href="#sobre"
              className="flex items-center gap-2 text-on-primary/80 hover:text-on-primary font-medium text-sm transition-colors group"
            >
              Conheça o Método
              <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-10 right-8 z-10">
        <div className="glass-card rounded-lg p-5 max-w-xs">
          <p className="text-xs font-label font-semibold uppercase tracking-widest text-secondary-fixed-dim mb-2">
            Foco do Mês
          </p>
          <p className="text-on-primary font-headline text-lg font-bold mb-3">
            Vitalidade Intestinal
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-on-primary/70 bg-white/10 rounded-sm px-3 py-1">Comportamental</span>
            <span className="text-xs text-on-primary/70 bg-white/10 rounded-sm px-3 py-1">São Paulo &amp; Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
