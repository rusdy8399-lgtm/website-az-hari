import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { foundationMock } from '@/mock';

export const AboutSection: React.FC = () => {
  const dict = getDictionary();
  const aboutPath = routeMappings.about;

  return (
    <section className="py-20 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-card border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                  alt="Aktivitas Pelayanan Sosial Yayasan Sosial Azhar Mandiri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00223D]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-wider text-[#F5A623] font-bold">
                    Pengabdian Sejak 2015
                  </p>
                  <p className="text-sm font-semibold mt-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#F5A623] shrink-0" />
                    <span>Praya, Lombok Tengah, NTB</span>
                  </p>
                </div>
              </div>

              {/* Overlapping Badge: SK Legal */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3.5 max-w-[260px]">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#00609C] flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium">SK Kemenkumham RI</p>
                  <p className="text-xs font-bold text-[#00223D]">
                    {foundationMock.decreeNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7FD] text-[#00609C] text-xs font-bold tracking-wide border border-sky-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
              {dict.home.aboutSection.badge}
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
              {dict.home.aboutSection.title}
            </h2>

            <div className="space-y-4 text-base text-[#475569] leading-relaxed">
              <p>{dict.home.aboutSection.p1}</p>
              <p>{dict.home.aboutSection.p2}</p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-subtle">
                <CheckCircle2 className="w-5 h-5 text-[#00609C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">Santunan & Bantuan Rutin</p>
                  <p className="text-xs text-gray-500">205+ anak yatim, disabilitas & lansia</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-subtle">
                <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">Legalitas Terverifikasi</p>
                  <p className="text-xs text-gray-500">Akta No. 15 Thn 2024 & SIOP Sosial</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={aboutPath}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#003B64] hover:bg-[#00223D] text-white text-sm font-bold transition shadow-md hover:shadow-lg duration-150"
              >
                <span>{dict.home.aboutSection.readFull}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
