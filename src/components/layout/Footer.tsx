import { socials } from '@/constants/nav';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-alt px-6 md:px-12 py-14">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <div className="font-display text-2xl text-ink mb-2">
            Gokul<span className="text-brass">.</span>K
          </div>
          <p className="text-ink-soft text-sm font-light max-w-xs">
            Microsoft 365 &amp; SharePoint Developer, building enterprise digital workplaces.
          </p>
        </div>

        <div className="flex gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="eyebrow underline-brass pb-1 text-ink-soft hover:text-ink transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto hairline mt-10 mb-6" />

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-3 text-ink-soft text-xs font-mono">
        <span>&copy; {new Date().getFullYear()} Gokul K. All rights reserved.</span>
        <span>Kerala, India — Available for remote engagements</span>
      </div>
    </footer>
  );
}
