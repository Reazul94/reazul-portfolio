import React from 'react';

export default function SectionHeader({ number, eyebrow, title, subtitle, centered = false }) {
  return (
    <div className={`mb-8 sm:mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      {(number || eyebrow) && (
        <div className={`flex items-center gap-2 mb-2 sm:mb-3 ${centered ? 'justify-center' : ''}`}>
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-brand uppercase">
            {number ? `${number} — ` : ''}{eyebrow}
          </span>
          <span className="h-px w-6 sm:w-8 bg-border-subtle" />
        </div>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-content-primary tracking-tight leading-tight break-words">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-content-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
