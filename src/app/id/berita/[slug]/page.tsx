import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NewsDetailView } from '@/components/views/NewsDetailView';
import { newsMock } from '@/mock';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const news = newsMock.find((n) => n.slug === slug);
  if (!news) return { title: 'Berita Tidak Ditemukan' };
  return {
    title: `${news.title} | Yayasan Sosial Azhar Mandiri`,
    description: news.excerpt,
  };
}

export default async function BeritaDetailPageId({ params }: Props) {
  const { slug } = await params;
  const news = newsMock.find((n) => n.slug === slug);
  if (!news) return notFound();
  return <NewsDetailView news={news} />;
}
