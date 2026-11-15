import { Mail, Linkedin } from 'lucide-react';
import { contactCards } from '../../data/profile';

const quickLinks = [
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Chatbot', href: '/chatbot' },
];

const resources = [
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
  { label: 'Home', href: '/' },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-xl font-semibold text-white">JR AI Resume</p>
          <p className="max-w-md leading-7 text-slate-400">
            Recruiter-ready AI resume chatbot for Jayanth Ruddraraju. Explore his experience, projects, skills, and contact info in a polished interface.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${contactCards[0].value}`} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200 hover:bg-slate-800">
              <Mail size={16} /> Email
            </a>
            <a href={`https://${contactCards[1].value}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200 hover:bg-slate-800">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Quick Links</p>
            <div className="mt-5 space-y-3 text-sm">
              {quickLinks.map((item) => (
                <a key={item.label} href={item.href} className="block text-slate-300 hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Resources</p>
            <div className="mt-5 space-y-3 text-sm">
              {resources.map((item) => (
                <a key={item.label} href={item.href} className="block text-slate-300 hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Technologies</p>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>React</p>
              <p>TypeScript</p>
              <p>Tailwind CSS</p>
              <p>Framer Motion</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950 px-4 py-5 text-center text-sm text-slate-500 sm:px-6">
        © 2026 JR AI Resume. Designed for recruiter engagement.
      </div>
    </footer>
  );
}

export default Footer;
