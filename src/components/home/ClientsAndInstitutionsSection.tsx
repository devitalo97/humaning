import React, { useState } from 'react';
import { Landmark, Building2, Users, Award, CheckCircle2 } from 'lucide-react';
import {
  PUBLIC_INSTITUTIONS,
  PRIVATE_COMPANIES_AND_ENTITIES,
} from '@/data/portfolioData';

export interface ClientsAndInstitutionsSectionProps {
  className?: string;
}

type TabFilter = 'all' | 'public' | 'private';

export const ClientsAndInstitutionsSection: React.FC<ClientsAndInstitutionsSectionProps> = ({
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<TabFilter>('all');

  return (
    <section
      aria-labelledby="clients-heading"
      className={`py-20 bg-background text-foreground border-b border-border/30 ${className}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Banner de impacto de profissionais atendidos (Página 12 do PDF) */}
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 mb-14 shadow-xl border-2 border-border/40 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 shadow-md">
              <Users className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-secondary mb-1">
                Alcance Comprovado no Espírito Santo
              </span>
              <h2
                id="clients-heading"
                className="text-2xl md:text-3xl font-extrabold text-primary-foreground tracking-tight"
              >
                8.570 profissionais já participaram de nossos programas desde 2022.
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {(['all', 'public', 'private'] as const).map((tab) => {
              const labels: Record<TabFilter, string> = {
                all: 'Todas as Organizações (44)',
                public: 'Setor Público (10)',
                private: 'Empresas & Entidades (34)',
              };
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={isSelected}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-secondary text-secondary-foreground shadow-md'
                      : 'bg-background/10 text-primary-foreground hover:bg-background/20 border border-primary-foreground/20'
                  }`}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Parte 1: Instituições Públicas atendidas (Página 8 do PDF) */}
        {(activeTab === 'all' || activeTab === 'public') && (
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-secondary font-bold text-xs uppercase tracking-wider mb-3">
                  <Landmark className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Setor Público • Gestão Municipal</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                  Instituições Públicas atendidas.
                </h3>
                <p className="text-base text-muted-foreground mt-1">
                  Experiência no desenvolvimento de equipes na gestão pública municipal.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground self-start md:self-auto">
                8 Prefeituras • 2 Câmaras Municipais
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {PUBLIC_INSTITUTIONS.map((inst) => (
                <div
                  key={inst.name}
                  className="bg-primary text-primary-foreground rounded-2xl p-5 border border-border/40 shadow-sm flex flex-col justify-between hover:border-secondary transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center mb-3">
                    <Landmark className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-primary-foreground leading-snug mb-1">
                      {inst.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-secondary">{inst.type}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs md:text-sm font-bold text-muted-foreground bg-accent/35 border border-border/30 rounded-xl px-5 py-3 text-center">
              “Atuação em diferentes municípios, contribuindo para o desenvolvimento de pessoas e o fortalecimento da gestão pública.”
            </p>
          </div>
        )}

        {/* Parte 2: Empresas atendidas (Página 12 do PDF) */}
        {(activeTab === 'all' || activeTab === 'private') && (
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-bold text-xs uppercase tracking-wider mb-3">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Setor Privado, Educação e Entidades</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                  Empresas atendidas.
                </h3>
                <p className="text-base text-muted-foreground mt-1">
                  Organizações que confiam em nossos programas de desenvolvimento de pessoas, líderes e equipes.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold self-start md:self-auto">
                <Award className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                <span>Múltiplos Segmentos Atendidos</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-6">
              {PRIVATE_COMPANIES_AND_ENTITIES.map((org) => (
                <div
                  key={org.name}
                  className="bg-background rounded-xl p-4 border border-border/40 shadow-sm flex items-start gap-3 hover:bg-accent/20 hover:border-primary transition-colors"
                >
                  <CheckCircle2
                    className="h-4 w-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-extrabold text-xs md:text-sm text-foreground leading-snug">
                      {org.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      {org.segment}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs md:text-sm font-bold text-muted-foreground bg-accent/35 border border-border/30 rounded-xl px-5 py-3 text-center">
              “Experiência em diferentes segmentos, contribuindo para o desenvolvimento de pessoas, líderes e equipes.”
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default ClientsAndInstitutionsSection;
