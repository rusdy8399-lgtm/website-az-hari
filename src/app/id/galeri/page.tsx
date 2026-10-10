import { Metadata } from 'next';
import { GalleryView } from '@/components/views/GalleryView';

export const metadata: Metadata = {
  title: 'Galeri & Dokumentasi | Yayasan Sosial Azhar Mandiri',
  description:
    'Dokumentasi foto kegiatan santunan, bantuan sosial, kajian, dan aktivitas Yayasan Sosial Azhar Mandiri.',
};

export default function GaleriPageId() {
  return <GalleryView />;
}
