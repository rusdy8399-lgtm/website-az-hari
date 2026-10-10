import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InstitutionDetailView } from '@/components/views/InstitutionDetailView';
import { institutionsMock } from '@/mock';

const institution = institutionsMock.find((i) => i.slug === 'lska-raudatul-azhar')!;

export const metadata: Metadata = {
  title: `${institution?.name || 'LSKA Raudatul Azhar'} | Yayasan Sosial Azhar Mandiri`,
  description: institution?.description || '',
};

export default function LskaPageId() {
  if (!institution) return notFound();
  return <InstitutionDetailView institution={institution} />;
}
