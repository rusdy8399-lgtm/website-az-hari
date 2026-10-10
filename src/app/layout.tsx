import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';

// Heavy condensed sans-serif — bold institutional headlines
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

// Clean readable sans-serif for body text
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Yayasan Sosial Azhar Mandiri | Berbagi Ilmu, Menebar Manfaat',
    template: '%s | Yayasan Sosial Azhar Mandiri',
  },
  description:
    'Website resmi Yayasan Sosial Azhar Mandiri (Praya, Lombok Tengah, NTB). Lembaga sosial kemanusiaan, keagamaan, pendidikan, dan pemberdayaan masyarakat.',
  keywords: [
    'Yayasan Sosial Azhar Mandiri',
    'Yayasan Sosial Azhar Mandiri Tegal',
    'Yayasan Sosial Lombok Tengah',
    'Santunan Anak Yatim Praya',
    'Bantuan Sosial NTB',
    'Pelayanan Sosial Dhuafa',
    'Pemberdayaan Ummat',
    'PRO UMMAT'
  ],
  authors: [{ name: 'Yayasan Sosial Azhar Mandiri' }],
  creator: 'Yayasan Sosial Azhar Mandiri',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Yayasan Sosial Azhar Mandiri',
    title: 'Yayasan Sosial Azhar Mandiri | Berbagi Ilmu, Menebar Manfaat',
    description:
      'Membangun kepedulian, menghadirkan pelayanan, dan menumbuhkan kemandirian untuk masyarakat yang lebih sejahtera.',
  },
};

import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#1A1A2E] antialiased relative">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
