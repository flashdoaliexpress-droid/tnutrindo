import { useState } from 'react';

const images = [
  { src: '/Resultados de Pacientes 1.png', alt: 'Resultado de paciente 1' },
  { src: '/Resultados de pacientes 2.webp', alt: 'Resultado de paciente 2' },
  { src: '/Resultados de pacientes 3.webp', alt: 'Resultado de paciente 3' },
  { src: '/Resultados de pacientes 4.png', alt: 'Resultado de paciente 4' },
  { src: '/Resultados de pacientes 5.png', alt: 'Resultado de paciente 5' },
  { src: '/Resultados de pacientes 6.png', alt: 'Resultado de paciente 6' },
  { src: '/Resultados de pacientes 7.png', alt: 'Resultado de paciente 7' },
  { src: '/Resultados de pacientes 8.png', alt: 'Resultado de paciente 8' },
];

const VISIBLE = 3;

export default function Results() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const visible = Array.from({ length: VISIBLE }, (_, i) => images[(current + i) % images.length]);

  return (
    <section id="resultados" className="bg-surface">
      <div className="max-w-7xl mx-auto px-8 py-[100px]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary mb-4 block">
            Resultados
          </span>
          <h2 className="font-headline text-[48px] font-bold leading-tight text-on-background mb-6">
            Transformações reais, acompanhadas de perto.
          </h2>
          <p className="text-[17px] text-outline leading-relaxed">
            Cada resultado aqui representa uma jornada única de escuta, ciência e dedicação.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3 images | Mobile: 1 image */}
          <div className="hidden md:grid grid-cols-3 gap-4 items-start">
            {visible.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full h-auto"
              />
            ))}
          </div>
          <div className="md:hidden">
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-auto"
            />
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-sm shadow-md hover:bg-surface-container transition-colors"
            style={{ boxShadow: '0 4px 16px rgba(26,28,28,0.10)' }}
          >
            <span className="material-symbols-outlined text-on-surface text-xl">chevron_left</span>
          </button>
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-sm shadow-md hover:bg-surface-container transition-colors"
            style={{ boxShadow: '0 4px 16px rgba(26,28,28,0.10)' }}
          >
            <span className="material-symbols-outlined text-on-surface text-xl">chevron_right</span>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para imagem ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-4' : 'bg-outline-variant'
              }`}
            />
          ))}
        </div>

        {/* Editorial block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20 mt-8">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary-container/30 z-0" />
            <img
              alt="Jornada de bem-estar: copo de suco verde ao lado de caderno minimalista sobre mesa branca com luz suave"
              className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="/A ciencia por tras de cada Grama.webp"
            />
          </div>
          <div className="space-y-8">
            <h3 className="font-headline text-4xl text-on-background">A ciência por trás de cada grama.</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Não acreditamos em fórmulas prontas. Nossa metodologia combina análise laboratorial avançada com o
              entendimento profundo do seu estilo de vida atual.
            </p>
            <div className="grid grid-cols-2 gap-8 py-4">
              <div>
                <h4 className="font-headline text-2xl text-primary">94%</h4>
                <p className="text-xs font-label uppercase tracking-widest text-secondary mt-1">Taxa de Adesão</p>
              </div>
              <div>
                <h4 className="font-headline text-2xl text-primary">500+</h4>
                <p className="text-xs font-label uppercase tracking-widest text-secondary mt-1">Vidas Transformadas</p>
              </div>
            </div>
            <button className="border-b-2 border-secondary-fixed text-on-surface font-medium pb-1 inline-flex items-center gap-2 group">
              Conheça nosso método{' '}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="font-body text-[11px] text-outline tracking-wide opacity-80">
            * Resultados individuais. Identidades preservadas com autorização dos pacientes.
          </p>
        </div>
      </div>
    </section>
  );
}
