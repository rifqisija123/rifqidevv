import HeroImage from "/assets/hero-img.jpg";
import cv from "/assets/CV_Rifqi.pdf";
import smkn9 from "/assets/smkn9.png";
import sija from "/assets/sija.png";

const Image = {
  HeroImage,
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

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Market Places Koperasi Sekolah",
    desk: "Website Market Place ini saya buat dengan menggunakan tech stack Bootstrap untuk Frontend dan Laravel untuk Backend, serta MySQL untuk Databases.",
    tech: ["Laravel", "Bootstrap", "MySQL", "Redis"],
    link: "#",
    delay: "100",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Sistem Absensi SiHadir",
    desk: "Website ini dibuat untuk melihat data rekap absensi guru, yang mana API nya ini terkoneksi dengan alat-alat IoT menggunakan RFID dan dibuat juga dengan Laravel dan Bootstrap.",
    tech: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://sihadir.smkn9kotabekasi.sch.id",
    delay: "200",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Chess Game",
    desk: "Website sederhana yang dimana player bisa bermain catur dengan bot (computer). Website ini dibangun dengan Vite + ReactJS dan TailwindCSS untuk Frontend.",
    tech: ["Vite", "ReactJS", "TailwindCSS"],
    link: "https://rifqisija123.github.io/chess-games",
    delay: "300",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Mawquiz Game",
    desk: "Proyek Web3 pertama saya yang dimana website ini menawarkan mode solo dan multipemain yang fleksibel sekaligus meningkatkan pengalaman belajar dan bermain untuk berbagai kebutuhan pengguna.",
    tech: ["TypeScript", "ReactJS", "Solidity", "Metamask"],
    link: "https://cv2ns-7iaaa-aaaac-aac3q-cai.icp0.io",
    delay: "400",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Store",
    desk: "Website store adalah website dimana pengguna bisa top up game seperti diamond untuk kebutuhan item di dalam game tersebut. Website ini saya buat hanya web statis saja dengan menggunakan HTML, CSS, dan Javascript.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://rifqitarmono.github.io/rifqistore/",
    delay: "500",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Inovasi WADAH",
    desk: "Website WADAH ini dibuat untuk pembelian air Kopi atau Teh dengan sistem pembayaran QRIS dengan menggunakan metode Payment Gateway Midtrans. Harga terjangkau sesuai dengan masing-masing volume",
    tech: ["Laravel", "TailwindCSS", "MySQL", "Midtrans"],
    link: "https://wadah.smkn9kotabekasi.sch.id",
    delay: "600",
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
