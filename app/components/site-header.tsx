"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

const menuItems = [
  { label: "Haji", href: "/haji" },
  { label: "Umroh", href: "/umroh" },
  { label: "Badal", href: "/badal" },
  { label: "Wisata", href: "/wisata" },
  { label: "Artikel", href: "/artikel" },
  { label: "Form Pendaftaran", href: "/administrasi/form-pendaftaran" },
  { label: "Surat Rekomendasi Paspor", href: "/administrasi/surat-rekom" },
  { label: "Surat Cuti Kerja/ Izin Sekolah", href: "/administrasi/surat-cuti" },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Tiktok", href: "https://tiktok.com", icon: FaTiktok },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    menuPanelRef.current?.querySelector("a")?.focus();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
    if (isMenuOpen) menuButtonRef.current?.focus();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white shadow-sm">
      <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:h-[84px] sm:px-8">
        <Link
          href="/"
          aria-label="Indorihlah Utama, beranda"
          className="flex items-center"
        >
          <Image
            src="/indorihlah-logo.png"
            alt="Indorihlah Utama"
            width={320}
            height={100}
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <Button
          ref={menuButtonRef}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="floating-menu"
          className={`!rounded-md !px-5 !py-2.5 !text-xs !font-bold !tracking-[0.12em] !text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${
            isMenuOpen
              ? "!bg-slate-900 hover:!bg-slate-800"
              : "!bg-blue-600 hover:!bg-blue-700"
          }`}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </Button>

        <section
          ref={menuPanelRef}
          id="floating-menu"
          aria-label="Menu utama"
          aria-hidden={!isMenuOpen}
          className={`absolute right-0 top-full mt-2 flex max-h-[calc(100dvh-6rem)] w-[min(calc(100vw-2rem),350px)] flex-col overflow-y-auto rounded-xl bg-blue-600 p-6 text-white shadow-2xl origin-top-right ${
            isMenuOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto transition-all duration-300 ease-out"
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none transition-all duration-200 ease-in"
          }`}
        >
          <nav aria-label="Navigasi utama">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => {
                      setIsMenuOpen(false);
                      menuButtonRef.current?.focus();
                    }}
                    className="group flex items-center justify-between gap-3 text-sm font-medium leading-5 transition-colors hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span>{item.label}</span>
                    <HiArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-6 flex items-center gap-5 border-t border-white/30 pt-4 text-xs">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-white"
                >
                  <Icon aria-hidden="true" className="size-3" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </header>
  );
}