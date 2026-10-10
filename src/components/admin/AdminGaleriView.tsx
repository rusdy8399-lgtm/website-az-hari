'use client';

import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Plus,
  Edit2,
  Trash2,
  Search,
  CheckCircle2,
  X,
  Save,
  Calendar,
} from 'lucide-react';
import { galleryMock, institutionsMock } from '@/mock';
import { GalleryItem } from '@/types';
import { Button } from '@/components/ui/Button';

export const AdminGaleriView: React.FC = () => {
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(galleryMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Partial<GalleryItem>>({});

  const categories = Array.from(new Set(galleryMock.map((g) => g.category)));

  const filtered = galleryList.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.caption.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'ALL' || item.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const handleEdit = (item: GalleryItem) => {
    setSelectedItem(item);
    setFormData({ ...item });
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleCreateNew = () => {
    const today = new Date().toISOString().split('T')[0];
    const newItem: Partial<GalleryItem> = {
      id: `gal-${Date.now()}`,
      title: '',
      caption: '',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80',
      category: (categories[0] || 'Yayasan') as any,
      date: today,
    };
    setSelectedItem(null);
    setFormData(newItem);
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.image) {
      alert('Mohon lengkapi Judul dan URL Gambar.');
      return;
    }

    if (selectedItem) {
      setGalleryList((prev) =>
        prev.map((item) => (item.id === selectedItem.id ? ({ ...item, ...formData } as GalleryItem) : item))
      );
    } else {
      setGalleryList((prev) => [formData as GalleryItem, ...prev]);
    }

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsEditing(false);
    }, 1200);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus foto dokumentasi ini?')) {
      setGalleryList((prev) => prev.filter((item) => item.id !== id));
      if (selectedItem?.id === id) {
        setIsEditing(false);
        setSelectedItem(null);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[#102A43]">
            Manajemen Galeri & Dokumentasi
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Unggah dan kelola foto kegiatan, fasilitas kampus, dan momen prestasi santri
          </p>
        </div>
        <Button
          onClick={handleCreateNew}
          variant="primary"
          size="md"
          leftIcon={<Plus className="w-4 h-4" />}
          className="font-bold shadow-sm"
        >
          Unggah Foto Galeri
        </Button>
      </div>

      {isEditing ? (
        /* Form */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                {selectedItem ? `Edit Dokumentasi: ${selectedItem.title}` : 'Unggah Dokumentasi Baru'}
              </h2>
              <p className="text-xs text-gray-500">Form data foto kegiatan Bahasa Indonesia</p>
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
              <span>Foto galeri berhasil disimpan!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Judul Foto / Momen *</label>
                <input
                  type="text"
                  required
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Contoh: Upacara Bendera & Pembagian Medali Santri"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-[#102A43] focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Kategori Dokumentasi</label>
                <select
                  value={formData.category || 'Yayasan'}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                >
                  <option value="Yayasan">Yayasan</option>
                  <option value="SMP IT Azzain">SMP IT Azzain</option>
                  <option value="Majlis Taklim">Majlis Taklim</option>
                  <option value="LSKA">LSKA</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Tanggal Dokumentasi</label>
                <input
                  type="date"
                  value={formData.date || ''}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">URL Foto Gambar *</label>
                <input
                  type="text"
                  required
                  value={formData.image || ''}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Deskripsi / Keterangan Foto</label>
                <textarea
                  rows={3}
                  value={formData.caption || ''}
                  onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                  placeholder="Keterangan singkat mengenai suasana atau aktivitas pada foto..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none resize-none"
                />
              </div>
            </div>

            {/* Preview image */}
            {formData.image && (
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-600">Pratinjau Foto</p>
                <div className="w-full max-w-sm h-48 rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <Button type="button" variant="outline" size="md" onClick={() => setIsEditing(false)}>
                Batal
              </Button>
              <Button type="submit" variant="primary" size="md" leftIcon={<Save className="w-4 h-4" />}>
                Simpan Foto
              </Button>
            </div>
          </form>
        </div>
      ) : (
        /* Grid Display */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari judul dokumentasi..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setCategoryFilter('ALL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                  categoryFilter === 'ALL'
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
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                    categoryFilter === c
                      ? 'bg-[#064E3B] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-card transition flex flex-col bg-white"
              >
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#102A43] line-clamp-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.caption}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400">
                    <span>{item.date}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-1.5 rounded-lg text-gray-500 hover:text-[#064E3B] hover:bg-emerald-50 transition"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Hapus"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
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
