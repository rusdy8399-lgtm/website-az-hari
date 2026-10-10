import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InstitutionDetailView } from '@/components/views/InstitutionDetailView';
import { institutionsMock } from '@/mock';

const institution = institutionsMock.find((i) => i.slug === 'smp-it-azzain')!;

export const metadata: Metadata = {
  title: `${institution?.name || 'SMP IT AZZAIN'} | Yayasan Sosial Azhar Mandiri`,
  description: institution?.description || '',
};

export default function SmpItAzzainPageId() {
  if (!institution) return notFound();
  return <InstitutionDetailView institution={institution} />;
}
