import type { SkillGroup, ExperienceItem, TimelineItem, ServiceItem } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    label: 'Platform',
    items: ['Microsoft 365', 'SharePoint Online', 'SPFx', 'Microsoft Dynamics 365'],
  },
  {
    label: 'Engineering',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Component Architecture'],
  },
  {
    label: 'Integration',
    items: ['Power Automate', 'Azure SQL', '.NET APIs', 'REST APIs', 'Workflow Automation'],
  },
  {
    label: 'Practice',
    items: ['Git', 'Responsive Design', 'Business Requirement Analysis'],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'SharePoint Developer',
    company: 'Aufait Technologies',
    period: 'Present',
    points: [
      'Deliver enterprise SharePoint and Microsoft 365 solutions across client engagements, from requirement analysis through to production release.',
      'Work directly with business stakeholders to translate operational needs into scoped, maintainable technical solutions.',
      'Design and implement workflow automation using Power Automate, replacing manual processes with governed digital ones.',
      'Build SPFx frontends in React and TypeScript, integrating SharePoint, Azure SQL, and third-party REST APIs into cohesive applications.',
    ],
  },

  {
    role: 'Intern Full Stack Developer',
    company: 'NodDesk',
    period: '2025 June - 2026 Jan',
    points: [
      'Deliver enterprise SharePoint and Microsoft 365 solutions across client engagements, from requirement analysis through to production release.',
      'Work directly with business stakeholders to translate operational needs into scoped, maintainable technical solutions.',
      'Design and implement workflow automation using Power Automate, replacing manual processes with governed digital ones.',
      'Build SPFx frontends in React and TypeScript, integrating SharePoint, Azure SQL, and third-party REST APIs into cohesive applications.',
    ],
  },
];


export const timeline: TimelineItem[] = [
  {
    year: '01',
    title: 'Learning',
    description:
      'Built a foundation in frontend fundamentals — HTML, CSS, and JavaScript — with an early interest in how structured systems present information.',
  },
  {
    year: '02',
    title: 'SharePoint',
    description:
      'Moved into the Microsoft 365 ecosystem, learning SharePoint Online and SPFx as a way to build applications inside the platforms enterprises already trust.',
  },
  {
    year: '03',
    title: 'Enterprise Development',
    description:
      'Took on larger engagements — enterprise migrations, admin-configurable intranets, and CRM integrations — developing a component-driven, requirements-first way of working.',
  },
  {
    year: '04',
    title: 'Microsoft 365 Developer',
    description:
      'Working today as a Microsoft 365 developer, building SharePoint and SPFx solutions that simplify business process and hold up at enterprise scale.',
  },
];

export const services: ServiceItem[] = [
  {
    index: '01',
    title: 'Enterprise SharePoint Development',
    description: 'End-to-end SharePoint Online solutions built for scale, governance, and long-term maintainability.',
  },
  {
    index: '02',
    title: 'SPFx Development',
    description: 'Custom web parts and extensions built in React and TypeScript, native to the SharePoint framework.',
  },
  {
    index: '03',
    title: 'Microsoft 365 Solutions',
    description: 'Applications that work with the Microsoft 365 stack, not around it — Teams, SharePoint, and beyond.',
  },
  {
    index: '04',
    title: 'Business Process Automation',
    description: 'Manual workflows re-modelled in Power Automate, reducing operational overhead and human error.',
  },
  {
    index: '05',
    title: 'React Frontend Development',
    description: 'Component-driven interfaces engineered for clarity, responsiveness, and reuse.',
  },
  {
    index: '06',
    title: 'Intranet Development',
    description: 'Admin-configurable intranet platforms that put content control back in the hands of the business.',
  },
  {
    index: '07',
    title: 'Workflow Automation',
    description: 'Structured, auditable automation that replaces spreadsheets and email chains with governed process.',
  },
];
