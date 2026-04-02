const ABOUT_IMAGE = '/Imagem Sobre.webp';

export default function About() {
  return (
    <section id="sobre" className="bg-surface-container-lowest py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <img
                src={ABOUT_IMAGE}
                alt="Stefani Moreira, nutricionista clínica e comportamental, em ambiente profissional"
                className="w-full aspect-[3/4] object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-center text-sm text-outline font-label">
              CRN 3-47821 · Nutricionista Clínica
            </p>
          </div>

          <div className="flex flex-col gap-8 pt-2 lg:pt-6">
            <div>
              <span className="inline-block text-xs font-label font-semibold uppercase tracking-widest text-secondary mb-3">
                Sobre
              </span>
              <h1 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface leading-tight mb-1">
                Olá, sou Stefani Moreira.
              </h1>
              <h2 className="font-headline text-xl lg:text-2xl text-on-surface-variant font-normal mb-6">
                Nutricionista Clínica e Comportamental
              </h2>

              <div className="flex flex-col gap-4 text-on-surface-variant leading-relaxed">
                <p>
                  Há mais de 8 anos ajudo pessoas a encontrar equilíbrio através da alimentação — não como restrição, mas como cuidado genuíno consigo mesmo. Acredito que comer bem vai muito além de números e tabelas.
                </p>
                <p>
                  Minha abordagem combina a ciência da nutrição clínica com a profundidade da nutrição comportamental: entendemos juntos sua história, seus hábitos, seus desafios e construímos um caminho que faz sentido para a sua vida.
                </p>
                <p>
                  Atendo presencialmente em São Paulo e também de forma online, porque resultados reais não dependem de onde você está, mas de como você é cuidado.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-secondary pl-5 py-1">
              <p className="font-headline italic text-lg text-on-surface leading-snug">
                "Não existe dieta universal — existe escuta, ciência e individualidade."
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-label font-semibold text-secondary bg-secondary-container px-4 py-2 rounded-sm">
                <span className="material-symbols-outlined text-base">school</span>
                Pós-graduada em Nutrição Comportamental
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-label font-semibold text-secondary bg-secondary-container px-4 py-2 rounded-sm">
                <span className="material-symbols-outlined text-base">verified</span>
                Especialista em Emagrecimento Saudável
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <div className="bg-surface-container-low rounded-lg p-7 flex flex-col gap-3">
            <span className="material-symbols-outlined text-3xl text-secondary">psychiatry</span>
            <h3 className="font-headline text-xl font-bold text-on-surface">Abordagem Personalizada</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Cada plano é construído exclusivamente para você, considerando seus objetivos, rotina, preferências e necessidades específicas. Sem receitas prontas.
            </p>
          </div>
          <div className="rounded-lg p-7 flex flex-col gap-3" style={{ backgroundColor: '#1B4332' }}>
            <span className="material-symbols-outlined text-3xl" style={{ color: '#AEEECB' }}>eco</span>
            <h3 className="font-headline text-xl font-bold text-white">Conexão Natural</h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Valorizamos alimentos reais, ritmos biológicos e uma relação saudável com a comida — porque sustentabilidade é o verdadeiro objetivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
