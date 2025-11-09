import { TrainingProject, TeamMember, ProgramModule, Service } from '@/types';

export const COMPANY_INFO = {
  name: 'Humaning',
  tagline: 'Transforme sua equipe com nossos programas de transformação.',
  taglineOriginal: 'Transforme sua equipe com o programa Entender para Atender.',
  description: 'Empresa especializada em análise de perfil comportamental que ajuda pessoas a descobrir pontos fortes e áreas de melhoria, alcançando seu potencial máximo.',
  mission: 'Transformar equipes através do autoconhecimento e da comunicação eficaz.',
  values: ['Humanização', 'Comunicação clara', 'Respeito às diferenças', 'Autorresponsabilidade'],
  impact: '4.400+ pessoas impactadas desde 2022',
  accuracy: '99% de precisão',
};

export const FOUNDER: TeamMember = {
  id: '1',
  name: 'Luiz Ricardo Pereira de Souza',
  role: 'Fundador e Especialista em Comportamento',
  bio: 'Com 25 anos de experiência em vendas e atendimento, dedica-se à análise comportamental e desenvolvimento de equipes.',
  experience: '25 anos em vendas e atendimento',
  credentials: ['MBA em Gestão Empresarial (FGV)', 'Especialista em Comunicação e Comportamento', 'Validação acadêmica (UFC)'],
};

export const MAIN_PROGRAMS: Service[] = [
  {
    id: '1',
    title: 'Entender para Atender',
    description: 'Programa completo de análise de perfil comportamental aplicado a vendas, atendimento, liderança e comunicação.',
    features: [
      'Análise de perfil comportamental individual',
      'Relatório detalhado com pontos fortes e áreas de melhoria',
      'SWOT aplicada ao desempenho profissional',
      'Técnicas práticas de comunicação',
      'Livro "O Poder da Autorresponsabilidade"',
    ],
    targetAudience: [
      'Equipes de vendas',
      'Times de atendimento ao cliente',
      'Líderes e gestores',
      'Profissionais de comunicação',
    ],
    duration: '10 horas (imersão única ou 2-3 módulos)',
    deliverables: [
      'Relatório individual de perfil comportamental',
      'Livro "O Poder da Autorresponsabilidade"',
      'Certificado de conclusão',
    ],
  },
  {
    id: '2',
    title: 'Entender para se Conectar',
    description: 'Programa focado em relacionamentos interpessoais e criação de conexões autênticas através da compreensão comportamental.',
    features: [
      'Análise de compatibilidade comportamental',
      'Técnicas de empatia e conexão',
      'Construção de relacionamentos duradouros',
      'Comunicação não-violenta',
      'Estratégias de networking efetivo',
    ],
    targetAudience: [
      'Equipes de projeto',
      'Profissionais de RH',
      'Líderes comunitários',
      'Vendedores B2B',
    ],
    duration: '8 horas (imersão única ou 2 módulos)',
    deliverables: [
      'Mapa de compatibilidade interpessoal',
      'Guia de conexões comportamentais',
      'Certificado de conclusão',
    ],
  }
];

// Mantém compatibilidade com o código existente
export const MAIN_PROGRAM: Service = MAIN_PROGRAMS[0];

export const PROGRAM_MODULES: ProgramModule[] = [
  {
    id: '1',
    title: 'Autoconhecimento e Perfil Comportamental',
    description: 'Descoberta dos traços comportamentais e suas aplicações práticas no ambiente profissional.',
    duration: '4 horas',
    objectives: [
      'Identificar pontos fortes e áreas de melhoria',
      'Compreender o impacto do comportamento nos resultados',
      'Aplicar o autoconhecimento em vendas e atendimento',
    ],
  },
  {
    id: '2',
    title: 'SWOT e Desempenho',
    description: 'Análise SWOT aplicada ao desenvolvimento profissional e relações interpessoais.',
    duration: '3 horas',
    objectives: [
      'Mapear oportunidades e ameaças profissionais',
      'Desenvolver estratégias de melhoria contínua',
      'Fortalecer relacionamentos profissionais',
    ],
  },
  {
    id: '3',
    title: 'Autorresponsabilidade',
    description: 'As 6 leis práticas para ambientes colaborativos e de alta performance.',
    duration: '3 horas',
    objectives: [
      'Dominar as 6 leis da autorresponsabilidade',
      'Criar ambientes de trabalho colaborativos',
      'Aumentar a performance individual e da equipe',
    ],
  },
];

export const TRAINING_PROJECTS: TrainingProject[] = [
  {
    id: '1',
    title: 'Boa Esperança – Projeto Entender para Atender',
    location: 'Boa Esperança/ES',
    status: 'completed',
    date: '2024',
    description: 'Capacitação completa em análise de perfil comportamental para equipe municipal.',
  },
  {
    id: '2',
    title: 'Pinheiros – Projeto Entender para Atender',
    location: 'Pinheiros/ES',
    status: 'completed',
    date: '2024',
    description: 'Programa de desenvolvimento de lideranças com foco em comunicação.',
  },
  {
    id: '3',
    title: 'Colatina – Capacitação em Vendas e Atendimento',
    location: 'Colatina/ES',
    status: 'completed',
    date: '2023',
    description: 'Treinamento especializado em vendas baseado na análise de perfil comportamental.',
  },
];

export const SERVICES_CATEGORIES = [
  'Workshops de Comunicação',
  'Treinamentos em Atendimento',
  'Desenvolvimento de Vendas',
  'Programas de Liderança',
  'Capacitação em Autorresponsabilidade',
];

export const CONTACT_INFO = {
  social: {
    linkedin: 'https://linkedin.com/in/luiz-ricardo-pereira-de-souza',
    instagram: 'https://instagram.com/humaning',
  },
  // To be added: phone, email, address, hours
};

export const NAVIGATION_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Programa', href: '/programa' },
  { label: 'Treinamentos', href: '/treinamentos' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'Contato', href: '/contato' },
];