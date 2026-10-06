import type { Metadata } from "next";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import {
  ProductFeatureSection,
  ProductFaqSection,
  ProductHero,
  ProductIntroSection,
  ProductPackageSection,
} from "@/app/components/product-page-sections";
import {
  FaCamera,
  FaCreditCard,
  FaHotel,
  FaKaaba,
  FaMosque,
  FaMountainSun,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Haji - Indorihlah",
  description:
    "Mengapa Indorihlah cocok untuk dijadikan partner perjalanan ibadah umroh dan haji Anda? Rencanakan Haji Anda bersama Indorihlah.",
};

const packages = [
  {
    title: "Program Haji Reguler",
    description:
      "Persiapan terarah dan pendampingan ibadah untuk membantu Anda menjalani perjalanan haji dengan lebih tenang.",
    duration: "Sesuai ketentuan dan jadwal resmi",
    accommodation: "Detail akomodasi dijelaskan saat konsultasi",
    price: "Konsultasi paket",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Ka'bah dan jamaah di Masjidil Haram",
  },
  {
    title: "Program Haji Khusus",
    description:
      "Dapatkan informasi program, persiapan, dan pilihan layanan yang dapat dibicarakan sesuai kebutuhan Anda.",
    duration: "Jadwal dibahas saat konsultasi",
    accommodation: "Pilihan akomodasi sesuai program",
    price: "Konsultasi paket",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Jamaah beribadah di Masjid Nabawi",
  },
];

const features = [
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
    title: "Sesuai Sunnah dan Syariat",
    description:
      "Panduan untuk menjalani setiap rangkaian ibadah dengan tertib dan khusyuk.",
    icon: FaKaaba,
  },
  {
    title: "Dokumentasi Perjalanan",
    description:
      "Momen perjalanan berharga diabadikan sebagai kenangan bersama.",
    icon: FaCamera,
  },
  {
    title: "Fasilitas Tambahan",
    description:
      "Nikmati fasilitas pilihan dan pengalaman ziarah selama perjalanan.",
    icon: FaMountainSun,
  },
  {
    title: "Layanan Terpadu",
    description:
      "Kebutuhan perjalanan dirangkum dalam layanan yang mudah dipahami.",
    icon: FaCreditCard,
  },
];

const faqs = [
  {
    question: "Apa saja dokumen yang diperlukan untuk mendaftar haji?",
    answer: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>KTP (Kartu Tanda Penduduk)</li>
        <li>KK (Kartu Keluarga)</li>
        <li>Paspor dengan masa berlaku minimal 6 bulan</li>
        <li>Surat Keterangan Sehat</li>
        <li>Buku Tabungan Haji</li>
        <li>Fotokopi Akta Lahir atau Surat Nikah</li>
        <li>Dokumen tambahan yang diminta</li>
      </ol>
    ),
  },
  {
    question: "Berapa lama waktu tunggu keberangkatan haji?",
    answer: (
      <p>
        Waktu tunggu mengikuti kuota dan ketentuan resmi yang berlaku. Hubungi
        tim kami untuk memperoleh bantuan mengecek informasi sesuai domisili
        Anda.
      </p>
    ),
  },
  {
    question: "Apa saja fasilitas yang disediakan dalam paket?",
    answer: (
      <p>
        Fasilitas menyesuaikan program yang dipilih. Rincian layanan,
        akomodasi, dan transportasi akan dijelaskan secara terbuka saat
        konsultasi.
      </p>
    ),
  },
];

export default function HajiPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <ProductHero
          eyebrow="Perjalanan ibadah yang bermakna"
          title="Rencanakan Haji Anda Bersama Indorihlah"
          description={
            <p className="italic">
              “Barang siapa hendak melaksanakan ibadah haji, hendaklah segera ia
              lakukan, karena terkadang seseorang itu sakit, atau binatang
              (kendaraannya) hilang, dan adanya suatu hajat yang menghalanginya
              untuk menunaikan ibadah haji.” (HR. Ibnu Majah)
            </p>
          }
          image="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2400&h=1500&q=90"
          consultationMessage="Assalamu'alaikum, saya ingin konsultasi paket haji."
        />
        <ProductPackageSection
          eyebrow="Persiapkan perjalanan Anda"
          title="Pilihan Program Haji"
          description="Kenali program yang tersedia dan konsultasikan kebutuhan perjalanan Anda bersama tim Indorihlah."
          packages={packages}
        />
        <ProductIntroSection
          eyebrow="Persiapan sebelum berangkat"
          title="Manasik dan Persiapan Ibadah"
          description={
            <p>
              <strong className="font-semibold text-slate-900">
                Pelatihan manasik yang lengkap.
              </strong>{" "}
              Kami menyelenggarakan pelatihan manasik secara rutin untuk
              memastikan Anda siap menjalankan setiap rangkaian ibadah dengan
              baik.
            </p>
          }
          image="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1400&h=1100&q=90"
          imageAlt="Jamaah berkumpul di area masjid di Tanah Suci"
        />
        <ProductFeatureSection
          eyebrow="Perjalanan yang kami siapkan"
          title="Nikmati perjalanan haji yang nyaman dan khusyuk"
          description="Setiap layanan dirancang agar Anda dapat lebih fokus menjalani momen ibadah."
          features={features}
        />
        <ProductFaqSection
          eyebrow="Informasi Haji"
          title="Pertanyaan yang sering ditanyakan"
          faqs={faqs}
        />
      </main>
      <ContactSection />
    </>
  );
}