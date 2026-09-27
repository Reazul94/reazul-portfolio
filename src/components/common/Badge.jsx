import React from 'react';

export default function Badge({ children, variant = 'default', size = 'sm' }) {
  const base = "inline-flex items-center font-mono font-medium rounded-md transition-colors";
  
  const sizes = {
    xs: "px-2 py-0.5 text-xs",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm"
  };

  const variants = {
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-600",
    accent: "bg-sky-500/10 text-sky-300 border border-sky-500/25 hover:border-sky-500/40",
    emerald: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 hover:border-emerald-500/40",
    amber: "bg-amber-500/10 text-amber-300 border border-amber-500/25 hover:border-amber-500/40",
    outline: "text-slate-400 border border-slate-700/80 hover:text-slate-200"
  };

  return (
    <span className={`${base} ${sizes[size] || sizes.sm} ${variants[variant] || variants.default}`}>
      {children}
    </span>
  );
}
