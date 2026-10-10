import React from 'react';
import { Users, Clock, Calendar, HeartHandshake } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';

export const StatisticsSection: React.FC = () => {
  const dict = getDictionary();

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-[#F5A623]" />,
      value: '205+',
      label: 'Penerima Manfaat',
      sub: 'Kecamatan Praya & sekitarnya',
    },
    {
      icon: <Clock className="w-8 h-8 text-[#F5A623]" />,
      value: '10+ Tahun',
      label: 'Pengabdian Sosial',
      sub: 'Konsisten sejak Januari 2015',
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#F5A623]" />,
      value: '2015',
      label: 'Awal Pelaksanaan',
      sub: 'Program santunan dhuafa',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#F5A623]" />,
      value: '4+',
      label: 'Program Utama',
      sub: 'Santunan, Logistik, Kesehatan, Pendidikan',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#00223D] via-[#003B64] to-[#00223D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#F5A623] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
            {dict.home.statsSection.badge}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            {dict.home.statsSection.title}
          </h2>
          <p className="text-sm text-slate-300 mt-2 font-normal">
            Komitmen menghadirkan pertolongan dan pelayanan nyata bagi kaum dhuafa.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-colors shadow-lg"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 mb-4">
                {item.icon}
              </div>
              <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-[#F5A623]">
                {item.value}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white/95">
                {item.label}
              </p>
              <p className="text-xs text-sky-200/80 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 italic">
            *Catatan: Data capaian dan periode program ditampilkan berdasarkan dokumen profil resmi yayasan.
          </p>
        </div>
      </div>
    </section>
  );
};
