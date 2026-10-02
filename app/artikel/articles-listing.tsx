"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaRegCalendarDays } from "react-icons/fa6";
import { HiChevronLeft, HiChevronRight, HiMagnifyingGlass } from "react-icons/hi2";

const categories = [
  "Semua",
  "Edukasi",
  "Info dan Tips",
  "Destinasi",
  "Produk & Layanan",
  "Berita & Kegiatan",
] as const;

type Category = (typeof categories)[number];
type SubCategory = "Semua" | "Haji" | "Umroh";

const subCategories: SubCategory[] = ["Semua", "Haji", "Umroh"];

const articles: {
  title: string;
  date: string;
  category: Exclude<Category, "Semua">;
  service: Exclude<SubCategory, "Semua">;
  excerpt?: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: "Ingin Tau Estimasi Berangkat Haji? Ini Cara Cek di Kemenhaj",
    date: "22 Sep 2026",
    category: "Edukasi",
    service: "Haji",
    excerpt:
      "Ketahui estimasi keberangkatan haji Anda dengan mudah melalui aplikasi resmi dari Kementerian Agama RI.",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Jamaah di sekitar Ka'bah",
  },
  {
    title: "Ini Waktu Terbaik Umroh untuk Ibadah yang Lebih Khusyuk",
    date: "18 Sep 2026",
    category: "Info dan Tips",
    service: "Umroh",
    excerpt:
      "Pilih waktu perjalanan yang tepat untuk menikmati ibadah umroh dengan suasana lebih tenang dan khusyuk.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Suasana Masjidil Haram",
  },
  {
    title: "Mengenal Masjid Quba, Masjid Pertama dalam Sejarah Islam",
    date: "14 Sep 2026",
    category: "Destinasi",
    service: "Umroh",
    excerpt:
      "Telusuri sejarah Masjid Quba dan tempat-tempat penuh makna dalam perjalanan ziarah di Madinah.",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Masjid dengan kubah dan menara",
  },
  {
    title: "Persiapan Dokumen Haji: Panduan Lengkap Sebelum Mendaftar",
    date: "10 Sep 2026",
    category: "Edukasi",
    service: "Haji",
    excerpt:
      "Siapkan dokumen penting sejak awal agar proses pendaftaran haji berjalan lebih tertata.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Suasana perjalanan ibadah di Tanah Suci",
  },
  {
    title: "Pilihan Paket Umroh Keluarga dengan Perjalanan Nyaman",
    date: "7 Sep 2026",
    category: "Produk & Layanan",
    service: "Umroh",
    excerpt:
      "Temukan pilihan program umroh keluarga dengan pendampingan, akomodasi, dan perjalanan yang nyaman.",
    image:
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Pemandangan kota suci dari kejauhan",
  },
  {
    title: "Indorihlah Gelar Manasik Bersama Jamaah Keberangkatan Terbaru",
    date: "2 Sep 2026",
    category: "Berita & Kegiatan",
    service: "Haji",
    excerpt:
      "Persiapan manasik membantu jamaah memahami rangkaian ibadah sebelum berangkat ke Tanah Suci.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Jamaah mengikuti kegiatan persiapan ibadah",
  },
  {
    title: "Apa Perbedaan Haji Reguler dan Haji Khusus?",
    date: "29 Agu 2026",
    category: "Edukasi",
    service: "Haji",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Ka'bah di Masjidil Haram",
  },
  {
    title: "Tips Menjaga Kesehatan Selama Beribadah Umroh",
    date: "25 Agu 2026",
    category: "Info dan Tips",
    service: "Umroh",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Arsitektur masjid di Tanah Suci",
  },
  {
    title: "Menapaki Jejak Sejarah Islam di Madinah",
    date: "20 Agu 2026",
    category: "Destinasi",
    service: "Haji",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Pemandangan masjid di Madinah",
  },
  {
    title: "Cara Memilih Program Umroh yang Sesuai Kebutuhan",
    date: "17 Agu 2026",
    category: "Produk & Layanan",
    service: "Umroh",
    image:
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Pemandangan Masjidil Haram",
  },
  {
    title: "Cerita Jamaah: Perjalanan Haji yang Penuh Makna",
    date: "13 Agu 2026",
    category: "Berita & Kegiatan",
    service: "Haji",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Jamaah di halaman masjid",
  },
  {
    title: "Panduan Memilih Waktu Keberangkatan Umroh",
    date: "10 Agu 2026",
    category: "Info dan Tips",
    service: "Umroh",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&h=750&q=85",
    imageAlt: "Jamaah melaksanakan ibadah umroh",
  },
];

const pageSize = 6;

export default function ArticlesListing() {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");
  const [activeSubCategory, setActiveSubCategory] = useState<SubCategory>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const normalizedQuery = searchQuery.trim().toLocaleLowerCase("id");
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "Semua" || article.category === activeCategory;
    const matchesSubCategory =
      activeSubCategory === "Semua" || article.service === activeSubCategory;
    const matchesSearch =
      normalizedQuery.length === 0 ||
      `${article.title} ${article.category} ${article.service}`
        .toLocaleLowerCase("id")
        .includes(normalizedQuery);

    return matchesCategory && matchesSubCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));
  const visibleArticles = filteredArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const selectCategory = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const selectSubCategory = (category: SubCategory) => {
    setActiveSubCategory(category);
    setCurrentPage(1);
  };

  const updateSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const currentPageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
          Artikel
        </h1>

        <div className="flex flex-col gap-5 border-b border-slate-200 pb-4 lg:flex-row lg:items-center lg:justify-between">
          <nav
            aria-label="Kategori artikel"
            className="-mx-1 flex min-w-0 flex-wrap gap-x-5 gap-y-2 px-1 sm:gap-x-7"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectCategory(category)}
                  className={`min-h-10 shrink-0 whitespace-nowrap border-b-2 px-1 pb-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isActive
                      ? "border-blue-600 font-bold text-blue-700"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </nav>

          <label className="relative block w-full shrink-0 lg:max-w-xs">
            <span className="sr-only">Cari artikel</span>
            <HiMagnifyingGlass
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => updateSearch(event.target.value)}
              placeholder="Cari artikel"
              className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>

        <div className="mb-8 mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {activeCategory}
          </h2>
          <div className="flex flex-wrap gap-2" aria-label="Filter layanan">
            {subCategories.map((category) => {
              const isActive = activeSubCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectSubCategory(category)}
                  className={`min-h-10 rounded-full px-6 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300 bg-white text-gray-700 hover:border-blue-600 hover:text-blue-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {visibleArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {visibleArticles.map((article) => (
              <article key={article.title} className="group relative mt-4">
                <div
                  className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100"
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    width={1000}
                    height={750}
                    priority
                    unoptimized
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full transform object-cover transition duration-500 ease-in-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                    {article.category === "Info dan Tips"
                      ? "Info & Tips"
                      : article.category}
                  </span>
                </div>
                <div className="relative -mt-16 mx-4 flex min-h-[260px] flex-col rounded-xl bg-white p-6 shadow-lg transition duration-300 group-hover:shadow-2xl">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <FaRegCalendarDays aria-hidden="true" className="size-3.5 text-blue-600" />
                    <time>{article.date}</time>
                  </div>
                  <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                    {article.excerpt ??
                      `Temukan panduan ${article.category.toLocaleLowerCase("id")} seputar perjalanan ${article.service.toLocaleLowerCase("id")} yang aman dan nyaman bersama Indorihlah.`}
                  </p>
                  <button
                    type="button"
                    aria-label={`Baca selengkapnya: ${article.title}`}
                    className="mt-4 flex items-center gap-2 self-start text-sm font-bold text-blue-600 transition duration-300 group-hover:translate-x-2"
                  >
                    Baca Selengkapnya
                    <FaArrowRight aria-hidden="true" className="size-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-56 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
            <div>
              <p className="font-semibold text-slate-900">Artikel tidak ditemukan</p>
              <p className="mt-2 text-sm text-slate-600">
                Coba ubah kategori atau kata kunci pencarian Anda.
              </p>
            </div>
          </div>
        )}

        <nav
          aria-label="Navigasi halaman artikel"
          className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 sm:flex-row"
        >
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-4 text-sm font-medium text-slate-400 transition-colors disabled:cursor-not-allowed sm:order-1"
          >
            <HiChevronLeft aria-hidden="true" className="size-4" />
            Previous
          </button>

          <div className="flex items-center gap-1.5 sm:order-2">
            {currentPageNumbers.length <= 5 ? (
              currentPageNumbers.map((page) => (
                <button
                  key={page}
                  type="button"
                  aria-current={currentPage === page ? "page" : undefined}
                  onClick={() => setCurrentPage(page)}
                  className={`inline-flex size-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    currentPage === page
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {page}
                </button>
              ))
            ) : (
              <>
                {[1, 2].map((page) => (
                  <button
                    key={page}
                    type="button"
                    aria-current={currentPage === page ? "page" : undefined}
                    onClick={() => setCurrentPage(page)}
                    className={`inline-flex size-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                      currentPage === page
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="px-2 text-sm text-slate-500" aria-hidden="true">
                  ...
                </span>
                <button
                  type="button"
                  aria-current={currentPage === totalPages ? "page" : undefined}
                  onClick={() => setCurrentPage(totalPages)}
                  className={`inline-flex size-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    currentPage === totalPages
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-700 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 sm:order-3"
          >
            Next
            <HiChevronRight aria-hidden="true" className="size-4" />
          </button>
        </nav>
      </div>
    </section>
  );
}