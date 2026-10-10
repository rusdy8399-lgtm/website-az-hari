import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { newsMock } from '@/mock';

export const NewsSection: React.FC = () => {
  const dict = getDictionary();
  const newsPath = routeMappings.news;

  // Show top 3 recent articles
  const latestNews = newsMock.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7FD] text-[#00609C] text-xs font-bold tracking-wide border border-sky-200 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
              {dict.home.newsSection.badge}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {dict.home.newsSection.title}
            </h2>
            <p className="text-base text-[#475569] mt-2">
              {dict.home.newsSection.description}
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href={newsPath}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm font-bold text-[#00609C] hover:bg-[#F0F7FD] transition"
            >
              <span>{dict.common.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news) => {
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

                    <h3 className="font-heading text-lg font-bold text-[#0F172A] group-hover:text-[#00609C] transition line-clamp-2 mb-2.5">
                      {news.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={detailPath}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00609C] group-hover:text-[#F5A623] transition"
                  >
                    <span>{dict.common.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
