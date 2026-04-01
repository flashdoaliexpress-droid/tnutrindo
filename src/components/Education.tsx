export default function Education() {
  return (
    <section id="educacao" className="bg-surface-container-low py-[100px] px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">
            Consciência Alimentar
          </span>
          <h2 className="font-headline text-4xl md:text-[44px] leading-tight text-primary mb-6">
            O que você come conta uma história sobre quem você quer ser.
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            Nossa abordagem transcende calorias. Exploramos a sinergia entre biologia individual e a sabedoria dos
            alimentos integrais para criar longevidade sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          <div className="md:col-span-6 group relative overflow-hidden bg-primary h-[500px] md:h-[600px] shadow-sm flex flex-col justify-end p-10 md:p-12">
            <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
              <img
                alt="Vegetais orgânicos vibrantes e folhas verdes com iluminação natural suave e sombras profundas sobre fundo escuro"
                className="w-full h-full object-cover"
                src="/Consciência Alimentar.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <span className="text-secondary-fixed text-xs font-bold tracking-widest uppercase mb-4 block">
                Fisiologia Individual
              </span>
              <h3 className="font-headline italic text-3xl md:text-5xl text-on-primary leading-tight mb-6 max-w-lg">
                Por que sua dieta funciona para a sua vizinha e não para você?
              </h3>
              <div className="flex items-center text-on-primary/60 text-sm font-medium tracking-wide">
                <span className="material-symbols-outlined text-sm mr-2">schedule</span>8 min de leitura
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-surface-container-lowest p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <div>
                <span className="text-primary/40 text-xs font-bold tracking-widest uppercase mb-4 block">
                  Microbioma
                </span>
                <h4 className="font-headline text-2xl text-primary leading-snug group-hover:text-secondary transition-colors">
                  A segunda mente: como o intestino molda seu humor diário.
                </h4>
              </div>
              <div className="mt-8 flex justify-between items-end">
                <span className="text-on-surface-variant text-xs font-medium">Capítulo 04</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </div>

            <div className="flex-1 bg-secondary-container p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <div>
                <span className="text-secondary/60 text-xs font-bold tracking-widest uppercase mb-4 block">
                  Suplementação
                </span>
                <h4 className="font-headline text-2xl text-on-secondary-container leading-snug">
                  O mito das vitaminas sintéticas vs. biodisponibilidade real.
                </h4>
              </div>
              <div className="mt-8 flex justify-between items-end">
                <span className="text-on-secondary-container/70 text-xs font-medium">Guia Prático</span>
                <span className="material-symbols-outlined text-secondary">north_east</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-surface-container-lowest p-6 flex items-center gap-6 group cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-24 h-24 overflow-hidden flex-shrink-0">
                <img
                  alt="Vista aérea de nozes e sementes sobre superfície branca com iluminação editorial"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBxDFnu8NV5Da4dRfVdA6z7v52JXfyP3o_n2RWZZ5_aQn8uImM8kqGUFuunKrtaJ_loKdQYG29tpB9gI1wR6YaTeSlHgcTYdz9wB-es7o52tyl97m63VmeVrEZvJzFv5MceheN8T5Yvfe7_wbpRPwZTTgSKbr1mT7HyQc4sc6YdFZqBcdScX3S8RQ3qckKSW9s5ygvqlF0GYXTRZ7WjUxgy7K675WY22PqdlD-ob1y4rij8b77ghXTnY7AuKzKSIKrCX4JaYN18LC9"
                />
              </div>
              <div>
                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase mb-1 block">
                  Nutrientes
                </span>
                <h5 className="font-headline text-lg text-primary leading-tight">Gorduras Inteligentes</h5>
                <p className="text-on-surface-variant text-xs mt-2 line-clamp-2">
                  A base para a saúde cognitiva e hormonal.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 flex items-center gap-6 group cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-24 h-24 overflow-hidden flex-shrink-0">
                <img
                  alt="Close-up artístico de smoothie verde sendo servido em copo de cristal, fotografia macro"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQeuKcukqa3YPwdDqte_7wekg3qt1WleugJNX_lEvTJq4U9ger308LZW1RmkG2d2Eqwy6dow43jMFFKtRl1Jd0ekzjR1KnVkpRdUyjQqfIS_XOlecW46yrjKInfLeFRjcsejOLKCb9VaSvclicMFeflPxUmugivsJwdidnaWZJoYHyZ8FIgJQLxFeyS7vpHOQ1tEWPas1J6GmoavKfkVEawekpApMCW3tvuvmB1uxijhDJl_w0r_G3gdbM2aEZxclI-6uLPhvcxxP_"
                />
              </div>
              <div>
                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase mb-1 block">
                  Hábitos
                </span>
                <h5 className="font-headline text-lg text-primary leading-tight">Ritual Matinal</h5>
                <p className="text-on-surface-variant text-xs mt-2 line-clamp-2">
                  Como a hidratação redefine seu metabolismo.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 flex items-center gap-6 group cursor-pointer hover:shadow-md transition-shadow">
              <div className="w-24 h-24 overflow-hidden flex-shrink-0">
                <img
                  alt="Alimentos e ciência nutricional — glicose e impacto dos alimentos no organismo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="/A ciencia por tras de cada Grama.webp"
                />
              </div>
              <div>
                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase mb-1 block">
                  Ciência
                </span>
                <h5 className="font-headline text-lg text-primary leading-tight">Glicose em Foco</h5>
                <p className="text-on-surface-variant text-xs mt-2 line-clamp-2">
                  A ordem dos alimentos e o impacto no sangue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
