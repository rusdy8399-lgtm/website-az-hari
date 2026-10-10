'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Filter, Eye, ChevronLeft, ChevronRight, X, Calendar } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { galleryMock } from '@/mock';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export const GalleryView: React.FC = () => {
  const dict = getDictionary();
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['Semua', 'Yayasan', 'SMP IT Azzain', 'Majlis Taklim', 'LSKA'];

  const filteredItems =
    selectedCategory === 'Semua'
      ? galleryMock
      : galleryMock.filter((g) => g.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[{ label: dict.nav.gallery }]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
                {dict.galleryPage.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                {dict.galleryPage.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Filter Toolbar */}
        <section className="py-6 bg-white border-b border-gray-100 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <Filter className="w-4 h-4 text-[#00609C] shrink-0 mr-1" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-[#00609C] text-white shadow-sm'
                      : 'bg-[#FAF9F5] text-gray-700 hover:bg-gray-100 border border-gray-200/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="group relative h-72 rounded-3xl overflow-hidden shadow-subtle hover:shadow-cardHover cursor-pointer bg-gray-100 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D99A20] text-white">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-gray-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-1 mt-1">
                      {item.caption}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#E5A928]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{dict.galleryPage.viewPhoto}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {currentItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Media & Details Container */}
            <div
              className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden bg-black">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1000px"
                />
              </div>

              {/* Caption and meta */}
              <div className="w-full bg-zinc-900/90 text-white p-4 rounded-xl mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#D99A20] text-white">
                      {currentItem.category}
                    </span>
                    <span className="text-xs text-zinc-400">{currentItem.date}</span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">
                    {currentItem.title}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    {currentItem.caption}
                  </p>
                </div>
                <div className="text-xs text-zinc-400 shrink-0">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
