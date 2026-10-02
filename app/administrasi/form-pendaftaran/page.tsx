import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import SiteHeader from "@/app/components/site-header";
import { ContactSection } from "@/app/components/landing-sections";
import RegistrationForm from "./registration-form";

export const metadata: Metadata = {
  title: "Form Pendaftaran | Indorihlah Utama",
  description:
    "Lengkapi formulir pendaftaran perjalanan ibadah bersama Indorihlah Utama.",
};

export default function RegistrationPage() {
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
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Form Pendaftaran
              </h1>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 md:p-10">
              <RegistrationForm />
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