import { Institution } from '@/types';

export const institutionsMock: Institution[] = [
  {
    id: 'smp-it-azzain',
    slug: 'smp-it-azzain',
    name: 'SMP IT AZZAIN',
    category: 'Lembaga Pendidikan',
    tagline: 'Mencetak Generasi Qur’ani, Cerdas, dan Berkarakter Pemimpin',
    description:
      'SMP Islam Terpadu Azzain memadukan kurikulum nasional merdeka belajar dengan kurikulum kepesantrenan terpadu, tahfidzul Qur’an mutqin, serta penguasaan sains dan bahasa asing (Arab & Inggris).',
    vision:
      'Menjadi sekolah rujukan pencetak cendekiawan muslim berakhlak mulia, berprestasi global, dan hafidz Qur’an.',
    missions: [
      'Menyelenggarakan program Tahfidzul Qur’an terukur dengan target minimal 5 juz mutqin.',
      'Menerapkan pembelajaran sains dan teknologi berbasis riset dan nalar kritis islami.',
      'Membina adab, kepemimpinan islami, kemandirian, dan kedisiplinan santri.',
      'Membangun lingkungan bilingual bahasa Arab dan Inggris dalam keseharian sekolah.'
    ],
    features: [
      {
        title: 'Tahfizh Al-Qur’an Mutqin',
        description: 'Bimbingan intensif halaqah tahfizh bersanad dengan target hafalan 5–10 Juz.',
        icon: 'BookOpen'
      },
      {
        title: 'Bilingual Environment',
        description: 'Pembiasaan komunikasi harian dalam bahasa Arab dan Inggris secara aktif.',
        icon: 'Languages'
      },
      {
        title: 'Laboratorium Sains & IT',
        description: 'Fasilitas praktikum modern untuk penguasaan robotika, koding, dan riset sains.',
        icon: 'Laptop'
      },
      {
        title: 'Ekstrakurikuler Holistik',
        description: 'Panahan sunnah, beladiri, jurnalistik, kepemimpinan, dan kepanduan Pramuka IT.',
        icon: 'Compass'
      }
    ],
    programs: [
      {
        title: 'Program Tahfizh Reguler & Intensif',
        desc: 'Halaqah Qur’an subuh dan maghrib dengan metode talaqqi dan simaan berkala.'
      },
      {
        title: 'Kelas Sains & Riset Berbasis IT',
        desc: 'Pembelajaran STEM terintegrasi nalar tauhid dan eksperimen saintifik.'
      },
      {
        title: 'Latihan Kepemimpinan Santri (LKS)',
        desc: 'Pengembangan mental kepemimpinan, keorganisasian, dan public speaking islami.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    logo: 'GraduationCap',
    address: 'Dusun Tegal, Desa Aikmual, Kec. Praya, Kab. Lombok Tengah, NTB 83511',
    phone: '081907061806',
    email: 'yayasansosialazharmandiri@gmail.com',
    hasPpdb: true
  },
  {
    id: 'majlis-taklim-raudatul-azhar',
    slug: 'majlis-taklim-raudatul-azhar',
    name: 'Majlis Taklim Raudatul Azhar',
    category: 'Lembaga Dakwah & Pembinaan',
    tagline: 'Menempa Hati, Memperdalam Ilmu, Mengokohkan Ukhuwah',
    description:
      'Wadah thalabul ‘ilmi yang menyelenggarakan kajian tafsir Al-Qur’an, fiqih ibadah, tazkiyatun nafs, parenting islami, serta pembinaan mualaf dan remaja masjid secara terstruktur.',
    vision:
      'Membangun masyarakat yang berpegang teguh pada Al-Qur’an dan Sunnah dengan pemahaman yang lurus serta berakhlak mulia.',
    missions: [
      'Menyelenggarakan kajian rutin tematik dan berseri yang aplikatif bagi jamaah.',
      'Membuka kelas tahsin dan tajwid bersanad untuk dewasa dan orang tua.',
      'Mengadakan pelatihan fiqih jenazah, parenting islami, dan pra-nikah.',
      'Mengembangkan dakwah digital dan media syiar yang ramah keluarga.'
    ],
    features: [
      {
        title: 'Kajian Rutin Ahad Pagi & Malam',
        description: 'Majelis ilmu tematik bersama para asatidz kompeten dengan audiens luas.',
        icon: 'BookMarked'
      },
      {
        title: 'Halaqah Tahsin Dewasa',
        description: 'Bimbingan tartil dan makhorijul huruf bersertifikat untuk bapak & ibu.',
        icon: 'Award'
      },
      {
        title: 'Pembinaan Keluarga Sakinah',
        description: 'Konsultasi syariah keluarga dan workshop parenting islami.',
        icon: 'HeartHandshake'
      },
      {
        title: 'Biro Konsultasi Syariah',
        description: 'Layanan tanya jawab fiqih harian, waris, dan muamalah kontemporer.',
        icon: 'ShieldCheck'
      }
    ],
    programs: [
      {
        title: 'Tabligh Akbar Bulanan & Safari Dakwah',
        desc: 'Syiar keagamaan berkala menjangkau pelosok desa dan masjid sekitar.'
      },
      {
        title: 'Kelas Intensif Fiqih Muamalah & Ibadah',
        desc: 'Kurikulum ringkas fiqih thaharah, shalat, zakat, dan muamalah harian.'
      },
      {
        title: 'Bina Remaja Masjid & Pemuda Hijrah',
        desc: 'Wadah mentoring kreatif generasi muda menjauhi pergaulan bebas dan narkoba.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    logo: 'BookOpen',
    address: 'Dusun Tegal, Desa Aikmual, Kec. Praya, Kab. Lombok Tengah, NTB 83511',
    phone: '081907061806',
    email: 'yayasansosialazharmandiri@gmail.com',
    hasPpdb: false
  },
  {
    id: 'lska-raudatul-azhar',
    slug: 'lska-raudatul-azhar',
    name: 'LSKA Raudatul Azhar',
    category: 'Lembaga Sosial & Kemanusiaan',
    tagline: 'Menyalurkan Kebaikan, Mengangkat Martabat Kaum Dhuafa',
    description:
      'Lembaga Sosial Kemanusiaan & Agama (LSKA) berkhidmat dalam penghimpunan dan penyaluran ZISWAF, santunan anak yatim/piatu, tanggap bencana alam, layanan ambulans dhuafa, serta pemberdayaan ekonomi mustahik mandiri.',
    vision:
      'Menjadi lembaga filantropi islam terdepan yang profesional, amanah, dan berdampak nyata dalam pengentasan kemiskinan.',
    missions: [
      'Menghimpun dan mengelola dana ZISWAF secara transparan dan akuntabel.',
      'Menjamin perlindungan dan beasiswa pendidikan bagi anak yatim dan dhuafa binaan.',
      'Merespons bencana alam dan kondisi darurat kemanusiaan secara sigap.',
      'Melatih dan memberikan modal usaha bergulir bagi keluarga mustahik produktif.'
    ],
    features: [
      {
        title: 'Santunan Rutin Yatim & Dhuafa',
        description: 'Penyaluran berkala uang saku dan paket sembako bagi ratusan anak asuh.',
        icon: 'Heart'
      },
      {
        title: 'Tanggap Darurat Bencana (SIGAP)',
        description: 'Unit reaksi cepat bantuan logistik, dapur umum, dan evakuasi musibah.',
        icon: 'Flame'
      },
      {
        title: 'Layanan Ambulans Gratis',
        description: 'Armada siaga 24 jam untuk pengantaran pasien dhuafa dan jenazah.',
        icon: 'Activity'
      },
      {
        title: 'Pemberdayaan UMKM Mustahik',
        description: 'Pendampingan modal kerja mikro bebas riba dan pelatihan keahlian mandiri.',
        icon: 'TrendingUp'
      }
    ],
    programs: [
      {
        title: 'Program Orang Tua Asuh Beasiswa Pintar',
        desc: 'Menghubungkan donatur dengan anak yatim berprestasi hingga lulus jenjang menengah.'
      },
      {
        title: 'Tebar Berkah Pangan & Sembako Dhuafa',
        desc: 'Distribusi pangan pokok reguler bagi keluarga lansia dan prasejahtera.'
      },
      {
        title: 'Klinik & Khitanan Massal Gratis',
        desc: 'Bakti sosial pengobatan berkala dan khitanan untuk anak-anak pelosok.'
      }
    ],
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    logo: 'HeartHandshake',
    address: 'Dusun Tegal, Desa Aikmual, Kec. Praya, Kab. Lombok Tengah, NTB 83511',
    phone: '081907061806',
    email: 'yayasansosialazharmandiri@gmail.com',
    hasPpdb: false
  }
];
