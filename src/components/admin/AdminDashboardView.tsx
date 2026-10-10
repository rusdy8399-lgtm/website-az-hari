'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  UserCheck,
  Clock,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Layers,
  Image as ImageIcon,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { adminStatsMock, registrationsMock } from '@/mock';
import { StatusBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const AdminDashboardView: React.FC = () => {
  const stats = [
    {
      label: 'Total Pendaftar',
      value: adminStatsMock.totalRegistrations,
      sub: `+${adminStatsMock.newRegistrationsToday} hari ini`,
      icon: <Users className="w-5 h-5 text-blue-600" />,
      bg: 'bg-blue-50',
    },
    {
      label: 'Menunggu Verifikasi',
      value: adminStatsMock.pendingVerification,
      sub: 'Perlu ditinjau panitia',
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      bg: 'bg-amber-50',
      highlight: true,
    },
    {
      label: 'Data Perlu Diperbaiki',
      value: adminStatsMock.needsRevision,
      sub: 'Berkas buram/kurang',
      icon: <AlertTriangle className="w-5 h-5 text-rose-600" />,
      bg: 'bg-rose-50',
    },
    {
      label: 'Lulus Administrasi',
      value: adminStatsMock.passedAdministration,
      sub: 'Siap jadwal seleksi',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50',
    },
  ];

  const contentStats = [
    { label: 'Total Berita & Artikel', value: adminStatsMock.totalNews, icon: <FileText className="w-4 h-4 text-[#064E3B]" />, href: '/admin/berita' },
    { label: 'Program Berkelanjutan', value: adminStatsMock.totalPrograms, icon: <Layers className="w-4 h-4 text-[#D99A20]" />, href: '/admin/program' },
    { label: 'Foto Dokumentasi Galeri', value: adminStatsMock.totalGallery, icon: <ImageIcon className="w-4 h-4 text-purple-600" />, href: '/admin/galeri' },
    { label: 'Pengguna Sistem (RBAC)', value: adminStatsMock.totalUsers, icon: <Users className="w-4 h-4 text-gray-600" />, href: '/admin/pengguna' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-[#064E3B] to-[#043F32] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md relative overflow-hidden">
        <div className="space-y-2 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 text-xs font-bold text-gold-warm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selamat Datang di CMS Portal</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold">
            Pusat Kendali Yayasan Sosial Al-Azhar Mandiri
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
            Pantau penerimaan siswa baru PPDB SMP IT AZZAIN, publikasi berita, dan kelola seluruh konten yayasan secara terpusat.
          </p>
        </div>

        <div className="shrink-0 flex gap-3 z-10">
          <Button
            href="/admin/pendaftaran"
            variant="gold"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="font-bold shadow-goldGlow"
          >
            Buka Meja Verifikasi PPDB
          </Button>
        </div>
      </div>

      {/* Primary PPDB Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((st, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-6 border shadow-subtle flex flex-col justify-between ${
              st.highlight
                ? 'border-amber-300 ring-2 ring-amber-100'
                : 'border-gray-100'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {st.label}
              </span>
              <div className={`p-2.5 rounded-xl ${st.bg}`}>{st.icon}</div>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-[#102A43]">
                {st.value}
              </p>
              <p className="text-xs text-gray-500 mt-1 font-medium">{st.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content Counter Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contentStats.map((cs, idx) => (
          <Link
            key={idx}
            href={cs.href}
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center justify-between hover:border-[#064E3B] transition group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-emerald-50 transition">
                {cs.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500">{cs.label}</p>
                <p className="text-base font-bold text-[#102A43]">{cs.value}</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#064E3B] group-hover:translate-x-1 transition" />
          </Link>
        ))}
      </div>

      {/* Recent Registrations Table Snapshot */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <h2 className="font-heading text-lg font-bold text-[#102A43]">
              Pendaftar PPDB Terbaru
            </h2>
            <p className="text-xs text-gray-500">
              Antrean berkas masuk yang siap ditinjau panitia
            </p>
          </div>
          <Link
            href="/admin/pendaftaran"
            className="text-xs font-bold text-[#064E3B] hover:text-[#043F32] flex items-center gap-1"
          >
            <span>Kelola Semua Pendaftar ({registrationsMock.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-3">No. Registrasi</th>
                <th className="py-3 px-3">Nama Siswa</th>
                <th className="py-3 px-3">Program</th>
                <th className="py-3 px-3">Tanggal</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {registrationsMock.slice(0, 5).map((r) => (
                <tr key={r.id} className="hover:bg-gray-50/70 transition">
                  <td className="py-3.5 px-3 font-mono font-bold text-[#064E3B]">
                    {r.registrationNumber}
                  </td>
                  <td className="py-3.5 px-3 font-semibold text-[#102A43]">
                    {r.student.fullName}
                  </td>
                  <td className="py-3.5 px-3 text-gray-500">{r.programType}</td>
                  <td className="py-3.5 px-3 text-gray-500 text-xs">{r.submissionDate}</td>
                  <td className="py-3.5 px-3">
                    <StatusBadge status={r.status} />
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <Link
                      href={`/admin/pendaftaran?detail=${r.registrationNumber}`}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 text-[#064E3B] font-bold text-xs hover:bg-[#064E3B] hover:text-white transition"
                    >
                      Periksa
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
