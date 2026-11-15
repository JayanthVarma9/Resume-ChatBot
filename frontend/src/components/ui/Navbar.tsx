import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Send } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/profile';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-3 text-brand-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500 text-lg font-bold text-white shadow-glow">JR</div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">JR AI Resume</p>
            <p className="text-xs text-slate-400">Recruiter-ready AI profile</p>
          </div>
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'text-brand-700 underline decoration-brand-500 underline-offset-8' : 'text-slate-600 hover:text-brand-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <NavLink to="/chatbot" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/15 hover:bg-brand-600">
            <Send size={16} /> Ask the AI
          </NavLink>
        </div>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white px-4 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-3xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/chatbot"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-3xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/15"
              >
                Ask the AI
              </NavLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
