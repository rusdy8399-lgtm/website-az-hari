import { Metadata } from 'next';
import { PpdbWizardView } from '@/components/views/PpdbWizardView';

export const metadata: Metadata = {
  title: 'Formulir PPDB Online SMP IT AZZAIN | Yayasan Sosial Azhar Mandiri',
  description:
    'Pengisian formulir pendaftaran santri baru SMP IT AZZAIN TP 2026/2027 secara daring, mudah, dan transparan.',
};

export default function PpdbWizardPageId() {
  return <PpdbWizardView />;
}
