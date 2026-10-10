import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Building } from 'lucide-react';
import { Program } from '@/types';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { programsMock } from '@/mock';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/Button';

interface ProgramDetailViewProps {
  program: Program;
}

export const ProgramDetailView: React.FC<ProgramDetailViewProps> = ({ program }) => {
  const dict = getDictionary();
  const programsPath = routeMappings.programs;
  const regPath = routeMappings.registration;

  const relatedPrograms = programsMock
    .filter((p) => p.id !== program.id && p.category === program.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        {/* Detail Hero */}
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[
                { label: dict.nav.programs, href: programsPath },
                { label: program.title },
              ]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white">
                <span>{program.category}</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {program.title}
              </h1>
              <p className="text-base text-emerald-100/90 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#E5A928]" />
                <span>{program.institution}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-8">
                <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-card border border-gray-100">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-subtle space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-[#102A43]">
                    Gambaran & Tujuan Program
                  </h2>
                  <p className="text-base text-[#667085] leading-relaxed">
                    {program.content}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-heading text-xl font-bold text-[#102A43] mb-4">
                      {dict.programsPage.highlightsTitle}
                    </h3>
                    <ul className="space-y-3">
                      {program.highlights.map(
                        (item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#102A43]">
                            <CheckCircle2 className="w-5 h-5 text-[#064E3B] shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium">{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-subtle space-y-4">
                  <h3 className="font-heading text-lg font-bold text-[#102A43]">
                    Lembaga Penyelenggara
                  </h3>
                  <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-gray-100">
                    <p className="font-heading text-base font-bold text-[#064E3B]">
                      {program.institution}
                    </p>
                    <p className="text-xs text-[#667085] mt-1">
                      Yayasan Sosial Azhar Mandiri
                    </p>
                  </div>
                  <Button href={regPath} variant="primary" className="w-full">
                    {dict.common.registerNow}
                  </Button>
                </div>

                {/* Related Programs */}
                {relatedPrograms.length > 0 && (
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-subtle space-y-4">
                    <h3 className="font-heading text-lg font-bold text-[#102A43]">
                      Program Terkait
                    </h3>
                    <div className="space-y-3">
                      {relatedPrograms.map((rp) => (
                        <Link
                          key={rp.id}
                          href={`/id/program/${rp.slug}`}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition group"
                        >
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                            <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#102A43] group-hover:text-[#064E3B] line-clamp-2">
                              {rp.title}
                            </p>
                            <span className="text-[10px] text-gray-500">{rp.category}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
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
