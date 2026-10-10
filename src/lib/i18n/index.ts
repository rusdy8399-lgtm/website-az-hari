import { idDictionary } from './dictionaries/id';

export const dictionary = idDictionary;

export function getDictionary() {
  return idDictionary;
}

export const routeMappings = {
  home: '/id',
  about: '/id/tentang-yayasan',
  institutions: '/id/lembaga',
  'institution-smp': '/id/lembaga/smp-it-azzain',
  'institution-majlis': '/id/lembaga/majlis-taklim-raudatul-azhar',
  'institution-lska': '/id/lembaga/lska-raudatul-azhar',
  programs: '/id/program',
  news: '/id/berita',
  gallery: '/id/galeri',
  registration: '/id/pendaftaran',
  'ppdb-wizard': '/id/pendaftaran/ppdb-smp-it-azzain',
  contact: '/id/kontak',
};
