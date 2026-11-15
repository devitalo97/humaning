import React from 'react';
import luizRicardoPhoto from '@/assets/luiz-ricardo.jpg';
import {
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Instagram,
  Linkedin,
  Building2,
} from 'lucide-react';

export interface FounderProfileSectionProps {
  className?: string;
}

const ACADEMIC_AND_CERTIFICATIONS = [
  'Graduado em Gestão Comercial e Administração',
  'Especialista com MBAs pela FGV em Gestão Comercial, Marketing e Gestão Empresarial',
  'Analista de Perfil Comportamental CIS Assessment (99% de precisão diagnóstica)',
  'Formação em Coaching Integral Sistêmico e Hipnoterapia Aplicada',
  'Consultor e palestrante em desenvolvimento humano e organizacional desde 2022',
];

const CORPORATE_CAREER = [
  {
    institution: 'Rádio Nova Onda FM',
    role: 'Gestão Comercial & Liderança de Equipes',
    description: 'Desenvolvimento de estratégias comerciais, relacionamento com o mercado e condução de equipes.',
  },
  {
    institution: 'Rede Gazeta',
    role: 'Atuação Executiva & Mercado Corporativo',
    description: 'Experiência na maior rede de comunicação do Espírito Santo, articulando projetos e atendimento estratégico.',
  },
  {
    institution: 'Findes (Federação das Indústrias do ES)',
    role: 'Gestão & Articulação Institucional',
    description: 'Vivência direta com demandas empresariais, desenvolvimento industrial, educação corporativa e liderança.',
  },
];

const EXPERTISE_BADGES = [
  'Análise Comportamental CIS Assessment',
  'Liderança e Gestão de Equipes',
  'Comunicação Assertiva',
  'Coaching Integral Sistêmico',
  'Gestão Pública Municipal',
  'Alta Performance Comercial',
];

export const FounderProfileSection: React.FC<FounderProfileSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      aria-labelledby="founder-heading"
      className={`py-20 bg-background text-foreground border-b border-border/30 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-primary text-primary-foreground rounded-3xl overflow-hidden shadow-2xl border-2 border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Coluna da Foto e Identificação */}
            <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full bg-primary flex flex-col justify-end overflow-hidden">
              <img
                src={luizRicardoPhoto}
                alt="Luiz Ricardo Pereira de Souza — Fundador da Humaning, Especialista em Perfil Comportamental e Gestão Empresarial"
                className="w-full h-full object-cover object-top"
              />
              <div className="p-6 sm:p-8 bg-primary/95 border-t border-primary-foreground/15">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-extrabold text-xs uppercase tracking-wider mb-2">
                  Fundador & Especialista Responsável
                </span>
                <h2
                  id="founder-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-primary-foreground leading-tight"
                >
                  Luiz Ricardo Pereira de Souza
                </h2>
                <p className="text-sm text-accent font-semibold mt-1">
                  25+ anos de experiência em Gestão, Liderança e Desenvolvimento Comportamental
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-primary-foreground/15">
                  <a
                    href="https://www.linkedin.com/in/luiz-ricardo-pereira-de-souza-62634575/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-2 rounded-xl bg-background/15 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>LinkedIn Oficial</span>
                  </a>
                  <a
                    href="https://www.instagram.com/luizricardo.humane?obrf=OWJwZmFsZTB2YWFm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-2 rounded-xl bg-background/15 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>@luizricardo.humane</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna da Biografia Completa, Formação e Carreira */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-background text-foreground flex flex-col justify-between space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-secondary font-bold text-xs uppercase tracking-wider mb-3">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Quem Está por Trás da Humaning</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-4">
                  Experiência executiva aliada à ciência comportamental.
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Com mais de 25 anos de atuação prática no mercado de vendas, atendimento e direção estratégica, Luiz Ricardo construiu sua trajetória liderando equipes de alta performance em organizações de referência no Espírito Santo.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Suas principais marcas são o foco em resultados tangíveis, a didática objetiva e um olhar sistêmico voltado para o ser humano — traduzindo teorias complexas de gestão e comportamento em ferramentas aplicáveis ao dia a dia de servidores públicos, gestores e equipes corporativas.
                </p>
              </div>

              {/* Formação Acadêmica & Certificações */}
              <div className="bg-accent/25 rounded-2xl p-6 border border-border/40">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2 mb-4">
                  <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Formação Acadêmica & Certificações (Portfólio Oficial)</span>
                </h4>
                <ul className="space-y-2.5">
                  {ACADEMIC_AND_CERTIFICATIONS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trajetória Corporativa */}
              <div>
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2 mb-4">
                  <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Trajetória na Área Comercial, Gestão e Liderança</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {CORPORATE_CAREER.map((career) => (
                    <div
                      key={career.institution}
                      className="rounded-xl p-4 bg-background border border-border/50 shadow-xs"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-primary mb-1">
                        <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{career.institution}</span>
                      </div>
                      <p className="text-xs font-bold text-foreground mb-1">{career.role}</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {career.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Especialidades */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                {EXPERTISE_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-extrabold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FounderProfileSection;
