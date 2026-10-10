'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Share2, Check, ArrowRight } from 'lucide-react';
import { NewsItem } from '@/types';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { newsMock } from '@/mock';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

interface NewsDetailViewProps {
  news: NewsItem;
}

export const NewsDetailView: React.FC<NewsDetailViewProps> = ({ news }) => {
  const dict = getDictionary();
  const newsPath = routeMappings.news;
  const [copied, setCopied] = useState(false);

  const relatedArticles = newsMock
    .filter((n) => n.id !== news.id && (n.category === news.category || n.institution === news.institution))
    .slice(0, 3);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[
                { label: dict.nav.news, href: newsPath },
                { label: news.category },
              ]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />

            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white">
                {news.category} • {news.institution}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {news.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-emerald-200/90 border-t border-emerald-800/60">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#E5A928]" />
                  {news.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#E5A928]" />
                  {news.publishedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#E5A928]" />
                  {news.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-subtle space-y-8">
              {/* Featured Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              {/* Rich Content */}
              <div
                className="prose prose-emerald max-w-none text-[#102A43] leading-relaxed space-y-4 [&_p]:text-base [&_p]:leading-relaxed [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#00609C] [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-sm"
                dangerouslySetInnerHTML={{
                  __html: news.content,
                }}
              />

              {/* Share Bar */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">
                  Bagikan artikel ini:
                </span>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#FAF9F5] hover:bg-emerald-50 text-[#00609C] border border-gray-200 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{dict.common.copySuccess}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Salin Tautan</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16">
                <h3 className="font-heading text-2xl font-bold text-[#102A43] mb-6">
                  {dict.newsPage.relatedNews}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((rel) => (
                    <article
                      key={rel.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-subtle group flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-40 w-full bg-gray-100">
                          <Image
                            src={rel.thumbnail}
                            alt={rel.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-[10px] text-gray-400 block mb-1">
                            {rel.publishedDate}
                          </span>
                          <h4 className="font-heading text-sm font-bold text-[#102A43] group-hover:text-[#00609C] transition line-clamp-2">
                            {rel.title}
                          </h4>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <Link
                          href={`/id/berita/${rel.slug}`}
                          className="text-xs font-bold text-[#00609C] inline-flex items-center gap-1"
                        >
                          <span>{dict.common.readMore}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
