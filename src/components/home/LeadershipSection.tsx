import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { routeMappings } from '@/lib/i18n';
import { foundationMock } from '@/mock';

export const LeadershipSection: React.FC = () => {
  const aboutPath = routeMappings.about;

  return (
    <section className="py-12 md:py-16 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#003B64] via-[#005B96] to-[#004875] text-white">
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none"
            style={{ opacity: 0.6 }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center p-8 sm:p-10 md:p-12 lg:p-14">
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs md:text-sm font-semibold tracking-wider text-sky-200">
                  Sambutan Ketua Yayasan
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                <span className="text-[#F5A623] block">
                  Selamat Datang di
                </span>
                <span className="text-white block mt-1">
                  Yayasan Sosial Azhar Mandiri
                </span>
              </h2>

              {/* Welcoming Paragraph */}
              <p className="text-sm sm:text-base text-slate-100/90 leading-relaxed font-normal">
                Yayasan Sosial Azhar Mandiri lahir atas kepedulian tulus terhadap anak-anak yatim, lansia, saudara kita penyandang disabilitas, dan fakir miskin. Kami bertekad menjadi wadah pelayanan sosial yang amanah, profesional, dan berkelanjutan demi terwujudnya kemandirian serta kesejahteraan masyarakat.
              </p>

              {/* Quote excerpt */}
              <div className="pt-2 border-l-2 border-[#F5A623] pl-4 italic text-xs sm:text-sm text-sky-100/85">
                “Pro Ummat dan Sebagai Penggerak Kesejahteraan Sosial Masyarakat.”
              </div>

              {/* Leader signature plate */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-white">
                    Fahrun Rozi, S.Pd.I
                  </p>
                  <p className="text-xs text-sky-200">
                    Ketua Yayasan Sosial Azhar Mandiri
                  </p>
                </div>

                <Link
                  href={aboutPath}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-bold transition group duration-200 w-fit"
                >
                  Struktur Pengurus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Legal Badge */}
              <div className="inline-flex items-center gap-2 pt-1 text-[11px] text-sky-200/80">
                <ShieldCheck className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>SK Kemenkumham: {foundationMock.decreeNumber} • Akta No. 15 Thn 2024</span>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Ketua Yayasan Sosial Azhar Mandiri"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 280px, 340px"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#003B64]/90 via-[#003B64]/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#00223D]/80 backdrop-blur-sm text-[11px] font-bold text-[#F5A623] border border-white/10">
                    Fahrun Rozi, S.Pd.I — Ketua Yayasan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
