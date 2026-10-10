import { Registration } from '@/types';

export const registrationsMock: Registration[] = [
  {
    id: 'reg-001',
    registrationNumber: 'AZZ-2026-000123',
    programType: 'SMP IT AZZAIN',
    submissionDate: '2026-02-15 09:30',
    status: 'Menunggu Verifikasi',
    statusNote: 'Berkas pendaftaran telah kami terima dan berada dalam antrean peninjauan panitia PPDB.',
    student: {
      nik: '3204123456780001',
      nisn: '0087654321',
      fullName: 'Muhammad Raihan Pratama',
      nickname: 'Raihan',
      birthPlace: 'Bandung',
      birthDate: '2013-05-14',
      gender: 'Laki-laki',
      religion: 'Islam',
      address: 'Jl. Margahayu Raya Barat No. 28',
      village: 'Sekejati',
      district: 'Buahbatu',
      city: 'Kota Bandung',
      province: 'Jawa Barat'
    },
    parents: {
      fatherName: 'Bambang Sutejo, S.T.',
      fatherOccupation: 'Karyawan Swasta',
      fatherPhone: '081223344556',
      motherName: 'Siti Rahmawati, S.Pd.',
      motherOccupation: 'Guru',
      motherPhone: '081334455667',
      guardianName: '',
      guardianPhone: ''
    },
    documents: {
      familyCard: 'kartu_keluarga_raihan.pdf',
      birthCertificate: 'akta_lahir_raihan.pdf',
      diplomaOrGraduationCert: 'skl_sd_raihan.pdf',
      photo: 'pas_foto_raihan.jpg'
    },
    timeline: [
      {
        status: 'Pendaftaran Diterima',
        date: '2026-02-15 09:30',
        note: 'Formulir online berhasil dikirim oleh pendaftar.'
      },
      {
        status: 'Menunggu Verifikasi',
        date: '2026-02-15 09:35',
        note: 'Dokumen masuk ke sistem verifikasi panitia PPDB gelombang 1.'
      }
    ]
  },
  {
    id: 'reg-002',
    registrationNumber: 'AZZ-2026-000124',
    programType: 'SMP IT AZZAIN',
    submissionDate: '2026-02-14 14:15',
    status: 'Data Perlu Diperbaiki',
    statusNote: 'Scan Kartu Keluarga buram / tidak terbaca dengan jelas. Mohon upload ulang file KK terbaru.',
    student: {
      nik: '3204987654320002',
      nisn: '0089123456',
      fullName: 'Aisyah Humaira Azzahra',
      nickname: 'Aisyah',
      birthPlace: 'Cimahi',
      birthDate: '2013-08-22',
      gender: 'Perempuan',
      religion: 'Islam',
      address: 'Komplek Permata Indah Blok B-4',
      village: 'Cipageran',
      district: 'Cimahi Utara',
      city: 'Kota Cimahi',
      province: 'Jawa Barat'
    },
    parents: {
      fatherName: 'Hendra Gunawan',
      fatherOccupation: 'Wiraswasta',
      fatherPhone: '081298765432',
      motherName: 'Dewi Sartika',
      motherOccupation: 'Ibu Rumah Tangga',
      motherPhone: '081387654321',
      guardianName: '',
      guardianPhone: ''
    },
    documents: {
      familyCard: 'kk_aisyah_buram.pdf',
      birthCertificate: 'akta_kelahiran_aisyah.pdf',
      diplomaOrGraduationCert: 'skl_sd_aisyah.pdf',
      photo: 'pasfoto_aisyah.jpg'
    },
    timeline: [
      {
        status: 'Pendaftaran Diterima',
        date: '2026-02-14 14:15',
        note: 'Formulir online berhasil dikirim oleh pendaftar.'
      },
      {
        status: 'Sedang Diverifikasi',
        date: '2026-02-15 10:00',
        note: 'Panitia memeriksa kelengkapan berkas identitas dan raport.'
      },
      {
        status: 'Data Perlu Diperbaiki',
        date: '2026-02-15 11:20',
        note: 'Dokumen KK kabur, mohon perbaiki melalui panel unggah ulang.'
      }
    ]
  },
  {
    id: 'reg-003',
    registrationNumber: 'AZZ-2026-000125',
    programType: 'SMP IT AZZAIN',
    submissionDate: '2026-02-12 11:00',
    status: 'Lulus Administrasi',
    statusNote: 'Selamat! Dokumen administrasi telah terverifikasi lengkap. Silakan unduh kartu ujian untuk jadwal tes seleksi.',
    student: {
      nik: '3204778899000003',
      nisn: '0085544332',
      fullName: 'Ahmad Bilal Al-Farisi',
      nickname: 'Bilal',
      birthPlace: 'Sumedang',
      birthDate: '2013-03-09',
      gender: 'Laki-laki',
      religion: 'Islam',
      address: 'Jl. Raya Jatinangor No. 102',
      village: 'Hegarmanah',
      district: 'Jatinangor',
      city: 'Kabupaten Sumedang',
      province: 'Jawa Barat'
    },
    parents: {
      fatherName: 'Drs. Usman Mansyur',
      fatherOccupation: 'PNS',
      fatherPhone: '081122334455',
      motherName: 'Fatimah Az-Zahra, M.Si.',
      motherOccupation: 'Dosen',
      motherPhone: '081233445566',
      guardianName: '',
      guardianPhone: ''
    },
    documents: {
      familyCard: 'kk_bilal_valid.pdf',
      birthCertificate: 'akta_bilal.pdf',
      diplomaOrGraduationCert: 'skl_bilal.pdf',
      photo: 'foto_bilal_3x4.jpg'
    },
    timeline: [
      {
        status: 'Pendaftaran Diterima',
        date: '2026-02-12 11:00',
        note: 'Formulir online disubmit.'
      },
      {
        status: 'Sedang Diverifikasi',
        date: '2026-02-12 13:40',
        note: 'Pemeriksaan berkas dan sertifikat tahfizh.'
      },
      {
        status: 'Lulus Administrasi',
        date: '2026-02-13 09:15',
        note: 'Verifikasi berkas lolos 100%. Dijadwalkan wawancara dan tes tahfizh.'
      }
    ]
  },
  {
    id: 'reg-004',
    registrationNumber: 'AZZ-2026-000126',
    programType: 'SMP IT AZZAIN',
    submissionDate: '2026-02-08 16:45',
    status: 'Diterima',
    statusNote: 'Alhamdulillah! Ananda dinyatakan DITERIMA sebagai Santri Baru SMP IT AZZAIN TP 2026/2027.',
    student: {
      nik: '3204332211000004',
      nisn: '0081122334',
      fullName: 'Fathimah Zahira Khansa',
      nickname: 'Khansa',
      birthPlace: 'Bandung',
      birthDate: '2013-11-19',
      gender: 'Perempuan',
      religion: 'Islam',
      address: 'Jl. Cisaranten Kulon No. 44',
      village: 'Cisaranten',
      district: 'Arcamanik',
      city: 'Kota Bandung',
      province: 'Jawa Barat'
    },
    parents: {
      fatherName: 'Ir. Taufiq Hidayat',
      fatherOccupation: 'Konsultan',
      fatherPhone: '081399887766',
      motherName: 'Lina Marlina',
      motherOccupation: 'Apoteker',
      motherPhone: '081288776655',
      guardianName: '',
      guardianPhone: ''
    },
    documents: {
      familyCard: 'kk_khansa.pdf',
      birthCertificate: 'akta_khansa.pdf',
      diplomaOrGraduationCert: 'ijazah_khansa.pdf',
      photo: 'khansa_pasfoto.jpg'
    },
    timeline: [
      {
        status: 'Pendaftaran Diterima',
        date: '2026-02-08 16:45',
        note: 'Pengisian data sukses.'
      },
      {
        status: 'Lulus Administrasi',
        date: '2026-02-09 10:00',
        note: 'Verifikasi administrasi tuntas.'
      },
      {
        status: 'Tes Seleksi & Wawancara',
        date: '2026-02-11 08:30',
        note: 'Hasil tes tahsin Al-Qur’an dan psikotes kategori Istimewa.'
      },
      {
        status: 'Diterima',
        date: '2026-02-14 15:00',
        note: 'Surat Keputusan Kelulusan resmi diterbitkan.'
      }
    ]
  },
  {
    id: 'reg-005',
    registrationNumber: 'AZZ-2026-000127',
    programType: 'SMP IT AZZAIN',
    submissionDate: '2026-02-16 10:10',
    status: 'Sedang Diverifikasi',
    statusNote: 'Tim panitia sedang melakukan verifikasi keaslian piagam prestasi dan nomor NISN.',
    student: {
      nik: '3204556677880005',
      nisn: '0084433221',
      fullName: 'Zaidan Hafizh Ar-Razi',
      nickname: 'Zaidan',
      birthPlace: 'Bandung',
      birthDate: '2013-01-30',
      gender: 'Laki-laki',
      religion: 'Islam',
      address: 'Jl. Terusan Buah Batu No. 19',
      village: 'Kujangsari',
      district: 'Bandung Kidul',
      city: 'Kota Bandung',
      province: 'Jawa Barat'
    },
    parents: {
      fatherName: 'Dr. Lukman Hakim',
      fatherOccupation: 'Dokter',
      fatherPhone: '081234567800',
      motherName: 'dr. Annisa Luthfiya',
      motherOccupation: 'Dokter',
      motherPhone: '081234567801',
      guardianName: '',
      guardianPhone: ''
    },
    documents: {
      familyCard: 'kk_zaidan.pdf',
      birthCertificate: 'akta_zaidan.pdf',
      diplomaOrGraduationCert: 'skl_zaidan.pdf',
      photo: 'foto_zaidan.jpg'
    },
    timeline: [
      {
        status: 'Pendaftaran Diterima',
        date: '2026-02-16 10:10',
        note: 'Formulir online masuk.'
      },
      {
        status: 'Sedang Diverifikasi',
        date: '2026-02-16 11:00',
        note: 'Proses validasi kelengkapan dokumen.'
      }
    ]
  }
];
