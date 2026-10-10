import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import { foundationMock } from '@/mock';

export const TopInfoBar: React.FC = () => {
  const dict = getDictionary();

  return (
    <div className="bg-[#00223D] text-white text-[11px] sm:text-xs py-2 hidden md:block border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-0 text-white/90">
          <div className="flex items-center gap-1.5 hover:text-white transition pr-3.5">
            <Phone className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
            <span className="font-mono tracking-tight font-medium">0813 9876 1896</span>
          </div>
          <span className="text-white/20 select-none">|</span>
          <div className="flex items-center gap-1.5 hover:text-white transition px-3.5">
            <Mail className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
            <span className="font-medium">{foundationMock.email}</span>
          </div>
          <span className="text-white/20 select-none">|</span>
          <div className="flex items-center gap-1.5 text-white/80 pl-3.5">
            <MapPin className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
            <span className="font-medium">Senin – Sabtu: 08.00 – 16.00 WITA</span>
          </div>
        </div>

        {/* Right: Legal & Social Media */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1.5 text-[#FFB020] font-medium text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>SK: {foundationMock.decreeNumber}</span>
          </div>

          <div className="flex items-center gap-3 pl-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-[#FF7A00] transition"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-[#FF7A00] transition"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-[#FF7A00] transition"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <Link
            href="/admin"
            className="pl-2 text-white/60 hover:text-[#FF7A00] transition text-[11px] font-medium"
          >
            {dict.nav.adminLogin}
          </Link>
        </div>
      </div>
    </div>
  );
};
