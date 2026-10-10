'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { foundationMock } from '@/mock';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after slight delay to be non-intrusive
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
    }, 1500);

    // Auto-hide tooltip after 6 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7500);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const cleanPhone = foundationMock.whatsapp.replace(/\D/g, '') || '6281398761896';
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'Assalamu’alaikum Warahmatullahi Wabarakatuh, saya ingin menanyakan informasi seputar Yayasan Sosial Azhar Mandiri.'
  )}`;

  if (!isVisible) return null;

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-[#00223D] flex items-center gap-1 mb-0.5">
            <span>Butuh Informasi?</span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </p>
          <p className="text-[11px] text-slate-600 leading-snug">
            Hubungi layanan sekretariat kami via WhatsApp sekarang.
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat WhatsApp Sekretariat"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full border-2 border-[#25D366]" />
        </span>
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide pr-1">
          Chat WhatsApp
        </span>
      </a>
    </aside>
  );
};
