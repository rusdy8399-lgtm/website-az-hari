import { StatisticsData } from '@/types';

export const statisticsMock: StatisticsData = {
  studentsActive: 205, // 205+ Penerima Manfaat
  studyCongregation: 1500,
  socialBeneficiaries: 205, // 205+ Penerima Manfaat terdata
  programsActive: 6,
  branchesCount: 1,
  awardsCount: 10 // 10+ tahun pengabdian sejak 2015
};

export const impactSummaryMock = {
  beneficiariesCount: '205+',
  beneficiariesLabel: 'Penerima Manfaat',
  beneficiariesSub: 'Dari berbagai desa di Kecamatan Praya',
  yearsCount: '10+ Tahun',
  yearsLabel: 'Pengabdian Sosial',
  yearsSub: 'Konsisten melayani sejak 2015',
  startYear: '2015',
  startYearLabel: 'Awal Pelaksanaan',
  startYearSub: 'Program santunan & kepedulian',
  programsCount: '4+',
  programsLabel: 'Program Utama Berjalan',
  programsSub: 'Santunan, Sembako, Kesehatan & Pendidikan',
  disclaimer: 'Berdasarkan data profil resmi Yayasan Sosial Azhar Mandiri.'
};

export const adminStatsMock = {
  totalRegistrations: 48,
  newRegistrationsToday: 3,
  pendingVerification: 12,
  needsRevision: 4,
  passedAdministration: 28,
  acceptedStudents: 22,
  rejectedStudents: 4,
  totalNews: 12,
  totalPrograms: 6,
  totalGallery: 24,
  totalUsers: 5
};
