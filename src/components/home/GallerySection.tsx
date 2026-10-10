import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { galleryMock } from '@/mock';

export const GallerySection: React.FC = () => {
  const dict = getDictionary();
  const galleryPath = routeMappings.gallery;

  // Show 4 photos
  const previewPhotos = galleryMock.slice(0, 4);

  return (
    <section className="py-20 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F7FD] text-[#00609C] text-xs font-bold tracking-wide border border-sky-200 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
              {dict.home.gallerySection.badge}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {dict.home.gallerySection.title}
            </h2>
            <p className="text-base text-[#475569] mt-2">
              {dict.home.gallerySection.description}
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href={galleryPath}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm font-bold text-[#00609C] hover:bg-[#F0F7FD] transition"
            >
              <span>{dict.common.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {previewPhotos.map((item) => (
            <Link
              key={item.id}
              href={galleryPath}
              className="group relative h-60 sm:h-72 rounded-2xl overflow-hidden shadow-subtle bg-gray-100 block"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#E5A928]">
                  {item.category}
                </span>
                <p className="text-xs font-semibold line-clamp-2 mt-0.5">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
