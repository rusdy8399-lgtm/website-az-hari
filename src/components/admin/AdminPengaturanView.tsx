'use client';

import React, { useState } from 'react';
import {
  Globe,
  CheckCircle2,
  Save,
  Image as ImageIcon,
  HardDrive,
  Building,
} from 'lucide-react';
import { cmsSettingsMock } from '@/mock';
import { CmsSettings } from '@/types';
import { Button } from '@/components/ui/Button';

export const AdminPengaturanView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'website' | 'seo' | 'media' | 'system'>('website');
  const [settings, setSettings] = useState<CmsSettings>(cmsSettingsMock);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-[#102A43]">
            Pengaturan Sistem
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Konfigurasi umum website, optimasi mesin pencari, penyimpanan media, dan keamanan
          </p>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>Pengaturan berhasil disimpan!</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setActiveTab('website')}
          className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-t-xl transition border-b-2 ${
            activeTab === 'website'
              ? 'border-[#064E3B] text-[#064E3B] bg-emerald-50/50'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Website</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('seo')}
          className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-t-xl transition border-b-2 ${
            activeTab === 'seo'
              ? 'border-[#064E3B] text-[#064E3B] bg-emerald-50/50'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>SEO</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('media')}
          className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-t-xl transition border-b-2 ${
            activeTab === 'media'
              ? 'border-[#064E3B] text-[#064E3B] bg-emerald-50/50'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Media</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('system')}
          className={`flex items-center gap-2 px-4 py-2.5 font-bold text-xs sm:text-sm rounded-t-xl transition border-b-2 ${
            activeTab === 'system'
              ? 'border-[#064E3B] text-[#064E3B] bg-emerald-50/50'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <HardDrive className="w-4 h-4" />
          <span>System</span>
        </button>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-6">
        {/* WEBSITE TAB */}
        {activeTab === 'website' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                Informasi & Identitas Website
              </h2>
              <p className="text-xs text-gray-500">Konfigurasi dasar portal publik Yayasan</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Nama Situs / Website</label>
                <input
                  type="text"
                  value={settings.website.siteName}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      website: { ...settings.website, siteName: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Tagline / Slogan Resmi</label>
                <input
                  type="text"
                  value={settings.website.tagline}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      website: { ...settings.website, tagline: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Email Resmi Kontak</label>
                <input
                  type="email"
                  value={settings.website.email}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      website: { ...settings.website, email: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Nomor Telepon / WhatsApp Panitia</label>
                <input
                  type="text"
                  value={settings.website.phone}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      website: { ...settings.website, phone: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Alamat Lengkap Yayasan</label>
                <input
                  type="text"
                  value={settings.website.address}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      website: { ...settings.website, address: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* SEO TAB */}
        {activeTab === 'seo' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                Pengaturan Mesin Pencari (SEO)
              </h2>
              <p className="text-xs text-gray-500">Metadata Google Search untuk portal Bahasa Indonesia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Default Meta Title</label>
                <input
                  type="text"
                  value={settings.seo.defaultMetaTitle}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      seo: { ...settings.seo, defaultMetaTitle: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Default Meta Description</label>
                <textarea
                  rows={3}
                  value={settings.seo.defaultMetaDescription}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      seo: { ...settings.seo, defaultMetaDescription: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none resize-none"
                />
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-gray-700">Kata Kunci Utama (Keywords)</label>
                <input
                  type="text"
                  value={settings.seo.keywords}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      seo: { ...settings.seo, keywords: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* MEDIA TAB */}
        {activeTab === 'media' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                Pengaturan Pustaka Berkas & Media
              </h2>
              <p className="text-xs text-gray-500">Batasan berkas dan resolusi gambar yang diizinkan</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Maksimal Ukuran Upload (MB)</label>
                <input
                  type="number"
                  value={settings.media.maxUploadSizeMb}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      media: { ...settings.media, maxUploadSizeMb: Number(e.target.value) },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Format yang Diizinkan (Koma)</label>
                <input
                  type="text"
                  value={settings.media.allowedFormats.join(', ')}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      media: {
                        ...settings.media,
                        allowedFormats: e.target.value.split(',').map((s) => s.trim()),
                      },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#064E3B] outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* SYSTEM TAB */}
        {activeTab === 'system' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#102A43]">
                Konfigurasi Sistem & Layanan
              </h2>
              <p className="text-xs text-gray-500">Informasi versi portal dan status pemeliharaan sistem</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Versi CMS</label>
                <input
                  type="text"
                  disabled
                  value={settings.system.appVersion}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm font-mono text-gray-500"
                />
              </div>

              <div className="space-y-1.5 flex flex-col gap-3 pt-4">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-gray-700 select-none">
                  <input
                    type="checkbox"
                    checked={settings.system.maintenanceMode}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        system: { ...settings.system, maintenanceMode: e.target.checked },
                      })
                    }
                    className="w-4 h-4 text-[#064E3B] rounded border-gray-300 focus:ring-[#064E3B]"
                  />
                  <span>Mode Pemeliharaan (Maintenance Mode)</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-gray-700 select-none">
                  <input
                    type="checkbox"
                    checked={settings.system.ppdbOpen}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        system: { ...settings.system, ppdbOpen: e.target.checked },
                      })
                    }
                    className="w-4 h-4 text-[#064E3B] rounded border-gray-300 focus:ring-[#064E3B]"
                  />
                  <span>Buka Pendaftaran PPDB Online</span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-end pt-6 border-t border-gray-100">
          <Button type="submit" variant="primary" size="md" leftIcon={<Save className="w-4 h-4" />}>
            Simpan Perubahan Pengaturan
          </Button>
        </div>
      </form>
    </div>
  );
};
