import React from 'react';
import Link from 'next/link';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { routeMappings } from '@/lib/i18n';

export const SloganStrip: React.FC = () => {
  const contactPath = routeMappings.contact;

  return (
    <section className="bg-[#00223D] border-y border-[#003B64]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Slogan */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1">
              <span className="w-1.5 h-8 rounded-full bg-[#F5A623]" />
              <span className="w-1.5 h-5 rounded-full bg-[#F5A623]/50" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#F5A623] tracking-[0.15em] uppercase mb-0.5">
                PRO UMMAT
              </p>
              <p className="text-sm sm:text-base font-semibold text-white/95">
                Menjadi penggerak kesejahteraan sosial masyarakat.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={contactPath}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F5A623] hover:bg-[#FFBA3A] text-[#00223D] text-sm font-bold transition shadow-lg hover:shadow-[#F5A623]/30 duration-200"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Salurkan Kepedulian</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
