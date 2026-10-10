export interface FoundationInfo {
  name: string;
  officialProfileName?: string;
  tagline: string;
  motto?: string;
  established: string;
  decreeNumber: string;
  deedNumber?: string;
  deedDate?: string;
  notaryOfficial?: string;
  siopNumber?: string;
  statusLegal?: string;
  address: string;
  postalCode?: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  facebook: string;
  youtube: string;
  profile: string;
  history: string;
  vision: string;
  missions: string[];
  objectives?: string[];
  roadmaps?: {
    shortTerm: string[];
    mediumTerm: string[];
    longTerm: string[];
  };
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  leadership: {
    name: string;
    role: string;
    photo: string;
  }[];
  trustees?: {
    name: string;
    role: string;
  }[];
  supervisors?: {
    name: string;
    role: string;
  }[];
  executives?: {
    name: string;
    role: string;
  }[];
}

export interface Institution {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  vision: string;
  missions: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  heroImage: string;
  logo: string;
  address: string;
  phone: string;
  email: string;
  hasPpdb?: boolean;
  programs: {
    title: string;
    desc: string;
  }[];
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  category: string;
  institution: string;
  institutionSlug: string;
  image: string;
  shortDesc: string;
  content: string;
  highlights: string[];
  date: string;
  featured?: boolean;
  status?: 'Aktif' | 'Nonaktif' | 'Draft' | 'active' | 'completed' | 'upcoming';
  seoTitle?: string;
  seoDescription?: string;
  targetBeneficiaries?: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  institution: string;
  institutionSlug: string;
  thumbnail: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  readTime: string;
  featured?: boolean;
  status?: 'Publikasi' | 'Draft' | 'Arsip';
  seoTitle?: string;
  seoDescription?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Semua' | 'Yayasan' | 'SMP IT Azzain' | 'Majlis Taklim' | 'LSKA' | string;
  image: string;
  caption: string;
  date: string;
}

export type RegistrationStatus =
  | 'Menunggu Verifikasi'
  | 'Sedang Diverifikasi'
  | 'Data Perlu Diperbaiki'
  | 'Lulus Administrasi'
  | 'Diterima'
  | 'Ditolak';

export interface Registration {
  id: string;
  registrationNumber: string; // e.g. AZZ-2026-000123
  programType: 'SMP IT AZZAIN' | 'MAJLIS TAKLIM' | 'LSKA';
  submissionDate: string;
  status: RegistrationStatus;
  statusNote?: string;
  student: {
    nik: string;
    nisn: string;
    fullName: string;
    nickname: string;
    birthPlace: string;
    birthDate: string;
    gender: 'Laki-laki' | 'Perempuan';
    religion: string;
    address: string;
    village: string;
    district: string;
    city: string;
    province: string;
  };
  parents: {
    fatherName: string;
    fatherOccupation: string;
    fatherPhone: string;
    motherName: string;
    motherOccupation: string;
    motherPhone: string;
    guardianName?: string;
    guardianPhone?: string;
  };
  documents: {
    familyCard: string;
    birthCertificate: string;
    diplomaOrGraduationCert: string;
    photo: string;
  };
  timeline: {
    status: string;
    date: string;
    note: string;
  }[];
}

export interface StatisticsData {
  studentsActive: number;
  studyCongregation: number;
  socialBeneficiaries: number;
  programsActive: number;
  branchesCount: number;
  awardsCount: number;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'SUPER_ADMIN' | 'ADMIN_PPDB' | 'EDITOR_BERITA' | 'ADMIN_YAYASAN' | 'EDITOR' | 'PANITIA_PPDB';
  status: 'Aktif' | 'Nonaktif' | 'active' | 'inactive';
  lastLogin: string;
}

export interface AuditLogItem {
  id: string;
  userName: string;
  userRole: string;
  action: string;
  module: string;
  details: string;
  timestamp: string;
  ipAddress: string;
  status?: 'success' | 'failed' | 'Sukses' | 'Gagal';
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  size: string;
  type: string;
  uploadedAt: string;
}

export interface CmsSettings {
  website: {
    siteName: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
  };
  seo: {
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    keywords: string;
  };
  media: {
    maxUploadSizeMb: number;
    allowedFormats: string[];
  };
  system: {
    maintenanceMode: boolean;
    ppdbOpen: boolean;
    appVersion: string;
  };
}
