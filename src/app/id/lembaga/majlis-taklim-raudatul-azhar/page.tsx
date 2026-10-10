import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InstitutionDetailView } from '@/components/views/InstitutionDetailView';
import { institutionsMock } from '@/mock';

const institution = institutionsMock.find((i) => i.slug === 'majlis-taklim-raudatul-azhar')!;

export const metadata: Metadata = {
  title: `${institution?.name || 'Majlis Taklim Raudatul Azhar'} | Yayasan Sosial Azhar Mandiri`,
  description: institution?.description || '',
};

export default function MajlisTaklimPageId() {
  if (!institution) return notFound();
  return <InstitutionDetailView institution={institution} />;
}
