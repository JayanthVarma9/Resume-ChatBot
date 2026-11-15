import { type PropsWithChildren } from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
}

function Card({ children, className }: PropsWithChildren<CardProps>) {
  return (
    <div className={clsx('rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-soft', className)}>
      {children}
    </div>
  );
}

export default Card;
