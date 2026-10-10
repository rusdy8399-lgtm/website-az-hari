import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, BookOpen, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { institutionsMock } from '@/mock';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const InstitutionsSection: React.FC = () => {
  const dict = getDictionary();

  const getInstitutionIcon = (id: string) => {
    switch (id) {
      case 'smp-it-azzain':
        return <GraduationCap className="w-6 h-6 text-[#064E3B]" />;
      case 'majlis-taklim-raudatul-azhar':
        return <BookOpen className="w-6 h-6 text-[#D99A20]" />;
      case 'lska-raudatul-azhar':
        return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      default:
        return <GraduationCap className="w-6 h-6 text-[#064E3B]" />;
    }
  };

  const getInstitutionLink = (slug: string) => {
    if (slug === 'smp-it-azzain') {
      return routeMappings['institution-smp'];
    }
    if (slug === 'majlis-taklim-raudatul-azhar') {
      return routeMappings['institution-majlis'];
    }
    return routeMappings['institution-lska'];
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={dict.home.institutionsSection.badge}
          title={dict.home.institutionsSection.title}
          description={dict.home.institutionsSection.description}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {institutionsMock.map((inst) => {
            const detailLink = getInstitutionLink(inst.slug);

            return (
              <div
                key={inst.id}
                className="group bg-white rounded-3xl border border-gray-100 shadow-subtle hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
              >
                {/* Visual Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={inst.heroImage}
                    alt={inst.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#00609C] shadow-sm">
                      {inst.category}
                    </span>
                  </div>

                  {inst.hasPpdb && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#F5A623] text-[#00223D] shadow-sm">
                        PPDB Buka
                      </span>
                    </div>
                  )}

                  {/* Icon floating */}
                  <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-2xl bg-white shadow-lg border border-gray-50 flex items-center justify-center">
                    {getInstitutionIcon(inst.id)}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#0F172A] group-hover:text-[#00609C] transition">
                      {inst.name}
                    </h3>
                    <p className="text-xs text-[#F5A623] font-semibold mt-1 mb-3">
                      {inst.tagline}
                    </p>
                    <p className="text-sm text-[#475569] line-clamp-3 leading-relaxed mb-4">
                      {inst.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-6 text-xs text-gray-600">
                      {inst.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00609C] shrink-0" />
                          <span>{feat.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={detailLink}
                      className="text-sm font-bold text-[#00609C] hover:text-[#004875] flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                    >
                      <span>{dict.common.learnMore}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {inst.hasPpdb && (
                      <Link
                        href={routeMappings['ppdb-wizard']}
                        className="text-xs font-bold text-[#00609C] hover:text-[#004875] px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 transition"
                      >
                        Formulir PPDB
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
