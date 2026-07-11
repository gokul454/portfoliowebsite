import React, { createContext, useContext } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import type { Project, SkillGroup, ExperienceItem, TimelineItem, ServiceItem, LandingData } from '@/types';

interface PortfolioContextType {
  projects: Project[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  timeline: TimelineItem[];
  services: ServiceItem[];
  landing?: LandingData;
  loading: boolean;
  error: Error | undefined;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const data = usePortfolioData();

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
