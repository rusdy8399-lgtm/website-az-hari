import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProgramDetailView } from '@/components/views/ProgramDetailView';
import { programsMock } from '@/mock';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programsMock.find((p) => p.slug === slug);
  if (!program) return { title: 'Program Tidak Ditemukan' };
  return {
    title: `${program.title} | Yayasan Sosial Azhar Mandiri`,
    description: program.shortDesc,
  };
}

export default async function ProgramDetailPageId({ params }: Props) {
  const { slug } = await params;
  const program = programsMock.find((p) => p.slug === slug);
  if (!program) return notFound();
  return <ProgramDetailView program={program} />;
}
