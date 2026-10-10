'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  FileText
} from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';

export const Navbar: React.FC = () => {
  const pathname = usePathname() || '/';
  const dict = getDictionary();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [institutionsDropdownOpen, setInstitutionsDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setInstitutionsDropdownOpen(false);
    setProgramsDropdownOpen(false);
  }, [pathname]);

  const homePath = routeMappings.home;
  const aboutPath = routeMappings.about;
  const programsPath = routeMappings.programs;
  const newsPath = routeMappings.news;
  const galleryPath = routeMappings.gallery;
  const regPath = routeMappings.registration;
  const contactPath = routeMappings.contact;

  const aboutSubmenus = [
    { name: 'Profil & Legalitas Yayasan', href: aboutPath, icon: <Building2 className="w-4 h-4 text-[#00609C]" /> },
    { name: 'Struktur Pengurus & Pimpinan', href: `${aboutPath}#pengurus`, icon: <Users className="w-4 h-4 text-[#00609C]" /> },
    { name: 'Visi, Misi & Roadmap', href: `${aboutPath}#visi-misi`, icon: <Sparkles className="w-4 h-4 text-[#00609C]" /> },
  ];

  const institutions = [
    {
      name: 'SMP IT AZZAIN',
      desc: 'Pendidikan Tahfidz & Sains Islam',
      href: routeMappings['institution-smp'],
      icon: <GraduationCap className="w-4 h-4 text-[#064E3B]" />,
      badge: 'PPDB Buka',
    },
    {
      name: 'Majlis Taklim Raudatul Azhar',
      desc: 'Dakwah, Kajian & Tahsin',
      href: routeMappings['institution-majlis'],
      icon: <BookOpen className="w-4 h-4 text-[#D99A20]" />,
    },
    {
      name: 'LSKA Raudatul Azhar',
      desc: 'Sosial, Yatim & Dhuafa',
      href: routeMappings['institution-lska'],
      icon: <HeartHandshake className="w-4 h-4 text-rose-600" />,
    },
  ];

  const programSubmenus = [
    { name: 'Semua Program Sosial', href: programsPath, icon: <HeartHandshake className="w-4 h-4 text-[#FF7A00]" /> },
    { name: 'Santunan Anak Asuh', href: `${programsPath}/santunan-dan-pembinaan-anak-asuh`, icon: <Users className="w-4 h-4 text-[#FF7A00]" /> },
    { name: 'Bantuan Sembako & Logistik', href: `${programsPath}/bantuan-sosial-rutin-sembako`, icon: <FileText className="w-4 h-4 text-[#FF7A00]" /> },
  ];

  const isHome = pathname === homePath || pathname === '/id' || pathname === '/';

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href={homePath} className="flex items-center gap-3 group shrink-0 py-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 relative shrink-0">
              <Image
                src="/logo.jpg"
                alt="Logo Yayasan Sosial Azhar Mandiri"
                width={56}
                height={56}
                className="w-full h-full object-contain drop-shadow-xs"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg lg:text-xl text-[#00223D] tracking-tight leading-snug group-hover:text-[#00609C] transition">
                Yayasan Sosial Azhar Mandiri
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#FF7A00] tracking-wide mt-0.5">
                Berbagi Ilmu, Menebar Manfaat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {/* Beranda */}
            <Link
              href={homePath}
              className={`px-3 py-2 text-[13px] font-bold tracking-normal transition-colors relative ${
                isHome
                  ? 'text-[#00223D]'
                  : 'text-slate-700 hover:text-[#FF7A00]'
              }`}
            >
              <span>Beranda</span>
              {isHome && (
                <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#FF7A00] rounded-full" />
              )}
            </Link>

            {/* Tentang Yayasan Dropdown */}
            <div className="relative group">
              <Link
                href={aboutPath}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] font-bold tracking-normal transition-colors relative ${
                  pathname.includes('tentang-yayasan')
                    ? 'text-[#00223D]'
                    : 'text-slate-700 hover:text-[#FF7A00]'
                }`}
              >
                <span>Tentang Yayasan</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 group-hover:text-[#FF7A00] transition-transform duration-200" />
                {pathname.includes('tentang-yayasan') && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#FF7A00] rounded-full" />
                )}
              </Link>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 space-y-1">
                  {aboutSubmenus.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 hover:text-[#00223D] transition"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Layanan & Bidang / Lembaga Dropdown */}
            <div className="relative group">
              <Link
                href={routeMappings.institutions}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] font-bold tracking-normal transition-colors relative ${
                  pathname.includes('lembaga')
                    ? 'text-[#00223D]'
                    : 'text-slate-700 hover:text-[#FF7A00]'
                }`}
              >
                <span>Layanan & Bidang</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 group-hover:text-[#FF7A00] transition-transform duration-200" />
                {pathname.includes('lembaga') && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#FF7A00] rounded-full" />
                )}
              </Link>
              <div className="absolute top-full left-0 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 space-y-1">
                  {institutions.map((inst) => (
                    <Link
                      key={inst.name}
                      href={inst.href}
                      className="block p-2.5 rounded-xl hover:bg-slate-50 transition group/item"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 group-hover/item:text-[#00609C] transition">
                          {inst.name}
                        </span>
                        {inst.badge && (
                          <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                            {inst.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{inst.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Program Sosial Dropdown */}
            <div className="relative group">
              <Link
                href={programsPath}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] font-bold tracking-normal transition-colors relative ${
                  pathname.includes('program')
                    ? 'text-[#00223D]'
                    : 'text-slate-700 hover:text-[#FF7A00]'
                }`}
              >
                <span>Program Sosial</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 group-hover:text-[#FF7A00] transition-transform duration-200" />
                {pathname.includes('program') && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#FF7A00] rounded-full" />
                )}
              </Link>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 space-y-1">
                  {programSubmenus.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 hover:text-[#00223D] transition"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Berita & Kegiatan */}
            <Link
              href={newsPath}
              className={`px-3 py-2 text-[13px] font-bold tracking-normal transition-colors relative ${
                pathname.includes('berita')
                  ? 'text-[#00223D]'
                  : 'text-slate-700 hover:text-[#FF7A00]'
              }`}
            >
              <span>Berita & Kegiatan</span>
              {pathname.includes('berita') && (
                <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#FF7A00] rounded-full" />
              )}
            </Link>

            {/* Galeri */}
            <Link
              href={galleryPath}
              className={`px-3 py-2 text-[13px] font-bold tracking-normal transition-colors relative ${
                pathname.includes('galeri')
                  ? 'text-[#00223D]'
                  : 'text-slate-700 hover:text-[#FF7A00]'
              }`}
            >
              <span>Galeri</span>
              {pathname.includes('galeri') && (
                <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#FF7A00] rounded-full" />
              )}
            </Link>

            {/* Kontak */}
            <Link
              href={contactPath}
              className={`px-3 py-2 text-[13px] font-bold tracking-normal transition-colors relative ${
                pathname.includes('kontak')
                  ? 'text-[#00223D]'
                  : 'text-slate-700 hover:text-[#FF7A00]'
              }`}
            >
              <span>Kontak</span>
              {pathname.includes('kontak') && (
                <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#FF7A00] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right CTA Button */}
          <div className="hidden sm:flex items-center">
            <Link
              href={regPath}
              className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8500] hover:from-[#E65F00] hover:to-[#FF7A00] text-white text-xs lg:text-sm font-bold shadow-md hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all duration-200 shrink-0"
            >
              <HeartHandshake className="w-4 h-4 text-white shrink-0" />
              <span>Layanan Sosial / Pengajuan</span>
              <ArrowRight className="w-4 h-4 text-white/90 shrink-0" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ──────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-1 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            <Link
              href={homePath}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                isHome ? 'bg-orange-50 text-[#FF7A00]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Beranda
            </Link>

            {/* Mobile About Accordion */}
            <div>
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                <span>Tentang Yayasan</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutDropdownOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1">
                  {aboutSubmenus.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="flex items-center gap-2 p-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-orange-50 hover:text-[#FF7A00]"
                    >
                      {sub.icon}
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Institutions Accordion */}
            <div>
              <button
                onClick={() => setInstitutionsDropdownOpen(!institutionsDropdownOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                <span>Layanan & Bidang</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${institutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {institutionsDropdownOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1">
                  {institutions.map((inst) => (
                    <Link
                      key={inst.name}
                      href={inst.href}
                      className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-orange-50 hover:text-[#FF7A00]"
                    >
                      <div className="flex items-center gap-2">
                        {inst.icon}
                        <span>{inst.name}</span>
                      </div>
                      {inst.badge && (
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full">
                          {inst.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Programs Accordion */}
            <div>
              <button
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                <span>Program Sosial</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${programsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {programsDropdownOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1">
                  {programSubmenus.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="flex items-center gap-2 p-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-orange-50 hover:text-[#FF7A00]"
                    >
                      {sub.icon}
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={newsPath}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname.includes('berita') ? 'bg-orange-50 text-[#FF7A00]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Berita & Kegiatan
            </Link>

            <Link
              href={galleryPath}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname.includes('galeri') ? 'bg-orange-50 text-[#FF7A00]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Galeri
            </Link>

            <Link
              href={contactPath}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname.includes('kontak') ? 'bg-orange-50 text-[#FF7A00]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Kontak
            </Link>
          </nav>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <Link
              href={regPath}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8500] text-white text-sm font-bold shadow-md text-center"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Layanan Sosial / Pengajuan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
