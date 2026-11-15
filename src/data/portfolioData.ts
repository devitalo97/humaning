export interface PortfolioEventItem {
  id: string;
  title: string;
  program: string;
  sector: string;
  location: string;
  audience: string;
  description: string;
}

export const PUBLIC_INSTITUTIONS = [
  { name: 'Prefeitura de São Mateus', type: 'Poder Executivo Municipal' },
  { name: 'Prefeitura Municipal de Sooretama', type: 'Poder Executivo Municipal' },
  { name: 'Prefeitura Municipal de São Domingos do Norte', type: 'Poder Executivo Municipal' },
  { name: 'Prefeitura de Conceição da Barra', type: 'Poder Executivo Municipal' },
  { name: 'Prefeitura Municipal de Pinheiros', type: 'Poder Executivo Municipal' },
  { name: 'Prefeitura Municipal de Boa Esperança', type: 'Poder Executivo Municipal' },
  { name: 'Prefeitura de Pedro Canário', type: 'Poder Executivo Municipal' },
  { name: 'Prefeitura de Nova Venécia', type: 'Poder Executivo Municipal' },
  { name: 'Câmara Municipal de Jaguaré', type: 'Poder Legislativo Municipal' },
  { name: 'Câmara Municipal de Vila Valério', type: 'Poder Legislativo Municipal' },
] as const;

export const PRIVATE_COMPANIES_AND_ENTITIES = [
  { name: 'Senac / Fecomércio / Sesc', segment: 'Sistema Comércio & Educação' },
  { name: 'Instituto Federal do Espírito Santo (IFES - Campus Nova Venécia)', segment: 'Ensino Superior & Técnico' },
  { name: 'Faculdade Capixaba Univertix', segment: 'Ensino Superior' },
  { name: 'UniCB (Centro Universitário Castelo Branco)', segment: 'Ensino Superior' },
  { name: 'CIEE Espírito Santo', segment: 'Integração Empresa-Escola' },
  { name: 'CDL Colatina', segment: 'Entidade Empresarial' },
  { name: 'CDL Aracruz', segment: 'Entidade Empresarial' },
  { name: 'CDL Jaguaré', segment: 'Entidade Empresarial' },
  { name: 'CDL Pinheiros', segment: 'Entidade Empresarial' },
  { name: 'CDL Boa Esperança', segment: 'Entidade Empresarial' },
  { name: 'CDL Vila Valério', segment: 'Entidade Empresarial' },
  { name: 'STRAF (Sindicato dos Trabalhadores Rurais de Nova Venécia e Vila Pavão)', segment: 'Representação Sindical' },
  { name: 'Santa Teresa Convention & Visitors Bureau', segment: 'Turismo & Eventos' },
  { name: 'Escola Municipal 21 de Agosto (Educação Pinheiros)', segment: 'Educação Básica' },
  { name: 'Escola Candido Portinari', segment: 'Educação' },
  { name: 'Santa Maria', segment: 'Corporativo' },
  { name: 'Robusta Coffee', segment: 'Agronegócio & Café' },
  { name: 'Medimagem', segment: 'Saúde & Diagnóstico' },
  { name: 'Stone Nova Venécia', segment: 'Tecnologia & Pagamentos' },
  { name: 'Shopping ModaBrasil Premium', segment: 'Shopping & Atacado' },
  { name: 'Chisté Contabilidade', segment: 'Contabilidade & Gestão' },
  { name: 'Padaria Marchesini', segment: 'Gastronomia & Varejo' },
  { name: 'Padaria Salute', segment: 'Gastronomia & Varejo' },
  { name: 'DDARE', segment: 'Indústria & Comércio' },
  { name: 'Boa Fruta', segment: 'Agroindústria' },
  { name: 'DRK Eventos', segment: 'Eventos & Produções' },
  { name: 'Óticas Novamatic', segment: 'Varejo Óptico' },
  { name: 'Lar de Abigail', segment: 'Instituição Social' },
  { name: 'UM Supermercado', segment: 'Varejo Supermercadista' },
  { name: 'Multi Show São José', segment: 'Varejo & Supermercados' },
  { name: 'Iluminardo', segment: 'Iluminação & Projetos' },
  { name: 'RPL Sonorização', segment: 'Sonorização & Eventos' },
  { name: 'Líderes do Futuro', segment: 'Formação de Lideranças' },
  { name: 'Lojas Mercadão', segment: 'Varejo' },
] as const;

export const PORTFOLIO_EVENTS: PortfolioEventItem[] = [
  {
    id: 'sao-mateus-secretarios',
    title: 'Secretários Municipais de São Mateus',
    program: 'Programa Entender para Conectar',
    sector: 'Gestão Municipal & Liderança',
    location: 'São Mateus / ES',
    audience: 'Secretariado e Alta Gestão Municipal',
    description:
      'Imersão estratégica voltada ao alinhamento de lideranças, comunicação institucional, análise comportamental e integração entre secretarias municipais.',
  },
  {
    id: 'boa-esperanca-secretarios',
    title: 'Secretários Municipais de Boa Esperança',
    program: 'Desenvolvimento de Lideranças Públicas',
    sector: 'Gestão Municipal',
    location: 'Boa Esperança / ES',
    audience: 'Secretários e Gestores de Equipes',
    description:
      'Capacitação prática com foco em condução de equipes, tomada de decisão colaborativa e fortalecimento da cultura de resultados no serviço público.',
  },
  {
    id: 'pinheiros-educacao',
    title: 'Abertura do Ano Letivo – Educação de Pinheiros',
    program: 'Palestras e Mobilização Pedagógica',
    sector: 'Secretaria de Educação',
    location: 'Pinheiros / ES',
    audience: 'Professores, Gestores Escolares e Equipes de Apoio',
    description:
      'Encontro de grande porte para acolhimento, motivação e fortalecimento das relações interpessoais no ambiente escolar para centenas de educadores.',
  },
  {
    id: 'boa-esperanca-educacao',
    title: 'Abertura do Ano Letivo – Educação de Boa Esperança',
    program: 'Comunicação, Propósito e Integração Escolar',
    sector: 'Secretaria de Educação',
    location: 'Boa Esperança / ES',
    audience: 'Rede Municipal de Ensino',
    description:
      'Capacitação voltada ao engajamento dos profissionais da educação, integração entre equipes escolares e comunicação empática com alunos e famílias.',
  },
  {
    id: 'conceicao-da-barra-saude',
    title: 'Secretaria Municipal de Saúde de Conceição da Barra',
    program: 'Programa Entender para Conectar — Saúde',
    sector: 'Secretaria de Saúde',
    location: 'Conceição da Barra / ES',
    audience: 'Profissionais de Saúde, Atendimento e Gestão',
    description:
      'Formação aplicada ao acolhimento ao cidadão, humanização no atendimento em saúde, empatia e integração entre equipes multiprofissionais.',
  },
];

export const GOOGLE_REVIEWS = [
  {
    name: 'Sebastião Lavanhole',
    context: 'Participante — Formação Entender para Conectar',
    quote:
      'A formação Entender para Conectar foi uma experiência muito enriquecedora. Trouxe reflexões importantes sobre autoconhecimento, comunicação e relações interpessoais.',
  },
  {
    name: 'Evandro Lucas Viturino',
    context: 'Profissional da Educação — Capacitação Humaning',
    quote:
      'Vivenciamos um formação memorável, enriquecedora e dinâmica! Foi um dia de muito aprendizado, troca e conexão, que renovaram minhas energias e fortaleceram ainda mais meu propósito na educação.',
  },
  {
    name: 'Scheila Tessarolo',
    context: 'Participante — Análise de Perfil & Equipes',
    quote:
      'Foi uma experiência enriquecedora!! Identificamos nosso perfil, nossas potencialidades e fragilidades, bem como de nossos colegas de trabalho e assim, aprimoramos ainda mais nossas relações interpessoais.',
  },
] as const;

export const INSTITUTIONAL_TESTIMONIAL_GROUPS = [
  {
    group: 'Secretários — Boa Esperança',
    sector: 'Gestão Municipal',
    summary:
      'Relatos de secretários municipais sobre o alinhamento estratégico, fortalecimento da liderança e integração entre pastas.',
  },
  {
    group: 'Secretários — São Mateus',
    sector: 'Gestão Municipal',
    summary:
      'Depoimentos sobre o programa Entender para Conectar aplicado à comunicação assertiva e tomada de decisão no executivo.',
  },
  {
    group: 'SESA — Conceição da Barra',
    sector: 'Secretaria Municipal de Saúde',
    summary:
      'Experiências das equipes de saúde sobre acolhimento humanizado, empatia no atendimento ao cidadão e trabalho colaborativo.',
  },
  {
    group: 'SEME — São Mateus',
    sector: 'Secretaria Municipal de Educação',
    summary:
      'Vivências de gestores e educadores sobre motivação, relações interpessoais e fortalecimento do ambiente escolar.',
  },
] as const;
