'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Info,
  User,
  Users,
  FileText,
  ClipboardCheck,
  CheckCircle2,
  Sparkles,
  Calendar,
  AlertCircle,
  Clock,
  Printer,
  Copy,
} from 'lucide-react';
import { getDictionary, routeMappings } from '@/lib/i18n';
import { TopInfoBar } from '@/components/layout/TopInfoBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { FileUpload } from '@/components/ui/FileUpload';
import { Button } from '@/components/ui/Button';

export const PpdbWizardView: React.FC = () => {
  const dict = getDictionary();
  const homePath = routeMappings.home;

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  // Form Data State
  const [formData, setFormData] = useState({
    // Step 2: Student
    nik: '',
    nisn: '',
    fullName: '',
    nickname: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki',
    religion: 'Islam',
    address: '',
    village: '',
    district: '',
    city: 'Kabupaten Bandung',
    province: 'Jawa Barat',
    // Step 3: Parents
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    guardianName: '',
    guardianPhone: '',
    // Step 4: Documents
    familyCardFile: '',
    birthCertFile: '',
    diplomaFile: '',
    photoFile: '',
    // Step 5: Affirmation
    affirmed: false,
  });

  // Generated registration number on success
  const [generatedRegNum, setGeneratedRegNum] = useState('AZZ-2026-000123');

  const steps = [
    { number: 1, label: dict.wizard.steps.info, icon: <Info className="w-4 h-4" /> },
    { number: 2, label: dict.wizard.steps.student, icon: <User className="w-4 h-4" /> },
    { number: 3, label: dict.wizard.steps.parents, icon: <Users className="w-4 h-4" /> },
    { number: 4, label: dict.wizard.steps.documents, icon: <FileText className="w-4 h-4" /> },
    { number: 5, label: dict.wizard.steps.review, icon: <ClipboardCheck className="w-4 h-4" /> },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileChange = (field: string, fileName: string) => {
    setFormData((prev) => ({ ...prev, [field]: fileName }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi';
      if (!formData.nik.trim()) {
        newErrors.nik = 'NIK calon siswa wajib diisi';
      } else if (!/^\d{16}$/.test(formData.nik.trim())) {
        newErrors.nik = 'NIK harus 16 digit angka';
      }
      if (!formData.nisn.trim()) {
        newErrors.nisn = 'NISN wajib diisi';
      } else if (!/^\d{10}$/.test(formData.nisn.trim())) {
        newErrors.nisn = 'NISN harus 10 digit angka';
      }
      if (!formData.birthPlace.trim()) newErrors.birthPlace = 'Tempat lahir wajib diisi';
      if (!formData.birthDate) newErrors.birthDate = 'Tanggal lahir wajib diisi';
      if (!formData.address.trim()) newErrors.address = 'Alamat wajib diisi';
      if (!formData.district.trim()) newErrors.district = 'Kecamatan wajib diisi';
    }

    if (step === 3) {
      if (!formData.fatherName.trim()) newErrors.fatherName = 'Nama ayah wajib diisi';
      if (!formData.fatherPhone.trim()) {
        newErrors.fatherPhone = 'Nomor WhatsApp ayah wajib diisi';
      } else if (!/^[0-9+]{10,14}$/.test(formData.fatherPhone.trim())) {
        newErrors.fatherPhone = 'Nomor telepon tidak valid';
      }
      if (!formData.motherName.trim()) newErrors.motherName = 'Nama ibu wajib diisi';
    }

    if (step === 4) {
      if (!formData.familyCardFile) newErrors.familyCardFile = 'Kartu Keluarga wajib diunggah';
      if (!formData.birthCertFile) newErrors.birthCertFile = 'Akta Kelahiran wajib diunggah';
      if (!formData.photoFile) newErrors.photoFile = 'Pas foto wajib diunggah';
    }

    if (step === 5) {
      if (!formData.affirmed) {
        newErrors.affirmed = 'Anda wajib menyetujui pernyataan kebenaran data';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    // Simulate server response
    setTimeout(() => {
      setIsSubmitting(false);
      const randomSuffix = Math.floor(100000 + Math.random() * 900000);
      setGeneratedRegNum(`AZZ-2026-${randomSuffix}`);
      setCurrentStep(6);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  const copyRegNumber = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(generatedRegNum);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5]">
      <TopInfoBar />
      <Navbar />

      <main className="flex-1 py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              {
                label: 'SMP IT AZZAIN',
                href: routeMappings['institution-smp'],
              },
              { label: 'PPDB Online' },
            ]}
            className="mb-6"
          />

          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#00609C] text-xs font-semibold border border-sky-100 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>{dict.wizard.subtitle}</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {dict.wizard.title}
            </h1>
          </div>

          {/* Step Progress Indicator (Hidden on Step 6 - Success) */}
          {currentStep <= 5 && (
            <div className="mb-10">
              <div className="flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
                <div
                  className="absolute top-1/2 left-0 h-0.5 bg-[#00609C] -translate-y-1/2 z-0 transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((st) => {
                  const isDone = currentStep > st.number;
                  const isCurrent = currentStep === st.number;

                  return (
                    <div
                      key={st.number}
                      className="relative z-10 flex flex-col items-center group cursor-pointer"
                      onClick={() => {
                        if (st.number < currentStep) setCurrentStep(st.number);
                      }}
                    >
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all ${isDone
                          ? 'bg-[#00609C] text-white shadow-sm'
                          : isCurrent
                            ? 'bg-[#00609C] text-white ring-4 ring-sky-100 shadow-md scale-110'
                            : 'bg-white border-2 border-gray-300 text-gray-400'
                          }`}
                      >
                        {isDone ? <Check className="w-5 h-5 stroke-[2.5]" /> : st.number}
                      </div>
                      <span
                        className={`mt-2 text-[11px] sm:text-xs font-semibold hidden sm:block ${isCurrent
                          ? 'text-[#00609C]'
                          : isDone
                            ? 'text-gray-700'
                            : 'text-gray-400'
                          }`}
                      >
                        {st.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Form Container Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-subtle">
            {/* STEP 1: INFORMASI */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#064E3B] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    <strong className="block mb-1 font-bold text-[#064E3B]">
                      {dict.wizard.infoStep.title}
                    </strong>
                    {dict.wizard.infoStep.content}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-100 space-y-2">
                    <h3 className="font-heading text-base font-bold text-[#102A43]">
                      Persyaratan Pendaftaran:
                    </h3>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                      <li>Lulus SD/MI atau sederajat tahun 2025/2026</li>
                      <li>Berusia maksimal 15 tahun pada Juli 2026</li>
                      <li>Memiliki NISN aktif di Dapodik/EMIS</li>
                      <li>Siap mengikuti pembinaan tahfidz dan asrama</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-100 space-y-2">
                    <h3 className="font-heading text-base font-bold text-[#102A43]">
                      Jalur Seleksi:
                    </h3>
                    <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                      <li><strong>Jalur Prestasi Tahfizh:</strong> Min 3 juz mutqin</li>
                      <li><strong>Jalur Prestasi Sains:</strong> Juara OSN / Rapor 85+</li>
                      <li><strong>Jalur Reguler:</strong> Tes potensi akademik & wawancara</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    size="md"
                    rightIcon={<ChevronRight className="w-4 h-4" />}
                  >
                    {dict.wizard.buttons.next}: Data Calon Siswa
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: DATA CALON SISWA */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h2 className="font-heading text-xl font-bold text-[#102A43] border-b border-gray-100 pb-3">
                  {dict.wizard.studentStep.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label={dict.wizard.studentStep.fullName}
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
                    placeholder="Contoh: Muhammad Raihan Pratama"
                  />

                  <Input
                    label={dict.wizard.studentStep.nickname}
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                    placeholder="Contoh: Raihan"
                  />

                  <Input
                    label={dict.wizard.studentStep.nik}
                    name="nik"
                    required
                    maxLength={16}
                    value={formData.nik}
                    onChange={handleInputChange}
                    error={errors.nik}
                    placeholder="16 digit angka NIK"
                  />

                  <Input
                    label={dict.wizard.studentStep.nisn}
                    name="nisn"
                    required
                    maxLength={10}
                    value={formData.nisn}
                    onChange={handleInputChange}
                    error={errors.nisn}
                    placeholder="10 digit nomor NISN"
                  />

                  <Input
                    label={dict.wizard.studentStep.birthPlace}
                    name="birthPlace"
                    required
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                    error={errors.birthPlace}
                    placeholder="Kota kelahiran"
                  />

                  <Input
                    type="date"
                    label={dict.wizard.studentStep.birthDate}
                    name="birthDate"
                    required
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    error={errors.birthDate}
                  />

                  <Select
                    label={dict.wizard.studentStep.gender}
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                    options={[
                      { value: 'Laki-laki', label: 'Laki-laki' },
                      { value: 'Perempuan', label: 'Perempuan' },
                    ]}
                  />

                  <Select
                    label={dict.wizard.studentStep.religion}
                    name="religion"
                    required
                    value={formData.religion}
                    onChange={handleInputChange}
                    options={[
                      { value: 'Islam', label: 'Islam' },
                    ]}
                  />
                </div>

                <div className="pt-2">
                  <Textarea
                    label={dict.wizard.studentStep.address}
                    name="address"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={handleInputChange}
                    error={errors.address}
                    placeholder="Nama jalan, nomor rumah, RT/RW"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <Input
                    label={dict.wizard.studentStep.village}
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    placeholder="Kelurahan / Desa"
                  />
                  <Input
                    label={dict.wizard.studentStep.district}
                    name="district"
                    required
                    value={formData.district}
                    onChange={handleInputChange}
                    error={errors.district}
                    placeholder="Kecamatan"
                  />
                  <Input
                    label={dict.wizard.studentStep.city}
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Kab / Kota"
                  />
                  <Input
                    label={dict.wizard.studentStep.province}
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    placeholder="Provinsi"
                  />
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="md"
                    leftIcon={<ChevronLeft className="w-4 h-4" />}
                  >
                    {dict.wizard.buttons.prev}
                  </Button>
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    size="md"
                    rightIcon={<ChevronRight className="w-4 h-4" />}
                  >
                    {dict.wizard.buttons.next}: Data Orang Tua
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: DATA ORANG TUA / WALI */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h2 className="font-heading text-xl font-bold text-[#102A43] border-b border-gray-100 pb-3">
                  {dict.wizard.parentsStep.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <Input
                    label={dict.wizard.parentsStep.fatherName}
                    name="fatherName"
                    required
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    error={errors.fatherName}
                    placeholder="Nama lengkap ayah"
                  />
                  <Input
                    label={dict.wizard.parentsStep.fatherOccupation}
                    name="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={handleInputChange}
                    placeholder="PNS / Swasta / Wiraswasta"
                  />
                  <Input
                    label={dict.wizard.parentsStep.fatherPhone}
                    name="fatherPhone"
                    required
                    value={formData.fatherPhone}
                    onChange={handleInputChange}
                    error={errors.fatherPhone}
                    placeholder="Contoh: 081234567890"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                  <Input
                    label={dict.wizard.parentsStep.motherName}
                    name="motherName"
                    required
                    value={formData.motherName}
                    onChange={handleInputChange}
                    error={errors.motherName}
                    placeholder="Nama lengkap ibu"
                  />
                  <Input
                    label={dict.wizard.parentsStep.motherOccupation}
                    name="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleInputChange}
                    placeholder="Ibu Rumah Tangga / Guru / dll"
                  />
                  <Input
                    label={dict.wizard.parentsStep.motherPhone}
                    name="motherPhone"
                    value={formData.motherPhone}
                    onChange={handleInputChange}
                    placeholder="Nomor WhatsApp ibu"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-gray-100 space-y-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Data Wali (Opsional bila diasuh selain orang tua kandung)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label={dict.wizard.parentsStep.guardianName}
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleInputChange}
                      placeholder="Nama wali murid"
                    />
                    <Input
                      label={dict.wizard.parentsStep.guardianPhone}
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleInputChange}
                      placeholder="Nomor telepon wali"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="md"
                    leftIcon={<ChevronLeft className="w-4 h-4" />}
                  >
                    {dict.wizard.buttons.prev}
                  </Button>
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    size="md"
                    rightIcon={<ChevronRight className="w-4 h-4" />}
                  >
                    {dict.wizard.buttons.next}: Unggah Dokumen
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: DOKUMEN */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h2 className="font-heading text-xl font-bold text-[#102A43]">
                    {dict.wizard.documentsStep.title}
                  </h2>
                </div>

                <p className="text-xs text-gray-500 bg-amber-50 p-3 rounded-xl border border-amber-200">
                  {dict.wizard.documentsStep.note}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FileUpload
                      label={dict.wizard.documentsStep.familyCard}
                      required
                      value={formData.familyCardFile}
                      onChange={(fn) => handleFileChange('familyCardFile', fn)}
                    />
                    {errors.familyCardFile && (
                      <p className="text-xs text-rose-600 mt-1">{errors.familyCardFile}</p>
                    )}
                  </div>

                  <div>
                    <FileUpload
                      label={dict.wizard.documentsStep.birthCertificate}
                      required
                      value={formData.birthCertFile}
                      onChange={(fn) => handleFileChange('birthCertFile', fn)}
                    />
                    {errors.birthCertFile && (
                      <p className="text-xs text-rose-600 mt-1">{errors.birthCertFile}</p>
                    )}
                  </div>

                  <div>
                    <FileUpload
                      label={dict.wizard.documentsStep.diploma}
                      value={formData.diplomaFile}
                      onChange={(fn) => handleFileChange('diplomaFile', fn)}
                    />
                  </div>

                  <div>
                    <FileUpload
                      label={dict.wizard.documentsStep.photo}
                      accept=".jpg,.jpeg,.png"
                      required
                      value={formData.photoFile}
                      onChange={(fn) => handleFileChange('photoFile', fn)}
                    />
                    {errors.photoFile && (
                      <p className="text-xs text-rose-600 mt-1">{errors.photoFile}</p>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="md"
                    leftIcon={<ChevronLeft className="w-4 h-4" />}
                  >
                    {dict.wizard.buttons.prev}
                  </Button>
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    size="md"
                    rightIcon={<ChevronRight className="w-4 h-4" />}
                  >
                    {dict.wizard.buttons.next}: Tinjau & Konfirmasi
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW DATA */}
            {currentStep === 5 && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200">
                <h2 className="font-heading text-xl font-bold text-[#102A43] border-b border-gray-100 pb-3">
                  {dict.wizard.reviewStep.title}
                </h2>

                <div className="space-y-4">
                  {/* Summary Card 1: Siswa */}
                  <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-100">
                    <h3 className="font-heading text-sm font-bold text-[#064E3B] mb-3">
                      Data Calon Siswa
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-gray-400 block">Nama Lengkap:</span>
                        <span className="font-semibold text-gray-800">{formData.fullName || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block">NIK:</span>
                        <span className="font-semibold text-gray-800 font-mono">{formData.nik || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block">NISN:</span>
                        <span className="font-semibold text-gray-800 font-mono">{formData.nisn || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Tempat, Tgl Lahir:</span>
                        <span className="font-semibold text-gray-800">
                          {formData.birthPlace}, {formData.birthDate || '-'}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Jenis Kelamin:</span>
                        <span className="font-semibold text-gray-800">{formData.gender}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Domisili:</span>
                        <span className="font-semibold text-gray-800">{formData.city}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Card 2: Orang Tua */}
                  <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-100">
                    <h3 className="font-heading text-sm font-bold text-[#064E3B] mb-3">
                      Data Orang Tua / Wali
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-gray-400 block">Nama Ayah:</span>
                        <span className="font-semibold text-gray-800">{formData.fatherName || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block">WhatsApp Ayah:</span>
                        <span className="font-semibold text-gray-800">{formData.fatherPhone || '-'}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Nama Ibu:</span>
                        <span className="font-semibold text-gray-800">{formData.motherName || '-'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Card 3: Dokumen */}
                  <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-100">
                    <h3 className="font-heading text-sm font-bold text-[#064E3B] mb-3">
                      Berkas Terlampir
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="flex items-center gap-1.5 text-emerald-800">
                        <Check className="w-3.5 h-3.5" />
                        <span className="truncate">{formData.familyCardFile || 'Belum diunggah'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-800">
                        <Check className="w-3.5 h-3.5" />
                        <span className="truncate">{formData.birthCertFile || 'Belum diunggah'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-800">
                        <Check className="w-3.5 h-3.5" />
                        <span className="truncate">{formData.photoFile || 'Belum diunggah'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <span className="truncate">{formData.diplomaFile || 'Ijazah (Menyusul)'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Affirmation Checkbox */}
                <div className="p-4 rounded-2xl border border-gray-200 bg-emerald-50/40">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.affirmed}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, affirmed: e.target.checked }));
                        if (errors.affirmed) {
                          setErrors((errs) => {
                            const next = { ...errs };
                            delete next.affirmed;
                            return next;
                          });
                        }
                      }}
                      className="mt-1 w-4 h-4 rounded text-[#064E3B] focus:ring-[#064E3B]"
                    />
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      {dict.wizard.reviewStep.agreement}
                    </span>
                  </label>
                  {errors.affirmed && (
                    <p className="text-xs text-rose-600 mt-2 font-medium">{errors.affirmed}</p>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    size="md"
                    leftIcon={<ChevronLeft className="w-4 h-4" />}
                  >
                    {dict.wizard.buttons.prev}
                  </Button>
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    isLoading={isSubmitting}
                    className="shadow-goldGlow font-bold"
                  >
                    {dict.wizard.buttons.submit}
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 6: SUCCESS PPDB */}
            {currentStep === 6 && (
              <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border-4 border-emerald-100 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="max-w-md mx-auto space-y-2">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#064E3B]">
                    {dict.wizard.successStep.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {dict.wizard.successStep.message}
                  </p>
                </div>

                {/* Generated Registration Card */}
                <div className="max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-[#064E3B] to-[#043F32] text-white shadow-xl text-left space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none islamic-pattern w-full h-full" />

                  <div className="flex items-center justify-between border-b border-emerald-700/60 pb-3">
                    <span className="text-xs font-semibold uppercase text-gold-warm">
                      SMP IT AZZAIN PPDB 2026/2027
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#D99A20] text-white">
                      Menunggu Verifikasi
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-emerald-200">
                      {dict.wizard.successStep.regNumberLabel}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <p className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-white">
                        {generatedRegNum}
                      </p>
                      <button
                        type="button"
                        onClick={copyRegNumber}
                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-xs flex items-center gap-1"
                        title="Salin Nomor"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-gold-warm" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span>{copied ? 'Tersalin' : 'Salin'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs border-t border-emerald-700/60 pt-3">
                    <div>
                      <span className="text-emerald-300 block">{dict.wizard.successStep.nameLabel}</span>
                      <span className="font-semibold text-white truncate block">
                        {formData.fullName || 'Muhammad Raihan Pratama'}
                      </span>
                    </div>
                    <div>
                      <span className="text-emerald-300 block">{dict.wizard.successStep.dateLabel}</span>
                      <span className="font-semibold text-white block">
                        {new Date().toISOString().slice(0, 10)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Next Instructions */}
                <div className="max-w-md mx-auto text-left p-5 rounded-2xl bg-[#FAF9F5] border border-gray-100 space-y-3">
                  <h4 className="font-heading text-sm font-bold text-[#102A43] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D99A20]" />
                    <span>Langkah & Instruksi Selanjutnya:</span>
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-2">
                    {dict.wizard.successStep.instructions.map((ins, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-bold text-[#064E3B] shrink-0">{idx + 1}.</span>
                        <span>{ins}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <Button href={homePath} variant="primary" size="md">
                    {dict.wizard.successStep.backHomeBtn}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
