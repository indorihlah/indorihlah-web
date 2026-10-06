import type { Metadata } from "next";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import {
  ProductFeatureSection,
  ProductFaqSection,
  ProductHero,
  ProductPackageSection,
} from "@/app/components/product-page-sections";
import {
  FaCheckDouble,
  FaLocationDot,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Wisata - Indorihlah",
  description:
    "Jelajahi destinasi bersejarah Islam, budaya dunia, dan keindahan alam bersama Indorihlah.",
};

const packages = [
  {
    title: "Tur Jejak Nabi Madinah dan Makkah",
    description:
      "Mengunjungi situs-situs bersejarah seperti Masjid Quba, Jabal Uhud, dan Gua Hira yang sarat nilai spiritual.",
    duration: "Itinerary ziarah pilihan",
    accommodation: "Rincian perjalanan tersedia saat konsultasi",
    price: "Konsultasi program",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Ka'bah dan jamaah di Masjidil Haram",
  },
  {
    title: "Wisata Sejarah Andalusia, Spanyol",
    description:
      "Menelusuri kejayaan Islam melalui kunjungan ke Alhambra, Masjid Cordoba, dan kota-kota penuh cerita.",
    duration: "Itinerary sesuai program",
    accommodation: "Rincian perjalanan tersedia saat konsultasi",
    price: "Konsultasi program",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Pemandangan kota bersejarah di Andalusia",
  },
  {
    title: "Eksplorasi Turki: Negeri Dua Benua",
    description:
      "Menikmati keindahan Istanbul, Cappadocia, dan situs-situs Islam bersejarah lainnya.",
    duration: "Itinerary sesuai program",
    accommodation: "Rincian perjalanan tersedia saat konsultasi",
    price: "Konsultasi program",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Masjid bersejarah di Istanbul",
  },
];

const features = [
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
    title: "Paket Fleksibel",
    description:
      "Pilihan paket wisata dapat dikonsultasikan untuk menyesuaikan kebutuhan dan kenyamanan Anda.",
    icon: FaCheckDouble,
  },
  {
    title: "Layanan Terpercaya",
    description:
      "Indorihlah berkomitmen memberikan pengalaman perjalanan yang aman, nyaman, dan bermakna.",
    icon: FaUserShield,
  },
];

const faqs = [
  {
    question: "Apa saja yang termasuk dalam program wisata?",
    answer: (
      <p>
        Rincian itinerary, transportasi, akomodasi, dan layanan pendamping akan
        disampaikan sesuai program destinasi yang Anda pilih.
      </p>
    ),
  },
  {
    question: "Apakah itinerary dapat disesuaikan?",
    answer: (
      <p>
        Sampaikan kebutuhan dan preferensi perjalanan Anda kepada tim kami untuk
        mendiskusikan pilihan itinerary yang tersedia.
      </p>
    ),
  },
  {
    question: "Bagaimana cara mengetahui jadwal dan biaya perjalanan?",
    answer: (
      <p>
        Hubungi tim Indorihlah untuk mendapatkan informasi jadwal keberangkatan,
        ketersediaan, dan rincian biaya terbaru.
      </p>
    ),
  },
];

export default function WisataPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <ProductHero
          eyebrow="Perjalanan Islami yang Menginspirasi dan Bermakna"
          title="Temukan Keindahan Wisata Bersama Indorihlah"
          description={
            <p>
              Indorihlah mengajak Anda merasakan pengalaman wisata berbeda,
              lebih dari sekadar liburan. Jelajahi destinasi bersejarah Islam,
              lokasi penuh nilai budaya, dan keindahan alam dunia dengan
              layanan profesional serta nuansa spiritual.
            </p>
          }
          image="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=2400&h=1500&q=90"
          consultationMessage="Assalamu'alaikum, saya ingin konsultasi program wisata Indorihlah."
        />
        <ProductPackageSection
          eyebrow="Destinasi pilihan"
          title="Jelajahi perjalanan penuh makna"
          description="Pilih destinasi wisata islami yang ingin Anda kenali lebih dekat."
          packages={packages}
        />
        <ProductFeatureSection
          eyebrow="Mengapa Indorihlah"
          title="Wisata yang nyaman, terarah, dan bermakna"
          description="Pendampingan profesional membantu Anda menikmati setiap destinasi dengan tenang."
          features={features}
        />
        <ProductFaqSection
          eyebrow="Informasi Wisata"
          title="Pertanyaan yang sering ditanyakan"
          faqs={faqs}
        />
      </main>
      <ContactSection />
    </>
  );
}