import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Mail, MoreHorizontal, Send, User } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ChatBubble from '../components/ui/ChatBubble';
import SkillChip from '../components/ui/SkillChip';
import TypingIndicator from '../components/ui/TypingIndicator';
import { candidate, chatQuickPrompts, conversationHistory, quickStats } from '../data/profile';
import { initialMessages, mockChatResponse, type ChatMessage } from '../data/chat';

function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const topSkills = useMemo(() => ['Python', 'Machine Learning', 'Deep Learning', 'RAG', 'NLP', 'LangChain', 'PyTorch', 'SQL', 'AWS', 'Spark', 'Airflow', 'Docker'], []);

  useEffect(() => {
    if (!isTyping) return;
    const timer = window.setTimeout(() => {
      const response = mockChatResponse(input || 'Hello');
      setMessages((current) => [...current, { role: 'assistant', text: response.text, sources: response.sources }]);
      setIsTyping(false);
    }, 950);

    return () => window.clearTimeout(timer);
  }, [isTyping, input]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((current) => [...current, { role: 'user', text: input }]);
    setIsTyping(true);
    setInput('');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1.4fr_360px]">
      <aside className="space-y-6">
        <Card>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Recruiter Tools</p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-900">Quick prompts</h2>
            </div>
            <Button variant="secondary" size="md">+ New Question</Button>
          </div>
          <div className="mt-6 grid gap-3">
            {chatQuickPrompts.map((prompt) => (
              <button key={prompt} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-700 hover:border-brand-300 hover:bg-white">{prompt}</button>
            ))}
          </div>
        </Card>
        <Card>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">History</p>
          <div className="mt-6 space-y-3">
            {conversationHistory.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:border-brand-300 hover:bg-white">
                {item}
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Filters</p>
          <div className="mt-5 grid gap-2">
            {quickStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">{item.label}</div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Unlock deeper insights</p>
            <p className="text-sm leading-6 text-slate-600">Connect ATS, sync candidate context, and turn recruiter questions into ready candidate stories.</p>
            <Button size="lg">Connect ATS</Button>
          </div>
        </Card>
      </aside>
      <section className="space-y-6">
        <Card className="p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Ask about Jayanth</p>
              <h1 className="mt-3 text-3xl font-semibold text-brand-900">Jayanth AI Resume Assistant</h1>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-emerald-400" /> Online
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:border-brand-300">Share</button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:border-brand-300">More</button>
          </div>
        </Card>
        <Card className="space-y-5 p-6">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <ChatBubble key={index} role={message.role} sources={message.sources}>
                {message.text}
              </ChatBubble>
            ))}
            {isTyping && <TypingIndicator />}
          </div>
          <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="chat-input">Ask about experience</label>
              <input
                id="chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && handleSend()}
                placeholder="Ask about experience, skills, projects, or role fit..."
                className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
              <Button variant="primary" size="lg" type="button" onClick={handleSend}>
                Send <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Card>
      </section>
      <aside className="space-y-6">
        <Card className="p-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-3xl bg-brand-500/10" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-600">Candidate Context</p>
              <h2 className="mt-2 text-2xl font-semibold text-brand-900">{candidate.name}</h2>
              <p className="text-sm text-slate-500">{candidate.title} • {candidate.location}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Email</p>
              <p className="mt-1">{candidate.email}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">LinkedIn</p>
              <p className="mt-1">{candidate.linkedIn}</p>
            </div>
          </div>
        </Card>
        <Card className="p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Experience Highlights</p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Uber</p>
              <p className="mt-1">AI/ML Engineer</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Dell Technologies</p>
              <p className="mt-1">Machine Learning Engineer</p>
            </div>
          </div>
        </Card>
        <Card className="p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Top Skills</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {topSkills.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </div>
        </Card>
        <Card className="space-y-4 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Quick Actions</p>
          <div className="grid gap-3">
            <Button variant="secondary" size="md">Email Candidate</Button>
            <Button variant="secondary" size="md">Open LinkedIn Profile</Button>
            <Button variant="secondary" size="md">Download Resume PDF</Button>
          </div>
        </Card>
        <Card className="p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Suggested Questions</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-700">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">Show me his key projects</div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">What is his education background?</div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">What technologies has he worked with?</div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">What are his strengths?</div>
          </div>
        </Card>
      </aside>
    </div>
  );
}

export default ChatbotPage;
