import { Mail, Linkedin, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { contactCards } from '../data/profile';

function ContactPage() {
  return (
    <div className="space-y-10 pb-16">
      <section className="rounded-[36px] border border-slate-200/90 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-brand-900">Interested in speaking with Jayanth?</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Send a recruiter-focused note or ask the AI to summarize Jayanth’s fit before reaching out.
        </p>
      </section>
      <section className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <div className="space-y-6">
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Direct Contact</p>
            <div className="mt-6 grid gap-4">
              <a href={`mailto:${contactCards[0].value}`} className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-700 hover:border-brand-300 hover:bg-white inline-flex items-center gap-4">
                <Mail /> {contactCards[0].title}: {contactCards[0].value}
              </a>
              <a href={`https://${contactCards[1].value}`} target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-700 hover:border-brand-300 hover:bg-white inline-flex items-center gap-4">
                <Linkedin /> {contactCards[1].title}
              </a>
            </div>
            <div className="mt-6 rounded-[28px] bg-brand-50 p-6 text-brand-900">
              <p className="font-semibold">Copy email quickly</p>
              <p className="mt-2 text-sm text-slate-700">jayanthruddraraju9@gmail.com</p>
            </div>
          </Card>
          <Card className="p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Contact form</p>
            <div className="mt-6 space-y-4">
              <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Name" />
              <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Company" />
              <input className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Role" />
              <textarea className="h-40 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Message" />
              <Button size="lg"><Send size={18} /> Send Message</Button>
            </div>
          </Card>
        </div>
        <Card className="p-8">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Ask before you reach out</p>
            <h2 className="text-3xl font-semibold text-brand-900">Use the AI to validate fit and save recruiter time.</h2>
            <p className="text-sm leading-7 text-slate-600">Ask about experience, skills, projects, and availability so every outreach is informed and efficient.</p>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">What is his role fit?</p>
                <p className="mt-2 text-sm text-slate-600">Get a quick AI assessment of hiring fit for AI/ML roles.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">What does he deliver?</p>
                <p className="mt-2 text-sm text-slate-600">Highlight projects, business impact, and technical strengths in minutes.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default ContactPage;
