import { AuditLogItem } from '@/types';

export const auditLogsMock: AuditLogItem[] = [
  {
    id: 'log-001',
    userName: 'Ust. Fahrurrozi',
    userRole: 'ADMIN_PPDB',
    action: 'Verifikasi Berkas',
    module: 'Pendaftaran PPDB',
    details: 'Mengubah status pendaftaran AZZ-2026-000123 menjadi Lulus Administrasi',
    timestamp: '2026-03-08 09:30:15',
    ipAddress: '180.252.164.12'
  },
  {
    id: 'log-002',
    userName: 'Erika Isaura',
    userRole: 'EDITOR_BERITA',
    action: 'Publikasi Berita',
    module: 'Berita',
    details: 'Mempublikasikan artikel: Santri SMP IT AZZAIN Raih Medali Emas OSN',
    timestamp: '2026-03-07 16:50:00',
    ipAddress: '180.252.164.14'
  },
  {
    id: 'log-003',
    userName: 'Dr. Ahmad Fauzan',
    userRole: 'SUPER_ADMIN',
    action: 'Pembaruan Pengaturan',
    module: 'Pengaturan CMS',
    details: 'Menyimpan konfigurasi SEO dan informasi kontak website',
    timestamp: '2026-03-06 11:20:45',
    ipAddress: '114.124.200.5'
  }
];
