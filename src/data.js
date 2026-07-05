import HeroImage from "/assets/hero-img.jpg";
import FotoRifqi from "/assets/foto-portofolio-rifqi.jpeg"
import cv from "/assets/CV_Rifqi.pdf";
import smkn9 from "/assets/smkn9.png";
import sija from "/assets/sija.png";

const Image = {
  HeroImage,
  FotoRifqi,
  cv,
};

export default Image;

import Tools1 from "/assets/tools/laravel.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/php.svg";
import Tools10 from "/assets/tools/vite.png";
import Tools11 from "/assets/tools/mysql.png";
import Tools12 from "/assets/tools/python.png";
import Tools13 from "/assets/tools/typescript.png";
import Tools14 from "/assets/tools/git.png";
import Tools15 from "/assets/tools/mongodb.png";
import Tools16 from "/assets/tools/solidity.svg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Laravel",
    ket: "Framework",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "PHP",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "MySQL",
    ket: "Databases",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Python",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "TypeScript",
    ket: "Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Git",
    ket: "Control System",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "MongoDB",
    ket: "Databases",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Solidity",
    ket: "Language",
    dad: "1600",
  },
];

import Proyek1 from "/assets/proyek/koperasi.png";
import Proyek2 from "/assets/proyek/sihadir.png";
import Proyek3 from "/assets/proyek/chees.png";
import Proyek4 from "/assets/proyek/mawquiz.png";
import Proyek5 from "/assets/proyek/store.png";
import Proyek6 from "/assets/proyek/wadah.png";
import Proyek7 from "/assets/proyek/pmb.png";
import Proyek8 from "/assets/proyek/stih.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Market Places Koperasi Sekolah",
    desk: "Platform Market Place komprehensif untuk Koperasi Sekolah. Dibangun menggunakan arsitektur REST API dengan Laravel sebagai Backend, serta Bootstrap dan jQuery di sisi Frontend. Sistem ini mendukung autentikasi SSO via Google OAuth, integrasi caching dengan Redis, serta fitur real-time chat interaktif antar pengguna menggunakan Socket.IO. Environment aplikasi di-deploy secara terisolasi menggunakan Docker.",
    tech: ["Laravel", "Bootstrap", "MySQL", "Redis", "Docker", "jQuery", "Socket.IO", "REST API", "OAuth"],
    link: "#",
    delay: "100",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Sistem Absensi SiHadir",
    desk: "Sistem Rekap Absensi Guru berbasis IoT. Absensi ditangkap menggunakan reader RFID dan mikrokontroler ESP32, di mana setiap pemindaian kartu akan mengirim request HTTP ke REST API aplikasi. Aplikasi ini dilengkapi dengan sistem CRUD untuk mengelola data guru (beserta jabatan dan mapel yang diajarkan), serta memiliki fitur export data laporan ke format XLSX, PDF, maupun cetak langsung (Print).",
    tech: ["Laravel", "Bootstrap", "MySQL", "jQuery", "LiteSpeed"],
    link: "https://sihadir.smkn9kotabekasi.sch.id",
    delay: "200",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Chess Game",
    desk: "Aplikasi permainan catur online sederhana yang interaktif. Aplikasi ini dilengkapi dengan fitur kustomisasi di mana pemain dapat mengatur atau menyusun posisi bidak catur secara bebas di atas papan. Selain itu, terdapat fitur 'flip board' untuk memutar papan catur dan sistem untuk menjalankan pergerakan permainan catur secara otomatis.",
    tech: ["Vite", "ReactJS", "TailwindCSS"],
    link: "https://rifqisija123.github.io/chess-games",
    delay: "300",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Mawquiz Game",
    desk: "Mawquiz Game adalah proyek aplikasi Web3 terdesentralisasi (dApp) yang menawarkan pengalaman belajar dan bermain yang interaktif. Sebagai aplikasi Web3, pengguna diharuskan untuk menghubungkan crypto wallet (seperti MetaMask) terlebih dahulu untuk dapat mengakses permainan. Aplikasi ini menyediakan mode permainan solo dan multipemain yang fleksibel untuk berbagai kebutuhan pengguna.",
    tech: ["TypeScript", "ReactJS", "Solidity", "Metamask"],
    link: "https://cv2ns-7iaaa-aaaac-aac3q-cai.icp0.io",
    delay: "400",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Store",
    desk: "Platform Store Game tempat pengguna dapat melakukan simulasi pembelian item atau top-up mata uang in-game seperti Diamond. Aplikasi ini merupakan website statis yang difokuskan pada pengembangan antarmuka (UI) interaktif dengan memanfaatkan fungsionalitas DOM secara langsung menggunakan HTML, CSS, JavaScript, dan jQuery murni.",
    tech: ["HTML", "CSS", "Javascript", "jQuery"],
    link: "https://rifqitarmono.github.io/rifqistore/",
    delay: "500",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Inovasi WADAH",
    desk: "Aplikasi sistem vending machine pintar untuk pembelian Kopi atau Teh dengan opsi volume (ml) dan harga yang dapat disesuaikan. Transaksi pembayaran terintegrasi dengan Payment Gateway Midtrans (QRIS). Sistem web ini terhubung langsung dengan mikrokontroler ESP32 via HTTP untuk mengontrol Relay (pompa air) dan membaca Water Flow Sensor sesuai pesanan. Aplikasi juga dilengkapi dengan fitur Chatbot pintar (dibangun dengan Python & model Ollama) untuk memandu pengguna.",
    tech: ["Laravel", "TailwindCSS", "MySQL", "Midtrans", "Python", "Ollama", "ESP32"],
    link: "https://wadah.smkn9kotabekasi.sch.id",
    delay: "600",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "PMB Kampus Sekolah Tinggi Ilmu Hukum",
    desk: "Sistem Informasi Penerimaan Mahasiswa Baru (PMB) komprehensif yang dirancang untuk mengoptimalkan strategi promosi kampus. Aplikasi ini dilengkapi dengan pemetaan geospasial menggunakan Leaflet.js untuk melacak lokasi asal sekolah pendaftar, beserta dashboard analitik (chart/diagram) persentase sebaran datanya. Sistem ini memfasilitasi manajemen kampanye O2O (Online to Offline); mencakup pelacakan konversi promosi online (Media Sosial, Website, Referensi) lengkap dengan manajemen anggarannya, serta pencatatan efektivitas promosi offline seperti kunjungan sekolah dan event. Sangat mendukung pengambilan keputusan strategis yang berbasis data (data-driven).",
    tech: ["Laravel", "TailwindCSS", "MySQL", "jQuery", "Redis"],
    link: "https://pmb.axiona.id/",
    delay: "700",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Company Profile Kampus Sekolah Tinggi Ilmu Hukum",
    desk: "Website Company Profile interaktif untuk Sekolah Tinggi Ilmu Hukum (STIH) yang dirancang sebagai pusat informasi digital komprehensif kampus. Platform ini menyajikan informasi lengkap seputar profil institusi, mulai dari Visi & Misi, Struktur Organisasi, hingga detail Akademik dan Program Studi. Dilengkapi juga dengan showcase Capaian & Prestasi, direktori Fasilitas, Testimoni Alumni, serta portal informasi Penerimaan Mahasiswa Baru (PMB).",
    tech: ["VueJS", "TailwindCSS", "jQuery"],
    link: "https://stih.axiona.id/",
    delay: "800",
  },
];

import sertifikat1 from "/assets/sertifikat/164_Sertifikat_Mikrokontroler_Arduino_Uno.png";
import sertifikat2 from "/assets/sertifikat/167_Sertifikat_Dasar-Dasar_Pemrograman_C++.png";
import sertifikat3 from "/assets/sertifikat/240_Sertifikat_Robotic_IoT.png";
import sertifikat4 from "/assets/sertifikat/245_Sertifikat_Robotic_Mikrokontroler.png";
import sertifikat5 from "/assets/sertifikat/537_Sertifikat_Basic_Figma_Pembuatan_Aplikasi_Mobile.png";
import sertifikat6 from "/assets/sertifikat/544_Mikrokontroler_Sertifikat_Raspberry_Pi.png";
import sertifikat7 from "/assets/sertifikat/api.png";
import sertifikat8 from "/assets/sertifikat/dicoding1.png";
import sertifikat9 from "/assets/sertifikat/dicoding2.png";
import sertifikat10 from "/assets/sertifikat/dicoding3.png";
import sertifikat11 from "/assets/sertifikat/git.png";
import sertifikat12 from "/assets/sertifikat/laravel.png";
import sertifikat13 from "/assets/sertifikat/mongodb.png";
import sertifikat14 from "/assets/sertifikat/pemrograman.png";
import sertifikat15 from "/assets/sertifikat/terminal.png";
import sertifikat16 from "/assets/sertifikat/ibm.png";
import sertifikat17 from "/assets/sertifikat/kihajarstem.png";
import sertifikat18 from "/assets/sertifikat/desain_uiux.png";
import sertifikat19 from "/assets/sertifikat/datacenter.png";
import sertifikat20 from "/assets/sertifikat/ngfw.png";
import sertifikat21 from "/assets/sertifikat/linux.png";

export const listSertifikat = [
  {
    id: 1,
    gambar: sertifikat1,
    delay: "100",
  },
  {
    id: 2,
    gambar: sertifikat2,
    delay: "200",
  },
  {
    id: 3,
    gambar: sertifikat3,
    delay: "300",
  },
  {
    id: 4,
    gambar: sertifikat4,
    delay: "400",
  },
  {
    id: 5,
    gambar: sertifikat5,
    delay: "500",
  },
  {
    id: 6,
    gambar: sertifikat6,
    delay: "600",
  },
  {
    id: 7,
    gambar: sertifikat7,
    delay: "700",
  },
  {
    id: 8,
    gambar: sertifikat8,
    delay: "800",
  },
  {
    id: 9,
    gambar: sertifikat9,
    delay: "900",
  },
  {
    id: 10,
    gambar: sertifikat10,
    delay: "1000",
  },
  {
    id: 11,
    gambar: sertifikat11,
    delay: "1100",
  },
  {
    id: 12,
    gambar: sertifikat12,
    delay: "1200",
  },
  {
    id: 13,
    gambar: sertifikat13,
    delay: "1300",
  },
  {
    id: 14,
    gambar: sertifikat14,
    delay: "1400",
  },
  {
    id: 15,
    gambar: sertifikat15,
    delay: "1500",
  },
  {
    id: 16,
    gambar: sertifikat16,
    delay: "1600",
  },
  {
    id: 17,
    gambar: sertifikat17,
    delay: "1700",
  },
  {
    id: 18,
    gambar: sertifikat18,
    delay: "1800",
  },
  {
    id: 19,
    gambar: sertifikat19,
    delay: "1900",
  },
  {
    id: 20,
    gambar: sertifikat20,
    delay: "2000",
  },
  {
    id: 21,
    gambar: sertifikat21,
    delay: "2100",
  },
];

export const listPendidikan = [
  {
    id: 1,
    instansi: "SMKN 9 Kota Bekasi",
    jurusan: "Sistem Informasi Jaringan dan Aplikasi (SIJA)",
    tahun: "Juli 2022 - Mei 2026",
    logoSekolah: smkn9,
    logoJurusan: sija,
    deskripsi: "Program unggulan 4 tahun yang setara dengan Diploma 1 (D1), fokus pada pengembangan perangkat lunak, infrastruktur jaringan, cloud computing, dan Internet of Things (IoT). Menerapkan metode Project-Based Learning (PBL) dengan kurikulum yang mencakup 3 tahun pembelajaran intensif dan 1 tahun praktik industri guna mencetak tenaga profesional yang siap kerja di ekosistem teknologi modern.",
    poinPembelajaran: [
      "Mempelajari Sistem Internet of Things (IoT)",
      "Mempelajari Konfigurasi Dasar Mikrotik",
      "Mempelajari Pengembangan Aplikasi Web dan Mobile",
      "Mempelajari Penyambungan Fiber Optic",
      "Mempelajari Perakitan Komputer (PC)",
      "Mempelajari Desain UI/UX",
      "Mempelajari Pemrograman Dasar"
    ],
    delay: "600",
  }
];

export const listPengalaman = [
  {
    id: 1,
    posisi: "Software Engineer",
    perusahaan: "PT. Semesta Mahadata Indonesia",
    tahun: "Juni 2025 - Maret 2026",
    deskripsi: "Mengembangkan aplikasi Management Barang (SIMAS) serta sistem PMB dan Akademik STIH. Bertanggung jawab dalam perancangan database, implementasi fitur CRUD kompleks, integrasi API menggunakan Laravel Sanctum & Swagger, serta pengembangan UI yang responsif.",
    delay: "600",
  },
  {
    id: 2,
    posisi: "Backend Developer",
    perusahaan: "PT. Mirrorim Jaya",
    tahun: "Juli 2024 - Oktober 2024",
    deskripsi: "Merancang alur kerja sistem isi ulang air otomatis dan mengembangkan sistem pembayaran menggunakan Midtrans. Melakukan desain DFD serta analisis proses bisnis secara end-to-end untuk efisiensi sistem.",
    delay: "800",
  }
];

export const listSoftSkills = [
  {
    id: 1,
    deskripsi: "Mampu bekerja dengan tim maupun individual",
    delay: "100",
  },
  {
    id: 2,
    deskripsi: "Mampu bertanggung jawab dan memiliki komitmen terhadap pekerjaan",
    delay: "200",
  },
  {
    id: 3,
    deskripsi: "Menyelesaikan pekerjaan dengan tepat waktu",
    delay: "300",
  },
  {
    id: 4,
    deskripsi: "Mampu berkomunikasi dengan jelas, baik secara lisan maupun tulisan",
    delay: "400",
  },
  {
    id: 5,
    deskripsi: "Mampu memecahkan masalah pada pekerjaan dan berfikir kritis",
    delay: "500",
  },
  {
    id: 6,
    deskripsi: "Mampu beradaptasi dengan cepat terhadap lingkungan kerja yang dinamis",
    delay: "600",
  },
  {
    id: 7,
    deskripsi: "Mampu bekerja di bawah tekanan dan juga terbiasa dengan target",
    delay: "700",
  },
];
