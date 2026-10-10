import React from 'react';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { LeadershipSection } from '@/components/home/LeadershipSection';
import { AboutSection } from '@/components/home/AboutSection';
import { InstitutionsSection } from '@/components/home/InstitutionsSection';
import { NewsSection } from '@/components/home/NewsSection';
import { GallerySection } from '@/components/home/GallerySection';
import { CtaSection } from '@/components/home/CtaSection';

export const HomeView: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      {/* 1. Top Information Bar */}
      <TopInfoBar />

      {/* 2. Modern Clean Header / Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Hero — Background Gedung Yayasan + Panel 4 Nilai Yayasan */}
        <Hero />

        {/* 4. Program Unggulan (Tepat setelah panel nilai yayasan) */}
        <ProgramsSection />

        {/* 5. Sambutan Pimpinan Yayasan */}
        <LeadershipSection />

        {/* 6. Tentang Yayasan & Profil */}
        <AboutSection />

        {/* 7. Lembaga di Bawah Naungan */}
        <InstitutionsSection />

        {/* 8. Berita & Kegiatan */}
        <NewsSection />

        {/* 9. Galeri Dokumentasi */}
        <GallerySection />

        {/* 10. CTA Layanan / Pendaftaran */}
        <CtaSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};
