function TypingIndicator() {
  return (
    <div className="inline-flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-600 shadow-sm">
      <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-slate-500" />
      <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-slate-500 delay-150" />
      <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-slate-500 delay-300" />
      Typing...
    </div>
  );
}

export default TypingIndicator;
