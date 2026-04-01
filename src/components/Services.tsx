import { useLocalStorage } from '../hooks/useLocalStorage';
import { BOOKING_URL } from '../config';

interface CtaClicks {
  count: number;
  lastClick: string;
}

const DEFAULT_CTA: CtaClicks = { count: 0, lastClick: '' };

const services = [
  {
    icon: 'energy_savings_leaf',
    title: 'Consulta Individual',
    description:
      'Avaliação nutricional completa com plano alimentar totalmente personalizado para seus objetivos.',
  },
  {
    icon: 'favorite',
    title: 'Acompanhamento',
    description:
      'Retornos periódicos para ajuste do plano, suporte contínuo e celebração de resultados.',
  },
  {
    icon: 'psychology',
    title: 'Nutrição Comportamental',
    description:
      'Trabalhamos sua relação emocional com a comida para resultados que duram.',
  },
  {
    icon: 'laptop_mac',
    title: 'Teleconsulta',
    description:
      'Atendimento remoto com a mesma qualidade e personalização da consulta presencial.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Agendamento',
    description: 'Escolha o horário que melhor se encaixa na sua rotina pelo WhatsApp ou formulário online.',
  },
  {
    number: '02',
    title: 'Primeira Consulta',
    description: 'Avaliação completa: anamnese alimentar, hábitos de vida, exames e definição de objetivos.',
  },
  {
    number: '03',
    title: 'Acompanhamento',
    description: 'Retornos regulares para ajustes, suporte contínuo e evolução progressiva e sustentável.',
  },
];

export default function Services() {
  const [, setCtaClicks] = useLocalStorage<CtaClicks>('tnutrindo_cta_clicks', DEFAULT_CTA);

  const handleCtaClick = () => {
    setCtaClicks((prev) => ({ count: prev.count + 1, lastClick: new Date().toISOString() }));
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="atendimento" className="bg-primary-container py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-label font-semibold uppercase tracking-widest text-on-tertiary-container mb-4">
            Atendimento
          </span>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-primary leading-tight mb-4">
            Cada consulta é construída ao seu redor.
          </h2>
          <p className="text-on-primary/70 text-lg max-w-xl mx-auto">
            Uma abordagem personalizada, humanizada e baseada em ciência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {services.map((service) => (
            <div key={service.title} className="glass-card rounded-lg p-6 flex flex-col gap-4">
              <span className="material-symbols-outlined text-3xl text-primary-fixed-dim">
                {service.icon}
              </span>
              <h3 className="font-headline text-lg font-bold text-on-primary">
                {service.title}
              </h3>
              <p className="text-on-primary/70 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-14">
          <h3 className="font-headline text-2xl font-bold text-on-primary text-center mb-10">
            Como funciona
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-3">
                <span className="font-headline text-5xl font-bold text-primary-fixed-dim/30 leading-none">
                  {step.number}
                </span>
                <h4 className="font-label text-base font-semibold text-on-primary">{step.title}</h4>
                <p className="text-on-primary/65 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleCtaClick}
            className="px-10 py-4 rounded-sm bg-white font-semibold text-base hover:brightness-95 transition-all"
            style={{ color: '#1B4332' }}
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </section>
  );
}
