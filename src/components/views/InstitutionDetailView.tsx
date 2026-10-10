import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  HeartHandshake,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  BookMarked,
  Languages,
  Laptop,
  Compass,
  Heart,
  Briefcase,
  Ambulance,
  ShieldAlert
} from 'lucide-react';
import { Institution } from '@/types';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { newsMock, galleryMock } from '@/mock';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';

interface InstitutionDetailViewProps {
  institution: Institution;
}

export const InstitutionDetailView: React.FC<InstitutionDetailViewProps> = ({
  institution,
}) => {
  const dict = getDictionary();
  const ppdbPath = routeMappings['ppdb-wizard'];

  // Filter related news and gallery for this institution
  const relatedNews = newsMock.filter((n) => n.institutionSlug === institution.slug);
  const relatedGallery = galleryMock.filter(
    (g) =>
      (institution.slug === 'smp-it-azzain' && g.category === 'SMP IT Azzain') ||
      (institution.slug === 'majlis-taklim-raudatul-azhar' && g.category === 'Majlis Taklim') ||
      (institution.slug === 'lska-raudatul-azhar' && g.category === 'LSKA')
  );

  const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-5 h-5 text-[#064E3B]" />,
    Languages: <Languages className="w-5 h-5 text-[#D99A20]" />,
    Laptop: <Laptop className="w-5 h-5 text-[#064E3B]" />,
    Compass: <Compass className="w-5 h-5 text-blue-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#D99A20]" />,
    Heart: <Heart className="w-5 h-5 text-rose-600" />,
    Users: <BookMarked className="w-5 h-5 text-[#064E3B]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-rose-600" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-amber-600" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#064E3B]" />,
    Ambulance: <Ambulance className="w-5 h-5 text-rose-600" />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[
                {
                  label: dict.nav.institutions,
                  href: routeMappings.institutions,
                },
                { label: institution.name },
              ]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">
                  <span>{institution.category}</span>
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
                  {institution.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                  {institution.tagline}
                </p>

                {institution.hasPpdb && (
                  <div className="pt-2 flex flex-wrap gap-3">
                    <Button
                      href={ppdbPath}
                      variant="gold"
                      size="lg"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      className="shadow-goldGlow font-bold"
                    >
                      {dict.institutionPage.registerPpdbBtn}
                    </Button>
                  </div>
                )}
              </div>

              <div className="lg:col-span-4">
                <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-2 border-sky-400/30">
                  <Image
                    src={institution.heroImage}
                    alt={institution.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Profil Lembaga */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#00609C] text-xs font-semibold tracking-wide border border-sky-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00609C]" />
                <span>{dict.institutionPage.profileTitle}</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#0F172A]">
                Mengenal Lebih Dekat {institution.name}
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                {institution.description}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Visi & Misi */}
        <section className="py-16 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-subtle">
                <h3 className="font-heading text-2xl font-bold text-[#102A43] mb-4">
                  {dict.aboutPage.visionTitle}
                </h3>
                <p className="text-base text-[#667085] leading-relaxed italic border-l-4 border-[#00609C] pl-4 py-1">
                  &ldquo;{institution.vision}&rdquo;
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-subtle">
                <h3 className="font-heading text-2xl font-bold text-[#102A43] mb-4">
                  {dict.aboutPage.missionTitle}
                </h3>
                <ul className="space-y-3 text-sm text-[#667085]">
                  {institution.missions.map(
                    (m, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00609C] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{m}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Keunggulan Lembaga */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold text-[#102A43]">
                {dict.institutionPage.advantagesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {institution.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAF9F5] border border-gray-100 hover:shadow-card transition"
                >
                  <div className="p-3 rounded-xl bg-white shadow-xs w-fit mb-4">
                    {iconMap[feat.icon] || <Sparkles className="w-5 h-5 text-[#00609C]" />}
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#102A43] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Program Khusus Lembaga */}
        <section className="py-16 bg-[#F7F5EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold text-[#102A43]">
                {dict.institutionPage.featuredProgramsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {institution.programs.map((prog, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00609C] text-xs font-bold flex items-center justify-center mb-4">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#102A43] mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-[#667085] leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special PPDB Box for SMP IT AZZAIN */}
        {institution.hasPpdb && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-[#00609C] to-[#043F32] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 text-xs font-bold text-gold-warm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>PPDB Tahun Pelajaran 2026/2027</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {dict.institutionPage.ppdbNoticeTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                    {dict.institutionPage.ppdbNoticeDesc}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                  <Button href={ppdbPath} variant="gold" size="lg" className="shadow-goldGlow font-bold">
                    {dict.institutionPage.registerPpdbBtn}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Berita Terkait Lembaga */}
        {relatedNews.length > 0 && (
          <section className="py-16 bg-[#FAF9F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-2xl font-bold text-[#102A43]">
                  {dict.institutionPage.latestNewsTitle}
                </h2>
                <Link
                  href={routeMappings.news}
                  className="text-xs font-bold text-[#00609C] hover:underline"
                >
                  {dict.common.viewAll}
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedNews.map((news) => (
                  <article
                    key={news.id}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-subtle group"
                  >
                    <div className="relative h-44 w-full bg-gray-100">
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] text-gray-500 block mb-1">
                        {news.publishedDate}
                      </span>
                      <h4 className="font-heading text-base font-bold text-[#102A43] group-hover:text-[#00609C] transition line-clamp-2 mb-2">
                        {news.title}
                      </h4>
                      <Link
                        href={`/id/berita/${news.slug}`}
                        className="text-xs font-bold text-[#00609C] inline-flex items-center gap-1 mt-2"
                      >
                        <span>{dict.common.readMore}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 6: Galeri Lembaga */}
        {relatedGallery.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading text-2xl font-bold text-[#102A43] mb-8">
                {dict.institutionPage.galleryTitle}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedGallery.map((gal) => (
                  <div
                    key={gal.id}
                    className="relative h-48 rounded-2xl overflow-hidden shadow-subtle bg-gray-100 group"
                  >
                    <Image
                      src={gal.image}
                      alt={gal.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                      <p className="text-xs text-white font-medium line-clamp-2">
                        {gal.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 7: Kontak Sekretariat Lembaga */}
        <section className="py-16 bg-[#FAF9F5] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="font-heading text-xl font-bold text-[#102A43]">
                  {dict.institutionPage.contactTitle}
                </h3>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#667085]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00609C] shrink-0" />
                    <span>{institution.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00609C] shrink-0" />
                    <span>{institution.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00609C] shrink-0" />
                    <span>{institution.email}</span>
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex gap-3">
                <a
                  href={`tel:${institution.phone.replace(/\D/g, '')}`}
                  className="px-4 py-2.5 rounded-xl border border-[#00609C] text-[#00609C] font-bold text-xs hover:bg-[#00609C] hover:text-white transition"
                >
                  Telepon Sekarang
                </a>
                {institution.hasPpdb && (
                  <Button href={ppdbPath} variant="primary" size="sm">
                    {dict.institutionPage.registerPpdbBtn}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
