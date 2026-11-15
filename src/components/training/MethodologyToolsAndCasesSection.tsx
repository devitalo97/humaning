import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_EVENTS } from '@/data/portfolioData';
import {
  Workflow, Wrench, MapPin, Users, Phone, Mail, ArrowRight, Images, ExternalLink,
} from 'lucide-react';

export interface MethodologyToolsAndCasesSectionProps {
  className?: string;
}

const METHODOLOGY_STEPS = [
  { step: '01', title: 'Alinhamento e planejamento', desc: 'Compreensão das necessidades da instituição, definição dos objetivos e estruturação das atividades.' },
  { step: '02', title: 'Capacitação e desenvolvimento', desc: 'Palestras e workshops com conteúdos aplicados à comunicação, liderança, autoconhecimento e relações profissionais.' },
  { step: '03', title: 'Análise comportamental', desc: 'Aplicação de ferramentas como o CIS Assessment, quando previstas no programa, para identificar tendências comportamentais e ampliar a compreensão das diferenças individuais.' },
  { step: '04', title: 'Relatórios e orientações para a gestão', desc: 'Organização das informações e elaboração de análises que podem apoiar a comunicação, o relacionamento e a condução das equipes.' },
];

const TOOLS_SUMMARY = [
  { name: 'CIS Assessment', role: 'Comportamental', desc: 'Análise de tendências comportamentais que contribui para o autoconhecimento e a compreensão das diferenças individuais.' },
  { name: 'Análise SWOT', role: 'Estratégia', desc: 'Identificação de forças, fraquezas, oportunidades e ameaças para apoiar o planejamento e a tomada de decisões.' },
  { name: 'Matriz de Eisenhower', role: 'Priorização', desc: 'Organização e priorização de atividades conforme sua importância e urgência.' },
  { name: '5W2H', role: 'Plano de Ação', desc: 'Estruturação de planos de ação com definição de responsabilidades, prazos, recursos e formas de execução.' },
  { name: 'MAAS', role: 'Atenção & Foco', desc: 'Ferramenta complementar utilizada nos programas da Humaning, conforme os objetivos definidos para cada capacitação.' },
];

export const MethodologyToolsAndCasesSection: React.FC<MethodologyToolsAndCasesSectionProps> = ({
  className = '',
}) => {
  return (
    <section aria-labelledby="training-methodology-heading" className={`py-20 bg-background text-foreground ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Parte 1: Metodologia em 4 Etapas + 5 Ferramentas (Páginas 6 e 7 do PDF) */}
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 sm:p-10 mb-20 shadow-xl border-2 border-border/40">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground font-bold text-xs uppercase tracking-wider mb-3">
              <Workflow className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Ciclo Técnico de Execução</span>
            </div>
            <h2 id="training-methodology-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight mb-3">
              Nossa metodologia de trabalho e ferramentas aplicadas.
            </h2>
            <p className="text-sm sm:text-base text-primary-foreground/85 leading-relaxed">
              Integramos conhecimento prático, vivências em grupo e ferramentas consagradas de análise comportamental e gestão para garantir que o aprendizado gere resultados sustentáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {METHODOLOGY_STEPS.map((item) => (
              <div key={item.step} className="bg-background text-foreground rounded-2xl p-5 border border-border/40 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-extrabold text-xs uppercase tracking-wider mb-3">
                    Etapa {item.step}
                  </span>
                  <h3 className="font-extrabold text-base text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-primary-foreground/15">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-secondary mb-4">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              <span>5 Ferramentas Aplicadas ao Desenvolvimento de Pessoas e à Gestão</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {TOOLS_SUMMARY.map((tool) => (
                <div key={tool.name} className="rounded-xl p-4 bg-background/10 border border-primary-foreground/15">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-accent-foreground mb-2">
                    {tool.role}
                  </span>
                  <h4 className="font-extrabold text-sm text-primary-foreground mb-1">{tool.name}</h4>
                  <p className="text-xs text-primary-foreground/80 leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parte 2: Histórias de Transformação & Casos Reais (Páginas 9, 10 e 11 do PDF) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-secondary text-xs font-extrabold uppercase tracking-wider mb-3">
                Histórias de Transformação • Na Prática
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Capacitações realizadas em instituições públicas e privadas.
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold self-start sm:self-auto"
            >
              <Link to="/galeria" className="inline-flex items-center gap-2">
                <Images className="h-4 w-4" aria-hidden="true" />
                <span>Ver Fotos na Galeria</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_EVENTS.map((ev) => (
              <article
                key={ev.id}
                className="bg-background rounded-2xl p-6 border-2 border-border/40 shadow-xs flex flex-col justify-between hover:border-primary transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {ev.sector}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      {ev.location}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-lg text-foreground mb-1">{ev.title}</h3>
                  <p className="text-xs font-bold text-primary mb-2">{ev.program}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{ev.description}</p>
                </div>
                <div className="pt-3 border-t border-border/30 flex items-center justify-between text-xs font-bold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
                    {ev.audience}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Parte 3: CTA Final */}
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 sm:p-12 border-2 border-border/40 shadow-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground max-w-3xl mx-auto mb-4 leading-tight">
            “Não importa o tamanho da sua organização. Se tem pessoas, nós temos a solução.”
          </h2>
          <p className="text-primary-foreground/85 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Solicite uma proposta personalizada para a sua prefeitura, câmara municipal, secretaria ou empresa.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-extrabold px-8 shadow-lg">
              <a href="https://wa.me/5527999580841" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Falar no WhatsApp: (027) 9 99958-0841</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold bg-transparent"
            >
              <a href="mailto:comercial@humaning.com.br" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>comercial@humaning.com.br</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MethodologyToolsAndCasesSection;
