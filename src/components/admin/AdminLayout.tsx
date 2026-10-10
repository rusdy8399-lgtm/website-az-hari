'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  GraduationCap,
  Layers,
  FileText,
  Image as ImageIcon,
  UserCheck,
  FolderArchive,
  Users,
  Settings,
  History,
  ExternalLink,
  Menu,
  X,
  Bell,
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', href: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: 'Yayasan', href: '/admin/yayasan', icon: <Building2 className="w-5 h-5" /> },
    { label: 'Lembaga', href: '/admin/lembaga', icon: <GraduationCap className="w-5 h-5" /> },
    { label: 'Program', href: '/admin/program', icon: <Layers className="w-5 h-5" /> },
    { label: 'Berita', href: '/admin/berita', icon: <FileText className="w-5 h-5" /> },
    { label: 'Galeri', href: '/admin/galeri', icon: <ImageIcon className="w-5 h-5" /> },
    { label: 'Pendaftaran', href: '/admin/pendaftaran', icon: <UserCheck className="w-5 h-5" />, badge: '48 Data' },
    { label: 'Media', href: '/admin/media', icon: <FolderArchive className="w-5 h-5" /> },
    { label: 'Pengguna', href: '/admin/pengguna', icon: <Users className="w-5 h-5" /> },
    { label: 'Pengaturan', href: '/admin/pengaturan', icon: <Settings className="w-5 h-5" /> },
    { label: 'Audit Log', href: '/admin/audit-log', icon: <History className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5EF] flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#043F32] text-white shrink-0 border-r border-emerald-900/60 sticky top-0 h-screen overflow-y-auto">
        {/* Brand */}
        <div className="p-6 border-b border-emerald-800/60 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden border border-emerald-700/50">
            <Image
              src="/logo.jpg"
              alt="Logo Yayasan Sosial Azhar Mandiri"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-heading font-bold text-sm text-white block">
              CMS Al-Azhar Mandiri
            </span>
            <span className="text-[10px] text-gold-warm font-semibold tracking-wider uppercase">
              Admin Panel
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#064E3B] text-white shadow-sm border border-emerald-600/40 text-gold-warm'
                    : 'text-emerald-100/70 hover:bg-emerald-900/40 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-[#E5A928]' : 'text-emerald-300/80'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#D99A20] text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom User & Portal Switch */}
        <div className="p-4 border-t border-emerald-800/60 space-y-3">
          <Link
            href="/id"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-emerald-200/80 hover:text-white hover:bg-emerald-900/40 transition"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Lihat Website Publik</span>
          </Link>

          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-xs font-bold text-white">
              FA
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-white truncate">Dr. Ahmad Fauzan</p>
              <p className="text-[10px] text-emerald-300/80">ADMIN</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative w-64 max-w-[80vw] bg-[#043F32] text-white h-full flex flex-col z-10">
            <div className="p-5 border-b border-emerald-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center overflow-hidden shrink-0">
                  <Image
                    src="/logo.jpg"
                    alt="Logo Yayasan"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-heading font-bold text-sm">CMS Portal</span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 rounded text-emerald-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium ${
                    pathname === item.href
                      ? 'bg-[#064E3B] text-gold-warm font-bold'
                      : 'text-emerald-100/70 hover:bg-emerald-900/40'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Admin Topbar */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-[#064E3B] font-semibold border border-emerald-200">
                CMS Yayasan Sosial Azhar Mandiri
              </span>
              <span>•</span>
              <span className="text-gray-400">Bahasa Indonesia</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500" />
              </button>
            </div>

            <div className="h-6 w-px bg-gray-200" />

            <Link
              href="/id"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] hover:text-[#043F32] bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Lihat Web</span>
            </Link>
          </div>
        </header>

        {/* View Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
