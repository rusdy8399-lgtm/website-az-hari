import { Metadata } from 'next';
import { AboutView } from '@/components/views/AboutView';

export const metadata: Metadata = {
  title: 'Tentang Yayasan',
  description:
    'Profil, sejarah, visi, misi, dan nilai luhur Yayasan Sosial Azhar Mandiri dalam mengabdi untuk kemaslahatan ummat.',
};

export default function TentangYayasanPage() {
  return <AboutView />;
}
