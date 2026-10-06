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
  FaCompass,
  FaHeart,
  FaHotel,
  FaHourglassHalf,
  FaStamp,
  FaSuitcaseRolling,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Umroh - Indorihlah",
  description:
    "Umroh Nyaman dan Penuh Makna Bersama Indorihlah. Nikmati perjalanan umroh yang tertata rapi, sesuai sunnah, dan berlandaskan nilai ibadah yang khusyuk.",
};

const packages = [
  {
    title: "Umroh Nyaman",
    description:
      "Program perjalanan umroh dengan pendampingan ibadah dan layanan yang tertata.",
    duration: "12 hari",
    accommodation: "Hotel pilihan dekat Masjidil Haram",
    price: "Rp 33.000.000",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Ka'bah dan jamaah di Masjidil Haram",
  },
  {
    title: "Umroh Hemat",
    description:
      "Pilihan waktu keberangkatan yang fleksibel dengan kebutuhan perjalanan yang jelas.",
    duration: "9–16 hari",
    accommodation: "Akomodasi nyaman untuk beristirahat",
    price: "Rp 26.800.000",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Suasana masjid di Tanah Suci",
  },
  {
    title: "Umroh Plus Thaif",
    description:
      "Rangkaian ibadah umroh yang dilengkapi perjalanan ziarah pilihan.",
    duration: "12 hari",
    accommodation: "Hotel pilihan dan transportasi antarkota",
    price: "Rp 35.500.000",
    image:
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Menara Abraj Al Bait di dekat Masjidil Haram",
  },
  {
    title: "Umroh Reguler",
    description:
      "Program perjalanan umroh dengan layanan dan informasi yang disampaikan secara transparan.",
    duration: "9 hari",
    accommodation: "Hotel terpilih di Makkah dan Madinah",
    price: "Rp 30.000.000",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&h=900&q=85",
    imageAlt: "Arsitektur masjid dengan kubah dan menara",
  },
];

const features = [
  {
    title: "Berpengalaman",
    description:
      "Lebih dari 20 tahun mendampingi jamaah dengan pelayanan yang tulus dan terarah.",
    icon: FaHourglassHalf,
  },
  {
    title: "Pilihan Paket Beragam",
    description:
      "Pilih program perjalanan sesuai waktu, kebutuhan, dan kenyamanan Anda.",
    icon: FaSuitcaseRolling,
  },
  {
    title: "Berizin dan Terpercaya",
    description:
      "Proses perjalanan dikelola secara profesional dengan informasi yang jelas.",
    icon: FaStamp,
  },
  {
    title: "Pendampingan Ibadah",
    description:
      "Tim kami siap mendampingi persiapan hingga rangkaian ibadah di Tanah Suci.",
    icon: FaCompass,
  },
  {
    title: "Akomodasi Nyaman",
    description:
      "Pilihan akomodasi membantu jamaah beristirahat dengan nyaman selama perjalanan.",
    icon: FaHotel,
  },
  {
    title: "Layanan Sepenuh Hati",
    description:
      "Kami menemani setiap langkah dengan perhatian dan kepedulian kepada jamaah.",
    icon: FaHeart,
  },
];

const faqs = [
  {
    question: "Apa saja dokumen yang diperlukan untuk mendaftar Umroh?",
    answer: (
      <div>
        <p className="mb-3 font-medium text-slate-800">
          Persyaratan untuk mendaftar umroh:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Paspor</strong> yang masih berlaku minimal <strong>7 bulan</strong>
          </li>
          <li><strong>KTP</strong></li>
          <li><strong>Kartu Keluarga</strong></li>
          <li><strong>Buku Nikah</strong> (bagi suami istri)</li>
          <li>Pas <strong>foto</strong> dengan latar belakang putih</li>
        </ul>
        <p className="mt-4 text-sm italic text-slate-500">
          Catatan: Persyaratan tambahan bisa berbeda tergantung pada kebijakan
          terbaru.
        </p>
      </div>
    ),
  },
  {
    question: "Berapa biaya umroh dan apa saja yang termasuk di dalamnya?",
    answer: (
      <p>
        Biaya dan fasilitas mengikuti paket yang dipilih. Rincian penerbangan,
        akomodasi, konsumsi, transportasi, dan bimbingan akan dijelaskan secara
        terbuka sebelum pendaftaran.
      </p>
    ),
  },
  {
    question: "Kapan waktu terbaik untuk melaksanakan umroh?",
    answer: (
      <p>
        Waktu terbaik dapat disesuaikan dengan jadwal, cuaca, dan kebutuhan
        perjalanan Anda. Tim kami dapat membantu membandingkan jadwal yang
        tersedia.
      </p>
    ),
  },
];

export default function UmrohPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <ProductHero
          eyebrow="Menemani perjalanan ibadah Anda"
          title="Umroh Nyaman dan Penuh Makna Bersama Indorihlah"
          description={
            <p>
              Nikmati perjalanan umroh yang tertata rapi, sesuai sunnah, dan
              berlandaskan nilai ibadah yang khusyuk. Bersama tim berpengalaman
              dan layanan terpercaya, kami hadir mendampingi setiap langkah
              Anda menuju ibadah yang aman, nyaman, dan penuh keberkahan.
            </p>
          }
          image="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2400&h=1500&q=90"
          consultationMessage="Assalamu'alaikum, saya ingin konsultasi paket umroh."
        />
        <ProductPackageSection
          title="Pilihan Paket Umroh"
          description="Bandingkan program dan fasilitas utama untuk menemukan perjalanan yang sesuai dengan kebutuhan Anda."
          packages={packages}
        />
        <ProductFeatureSection
          eyebrow="Mengapa Indorihlah"
          title="Perjalanan yang terasa lebih tenang"
          description="Pendampingan dan layanan yang dirancang untuk membantu Anda fokus beribadah."
          features={features}
        />
        <ProductFaqSection
          eyebrow="Informasi Umroh"
          title="Pertanyaan yang sering ditanyakan"
          faqs={faqs}
        />
      </main>
      <ContactSection />
    </>
  );
}