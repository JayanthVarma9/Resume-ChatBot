import { Download, FileText, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SkillChip from '../components/ui/SkillChip';
import { candidate, resumeHighlights } from '../data/profile';

function ResumePage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="rounded-[36px] border border-slate-200/90 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Resume</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-900">Recruiter-ready resume summary and hiring notes</h1>
          </div>
          <Button variant="primary" size="lg"><Download size={18} /> Download Resume</Button>
        </div>
      </section>
      <section className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <Card className="p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-16 w-16 rounded-3xl bg-cyan-100 text-cyan-900 grid place-items-center text-2xl font-bold">JR</div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">{candidate.title}</p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-900">{candidate.name}</h2>
              <p className="mt-2 text-sm text-slate-500">{candidate.location} • {candidate.email}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">AI-generated summary</p>
              <p className="mt-4 text-base leading-7 text-slate-600">{resumeHighlights.summary}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Best fit roles</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {resumeHighlights.bestFit.map((item) => (
                  <SkillChip key={item} label={item} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Core strengths</p>
              <ul className="mt-4 space-y-3 text-slate-600">
                {resumeHighlights.strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Relevant technologies</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {resumeHighlights.technologies.map((item) => (
                  <SkillChip key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-8">
          <div className="mb-8 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Recruiter Notes</p>
            <h2 className="text-2xl font-semibold text-brand-900">Why Jayanth is a strong AI/ML candidate</h2>
          </div>
          <div className="space-y-4">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Core strengths</p>
              <p className="mt-3 text-sm text-slate-600">Strong production ML delivery with focus on forecasting, NLP, RAG, and data-driven decision systems.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Best fit roles</p>
              <p className="mt-3 text-sm text-slate-600">AI/ML Engineer, Data Science Lead, RAG Specialist, Machine Learning Systems Engineer.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Work authorization</p>
              <p className="mt-3 text-sm text-slate-600">Authorized to work in the USA.</p>
            </div>
          </div>
          <div className="mt-8 rounded-[28px] border border-cyan-200 bg-cyan-50 p-6">
            <div className="flex items-center gap-3 text-brand-900">
              <FileText size={20} />
              <p className="font-semibold">Resume preview available</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">Share the full profile with hiring teams in one click to accelerate recruiter reviews.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default ResumePage;
