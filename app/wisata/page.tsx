import type { Metadata } from "next";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import {
  FaCheckDouble,
  FaChevronLeft,
  FaChevronRight,
  FaLocationDot,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Wisata - Indorihlah",
  description:
    "Jelajahi destinasi bersejarah Islam, budaya dunia, dan keindahan alam bersama Indorihlah.",
};

const reasons = [
  {
    title: "Pendampingan Profesional",
    description:
      "Setiap perjalanan didampingi tour leader berpengalaman yang memahami kebutuhan wisata islami.",
    icon: FaUserTie,
  },
  {
    title: "Destinasi Bernuansa Sejarah",
    description:
      "Fokus pada tempat-tempat bersejarah Islam dan budaya dunia, memberikan makna lebih dalam setiap kunjungan.",
    icon: FaLocationDot,
  },
  {
    title: "Paket Fleksibel dan Terjangkau",
    description:
      "Pilihan paket wisata yang dapat disesuaikan dengan kebutuhan dan kenyamanan Anda.",
    icon: FaCheckDouble,
  },
  {
    title: "Layanan Terpercaya",
    description:
      "Indorihlah berkomitmen memberikan pengalaman perjalanan yang aman, nyaman, dan penuh keberkahan.",
    icon: FaUserShield,
  },
];

const destinations = [
  {
    title: "Tur Jejak Nabi Madinah dan Makkah",
    description:
      "Mengunjungi situs-situs bersejarah seperti Masjid Quba, Jabal Uhud, dan Gua Hira yang sarat nilai spiritual.",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&h=800&q=85",
    alt: "Ka'bah dan jamaah di Masjidil Haram",
  },
  {
    title: "Wisata Sejarah Andalusia, Spanyol",
    description:
      "Menelusuri kejayaan Islam di masa lalu melalui kunjungan ke Alhambra, Masjid Cordoba, dan kota-kota penuh cerita.",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&h=800&q=85",
    alt: "Pemandangan kota bersejarah di Andalusia",
  },
  {
    title: "Eksplorasi Turki: Negeri Dua Benua",
    description:
      "Menikmati keindahan Istanbul, Cappadocia, dan situs-situs Islam bersejarah lainnya.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&h=800&q=85",
    alt: "Masjid bersejarah di Istanbul",
  },
];

function HeroSection() {
  return (
    <section
      aria-labelledby="wisata-hero-title"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-slate-900 px-5 py-24 text-white sm:px-8 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(4, 10, 20, 0.72), rgba(4, 10, 20, 0.42)), url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=2400&h=1500&q=90')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
            Perjalanan Islami yang Menginspirasi dan Bermakna
          </p>
          <h1
            id="wisata-hero-title"
            className="text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl"
          >
            Temukan Keindahan Wisata Bersama Indorihlah
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Indorihlah mengajak Anda merasakan pengalaman wisata berbeda, lebih
            dari sekadar liburan. Kami menghadirkan perjalanan ke destinasi
            bersejarah Islam, lokasi penuh nilai budaya, hingga keindahan alam
            dunia, dengan sentuhan layanan profesional dan nuansa spiritual yang
            mendalam.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReasonsSection() {
  return (
    <section
      aria-labelledby="wisata-reasons-title"
      className="bg-[#faf9f6] py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Perjalanan dengan makna
          </p>
          <h2
            id="wisata-reasons-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Mengapa Memilih Indorihlah Untuk Perjalanan Wisata Anda?
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
          {reasons.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center px-3 text-center"
            >
              <span className="mb-5 inline-flex size-14 items-center justify-center text-slate-900">
                <Icon aria-hidden="true" className="size-8" />
              </span>
              <h3 className="text-xl font-bold leading-snug text-slate-900">
                {title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  return (
    <section
      aria-labelledby="destinations-title"
      className="bg-white py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Jelajahi bersama kami
          </p>
          <h2
            id="destinations-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Destinasi Wisata Pilihan Kami
          </h2>
        </div>

        <div className="relative px-0 sm:px-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-1 top-[30%] z-10 hidden size-9 items-center justify-center rounded-full bg-white/80 text-slate-900/35 shadow-sm lg:flex"
          >
            <FaChevronLeft className="size-3" />
          </span>
          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {destinations.map((destination) => (
              <article
                key={destination.title}
                className="mx-auto w-full max-w-xl text-center"
              >
                <div
                  role="img"
                  aria-label={destination.alt}
                  className="w-full bg-slate-100 bg-cover bg-center"
                  style={{
                    aspectRatio: "3 / 2",
                    backgroundImage: `url('${destination.image}')`,
                  }}
                />
                <h3 className="mx-auto mt-5 max-w-sm text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                  {destination.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                  {destination.description}
                </p>
              </article>
            ))}
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-1 top-[30%] z-10 hidden size-9 items-center justify-center rounded-full bg-white/80 text-slate-900/35 shadow-sm lg:flex"
          >
            <FaChevronRight className="size-3" />
          </span>
        </div>

        <div
          aria-label="Halaman 1 dari 3"
          className="mt-10 flex items-center justify-center gap-2"
        >
          <span className="size-2 rounded-full bg-blue-600" />
          <span className="size-2 rounded-full bg-slate-300" />
          <span className="size-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}

export default function WisataPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <HeroSection />
        <ReasonsSection />
        <DestinationsSection />
      </main>
      <ContactSection />
    </>
  );
}