import { useState } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import Tilt from "react-parallax-tilt"
import ParticlesBg from "./components/ParticlesBg"
import DataImage from "./data"
import { listTools, listProyek, listSertifikat, listPendidikan, listPengalaman } from "./data"

function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <ParticlesBg />
      {/* Home section */}
      <div className="hero grid md:grid-cols-2 pt-10 xl:gap-0 gap-6 grid-cols-1">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="My Profile" className="w-10 rounded-md" loading="lazy" />
            <q>Hidup harus tetap maju, jangan pernah mundur💪😁</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-2">Rifqi Ainur Rahman Tarmono</h1>
          <div className="text-2xl font-bold text-violet-500 mb-6 h-[40px]">
            <TypeAnimation
              sequence={[
                'Fullstack Web Developer',
                2000,
                'IoT Developer',
                2000,
                'AI Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-base/loose mb-6 opacity-50">
            Saya adalah lulusan SMKN 9 Kota Bekasi dengan jurusan Sistem Informasi Jaringan dan Aplikasi.
            Saya memiliki ketertarikan dalam pengembangan Web, IoT, dan teknologi lainnya. Di Jurusan ini saya
            sedang mendalami sebuah divisi yaitu Fullstack Web Developer. Saya telah mendalami banyak
            bahasa pemrograman, library, dan framework.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href={DataImage.cv} className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Lihat CV Saya <i className="ri-arrow-right-fill ml-1 ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ml-1 ri-lg"></i></a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center items-center"
        >
          <motion.img 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={DataImage.HeroImage} 
            alt="Hero Image" 
            className="w-[500px] md:ml-auto rounded-md" 
            loading="lazy" 
          />
        </motion.div>
      </div>

      {/* About section */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg shadow-lg shadow-black/30 flex flex-col gap-6" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-3xl/tight font-bold mb-4">Tentang Saya</h1>
          <p className="text-base/loose mb-4 opacity-50">
            Saya Lulusan SMK dengan Jurusan Sistem Informasi Jaringan dan Aplikasi (SIJA).
            Saya mempunyai pengalaman 1 tahun sebagai Software Engineer di berbagai perusahan atau instansi sebelumnya.
            Saya memiliki pengalaman yang sesuai dengan kualifikasi yang dicari oleh perusahaan khususnya dalam bidang IT, termasuk pengembangan perangkat lunak,
            pengolahan data, dan manajemen sistem, yang relevan dengan kebutuhan perusahaan.
            Saya suka mencoba dan mempelajari hal baru yang belum pernah saya coba.
            Selain itu, saya mampu mengatur waktu dengan baik, dapat bekerja secara individu maupun dalam tim, serta menyelesaikan pekerjaan dengan tepat waktu.
            Saya juga telah menciptakan banyak project yaitu Membuat Sistem
            Absensi, Membuat Running Text, Membuat Smart Trash, Membuat Aplikasi Kasir, Membuat Aplikasi Market Place Sekolah, Membuat Aplikasi Relawan, dan Membuat Aplikasi WADAH.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-12 rounded-md" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience mt-32" id="experience">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <i className="ri-briefcase-line text-violet-500"></i> Pengalaman Kerja
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {listPengalaman.map((exp) => (
            <Tilt key={exp.id} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02}>
              <div className="p-6 bg-zinc-800 rounded-xl border border-zinc-700 hover:border-violet-500 transition-colors h-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={exp.delay}>
                <h3 className="text-xl font-bold mb-1">{exp.posisi}</h3>
                <h4 className="text-violet-500 font-medium mb-2">{exp.perusahaan}</h4>
                <span className="text-xs bg-violet-700/20 text-violet-400 px-3 py-1 rounded-full whitespace-nowrap inline-block mb-4">{exp.tahun}</span>
                <p className="text-sm opacity-50 leading-relaxed">{exp.deskripsi}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="education mt-32" id="education">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <i className="ri-graduation-cap-line text-violet-500"></i> Pendidikan
        </h1>
        <div className="flex flex-col gap-6">
          {listPendidikan.map((edu) => (
            <Tilt key={edu.id} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.01}>
              <div className="p-6 bg-zinc-800 rounded-xl border border-zinc-700 hover:border-violet-500 transition-all group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={edu.delay}>
                <h3 className="text-xl font-bold mb-1">{edu.instansi}</h3>
                <h4 className="text-violet-500 font-medium mb-2">{edu.jurusan}</h4>
                <span className="text-xs bg-violet-700/20 text-violet-400 px-3 py-1 rounded-full whitespace-nowrap inline-block mb-4">{edu.tahun}</span>
                <p className="text-sm opacity-50 leading-relaxed mb-8">{edu.deskripsi}</p>
                
                <div className="flex gap-6 items-center">
                  <div className="p-4 bg-white/5 rounded-2xl border border-zinc-700/50 group-hover:border-violet-500/50 transition-colors">
                    <img src={edu.logoSekolah} alt="Logo Sekolah" className="w-20 h-20 object-contain" />
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-zinc-700/50 group-hover:border-violet-500/50 transition-colors">
                    <img src={edu.logoJurusan} alt="Logo Jurusan" className="w-20 h-20 object-contain" />
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech mt-32 py-10" id="tech">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tech Stack Saya</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tech stack yang biasa saya pakai untuk membuat proyek</p>
        <div className="tech-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <Tilt key={tool.id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group h-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tech Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Sertifikat section */}
      <div className="sertifikat mt-32 py-10" id="sertifikat">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Sertifikat</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini adalah beberapa sertifikat pencapaian saya</p>
        <div className="sertifikat-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {listSertifikat.map((sertifikat) => (
            <div 
              key={sertifikat.id} 
              className="p-4 bg-zinc-800 rounded-lg shadow-lg shadow-black/30 flex flex-col h-full overflow-hidden group cursor-pointer" 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay={sertifikat.delay}
              onClick={() => setSelectedImage(sertifikat.gambar)}
            >
              <div className="relative overflow-hidden rounded-md h-full">
                <img 
                  src={sertifikat.gambar} 
                  alt="Sertifikat Image" 
                  loading="lazy" 
                  className="group-hover:scale-110 transition-all duration-500 h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <i className="ri-search-2-line text-white text-3xl animate__animated animate__zoomIn animate__faster"></i>
                  <p className="text-white font-semibold text-sm">Lihat Detail</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proyek section */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {listProyek.map((proyek) => (
            <Tilt key={proyek.id} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
              <div className="p-4 bg-zinc-800 rounded-lg shadow-lg shadow-black/30 flex flex-col h-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.delay}>
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" className="rounded-md mb-4" />
                <div className="flex flex-col h-full justify-between flex-grow">
                  <h1 className="text-2xl font-bold mb-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proyek.tech.map((tech, index) => (
                      <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-xs" key={index}>{tech}</p>
                    ))}
                  </div>
                  <div className="text-center mt-auto">
                    <a href={proyek.link} target="_blank" rel="noopener noreferrer" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 transition-colors">Lihat Website</a>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikan saran dan pesan anda</p>
        <form action="https://formsubmit.co/rifqiainurrahmant@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-lg shadow-lg shadow-black/30" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="10" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Modal Popup Gambar */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate__animated animate__fadeIn animate__faster"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full flex justify-center items-center">
            <img 
              src={selectedImage} 
              alt="Sertifikat Detail" 
              className="max-h-[90vh] max-w-full rounded-lg shadow-2xl animate__animated animate__zoomIn animate__faster" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default App
