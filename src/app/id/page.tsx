import { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';

export const metadata: Metadata = {
  title: 'Beranda | Yayasan Sosial Azhar Mandiri',
  description:
    'Website Resmi Yayasan Sosial Azhar Mandiri. Lembaga induk SMP IT AZZAIN, Majlis Taklim Raudatul Azhar, dan LSKA Raudatul Azhar.',
};

export default function HomePageId() {
  return <HomeView />;
}
