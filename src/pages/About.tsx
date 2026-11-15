import React from 'react';
import { AboutHeroSection } from '@/components/about/AboutHeroSection';
import { FounderProfileSection } from '@/components/about/FounderProfileSection';
import { PhilosophyAndScienceSection } from '@/components/about/PhilosophyAndScienceSection';
import { AboutImpactAndCtaSection } from '@/components/about/AboutImpactAndCtaSection';

export interface AboutPageProps {
  className?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ className = '' }) => {
  return (
    <div className={`min-h-screen bg-background text-foreground ${className}`}>
      {/* 1. Hero Institucional Sobre a Humaning & 4 Pilares */}
      <AboutHeroSection />

      {/* 2. Perfil Executivo Completo de Luiz Ricardo Pereira de Souza */}
      <FounderProfileSection />

      {/* 3. Missão, Filosofia, Dados Científicos (87%, 20%, 99%) & Metodologia CIS Assessment */}
      <PhilosophyAndScienceSection />

      {/* 4. Alcance Regional (8.570+ Profissionais, 10 Órgãos Públicos, 5,0★ Google) & CTA */}
      <AboutImpactAndCtaSection />
    </div>
  );
};

export default AboutPage;
