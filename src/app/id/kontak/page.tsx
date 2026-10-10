import { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';

export const metadata: Metadata = {
  title: 'Kontak Sekretariat | Yayasan Sosial Azhar Mandiri',
  description:
    'Hubungi kantor sekretariat Yayasan Sosial Azhar Mandiri untuk informasi program sosial, santunan, dan kemitraan donatur.',
};

export default function KontakPageId() {
  return <ContactView />;
}
