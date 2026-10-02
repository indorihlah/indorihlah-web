import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import {
  FaCompass,
  FaHotel,
  FaMoneyBillWave,
  FaUserShield,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Tentang Kami | Indorihlah Utama",
  description:
    "Kenali Indorihlah, sahabat perjalanan ibadah Haji dan Umroh yang amanah, nyaman, dan profesional.",
};

const values = [
  {
    title: "Pelayanan Amanah",
    description:
      "Kami mengutamakan kejujuran dan tanggung jawab dalam setiap langkah pelayanan kepada jamaah.",
    icon: FaUserShield,
  },
  {
    title: "Harga Transparan",
    description:
      "Semua biaya disampaikan secara jelas tanpa ada biaya tersembunyi, agar jamaah merasa tenang dan percaya.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Pendamping Berpengalaman",
    description:
      "Setiap keberangkatan didampingi oleh tim dan pembimbing ibadah berpengalaman serta berlisensi resmi.",
    icon: FaCompass,
  },
  {
    title: "Perjalanan Nyaman",
    description:
      "Kami memastikan setiap aspek perjalanan, akomodasi, transportasi, dan pelayanan berjalan lancar dan nyaman.",
    icon: FaHotel,
  },
];

function HeroSection() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-24 text-center text-white sm:px-8 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2, 6, 12, 0.60), rgba(2, 6, 12, 0.66)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2400&h=1500&q=90')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
          Sahabat perjalanan ibadah Anda
        </p>
        <h1
          id="about-hero-title"
          className="text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          Tentang Indorihlah
        </h1>
        <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-white/90 sm:text-lg sm:leading-8">
          Mitra perjalanan ibadah Anda menuju Tanah Suci dengan aman, nyaman,
          dan penuh berkah.
        </p>
        <Link
          href="/umroh"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Lihat Paket Umroh
        </Link>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section
      aria-labelledby="who-we-are-title"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium leading-6 text-blue-700">
            Lebih dari Dua Dekade Melayani Jamaah Haji &amp; Umroh Indonesia
          </p>
          <h2
            id="who-we-are-title"
            className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Siapa Kami
          </h2>
          <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <p>
              Indorihlah adalah sahabat bagi masyarakat Indonesia yang ingin
              menunaikan ibadah <strong className="text-slate-900">Haji dan Umroh</strong>.
              Dengan pengalaman lebih dari <strong className="text-slate-900">20 tahun</strong>,
              kami tumbuh bersama jamaah dan memahami kebutuhan perjalanan
              ibadah dari persiapan hingga kembali ke rumah.
            </p>
            <p>
              Kami menjalankan setiap amanah dengan komitmen untuk memberikan
              layanan yang <strong className="text-slate-900">amanah, nyaman, dan profesional</strong>.
              Kejelasan informasi dan perhatian terhadap kebutuhan jamaah
              menjadi bagian penting dari setiap perjalanan.
            </p>
            <p>
              Melalui tim yang berpengalaman dan pendampingan yang terarah,
              kami terus berupaya menghadirkan <strong className="text-slate-900">pelayanan terbaik dan kemudahan</strong>{" "}
              dalam proses perjalanan ibadah Anda.
            </p>
            <p>
              Bagi kami, setiap keberangkatan adalah hubungan yang berlanjut.
              Kami ingin menjadi <strong className="text-slate-900">sahabat perjalanan ibadah Anda</strong>{" "}
              yang menemani langkah dengan perhatian dan ketulusan.
            </p>
          </div>
        </div>
        <div
          role="img"
          aria-label="Sekelompok jamaah mengenakan ihram di Masjidil Haram"
          className="min-h-[320px] rounded-2xl bg-slate-200 bg-cover bg-center shadow-xl shadow-slate-900/10 sm:min-h-[440px]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(15, 23, 42, 0.03), rgba(15, 23, 42, 0.12)), url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&h=1500&q=90')",
          }}
        />
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section
      aria-labelledby="vision-title"
      className="bg-white py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Arah dan komitmen kami
          </p>
          <h2
            id="vision-title"
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Visi Kami
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700 sm:text-lg">
            Menjadi penyelenggara perjalanan ibadah Haji dan Umroh terpercaya di
            Indonesia yang memberikan kenyamanan, keamanan, dan keberkahan bagi
            setiap jamaah menuju Tanah Suci.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-slate-200 pt-12 sm:mt-16 sm:pt-14">
          <h3 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Misi Kami
          </h3>
          <ul className="mt-7 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-3 size-2 shrink-0 rounded-full bg-blue-600" />
              <span>Memberikan pelayanan perjalanan ibadah yang profesional, ramah, dan berorientasi pada kebutuhan jamaah.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-3 size-2 shrink-0 rounded-full bg-blue-600" />
              <span>Menyediakan bimbingan manasik yang menyeluruh agar jamaah lebih siap menjalankan rangkaian ibadah.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-3 size-2 shrink-0 rounded-full bg-blue-600" />
              <span>Menjaga kemitraan resmi dan terpercaya untuk mendukung perjalanan yang aman dan tertata.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-3 size-2 shrink-0 rounded-full bg-blue-600" />
              <span>Memprioritaskan kenyamanan, keamanan, dan ketenangan jamaah dalam setiap tahap perjalanan.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-3 size-2 shrink-0 rounded-full bg-blue-600" />
              <span>Menumbuhkan kepercayaan dan menjaga amanah melalui komunikasi yang jujur serta pelayanan yang bertanggung jawab.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section
      aria-labelledby="values-title"
      className="bg-[#f4f9f9] py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Prinsip pelayanan
          </p>
          <h2
            id="values-title"
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Nilai Kami
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Kami berpegang pada nilai-nilai yang menjadi fondasi dalam setiap
            pelayanan kepada jamaah, demi menjaga amanah dan keberkahan
            perjalanan ibadah.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
          {values.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex flex-col items-center px-2 text-center">
              <span className="mb-4 inline-flex size-14 items-center justify-center text-slate-900">
                <Icon aria-hidden="true" className="size-8" />
              </span>
              <h3 className="text-lg font-bold leading-snug text-slate-900">
                {title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <HeroSection />
        <WhoWeAreSection />
        <VisionMissionSection />
        <ValuesSection />
      </main>
      <ContactSection />
    </>
  );
}