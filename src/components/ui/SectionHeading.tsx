import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
            light
              ? 'bg-white/10 text-white border border-white/20'
              : 'bg-sky-50 text-[#00609C] border border-sky-100'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00609C]" />
          {badge}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
          light ? 'text-white' : 'text-[#102A43]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-emerald-100/80' : 'text-[#667085]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
