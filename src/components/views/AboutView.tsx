import React from 'react';
import Image from 'next/image';
import {
  Shield,
  Award,
  Users,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  FileText,
  Calendar,
  Compass
} from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { foundationMock } from '@/mock';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';

export const AboutView: React.FC = () => {
  const dict = getDictionary();
  const contactPath = routeMappings.contact;
  const programsPath = routeMappings.programs;

  const valueIcons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00609C]" />,
    Award: <Award className="w-6 h-6 text-[#D99A20]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#064E3B]" />,
    Users: <Users className="w-6 h-6 text-indigo-600" />
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[{ label: dict.nav.about }]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5A623] text-xs font-bold tracking-wider uppercase mb-3 border border-white/20">
                PRO UMMAT • PENGGERAK KESEJAHTERAAN SOSIAL
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
                {dict.aboutPage.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                {dict.aboutPage.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Profil & Legalitas Resmi */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#00609C] text-xs font-semibold tracking-wide border border-sky-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00609C]" />
                  <span>Profil & Landasan Kelembagaan</span>
                </div>

                <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
                  {foundationMock.name}
                </h2>

                <p className="text-base text-[#475569] leading-relaxed">
                  {foundationMock.profile}
                </p>

                {/* Legalitas Box */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <h3 className="font-heading text-base font-bold text-[#003B64] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#00609C]" />
                    <span>Legalitas & Perizinan Resmi</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-gray-500 block">SK Kemenkumham RI:</span>
                      <strong className="text-[#0F172A] text-xs block font-mono mt-0.5">
                        {foundationMock.decreeNumber}
                      </strong>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-gray-500 block">Akta Notaris:</span>
                      <strong className="text-[#0F172A] text-xs block mt-0.5">
                        {foundationMock.deedNumber} ({foundationMock.deedDate})
                      </strong>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-gray-500 block">Notaris Pengesah:</span>
                      <strong className="text-[#0F172A] text-xs block mt-0.5">
                        {foundationMock.notaryOfficial}
                      </strong>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-gray-500 block">SIOP Sosial:</span>
                      <strong className="text-[#0F172A] text-xs block font-mono mt-0.5">
                        {foundationMock.siopNumber}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Alamat & Kontak Singkat */}
                <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-[#334155] space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#00609C] shrink-0 mt-0.5" />
                    <span>{foundationMock.address} (Kode Pos: {foundationMock.postalCode})</span>
                  </div>
                  <div className="flex items-center gap-4 pt-1">
                    <span className="flex items-center gap-1.5 font-mono text-[#00609C]">
                      <Phone className="w-3.5 h-3.5" /> {foundationMock.phone}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#00609C]">
                      <Mail className="w-3.5 h-3.5" /> {foundationMock.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6">
                <div className="relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-card border border-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                    alt="Pelayanan Sosial Yayasan Sosial Azhar Mandiri"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-heading text-xl font-bold">
                      {foundationMock.name}
                    </p>
                    <p className="text-xs text-[#F5A623] mt-1">
                      {foundationMock.motto}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Latar Belakang & Sejarah */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#00609C] text-xs font-semibold tracking-wide border border-slate-200 mb-3">
                <Calendar className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Pengabdian Sejak Januari 2015</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
                {dict.aboutPage.historyTitle}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-6 text-[#475569] leading-relaxed text-base">
              <p>
                {foundationMock.history}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-center">
                <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
                  <span className="font-heading text-2xl font-bold text-[#00609C]">205+</span>
                  <p className="text-xs text-slate-600 mt-1">Penerima Manfaat Terdata</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                  <span className="font-heading text-2xl font-bold text-[#D99A20]">10+ Tahun</span>
                  <p className="text-xs text-slate-600 mt-1">Pengabdian Berkelanjutan</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <span className="font-heading text-2xl font-bold text-[#064E3B]">Kec. Praya</span>
                  <p className="text-xs text-slate-600 mt-1">Wilayah Jangkauan Utama</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Visi, Misi & Tujuan Yayasan */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              {/* Visi */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#003B64] to-[#00223D] rounded-3xl p-8 sm:p-10 text-white shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    {dict.aboutPage.visionTitle}
                  </h3>
                  <p className="text-base text-slate-200 leading-relaxed italic border-l-4 border-[#F5A623] pl-4 py-1">
                    &ldquo;{foundationMock.vision}&rdquo;
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-white/10">
                  <p className="text-xs text-sky-200 font-semibold tracking-wider uppercase">
                    Pilar Karakter:
                  </p>
                  <p className="text-sm font-bold text-[#F5A623] mt-1">
                    Profesional • Unggul • Mandiri • Amanah
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#00609C] flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0F172A] mb-4">
                  {dict.aboutPage.missionTitle}
                </h3>
                <ul className="space-y-3.5 text-sm text-[#475569]">
                  {foundationMock.missions.map(
                    (mission, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#00609C] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{mission}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Tujuan Yayasan */}
            <div className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-slate-200">
              <h3 className="font-heading text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#00609C]" />
                <span>{dict.aboutPage.objectivesTitle}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(foundationMock.objectives || []).map((obj, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-full bg-sky-50 text-[#00609C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-[#475569] leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Nilai-Nilai Utama Yayasan */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#00609C] text-xs font-semibold tracking-wide border border-sky-100 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00609C]" />
                <span>Prinsip Perkhidmatan</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
                {dict.aboutPage.valuesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {foundationMock.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-card transition-shadow"
                >
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-xs w-fit mb-4">
                    {valueIcons[val.icon] || <ShieldCheck className="w-6 h-6 text-[#00609C]" />}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Visi Pengembangan (Roadmap) */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#D99A20] text-xs font-semibold tracking-wide border border-amber-100 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D99A20]" />
                <span>Rencana Strategis</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
                {dict.aboutPage.roadmapTitle}
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Arah pengembangan kelembagaan yang terencana untuk kemaslahatan masyarakat berkelanjutan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Jangka Pendek */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="inline-block px-3 py-1 rounded-lg bg-sky-100 text-[#00609C] text-xs font-bold uppercase mb-4">
                  Program Jangka Pendek
                </div>
                <ul className="space-y-3 text-sm text-[#475569]">
                  {foundationMock.roadmaps?.shortTerm.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00609C] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jangka Menengah */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="inline-block px-3 py-1 rounded-lg bg-amber-100 text-[#D99A20] text-xs font-bold uppercase mb-4">
                  Program Jangka Menengah
                </div>
                <ul className="space-y-3 text-sm text-[#475569]">
                  {foundationMock.roadmaps?.mediumTerm.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D99A20] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jangka Panjang (Visi Masa Depan) */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-100 text-[#064E3B] text-xs font-bold uppercase mb-4">
                  Visi Pengembangan (Jangka Panjang)
                </div>
                <ul className="space-y-3 text-sm text-[#475569]">
                  {foundationMock.roadmaps?.longTerm.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Struktur Kepengurusan Lengkap (Pembina, Pengawas, Pengurus) */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
                {dict.aboutPage.leadershipTitle}
              </h2>
              <p className="text-sm text-[#475569] mt-2">
                Amanah kepengurusan resmi Yayasan Sosial Azhar Mandiri masa khidmat berjalan.
              </p>
            </div>

            {/* Dewan Pembina & Pengawas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Pembina */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-[#003B64] pb-3 mb-4 border-b border-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#F5A623]" />
                  <span>Dewan Pembina</span>
                </h3>
                <div className="space-y-2.5">
                  {foundationMock.trustees?.map((person, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm"
                    >
                      <span className="font-semibold text-[#0F172A]">
                        {idx + 1}. {person.name}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-sky-100 text-[#00609C] font-bold">
                        {person.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pengawas */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-[#003B64] pb-3 mb-4 border-b border-slate-100 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#00609C]" />
                  <span>Dewan Pengawas</span>
                </h3>
                <div className="space-y-2.5">
                  {foundationMock.supervisors?.map((person, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm"
                    >
                      <span className="font-semibold text-[#0F172A]">
                        {idx + 1}. {person.name}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-amber-100 text-[#D99A20] font-bold">
                        {person.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Susunan Pengurus Harian & Bidang */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              <h3 className="font-heading text-2xl font-bold text-[#003B64] pb-4 mb-6 border-b border-slate-100 flex items-center gap-2">
                <Users className="w-6 h-6 text-[#00609C]" />
                <span>Susunan Pengurus Yayasan</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {foundationMock.executives?.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition"
                  >
                    <span className="text-xs text-[#00609C] font-bold block uppercase tracking-wider">
                      {item.role}
                    </span>
                    <h4 className="font-heading text-base font-bold text-[#0F172A] mt-1">
                      {item.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: CTA Hubungi / Sinergi */}
        <section className="py-16 bg-[#00223D] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Bersinergi Menebar Manfaat untuk Ummat
            </h2>
            <p className="text-base text-slate-200/90 max-w-2xl mx-auto font-normal">
              Dukung langkah kebaikan kami dalam menyantuni anak yatim, disabilitas, lansia, dan membina kemandirian masyarakat Lombok Tengah.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button href={contactPath} variant="gold" size="lg">
                Hubungi Sekretariat
              </Button>
              <Button
                href={programsPath}
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-[#00223D]"
              >
                Lihat Program Sosial
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
