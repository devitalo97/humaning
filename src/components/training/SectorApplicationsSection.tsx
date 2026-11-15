import React, { useState } from 'react';
import {
  Landmark, Building2, GraduationCap, HeartPulse, Briefcase, TrendingUp, Users, CheckCircle2,
} from 'lucide-react';

export interface SectorApplicationsSectionProps {
  className?: string;
}

const PUBLIC_SECRETARIAS = [
  {
    title: 'Secretaria de Educação',
    subtitle: 'Professores, Gestores Escolares e Equipes de Apoio',
    description:
      'Formação de professores, gestores escolares e equipes de apoio, com foco em comunicação, relações interpessoais e integração no ambiente escolar.',
    applications: [
      'Palestras magnas de Abertura do Ano Letivo e Jornadas Pedagógicas',
      'Integração e acolhimento entre direção, coordenação, docentes e apoio',
      'Comunicação empática na relação escola-família-comunidade',
    ],
    icon: GraduationCap,
  },
  {
    title: 'Secretaria de Saúde (SESA)',
    subtitle: 'Equipes Multiprofissionais, Recepção e Gestão em Saúde',
    description:
      'Capacitação de profissionais de saúde e atendimento, fortalecendo o acolhimento ao cidadão, a empatia e o trabalho em equipe.',
    applications: [
      'Humanização no atendimento ao cidadão nas unidades de saúde',
      'Gestão emocional e redução de ruídos em equipes multiprofissionais',
      'Alinhamento de lideranças e coordenações da rede municipal de saúde',
    ],
    icon: HeartPulse,
  },
  {
    title: 'Gestão Municipal & Legislativo',
    subtitle: 'Prefeitos, Secretários, Vereadores, Diretores e Coordenadores',
    description:
      'Desenvolvimento de secretários, coordenadores e lideranças, apoiando a comunicação, a condução de equipes e o alinhamento institucional.',
    applications: [
      'Imersões estratégicas para o Secretariado Municipal e Alta Gestão',
      'Capacitação de servidores de Câmaras Municipais e atendimento legislativo',
      'Análise de perfil comportamental e relatórios para condução de equipes',
    ],
    icon: Landmark,
  },
];

const PRIVATE_SOLUTIONS = [
  {
    title: 'Equipes Comerciais, Varejo e Atendimento',
    subtitle: 'Vendas Consultivas, Negociação e Experiência do Cliente',
    description:
      'Potencialize os resultados comerciais capacitando sua equipe para ler o perfil comportamental de cada cliente e adaptar a abordagem de vendas.',
    applications: [
      'Aumento da conversão em vendas e fidelização de clientes',
      'Atendimento consultivo para comércio, indústria, clínicas e serviços',
      'Treinamentos realizados com CDLs, shoppings, supermercados e cafeterias',
    ],
    icon: TrendingUp,
  },
  {
    title: 'Liderança Corporativa e Gestão de Pessoas',
    subtitle: 'Diretores, Gerentes, Supervisores e RH',
    description:
      'Formação de líderes preparados para delegar com clareza, dar feedbacks construtivos, reter talentos estratégicos e sustentar resultados.',
    applications: [
      'Mapeamento de perfil comportamental CIS Assessment para seleção e liderança',
      'Aplicação prática de SWOT, Matriz de Eisenhower e planos de ação 5W2H',
      'Desenvolvimento de liderança situacional e tomada de decisão',
    ],
    icon: Briefcase,
  },
  {
    title: 'Clima Organizacional, Educação e Entidades',
    subtitle: 'Sistema S, Faculdades, Cooperativas e Associações',
    description:
      'Programas voltados ao fortalecimento da cultura organizacional, engajamento de colaboradores e sinergia entre departamentos.',
    applications: [
      'Redução de conflitos internos e fortalecimento da comunicação não-violenta',
      'Palestras e workshops para instituições como Senac/Sesc, IFES, CIEE e faculdades',
      'Desenvolvimento de equipes que vestem a camisa da organização',
    ],
    icon: Users,
  },
];

export const SectorApplicationsSection: React.FC<SectorApplicationsSectionProps> = ({
  className = '',
}) => {
  const [activeSector, setActiveSector] = useState<'public' | 'private'>('public');
  const activeCards = activeSector === 'public' ? PUBLIC_SECRETARIAS : PRIVATE_SOLUTIONS;

  return (
    <section
      aria-labelledby="sector-applications-heading"
      className={`py-20 bg-accent/25 text-foreground border-b border-border/30 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-secondary font-bold text-xs uppercase tracking-wider mb-3">
              Onde Atuamos • Aplicabilidade Prática
            </span>
            <h2 id="sector-applications-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              Aplicação no Setor Público e nas Empresas Privadas.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Selecione o segmento abaixo para explorar como adaptamos nossos programas às necessidades específicas da gestão pública municipal ou do mercado corporativo.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Segmentos de atuação"
            className="inline-flex p-1.5 rounded-2xl bg-primary text-primary-foreground border border-border/40 self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeSector === 'public'}
              onClick={() => setActiveSector('public')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold inline-flex items-center gap-2 transition-all cursor-pointer ${
                activeSector === 'public'
                  ? 'bg-secondary text-secondary-foreground shadow-md'
                  : 'text-primary-foreground hover:bg-background/10'
              }`}
            >
              <Landmark className="h-4 w-4" aria-hidden="true" />
              <span>Gestão Pública & Secretarias</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeSector === 'private'}
              onClick={() => setActiveSector('private')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold inline-flex items-center gap-2 transition-all cursor-pointer ${
                activeSector === 'private'
                  ? 'bg-secondary text-secondary-foreground shadow-md'
                  : 'text-primary-foreground hover:bg-background/10'
              }`}
            >
              <Building2 className="h-4 w-4" aria-hidden="true" />
              <span>Empresas Privadas & Entidades</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {activeCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <article
                key={card.title}
                className="bg-background rounded-3xl p-7 border-2 border-border/40 shadow-md flex flex-col justify-between hover:border-primary transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary text-secondary flex items-center justify-center mb-5">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground mb-1">{card.title}</h3>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3">{card.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{card.description}</p>
                  <ul className="space-y-2.5 pt-4 border-t border-border/30">
                    {card.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="rounded-2xl bg-primary text-primary-foreground px-6 py-4 text-center">
          <p className="font-extrabold text-sm md:text-base text-secondary">
            {activeSector === 'public'
              ? '“Capacitações adaptadas à realidade de cada secretaria, fortalecendo as equipes e o atendimento ao cidadão.”'
              : '“Potencialize seus resultados comerciais e crie equipes de alta performance que vestem a camisa da organização.”'}
          </p>
        </div>
      </div>
    </section>
  );
};
export default SectorApplicationsSection;
