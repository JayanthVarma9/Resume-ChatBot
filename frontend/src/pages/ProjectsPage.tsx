import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SkillChip from '../components/ui/SkillChip';
import { projectCards } from '../data/profile';

function ProjectsPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="rounded-[36px] border border-slate-200/90 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-900">Projects that show real AI engineering impact</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Showcase of high-impact generative AI, fraud detection, forecasting, and production-ready machine learning systems built for enterprise and mobility domains.
        </p>
      </section>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projectCards.map((project) => (
          <Card key={project.title} className="p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">Project</p>
                <h2 className="mt-3 text-xl font-semibold text-brand-900">{project.title}</h2>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{project.subtitle}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <SkillChip key={tag} label={tag} />
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500">
              {project.metrics.map((metric) => (
                <span key={metric} className="rounded-full bg-slate-100 px-3 py-1">{metric}</span>
              ))}
            </div>
            <Button variant="secondary" size="md" className="mt-6 inline-flex items-center gap-2">
              View details <ArrowRight size={16} />
            </Button>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
