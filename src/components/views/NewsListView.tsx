'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, Filter, BookOpen } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { newsMock } from '@/mock';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Pagination } from '@/components/ui/Pagination';
import { EmptyState } from '@/components/ui/EmptyState';

export const NewsListView: React.FC = () => {
  const dict = getDictionary();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    'Semua',
    'Yayasan',
    'SMP IT Azzain',
    'Majlis Taklim',
    'LSKA',
    'Pendidikan',
    'Dakwah',
    'Sosial',
  ];

  const filteredNews = useMemo(() => {
    return newsMock.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Semua' || item.category === selectedCategory;
      const titleToSearch = item.title.toLowerCase();
      const excerptToSearch = item.excerpt.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q || titleToSearch.includes(q) || excerptToSearch.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, currentPage]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
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
              items={[{ label: dict.nav.news }]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
                {dict.newsPage.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                {dict.newsPage.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Search & Category Filter Toolbar */}
        <section className="py-6 bg-white border-b border-gray-100 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-1">
                <Filter className="w-4 h-4 text-[#00609C] shrink-0 mr-1" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                      selectedCategory === cat
                        ? 'bg-[#00609C] text-white shadow-sm'
                        : 'bg-[#FAF9F5] text-gray-700 hover:bg-gray-100 border border-gray-200/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative min-w-[280px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder={dict.newsPage.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-gray-200 focus:outline-none focus:border-[#00609C] focus:ring-1 focus:ring-[#00609C] bg-[#FAF9F5]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {paginatedNews.length === 0 ? (
              <EmptyState
                icon={<BookOpen className="w-8 h-8" />}
                title="Tidak Ada Berita"
                description="Tidak ada artikel yang cocok dengan pencarian atau filter yang dipilih."
                actionLabel="Reset Pencarian"
                onAction={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                }}
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedNews.map((news) => {
                    const detailPath = `/id/berita/${news.slug}`;

                    return (
                      <article
                        key={news.id}
                        className="bg-white rounded-3xl border border-gray-100 shadow-subtle hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group"
                      >
                        <div>
                          <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                            <Image
                              src={news.thumbnail}
                              alt={news.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-[#00609C] shadow-sm">
                                {news.category}
                              </span>
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                {news.publishedDate}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-gray-400" />
                                {news.readTime}
                              </span>
                            </div>

                            <h2 className="font-heading text-lg font-bold text-[#102A43] group-hover:text-[#00609C] transition line-clamp-2 mb-2.5">
                              {news.title}
                            </h2>

                            <p className="text-xs sm:text-sm text-[#667085] line-clamp-3 leading-relaxed">
                              {news.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 pt-0">
                          <Link
                            href={detailPath}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00609C] group-hover:text-[#D99A20] transition"
                          >
                            <span>{dict.common.readMore}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Pagination */}
                <div className="mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(p) => setCurrentPage(p)}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
