import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SkillChip from '../components/ui/SkillChip';
import { candidate, experienceSnapshot, featureCards, heroQuickPhrases, heroTags, processSteps, recruiterHighlights, skillGroups, featuredQuestions } from '../data/profile';

function HomePage() {
  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden rounded-[36px] border border-slate-200/90 bg-white/95 p-6 shadow-soft sm:p-10 lg:p-14">
        <div className="absolute inset-y-0 right-0 hidden w-80 rounded-l-[72px] bg-cyan-100/50 blur-3xl sm:block" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-sm">
              <Sparkles size={14} /> AI POWERED • RECRUITER READY
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
                Meet Jayanth through an <span className="text-gradient">AI Resume Chatbot</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Ask anything about Jayanth’s experience, skills, projects, work authorization, and role fit — get verified answers instantly with source-backed insights.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button as="link" to="/chatbot" size="lg">Start Chat</Button>
              <Button as="link" to="/resume" variant="secondary" size="lg">View Resume</Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroTags.map((label) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                  {label}
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroQuickPhrases.map((text) => (
                <div key={text} className="rounded-3xl border border-slate-200 bg-brand-50/70 px-4 py-4 text-sm text-brand-900 shadow-sm">
                  {text}
                </div>
              ))}
            </div>
          </div>
          <motion.div whileHover={{ y: -6 }} className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950/95 p-6 text-white shadow-glow sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,_189,_248,_0.3),_transparent_36%),radial-gradient(circle_at_100%_50%,_rgba(96,_165,_250,_0.2),_transparent_35%)]" />
            <div className="relative space-y-6">
              <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="h-20 w-20 rounded-3xl bg-brand-500/15" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Jayanth Ruddraraju</p>
                  <p className="mt-2 text-2xl font-semibold text-white">AI/ML Engineer</p>
                  <p className="text-sm text-slate-300">Maryland, USA</p>
                </div>
              </div>
              <div className="grid gap-3 rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">Email</span>
                  <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">LinkedIn</span>
                </div>
                <p className="max-w-sm text-sm leading-6 text-slate-300">AI/ML Engineer with production and enterprise experience in real-time forecasting, NLP, RAG, and cloud-powered model pipelines.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {candidate.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-soft">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-200">
                  <span>AI Resume Assistant</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Online
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl bg-slate-950/95 p-4 text-slate-100 shadow-inner">
                    <p className="text-sm leading-7">Hi! I’m Jayanth’s AI Resume Assistant. Ask me anything about his experience, skills, projects, or availability.</p>
                  </div>
                  <div className="rounded-3xl bg-brand-500/10 p-4 text-sm text-brand-100">
                    <p className="font-semibold">Recruiter</p>
                    <p className="mt-2 leading-7">What are his key strengths as an AI/ML Engineer?</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-3 text-sm text-slate-300">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-slate-200" /> Typing response...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-4">
        {featureCards.map((feature) => (
          <Card key={feature.title} className="border-brand-100/80 bg-white/90">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-50 text-brand-600">
              <Sparkles size={20} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-brand-900">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
          </Card>
        ))}
      </section>
      <section className="grid gap-8 lg:grid-cols-[0.9fr_0.95fr]">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-brand-900">Experience Snapshot</h2>
          <div className="mt-8 space-y-6">
            {experienceSnapshot.map((item) => (
              <div key={item.company} className="rounded-[28px] border border-slate-200 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">{item.company}</p>
                    <h3 className="mt-2 text-xl font-semibold text-brand-900">{item.role}</h3>
                  </div>
                  <p className="text-sm text-slate-500">{item.dates}</p>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tech.map((tag) => (
                    <SkillChip key={tag} label={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-brand-900">Skills & Stack</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-brand-900">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
      <section className="grid gap-8 lg:grid-cols-3">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-brand-900">How It Works</h2>
          <div className="mt-8 space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 p-5 bg-slate-50">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Step {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-brand-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-brand-900">Featured Questions</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {featuredQuestions.map((question) => (
              <button key={question} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm hover:border-brand-300 hover:text-brand-700">
                {question}
              </button>
            ))}
          </div>
        </Card>
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-brand-900">Recruiter Insights</h2>
          <div className="mt-8 grid gap-4">
            {recruiterHighlights.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-3 text-xl font-semibold text-brand-900">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
      <section className="rounded-[32px] bg-gradient-to-r from-brand-900 via-brand-700 to-cyan-600 px-8 py-12 text-white shadow-glow">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/90">Have questions?</p>
            <h2 className="mt-4 text-3xl font-semibold">Let the AI answer for you.</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-cyan-100/90">Use the conversational interface to preview recruiter-ready candidate fit before reaching out.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">Start Chat Now</Button>
            <Button variant="secondary" size="lg">View Full Resume</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
