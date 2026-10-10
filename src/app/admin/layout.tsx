import React from 'react';
import { Metadata } from 'next';
import { AdminLayout } from '@/components/admin/AdminLayout';

export const metadata: Metadata = {
  title: 'CMS Portal Admin - Yayasan Sosial Al-Azhar Mandiri',
  description: 'Pusat Kendali Pengelolaan Konten dan Meja Verifikasi PPDB Yayasan Sosial Al-Azhar Mandiri',
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
