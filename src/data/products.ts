export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
}

export const categories = [
  'Consultas',
  'Programas',
  'Planos Alimentares',
  'Suplementos',
];

export const products: Product[] = [
  {
    id: 'consulta-avaliacao',
    name: 'Consulta de Avaliação Nutricional',
    category: 'Consultas',
    price: 25000,
    description: 'Primeira consulta completa com anamnese alimentar, avaliação antropométrica e definição de objetivos.',
  },
  {
    id: 'consulta-retorno',
    name: 'Consulta de Retorno',
    category: 'Consultas',
    price: 18000,
    description: 'Acompanhamento e ajuste do plano alimentar com base na evolução e nos resultados obtidos.',
  },
  {
    id: 'consulta-online',
    name: 'Teleconsulta Individual',
    category: 'Consultas',
    price: 22000,
    description: 'Consulta nutricional completa realizada remotamente via videochamada, com a mesma qualidade do atendimento presencial.',
  },
  {
    id: 'consulta-comportamental',
    name: 'Consulta de Nutrição Comportamental',
    category: 'Consultas',
    price: 28000,
    description: 'Sessão focada na relação emocional com a comida, gatilhos alimentares e construção de hábitos sustentáveis.',
  },
  {
    id: 'programa-emagrecimento',
    name: 'Programa Emagrecimento Saudável — 3 meses',
    category: 'Programas',
    price: 89700,
    description: 'Programa estruturado de 12 semanas com consultas mensais, suporte por mensagens e ajustes semanais do plano.',
  },
  {
    id: 'programa-performance',
    name: 'Programa Performance & Energia',
    category: 'Programas',
    price: 97000,
    description: 'Para atletas e praticantes de atividade física que buscam otimizar performance, recuperação e composição corporal.',
  },
  {
    id: 'programa-saude-intestinal',
    name: 'Programa Saúde Intestinal',
    category: 'Programas',
    price: 85000,
    description: 'Abordagem funcional para reequilíbrio da microbiota intestinal, melhora da digestão e bem-estar geral.',
  },
  {
    id: 'plano-semana',
    name: 'Plano Alimentar Semanal',
    category: 'Planos Alimentares',
    price: 9900,
    description: 'Cardápio personalizado para 7 dias com lista de compras, preparos práticos e adaptações para sua rotina.',
  },
  {
    id: 'plano-mensal',
    name: 'Plano Alimentar Mensal',
    category: 'Planos Alimentares',
    price: 29900,
    description: 'Planejamento nutricional completo para 30 dias, com variações sazonais, substituições e receitas exclusivas.',
  },
  {
    id: 'suplemento-probiotico',
    name: 'Guia de Suplementação: Probióticos',
    category: 'Suplementos',
    price: 4900,
    description: 'E-book com orientações sobre uso de probióticos, cepas recomendadas e protocolos baseados em evidências.',
  },
  {
    id: 'suplemento-vitaminas',
    name: 'Guia de Suplementação: Vitaminas & Minerais',
    category: 'Suplementos',
    price: 5900,
    description: 'Material completo sobre as principais vitaminas e minerais, doses, interações e como identificar deficiências.',
  },
  {
    id: 'suplemento-proteinas',
    name: 'Guia de Proteínas e Aminoácidos',
    category: 'Suplementos',
    price: 4900,
    description: 'Orientações práticas sobre ingestão proteica, tipos de proteína, horários ideais e mitos sobre suplementação.',
  },
];
