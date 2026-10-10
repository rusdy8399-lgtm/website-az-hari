import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { programsMock } from '@/mock';

export const ProgramsSection: React.FC = () => {
  const dict = getDictionary();
  const programsPath = routeMappings.programs;

  // Show top 4 featured programs
  const featuredPrograms = programsMock.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#FAF9F5] to-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      {/* Abstract Botanical Ornament - Bottom Left */}
      <div
        className="absolute -bottom-10 -left-10 md:-bottom-6 md:-left-6 w-48 h-48 sm:w-64 sm:h-64 lg:w-84 lg:h-84 pointer-events-none select-none z-0 opacity-40 sm:opacity-55 transition-opacity"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Ambient soft glow */}
          <circle cx="80" cy="240" r="90" fill="#F7F1E5" fillOpacity="0.6" filter="blur(30px)" />
          
          {/* Graceful primary stem */}
          <path
            d="M20 310 C60 250 100 170 180 120"
            stroke="#DFD2BD"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* Main top leaf */}
          <path
            d="M180 120 C195 90 225 70 255 75 C250 110 220 135 180 120 Z"
            fill="#EFE6D7"
            fillOpacity="0.85"
          />
          {/* Mid side leaf */}
          <path
            d="M135 160 C165 140 195 145 210 170 C180 185 150 180 135 160 Z"
            fill="#E8DCCB"
            fillOpacity="0.75"
          />
          {/* Lower leaf */}
          <path
            d="M85 220 C105 185 140 185 155 210 C130 235 95 235 85 220 Z"
            fill="#EFE7D8"
            fillOpacity="0.8"
          />
          
          {/* Secondary curving stem */}
          <path
            d="M10 320 C30 240 70 180 120 130"
            stroke="#DFD2BD"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M120 130 C130 95 155 75 180 85 C170 115 145 135 120 130 Z"
            fill="#F3ECE1"
            fillOpacity="0.9"
          />
          <path
            d="M65 200 C75 165 105 155 125 175 C110 200 85 210 65 200 Z"
            fill="#EAE0D1"
            fillOpacity="0.8"
          />
          {/* Accent small leaf */}
          <path
            d="M40 260 C45 230 70 220 85 235 C75 255 55 265 40 260 Z"
            fill="#EFE6D7"
            fillOpacity="0.75"
          />
          {/* Floating organic leaf element */}
          <path
            d="M210 195 C230 180 250 185 255 205 C240 220 220 215 210 195 Z"
            fill="#F6F0E6"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* Abstract Botanical Ornament - Bottom Right */}
      <div
        className="absolute -bottom-10 -right-10 md:-bottom-6 md:-right-6 w-48 h-48 sm:w-64 sm:h-64 lg:w-84 lg:h-84 pointer-events-none select-none z-0 opacity-40 sm:opacity-55 transition-opacity"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Ambient soft glow */}
          <circle cx="240" cy="240" r="90" fill="#F7F1E5" fillOpacity="0.6" filter="blur(30px)" />

          {/* Graceful primary stem */}
          <path
            d="M300 310 C260 250 220 170 140 120"
            stroke="#DFD2BD"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.65"
          />
          {/* Main top leaf pointing inward */}
          <path
            d="M140 120 C125 90 95 70 65 75 C70 110 100 135 140 120 Z"
            fill="#EFE6D7"
            fillOpacity="0.85"
          />
          {/* Mid side leaf */}
          <path
            d="M185 160 C155 140 125 145 110 170 C140 185 170 180 185 160 Z"
            fill="#E8DCCB"
            fillOpacity="0.75"
          />
          {/* Lower leaf */}
          <path
            d="M235 220 C215 185 180 185 165 210 C190 235 225 235 235 220 Z"
            fill="#EFE7D8"
            fillOpacity="0.8"
          />

          {/* Secondary curving stem */}
          <path
            d="M310 320 C290 240 250 180 200 130"
            stroke="#DFD2BD"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M200 130 C190 95 165 75 140 85 C150 115 175 135 200 130 Z"
            fill="#F3ECE1"
            fillOpacity="0.9"
          />
          <path
            d="M255 200 C245 165 215 155 195 175 C210 200 235 210 255 200 Z"
            fill="#EAE0D1"
            fillOpacity="0.8"
          />
          {/* Accent small leaf */}
          <path
            d="M280 260 C275 230 250 220 235 235 C245 255 265 265 280 260 Z"
            fill="#EFE6D7"
            fillOpacity="0.75"
          />
          {/* Floating organic leaf element */}
          <path
            d="M110 195 C90 180 70 185 65 205 C80 220 100 215 110 195 Z"
            fill="#F6F0E6"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Centered as in Reference Design */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#FF7A00] rounded-full" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#FF7A00]">
              PROGRAM KAMI
            </span>
            <span className="w-8 h-[2px] bg-[#FF7A00] rounded-full" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#00223D] tracking-tight">
            Program Unggulan
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed max-w-2xl mx-auto">
            Berbagai program sosial yang kami jalankan untuk memberikan manfaat nyata bagi pendidikan, pemberdayaan, dan kesejahteraan masyarakat.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {featuredPrograms.map((prog) => {
            const detailPath = `/id/program/${prog.slug}`;

            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-[#00223D] shadow-sm">
                        {prog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 sm:p-6">
                    <p className="text-[11px] font-bold text-[#FF7A00] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                      {prog.institution}
                    </p>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#00223D] group-hover:text-[#00609C] transition-colors duration-200 line-clamp-2 mb-2.5 leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 line-clamp-3 leading-relaxed">
                      {prog.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="p-5 sm:p-6 pt-0 border-t border-gray-50 mt-2">
                  <Link
                    href={detailPath}
                    className="inline-flex items-center justify-between w-full pt-3 text-xs sm:text-[13px] font-bold text-[#00609C] group-hover:text-[#FF7A00] transition-colors"
                  >
                    <span>Lihat Detail Program</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Programs Action */}
        <div className="mt-12 text-center">
          <Link
            href={programsPath}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#00223D] border-2 border-slate-200 hover:border-[#00609C] text-sm font-bold shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <HeartHandshake className="w-4 h-4 text-[#FF7A00]" />
            <span>{dict.common.viewAll} Program Sosial</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
