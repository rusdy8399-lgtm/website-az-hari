import React from 'react';
import { getDictionary } from '@/lib/i18n';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { InstitutionsSection } from '@/components/home/InstitutionsSection';

export const InstitutionsOverviewView: React.FC = () => {
  const dict = getDictionary();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[{ label: dict.nav.institutions }]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-3">
              {dict.home.institutionsSection.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl font-normal">
              {dict.home.institutionsSection.description}
            </p>
          </div>
        </section>

        <InstitutionsSection />
      </main>

      <Footer />
    </div>
  );
};
