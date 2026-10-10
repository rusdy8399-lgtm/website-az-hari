import { AdminUser } from '@/types';

export const usersMock: AdminUser[] = [
  {
    id: 'usr-1',
    name: 'Dr. Ahmad Fauzan, M.Pd',
    email: 'admin@azharmandiri.sch.id',
    role: 'SUPER_ADMIN',
    status: 'Aktif',
    lastLogin: '2026-03-08 08:30'
  },
  {
    id: 'usr-2',
    name: 'Ust. Fahrurrozi, S.Pd',
    email: 'ppdb@azharmandiri.sch.id',
    role: 'ADMIN_PPDB',
    status: 'Aktif',
    lastLogin: '2026-03-08 09:15'
  },
  {
    id: 'usr-3',
    name: 'Erika Isaura',
    email: 'media@azharmandiri.sch.id',
    role: 'EDITOR_BERITA',
    status: 'Aktif',
    lastLogin: '2026-03-07 16:45'
  }
];

export const adminUsersMock = usersMock;
