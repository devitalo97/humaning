import React from 'react';
import { TrainingHeroSection } from '@/components/training/TrainingHeroSection';
import { FlagshipProgramsSection } from '@/components/training/FlagshipProgramsSection';
import { SectorApplicationsSection } from '@/components/training/SectorApplicationsSection';
import { MethodologyToolsAndCasesSection } from '@/components/training/MethodologyToolsAndCasesSection';

export interface TrainingPageProps {
  className?: string;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({
  className = '',
}) => {
  return (
    <div className={`min-h-screen bg-background text-foreground ${className}`}>
      {/* 1. Hero de Treinamentos + 3 Modalidades (Palestras, Workshops, Programas) */}
      <TrainingHeroSection />

      {/* 2. Programas Autorais: Entender para Atender & Entender para Conectar */}
      <FlagshipProgramsSection />

      {/* 3. Aplicação no Setor Público (Secretarias de Educação, Saúde e Gestão) & Setor Privado */}
      <SectorApplicationsSection />

      {/* 4. Metodologia em 4 Etapas, 5 Ferramentas Aplicadas, Casos Reais & CTA */}
      <MethodologyToolsAndCasesSection />
    </div>
  );
};

export default TrainingPage;
