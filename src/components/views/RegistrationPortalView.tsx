import React from 'react';
import {
  GraduationCap,
  BookOpen,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';

export const RegistrationPortalView: React.FC = () => {
  const dict = getDictionary();
  const ppdbPath = routeMappings['ppdb-wizard'];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[{ label: dict.nav.registration }]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
                {dict.registrationPage.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                {dict.registrationPage.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* 3 Option Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 1: SMP IT AZZAIN PPDB (Fokus Utama, Highlighted) */}
              <div className="bg-white rounded-3xl border-2 border-[#D99A20] shadow-card hover:shadow-cardHover transition-all duration-300 relative p-8 flex flex-col justify-between group -translate-y-2">
                <div className="absolute -top-3.5 left-8 bg-[#D99A20] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Program Utama • PPDB Buka</span>
                </div>

                <div className="pt-2">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#00609C] flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-semibold text-[#00609C] uppercase tracking-wider block mb-1">
                    {dict.registrationPage.option1Badge}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#102A43] mb-3">
                    {dict.registrationPage.option1Title}
                  </h2>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6">
                    {dict.registrationPage.option1Desc}
                  </p>

                  <ul className="space-y-2.5 text-xs text-gray-700 mb-8 border-t border-gray-100 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Gelombang 1 TP 2026/2027</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Jalur Reguler & Beasiswa Tahfidz</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Formulir & Verifikasi Berkas Online</span>
                    </li>
                  </ul>
                </div>

                <Button
                  href={ppdbPath}
                  variant="gold"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full font-bold shadow-goldGlow"
                >
                  {dict.registrationPage.option1Action}
                </Button>
              </div>

              {/* Option 2: Majlis Taklim */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-subtle hover:shadow-cardHover transition-all duration-300 p-8 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#D99A20] flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-semibold text-[#D99A20] uppercase tracking-wider block mb-1">
                    {dict.registrationPage.option2Badge}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#102A43] mb-3">
                    {dict.registrationPage.option2Title}
                  </h2>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6">
                    {dict.registrationPage.option2Desc}
                  </p>

                  <ul className="space-y-2.5 text-xs text-gray-700 mb-8 border-t border-gray-100 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Kelas Tahsin & Tajwid Bersanad</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Kajian Rutin & Komunitas Jamaah</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Bimbingan Sahabat Mualaf Gratis</span>
                    </li>
                  </ul>
                </div>

                <Button
                  href={routeMappings['institution-majlis']}
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full"
                >
                  {dict.registrationPage.option2Action}
                </Button>
              </div>

              {/* Option 3: LSKA Raudatul Azhar */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-subtle hover:shadow-cardHover transition-all duration-300 p-8 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                    <HeartHandshake className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider block mb-1">
                    {dict.registrationPage.option3Badge}
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-[#102A43] mb-3">
                    {dict.registrationPage.option3Title}
                  </h2>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6">
                    {dict.registrationPage.option3Desc}
                  </p>

                  <ul className="space-y-2.5 text-xs text-gray-700 mb-8 border-t border-gray-100 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Permohonan Santunan Anak Yatim</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Beasiswa Pelajar Dhuafa Berprestasi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Bantuan Modal Usaha & Ambulans</span>
                    </li>
                  </ul>
                </div>

                <Button
                  href={routeMappings['institution-lska']}
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full"
                >
                  {dict.registrationPage.option3Action}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
