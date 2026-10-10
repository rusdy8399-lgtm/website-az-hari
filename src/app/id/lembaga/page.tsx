import { Metadata } from 'next';
import { InstitutionsOverviewView } from '@/components/views/InstitutionsOverviewView';

export const metadata: Metadata = {
  title: 'Lembaga di Bawah Naungan | Yayasan Sosial Azhar Mandiri',
  description:
    'Mengenal pilar khidmat Yayasan: SMP IT AZZAIN (Pendidikan), Majlis Taklim Raudatul Azhar (Dakwah), dan LSKA Raudatul Azhar (Sosial).',
};

export default function LembagaIndexPageId() {
  return <InstitutionsOverviewView />;
}
