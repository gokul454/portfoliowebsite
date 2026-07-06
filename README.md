# Gokul K — Portfolio

A premium, editorial-style portfolio for a Microsoft 365 / SharePoint Developer.
Built with React, Vite, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis.

## Design system

- **Background:** `#F7F3EB` / `#F4EFE6` / `#F8F5F0`
- **Cards:** `#FFFDF9`
- **Ink (primary text):** `#2F2A24`
- **Ink soft (secondary text):** `#746B60`
- **Brass (accent):** `#B08A5B`
- **Line (borders):** `#DDD3C3`
- **Hover:** `#E8DFC9`
- **Display font:** Cormorant Garamond
- **Body font:** Inter
- **Accent/mono font:** IBM Plex Mono

The recurring visual motif is a **document register** — eyebrows use `DOC / 0X`
indexing, project covers look like filed blueprint sheets, and each case study
reads like an opened dossier. This ties the "premium architecture studio" brief
directly to the subject: SharePoint is, at its core, a document and records
system, so the portfolio itself behaves like a well-kept file.

## Getting started

\`\`\`bash
npm install
npm run dev      # start local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
\`\`\`

## Structure

\`\`\`
src/
  components/
    layout/       # Nav, Footer, Loader, ScrollProgress
    sections/     # Hero, About, Skills, Experience, Projects, TechStack,
                  # Services, Timeline, Testimonials, Contact
    ui/           # Button, Reveal, SectionHeading
    project/      # ProjectCard, ProjectCover
  pages/          # Home, ProjectDetail
  data/           # projects.ts, content.ts (all copy lives here)
  animations/     # Framer Motion variants
  hooks/          # useLenis, useScrollProgress
  types/          # shared TypeScript interfaces
  constants/      # nav links, socials
\`\`\`

## Editing content

All copy is centralized in \`src/data/projects.ts\` and \`src/data/content.ts\` —
update client names, project details, skills, experience, and services there
without touching component code.

## Notes

- Smooth scrolling via Lenis respects \`prefers-reduced-motion\`.
- All project cover art is procedural SVG (no external images), keeping the
  build dependency-free and fast.
- Contact form is client-side only; wire the \`handleSubmit\` function in
  \`src/components/sections/Contact.tsx\` to your email/form service of choice.
