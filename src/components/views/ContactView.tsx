'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { foundationMock } from '@/mock';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export const ContactView: React.FC = () => {
  const dict = getDictionary();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#003B64] to-[#00223D] text-white py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb
              items={[{ label: dict.nav.contact }]}
              className="text-white/70 mb-4 [&_a]:text-white/80 [&_span]:text-white"
            />
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5A623] text-xs font-bold tracking-wider uppercase mb-3 border border-white/20">
                SEKRETARIAT RESMI
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
                Hubungi Sekretariat Yayasan
              </h1>
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                Kami siap melayani informasi seputar santunan anak asuh, penyaluran bantuan sosial, kemitraan donatur, dan kegiatan dakwah kemasyarakatan.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact Information Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-[#0F172A]">
                    Informasi Kontak Resmi
                  </h2>

                  <div className="space-y-4 text-sm text-[#475569]">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-[#00609C] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-[#0F172A] block">Alamat Sekretariat:</strong>
                        <p className="mt-0.5 text-xs sm:text-sm">{foundationMock.address}</p>
                        <p className="text-xs text-slate-500 mt-0.5">Kode Pos: {foundationMock.postalCode}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-50 text-[#D99A20] shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-[#0F172A] block">Telepon / WhatsApp:</strong>
                        <p className="mt-0.5 font-mono text-[#00609C] font-semibold">{foundationMock.phone}</p>
                        <p className="text-xs text-slate-500">Layanan pesan & konfirmasi donasi</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-[#064E3B] shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-[#0F172A] block">Email Resmi:</strong>
                        <p className="mt-0.5 text-[#00609C]">{foundationMock.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="text-[#0F172A] block">Jam Pelayanan:</strong>
                        <p className="mt-0.5 text-xs">Senin – Sabtu: 08.00 – 16.00 WITA</p>
                        <p className="text-xs text-slate-500">Ahad / Hari Libur Nasional: Tutup</p>
                      </div>
                    </div>
                  </div>

                  {/* Legal box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                    <p className="font-bold text-[#003B64] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#00609C]" />
                      <span>SK Kemenkumham: {foundationMock.decreeNumber}</span>
                    </p>
                    <p>Akta Notaris: {foundationMock.deedNumber}</p>
                    <p>SIOP Sosial: {foundationMock.siopNumber}</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-[#0F172A]">
                      Kirimkan Pesan atau Pertanyaan
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1">
                      Silakan isi formulir di bawah ini. Tim sekretariat kami akan segera merespons pesan Anda.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h3 className="font-heading text-lg font-bold text-emerald-900">
                        Pesan Berhasil Terkirim!
                      </h3>
                      <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                        Terima kasih telah menghubungi Yayasan Sosial Azhar Mandiri. Tim kami akan segera menindaklanjuti pesan Anda.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Nama Lengkap"
                          placeholder="Contoh: H. Ahmad Subarjo"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <Input
                          label="Nomor WhatsApp"
                          placeholder="Contoh: 08123456789"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Alamat Email"
                          type="email"
                          placeholder="nama@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <Input
                          label="Subjek / Keperluan"
                          placeholder="Contoh: Pertanyaan Santunan / Donasi"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>

                      <Textarea
                        label="Pesan Anda"
                        rows={4}
                        placeholder="Tuliskan pesan, saran, atau permohonan informasi secara lengkap..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />

                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        rightIcon={<Send className="w-4 h-4" />}
                        className="w-full sm:w-auto"
                      >
                        Kirimkan Pesan Sekarang
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
