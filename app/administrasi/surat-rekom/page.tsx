import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import RecommendationForm from "./recommendation-form";

export const metadata: Metadata = {
  title: "Surat Rekomendasi | Indorihlah Utama",
  description:
    "Ajukan permohonan surat rekomendasi pembuatan paspor untuk keperluan ibadah haji atau umroh bersama Indorihlah Utama.",
};

export default function RecommendationPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 pt-[76px] sm:pt-[84px]">
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Administrasi Indorihlah Utama
              </p>
              <h1 className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Surat Rekomendasi
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                Formulir permohonan surat rekomendasi pembuatan paspor untuk
                keperluan ibadah haji/umroh
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 md:p-10">
              <RecommendationForm />
            </div>

            <div className="mt-7 text-center">
              <Link
                href="/"
                className="inline-flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <HiArrowLeft aria-hidden="true" className="size-4" />
                Kembali ke beranda
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ContactSection />
    </>
  );
}