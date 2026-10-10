import { MediaItem, CmsSettings } from '@/types';

export const mediaMock: MediaItem[] = [
  {
    id: 'med-1',
    name: 'logo-azzain.png',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
    size: '245 KB',
    type: 'image/png',
    uploadedAt: '2026-02-10'
  },
  {
    id: 'med-2',
    name: 'banner-tabligh-akbar.jpg',
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    size: '1.2 MB',
    type: 'image/jpeg',
    uploadedAt: '2026-02-14'
  },
  {
    id: 'med-3',
    name: 'dokumentasi-santunan.jpg',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    size: '980 KB',
    type: 'image/jpeg',
    uploadedAt: '2026-02-20'
  }
];

export const cmsSettingsMock: CmsSettings = {
  website: {
    siteName: 'Yayasan Sosial Azhar Mandiri',
    tagline: 'Berbagi Ilmu, Menebar Manfaat',
    phone: '081907061806',
    email: 'yayasansosialazharmandiri@gmail.com',
    address: 'Dusun Tegal, Desa Aikmual, Kec. Praya, Kab. Lombok Tengah, NTB'
  },
  seo: {
    defaultMetaTitle: 'Yayasan Sosial Azhar Mandiri - Berbagi Ilmu, Menebar Manfaat',
    defaultMetaDescription: 'Portal resmi Yayasan Sosial Azhar Mandiri menaungi SMP IT AZZAIN, Majlis Taklim Raudatul Azhar, dan LSKA Raudatul Azhar.',
    keywords: 'Yayasan Sosial Azhar Mandiri, PPDB SMP IT AZZAIN, Majlis Taklim, LSKA, Lombok Tengah'
  },
  media: {
    maxUploadSizeMb: 5,
    allowedFormats: ['jpg', 'jpeg', 'png', 'webp', 'pdf']
  },
  system: {
    maintenanceMode: false,
    ppdbOpen: true,
    appVersion: 'v1.0.0-phase1'
  }
};
