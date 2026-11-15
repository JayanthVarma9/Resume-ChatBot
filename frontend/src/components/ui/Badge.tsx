import { type PropsWithChildren } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  variant?: 'default' | 'teal' | 'navy';
  className?: string;
}

function Badge({ variant = 'default', className, children }: PropsWithChildren<BadgeProps>) {
  return (
    <span
      className={clsx(
        'inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm',
        variant === 'default' && 'bg-slate-100 text-slate-700',
        variant === 'teal' && 'bg-cyan-100 text-cyan-700',
        variant === 'navy' && 'bg-brand-900/10 text-brand-700',
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
