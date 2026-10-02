import type { Metadata } from "next";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import ArticlesListing from "./articles-listing";

export const metadata: Metadata = {
  title: "Artikel | Indorihlah Utama",
  description:
    "Baca panduan, tips, destinasi, dan berita seputar perjalanan ibadah Haji dan Umroh bersama Indorihlah.",
};

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[76px] sm:pt-[84px]">
        <ArticlesListing />
      </main>
      <ContactSection />
    </>
  );
}