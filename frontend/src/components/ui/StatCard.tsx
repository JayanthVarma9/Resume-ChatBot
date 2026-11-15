import { type PropsWithChildren } from 'react';
import clsx from 'clsx';

interface StatCardProps {
  title: string;
  value: string;
  className?: string;
}

function StatCard({ title, value, className }: StatCardProps) {
  return (
    <div className={clsx('rounded-3xl border border-slate-200/90 bg-white p-5 shadow-soft', className)}>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-brand-900">{value}</p>
    </div>
  );
}

export default StatCard;
