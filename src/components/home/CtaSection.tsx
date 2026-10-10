import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, MessageCircle, HeartHandshake } from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { foundationMock } from '@/mock';
import { Button } from '@/components/ui/Button';

export const CtaSection: React.FC = () => {
  const dict = getDictionary();
  const contactPath = routeMappings.contact;
  const programsPath = routeMappings.programs;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#003B64] via-[#005B96] to-[#00223D] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Ambient blur glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F5A623]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#F5A623]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{dict.home.ctaSection.badge}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {dict.home.ctaSection.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed font-normal">
              {dict.home.ctaSection.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                href={contactPath}
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-goldGlow font-bold"
              >
                Hubungi Sekretariat
              </Button>

              <Button
                href={programsPath}
                variant="outline"
                size="lg"
                leftIcon={<HeartHandshake className="w-4 h-4" />}
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-[#003B64]"
              >
                Lihat Program Sosial
              </Button>
            </div>

            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-sky-200/90">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
                Penyaluran Tepat Sasaran & Terverifikasi
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
                Laporan Akuntabel & Amanah
              </span>
              <a
                href={`https://wa.me/${foundationMock.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#F5A623] hover:underline font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                {dict.home.ctaSection.buttonConsult}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
