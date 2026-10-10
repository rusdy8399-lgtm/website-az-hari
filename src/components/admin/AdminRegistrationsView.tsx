'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  ArrowUpDown,
  FileText,
  User,
  CheckCircle2,
  AlertTriangle,
  X,
  ExternalLink,
  Save,
  Clock,
  Eye,
  Check,
} from 'lucide-react';
import { Registration, RegistrationStatus } from '@/types';
import { registrationsMock } from '@/mock';
import { StatusBadge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Pagination } from '@/components/ui/Pagination';
import { Button } from '@/components/ui/Button';

export const AdminRegistrationsView: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>(registrationsMock);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('Semua');
  const [sortBy, setSortBy] = useState<'date' | 'name'>('date');
  const [selectedReg, setSelectedReg] = useState<Registration | null>(null);
  const [activeDocPreview, setActiveDocPreview] = useState<string | null>(null);

  // Editable fields in detail modal
  const [editStatus, setEditStatus] = useState<RegistrationStatus>('Menunggu Verifikasi');
  const [editNote, setEditNote] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const statuses: RegistrationStatus[] = [
    'Menunggu Verifikasi',
    'Sedang Diverifikasi',
    'Data Perlu Diperbaiki',
    'Lulus Administrasi',
    'Diterima',
    'Ditolak',
  ];

  const filteredRegistrations = useMemo(() => {
    return registrations
      .filter((r) => {
        const matchesStatus = statusFilter === 'Semua' || r.status === statusFilter;
        const q = search.toLowerCase().trim();
        const matchesSearch =
          !q ||
          r.registrationNumber.toLowerCase().includes(q) ||
          r.student.fullName.toLowerCase().includes(q) ||
          r.student.city.toLowerCase().includes(q);

        return matchesStatus && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.student.fullName.localeCompare(b.student.fullName);
        }
        return b.submissionDate.localeCompare(a.submissionDate);
      });
  }, [registrations, search, statusFilter, sortBy]);

  const totalPages = Math.ceil(filteredRegistrations.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredRegistrations.slice(start, start + itemsPerPage);
  }, [filteredRegistrations, currentPage]);

  const handleOpenDetail = (reg: Registration) => {
    setSelectedReg(reg);
    setEditStatus(reg.status);
    setEditNote(reg.statusNote || '');
    setSaveSuccess(false);
    setActiveDocPreview(null);
  };

  const handleSaveStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedReg) return;

    const newTimelineItem = {
      status: editStatus,
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      note: editNote || `Status diubah menjadi: ${editStatus}`,
    };

    setRegistrations((prev) =>
      prev.map((r) => {
        if (r.id === selectedReg.id) {
          const updated: Registration = {
            ...r,
            status: editStatus,
            statusNote: editNote,
            timeline: [newTimelineItem, ...r.timeline],
          };
          setSelectedReg(updated);
          return updated;
        }
        return r;
      })
    );

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
            Manajemen Pendaftar PPDB
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Verifikasi data identitas, periksa dokumen terlampir, dan kelola status penerimaan santri.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-subtle space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari nomor registrasi atau nama santri..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B] bg-[#FAF9F5]"
            />
          </div>

          {/* Sort & Quick actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <ArrowUpDown className="w-4 h-4" />
              <span>Urutkan:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'name')}
                className="rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-700 focus:outline-none"
              >
                <option value="date">Tanggal Submit (Terbaru)</option>
                <option value="name">Nama Siswa (A - Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-gray-100 pt-3">
          <button
            onClick={() => {
              setStatusFilter('Semua');
              setCurrentPage(1);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              statusFilter === 'Semua'
                ? 'bg-[#064E3B] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Semua ({registrations.length})
          </button>
          {statuses.map((st) => {
            const count = registrations.filter((r) => r.status === st).length;
            return (
              <button
                key={st}
                onClick={() => {
                  setStatusFilter(st);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  statusFilter === st
                    ? 'bg-[#064E3B] text-white'
                    : 'bg-[#FAF9F5] text-gray-600 hover:bg-gray-200 border border-gray-200/60'
                }`}
              >
                {st} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-subtle overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#FAF9F5] border-b border-gray-100 text-gray-500 uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">No. Registrasi</th>
                <th className="py-3.5 px-4">Nama Lengkap Siswa</th>
                <th className="py-3.5 px-4">NISN / NIK</th>
                <th className="py-3.5 px-4">Asal Domisili</th>
                <th className="py-3.5 px-4">Tanggal Masuk</th>
                <th className="py-3.5 px-4">Status Saat Ini</th>
                <th className="py-3.5 px-4 text-right">Tindakan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedItems.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-gray-400">
                    Tidak ada pendaftar yang cocok dengan filter.
                  </td>
                </tr>
              ) : (
                paginatedItems.map((reg) => (
                  <tr key={reg.id} className="hover:bg-gray-50/80 transition">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#064E3B]">
                      {reg.registrationNumber}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#102A43]">
                      {reg.student.fullName}
                      <span className="block text-[11px] text-gray-400 font-normal">
                        {reg.student.gender} • {reg.student.birthPlace}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-gray-600">
                      <div>NISN: {reg.student.nisn}</div>
                      <div className="text-[11px] text-gray-400">NIK: {reg.student.nik}</div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">
                      {reg.student.city}
                      <span className="block text-[11px] text-gray-400">
                        Kec. {reg.student.district}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-gray-500 text-xs">
                      {reg.submissionDate}
                    </td>
                    <td className="py-3.5 px-4">
                      <StatusBadge status={reg.status} />
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => handleOpenDetail(reg)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 text-[#064E3B] hover:bg-[#064E3B] hover:text-white font-bold text-xs transition"
                      >
                        Detail & Dokumen
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(p) => setCurrentPage(p)}
          />
        </div>
      </div>

      {/* DETAIL DRAWER / MODAL */}
      <Modal
        isOpen={!!selectedReg}
        onClose={() => setSelectedReg(null)}
        title={selectedReg ? `Detail Pendaftar: ${selectedReg.registrationNumber}` : ''}
        maxWidth="4xl"
      >
        {selectedReg && (
          <div className="space-y-6">
            {/* Top Info Strip */}
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-heading text-lg font-bold text-[#102A43]">
                  {selectedReg.student.fullName}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedReg.programType} • Terdaftar {selectedReg.submissionDate}
                </p>
              </div>
              <StatusBadge status={selectedReg.status} className="text-sm px-3 py-1" />
            </div>

            {/* Grid 2 Column: Student & Parents info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl border border-gray-100 space-y-3">
                <h4 className="font-bold text-[#064E3B] uppercase tracking-wider text-xs border-b border-gray-100 pb-2">
                  Data Calon Siswa
                </h4>
                <div className="space-y-1.5 text-gray-600">
                  <p><strong className="text-gray-800">NIK:</strong> {selectedReg.student.nik}</p>
                  <p><strong className="text-gray-800">NISN:</strong> {selectedReg.student.nisn}</p>
                  <p><strong className="text-gray-800">Nama Panggilan:</strong> {selectedReg.student.nickname || '-'}</p>
                  <p><strong className="text-gray-800">Tempat, Tgl Lahir:</strong> {selectedReg.student.birthPlace}, {selectedReg.student.birthDate}</p>
                  <p><strong className="text-gray-800">Jenis Kelamin:</strong> {selectedReg.student.gender}</p>
                  <p><strong className="text-gray-800">Alamat:</strong> {selectedReg.student.address}, {selectedReg.student.district}, {selectedReg.student.city}, {selectedReg.student.province}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-gray-100 space-y-3">
                <h4 className="font-bold text-[#064E3B] uppercase tracking-wider text-xs border-b border-gray-100 pb-2">
                  Data Orang Tua / Wali
                </h4>
                <div className="space-y-1.5 text-gray-600">
                  <p><strong className="text-gray-800">Nama Ayah:</strong> {selectedReg.parents.fatherName}</p>
                  <p><strong className="text-gray-800">Pekerjaan Ayah:</strong> {selectedReg.parents.fatherOccupation || '-'}</p>
                  <p><strong className="text-gray-800">WhatsApp Ayah:</strong> <span className="font-mono text-[#064E3B] font-bold">{selectedReg.parents.fatherPhone}</span></p>
                  <p><strong className="text-gray-800">Nama Ibu:</strong> {selectedReg.parents.motherName}</p>
                  <p><strong className="text-gray-800">Pekerjaan Ibu:</strong> {selectedReg.parents.motherOccupation || '-'}</p>
                  <p><strong className="text-gray-800">WhatsApp Ibu:</strong> {selectedReg.parents.motherPhone || '-'}</p>
                </div>
              </div>
            </div>

            {/* Document Review Section */}
            <div className="p-4 rounded-2xl border border-gray-100 space-y-3">
              <h4 className="font-bold text-[#064E3B] uppercase tracking-wider text-xs border-b border-gray-100 pb-2">
                Pemeriksaan Dokumen Persyaratan
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Kartu Keluarga', file: selectedReg.documents.familyCard },
                  { label: 'Akta Kelahiran', file: selectedReg.documents.birthCertificate },
                  { label: 'Ijazah / SKL', file: selectedReg.documents.diplomaOrGraduationCert },
                  { label: 'Pas Foto', file: selectedReg.documents.photo },
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveDocPreview(doc.label)}
                    className="p-3 rounded-xl bg-[#FAF9F5] border border-gray-200 hover:border-[#064E3B] cursor-pointer transition flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#102A43]">{doc.label}</p>
                      <p className="text-[11px] text-gray-500 font-mono truncate mt-0.5">
                        {doc.file}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#064E3B] flex items-center gap-1 mt-2">
                      <Eye className="w-3 h-3" /> Pratinjau
                    </span>
                  </div>
                ))}
              </div>

              {/* Simulated Document Preview Viewer */}
              {activeDocPreview && (
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mt-3 animate-in fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#064E3B]">
                      Pratinjau Berkas: {activeDocPreview}
                    </span>
                    <button
                      onClick={() => setActiveDocPreview(null)}
                      className="text-xs text-gray-500 hover:text-gray-800"
                    >
                      Tutup Pratinjau
                    </button>
                  </div>
                  <div className="h-40 rounded-lg bg-white border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                    📄 Simulasi Tampilan Dokumen [{activeDocPreview}] Terverifikasi Valid
                  </div>
                </div>
              )}
            </div>

            {/* Status Update & Admin Notes Form */}
            <form onSubmit={handleSaveStatus} className="p-5 rounded-2xl bg-[#ECFDF5]/60 border border-emerald-200 space-y-4">
              <h4 className="font-bold text-[#064E3B] text-sm flex items-center gap-2">
                <Save className="w-4 h-4" />
                <span>Ubah Status & Berikan Catatan Verifikasi</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Status Pendaftaran:
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as RegistrationStatus)}
                    className="w-full rounded-xl border border-emerald-300 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1">
                    Catatan untuk Pendaftar / Perbaikan:
                  </label>
                  <input
                    type="text"
                    value={editNote}
                    onChange={(e) => setEditNote(e.target.value)}
                    placeholder="Contoh: KK buram / Lolos verifikasi berkas..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                {saveSuccess ? (
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Perubahan status berhasil disimpan!
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-500">
                    Perubahan status akan langsung tercatat dalam timeline riwayat peserta.
                  </span>
                )}
                <Button type="submit" variant="primary" size="sm">
                  Simpan Status
                </Button>
              </div>
            </form>

            {/* Timeline History */}
            <div className="space-y-3">
              <h4 className="font-bold text-[#102A43] text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D99A20]" />
                <span>Riwayat Aktivitas & Timeline Pendaftar</span>
              </h4>
              <div className="space-y-2">
                {selectedReg.timeline.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs flex items-start justify-between">
                    <div>
                      <strong className="text-gray-900 block">{item.status}</strong>
                      <p className="text-gray-500 mt-0.5">{item.note}</p>
                    </div>
                    <span className="font-mono text-gray-400 text-[11px] shrink-0 ml-4">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
