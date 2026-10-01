import type { Metadata } from "next";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import {
  FaHourglassHalf,
  FaStamp,
  FaSuitcaseRolling,
} from "react-icons/fa6";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import PackageCarousel from "./package-carousel";

export const metadata: Metadata = {
  title: "Umroh - Indorihlah",
  description:
    "Umroh Nyaman dan Penuh Makna Bersama Indorihlah. Nikmati perjalanan umroh yang tertata rapi, sesuai sunnah, dan berlandaskan nilai ibadah yang khusyuk.",
};

const reasons = [
  {
    title: "Berpengalaman",
    description:
      "Lebih dari 20 tahun mendampingi jamaah dengan pelayanan yang tulus dan terarah.",
    icon: FaHourglassHalf,
  },
  {
    title: "Paket Perjalanan Yang Bervariasi",
    description:
      "Pilihan program perjalanan yang fleksibel, nyaman, dan sesuai kebutuhan ibadah Anda.",
    icon: FaSuitcaseRolling,
  },
  {
    title: "Berizin Resmi",
    description:
      "Perjalanan dikelola secara profesional dengan proses yang jelas dan terpercaya.",
    icon: FaStamp,
  },
];

function HeroSection() {
  return (
    <section
      id="beranda"
      aria-labelledby="umroh-hero-title"
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
          Menemani perjalanan ibadah Anda
        </p>
        <h1
          id="umroh-hero-title"
          className="max-w-4xl text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          Umroh Nyaman dan Penuh Makna Bersama Indorihlah
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
          Nikmati perjalanan umroh yang tertata rapi, sesuai sunnah, dan
          berlandaskan nilai ibadah yang khusyuk. Bersama tim berpengalaman dan
          layanan terpercaya, kami hadir mendampingi setiap langkah Anda.
          Indorihlah adalah sahabat terbaik dalam mewujudkan ibadah umroh yang
          aman, nyaman, dan penuh keberkahan.
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:mt-9 sm:w-auto sm:flex-row">
          <a
            href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20umroh."
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            Konsultasi Gratis
            <HiArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <a
            href="#paket"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white bg-black/35 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            Paket Umroh
            <HiArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      aria-labelledby="umroh-features-title"
      className="bg-[#faf9f6] py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-11 max-w-4xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Mengapa Indorihlah
          </p>
          <h2
            id="umroh-features-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Mengapa Indorihlah cocok untuk dijadikan partner perjalanan ibadah
            umroh dan haji anda?
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3 md:gap-7">
          {reasons.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border-t-2 border-blue-500 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-7"
            >
              <span className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-lg font-bold leading-snug text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section
      id="paket"
      aria-labelledby="umroh-packages-title"
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Temukan perjalanan Anda
          </p>
          <h2
            id="umroh-packages-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Pilihan Paket Umroh
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Berikut adalah beberapa paket yang bisa anda pilih
          </p>
          <a
            href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20mengetahui%20paket%20umroh%20lainnya."
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-red-600 underline decoration-red-300 underline-offset-4 transition-colors hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Selengkapnya
          </a>
        </div>
        <PackageCarousel />
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="umroh-faq-title"
      className="bg-[#fdf8f8] py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div
          role="img"
          aria-label="Jamaah berada di sekitar Ka'bah"
          className="min-h-[220px] bg-slate-200 bg-cover bg-center sm:min-h-[300px] lg:min-h-[520px]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.28)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1100&h=1300&q=85')",
          }}
        />
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Informasi umroh
          </p>
          <h2
            id="umroh-faq-title"
            className="mb-7 text-3xl font-bold leading-tight text-slate-900 sm:mb-9 sm:text-4xl"
          >
            FAQ : Pertanyaan yang sering ditanyakan seputar umroh
          </h2>
          <Accordion collapseAll className="space-y-3 bg-transparent">
            <AccordionPanel className="overflow-hidden rounded-lg border border-slate-900 bg-white">
              <AccordionTitle className="bg-white text-left font-semibold text-slate-900 hover:bg-slate-50 focus:ring-blue-300">
                Apa saja dokumen yang diperlukan untuk mendaftar Umroh ?
              </AccordionTitle>
              <AccordionContent className="border-t border-slate-200 bg-white">
                <div className="text-sm leading-6 text-slate-700">
                  <p className="mb-3 font-medium">
                    Persyaratan untuk Mendaftar Umroh:
                  </p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      <strong>Paspor</strong> yang masih berlaku minimal{" "}
                      <strong>7 bulan</strong>
                    </li>
                    <li>
                      <strong>KTP</strong>
                    </li>
                    <li>
                      <strong>Kartu Keluarga</strong>
                    </li>
                    <li>
                      <strong>Buku Nikah</strong> (bagi suami istri)
                    </li>
                    <li>
                      Pas <strong>foto</strong> dengan latar belakang putih
                    </li>
                  </ul>
                  <p className="mt-4 text-xs italic text-slate-500">
                    Catatan: Persyaratan tambahan bisa berbeda tergantung pada
                    kebijakan terbaru.
                  </p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel className="overflow-hidden rounded-lg border border-slate-900 bg-white">
              <AccordionTitle className="bg-white text-left font-semibold text-slate-900 hover:bg-slate-50 focus:ring-blue-300">
                Berapa biaya umroh dan apa saja yang termasuk di dalamnya?
              </AccordionTitle>
              <AccordionContent className="bg-white" />
            </AccordionPanel>
            <AccordionPanel className="overflow-hidden rounded-lg border border-slate-900 bg-white">
              <AccordionTitle className="bg-white text-left font-semibold text-slate-900 hover:bg-slate-50 focus:ring-blue-300">
                Kapan waktu terbaik untuk melaksanakan umroh?
              </AccordionTitle>
              <AccordionContent className="bg-white" />
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default function UmrohPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <HeroSection />
        <FeaturesSection />
        <PackagesSection />
        <FaqSection />
      </main>
      <ContactSection />
    </>
  );
}