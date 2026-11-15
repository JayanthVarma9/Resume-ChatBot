import { ArrowRight, Download } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ExperienceCard from '../components/ui/ExperienceCard';
import SkillChip from '../components/ui/SkillChip';
import { candidate, experienceSnapshot, projectCards, resumeHighlights, faqQuestions, skillDashboard } from '../data/profile';

function ExperiencePage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="rounded-[36px] border border-slate-200/90 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Explore Jayanth’s Experience</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-900">A comprehensive view of Jayanth’s professional journey, projects, skills, and impact.</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button as="link" to="/chatbot" size="lg">Ask the AI</Button>
            <Button variant="secondary" size="lg"><Download size={16} /> Download Resume</Button>
          </div>
        </div>
      </section>
      <section className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-6">
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Timeline</p>
            <div className="mt-8 space-y-6">
              {experienceSnapshot.map((item) => (
                <div key={item.company} className="relative pl-6">
                  <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <p className="text-sm font-semibold text-brand-900">{item.company}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.dates}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Education</p>
            <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <p className="text-lg font-semibold text-brand-900">B.S. in Computer Science</p>
              <p className="mt-2 text-sm text-slate-600">Binghamton University</p>
              <p className="mt-2 text-sm text-slate-500">Graduated with strong academic focus on machine learning and software systems.</p>
            </div>
          </Card>
        </aside>
        <div className="space-y-8">
          {experienceSnapshot.map((item) => (
            <ExperienceCard
              key={item.company}
              company={item.company}
              role={item.role}
              dates={item.dates}
              location={item.company === 'Uber' ? 'USA' : 'India'}
              description={item.company === 'Uber' ? 'Building intelligent ML systems for ETA prediction, demand forecasting, pricing, and operational decision support.' : 'Built ML, ETL, and batch inference systems for hardware failure prediction, support ticket routing, and operational analytics.'}
              bullets={item.bullets}
              metrics={item.company === 'Uber' ? ['2M+ daily records', '20+ zones', '~90 ms inference', '3 hrs training reduced'] : ['2M+ telemetry records', '8K+ failure cases', '40K+ tickets/month', '500K+ batch scores']}
              tools={item.tech}
              lifted
            />
          ))}
          <Card className="p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Featured Projects</p>
                <h2 className="mt-3 text-2xl font-semibold text-brand-900">Real AI engineering impact</h2>
              </div>
              <Button variant="secondary" size="md">View all</Button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {projectCards.map((project) => (
                <div key={project.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-brand-900">{project.title}</p>
                    <div className="rounded-3xl bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">Project</div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <SkillChip key={tag} label={tag} />
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="rounded-full bg-white px-3 py-1 shadow-sm">{metric}</span>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
                    Ask AI about this <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Skills Overview</p>
                <h2 className="mt-3 text-2xl font-semibold text-brand-900">Validated proficiency</h2>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              {skillDashboard.map((item) => (
                <div key={item.title}>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <span className="text-sm text-slate-500">{item.level}</span>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-brand-500" style={{ width: item.level }} />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <SkillChip key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Recruiter FAQ</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {faqQuestions.map((question) => (
                <button key={question} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-left text-sm text-slate-700 hover:border-brand-300 hover:bg-white">
                  {question}
                </button>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default ExperiencePage;
