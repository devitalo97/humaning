import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logoWhite from '@/assets/logo-white.svg';
import { PUBLIC_INSTITUTIONS, GOOGLE_REVIEWS } from '@/data/portfolioData';
import {
  Landmark,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Images,
  BookOpen,
  Users,
  ExternalLink,
} from 'lucide-react';

export interface AboutImpactAndCtaSectionProps {
  className?: string;
}

export const AboutImpactAndCtaSection: React.FC<AboutImpactAndCtaSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      aria-labelledby="about-impact-heading"
      className={`py-20 bg-background text-foreground ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho de Impacto Regional */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground font-bold text-xs uppercase tracking-wider mb-4">
              <Users className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Alcance Institucional desde 2022</span>
            </div>
            <h2
              id="about-impact-heading"
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3"
            >
              Mais de 8.570 profissionais impactados no setor público e privado.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Atuamos em parceria com Prefeituras, Câmaras Municipais, Secretarias de Educação e Saúde, Sistema Comércio (Senac/Fecomércio/Sesc), IFES, faculdades, CDLs e empresas de diversos segmentos.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
            >
              <Link to="/training" className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                <span>Ver Treinamentos</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
            >
              <Link to="/galeria" className="inline-flex items-center gap-2">
                <Images className="h-4 w-4" aria-hidden="true" />
                <span>Ver Galeria de Eventos</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Destaques de Instituições Públicas Atendidas */}
        <div className="rounded-3xl bg-accent/25 border border-border/40 p-6 sm:p-8 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>10 Instituições Públicas Municipais Atendidas no Espírito Santo</span>
            </h3>
            <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-secondary">
              Gestão Pública & Legislativo
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PUBLIC_INSTITUTIONS.map((inst) => (
              <div
                key={inst.name}
                className="bg-background rounded-xl p-3.5 border border-border/40 shadow-2xs flex items-center gap-2.5"
              >
                <Landmark className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <span className="text-xs font-extrabold text-foreground leading-snug">
                  {inst.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Avaliações 5,0 no Google */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Reconhecimento Público: 5,0 Estrelas em 94 Avaliações no Google
              </h3>
              <p className="text-sm text-muted-foreground">
                Depoimentos reais de gestores, educadores e profissionais que vivenciaram as formações da Humaning.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-secondary font-extrabold text-sm self-start sm:self-auto">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
              <span className="ml-1 text-primary-foreground">5,0 ★ (94 avaliações)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GOOGLE_REVIEWS.map((review) => (
              <blockquote
                key={review.name}
                className="bg-background rounded-2xl p-6 border-2 border-border/40 shadow-xs flex flex-col justify-between"
              >
                <p className="text-sm text-foreground italic leading-relaxed mb-4">
                  “{review.quote}”
                </p>
                <footer className="pt-3 border-t border-border/30">
                  <div className="font-extrabold text-sm text-foreground">{review.name}</div>
                  <div className="text-xs font-semibold text-muted-foreground">{review.context}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* CTA Institucional Final */}
        <div className="relative overflow-hidden bg-primary text-primary-foreground rounded-3xl p-8 sm:p-12 border-2 border-border/40 shadow-2xl">
          <img
            src={logoWhite}
            alt=""
            aria-hidden="true"
            className="absolute -right-8 -bottom-8 w-56 h-auto opacity-5 pointer-events-none select-none"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-secondary mb-2">
                Diagnóstico & Proposta sob Medida
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3 leading-tight">
                Quer levar a metodologia da Humaning para a sua instituição?
              </h2>
              <p className="text-primary-foreground/85 text-base sm:text-lg leading-relaxed">
                Desenvolvemos palestras, workshops e programas personalizados considerando os desafios e a realidade de cada equipe pública ou privada.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
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
                  <span>Falar com Especialista no WhatsApp</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold bg-transparent"
              >
                <a
                  href="mailto:comercial@humaning.com.br"
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>comercial@humaning.com.br</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutImpactAndCtaSection;
