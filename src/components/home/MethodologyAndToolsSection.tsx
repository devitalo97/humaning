import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Compass, Presentation, Brain, FileBarChart, Target,
  Clock, CheckSquare, Sliders, ArrowRight, Workflow, Wrench,
} from 'lucide-react';

export interface MethodologyAndToolsSectionProps {
  className?: string;
}

const METHODOLOGY_STEPS = [
  {
    number: '01',
    title: 'Alinhamento e planejamento',
    description: 'Compreensão das necessidades da instituição, definição dos objetivos e estruturação das atividades.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Capacitação e desenvolvimento',
    description: 'Palestras e workshops com conteúdos aplicados à comunicação, liderança, autoconhecimento e relações profissionais.',
    icon: Presentation,
  },
  {
    number: '03',
    title: 'Análise comportamental',
    description: 'Aplicação de ferramentas como o CIS Assessment, quando previstas no programa, para identificar tendências comportamentais e ampliar a compreensão das diferenças individuais.',
    icon: Brain,
  },
  {
    number: '04',
    title: 'Relatórios e orientações para a gestão',
    description: 'Organização das informações e elaboração de análises que podem apoiar a comunicação, o relacionamento e a condução das equipes.',
    icon: FileBarChart,
  },
];

const APPLIED_TOOLS = [
  {
    name: 'CIS Assessment',
    badge: 'Comportamental',
    description: 'Análise de tendências comportamentais que contribui para o autoconhecimento e a compreensão das diferenças individuais.',
    icon: Brain,
  },
  {
    name: 'Análise SWOT',
    badge: 'Estratégia',
    description: 'Identificação de forças, fraquezas, oportunidades e ameaças para apoiar o planejamento e a tomada de decisões.',
    icon: Target,
  },
  {
    name: 'Matriz de Eisenhower',
    badge: 'Priorização',
    description: 'Organização e priorização de atividades conforme sua importância e urgência.',
    icon: Clock,
  },
  {
    name: '5W2H',
    badge: 'Plano de Ação',
    description: 'Estruturação de planos de ação com definição de responsabilidades, prazos, recursos e formas de execução.',
    icon: CheckSquare,
  },
  {
    name: 'MAAS',
    badge: 'Atenção Plena & Foco',
    description: 'Ferramenta complementar utilizada nos programas da Humaning, conforme os objetivos definidos para cada capacitação.',
    icon: Sliders,
  },
];

export const MethodologyAndToolsSection: React.FC<MethodologyAndToolsSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      aria-labelledby="methodology-heading"
      className={`py-20 bg-primary text-primary-foreground border-b border-border/30 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Parte 1: Nossa metodologia de trabalho (Página 6 do PDF) */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground font-bold text-xs uppercase tracking-wider mb-4">
            <Workflow className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Metodologia Estruturada • Como Atuamos</span>
          </div>
          <h2 id="methodology-heading" className="text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight mb-4">
            Nossa metodologia de trabalho.
          </h2>
          <p className="text-lg text-primary-foreground/85 leading-relaxed">
            A Humaning desenvolve programas que integram conhecimento, atividades práticas e análise comportamental, considerando as necessidades de cada instituição e as características de suas equipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {METHODOLOGY_STEPS.map((step) => {
            const IconComponent = step.icon;
            return (
              <article
                key={step.number}
                className="bg-background text-foreground rounded-2xl p-6 border-2 border-border/40 shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-secondary"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-secondary text-secondary-foreground font-extrabold text-sm tracking-wider">
                      ETAPA {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary text-secondary flex items-center justify-center">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2.5 leading-snug">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="rounded-xl bg-accent text-accent-foreground px-6 py-4 mb-20 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border/30">
          <p className="font-extrabold text-sm md:text-base text-center sm:text-left">
            “Conhecimento aplicado, informações organizadas e orientações para apoiar a gestão de pessoas.”
          </p>
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-primary-foreground shrink-0">
            Ciclo Completo
          </span>
        </div>

        {/* Parte 2: Ferramentas aplicadas ao desenvolvimento de pessoas e à gestão (Página 7 do PDF) */}
        <div className="pt-12 border-t border-primary-foreground/15">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground font-bold text-xs uppercase tracking-wider mb-3">
                <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Instrumentos Técnicos e Científicos</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary-foreground tracking-tight mb-3">
                Ferramentas aplicadas ao desenvolvimento de pessoas e à gestão.
              </h3>
              <p className="text-base text-primary-foreground/85 leading-relaxed">
                Utilizamos ferramentas de análise comportamental, planejamento e gestão para apoiar o autoconhecimento, a organização de processos e o desenvolvimento de competências profissionais.
              </p>
            </div>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shrink-0">
              <Link to="/training" className="inline-flex items-center gap-2">
                <span>Explorar aplicação nos treinamentos</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
            {APPLIED_TOOLS.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="bg-background/95 text-foreground rounded-2xl p-5 border border-border/30 shadow-md flex flex-col justify-between hover:border-secondary transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary text-secondary flex items-center justify-center shrink-0">
                        <IconComponent className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                        {tool.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-foreground mb-2">{tool.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm md:text-base font-bold text-secondary">
            “Ferramentas que contribuem para transformar conhecimento em análise, planejamento e práticas de gestão.”
          </p>
        </div>
      </div>
    </section>
  );
};
export default MethodologyAndToolsSection;
