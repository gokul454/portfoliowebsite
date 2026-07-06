import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'secondary';
  icon?: ReactNode;
  as?: 'a' | 'button';
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon,
  as,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const base =
    'group relative inline-flex justify-center items-center gap-3 px-6 py-3 font-mono font-bold text-sm tracking-widest uppercase rounded overflow-hidden transition-all duration-300';
  
  let styles = '';
  
  if (variant === 'primary') {
    styles = 'bg-accent/10 text-accent border border-accent/50 hover:bg-accent/20 hover:glow-cyan';
  } else if (variant === 'secondary') {
    styles = 'bg-secondary/10 text-secondary border border-secondary/50 hover:bg-secondary/20 hover:glow-purple';
  } else {
    styles = 'bg-transparent text-ink-soft border border-line/30 hover:border-line hover:text-ink hover:bg-surface-hover';
  }

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 text-lg transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const tag = as ?? (href ? 'a' : 'button');

  if (tag === 'a') {
    return (
      <a
        href={href}
        className={`${base} ${styles} ${className}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${base} ${styles} ${className} ${disabled ? 'opacity-50 cursor-not-allowed filter grayscale' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
