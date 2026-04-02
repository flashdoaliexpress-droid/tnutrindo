import { useState } from 'react';

interface Article {
  tag: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  readTime: string;
  body: string;
}

const FEATURED_ARTICLE: Article = {
  tag: 'Fisiologia Individual',
  title: 'Por que cada pessoa precisa de uma dieta personalizada',
  summary: 'Cada corpo é único — e a alimentação ideal também é.',
  image: '/Consciência Alimentar.webp',
  imageAlt: 'Vegetais orgânicos vibrantes e folhas verdes',
  readTime: '8 min de leitura',
  body: `Cada corpo é único — e a alimentação ideal também é.

Fatores como genética, idade, rotina, nível de atividade física e condições de saúde influenciam diretamente o que o seu organismo precisa. Uma dieta que funciona perfeitamente para uma pessoa pode não trazer os mesmos resultados para outra, ou até ser prejudicial.

Por isso, contar com a orientação de um nutricionista é essencial para montar um plano alimentar que respeite a sua individualidade e alcance os seus objetivos de verdade.`,
};

const ARTICLES: Article[] = [
  {
    tag: 'Fibras',
    title: 'O poder das fibras — e por que a maioria das pessoas não ingere o suficiente',
    summary: 'Além de regular o intestino, fibras alimentam o microbioma e reduzem inflamação.',
    image: '/Artigo Fibras.webp',
    imageAlt: 'Frutas, leguminosas e grãos integrais ricos em fibras',
    readTime: '4 min de leitura',
    body: `O consumo de fibras virou tema central em 2026. Além de regular o intestino, fibras alimentam o microbioma (as bactérias "boas" do intestino), ajudam no controle glicêmico e reduzem inflamação. A maior parte das pessoas consome menos da metade do que deveria.

Fontes: frutas, leguminosas, grãos integrais e sementes.`,
  },
  {
    tag: 'Mindful Eating',
    title: 'Alimentação consciente (Mindful Eating) — comer bem vai além da dieta',
    summary: 'Entenda os gatilhos emocionais que levam à compulsão e aprenda a comer com atenção plena.',
    image: '/Artigo Alimentação Conciente.webp',
    imageAlt: 'Pessoa comendo com atenção plena e consciência',
    readTime: '5 min de leitura',
    body: `A relação emocional com a comida tem ganhado muito espaço. O mindful eating propõe entender os gatilhos emocionais que levam à compulsão, comer com atenção plena e sem culpa.

É um assunto que ressoa com quase todo mundo, já que a maioria das pessoas já teve dificuldades com "comer por ansiedade".`,
  },
  {
    tag: 'Proteína',
    title: 'Proteína: quanto você realmente precisa?',
    summary: 'Há muita confusão sobre quantidade, fontes e distribuição ao longo do dia.',
    image: '/Artigo Proteinas.webp',
    imageAlt: 'Fontes de proteína — ovos, leguminosas e carnes magras',
    readTime: '5 min de leitura',
    body: `Proteínas viraram obsessão popular, mas há muita confusão sobre quantidade, fontes e distribuição ao longo do dia. Entender o papel da proteína na saciedade, na preservação muscular e no metabolismo é algo útil tanto para quem quer emagrecer quanto para quem quer ganhar massa ou simplesmente ter mais energia.`,
  },
];

export default function Education() {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);

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
          <button
            onClick={() => setOpenArticle(FEATURED_ARTICLE)}
            className="md:col-span-6 group relative overflow-hidden bg-primary h-[500px] md:h-[600px] shadow-sm flex flex-col justify-end p-10 md:p-12 text-left cursor-pointer"
          >
            <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
              <img
                alt={FEATURED_ARTICLE.imageAlt}
                className="w-full h-full object-cover"
                src={FEATURED_ARTICLE.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <span className="text-secondary-fixed text-xs font-bold tracking-widest uppercase mb-4 block">
                {FEATURED_ARTICLE.tag}
              </span>
              <h3 className="font-headline italic text-3xl md:text-5xl text-on-primary leading-tight mb-6 max-w-lg">
                {FEATURED_ARTICLE.title}
              </h3>
              <div className="flex items-center text-on-primary/60 text-sm font-medium tracking-wide">
                <span className="material-symbols-outlined text-sm mr-2">schedule</span>{FEATURED_ARTICLE.readTime}
              </div>
            </div>
          </button>

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
            {ARTICLES.map((article) => (
              <button
                key={article.title}
                onClick={() => setOpenArticle(article)}
                className="bg-surface-container-lowest p-6 flex items-center gap-6 group cursor-pointer hover:shadow-md transition-shadow text-left w-full"
              >
                <div className="w-24 h-24 overflow-hidden flex-shrink-0">
                  <img
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={article.image}
                  />
                </div>
                <div>
                  <span className="text-secondary text-[10px] font-bold tracking-widest uppercase mb-1 block">
                    {article.tag}
                  </span>
                  <h5 className="font-headline text-lg text-primary leading-tight">{article.title}</h5>
                  <p className="text-on-surface-variant text-xs mt-2 line-clamp-2">{article.summary}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {openArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpenArticle(null)}
        >
          <div
            className="bg-surface-container-lowest max-w-xl w-full rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-56 overflow-hidden">
              <img
                src={openArticle.image}
                alt={openArticle.imageAlt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-8">
              <span className="text-secondary text-[10px] font-bold tracking-widest uppercase mb-3 block">
                {openArticle.tag}
              </span>
              <h3 className="font-headline text-2xl text-primary leading-snug mb-2">
                {openArticle.title}
              </h3>
              <div className="flex items-center text-on-surface-variant text-xs mb-6 gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {openArticle.readTime}
              </div>
              <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">
                {openArticle.body}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => setOpenArticle(null)}
                  className="flex items-center gap-2 text-secondary font-semibold text-sm hover:underline"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                  Fechar
                </button>
                <a
                  href="#hero"
                  onClick={() => setOpenArticle(null)}
                  className="flex items-center gap-2 text-on-surface-variant font-semibold text-sm hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base">home</span>
                  Voltar ao início
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
