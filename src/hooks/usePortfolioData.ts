import { collection, doc } from 'firebase/firestore';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '@/lib/firebase';
import type { Project, SkillGroup, ExperienceItem, TimelineItem, ServiceItem, LandingData } from '@/types';

export function usePortfolioData() {
  const [projectsData, projectsLoading, projectsError] = useCollectionData(
    collection(db, 'projects')
  );

  const [skillsData, skillsLoading, skillsError] = useCollectionData(
    collection(db, 'skills')
  );

  const [experienceData, expLoading, expError] = useCollectionData(
    collection(db, 'experience')
  );

  const [timelineData, timelineLoading, timelineError] = useCollectionData(
    collection(db, 'timeline')
  );

  const [servicesData, servicesLoading, servicesError] = useCollectionData(
    collection(db, 'services')
  );

  const [landingDataRaw, landingLoading, landingError] = useDocumentData(
    doc(db, 'settings', 'landing')
  );

  // Sorting
  const projects = (projectsData as Project[] || []).sort((a, b) => (a.index || '').localeCompare(b.index || ''));
  const skills = skillsData as SkillGroup[] || [];
  const experience = experienceData as ExperienceItem[] || [];
  const timeline = (timelineData as TimelineItem[] || []).sort((a, b) => (a.year || '').localeCompare(b.year || ''));
  const services = (servicesData as ServiceItem[] || []).sort((a, b) => (a.index || '').localeCompare(b.index || ''));
  const landing = landingDataRaw as LandingData | undefined;

  const loading = projectsLoading || skillsLoading || expLoading || timelineLoading || servicesLoading || landingLoading;
  const error = projectsError || skillsError || expError || timelineError || servicesError || landingError;

  return {
    projects,
    skills,
    experience,
    timeline,
    services,
    landing,
    loading,
    error
  };
}
