import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { foundationMock } from '@/mock';

export const Footer: React.FC = () => {
  const dict = getDictionary();

  const homePath = routeMappings.home;
  const aboutPath = routeMappings.about;
  const programsPath = routeMappings.programs;
  const newsPath = routeMappings.news;
  const galleryPath = routeMappings.gallery;
  const contactPath = routeMappings.contact;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#032B4F] text-white pt-16 pb-8 border-t-4 border-[#F5A623]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-sky-900/60">
          {/* Col 1: Foundation Info */}
          <div className="space-y-4">
            <Link href={homePath} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 border border-white/20 overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Logo Yayasan Sosial Azhar Mandiri"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-white">
                  Azhar Mandiri
                </span>
                <span className="text-xs text-[#F5A623] font-medium">
                  {foundationMock.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
              Lembaga sosial yang bergerak dalam bidang sosial, kemanusiaan, keagamaan, pendidikan, dan pemberdayaan masyarakat di Lombok Tengah, NTB.
            </p>

            <div className="space-y-1.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#00172A] border border-sky-900/60 text-[11px] text-[#FFBA3A] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#F5A623]" />
                <span>SK Kemenkumham: {foundationMock.decreeNumber}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Akta Notaris: {foundationMock.deedNumber} • SIOP: {foundationMock.siopNumber}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={foundationMock.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F5A623] hover:text-[#00223D] transition flex items-center justify-center text-white/90"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={foundationMock.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F5A623] hover:text-[#00223D] transition flex items-center justify-center text-white/90"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={foundationMock.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F5A623] hover:text-[#00223D] transition flex items-center justify-center text-white/90"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Program Utama */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-white border-b border-sky-800/80 pb-2">
              Program Utama
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href={programsPath} className="hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
                  <div>
                    <strong className="text-white block text-xs sm:text-sm">Santunan Anak Asuh</strong>
                    <span className="text-[11px] text-sky-200/70">Yatim, Disabilitas & Lansia</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={programsPath} className="hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
                  <div>
                    <strong className="text-white block text-xs sm:text-sm">Bantuan Sosial Rutin</strong>
                    <span className="text-[11px] text-sky-200/70">Beras, Sembako, Daging & Pakaian</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={programsPath} className="hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
                  <div>
                    <strong className="text-white block text-xs sm:text-sm">Pelayanan Kesehatan</strong>
                    <span className="text-[11px] text-sky-200/70">Obat & Dukungan Medis Dhuafa</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={programsPath} className="hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
                  <div>
                    <strong className="text-white block text-xs sm:text-sm">Bantuan Pendidikan</strong>
                    <span className="text-[11px] text-sky-200/70">Beasiswa & Pembinaan Belajar</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Akses Cepat */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-white border-b border-sky-800/80 pb-2">
              Akses Cepat
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href={aboutPath} className="hover:text-white transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{dict.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href={programsPath} className="hover:text-white transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{dict.nav.programs}</span>
                </Link>
              </li>
              <li>
                <Link href={newsPath} className="hover:text-white transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{dict.nav.news}</span>
                </Link>
              </li>
              <li>
                <Link href={galleryPath} className="hover:text-white transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{dict.nav.gallery}</span>
                </Link>
              </li>
              <li>
                <Link href={contactPath} className="hover:text-white transition flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{dict.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-white border-b border-sky-800/80 pb-2">
              Sekretariat Yayasan
            </h3>
            <div className="space-y-3 text-xs md:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <span>{foundationMock.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span className="font-mono">{foundationMock.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0" />
                <span>{foundationMock.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white bg-sky-950/60 px-3 py-1.5 rounded-lg border border-sky-800/40"
              >
                <span>CMS / Admin Dashboard</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {foundationMock.name}. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-1">
            <span>Berbagi Ilmu, Menebar Manfaat untuk Ummat</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
