'use client';

import React, { useState } from 'react';
import {
  Layers,
  Plus,
  Edit2,
  Trash2,
  Search,
  ExternalLink,
  CheckCircle2,
  X,
  Save,
  Tag,
  Calendar,
  Globe,
} from 'lucide-react';
import { programsMock, institutionsMock } from '@/mock';
import { Program } from '@/types';
import { Button } from '@/components/ui/Button';

export const AdminProgramView: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>(programsMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Partial<Program>>({});

  const categories = Array.from(new Set(programsMock.map((p) => p.category)));

  const filtered = programs.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.shortDesc && item.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'ALL' || item.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const handleEdit = (prog: Program) => {
    setSelectedProgram(prog);
    setFormData({ ...prog });
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleCreateNew = () => {
    const today = new Date().toISOString().split('T')[0];
    const newProg: Partial<Program> = {
      id: `prog-${Date.now()}`,
      slug: 'program-baru',
      title: '',
      category: categories[0] || 'Pendidikan & Beasiswa',
      institution: institutionsMock[0]?.name || 'Yayasan Pusat',
      institutionSlug: institutionsMock[0]?.slug || 'yayasan',
      shortDesc: '',
      content: '',
      targetBeneficiaries: 'Siswa / Masyarakat',
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
      highlights: [],
      date: today,
      seoTitle: '',
      seoDescription: '',
    };
    setSelectedProgram(null);
    setFormData(newProg);
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) {
      alert('Mohon lengkapi Judul Program dan Slug URL.');
      return;
    }

    if (selectedProgram) {
      setPrograms((prev) =>
        prev.map((item) => (item.id === selectedProgram.id ? ({ ...item, ...formData } as Program) : item))
      );
    } else {
      setPrograms((prev) => [formData as Program, ...prev]);
    }

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsEditing(false);
    }, 1200);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus program ini?')) {
      setPrograms((prev) => prev.filter((item) => item.id !== id));
      if (selectedProgram?.id === id) {
        setIsEditing(false);
        setSelectedProgram(null);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[#102A43]">
            Manajemen Program Kerja
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Kelola daftar program sosial, pendidikan, dakwah, dan ekonomi yayasan
          </p>
        </div>
        <Button
          onClick={handleCreateNew}
          variant="primary"
          size="md"
          leftIcon={<Plus className="w-4 h-4" />}
          className="font-bold shadow-sm"
        >
          Tambah Program
        </Button>
      </div>

      {isEditing ? (
        /* Form Editor */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                {selectedProgram ? `Edit Program: ${selectedProgram.title}` : 'Tambah Program Baru'}
              </h2>
              <p className="text-xs text-gray-500">Form isian program Bahasa Indonesia</p>
            </div>
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {savedSuccess && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Program berhasil disimpan!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Judul Program *</label>
                <input
                  type="text"
                  required
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Contoh: Beasiswa Santri Tahfidz Dhuafa"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none font-semibold text-[#102A43]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Slug URL *</label>
                <input
                  type="text"
                  required
                  value={formData.slug || ''}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="contoh: beasiswa-santri-tahfidz"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-mono focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Kategori Program</label>
                <input
                  type="text"
                  value={formData.category || ''}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Pendidikan & Beasiswa / Dakwah & Al-Qur'an / Sosial"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Lembaga Penyelenggara</label>
                <select
                  value={formData.institution || ''}
                  onChange={(e) => {
                    const inst = institutionsMock.find((i) => i.name === e.target.value);
                    setFormData({
                      ...formData,
                      institution: e.target.value,
                      institutionSlug: inst?.slug || 'yayasan',
                    });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                >
                  <option value="Yayasan Pusat">-- Program Induk Yayasan --</option>
                  {institutionsMock.map((inst) => (
                    <option key={inst.id} value={inst.name}>
                      {inst.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Status Program</label>
                <select
                  value={formData.status || 'Aktif'}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                >
                  <option value="Aktif">Aktif / Berjalan</option>
                  <option value="Draft">Draft</option>
                  <option value="Nonaktif">Nonaktif / Selesai</option>
                </select>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">URL Gambar Utama / Banner</label>
                <input
                  type="text"
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Ringkasan / Deskripsi Singkat</label>
                <textarea
                  rows={2}
                  value={formData.shortDesc || ''}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  placeholder="Deskripsi singkat yang tampil di kartu daftar program..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Konten Lengkap Program</label>
                <textarea
                  rows={6}
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Detail lengkap mengenai program kerja, latar belakang, sasaran, mekanisme partisipasi..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none font-sans"
                />
              </div>
            </div>

            {/* SEO Section */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#064E3B]" />
                <h3 className="text-sm font-bold text-[#102A43]">Optimasi Mesin Pencari (SEO)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">SEO Title</label>
                  <input
                    type="text"
                    value={formData.seoTitle || ''}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    placeholder="Judul SEO untuk Google Search"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">SEO Description</label>
                  <input
                    type="text"
                    value={formData.seoDescription || ''}
                    onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                    placeholder="Deskripsi cuplikan Google (maks. 160 karakter)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <Button type="button" variant="outline" size="md" onClick={() => setIsEditing(false)}>
                Batal
              </Button>
              <Button type="submit" variant="primary" size="md" leftIcon={<Save className="w-4 h-4" />}>
                Simpan Program
              </Button>
            </div>
          </form>
        </div>
      ) : (
        /* Table / Card List */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari judul program..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setCategoryFilter('ALL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${categoryFilter === 'ALL'
                  ? 'bg-[#064E3B] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                Semua
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategoryFilter(c)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${categoryFilter === c
                    ? 'bg-[#064E3B] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3">Program</th>
                  <th className="py-3 px-3">Kategori</th>
                  <th className="py-3 px-3">Target Sasaran</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((prog) => (
                  <tr key={prog.id} className="hover:bg-gray-50/70 transition">
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="w-10 h-10 rounded-lg object-cover bg-gray-100 shrink-0"
                        />
                        <div>
                          <p className="font-bold text-[#102A43] line-clamp-1">{prog.title}</p>
                          <p className="text-[11px] text-gray-400 font-mono">/{prog.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-[#064E3B]">
                        {prog.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-gray-600 text-xs">
                      {prog.targetBeneficiaries || '-'}
                    </td>
                    <td className="py-3.5 px-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${prog.status === 'Aktif' || prog.status === 'active'
                          ? 'bg-emerald-100 text-emerald-800'
                          : prog.status === 'Draft' || prog.status === 'upcoming'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-gray-100 text-gray-700'
                          }`}
                      >
                        {prog.status === 'Aktif' || prog.status === 'active'
                          ? 'Aktif'
                          : prog.status === 'Draft' || prog.status === 'upcoming'
                            ? 'Draft'
                            : 'Nonaktif'}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`/id/programs/${prog.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-gray-400 hover:text-[#064E3B] transition"
                          title="Lihat Halaman"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleEdit(prog)}
                          className="p-1.5 text-gray-400 hover:text-[#064E3B] transition"
                          title="Edit Program"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(prog.id)}
                          className="p-1.5 text-gray-400 hover:text-rose-600 transition"
                          title="Hapus Program"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
