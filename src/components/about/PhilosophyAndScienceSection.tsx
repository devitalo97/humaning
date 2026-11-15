import React from 'react';
import {
  Quote, TrendingUp, Users, Brain, CheckCircle2, ShieldCheck, Target, Compass,
} from 'lucide-react';

export interface PhilosophyAndScienceSectionProps {
  className?: string;
}

const MARKET_INSIGHTS = [
  {
    stat: '87%',
    label: 'Demissões por Comportamento',
    description: 'das organizações demitem profissionais em razão de suas atitudes e comportamento — não por falta de competência técnica.',
    source: 'Fonte: Revista Você S/A',
    icon: TrendingUp,
    featured: true,
  },
  {
    stat: '20%',
    label: 'Alinhamento de Potencial',
    description: 'apenas das pessoas acreditam que seus empregos dão oportunidade diária de executar aquilo que fazem de melhor.',
    source: 'Fonte: Instituto Gallup',
    icon: Users,
    featured: false,
  },
  {
    stat: '99%',
    label: 'Precisão Diagnóstica',
    description: 'de assertividade científica na identificação de tendências comportamentais através da ferramenta CIS Assessment.',
    source: 'Metodologia CIS Assessment',
    icon: Brain,
    featured: false,
  },
];

const INSTITUTIONAL_VALUES = [
  {
    title: 'Respeito às Diferenças Individuais',
    description: 'Compreendemos que cada profissional possui um perfil único. Mapear essas características elimina julgamentos e fortalece a empatia.',
    icon: ShieldCheck,
  },
  {
    title: 'Prática Conectada à Realidade',
    description: 'Nossos programas consideram a rotina real de cada prefeitura, secretaria ou empresa, traduzindo conceitos em planos de ação.',
    icon: Compass,
  },
  {
    title: 'Resultados Sustentáveis na Gestão',
    description: 'Integramos autoconhecimento e ferramentas gerenciais (SWOT, Eisenhower, 5W2H e MAAS) para sustentar a evolução das equipes.',
    icon: Target,
  },
];

export const PhilosophyAndScienceSection: React.FC<PhilosophyAndScienceSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className={`py-20 bg-accent/25 text-foreground border-b border-border/30 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Missão & Filosofia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-secondary font-bold text-xs uppercase tracking-wider">
              Nossa Missão & Visão Comportamental
            </span>
            <h2 id="philosophy-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              Por que investir no desenvolvimento comportamental das equipes?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Humaning</strong> nasceu com o propósito de ajudar instituições públicas e empresas privadas a descobrirem os pontos fortes e as áreas de melhoria de suas equipes para alcançar seu potencial máximo.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              No cotidiano das organizações, o desempenho coletivo depende diretamente da forma como as pessoas se comunicam, lidam com pressões, exercem liderança e colaboram entre diferentes setores.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 border-2 border-border/40 shadow-xl relative">
              <Quote className="h-10 w-10 text-secondary mb-4" aria-hidden="true" />
              <blockquote className="text-lg font-bold text-primary-foreground leading-relaxed italic mb-4">
                “Quando entendemos as diferenças entre os membros da equipe, como suas personalidades e habilidades, podemos respeitar opiniões e trabalhar juntos de forma mais eficaz.”
              </blockquote>
              <div className="pt-4 border-t border-primary-foreground/15 text-xs font-extrabold uppercase tracking-wider text-secondary">
                Filosofia Humaning — Entender para Conectar e Atender
              </div>
            </div>
          </div>
        </div>

        {/* 3 Indicadores Científicos e de Mercado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {MARKET_INSIGHTS.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.label}
                className={`rounded-2xl p-7 border-2 shadow-md flex flex-col justify-between ${
                  item.featured
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.featured ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-secondary'
                      }`}
                    >
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                        item.featured ? 'bg-background/15 text-secondary' : 'bg-accent text-accent-foreground'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div className={`text-4xl sm:text-5xl font-extrabold mb-3 ${item.featured ? 'text-secondary' : 'text-primary'}`}>
                    {item.stat}
                  </div>
                  <p className={`text-sm leading-relaxed mb-4 ${item.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    {item.description}
                  </p>
                </div>
                <div className={`pt-3 border-t text-xs font-bold ${item.featured ? 'border-primary-foreground/15 text-accent' : 'border-border/30 text-foreground'}`}>
                  {item.source}
                </div>
              </article>
            );
          })}
        </div>

        {/* Metodologia CIS Assessment & Valores */}
        <div className="bg-background rounded-3xl p-8 md:p-10 border-2 border-border/40 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-extrabold text-xs uppercase tracking-wider mb-3">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Rigor Técnico e Humanização</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-3">
              Metodologia CIS Assessment e Gestão Comportamental
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Utilizamos uma das ferramentas mais completas e validadas do mercado, com <strong className="text-foreground">99% de precisão</strong> na análise de perfil comportamental. Nosso foco vai além do diagnóstico: entregamos relatórios e orientações práticas para que gestores saibam alocar talentos, reduzir conflitos e potencializar a liderança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSTITUTIONAL_VALUES.map((val) => {
              const IconComponent = val.icon;
              return (
                <div key={val.title} className="rounded-2xl p-6 bg-accent/20 border border-border/40 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary text-secondary flex items-center justify-center mb-4">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h4 className="font-extrabold text-base text-foreground mb-2">{val.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhilosophyAndScienceSection;
