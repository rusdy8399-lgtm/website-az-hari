'use client';

import React, { useState } from 'react';
import {
  School,
  Plus,
  Edit2,
  Trash2,
  Search,
  ExternalLink,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  X,
  Save,
} from 'lucide-react';
import { institutionsMock } from '@/mock';
import { Institution } from '@/types';
import { Button } from '@/components/ui/Button';

export const AdminLembagaView: React.FC = () => {
  const [institutions, setInstitutions] = useState<Institution[]>(institutionsMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Partial<Institution>>({});

  const filtered = institutions.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (inst: Institution) => {
    setSelectedInstitution(inst);
    setFormData({ ...inst });
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleCreateNew = () => {
    const newInst: Partial<Institution> = {
      id: `inst-${Date.now()}`,
      slug: 'lembaga-baru',
      name: '',
      category: 'Pendidikan Formal',
      tagline: '',
      description: '',
      heroImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
      logo: 'GraduationCap',
      vision: '',
      missions: [''],
      features: [
        { title: 'Kurikulum Terpadu', description: 'Integrasi kurikulum kepesantrenan dan nasional.', icon: 'BookOpen' }
      ],
      programs: [
        { title: 'Program Unggulan', desc: 'Detail program pengembangan santri.' }
      ],
      address: 'Dusun Tegal, Desa Aikmual, Kec. Praya, Kab. Lombok Tengah, NTB',
      phone: '081907061806',
      email: 'yayasansosialazharmandiri@gmail.com',
      hasPpdb: false,
    };
    setSelectedInstitution(null);
    setFormData(newInst);
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.slug) {
      alert('Mohon lengkapi Nama Lembaga dan Slug URL.');
      return;
    }

    if (selectedInstitution) {
      // Update existing
      setInstitutions((prev) =>
        prev.map((item) => (item.id === selectedInstitution.id ? ({ ...item, ...formData } as Institution) : item))
      );
    } else {
      // Add new
      setInstitutions((prev) => [formData as Institution, ...prev]);
    }

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsEditing(false);
    }, 1200);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus data lembaga ini?')) {
      setInstitutions((prev) => prev.filter((item) => item.id !== id));
      if (selectedInstitution?.id === id) {
        setIsEditing(false);
        setSelectedInstitution(null);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[#102A43]">
            Manajemen Lembaga & Unit
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Kelola profil, visi misi, program, dan kontak unit di bawah Yayasan Sosial Al-Azhar Mandiri
          </p>
        </div>
        <Button
          onClick={handleCreateNew}
          variant="primary"
          size="md"
          leftIcon={<Plus className="w-4 h-4" />}
          className="font-bold shadow-sm"
        >
          Tambah Lembaga
        </Button>
      </div>

      {isEditing ? (
        /* Edit / Create Form */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                {selectedInstitution ? `Edit Lembaga: ${selectedInstitution.name}` : 'Tambah Lembaga Baru'}
              </h2>
              <p className="text-xs text-gray-500">Semua isian konten menggunakan Bahasa Indonesia</p>
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
              <span>Data lembaga berhasil disimpan!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Nama Lembaga *</label>
                <input
                  type="text"
                  required
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Contoh: SMP IT AZZAIN"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Slug URL *</label>
                <input
                  type="text"
                  required
                  value={formData.slug || ''}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="contoh: smp-it-azzain"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-mono focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Kategori Lembaga</label>
                <input
                  type="text"
                  value={formData.category || ''}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Lembaga Pendidikan / Majlis Taklim / Lembaga Kesejahteraan"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Tagline / Motto Lembaga</label>
                <input
                  type="text"
                  value={formData.tagline || ''}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="Contoh: Mencetak Generasi Qur'ani dan Berkarakter"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">URL Gambar Utama (Hero Image)</label>
                <input
                  type="text"
                  value={formData.heroImage || ''}
                  onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Deskripsi Lembaga</label>
                <textarea
                  rows={3}
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Deskripsi umum tentang visi, jenjang, dan operasional lembaga..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Visi Lembaga</label>
                <textarea
                  rows={3}
                  value={formData.vision || ''}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  placeholder="Visi jangka panjang lembaga..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Misi Lembaga (1 baris = 1 misi)</label>
                <textarea
                  rows={3}
                  value={formData.missions?.join('\n') || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      missions: e.target.value.split('\n').filter((l) => l.trim().length > 0),
                    })
                  }
                  placeholder="Misi 1&#10;Misi 2&#10;Misi 3"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none resize-none"
                />
              </div>
            </div>

            {/* Kontak Lembaga */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-sm font-bold text-[#102A43] mb-3">Informasi Kontak & Lokasi</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">Alamat</label>
                  <input
                    type="text"
                    value={formData.address || ''}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Alamat kantor/kampus lembaga"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">Telepon / WhatsApp</label>
                  <input
                    type="text"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="081907061806"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600">Email Kontak</label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yayasansosialazharmandiri@gmail.com"
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
                Simpan Lembaga
              </Button>
            </div>
          </form>
        </div>
      ) : (
        /* List Table View */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-5">
          {/* Search bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari nama lembaga..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
              />
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Menampilkan {filtered.length} dari {institutions.length} lembaga
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((inst) => (
              <div
                key={inst.id}
                className="rounded-2xl border border-gray-100 p-5 hover:border-emerald-200 hover:shadow-subtle transition bg-white flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-[#064E3B]">
                      <School className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                      {inst.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base text-[#102A43]">{inst.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">{inst.description}</p>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-500 pt-2 border-t border-gray-50">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{inst.address || 'Belum diisi'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{inst.phone || 'Belum diisi'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
                  <a
                    href={`/id/lembaga/${inst.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#064E3B] hover:underline flex items-center gap-1"
                  >
                    <span>Lihat Halaman</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleEdit(inst)}
                      className="p-1.5 rounded-lg text-gray-600 hover:text-[#064E3B] hover:bg-emerald-50 transition"
                      title="Edit Lembaga"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(inst.id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Hapus Lembaga"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
