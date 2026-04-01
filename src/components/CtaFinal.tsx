import { useLocalStorage } from '../hooks/useLocalStorage';
import { BOOKING_URL } from '../config';

interface CtaClicks {
  count: number;
  lastClick: string;
}

const DEFAULT_CTA: CtaClicks = { count: 0, lastClick: '' };

export default function CtaFinal() {
  const [, setCtaClicks] = useLocalStorage<CtaClicks>('tnutrindo_cta_clicks', DEFAULT_CTA);

  const handleCtaClick = () => {
    setCtaClicks((prev) => ({ count: prev.count + 1, lastClick: new Date().toISOString() }));
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendar" className="flex flex-col md:flex-row min-h-[600px] w-full overflow-hidden">
      <div className="relative w-full md:w-1/2 min-h-[500px] md:min-h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: "url('/Imagem  CTA final.png')",
          }}
        />
        <div
          className="absolute bottom-12 left-12 p-8 max-w-[280px]"
          style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <div className="text-white text-5xl font-headline italic font-bold mb-2">94%</div>
          <p className="text-white text-sm leading-relaxed tracking-wide font-medium">
            de pacientes relatam melhora na relação com a comida
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-primary flex flex-col justify-center px-8 py-20 md:px-20 lg:px-24">
        <div className="max-w-xl">
          <span className="text-secondary-fixed font-label text-sm font-bold tracking-[0.15em] mb-6 block uppercase">
            Pronta para começar?
          </span>
          <h2 className="font-headline text-on-primary text-4xl md:text-[48px] leading-[1.1] mb-8 font-bold">
            A sua melhor versão começa com uma conversa.
          </h2>
          <p className="text-on-primary/65 font-body text-lg leading-relaxed mb-12">
            Transforme sua saúde através de um olhar curado e científico. Agende seu primeiro encontro e descubra o
            equilíbrio que seu corpo merece.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="bg-on-primary text-primary px-10 py-4 font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity mb-16 rounded-sm inline-block w-full text-center"
          >
            Agendar Consulta
          </a>
          <div className="flex flex-wrap gap-8 pt-8 border-t border-on-primary/10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-xl">verified</span>
              <span className="text-on-primary/80 text-xs font-medium tracking-wide uppercase">CRN Ativo</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-xl">calendar_today</span>
              <span className="text-on-primary/80 text-xs font-medium tracking-wide uppercase">Agenda Flexível</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary-fixed text-xl">favorite</span>
              <span className="text-on-primary/80 text-xs font-medium tracking-wide uppercase">
                Atendimento Humanizado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
