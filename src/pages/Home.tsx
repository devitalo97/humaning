import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '@/components/home/HeroSection';
import { ChallengesSection } from '@/components/home/ChallengesSection';
import { AboutPreviewSection } from '@/components/home/AboutPreviewSection';
import { SolutionsAndSecretariasSection } from '@/components/home/SolutionsAndSecretariasSection';
import { MethodologyAndToolsSection } from '@/components/home/MethodologyAndToolsSection';
import { ClientsAndInstitutionsSection } from '@/components/home/ClientsAndInstitutionsSection';
import { GalleryPreviewSection } from '@/components/home/GalleryPreviewSection';
import { TestimonialsAndContactSection } from '@/components/home/TestimonialsAndContactSection';
import { ArrowUpRight, UserCheck, BookOpen, Images } from 'lucide-react';

export interface HomePageProps {
  className?: string;
}

const PAGE_PREVIEW_SHORTCUTS = [
  {
    label: 'Página Sobre',
    description: 'Quem é a Humaning, trajetória de Luiz Ricardo e certificações',
    to: '/about',
    icon: UserCheck,
  },
  {
    label: 'Página Treinamentos',
    description: 'Programas Entender para Atender & Conectar, palestras e workshops',
    to: '/training',
    icon: BookOpen,
  },
  {
    label: 'Página Galeria',
    description: 'Registros fotográficos de capacitações no setor público e privado',
    to: '/galeria',
    icon: Images,
  },
];

export const HomePage: React.FC<HomePageProps> = ({ className = '' }) => {
  return (
    <div className={`min-h-screen bg-background text-foreground ${className}`}>
      {/* 1. Hero Institucional + Indicadores de Impacto (Páginas 1, 8, 12 e 13 do Portfólio) */}
      <HeroSection />

      {/* Hub Rápido de Prévia das Páginas Internas (/about, /training, /galeria) */}
      <nav
        aria-label="Acesso rápido às páginas do portal"
        className="bg-accent/35 border-b border-border/30 py-6"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PAGE_PREVIEW_SHORTCUTS.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group bg-background rounded-2xl p-4 border border-border/40 shadow-sm hover:border-primary hover:shadow-md transition-all flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary text-secondary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                        {item.label}
                      </span>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 2. Desafios das Equipes & Benefícios Comportamentais (Página 2 do Portfólio) */}
      <ChallengesSection />

      {/* 3. Prévia da Página Sobre: Quem é a Humaning & Luiz Ricardo (Página 3 do Portfólio) */}
      <AboutPreviewSection />

      {/* 4. Prévia da Página Treinamentos: Soluções, Programas e Aplicação nas Secretarias (Páginas 4 e 5) */}
      <SolutionsAndSecretariasSection />

      {/* 5. Metodologia em 4 Etapas & 5 Ferramentas Aplicadas (Páginas 6 e 7 do Portfólio) */}
      <MethodologyAndToolsSection />

      {/* 6. Instituições Públicas (10) e Empresas Atendidas (34) + 8.570 Profissionais (Páginas 8 e 12) */}
      <ClientsAndInstitutionsSection />

      {/* 7. Prévia da Página Galeria: Nossa Atuação na Prática (Páginas 9, 10 e 11 do Portfólio) */}
      <GalleryPreviewSection />

      {/* 8. Avaliações 5,0 no Google (94), Depoimentos e Contato Institucional (Páginas 13, 14 e 15) */}
      <TestimonialsAndContactSection />
    </div>
  );
};

