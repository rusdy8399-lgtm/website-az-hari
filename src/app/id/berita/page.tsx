import { Metadata } from 'next';
import { NewsListView } from '@/components/views/NewsListView';

export const metadata: Metadata = {
  title: 'Berita & Kegiatan | Yayasan Sosial Azhar Mandiri',
  description:
    'Kumpulan berita terkini, pengumuman, dokumentasi kegiatan, dan prestasi di lingkungan Yayasan Sosial Azhar Mandiri.',
};

export default function BeritaPageId() {
  return <NewsListView />;
}
