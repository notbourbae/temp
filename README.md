# Sistem Informasi Dusun 🌿

Sistem Informasi Dusun adalah sebuah platform web interaktif dan responsif yang dirancang untuk mendigitalisasi informasi, potensi, dan administrasi di tingkat dusun. Aplikasi ini mempermudah penyampaian informasi dari pemerintah dusun ke masyarakat serta mempromosikan potensi lokal (UMKM, Wisata, dan Budaya) ke dunia luar.

## 🌟 Fitur Utama

Aplikasi ini dibagi menjadi beberapa modul utama yang dapat diakses oleh publik, serta dilengkapi dengan Panel Admin terintegrasi:

1. **Profil Dusun**
   - Sejarah, Visi & Misi, Demografi Penduduk, Luas Wilayah, dan Peta Lokasi.
   - Sambutan Kepala Dusun.
2. **Pemerintahan & Organisasi**
   - Struktur Organisasi Pejabat Dusun.
   - Daftar Organisasi Kemasyarakatan (Karang Taruna, PKK, dll.) beserta keanggotaannya.
   - Profil Tokoh Masyarakat/Sejarawan.
3. **Berita & Pengumuman**
   - Portal berita lokal dusun.
4. **Katalog UMKM**
   - Promosi produk lokal dari warga dusun.
   - Fitur Pendaftaran UMKM Mandiri (menunggu persetujuan Admin).
5. **Pariwisata & Budaya**
   - Direktori Destinasi Wisata dan Kalender Event.
   - Katalog Seni & Budaya Lokal.
6. **Potensi Sumber Daya Alam (SDA)**
   - Inventarisasi kekayaan alam (Pertanian, Perkebunan, Peternakan) lengkap dengan statistik produksi berkala menggunakan grafik interaktif.
7. **Panel Admin Terintegrasi**
   - Sistem manajemen konten lengkap (CRUD) langsung dari dalam aplikasi.
   - **Optimasi Egress Supabase:** Dilengkapi sistem *Smart Caching* (menyimpan data di browser selama 30 menit) dan *Auto Image Compression* (< 250 KB) untuk menghemat kuota bandwidth database secara signifikan.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan *stack* teknologi modern yang sangat cepat dan dioptimalkan:

- **Frontend Framework**: [React 19](https://react.dev/) dengan [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Backend / Database as a Service**: [Supabase](https://supabase.com/) (PostgreSQL & Storage)
- **Animasi**: [Motion](https://motion.dev/) (Framer Motion)
- **Ikonografi**: [Lucide React](https://lucide.dev/)
- **Grafik / Statistik**: [Recharts](https://recharts.org/)

---

## 🚀 Cara Menjalankan Proyek secara Lokal

### Persyaratan
Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas disarankan) dan **npm**.

### 1. Kloning Repositori & Instalasi Dependensi
Buka terminal dan jalankan perintah berikut di folder proyek:
```bash
npm install
```

### 2. Konfigurasi Environment Variables (Variabel Lingkungan)
Buat file bernama `.env` di *root directory* proyek (sejajar dengan `package.json`), dan tambahkan kunci akses Supabase Anda:
```env
VITE_SUPABASE_URL=https://proyek-anda.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...kunci_anon_anda_di_sini
```
*(Anda dapat menemukan kunci ini di halaman pengaturan API pada Dashboard Supabase Anda).*

### 3. Jalankan Development Server
```bash
npm run dev
```
Aplikasi akan berjalan secara lokal. Buka browser Anda dan akses URL yang ditampilkan di terminal (biasanya `http://localhost:3000` atau `http://localhost:5173`).

---

## 🔐 Cara Masuk ke Panel Admin
Untuk mengelola data (menambah, mengubah, atau menghapus konten):
1. Cari menu **Admin** (biasanya di *navbar* atau bagian paling bawah halaman / *footer*).
2. Masukkan kode sandi (passcode) Admin. *(Catatan: Passcode default yang tertera di kode saat ini adalah `Tosari2026`, sesuaikan jika sudah diubah).*
3. Setelah masuk, Anda dapat mengelola seluruh data melalui modul yang disediakan. Semua perubahan otomatis tersinkronisasi dengan Supabase.

---

## 💡 Arsitektur Optimalisasi Egress & Performa
Aplikasi ini secara khusus dirancang dengan memperhatikan kuota jaringan (egress) dan performa:
- **Lazy Loading & Pagination Limit**: Pengambilan data dari Supabase dibatasi (*limit*) agar tidak menarik ribuan baris data secara bersamaan.
- **Client-Side Caching**: Setelah data ditarik dari database, data akan di-*cache* (disimpan sementara) di *localStorage* pengguna. Pengunjung yang menelusuri berbagai halaman tidak akan terus-menerus me-*request* data yang sama ke server.
- **Image Compression**: Komponen `ImageUploader` di panel Admin secara agresif mengompres gambar (ke ukuran < 250 KB) secara otomatis sebelum dikirimkan ke server.

Dibuat dengan ❤️ untuk kemajuan desa/dusun di Indonesia.
