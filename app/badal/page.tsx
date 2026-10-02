import type { Metadata } from "next";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import {
  FaArrowRight,
  FaCamera,
  FaCircleCheck,
  FaFileSignature,
  FaShieldHalved,
} from "react-icons/fa6";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import BadalVideoPlayer from "./video-player";

export const metadata: Metadata = {
  title: "Badal - Indorihlah",
  description:
    "Badal Haji & Badal Umroh Aman dan Terpercaya di Indorihlah. Solusi tepat untuk menggantikan ibadah keluarga yang berhalangan.",
};

const benefits = [
  {
    title: "Aman",
    description:
      "Ibadah dilaksanakan langsung oleh mutawwif yang telah memiliki tasreh haji (visa resmi), sesuai ketentuan yang berlaku.",
    icon: FaShieldHalved,
  },
  {
    title: "Amanah",
    description:
      "Terdapat akad tertulis dan perjanjian tiga pihak agar ruang lingkup layanan dan amanah keluarga disampaikan dengan jelas.",
    icon: FaFileSignature,
  },
  {
    title: "Nyaman",
    description:
      "Prinsip satu niat untuk satu orang dijaga dalam pelaksanaan ibadah badal.",
    icon: FaCircleCheck,
  },
  {
    title: "Transparan & Terlapor",
    description:
      "Setelah prosesi selesai, keluarga menerima video, foto di tiap rukun, serta sertifikat digital sebagai laporan.",
    icon: FaCamera,
  },
];

function HeroSection() {
  return (
    <section
      aria-labelledby="badal-hero-title"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-24 text-center text-white sm:px-8 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2, 6, 12, 0.60), rgba(2, 6, 12, 0.66)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2400&h=1500&q=90')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
          Amanah ibadah untuk orang terkasih
        </p>
        <h1
          id="badal-hero-title"
          className="max-w-4xl text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          Badal Haji &amp; Badal Umroh Aman dan Terpercaya di Indorihlah
        </h1>
        <p className="mt-6 max-w-3xl text-base italic leading-7 text-white/90 sm:text-lg sm:leading-8">
          “Tunaikanlah haji untuk orang-orang yang tidak mampu (secara fisik).”
          (HR. Al-Bukhari, no. 1852; Muslim, no. 1334)
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-9 sm:w-auto sm:flex-row">
          <a
            href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20badal%20haji%20atau%20umroh."
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            Konsultasi Gratis
            <HiArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <a
            href="#daftar"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white bg-black/35 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            Daftar Sekarang
            <HiArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutBadalSection() {
  return (
    <section
      aria-labelledby="about-badal-title"
      className="bg-white py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div
          role="img"
          aria-label="Sketsa suasana Ka'bah di Masjidil Haram"
          className="min-h-[280px] bg-slate-100 bg-cover bg-center sm:min-h-[380px] lg:min-h-[440px]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(241, 245, 249, 0.12), rgba(15, 23, 42, 0.2)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1400&h=1100&q=85')",
          }}
        />
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Ibadah pengganti
          </p>
          <h2
            id="about-badal-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Apa itu Badal ?
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <strong className="font-semibold text-slate-900">Badal</strong>{" "}
            adalah istilah untuk haji atau umroh “pengganti”. Intinya, seseorang
            melaksanakan ibadah ke Tanah Suci atas nama orang lain yang secara
            permanen tidak mampu berangkat, misalnya karena kondisi fisik yang
            tidak memungkinkan atau telah wafat.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Pelaksanaan badal dilakukan dengan niat atas nama orang yang
            diwakilkan dan mengikuti tuntunan serta ketentuan ibadah yang
            berlaku. Keluarga dapat berkonsultasi terlebih dahulu untuk
            memahami proses dan persyaratannya.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section
      aria-labelledby="badal-benefits-title"
      className="relative overflow-hidden bg-blue-500 py-20 text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
            Layanan Badal Indorihlah
          </p>
          <h2
            id="badal-benefits-title"
            className="text-3xl font-bold leading-tight sm:text-4xl"
          >
            Mengapa Badal Haji Dan Badal Umroh Di Indorihlah ?
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center px-3 text-center"
            >
              <span className="mb-5 inline-flex size-14 items-center justify-center rounded-xl border border-white/30 bg-white/10">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-blue-50 sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegistrationSection() {
  return (
    <section
      id="daftar"
      aria-labelledby="badal-cta-title"
      className="bg-white py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Langkah ibadah Anda
          </p>
          <h2
            id="badal-cta-title"
            className="max-w-xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Wujudkan Ibadah Haji dan Umroh Impian dengan Badal Tepercaya
            Indorihlah
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Percayakan prosesi badal haji atau badal umroh Anda kepada
            Indorihlah. Kami menyiapkan wakil bersertifikat, pelaksanaan sesuai
            sunnah, serta laporan lengkap untuk keluarga.
          </p>
          <a
            href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20mendaftar%20layanan%20badal."
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            Klik Untuk Daftar
            <FaArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <BadalVideoPlayer />
      </div>
    </section>
  );
}

export default function BadalPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <HeroSection />
        <AboutBadalSection />
        <BenefitsSection />
        <RegistrationSection />
      </main>
      <ContactSection />
    </>
  );
}