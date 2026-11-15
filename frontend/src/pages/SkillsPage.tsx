import SkillChip from '../components/ui/SkillChip';
import Card from '../components/ui/Card';
import { skillGroups, skillDashboard } from '../data/profile';

function SkillsPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="rounded-[36px] border border-slate-200/90 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Skills</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-900">A polished skills dashboard for recruiter review</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Core competencies, platforms, and technical strengths presented in recruiter-friendly segments with proficiency clarity.
        </p>
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.title} className="p-8">
            <h2 className="text-xl font-semibold text-brand-900">{group.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{group.skills.length} key capabilities</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillChip key={skill} label={skill} />
              ))}
            </div>
          </Card>
        ))}
      </section>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-brand-900">Skill readiness and recruiter fit</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {skillDashboard.map((item) => (
            <Card key={item.title} className="p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-brand-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">{item.level}</span>
              </div>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-cyan-500" style={{ width: item.level }} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <SkillChip key={tag} label={tag} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
