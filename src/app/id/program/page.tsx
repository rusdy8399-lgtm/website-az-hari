import { Metadata } from 'next';
import { ProgramsListView } from '@/components/views/ProgramsListView';

export const metadata: Metadata = {
  title: 'Program Yayasan | Yayasan Sosial Azhar Mandiri',
  description:
    'Program santunan yatim, bantuan sosial sembako, kesehatan, pendidikan nonformal, dan pembinaan akhlak Yayasan Sosial Azhar Mandiri.',
};

export default function ProgramPageId() {
  return <ProgramsListView />;
}
