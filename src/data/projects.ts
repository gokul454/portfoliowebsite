// import type { Project } from '@/types';

// export const projects: Project[] = [
//   {
//     id: 'primeops',
//     index: 'DOC / 01',
//     title: 'PrimeOps',
//     client: 'Triveni Turbines Limited',
//     duration: '4 Months',
//     category: 'Enterprise Migration',
//     overview:
//       'Migrated Oracle Primavera Unifier Project Management Cloud, along with legacy business data, into Microsoft SharePoint Online — rebuilding fifteen enterprise business processes on a modern, maintainable foundation.',
//     tags: ['SPFx', 'React', 'TypeScript', 'Power Automate', 'Azure SQL'],
//     problem:
//       'Triveni Turbines ran core project management on Oracle Primavera Unifier, a capable but costly and rigid platform disconnected from the rest of their Microsoft 365 estate. Years of process knowledge and historical records lived in a system the business wanted to retire.',
//     solution:
//       'We re-platformed the entire suite onto SharePoint Online, translating each Unifier business process into a purpose-built SPFx application backed by SharePoint lists, Azure SQL, and Power Automate flows — preserving institutional logic while gaining native Microsoft 365 integration.',
//     responsibilities: [
//       'Led frontend SPFx development across the migration',
//       'Developed 15+ discrete business processes end to end',
//       'Built the interface layer in React and TypeScript',
//       'Integrated Azure SQL for structured transactional data',
//       'Implemented business workflow logic in Power Automate',
//       'Conducted requirement analysis directly with stakeholders',
//       'Consumed and extended SharePoint REST APIs',
//       'Supported legacy data migration and reconciliation',
//     ],
//     technology: ['SharePoint Online', 'SPFx', 'React', 'TypeScript', 'Power Automate', 'Azure SQL', 'REST APIs'],
//     challenges:
//       'Unifier\'s business processes were deeply configurable and had absorbed years of edge-case logic. Reconstructing that behaviour in SPFx while keeping the interface simpler than the original meant close, iterative work with process owners rather than a one-time requirements handoff.',
//     outcome:
//       'The migration retired a legacy platform, consolidated project management inside Microsoft 365, and modernised how the business runs its workflows — with a lighter interface and lower operating cost.',
//     lessons:
//       'Large migrations succeed on translation, not replication. The goal wasn\'t to rebuild Unifier feature-for-feature, but to preserve what the business actually depended on and simplify the rest.',
//     cover: 'primeops',
//   },
//   {
//     id: 'sales-intranet',
//     index: 'DOC / 02',
//     title: 'Sales Department Intranet',
//     client: 'Internal Product',
//     duration: 'Solo Build',
//     category: 'Intranet Platform',
//     overview:
//       'A fully admin-configurable SPFx intranet portal, designed and built independently — giving a non-technical sales team control over theme, navigation, and homepage content without a developer in the loop.',
//     tags: ['SPFx', 'SharePoint Lists', 'Site Pages', 'Component Architecture'],
//     problem:
//       'The sales department needed a home for announcements, resources, and team content, but every change to the existing intranet required developer involvement — slow for a team that wanted to update messaging weekly.',
//     solution:
//       'I designed and built the entire portal solo: a component-driven SPFx application where administrators configure theme, navigation, homepage layout, and banners themselves, all backed by SharePoint Lists, Site Pages, and Site Assets.',
//     responsibilities: [
//       'Owned the project end to end as sole developer',
//       'Built a theme customization system',
//       'Built navigation management tooling',
//       'Built a configurable homepage builder',
//       'Implemented banner and content management',
//       'Modelled data across SharePoint Lists, Pages, and Assets',
//       'Designed a reusable component library for reuse across pages',
//     ],
//     technology: ['SPFx', 'React', 'SharePoint Lists', 'Site Pages', 'Site Assets', 'Site Contents'],
//     challenges:
//       'Building for administrators rather than developers meant every configuration surface had to be forgiving — validated inputs, sensible defaults, and no way to leave the site in a broken state.',
//     outcome:
//       'The sales team now manages their own intranet independently — updating banners, navigation, and homepage content without a single support ticket.',
//     lessons:
//       'Admin-configurable systems take longer to build than static ones, but the time returns immediately: every future content change becomes free.',
//     cover: 'intranet',
//   },
//   {
//     id: 'zay-salesman',
//     index: 'DOC / 03',
//     title: 'Zay Salesman Management',
//     client: 'Zay, Oman',
//     duration: 'Enterprise SFA',
//     category: 'Sales Force Automation',
//     overview:
//       'An enterprise sales force automation portal for a retail operation in Oman, giving management real-time visibility into a distributed salesman network through a Dynamics 365-integrated admin dashboard.',
//     tags: ['React', '.NET APIs', 'Dynamics 365', 'Data Visualization'],
//     problem:
//       'Zay\'s field sales operation spanned many salesmen across multiple territories, but management had no unified, real-time view of activity — data was fragmented across Dynamics 365 records with no admin-facing layer.',
//     solution:
//       'I built the frontend admin portal in React, integrated against .NET APIs and Microsoft Dynamics 365, giving management a single dashboard for salesman management, search, filtering, and performance visualization.',
//     responsibilities: [
//       'Built the admin dashboard frontend in React',
//       'Integrated with .NET backend APIs',
//       'Connected the portal to Microsoft Dynamics 365',
//       'Implemented salesman management workflows',
//       'Built search and filtering across large record sets',
//       'Built data visualization for performance metrics',
//       'Ensured a fully responsive interface for field and office use',
//     ],
//     technology: ['React', '.NET APIs', 'REST APIs', 'Microsoft Dynamics 365'],
//     challenges:
//       'Dynamics 365 data models are relationally deep. Presenting that structure as a fast, filterable dashboard meant careful API shaping and client-side state design to avoid over-fetching.',
//     outcome:
//       'Management gained a live, searchable view of the entire salesman network — replacing manual reporting with a real-time admin dashboard.',
//     lessons:
//       'When a CRM is the source of truth, the frontend\'s job is discipline: surface exactly what the API can support responsively, not what would be nice to show.',
//     cover: 'zay',
//   },
//   {
//     id: 'enterprise-crm',
//     index: 'DOC / 04',
//     title: 'Enterprise CRM',
//     client: 'Internal Product',
//     duration: 'Frontend Developer',
//     category: 'CRM Platform',
//     overview:
//       'Frontend development on an internal enterprise CRM product, contributing a reusable component library and modern dashboard modules integrated with .NET APIs.',
//     tags: ['React', '.NET APIs', 'Component Architecture', 'Dashboards'],
//     problem:
//       'The CRM product needed a consistent, reusable frontend foundation as new modules were added — without each new screen reinventing layout, inputs, and data display from scratch.',
//     solution:
//       'I contributed a library of reusable React components and applied it across CRM modules, integrating with .NET APIs to build responsive, modern dashboards used throughout the product.',
//     responsibilities: [
//       'Built reusable React components for product-wide use',
//       'Integrated frontend modules with .NET APIs',
//       'Developed enterprise CRM feature modules',
//       'Established component architecture patterns',
//       'Built responsive layouts across device sizes',
//       'Built modern dashboard interfaces for CRM data',
//     ],
//     technology: ['React', '.NET APIs', 'Component Architecture', 'Responsive Design'],
//     challenges:
//       'Component reuse across a growing CRM meant resisting one-off styling in favour of a shared system — a slower short-term path that paid off as the module count grew.',
//     outcome:
//       'A shared component library now underpins new CRM modules, cutting build time for each subsequent feature.',
//     lessons:
//       'Reusable architecture is a discipline decision made early, before the second module makes the first one\'s shortcuts expensive.',
//     cover: 'crm',
//   },
// ];
