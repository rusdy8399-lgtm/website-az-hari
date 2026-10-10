# PRD --- Yayasan Sosial Al-Azhar Mandiri

**Project:** Website Digital Yayasan Sosial Al-Azhar Mandiri\
**Tagline:** Berbagi Ilmu, Menebar Manfaat\
**Version:** 1.1\
**Status:** Development Reference\
**Primary Language:** Bahasa Indonesia\
**Secondary Language:** English

------------------------------------------------------------------------

## 1. Ringkasan Produk

Yayasan Sosial Al-Azhar Mandiri membutuhkan website resmi yang **modern,
profesional, elegan, cepat, responsive, aman, dan mudah dikelola**.

Website merupakan website induk yayasan yang menaungi:

1.  **SMP IT AZZAIN** --- Pendidikan
2.  **MAJLIS TAKLIM RAUDATUL AZHAR** --- Dakwah & Pembinaan
3.  **LSKA RAUDATUL AZHAR** --- Sosial, Kemanusiaan & Pemberdayaan

Platform terdiri dari:

-   Website publik
-   CMS/Admin Dashboard
-   Pendaftaran online/PPDB
-   Berita dan kegiatan
-   Program yayasan
-   Galeri
-   Kontak
-   Bilingual Indonesia/English

Fokus utama adalah membangun **website profesional yang dapat digunakan
klien**, dengan fondasi teknis yang siap dikembangkan menjadi sistem
digital yayasan.

------------------------------------------------------------------------

# 2. Tujuan Produk

Website harus:

-   Meningkatkan kredibilitas yayasan.
-   Menjadi pusat informasi seluruh lembaga.
-   Menampilkan program dan kegiatan secara profesional.
-   Menyediakan PPDB online untuk SMP IT AZZAIN.
-   Memungkinkan admin mengelola konten melalui CMS.
-   Mendukung Bahasa Indonesia dan English.
-   Mobile-first dan responsive.
-   SEO-friendly.
-   Memiliki keamanan yang baik.
-   Memiliki performa tinggi.
-   Dapat dikembangkan tanpa rewrite total.
-   Tidak bergantung pada platform hosting tertentu.

------------------------------------------------------------------------

# 3. Prinsip Produk

1.  **Modern**
2.  **Professional**
3.  **Elegant**
4.  **Trustworthy**
5.  **Clean**
6.  **Mobile-first**
7.  **Performance-first**
8.  **Secure by design**
9.  **SEO-friendly**
10. **Accessible**
11. **Modular**
12. **Maintainable**
13. **Deployable ke Vercel maupun VPS**
14. **Tidak vendor-lock-in**

------------------------------------------------------------------------

# 4. Target Pengguna

## 4.1 Pengunjung Umum

-   Mengenal yayasan.
-   Melihat lembaga.
-   Membaca berita.
-   Melihat program.
-   Melihat galeri.
-   Menghubungi yayasan.

## 4.2 Calon Peserta Didik / Orang Tua

-   Membaca informasi PPDB.
-   Mengisi formulir.
-   Upload dokumen.
-   Mendapat nomor pendaftaran.
-   Mengecek status pendaftaran.

## 4.3 Admin Yayasan

-   Mengelola konten yayasan.
-   Mengelola lembaga.
-   Mengelola berita.
-   Mengelola program.
-   Mengelola galeri.
-   Mengelola pengguna.
-   Melihat statistik.

## 4.4 Admin SMP IT AZZAIN

-   Mengelola PPDB.
-   Memverifikasi pendaftar.
-   Memeriksa dokumen.
-   Mengubah status.
-   Memberikan catatan.
-   Mengelola konten SMP.

## 4.5 Admin Majlis Taklim

Mengelola konten Majlis Taklim Raudatul Azhar.

## 4.6 Admin LSKA

Mengelola konten LSKA.

## 4.7 Super Admin

Memiliki akses penuh.

------------------------------------------------------------------------

# 5. Struktur Website Publik

## 5.1 Navbar

Menu utama:

-   Beranda
-   Tentang Yayasan
-   Lembaga
-   Program
-   Berita & Kegiatan
-   Galeri
-   Kontak

CTA:

-   **Pendaftaran Online**
-   **Donasi Sekarang** --- hanya jika fitur donasi benar-benar
    diperlukan pada fase berikutnya.

Language switcher:

-   🇮🇩 ID
-   🇬🇧 EN

Navbar harus sticky, responsive, dan memiliki mobile menu yang
profesional.

------------------------------------------------------------------------

# 6. Homepage

Urutan section:

1.  Top information bar
2.  Navbar
3.  Hero
4.  Quick access/category strip
5.  Tentang Yayasan
6.  Lembaga di Bawah Naungan
7.  Program Yayasan
8.  Impact/Statistics
9.  Berita & Kegiatan
10. Galeri
11. CTA Pendaftaran/Partisipasi
12. Footer

Hero harus memiliki:

-   Headline kuat
-   Subheadline
-   CTA utama
-   CTA sekunder
-   Visual berkualitas tinggi
-   Overlay/gradient yang elegan
-   Responsive mobile

------------------------------------------------------------------------

# 7. Tentang Yayasan

Konten:

-   Profil singkat
-   Visi
-   Misi
-   Nilai yayasan
-   Sejarah singkat
-   Struktur/pengurus bila tersedia

Halaman:

`/id/tentang-yayasan`

English:

`/en/about`

------------------------------------------------------------------------

# 8. Lembaga di Bawah Naungan

Tampilkan tiga lembaga dalam card premium:

### SMP IT AZZAIN

**Lembaga Pendidikan**

### MAJLIS TAKLIM RAUDATUL AZHAR

**Lembaga Dakwah & Pembinaan**

### LSKA RAUDATUL AZHAR

**Lembaga Sosial, Kemanusiaan & Pemberdayaan**

Setiap lembaga memiliki:

-   Foto/visual
-   Icon
-   Deskripsi
-   CTA
-   Halaman detail

------------------------------------------------------------------------

# 9. Halaman Detail Lembaga

## SMP IT AZZAIN

Route:

`/id/lembaga/smp-it-azzain`

English:

`/en/institutions/smp-it-azzain`

Section:

-   Hero
-   Profil
-   Visi & Misi
-   Program
-   Keunggulan
-   Berita
-   Galeri
-   Informasi PPDB
-   Kontak
-   CTA Pendaftaran

## MAJLIS TAKLIM RAUDATUL AZHAR

Section:

-   Hero
-   Profil
-   Visi & Misi
-   Program kajian
-   Kegiatan
-   Berita
-   Galeri
-   Kontak

## LSKA RAUDATUL AZHAR

Section:

-   Hero
-   Profil
-   Visi & Misi
-   Program sosial
-   Kemanusiaan
-   Pemberdayaan
-   Berita
-   Galeri
-   Kontak

------------------------------------------------------------------------

# 10. Program

Program awal:

-   Pendidikan Islam
-   Dakwah & Kajian
-   Pembinaan Keagamaan
-   Kegiatan Sosial
-   Santunan
-   Beasiswa
-   Pemberdayaan Masyarakat
-   Kemanusiaan

Setiap program memiliki:

-   Judul
-   Slug
-   Kategori
-   Institusi
-   Gambar
-   Deskripsi
-   Konten detail
-   Status publish
-   Tanggal
-   Metadata SEO

------------------------------------------------------------------------

# 11. Berita & Kegiatan

Kategori:

-   Yayasan
-   SMP IT Azzain
-   Majlis Taklim
-   LSKA
-   Pendidikan
-   Dakwah
-   Sosial

Fields:

-   Judul
-   Slug
-   Thumbnail
-   Category
-   Institution
-   Excerpt
-   Content
-   Author
-   Published date
-   Status
-   SEO title
-   SEO description

Fitur:

-   Listing
-   Detail
-   Filter
-   Search
-   Pagination
-   Related posts

------------------------------------------------------------------------

# 12. Galeri

Kategori:

-   Semua
-   Yayasan
-   SMP IT Azzain
-   Majlis Taklim
-   LSKA

Fields:

-   Judul
-   Foto
-   Caption
-   Institution
-   Category
-   Date
-   Alt text
-   Status publish

Fitur:

-   Filter
-   Grid
-   Lightbox
-   Responsive image
-   Lazy loading

------------------------------------------------------------------------

# 13. Pendaftaran Online / PPDB

Menu:

**Pendaftaran Online**

Halaman:

`/id/pendaftaran`

Pilihan:

1.  SMP IT AZZAIN --- PPDB
2.  Majlis Taklim --- Pendaftaran/Keanggotaan
3.  LSKA --- Pendaftaran/Permohonan Layanan

Fokus implementasi utama:

**PPDB SMP IT AZZAIN**

------------------------------------------------------------------------

# 14. PPDB Wizard

Tahapan:

1.  Informasi Pendaftaran
2.  Data Calon Siswa
3.  Data Orang Tua/Wali
4.  Dokumen
5.  Review
6.  Success

## Data Calon Siswa

-   NIK
-   NISN
-   Nama lengkap
-   Nama panggilan
-   Tempat lahir
-   Tanggal lahir
-   Jenis kelamin
-   Agama
-   Alamat
-   Desa/Kelurahan
-   Kecamatan
-   Kabupaten/Kota
-   Provinsi

## Data Orang Tua/Wali

-   Nama ayah
-   Pekerjaan ayah
-   Nomor WhatsApp ayah
-   Nama ibu
-   Pekerjaan ibu
-   Nomor WhatsApp ibu
-   Nama wali bila diperlukan
-   Kontak wali

## Dokumen

-   KK
-   Akta kelahiran
-   Ijazah/SKL
-   Pas foto

Semua file harus:

-   Validasi tipe
-   Validasi MIME
-   Validasi ukuran
-   Disimpan private
-   Tidak berada di folder public

------------------------------------------------------------------------

# 15. Nomor Pendaftaran

Format contoh:

`AZZ-2026-000123`

Ketentuan:

-   Unique
-   Dibuat server-side
-   Tidak menggunakan database ID sebagai nomor publik
-   Tidak boleh digunakan sebagai satu-satunya kredensial untuk membuka
    data sensitif

------------------------------------------------------------------------

# 16. Status Pendaftaran

Minimal:

1.  Menunggu Verifikasi
2.  Sedang Diverifikasi
3.  Data Perlu Diperbaiki
4.  Lulus Administrasi
5.  Diterima
6.  Ditolak

Setiap perubahan status dicatat dalam history.

------------------------------------------------------------------------

# 17. Cek Status

Calon peserta dapat melihat:

-   Nomor pendaftaran
-   Status
-   Tanggal pendaftaran
-   Informasi perbaikan
-   Catatan admin
-   Timeline

Data pribadi sensitif tidak boleh ditampilkan secara berlebihan.

------------------------------------------------------------------------

# 18. Admin / CMS

Route:

`/admin`

Dashboard:

-   Total pendaftar
-   Pendaftar baru
-   Menunggu verifikasi
-   Data perlu diperbaiki
-   Lulus administrasi
-   Berita
-   Program
-   Galeri
-   Statistik

Modules:

-   Dashboard
-   Foundation
-   Institutions
-   Programs
-   News
-   Categories
-   Gallery
-   Registrations
-   Users
-   Roles
-   Settings
-   Audit Logs

------------------------------------------------------------------------

# 19. Role & Permission

Roles:

``` text
SUPER_ADMIN
ADMIN_YAYASAN
ADMIN_SMP_AZZAIN
ADMIN_MAJLIS
ADMIN_LSKA
```

Authorization wajib dilakukan **server-side**.

Frontend hanya menampilkan menu sesuai role, tetapi server tetap wajib
memeriksa permission pada setiap operasi sensitif.

------------------------------------------------------------------------

# 20. Bilingual

Bahasa:

-   Indonesia
-   English

Default:

`id`

URL:

``` text
/id
/en
```

Contoh:

``` text
/id/tentang-yayasan
/en/about
```

Gunakan translation dictionary/layer.

SEO:

-   lang
-   hreflang
-   localized metadata
-   canonical
-   sitemap

------------------------------------------------------------------------

# 21. Design Direction

Website harus terlihat **modern, profesional, premium, elegan, dan
terpercaya**.

Bukan sekadar template.

## Visual Style

-   Islamic modern
-   Minimalis
-   Editorial
-   Premium
-   Banyak whitespace
-   Typography kuat
-   Foto berkualitas
-   Micro-interactions ringan
-   Animasi tidak berlebihan
-   Card modern
-   Rounded corners secukupnya
-   Subtle shadows
-   Islamic geometric pattern sebagai aksen, bukan dekorasi berlebihan

## Color Palette

``` text
Deep Emerald  #064E3B
Dark Emerald  #043F32
Gold          #D99A20
Warm Gold     #E5A928
White         #FFFFFF
Off White     #FAF9F5
Cream         #F7F5EF
Dark Text     #102A43
Muted Text    #667085
```

## Typography

Heading:

-   Playfair Display / Cormorant

Body:

-   Inter / Plus Jakarta Sans

## Layout

-   Desktop max width 1200--1280px
-   Mobile-first
-   Consistent spacing
-   Consistent component system
-   Strong hierarchy
-   Professional CTA

------------------------------------------------------------------------

# 22. Technical Stack

## Frontend

-   Next.js
-   TypeScript
-   Tailwind CSS
-   shadcn/ui bila diperlukan

## Backend

Gunakan kemampuan server-side Next.js:

-   Route Handlers
-   Server Actions bila sesuai
-   Server Components

Tidak perlu backend framework terpisah.

## Database

**MongoDB Atlas**

Database access:

**MongoDB Native Driver**

Validation:

**Zod**

## Authentication

Authentication harus dibuat **server-side** dan tidak menggunakan
Firebase.

Gunakan solusi authentication yang portable dan sesuai dengan Next.js,
misalnya Auth.js, dengan session/cookie yang aman.

Jangan membuat sistem password/session secara manual jika library yang
sesuai tersedia.

## Storage

Gunakan **Object Storage** yang portable dan dapat digunakan dari VPS
maupun environment preview.

Gunakan untuk:

-   Foto
-   PDF
-   Dokumen PPDB
-   File upload

MongoDB hanya menyimpan metadata file.

**Jangan gunakan Firebase Storage.**

------------------------------------------------------------------------

# 23. Hosting Strategy

## Development

``` text
Antigravity
↓
Localhost
```

## Client Review

``` text
GitHub
↓
Vercel Preview
↓
Client Review
```

Vercel hanya digunakan sebagai environment preview/review selama proses
pengembangan.

## Production

Setelah website disetujui:

``` text
Domain Klien
↓
Cloudflare
↓
VPS / Node.js Hosting Klien
↓
Next.js
↓
MongoDB Atlas
↓
Object Storage
```

Source code harus tetap sama.

Prinsip:

**Build once, deploy anywhere.**

------------------------------------------------------------------------

# 24. Environment Variables

Contoh:

``` env
MONGODB_URI=
MONGODB_DB=
AUTH_SECRET=
STORAGE_ENDPOINT=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
```

Secret:

-   Tidak boleh di Git.
-   Tidak boleh di frontend.
-   Tidak boleh menggunakan `NEXT_PUBLIC_` untuk secret.
-   Disimpan melalui environment server.

Jangan pernah menggunakan:

``` env
NEXT_PUBLIC_MONGODB_URI=
```

------------------------------------------------------------------------

# 25. Security Requirements

## Application

Wajib:

-   Server-side authorization
-   RBAC
-   Zod validation
-   Rate limiting
-   Secure cookies
-   Password hashing bila password digunakan
-   Session security
-   CSRF protection sesuai arsitektur
-   Audit log
-   Security headers
-   Error handling
-   Tidak membocorkan secret
-   Tidak membocorkan data sensitif melalui error response

## Database

-   TLS
-   Strong credentials
-   Least privilege
-   Network access restriction
-   Backup
-   Monitoring
-   Tidak ada direct browser connection

## File

Dokumen PPDB:

-   Private storage
-   Tidak berada di `/public`
-   Tidak menggunakan predictable public URL
-   Access melalui authorization server-side
-   Validasi MIME
-   Validasi ukuran
-   Generated storage key
-   Tidak mempercayai filename dari user

------------------------------------------------------------------------

# 26. Performance

Target:

-   Fast first load
-   Optimized images
-   Lazy loading
-   Responsive images
-   Cache public content
-   Pagination
-   Minimal database query
-   Server rendering/static rendering sesuai kebutuhan

Konten publik harus memanfaatkan cache/CDN sehingga traffic besar tidak
langsung membebani MongoDB.

------------------------------------------------------------------------

# 27. SEO

Wajib:

-   Metadata
-   Title
-   Description
-   Open Graph
-   Canonical
-   Sitemap
-   Robots.txt
-   Structured data bila relevan
-   Semantic HTML
-   Alt text
-   Heading hierarchy
-   Localized SEO

------------------------------------------------------------------------

# 28. Accessibility

Minimal:

-   Semantic HTML
-   Keyboard navigation
-   Focus state
-   Contrast yang baik
-   Alt text
-   Accessible form
-   Label input
-   Error message jelas
-   ARIA hanya jika diperlukan

Target mendekati WCAG 2.1 AA.

------------------------------------------------------------------------

# 29. Mock Data --- PHASE 1

Phase 1 menggunakan mock data.

``` text
mock/
├── foundation.ts
├── institutions.ts
├── programs.ts
├── news.ts
├── gallery.ts
├── registrations.ts
└── statistics.ts
```

Mock data harus terpisah dari production data access.

------------------------------------------------------------------------

# 30. Struktur Project

Contoh:

``` text
src/
├── app/
│   ├── [locale]/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── layout/
│   ├── navbar/
│   ├── footer/
│   ├── hero/
│   ├── institutions/
│   ├── programs/
│   ├── news/
│   ├── gallery/
│   ├── registration/
│   ├── forms/
│   ├── admin/
│   ├── cms/
│   └── ui/
│
├── lib/
│   ├── auth/
│   ├── mongodb/
│   ├── storage/
│   ├── validation/
│   └── utils/
│
├── mock/
├── types/
└── config/
```

Struktur dapat disesuaikan dengan implementasi Next.js selama
modularitas tetap terjaga.

------------------------------------------------------------------------

# 31. PHASE 1 --- Frontend/UI/UX

Fokus:

-   Public website
-   Homepage
-   Semua halaman lembaga
-   Program
-   Berita
-   Galeri
-   Kontak
-   Pendaftaran UI
-   PPDB wizard UI
-   Check status UI
-   Bilingual
-   Admin/CMS UI
-   Mock data
-   Responsive
-   Accessibility
-   SEO dasar

### Phase 1 tidak menggunakan:

-   Firebase
-   Firebase Authentication
-   Firebase Firestore
-   Firebase Storage
-   Production MongoDB
-   Production API
-   Production authentication
-   Production VPS
-   Production domain
-   Production storage
-   Payment gateway
-   WhatsApp gateway

------------------------------------------------------------------------

# 32. PHASE 2 --- Backend & Database

Setelah user memberikan:

**LANJUT PHASE 2**

Implementasi:

-   MongoDB Atlas
-   Collections
-   Indexes
-   Database access layer
-   Zod validation
-   Authentication
-   RBAC
-   CMS CRUD
-   PPDB backend
-   Object Storage
-   Audit log
-   Registration status
-   Security controls

------------------------------------------------------------------------

# 33. PHASE 3 --- Integration

Integrasi:

-   Frontend → MongoDB
-   CMS → MongoDB
-   PPDB → MongoDB
-   Upload → private object storage
-   Authentication
-   Authorization
-   Status checking
-   Notification infrastructure bila diperlukan

------------------------------------------------------------------------

# 34. PHASE 4 --- Production

Meliputi:

-   Security audit
-   Rate limiting
-   Backup
-   Error monitoring
-   Performance optimization
-   SEO final
-   Accessibility testing
-   Mobile testing
-   Browser testing
-   VPS deployment
-   Domain
-   Cloudflare
-   SSL
-   Production acceptance testing

------------------------------------------------------------------------

# 35. Acceptance Criteria Phase 1

-   [ ] Homepage selesai
-   [ ] Semua route publik bekerja
-   [ ] Tidak ada broken link
-   [ ] Responsive mobile
-   [ ] Responsive desktop
-   [ ] Bilingual bekerja
-   [ ] PPDB wizard bekerja sebagai UI
-   [ ] Check status bekerja menggunakan mock data
-   [ ] Admin dashboard tersedia
-   [ ] CMS UI tersedia
-   [ ] Mock data terpisah
-   [ ] Tidak ada TypeScript error
-   [ ] Tidak ada critical lint error
-   [ ] Tidak ada critical console error
-   [ ] Loading state
-   [ ] Empty state
-   [ ] Error state
-   [ ] Form validation UI
-   [ ] Accessibility dasar
-   [ ] SEO metadata dasar
-   [ ] Visual profesional
-   [ ] Tidak menggunakan Firebase
-   [ ] Tidak membutuhkan database production
-   [ ] Berjalan di localhost
-   [ ] Dapat dideploy ke Vercel untuk client review
-   [ ] Tetap portable untuk deployment ke VPS

------------------------------------------------------------------------

# 36. Aturan Untuk AI Coding Agent

AI coding agent wajib:

1.  Membaca PRD sebelum melakukan perubahan besar.
2.  Mengikuti phase development.
3.  Fokus pada scope yang sedang dikerjakan.
4.  Tidak membuat backend production pada Phase 1.
5.  Tidak membuat database production pada Phase 1.
6.  Tidak menggunakan Firebase.
7.  Tidak menambahkan Firebase Authentication.
8.  Tidak menambahkan Firebase Storage.
9.  Tidak menambahkan Firebase Firestore.
10. Tidak mengganti stack tanpa persetujuan.
11. Tidak mengubah arsitektur tanpa alasan.
12. Tidak hardcode secret.
13. Tidak membuat credential.
14. Tidak membuat dependency pada Vercel untuk production.
15. Menggunakan reusable components.
16. Menghindari duplikasi kode.
17. Menjaga TypeScript.
18. Menjaga responsive design.
19. Menjaga accessibility.
20. Menjaga visual tetap modern dan profesional.
21. Setelah perubahan besar, lakukan lint/typecheck/build yang relevan.
22. Jangan menjalankan command destruktif tanpa persetujuan.

------------------------------------------------------------------------

# 37. Budget & Infrastructure Philosophy

Target harga proyek:

**Rp4.000.000**

Prinsip:

### Development

-   Localhost
-   GitHub
-   Mock data
-   Tidak perlu infrastructure production

### Client Review

-   Vercel Preview
-   Tidak perlu domain production
-   Tidak perlu VPS production

### Production

-   Domain milik klien
-   VPS/Node.js hosting sesuai kebutuhan
-   MongoDB Atlas sesuai kebutuhan
-   Cloudflare Free terlebih dahulu
-   Object Storage sesuai kebutuhan

**Jangan membeli infrastructure production sebelum website disetujui
klien.**

------------------------------------------------------------------------

# 38. Ownership

Aset production idealnya atas nama yayasan:

-   Domain
-   Hosting/VPS
-   Cloudflare
-   MongoDB Atlas
-   Object Storage
-   Email domain

Developer/Rumadev mendapatkan akses sesuai kebutuhan pekerjaan.

------------------------------------------------------------------------

# 39. Out of Scope

Tidak termasuk dalam scope awal kecuali diminta:

-   Sistem akademik lengkap
-   Absensi
-   Payroll
-   Accounting
-   PPOB
-   Payment gateway
-   WhatsApp automation
-   SMS gateway
-   Mobile app native
-   AI chatbot
-   AI admissions
-   Advanced analytics
-   SaaS multi-tenant

------------------------------------------------------------------------

# 40. Definition of Done

Project selesai apabila:

1.  Scope disetujui klien.
2.  Website public selesai.
3.  CMS selesai sesuai scope.
4.  PPDB selesai sesuai scope.
5.  Database terintegrasi.
6.  Authentication aman.
7.  File storage aman.
8.  Domain aktif.
9.  HTTPS aktif.
10. Backup tersedia.
11. Production berjalan.
12. Tidak ada blocker/error kritis.
13. Dokumentasi dasar tersedia.
14. Aset production diserahkan sesuai kesepakatan.

------------------------------------------------------------------------

# 41. Final Product Vision

Website harus menjadi **platform digital resmi yayasan**, bukan sekadar
landing page.

``` text
YAYASAN SOSIAL AL-AZHAR MANDIRI
                │
       ┌────────┼────────┐
       ↓        ↓        ↓
     SMP      MAJLIS    LSKA
    AZZAIN    TAKLIM
       │
       ↓
      PPDB
       │
       ↓
     MongoDB
       │
       ↓
      CMS
       │
       ↓
DIGITAL FOUNDATION
```

Target akhir:

**Modern + Profesional + Aman + Cepat + Mudah Dikelola + Siap
Berkembang**

------------------------------------------------------------------------

## END OF PRD
