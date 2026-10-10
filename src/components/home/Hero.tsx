import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Users, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import { routeMappings } from '@/lib/i18n';

export const Hero: React.FC = () => {
  const aboutPath = routeMappings.about;
  const programsPath = routeMappings.programs;

  return (
    <section className="relative w-full overflow-visible pb-16 md:pb-20">
      {/* ── Hero Main Banner ─────────────────────────────────── */}
      <div className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Full-Bleed Background Image of Yayasan Building */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gedung-yayasan.jpg"
            alt="Gedung Yayasan Sosial Azhar Mandiri"
            fill
            priority
            className="object-cover object-center scale-[1.01]"
            sizes="100vw"
          />
          {/* Enhanced Dark-to-Transparent Gradient Overlay for maximum text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 via-40% to-transparent to-75%" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-28 md:pb-36 w-full">
          <div className="max-w-2xl xl:max-w-3xl">
            {/* Main Headline */}
            <h1 className="font-heading font-black tracking-tight leading-[1.08] mb-5">
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Berbagi Ilmu,
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#FF7A00] mt-1.5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                Menebar Manfaat
              </span>
            </h1>

            {/* Sub-headline Description */}
            <p className="text-base sm:text-lg text-white/95 font-medium leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Membangun kepedulian, menghadirkan pelayanan, dan menumbuhkan kemandirian untuk masyarakat yang lebih sejahtera.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={aboutPath}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8500] hover:from-[#E65F00] hover:to-[#FF7A00] text-white text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 duration-200"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Tentang Yayasan</span>
                <ArrowRight className="w-4 h-4 text-white/90" />
              </Link>
              <Link
                href={programsPath}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#001F3F]/80 hover:bg-[#001F3F] border border-white/50 text-white text-sm font-bold backdrop-blur-sm transition-all shadow-md hover:-translate-y-0.5 duration-200"
              >
                <Users className="w-4 h-4 text-white" />
                <span>Program Sosial</span>
                <ArrowRight className="w-4 h-4 text-white/90" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4 Pilar Nilai Yayasan: Profesional · Unggul · Mandiri · Amanah ── */}
      <div className="relative -mt-16 md:-mt-20 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.09)] border border-gray-100/90 p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
              {/* 1. PROFESIONAL */}
              <div className="flex items-start gap-4 pt-4 first:pt-0 sm:pt-0 lg:px-4 lg:first:pl-0">
                <div className="w-12 h-12 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 ring-4 ring-[#E0F2FE]/50 shadow-xs">
                  <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading font-extrabold text-sm sm:text-[15px] text-[#00223D] tracking-wider uppercase mb-1">
                    PROFESIONAL
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Layanan sosial terencana, terverifikasi, dan berstandar manajemen akuntabel.
                  </p>
                </div>
              </div>

              {/* 2. UNGGUL */}
              <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 ring-4 ring-[#FEF3C7]/50 shadow-xs">
                  <Award className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading font-extrabold text-sm sm:text-[15px] text-[#00223D] tracking-wider uppercase mb-1">
                    UNGGUL
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Kualitas program terbaik yang berdaya guna dan berdampak nyata.
                  </p>
                </div>
              </div>

              {/* 3. MANDIRI */}
              <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:px-4">
                <div className="w-12 h-12 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center shrink-0 ring-4 ring-[#D1FAE5]/50 shadow-xs">
                  <HeartHandshake className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading font-extrabold text-sm sm:text-[15px] text-[#00223D] tracking-wider uppercase mb-1">
                    MANDIRI
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Menumbuhkan kemandirian ekonomi, keterampilan, dan karakter anak asuh.
                  </p>
                </div>
              </div>

              {/* 4. AMANAH */}
              <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:px-4 lg:last:pr-0">
                <div className="w-12 h-12 rounded-full bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center shrink-0 ring-4 ring-[#EDE9FE]/50 shadow-xs">
                  <Users className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-heading font-extrabold text-sm sm:text-[15px] text-[#00223D] tracking-wider uppercase mb-1">
                    AMANAH
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    Transparansi penuh dan integritas dalam menyalurkan setiap amanah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
