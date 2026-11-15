import React from 'react';
import { Button } from '@/components/ui/button';
import logoWhite from '@/assets/logo-white.svg';
import { GOOGLE_REVIEWS, INSTITUTIONAL_TESTIMONIAL_GROUPS } from '@/data/portfolioData';
import {
  Star, Quote, MessageSquareQuote, Phone, Mail,
  Instagram, Linkedin, ExternalLink, CheckCircle2,
} from 'lucide-react';

export interface TestimonialsAndContactSectionProps {
  className?: string;
}

const CONTACT_CHANNELS = [
  { label: 'comercial@humaning.com.br', href: 'mailto:comercial@humaning.com.br', icon: Mail, external: false },
  { label: '+55 (27) 99958-0841', href: 'https://wa.me/5527999580841', icon: Phone, external: true },
  { label: '@luizricardo.humane', href: 'https://www.instagram.com/luizricardo.humane?obrf=OWJwZmFsZTB2YWFm', icon: Instagram, external: true },
  { label: 'Luiz Ricardo Pereira de Souza (LinkedIn)', href: 'https://www.linkedin.com/in/luiz-ricardo-pereira-de-souza-62634575/', icon: Linkedin, external: true },
] as const;

export const TestimonialsAndContactSection: React.FC<TestimonialsAndContactSectionProps> = ({
  className = '',
}) => {
  return (
    <section aria-labelledby="testimonials-heading" className={`py-20 bg-background text-foreground ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Parte 1: Avaliações no Google (Página 13 do PDF) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground font-bold text-xs uppercase tracking-wider mb-4">
              <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
              <span>Google Meu Negócio • Nota Máxima 5,0</span>
            </div>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              A experiência de quem já participou.
            </h2>
            <p className="text-lg text-muted-foreground">
              Reconhecimento de quem vivenciou a nossa atuação em palestras, workshops e programas de desenvolvimento.
            </p>
          </div>

          <div className="bg-primary text-primary-foreground rounded-2xl px-6 py-4 border-2 border-border/40 shadow-md flex items-center gap-4 shrink-0">
            <div className="text-center pr-4 border-r border-primary-foreground/20">
              <p className="text-3xl font-extrabold text-secondary leading-none">5,0</p>
              <div className="flex items-center gap-0.5 mt-1 text-secondary" aria-label="5 de 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                ))}
              </div>
            </div>
            <div>
              <p className="font-extrabold text-sm md:text-base text-primary-foreground">94 avaliações no Google</p>
              <p className="text-xs text-primary-foreground/80">Nota média de 5,0 estrelas • 100% de aprovação</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {GOOGLE_REVIEWS.map((review) => (
            <article
              key={review.name}
              className="bg-background rounded-2xl p-7 border-2 border-border/40 shadow-sm flex flex-col justify-between hover:border-primary transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 bg-primary text-secondary px-2.5 py-1 rounded-full">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-muted-foreground/40" aria-hidden="true" />
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed mb-6 italic">“{review.quote}”</p>
              </div>
              <div className="pt-4 border-t border-border/30">
                <h3 className="font-extrabold text-sm text-foreground">{review.name}</h3>
                <p className="text-xs font-semibold text-muted-foreground">{review.context}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Parte 2: Depoimentos Institucionais de quem participou (Página 14 do PDF) */}
        <div className="rounded-3xl bg-accent/35 border border-border/40 p-8 md:p-10 mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-secondary font-bold text-xs uppercase tracking-wider mb-3">
              <MessageSquareQuote className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Depoimentos Institucionais em Vídeo & Registro</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
              Depoimentos de quem participou.
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mt-1">
              Conheça experiências de participantes dos nossos programas: gestores e equipes que vivenciaram nossas formações.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSTITUTIONAL_TESTIMONIAL_GROUPS.map((item) => (
              <div
                key={item.group}
                className="bg-background rounded-2xl p-5 border border-border/40 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground mb-3">
                    {item.sector}
                  </span>
                  <h4 className="font-extrabold text-base text-foreground mb-2">{item.group}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.summary}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/20 flex items-center gap-1.5 text-xs font-bold text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>Registro Oficial Humaning</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parte 3: CTA Final de Contato (Página 15 do PDF) */}
        <div
          id="contato-institucional"
          className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl border-2 border-border/40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <img
                src={logoWhite}
                alt="Humaning — Desenvolvimento Humano e Organizacional"
                className="h-10 md:h-12 w-auto object-contain mb-6"
              />
              <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground tracking-tight mb-4 leading-tight">
                Vamos conversar sobre as necessidades da sua instituição?
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-6">
                A Humaning desenvolve programas de capacitação considerando os desafios e a realidade de cada equipe. Entre em contato para solicitar um diagnóstico ou proposta personalizada.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-extrabold shadow-lg">
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
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-background/10 rounded-2xl p-6 border border-primary-foreground/15 space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-secondary">
                Canais Diretos de Atendimento
              </h3>
              <ul className="space-y-3 text-sm">
                {CONTACT_CHANNELS.map((ch) => {
                  const IconComponent = ch.icon;
                  return (
                    <li key={ch.label}>
                      <a
                        href={ch.href}
                        target={ch.external ? '_blank' : undefined}
                        rel={ch.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 text-primary-foreground hover:text-secondary transition-colors font-semibold"
                      >
                        <IconComponent className="h-4 w-4 text-secondary shrink-0" aria-hidden="true" />
                        <span>{ch.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsAndContactSection;
