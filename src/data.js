import HeroImage from "/assets/hero-img.jpg";

const Image = {
  HeroImage,
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
import Proyek6 from "/assets/proyek/portfolio.png";

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
    nama: "Web Portofolio",
    desk: "Website Portofolio ini adalah website yang saya buat untuk menampilkan portofolio saya, dan juga sebagai tempat untuk belajar NextJS dan TailwindCSS.",
    tech: ["NextJS", "TailwindCSS", "Framermotion"],
    link: "https://rifqitarmono.vercel.app",
    delay: "600",
  },
];
