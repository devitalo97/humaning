import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, CheckCircle2, Award, ArrowRight, Sparkles } from 'lucide-react';

export interface FlagshipProgramsSectionProps {
  className?: string;
}

const FLAGSHIP_PROGRAMS = [
  {
    id: 'entender-para-atender',
    tag: 'Programa Autoral 01 • Atendimento, Vendas & Liderança',
    title: 'Entender para Atender',
    subtitle: 'Excelência no atendimento ao público, vendas consultivas e liderança situacional através da leitura comportamental.',
    description:
      'Metodologia estruturada para transformar o atendimento — tanto no setor privado quanto no serviço público — permitindo que cada profissional compreenda o perfil de quem está sendo atendido e adapte sua comunicação com empatia, agilidade e assertividade.',
    pillars: [
      'Identificação rápida de perfis comportamentais no atendimento e nas vendas',
      'Adaptação da linguagem verbal e não-verbal para evitar atritos e ruídos',
      'Técnicas de acolhimento humanizado ao cidadão e fechamento de vendas complexas',
      'Liderança situacional para conduzir equipes de linha de frente sob pressão',
      'Construção de experiências positivas que fidelizam clientes e valorizam o serviço público',
    ],
    deliverables: 'Certificado oficial, material de apoio prático e plano de ação 5W2H.',
    icon: Briefcase,
    featured: false,
  },
  {
    id: 'entender-para-conectar',
    tag: 'Programa Autoral 02 • Liderança, Clima & Integração',
    title: 'Entender para Conectar',
    subtitle: 'Autoconhecimento, alinhamento de lideranças, comunicação não-violenta e sinergia entre equipes e secretarias.',
    description:
      'Formação imersiva voltada para secretários municipais, gestores, educadores, equipes de saúde e times corporativos. Desenvolve a compreensão profunda das diferenças individuais para eliminar conflitos internos e fortalecer a cooperação diária.',
    pillars: [
      'Mapeamento de tendências comportamentais (aplicação opcional do CIS Assessment)',
      'Comunicação assertiva e não-violenta entre líderes, pares e subordinados',
      'Gestão construtiva de conflitos e fortalecimento da confiança mútua',
      'Integração intersetorial (alinhamento entre secretarias ou departamentos)',
      'Relatórios e orientações práticas para apoiar a tomada de decisão da gestão',
    ],
    deliverables: 'Devolutiva comportamental, dinâmicas integrativas e relatório gerencial.',
    icon: Users,
    featured: true,
  },
];

export const FlagshipProgramsSection: React.FC<FlagshipProgramsSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      id="programas-autorais"
      aria-labelledby="flagship-programs-heading"
      className={`py-20 bg-background text-foreground border-b border-border/30 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground font-bold text-xs uppercase tracking-wider mb-4">
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Metodologias Exclusivas Humaning</span>
          </div>
          <h2 id="flagship-programs-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            Nossos Pilares de Programas Autorais.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Programas desenvolvidos por Luiz Ricardo Pereira de Souza e validados por mais de 8.570 profissionais em prefeituras, câmaras municipais, instituições de ensino e empresas privadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FLAGSHIP_PROGRAMS.map((prog) => {
            const IconComponent = prog.icon;
            return (
              <article
                key={prog.id}
                className={`rounded-3xl p-8 sm:p-10 border-2 shadow-xl flex flex-col justify-between transition-all ${
                  prog.featured
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                        prog.featured ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-secondary'
                      }`}
                    >
                      {prog.tag}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        prog.featured ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-secondary'
                      }`}
                    >
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-extrabold mb-2 ${prog.featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {prog.title}
                  </h3>
                  <p className={`text-sm font-bold mb-4 ${prog.featured ? 'text-secondary' : 'text-primary'}`}>
                    {prog.subtitle}
                  </p>
                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${prog.featured ? 'text-primary-foreground/85' : 'text-muted-foreground'}`}>
                    {prog.description}
                  </p>

                  <div
                    className={`rounded-2xl p-5 mb-6 border ${
                      prog.featured ? 'bg-background/10 border-primary-foreground/15' : 'bg-accent/25 border-border/40'
                    }`}
                  >
                    <h4
                      className={`text-xs font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${
                        prog.featured ? 'text-secondary' : 'text-foreground'
                      }`}
                    >
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Competências Desenvolvidas no Programa</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {prog.pillars.map((pillar) => (
                        <li
                          key={pillar}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm font-semibold ${
                            prog.featured ? 'text-primary-foreground' : 'text-foreground'
                          }`}
                        >
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 mt-0.5 ${prog.featured ? 'text-secondary' : 'text-primary'}`}
                            aria-hidden="true"
                          />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    prog.featured ? 'border-primary-foreground/15' : 'border-border/40'
                  }`}
                >
                  <p className={`text-xs font-bold ${prog.featured ? 'text-primary-foreground/85' : 'text-muted-foreground'}`}>
                    <strong className={prog.featured ? 'text-secondary' : 'text-foreground'}>Entregáveis: </strong>
                    {prog.deliverables}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className={
                      prog.featured
                        ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90 font-extrabold shrink-0'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold shrink-0'
                    }
                  >
                    <a href="https://wa.me/5527999580841" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                      <span>Solicitar este programa</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FlagshipProgramsSection;
