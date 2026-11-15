import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import clsx from 'clsx';
import SkillChip from './SkillChip';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  metrics: string[];
  tags: string[];
  buttonLabel?: string;
  icon?: ReactNode;
}

function ProjectCard({ title, subtitle, metrics, tags, buttonLabel = 'Ask AI about this', icon }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} className="card-float rounded-[28px] border border-slate-200/90 bg-white p-7 shadow-soft transition-all duration-200">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">Project</p>
          <h3 className="mt-3 text-xl font-semibold text-brand-900">{title}</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-50 text-brand-700">{icon || '⋆'}</div>
      </div>
      <p className="text-sm leading-6 text-slate-600">{subtitle}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {metrics.map((item) => (
          <span key={item} className="rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <SkillChip key={tag} label={tag} />
        ))}
      </div>
      <button className="mt-6 inline-flex items-center rounded-2xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/15 transition hover:bg-brand-600">
        {buttonLabel}
      </button>
    </motion.div>
  );
}

export default ProjectCard;
