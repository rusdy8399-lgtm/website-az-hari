import { Metadata } from 'next';
import { RegistrationPortalView } from '@/components/views/RegistrationPortalView';

export const metadata: Metadata = {
  title: 'Pendaftaran Online | Yayasan Sosial Azhar Mandiri',
  description:
    'Portal pendaftaran resmi PPDB SMP IT AZZAIN, Majlis Taklim Raudatul Azhar, dan layanan sosial kemanusiaan LSKA Raudatul Azhar.',
};

export default function PendaftaranPortalPageId() {
  return <RegistrationPortalView />;
}
