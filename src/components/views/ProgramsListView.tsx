'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Filter, Sparkles } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { programsMock } from '@/mock';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { EmptyState } from '@/components/ui/EmptyState';

export const ProgramsListView: React.FC = () => {
  const dict = getDictionary();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    { id: 'Semua', label: 'Semua Program' },
    { id: 'Pelayanan Sosial', label: 'Pelayanan Sosial' },
    { id: 'Bantuan Sosial', label: 'Bantuan Sosial' },
    { id: 'Kesehatan', label: 'Kesehatan' },
    { id: 'Pemberdayaan', label: 'Pemberdayaan' },
    { id: 'Keagamaan', label: 'Keagamaan' },
    { id: 'Fasilitas', label: 'Fasilitas & Sarana' },
  ];

  const filteredPrograms =
    selectedCategory === 'Semua'
      ? programsMock
      : programsMock.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[{ label: dict.nav.programs }]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
                {dict.programsPage.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                {dict.programsPage.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="py-6 bg-white border-b border-gray-100 sticky top-[73px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <Filter className="w-4 h-4 text-[#00609C] shrink-0 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                    selectedCategory === cat.id
                      ? 'bg-[#00609C] text-white shadow-sm'
                      : 'bg-[#FAF9F5] text-gray-700 hover:bg-gray-100 border border-gray-200/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Program Cards Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPrograms.length === 0 ? (
              <EmptyState
                title="Tidak Ada Program"
                description="Belum ada program untuk kategori ini."
                actionLabel="Lihat Semua Program"
                onAction={() => setSelectedCategory('Semua')}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPrograms.map((prog) => {
                  const detailPath = `/id/program/${prog.slug}`;

                  return (
                    <div
                      key={prog.id}
                      className="bg-white rounded-2xl border border-gray-100 shadow-subtle hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                          <Image
                            src={prog.image}
                            alt={prog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 25vw"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-sm text-[#00609C] shadow-sm">
                              {prog.category}
                            </span>
                          </div>
                          {prog.featured && (
                            <div className="absolute top-3 right-3">
                              <span className="p-1 rounded-full bg-[#D99A20] text-white shadow-sm flex items-center justify-center">
                                <Sparkles className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-5">
                          <p className="text-[11px] font-bold text-[#D99A20] uppercase tracking-wider mb-1">
                            {prog.institution}
                          </p>
                          <h3 className="font-heading text-lg font-bold text-[#102A43] group-hover:text-[#00609C] transition line-clamp-2 mb-2">
                            {prog.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#667085] line-clamp-3 leading-relaxed">
                            {prog.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 pt-0 border-t border-gray-50 flex items-center justify-between">
                        <Link
                          href={detailPath}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00609C] group-hover:text-[#D99A20] transition"
                        >
                          <span>{dict.common.readMore}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
