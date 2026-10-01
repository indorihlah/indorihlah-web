import { Button } from "flowbite-react";
import Image from "next/image";
import {
  FaArrowRight,
  FaFacebookF,
  FaFileCircleCheck,
  FaHourglassHalf,
  FaInstagram,
  FaLocationDot,
  FaSuitcaseRolling,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiArrowUpRight, HiOutlineStar } from "react-icons/hi2";

const sectionWidth = "mx-auto w-full max-w-7xl px-5 sm:px-8";

const features = [
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
      "Perjalanan dikelola oleh penyelenggara berizin dengan proses yang jelas dan terpercaya.",
    icon: FaFileCircleCheck,
  },
];

const packages = [
  {
    name: "Umroh Nyaman",
    type: "Paket Umroh",
    duration: "9 Hari",
    price: "Rp. 28.000.000",
    airline: "SAUDI AIRLINES",
    hotel: "Hotel pilihan dekat Masjidil Haram",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=85",
    alt: "Suasana Masjidil Haram dan Ka'bah",
    badge: "Pilihan Jamaah",
  },
  {
    name: "Umroh Plus Thaif",
    type: "Paket Umroh",
    duration: "12 Hari",
    price: "Rp. 32.500.000",
    airline: "GARUDA INDONESIA",
    hotel: "Hotel bintang empat, nyaman untuk beristirahat",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=85",
    alt: "Arsitektur masjid di tanah suci",
    badge: "12 Hari",
  },
  {
    name: "Umroh Awal Musim",
    type: "Paket Umroh",
    duration: "9 Hari",
    price: "Rp. 30.000.000",
    airline: "QATAR AIRWAYS",
    hotel: "Akomodasi terpilih untuk perjalanan tenang",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=85",
    alt: "Masjid dengan kubah dan menara",
    badge: "Jadwal Terbaru",
  },
];

const partners = ["AMPHURI", "SISKOPATUH", "IRQA", "Majelis Ta’lim"];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { name: "Tiktok", href: "https://tiktok.com", icon: FaTiktok },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-11 max-w-2xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
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

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-24 text-center text-white sm:px-8 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(7, 19, 34, 0.48) 0%, rgba(7, 19, 34, 0.63) 100%), url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2400&h=1400&q=90')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/90 sm:text-xs">
          <span className="h-px w-8 bg-sky-300" aria-hidden="true" />
          Menemani langkah ibadah Anda
          <span className="h-px w-8 bg-sky-300" aria-hidden="true" />
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl text-4xl font-semibold leading-[1.12] sm:text-6xl lg:text-7xl"
        >
          Haji dan Umroh Aman, Nyaman dan Sesuai sunnah
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-white/90 sm:mt-7 sm:text-lg sm:leading-8">
          Berpengalaman lebih dari 20 tahun menangani keberangkatan haji dan
          umroh kini kami lebih bertekad lagi untuk memberikan pelayanan dan
          kemudahan terbaik pada calon jamaah haji dan umroh.
        </p>
        <a
          href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20paket%20haji%20atau%20umroh."
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/25 transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-10 sm:px-8"
        >
          Konsultasi Gratis
          <HiArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-950/30 to-transparent"
      />
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="keunggulan"
      aria-labelledby="features-title"
      className="bg-gray-50 py-16 sm:py-20"
    >
      <div className={sectionWidth}>
        <SectionTitle
          eyebrow="Mengapa Indorihlah"
          title="Mengapa Indorihlah cocok untuk perjalanan ibadah Anda?"
          description="Perjalanan yang baik dimulai dari pendamping yang memahami kebutuhan jamaah, dari persiapan hingga kembali ke rumah."
        />
        <div className="grid gap-5 md:grid-cols-3 md:gap-7">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border-t-2 border-blue-500 bg-white p-6 shadow-sm sm:p-7"
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

export function PackagesSection() {
  return (
    <section
      id="paket"
      aria-labelledby="packages-title"
      className="bg-sky-50/70 py-16 sm:py-20"
    >
      <div className={sectionWidth}>
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Berangkat dengan tenang
          </p>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Pilihan Paket Haji &amp; Umroh
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Temukan perjalanan yang sesuai dengan waktu, kebutuhan, dan
            kenyamanan ibadah Anda.
          </p>
          <a
            href="#kontak"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 underline decoration-red-300 underline-offset-4 transition-colors hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Selengkapnya <FaArrowRight aria-hidden="true" className="size-3" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                role="img"
                aria-label={item.alt}
                className="relative flex h-64 flex-col justify-between bg-slate-800 bg-cover bg-center p-5 text-white sm:h-72"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(8, 19, 32, 0.18), rgba(8, 19, 32, 0.82)), url('${item.image}')`,
                }}
              >
                <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-sm">
                  {item.badge}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
                    {item.type} · {item.duration}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{item.name}</h3>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-white/85">
                    Mulai dari
                  </p>
                  <p className="text-xl font-bold sm:text-2xl">{item.price}</p>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Maskapai
                  </span>
                  <span className="text-right text-xs font-extrabold tracking-[0.08em] text-slate-800">
                    {item.airline}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Akomodasi
                  </span>
                  <span className="max-w-[65%] text-right text-sm leading-5 text-slate-700">
                    {item.hotel}
                  </span>
                </div>
                <a
                  href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20mengetahui%20detail%20paket%20umroh."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-blue-600 px-4 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Tanya paket <HiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section
      aria-labelledby="testimonial-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className={`${sectionWidth} text-center`}>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Cerita Jamaah
        </p>
        <h2
          id="testimonial-title"
          className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
        >
          Pengalaman Berharga, Kenangan Selamanya
        </h2>
        <div
          aria-label="5 dari 5 bintang"
          className="mt-6 flex justify-center gap-1 text-amber-400"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <HiOutlineStar key={index} aria-hidden="true" className="size-5 fill-current" />
          ))}
        </div>
        <blockquote className="mx-auto mt-5 max-w-3xl text-lg italic leading-8 text-slate-700 sm:text-2xl sm:leading-10">
          “Alhamdulillah, perjalanan umroh kami berjalan lancar. Bimbingan
          ibadahnya jelas, pelayanan timnya ramah, dan kami merasa tenang sejak
          persiapan sampai kembali ke tanah air.”
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3 text-left">
          <div
            role="img"
            aria-label="Foto Bapak Miftahul Huda"
            className="size-12 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-blue-100"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80')",
            }}
          />
          <div>
            <p className="text-sm font-bold text-slate-900">Bapak Miftahul Huda</p>
            <p className="mt-0.5 text-xs text-slate-500">Surabaya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-title"
      className="bg-sky-50/70 py-14 sm:py-16"
    >
      <div className={sectionWidth}>
        <h2
          id="partners-title"
          className="mb-8 text-center text-2xl font-bold text-slate-900 sm:mb-10 sm:text-3xl"
        >
          Partner Kami
        </h2>
        <ul className="grid grid-cols-2 items-center gap-3 sm:grid-cols-4 sm:gap-5">
          {partners.map((partner) => (
            <li
              key={partner}
              className="flex min-h-20 items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-4 text-center text-sm font-extrabold tracking-[0.08em] text-slate-500 sm:min-h-24 sm:text-base"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="tentang"
      aria-labelledby="about-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className={`${sectionWidth} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Tentang Indorihlah
          </p>
          <h2
            id="about-title"
            className="max-w-xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Melayani perjalanan ibadah dengan sepenuh hati
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Indorihlah Utama berkomitmen menghadirkan perjalanan haji dan umroh
            yang aman, nyaman, serta sesuai tuntunan. Dengan pengalaman lebih
            dari 20 tahun, kami mendampingi jamaah dalam setiap tahap perjalanan
            dan terus menjaga pelayanan yang transparan, profesional, serta
            didukung perizinan resmi.
          </p>
          <Button
            color="blue"
            href="#kontak"
            className="mt-7 !rounded-md !px-5 !py-3 !text-sm !font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            Selengkapnya <FaArrowRight aria-hidden="true" className="ml-2 size-3" />
          </Button>
        </div>
        <div
          role="img"
          aria-label="Ka'bah di Masjidil Haram di bawah langit biru"
          className="min-h-[300px] bg-slate-200 bg-cover bg-center sm:min-h-[400px]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(14, 116, 180, 0.08), rgba(15, 23, 42, 0.14)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1400&q=90')",
          }}
        />
      </div>
    </section>
  );
}

function ContactOffice({
  office,
  phone,
  waNumber,
  address,
}: {
  office: string;
  phone: string;
  waNumber: string;
  address: string;
}) {
  return (
    <article className="border-l-2 border-blue-500 py-1 pl-5 sm:pl-6">
      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
        {office}
      </span>
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex w-fit items-center gap-2 text-lg font-bold text-slate-900 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <FaWhatsapp aria-hidden="true" className="size-5 text-green-600" />
        {phone}
      </a>
      <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600">
        <FaLocationDot aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue-600" />
        {address}
      </p>
    </article>
  );
}

export function ContactSection() {
  return (
    <>
      <section
        id="kontak"
        aria-labelledby="contact-title"
        className="bg-gray-50 py-16 sm:py-20"
      >
        <div className={sectionWidth}>
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Kunjungi atau hubungi kami
            </p>
            <h2
              id="contact-title"
              className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              Lokasi Indorihlah Utama
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Cabang Sidoarjo
            </p>
          </div>
          <div className="grid gap-8 border-y border-slate-200 py-8 md:grid-cols-2 md:gap-12 md:py-10">
            <ContactOffice
              office="Head Office Sidoarjo"
              phone="0856 4895 9299"
              waNumber="6285648959299"
              address="Sidoarjo, Jawa Timur, Indonesia"
            />
            <ContactOffice
              office="Wilayah Krian"
              phone="0857 9121 3064"
              waNumber="6285791213064"
              address="Krian, Sidoarjo, Jawa Timur, Indonesia"
            />
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className={`${sectionWidth} flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-9`}>
          <a
            href="#beranda"
            aria-label="Indorihlah Utama, kembali ke beranda"
            className="flex items-center gap-3"
          >
            <span>
              <Image
                src="/indorihlah-logo.png"
                alt="Indorihlah Utama"
                width={256}
                height={80}
                className="h-8 w-auto object-contain"
              />
              <span className="mt-1 block text-xs text-slate-500">
                Teman perjalanan ibadah Anda
              </span>
            </span>
          </a>
          <ul className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 transition-colors hover:bg-cyan-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-600 px-5 py-3 text-center text-xs font-medium text-white sm:text-sm">
          © 2025 Indo Rihlah. All Rights Reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/6285648959299"
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi Indorihlah melalui WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-950/25 transition-transform hover:scale-105 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:bottom-7 sm:right-7"
      >
        <FaWhatsapp aria-hidden="true" className="size-7" />
      </a>
    </>
  );
}