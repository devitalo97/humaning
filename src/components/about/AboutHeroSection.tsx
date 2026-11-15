import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logoWhite from '@/assets/logo-white.svg';
import {
  Brain,
  MessageSquare,
  Users,
  BarChart3,
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';

export interface AboutHeroSectionProps {
  className?: string;
}

const CORE_PILLARS = [
  {
    title: 'Autoconhecimento Aplicado',
    description:
      'Identificação de tendências comportamentais, pontos fortes e áreas de desenvolvimento individual.',
    icon: Brain,
  },
  {
    title: 'Comunicação Assertiva',
    description:
      'Redução de ruídos, escuta ativa e clareza no alinhamento de expectativas entre líderes e equipes.',
    icon: MessageSquare,
  },
  {
    title: 'Liderança e Cooperação',
    description:
      'Desenvolvimento de líderes preparados para conduzir pessoas com respeito às diferenças individuais.',
    icon: Users,
  },
  {
    title: 'Gestão Orientada por Dados',
    description:
      'Uso de ferramentas técnicas e análises comportamentais para apoiar decisões estratégicas de gestão.',
    icon: BarChart3,
  },
];

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className={`relative bg-primary text-primary-foreground py-20 lg:py-24 border-b border-border/30 overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/10 border border-primary-foreground/20 mb-6">
            <img
              src={logoWhite}
              alt="Humaning"
              className="h-6 w-auto object-contain"
            />
            <span className="h-4 w-px bg-primary-foreground/30" aria-hidden="true" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Sobre a Humaning Capacitações
            </span>
          </div>

          <h1
            id="about-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-foreground leading-tight mb-6"
          >
            Humaning:{' '}
            <span className="underline decoration-secondary decoration-4 underline-offset-8">
              Entender
            </span>{' '}
            para{' '}
            <span className="inline-block bg-secondary text-secondary-foreground px-3.5 py-0.5 rounded-xl">
              Respeitar e Conectar
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8">
            A Humaning atua no desenvolvimento de pessoas, líderes e equipes por meio de palestras, workshops e programas de capacitação voltados ao fortalecimento da comunicação, da liderança e das relações interpessoais no ambiente de trabalho.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-extrabold px-7 shadow-lg"
            >
              <a
                href="https://wa.me/5527999580841"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Conversar com Luiz Ricardo</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold bg-transparent"
            >
              <Link to="/training" className="inline-flex items-center gap-2">
                <span>Conhecer Programas e Treinamentos</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 4 Pilares Institucionais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-background/10 backdrop-blur-xs rounded-2xl p-6 border border-primary-foreground/15 hover:border-secondary transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mb-4 shadow-sm">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-base font-extrabold text-primary-foreground mb-2">
                  {pillar.title}
                </h2>
                <p className="text-xs sm:text-sm text-primary-foreground/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutHeroSection;
