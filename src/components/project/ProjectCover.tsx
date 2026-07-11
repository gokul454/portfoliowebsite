import type { ReactElement } from 'react';

interface ProjectCoverProps {
  variant: string;
  className?: string;
}

export default function ProjectCover({ variant, className = '' }: ProjectCoverProps) {
  const common = 'w-full h-full';

  const covers: Record<string, ReactElement> = {
    primeops: (
      <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="none">
        <rect width="400" height="300" fill="#F4EFE6" />
        <g stroke="#B08A5B" strokeWidth="1" opacity="0.6">
          <path d="M40 220 L140 90 L240 220" fill="none" />
          <path d="M120 220 L220 60 L320 220" fill="none" />
        </g>
        <circle cx="140" cy="90" r="3" fill="#B08A5B" />
        <circle cx="220" cy="60" r="3" fill="#B08A5B" />
        <line x1="40" y1="240" x2="360" y2="240" stroke="#DDD3C3" strokeWidth="1" />
        <text x="40" y="264" fontFamily="IBM Plex Mono" fontSize="10" fill="#746B60" letterSpacing="2">
          REV. 01 — MIGRATION
        </text>
      </svg>
    ),
    intranet: (
      <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="none">
        <rect width="400" height="300" fill="#F4EFE6" />
        <g stroke="#DDD3C3" strokeWidth="1">
          <line x1="40" y1="60" x2="360" y2="60" />
          <line x1="40" y1="110" x2="230" y2="110" />
          <line x1="40" y1="160" x2="230" y2="160" />
          <line x1="250" y1="110" x2="360" y2="110" />
          <line x1="250" y1="160" x2="360" y2="160" />
        </g>
        <rect x="40" y="70" width="110" height="30" fill="none" stroke="#B08A5B" />
        <rect x="170" y="70" width="60" height="30" fill="none" stroke="#B08A5B" />
        <line x1="40" y1="240" x2="360" y2="240" stroke="#DDD3C3" strokeWidth="1" />
        <text x="40" y="264" fontFamily="IBM Plex Mono" fontSize="10" fill="#746B60" letterSpacing="2">
          REV. 02 — INTRANET
        </text>
      </svg>
    ),
    zay: (
      <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="none">
        <rect width="400" height="300" fill="#F4EFE6" />
        <polyline
          points="40,190 100,150 160,170 220,110 280,130 340,80"
          fill="none"
          stroke="#B08A5B"
          strokeWidth="1.5"
        />
        {[
          [40, 190],
          [100, 150],
          [160, 170],
          [220, 110],
          [280, 130],
          [340, 80],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#2F2A24" />
        ))}
        <line x1="40" y1="220" x2="340" y2="220" stroke="#DDD3C3" strokeWidth="1" />
        <line x1="40" y1="240" x2="360" y2="240" stroke="#DDD3C3" strokeWidth="1" />
        <text x="40" y="264" fontFamily="IBM Plex Mono" fontSize="10" fill="#746B60" letterSpacing="2">
          REV. 03 — SALES FORCE
        </text>
      </svg>
    ),
    crm: (
      <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="none">
        <rect width="400" height="300" fill="#F4EFE6" />
        <g stroke="#B08A5B" strokeWidth="1" fill="none">
          <rect x="40" y="60" width="140" height="90" />
          <rect x="200" y="60" width="120" height="40" />
          <rect x="200" y="110" width="120" height="40" />
        </g>
        <line x1="40" y1="240" x2="360" y2="240" stroke="#DDD3C3" strokeWidth="1" />
        <text x="40" y="264" fontFamily="IBM Plex Mono" fontSize="10" fill="#746B60" letterSpacing="2">
          REV. 04 — CRM
        </text>
      </svg>
    ),
  };

  if (variant && (variant.startsWith('http://') || variant.startsWith('https://'))) {
    return (
      <img 
        src={variant} 
        alt="Project Cover" 
        className={`${className} object-cover`} 
      />
    );
  }

  return <div className={className}>{covers[variant] ?? covers.primeops}</div>;
}
