'use client';

import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Edit2,
  Trash2,
  Search,
  ExternalLink,
  CheckCircle2,
  X,
  Save,
  Globe,
  Calendar,
  User as UserIcon,
} from 'lucide-react';
import { newsMock, institutionsMock } from '@/mock';
import { NewsItem } from '@/types';
import { Button } from '@/components/ui/Button';

export const AdminBeritaView: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>(newsMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState<Partial<NewsItem>>({});

  const categories = Array.from(new Set(newsMock.map((n) => n.category)));

  const filtered = newsList.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'ALL' || item.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const handleEdit = (news: NewsItem) => {
    setSelectedNews(news);
    setFormData({ ...news });
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleCreateNew = () => {
    const today = new Date().toISOString().split('T')[0];
    const newNews: Partial<NewsItem> = {
      id: `news-${Date.now()}`,
      slug: 'berita-terbaru',
      title: '',
      excerpt: '',
      content: '',
      thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80',
      category: categories[0] || 'Berita Utama',
      institution: institutionsMock[0]?.name || 'Yayasan Pusat',
      institutionSlug: institutionsMock[0]?.slug || 'yayasan',
      author: 'Humas Al-Azhar Mandiri',
      publishedDate: today,
      readTime: '3 menit',
      featured: false,
      seoTitle: '',
      seoDescription: '',
    };
    setSelectedNews(null);
    setFormData(newNews);
    setIsEditing(true);
    setSavedSuccess(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) {
      alert('Mohon lengkapi Judul Berita dan Slug URL.');
      return;
    }

    if (selectedNews) {
      setNewsList((prev) =>
        prev.map((item) => (item.id === selectedNews.id ? ({ ...item, ...formData } as NewsItem) : item))
      );
    } else {
      setNewsList((prev) => [formData as NewsItem, ...prev]);
    }

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsEditing(false);
    }, 1200);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
      setNewsList((prev) => prev.filter((item) => item.id !== id));
      if (selectedNews?.id === id) {
        setIsEditing(false);
        setSelectedNews(null);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[#102A43]">
            Manajemen Berita & Artikel
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Publikasikan kabar kegiatan, pengumuman yayasan, dan artikel edukasi
          </p>
        </div>
        <Button
          onClick={handleCreateNew}
          variant="primary"
          size="md"
          leftIcon={<Plus className="w-4 h-4" />}
          className="font-bold shadow-sm"
        >
          Tulis Berita Baru
        </Button>
      </div>

      {isEditing ? (
        /* Form Editor */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                {selectedNews ? `Edit Berita: ${selectedNews.title}` : 'Tulis Berita Baru'}
              </h2>
              <p className="text-xs text-gray-500">Editor konten Berita Bahasa Indonesia</p>
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
              <span>Berita berhasil disimpan!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Judul Berita *</label>
                <input
                  type="text"
                  required
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Masukkan judul berita yang informatif..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-[#102A43] focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Slug URL *</label>
                <input
                  type="text"
                  required
                  value={formData.slug || ''}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="contoh: wisuda-santri-tahfidz-2025"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-mono focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Kategori Berita</label>
                <input
                  type="text"
                  value={formData.category || ''}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Berita Utama / Pendidikan / Prestasi / Kegiatan Sosial"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Lembaga Terkait</label>
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
                  <option value="Yayasan Pusat">-- Berita Yayasan Pusat --</option>
                  {institutionsMock.map((inst) => (
                    <option key={inst.id} value={inst.name}>
                      {inst.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Penulis / Redaksi</label>
                <input
                  type="text"
                  value={formData.author || ''}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Humas Al-Azhar Mandiri"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Tanggal Publikasi</label>
                <input
                  type="date"
                  value={formData.publishedDate || ''}
                  onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 flex items-center gap-3 pt-6">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-gray-700 select-none">
                  <input
                    type="checkbox"
                    checked={formData.featured || false}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 text-[#064E3B] rounded border-gray-300 focus:ring-[#064E3B]"
                  />
                  <span>Tampilkan sebagai Berita Pilihan (Featured / Headline)</span>
                </label>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">URL Gambar Thumbnail</label>
                <input
                  type="text"
                  value={formData.thumbnail || ''}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Ringkasan Berita (Excerpt)</label>
                <textarea
                  rows={2}
                  value={formData.excerpt || ''}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Ringkasan 1-2 kalimat untuk kartu berita..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Isi Konten Berita Lengkap</label>
                <textarea
                  rows={8}
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Tulis artikel atau berita lengkap di sini..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
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
                    placeholder="Judul SEO Google"
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
                Simpan Berita
              </Button>
            </div>
          </form>
        </div>
      ) : (
        /* Table List */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari judul atau penulis berita..."
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

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3">Berita</th>
                  <th className="py-3 px-3">Kategori</th>
                  <th className="py-3 px-3">Penulis</th>
                  <th className="py-3 px-3">Tanggal</th>
                  <th className="py-3 px-3">Headline</th>
                  <th className="py-3 px-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((news) => (
                  <tr key={news.id} className="hover:bg-gray-50/70 transition">
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-3 max-w-md">
                        <img
                          src={news.thumbnail}
                          alt={news.title}
                          className="w-10 h-10 rounded-lg object-cover bg-gray-100 shrink-0"
                        />
                        <div>
                          <p className="font-bold text-[#102A43] line-clamp-1">{news.title}</p>
                          <p className="text-[11px] text-gray-400 font-mono">/{news.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-[#064E3B]">
                        {news.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-gray-600 text-xs">{news.author}</td>
                    <td className="py-3.5 px-3 text-gray-500 text-xs">{news.publishedDate}</td>
                    <td className="py-3.5 px-3">
                      {news.featured ? (
                        <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold">
                          Featured
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs">-</span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`/id/news/${news.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-gray-400 hover:text-[#064E3B] transition"
                          title="Lihat Berita"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleEdit(news)}
                          className="p-1.5 text-gray-400 hover:text-[#064E3B] transition"
                          title="Edit Berita"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(news.id)}
                          className="p-1.5 text-gray-400 hover:text-rose-600 transition"
                          title="Hapus Berita"
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
