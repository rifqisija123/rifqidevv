import DataImage from "./data"
import { listTools, listProyek } from "./data"

function App() {

  return (
    <>
      {/* Home section */}
      <div className="hero grid md:grid-cols-2 pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="My Profile" className="w-10 rounded-md" loading="lazy" />
            <q>Hidup harus tetap maju, jangan pernah mundur💪😁</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">Rifqi Ainur Rahman Tarmono</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya seorang siswa SMKN 9 Kota Bekasi Kelas 12, jurusan Sistem Informasi Jaringan dan Aplikasi.
            Saya memiliki ketertarikan dalam pengembangan Web, IoT, dan teknologi lainnya. Di Jurusan ini saya
            sedang mendalami sebuah divisi yaitu Web Developer. Saya telah mendalami banyak
            bahasa pemrograman, library, dan framework.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="../public/assets/cvrifqi.png" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Lihat CV Saya <i className="ri-arrow-right-fill ml-1 ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ml-1 ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto rounded-md animate__animated animate__fadeInRight animate__delay-2s" loading="lazy" />
      </div>

      {/* About section */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg shadow-lg shadow-black/30 flex flex-col gap-6" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-3xl/tight font-bold mb-4">Tentang Saya</h1>
          <p className="text-base/loose mb-4 opacity-50">
            Saya Bersekolah di SMKN 9 Kota Bekasi Kelas 12 Jurusan Sistem Informasi Jaringan dan Aplikasi (SIJA).
            Saya di bidang IT saya memegang Role di Web Developer dalam menangani sebuah Website atau Aplikasi.
            Saya telah banyak mencoba keahlian dan berbagai macam projek yang pernah saya sudah pegang.
            Contohnya saya mendalami Bahasa Pemrograman seperti C++, JavaScript, PHP, TypeScript, Python.
            Saya juga telah menciptakan banyak project yaitu Membuat Sistem
            Absensi, Membuat Running Text, Membuat Smart Trash, Membuat Aplikasi Kasir, Membuat Aplikasi Market Place Sekolah.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-12 rounded-md" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tech mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tech Stack Saya</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tech stack yang biasa saya pakai untuk membuat proyek</p>
          <div className="tech-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tech Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyek section */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-lg shadow-lg shadow-black/30 flex flex-col h-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.delay}>
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div className="flex flex-col h-full justify-between flex-grow">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proyek.tech.map((tech, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tech}</p>
                  ))}
                </div>
                <div className="text-center mt-auto">
                  <a href={proyek.link} className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            </div>
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
    </>
  )
}

export default App
