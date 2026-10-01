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
  FaCamera,
  FaCreditCard,
  FaHotel,
  FaHourglassHalf,
  FaKaaba,
  FaMosque,
  FaMountainSun,
  FaStamp,
  FaSuitcaseRolling,
} from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Haji - Indorihlah",
  description:
    "Mengapa Indorihlah cocok untuk dijadikan partner perjalanan ibadah umroh dan haji Anda? Rencanakan Haji Anda bersama Indorihlah.",
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
      "Pilihan perjalanan dirancang fleksibel agar sesuai dengan kebutuhan ibadah Anda.",
    icon: FaSuitcaseRolling,
  },
  {
    title: "Berizin Resmi",
    description:
      "Pengelolaan perjalanan yang profesional, transparan, dan didukung perizinan resmi.",
    icon: FaStamp,
  },
];

const comforts = [
  {
    title: "Bimbingan Spiritual Intensif",
    description:
      "Pendampingan ibadah dan arahan dari pembimbing berpengalaman selama perjalanan.",
    icon: FaMosque,
  },
  {
    title: "Akomodasi dan Transportasi Nyaman",
    description:
      "Akomodasi terpilih serta transportasi yang mendukung perjalanan jamaah.",
    icon: FaHotel,
  },
  {
    title: "Pelaksanaan Haji Sesuai Sunnah & Syariat",
    description:
      "Panduan untuk menjalani setiap rangkaian ibadah dengan tertib dan khusyuk.",
    icon: FaKaaba,
  },
  {
    title: "Dokumentasi dan Kenang-kenangan",
    description:
      "Momen perjalanan berharga diabadikan sebagai kenangan bersama.",
    icon: FaCamera,
  },
  {
    title: "Fasilitas Tambahan dan Bonus Wisata",
    description:
      "Nikmati fasilitas pilihan dan pengalaman ziarah selama perjalanan.",
    icon: FaMountainSun,
  },
  {
    title: "Layanan Terpadu & All-in",
    description:
      "Kebutuhan perjalanan dirangkum dalam layanan terpadu yang mudah dipahami.",
    icon: FaCreditCard,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-11 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function HeroSection() {
  return (
    <section
      aria-labelledby="haji-hero-title"
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
          Perjalanan ibadah yang bermakna
        </p>
        <h1
          id="haji-hero-title"
          className="max-w-4xl text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          Rencanakan Haji anda bersama Indorihlah
        </h1>
        <p className="mt-6 max-w-3xl text-base italic leading-7 text-white/90 sm:text-lg sm:leading-8">
          “Barang siapa hendak melaksanakan ibadah haji, hendaklah segera ia
          lakukan, karena terkadang seseorang itu sakit, atau binatang
          (kendaraannya) hilang, dan adanya suatu hajat yang menghalanginya untuk
          menunaikan ibadah haji” (HR. Ibnu Majah)
        </p>
        <a
          href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20paket%20haji."
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-9"
        >
          Konsultasi Gratis
          <HiArrowUpRight aria-hidden="true" className="ml-2 size-4" />
        </a>
      </div>
    </section>
  );
}

function WhyIndorihlahSection() {
  return (
    <section
      aria-labelledby="why-haji-title"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Mengapa Indorihlah"
          title="Mengapa Indorihlah cocok untuk perjalanan haji Anda?"
          description="Persiapan yang matang, pendampingan yang dekat, dan pelayanan yang memahami kebutuhan jamaah."
        />
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

function ManasikSection() {
  return (
    <section
      aria-labelledby="manasik-title"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <FaMosque aria-hidden="true" className="size-5" />
          </span>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Persiapan sebelum berangkat
          </p>
          <h2
            id="manasik-title"
            className="max-w-xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Manasik dan Persiapan Ibadah
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <span className="font-semibold text-slate-800">
              Pelatihan Manasik yang Lengkap :
            </span>{" "}
            Kami menyelenggarakan pelatihan manasik secara rutin untuk
            memastikan Anda siap menjalankan setiap rangkaian ibadah dengan
            baik.
          </p>
        </div>
        <div
          role="img"
          aria-label="Jamaah haji berkumpul di Masjidil Haram"
          className="min-h-[280px] bg-slate-200 bg-cover bg-center sm:min-h-[380px] lg:min-h-[440px]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.2)), url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&h=1100&q=90')",
          }}
        />
      </div>
    </section>
  );
}

function ComfortSection() {
  return (
    <section
      aria-labelledby="comfort-title"
      className="bg-[#faf9f6] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Perjalanan yang kami siapkan"
          title="Nikmati Perjalanan Haji yang Nyaman, Khusyuk, dan Berkesan"
          description="Kami perhatikan kebutuhan penting Anda agar dapat menjalani setiap momen ibadah dengan lebih tenang."
        />
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {comforts.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex flex-col items-center px-4 text-center">
              <span className="mb-4 inline-flex size-12 items-center justify-center text-slate-900">
                <Icon aria-hidden="true" className="size-7" />
              </span>
              <h3 className="max-w-sm text-base font-bold leading-6 text-slate-900 sm:text-lg">
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

function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div
          role="img"
          aria-label="Ka'bah di Masjidil Haram"
          className="min-h-[220px] bg-slate-200 bg-cover bg-center sm:min-h-[300px] lg:min-h-[520px]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.28)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1100&h=1300&q=85')",
          }}
        />
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Informasi haji
          </p>
          <h2
            id="faq-title"
            className="mb-7 text-3xl font-bold leading-tight text-slate-900 sm:mb-9 sm:text-4xl"
          >
            FAQ : Pertanyaan yang sering ditanyakan
          </h2>
          <Accordion collapseAll className="space-y-3 bg-transparent">
            <AccordionPanel className="overflow-hidden rounded-lg border border-slate-900 bg-white">
              <AccordionTitle className="bg-white text-left font-semibold text-slate-900 hover:bg-slate-50 focus:ring-blue-300">
                Apa saja dokumen yang diperlukan untuk mendaftar haji ?
              </AccordionTitle>
              <AccordionContent className="border-t border-slate-200 bg-white">
                <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  <li>KTP (Kartu Tanda Penduduk)</li>
                  <li>KK (Kartu Keluarga)</li>
                  <li>Paspor dengan masa berlaku minimal 6 bulan</li>
                  <li>Surat Keterangan Sehat</li>
                  <li>Buku Tabungan Haji</li>
                  <li>Fotokopi Akta Lahir atau Surat Nikah</li>
                  <li>Dokumen tambahan yang diminta</li>
                </ol>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel className="overflow-hidden rounded-lg border border-slate-900 bg-white">
              <AccordionTitle className="bg-white text-left font-semibold text-slate-900 hover:bg-slate-50 focus:ring-blue-300">
                Berapa lama waktu tunggu keberangkatan haji ?
              </AccordionTitle>
              <AccordionContent className="bg-white" />
            </AccordionPanel>
            <AccordionPanel className="overflow-hidden rounded-lg border border-slate-900 bg-white">
              <AccordionTitle className="bg-white text-left font-semibold text-slate-900 hover:bg-slate-50 focus:ring-blue-300">
                Apa saja fasilitas yang disediakan dalam paket ?
              </AccordionTitle>
              <AccordionContent className="bg-white" />
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default function HajiPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <HeroSection />
        <WhyIndorihlahSection />
        <ManasikSection />
        <ComfortSection />
        <FaqSection />
      </main>
      <ContactSection />
    </>
  );
}