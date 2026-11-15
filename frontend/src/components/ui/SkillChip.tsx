import clsx from 'clsx';

interface SkillChipProps {
  label: string;
  className?: string;
}

function SkillChip({ label, className }: SkillChipProps) {
  return (
    <span className={clsx('inline-flex rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-sm text-slate-700', className)}>
      {label}
    </span>
  );
}

export default SkillChip;
