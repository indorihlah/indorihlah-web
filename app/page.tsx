import type { Metadata } from "next";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import {
  HomeFeaturesSection,
  HomeHeroSection,
  HomePackagesSection,
  HomeTestimonialsSection,
} from "@/app/components/home-sections";

export const metadata: Metadata = {
  title: "Indorihlah: Beranda",
  description:
    "Wujudkan Perjalanan Ibadah Impian Anda Bersama Kami. Indorihlah siap membantu Anda mewujudkan perjalanan ibadah Haji dan Umroh yang nyaman, aman, dan penuh keberkahan.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://indorihlah.com",
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="beranda" className="pt-[76px] sm:pt-[84px]">
        <HomeHeroSection />
        <HomeFeaturesSection />
        <HomePackagesSection />
        <HomeTestimonialsSection />
      </main>
      <ContactSection />
    </>
  );
}