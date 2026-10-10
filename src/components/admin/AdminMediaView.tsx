'use client';

import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  Search,
  Copy,
  CheckCircle2,
  Upload,
  X,
  HardDrive,
} from 'lucide-react';
import { mediaMock } from '@/mock';
import { MediaItem } from '@/types';
import { Button } from '@/components/ui/Button';

export const AdminMediaView: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>(mediaMock);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // New media form state
  const [newName, setNewName] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const filtered = mediaList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleDelete = (id: string) => {
    if (confirm('Hapus berkas media ini dari pustaka?')) {
      setMediaList((prev) => prev.filter((m) => m.id !== id));
    }
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newUrl) {
      alert('Mohon isi Nama Berkas dan URL Media.');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const newMedia: MediaItem = {
      id: `med-${Date.now()}`,
      name: newName,
      url: newUrl,
      size: '1.2 MB',
      type: 'image/jpeg',
      uploadedAt: today,
    };

    setMediaList((prev) => [newMedia, ...prev]);
    setNewName('');
    setNewUrl('');
    setIsUploading(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[#102A43]">
            Pustaka Berkas & Media
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Kelola seluruh aset gambar, banner, dan berkas digital yayasan
          </p>
        </div>
        <Button
          onClick={() => setIsUploading(true)}
          variant="primary"
          size="md"
          leftIcon={<Upload className="w-4 h-4" />}
          className="font-bold shadow-sm"
        >
          Unggah Media Baru
        </Button>
      </div>

      {/* Upload Modal */}
      {isUploading && (
        <div className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-card space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h3 className="text-sm font-bold text-[#102A43] flex items-center gap-2">
              <Upload className="w-4 h-4 text-[#064E3B]" />
              <span>Unggah / Tambah Media ke Pustaka</span>
            </h3>
            <button
              onClick={() => setIsUploading(false)}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleUploadSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">Nama Berkas *</label>
              <input
                type="text"
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Contoh: banner-ppdb-2026.jpg"
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#064E3B] outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">URL Berkas / Gambar *</label>
              <input
                type="text"
                required
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#064E3B] outline-none"
              />
            </div>

            <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsUploading(false)}>
                Batal
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Simpan ke Pustaka
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Main Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari nama berkas media..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] outline-none"
            />
          </div>
          <span className="text-xs text-gray-500 font-medium">
            Total {filtered.length} Berkas Media
          </span>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-subtle hover:border-emerald-200 transition bg-white flex flex-col justify-between"
            >
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => handleCopyUrl(item.url, item.id)}
                    className="p-1.5 bg-black/70 hover:bg-[#064E3B] text-white rounded-lg backdrop-blur-sm transition"
                    title="Salin URL Gambar"
                  >
                    {copiedId === item.id ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 bg-black/70 hover:bg-rose-600 text-white rounded-lg backdrop-blur-sm transition"
                    title="Hapus Media"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-3 space-y-1">
                <p className="text-xs font-bold text-[#102A43] truncate" title={item.name}>
                  {item.name}
                </p>
                <div className="flex items-center justify-between text-[10px] text-gray-400">
                  <span>{item.size}</span>
                  <span>{item.uploadedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
