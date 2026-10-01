"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

const packageItems = [
  {
    name: "Umroh Nyaman",
    duration: "12 HARI",
    price: "Rp. 33.000.000",
    airline: "SAUDI AIRLINES",
    hotel: "Hotel pilihan dekat Masjidil Haram",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&h=1200&q=85",
    alt: "Ka'bah dan jamaah di Masjidil Haram",
    label: "Pilihan Jamaah",
  },
  {
    name: "Umroh Hemat",
    duration: "9-16 HARI",
    price: "Rp. 26.800.000",
    airline: "GARUDA INDONESIA",
    hotel: "Akomodasi nyaman untuk beristirahat",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&h=1200&q=85",
    alt: "Suasana masjid di tanah suci",
    label: "Harga Spesial",
  },
  {
    name: "Umroh Plus Thaif",
    duration: "12 HARI",
    price: "Rp. 35.500.000",
    airline: "QATAR AIRWAYS",
    hotel: "Hotel pilihan dan transportasi antarkota",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&h=1200&q=85",
    alt: "Arsitektur masjid dengan kubah dan menara",
    label: "Paket Pilihan",
  },
  {
    name: "Umroh Reguler",
    duration: "9 HARI",
    price: "Rp. 30.000.000",
    airline: "SAUDI AIRLINES",
    hotel: "Hotel terpilih di Makkah dan Madinah",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&h=1200&q=85",
    alt: "Ka'bah di Masjidil Haram",
    label: "Jadwal Terbaru",
  },
];

export default function PackageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateControls = () => {
      setCanScrollLeft(track.scrollLeft > 4);
      setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
    };

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  const scrollPackages = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <button
        type="button"
        aria-label="Paket sebelumnya"
        disabled={!canScrollLeft}
        onClick={() => scrollPackages(-1)}
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white transition-colors hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-cyan-200 disabled:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 sm:size-12"
      >
        <FaChevronLeft aria-hidden="true" className="size-3.5" />
      </button>

      <div
        ref={trackRef}
        aria-label="Paket umroh"
        className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
      >
        {packageItems.map((item) => (
          <article
            key={item.name}
            className="w-full shrink-0 snap-start overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 transition-shadow hover:shadow-xl sm:w-[calc((100%_-_1.25rem)/2)] lg:w-[calc((100%_-_2.5rem)/3)]"
          >
            <div
              role="img"
              aria-label={item.alt}
              className="relative flex h-64 flex-col justify-between bg-slate-800 bg-cover bg-center p-5 text-white sm:h-72"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(8, 19, 32, 0.12), rgba(8, 19, 32, 0.82)), url('${item.image}')`,
              }}
            >
              <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-sm">
                {item.label}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-100">
                  {item.duration}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{item.name}</h3>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                  Mulai dari
                </p>
                <p className="text-xl font-bold sm:text-2xl">{item.price}</p>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <dl className="space-y-3">
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Maskapai
                  </dt>
                  <dd className="text-right text-xs font-extrabold tracking-[0.06em] text-slate-800">
                    {item.airline}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Hotel
                  </dt>
                  <dd className="max-w-[65%] text-right text-sm leading-5 text-slate-700">
                    {item.hotel}
                  </dd>
                </div>
              </dl>
              <a
                href="https://wa.me/6285648959299?text=Assalamu%27alaikum%2C%20saya%20ingin%20mengetahui%20detail%20paket%20umroh."
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-blue-600 px-4 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Tanya paket <HiArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        aria-label="Paket berikutnya"
        disabled={!canScrollRight}
        onClick={() => scrollPackages(1)}
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white transition-colors hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-cyan-200 disabled:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 sm:size-12"
      >
        <FaChevronRight aria-hidden="true" className="size-3.5" />
      </button>
    </div>
  );
}