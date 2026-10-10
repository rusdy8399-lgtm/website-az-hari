'use client';

import React, { useState } from 'react';
import { Building2, Save, Check, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { foundationMock } from '@/mock';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export const AdminYayasanView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: foundationMock.name,
    officialProfileName: foundationMock.officialProfileName || '',
    tagline: foundationMock.tagline,
    motto: foundationMock.motto || '',
    profile: foundationMock.profile,
    vision: foundationMock.vision,
    history: foundationMock.history,
    missions: foundationMock.missions.join('\n'),
    decreeNumber: foundationMock.decreeNumber,
    deedNumber: foundationMock.deedNumber || '',
    notaryOfficial: foundationMock.notaryOfficial || '',
    siopNumber: foundationMock.siopNumber || '',
    phone: foundationMock.phone,
    email: foundationMock.email,
    address: foundationMock.address,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#102A43]">
            Profil & Konten Yayasan
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Kelola identitas, legalitas, visi misi, dan informasi kontak resmi Yayasan Sosial Azhar Mandiri.
          </p>
        </div>

        {saved && (
          <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Perubahan data Yayasan berhasil disimpan!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Identitas Yayasan */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#102A43] flex items-center gap-2 border-b border-gray-100 pb-3">
            <Building2 className="w-5 h-5 text-[#00609C]" />
            <span>Identitas Yayasan</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Nama Yayasan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Tagline Yayasan"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              required
            />
          </div>

          <Input
            label="Motto Yayasan"
            value={formData.motto}
            onChange={(e) => setFormData({ ...formData, motto: e.target.value })}
          />

          <Textarea
            label="Profil Yayasan"
            rows={4}
            value={formData.profile}
            onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
            required
          />

          <Textarea
            label="Sejarah / Latar Belakang Yayasan"
            rows={4}
            value={formData.history}
            onChange={(e) => setFormData({ ...formData, history: e.target.value })}
            required
          />
        </div>

        {/* Visi & Misi */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#102A43] flex items-center gap-2 border-b border-gray-100 pb-3">
            <ShieldCheck className="w-5 h-5 text-[#00609C]" />
            <span>Visi & Misi Yayasan</span>
          </h2>

          <Textarea
            label="Visi Yayasan"
            rows={3}
            value={formData.vision}
            onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
            required
          />

          <Textarea
            label="Misi Yayasan (Satu butir per baris)"
            rows={5}
            value={formData.missions}
            onChange={(e) => setFormData({ ...formData, missions: e.target.value })}
            required
          />
        </div>

        {/* Legalitas & Kontak */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-subtle space-y-4">
          <h2 className="font-heading text-lg font-bold text-[#102A43] flex items-center gap-2 border-b border-gray-100 pb-3">
            <MapPin className="w-5 h-5 text-[#00609C]" />
            <span>Legalitas & Kontak Sekretariat</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="SK Kemenkumham RI"
              value={formData.decreeNumber}
              onChange={(e) => setFormData({ ...formData, decreeNumber: e.target.value })}
              required
            />
            <Input
              label="Nomor Akta Notaris"
              value={formData.deedNumber}
              onChange={(e) => setFormData({ ...formData, deedNumber: e.target.value })}
              required
            />
            <Input
              label="Notaris Pengesah"
              value={formData.notaryOfficial}
              onChange={(e) => setFormData({ ...formData, notaryOfficial: e.target.value })}
            />
            <Input
              label="Nomor SIOP Sosial"
              value={formData.siopNumber}
              onChange={(e) => setFormData({ ...formData, siopNumber: e.target.value })}
            />
            <Input
              label="Nomor Telepon / WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              label="Email Resmi"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <Textarea
            label="Alamat Lengkap Sekretariat"
            rows={2}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            size="md"
            leftIcon={<Save className="w-4 h-4" />}
          >
            Simpan Perubahan Yayasan
          </Button>
        </div>
      </form>
    </div>
  );
};
