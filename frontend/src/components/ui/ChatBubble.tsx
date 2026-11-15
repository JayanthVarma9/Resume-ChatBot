import clsx from 'clsx';
import { type PropsWithChildren } from 'react';

interface ChatBubbleProps {
  role: 'user' | 'assistant' | 'system';
  sources?: string[];
}

function ChatBubble({ role, sources, children }: PropsWithChildren<ChatBubbleProps>) {
  const isAssistant = role === 'assistant';
  const isSystem = role === 'system';

  return (
    <div className={clsx('rounded-3xl p-5 shadow-soft', isAssistant ? 'bg-white text-slate-800' : isSystem ? 'bg-slate-100 text-slate-700' : 'bg-brand-500/10 text-brand-900')}>
      <div className={clsx('text-sm font-semibold', isAssistant ? 'text-slate-900' : isSystem ? 'text-slate-700' : 'text-brand-700')}>
        {isAssistant ? 'AI Resume Assistant' : isSystem ? 'System' : 'Recruiter'}
      </div>
      <div className="mt-3 text-sm leading-7">{children}</div>
      {sources && sources.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((source) => (
            <span key={source} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
              {source}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ChatBubble;
