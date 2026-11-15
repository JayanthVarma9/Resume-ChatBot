import { motion } from 'framer-motion';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

type ButtonAs = 'button' | 'a' | 'link';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: ButtonAs;
  className?: string;
}

type ButtonProps =
  | (BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' })
  | (BaseButtonProps & { as: 'link'; to: string });

function Button({ variant = 'primary', size = 'md', as = 'button', className, children, ...props }: PropsWithChildren<ButtonProps>) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold outline-none transition-all duration-200',
    size === 'lg' ? 'px-6 py-3 text-base' : 'px-5 py-2.5 text-sm',
    variant === 'primary' && 'bg-brand-500 text-white shadow-glow hover:bg-brand-600',
    variant === 'secondary' && 'border border-slate-200 bg-white text-brand-700 hover:border-slate-300 hover:bg-slate-50',
    variant === 'ghost' && 'text-slate-700 hover:text-brand-500',
    className,
  );

  if (as === 'a') {
    return (
      <motion.a whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className={classes} {...(props as any)}>
        {children}
      </motion.a>
    );
  }

  if (as === 'link') {
    const { to, ...rest } = props as { to: string } & Record<string, unknown>;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className={classes} {...(props as any)}>
      {children}
    </motion.button>
  );
}

export default Button;
