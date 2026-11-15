import React from 'react';
import { Button } from '@/components/ui/button';
import logoWhite from '@/assets/logo-white.svg';
import {
  Mic,
  Wrench,
  Layers,
  Phone,
  CheckCircle2,
  Sparkles,
  Clock,
  Users,
} from 'lucide-react';

export interface TrainingHeroSectionProps {
  className?: string;
}

const SOLUTION_FORMATS = [
  {
    badge: 'Modalidade 01',
    title: 'Palestras',
    duration: '1h30 a 2h de duração',
    audience: 'Grandes públicos, convenções e aberturas de ano letivo',
    description:
      'Encontros voltados à sensibilização, reflexão e desenvolvimento de temas ligados ao comportamento humano, comunicação e liderança.',
    highlights: [
      'Alto impacto motivacional e alinhamento de propósito institucional',
      'Linguagem acessível, dinâmica e conectada à realidade dos participantes',
      'Ideal para semanas pedagógicas, convenções comerciais e eventos municipais',
    ],
    icon: Mic,
  },
  {
    badge: 'Modalidade 02',
    title: 'Workshops',
    duration: '4h a 8h (Imersão Prática)',
    audience: 'Líderes, gestores, secretariado e equipes setoriais',
    description:
      'Atividades práticas que estimulam a participação, a troca de experiências e a aplicação de conceitos no cotidiano de trabalho.',
    highlights: [
      'Dinâmicas de grupo e construção de planos de ação reais (5W2H e SWOT)',
      'Desenvolvimento de escuta ativa, empatia e resolução de conflitos',
      'Foco imediato na melhoria do clima e da cooperação entre setores',
    ],
    icon: Wrench,
  },
  {
    badge: 'Modalidade 03',
    title: 'Programas de desenvolvimento',
    duration: 'Jornada Continuada / Modular',
    audience: 'Instituições públicas, secretarias e empresas privadas',
    description:
      'Projetos estruturados de acordo com a realidade da instituição, podendo incluir encontros formativos, atividades práticas e aplicação de ferramentas de análise comportamental.',
    highlights: [
      'Mapeamento de perfil comportamental com CIS Assessment (quando previsto)',
      'Devolutivas estruturadas e relatórios de apoio para a gestão',
      'Acompanhamento de evolução de lideranças e equipes estratégicas',
    ],
    icon: Layers,
  },
];

export const TrainingHeroSection: React.FC<TrainingHeroSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      aria-labelledby="training-hero-heading"
      className={`bg-primary text-primary-foreground py-20 lg:py-24 border-b border-border/30 relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
      />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Hero Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/10 border border-primary-foreground/20 mb-6">
            <img
              src={logoWhite}
              alt="Humaning"
              className="h-6 w-auto object-contain"
            />
            <span className="h-4 w-px bg-primary-foreground/30" aria-hidden="true" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Portfólio de Capacitações & Treinamentos
            </span>
          </div>

          <h1
            id="training-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-foreground leading-tight mb-6"
          >
            Capacitação que{' '}
            <span className="underline decoration-secondary decoration-4 underline-offset-8">
              Gera
            </span>{' '}
            <span className="inline-block bg-secondary text-secondary-foreground px-3.5 py-0.5 rounded-xl">
              Resultados Reais
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8">
            Soluções personalizadas para o desenvolvimento de equipes no setor privado e na gestão pública. Estruturamos programas de acordo com os desafios, os objetivos e o perfil de cada instituição.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-extrabold px-8 shadow-lg"
            >
              <a
                href="https://wa.me/5527999580841"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Solicitar Proposta Personalizada</span>
              </a>
            </Button>
            <a
              href="#programas-autorais"
              className="px-5 py-3 rounded-xl text-sm font-extrabold border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Conhecer Programas Autorais
            </a>
          </div>
        </div>

        {/* 3 Formatos de Soluções (Página 4 do PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SOLUTION_FORMATS.map((format) => {
            const IconComponent = format.icon;
            return (
              <article
                key={format.title}
                className="bg-background text-foreground rounded-3xl p-7 border-2 border-border/40 shadow-xl flex flex-col justify-between hover:border-secondary transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-extrabold uppercase tracking-wider">
                      {format.badge}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-primary text-secondary flex items-center justify-center">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-extrabold text-foreground mb-2">
                    {format.title}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-accent/40 text-foreground">
                      <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      {format.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-foreground">
                      <Users className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      Sob medida
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {format.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-border/30">
                    {format.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-foreground"
                      >
                        <CheckCircle2
                          className="h-4 w-4 text-primary shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-border/30 text-xs font-bold text-muted-foreground">
                  Público: <span className="text-foreground">{format.audience}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TrainingHeroSection;
