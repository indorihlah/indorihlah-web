import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarDays,
  FaHotel,
  FaHourglassHalf,
  FaStamp,
  FaSuitcaseRolling,
} from "react-icons/fa6";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";

const features = [
  {
    title: "Berpengalaman",
    description:
      "Lebih dari 20 tahun mendampingi jamaah dengan pelayanan yang tulus dan terarah.",
    icon: FaHourglassHalf,
  },
  {
    title: "Pilihan Perjalanan",
    description:
      "Beragam program Haji dan Umroh dirancang untuk kebutuhan serta kenyamanan Anda.",
    icon: FaSuitcaseRolling,
  },
  {
    title: "Resmi dan Terpercaya",
    description:
      "Perjalanan dikelola secara profesional dengan proses yang jelas dan terpercaya.",
    icon: FaStamp,
  },
];

const packages = [
  {
    name: "Umroh Nyaman",
    duration: "9 Hari",
    price: "Rp 28.000.000",
    hotel: "Hotel pilihan dekat Masjidil Haram",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&h=900&q=85",
    alt: "Ka'bah di Masjidil Haram",
  },
  {
    name: "Umroh Plus Thaif",
    duration: "12 Hari",
    price: "Rp 32.500.000",
    hotel: "Hotel bintang empat pilihan",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&h=900&q=85",
    alt: "Arsitektur masjid di Tanah Suci",
  },
  {
    name: "Umroh Awal Musim",
    duration: "9 Hari",
    price: "Rp 30.000.000",
    hotel: "Akomodasi nyaman di Makkah dan Madinah",
    image:
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&h=900&q=85",
    alt: "Menara Abraj Al Bait di dekat Masjidil Haram",
  },
];

const testimonials = [
  {
    quote:
      "Alhamdulillah, perjalanan umroh kami berjalan lancar. Bimbingan ibadahnya jelas dan timnya selalu membantu.",
    name: "Bapak Miftahul Huda",
    location: "Surabaya",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    quote:
      "Dari persiapan sampai pulang, semuanya terasa tertata. Kami bisa lebih fokus beribadah dan menikmati setiap momen.",
    name: "Ibu Nur Aisyah",
    location: "Sidoarjo",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    quote:
      "Pelayanannya ramah dan informasinya transparan. Rasanya seperti ditemani keluarga sendiri selama perjalanan.",
    name: "Bapak Ahmad Fauzi",
    location: "Gresik",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80",
  },
];

export function HomeHeroSection() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-slate-900 px-5 py-24 text-center text-white sm:px-8 sm:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2400&h=1500&q=90')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-5 text-sm font-semibold text-blue-100">
          Perjalanan ibadah, dengan hati yang tenang
        </p>
        <h1
          id="home-hero-title"
          className="max-w-4xl text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          Haji dan Umroh Aman, Nyaman dan Sesuai sunnah
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
          Lebih dari 20 tahun menemani jamaah Indonesia dengan perjalanan yang
          aman, nyaman, dan sesuai tuntunan. Kami hadir untuk memudahkan langkah
          Anda menuju Tanah Suci.
        </p>
        <a
          href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20paket%20haji%20atau%20umroh."
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Konsultasi Gratis
        </a>
        <Link
          href="#paket"
          className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Lihat pilihan paket
          <FaArrowRight aria-hidden="true" className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}

export function HomeFeaturesSection() {
  return (
    <section
      id="keunggulan"
      aria-labelledby="home-features-title"
      className="bg-slate-50 py-24"
    >
      <div className={container}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold text-blue-700">
            Mengapa Indorihlah
          </p>
          <h2
            id="home-features-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Mengapa Indorihlah cocok untuk perjalanan ibadah Anda?
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:mt-16">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="mx-auto flex max-w-sm flex-col items-center text-center">
              <span className="mb-5 inline-flex size-12 items-center justify-center text-blue-600">
                <Icon aria-hidden="true" className="size-7" />
              </span>
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePackagesSection() {
  return (
    <section
      id="paket"
      aria-labelledby="home-packages-title"
      className="bg-white py-24"
    >
      <div className={container}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold text-blue-700">
              Pilihan untuk perjalanan Anda
            </p>
            <h2
              id="home-packages-title"
              className="text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Paket Haji &amp; Umroh
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Temukan program perjalanan yang sesuai dengan kebutuhan ibadah
              Anda.
            </p>
          </div>
          <Link
            href="/umroh"
            className="inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800 sm:self-auto"
          >
            Lihat semua paket <FaArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-lg font-bold text-blue-700">{item.price}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  {item.name}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <FaCalendarDays aria-hidden="true" className="size-4 text-slate-400" />
                    <span>{item.duration}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FaHotel aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-slate-400" />
                    <span>{item.hotel}</span>
                  </li>
                </ul>
                <a
                  href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20mengetahui%20detail%20paket%20umroh."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Tanya paket <FaArrowRight aria-hidden="true" className="size-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonialsSection() {
  return (
    <section
      aria-labelledby="home-testimonials-title"
      className="bg-slate-50 py-16 sm:py-20"
    >
      <div className={container}>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold text-blue-700">
            Cerita para jamaah
          </p>
          <h2
            id="home-testimonials-title"
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Perjalanan bermakna, dikenang selamanya
          </h2>
        </div>
        <div className="mt-9 grid gap-8 md:grid-cols-3 md:gap-10 lg:mt-12">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col">
              <blockquote className="flex-1 text-base italic leading-7 text-slate-600">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={44}
                  height={44}
                  unoptimized
                  className="size-11 rounded-full object-cover"
                />
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    {testimonial.location}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}