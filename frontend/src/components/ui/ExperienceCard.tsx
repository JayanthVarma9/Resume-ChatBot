import { motion } from 'framer-motion';
import clsx from 'clsx';
import SkillChip from './SkillChip';

interface ExperienceCardProps {
  company: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  bullets: string[];
  metrics: string[];
  tools: string[];
  lifted?: boolean;
}

function ExperienceCard({ company, role, dates, location, description, bullets, metrics, tools, lifted }: ExperienceCardProps) {
  return (
    <motion.article whileHover={{ y: lifted ? -6 : 0 }} className="rounded-[28px] border border-slate-200/90 bg-white p-8 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-600">{company}</p>
          <h3 className="mt-3 text-2xl font-semibold text-brand-900">{role}</h3>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-500">{dates}</p>
          <p className="text-sm text-slate-500">{location}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-3 text-sm text-slate-600">
        {bullets.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {tools.map((tag) => (
          <SkillChip key={tag} label={tag} />
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric} className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
            {metric}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
