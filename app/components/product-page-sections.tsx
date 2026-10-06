import Image from "next/image";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { FaArrowRight, FaCalendarDays, FaHotel } from "react-icons/fa6";
import type { IconType } from "react-icons";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";

export type ProductPackage = {
  title: string;
  description: string;
  duration: string;
  accommodation: string;
  price: string;
  image: string;
  imageAlt: string;
};

export type ProductFeature = {
  title: string;
  description: string;
  icon: IconType;
};

export type ProductFaq = {
  question: string;
  answer: ReactNode;
};

export function ProductHero({
  eyebrow,
  title,
  description,
  image,
  imagePosition = "center",
  consultationMessage,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  image: string;
  imagePosition?: string;
  consultationMessage: string;
}) {
  return (
    <section
      aria-labelledby="product-hero-title"
      className="relative flex min-h-[68vh] items-center justify-center overflow-hidden bg-slate-900 px-5 py-24 text-center text-white sm:px-8 sm:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: imagePosition,
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-5 text-sm font-semibold text-blue-100">{eyebrow}</p>
        <h1
          id="product-hero-title"
          className="text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        <div className="mt-5 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
          {description}
        </div>
        <a
          href={`https://wa.me/6285648959299?text=${encodeURIComponent(consultationMessage)}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Konsultasi Gratis
          <FaArrowRight aria-hidden="true" className="size-3.5" />
        </a>
        <a
          href="#paket"
          className="mt-3 inline-flex min-h-10 items-center rounded-full px-5 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Lihat pilihan paket
        </a>
      </div>
    </section>
  );
}

export function ProductPackageSection({
  eyebrow = "Pilihan perjalanan",
  title,
  description,
  packages,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  packages: ProductPackage[];
}) {
  return (
    <section
      id="paket"
      aria-labelledby="product-packages-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className={container}>
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-sm font-semibold text-blue-700">{eyebrow}</p>
          <h2
            id="product-packages-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>
        </div>

        <div className="space-y-5">
          {packages.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md md:flex-row"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 bg-slate-100 md:aspect-auto md:min-h-[232px] md:w-1/3">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1200}
                  height={900}
                  unoptimized
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:rounded-l-2xl"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center p-5 sm:p-7 md:w-2/4">
                <h3 className="mt-1 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  <li className="inline-flex items-center gap-2">
                    <FaCalendarDays aria-hidden="true" className="size-4 text-slate-400" />
                    {item.duration}
                  </li>
                  <li className="inline-flex items-start gap-2">
                    <FaHotel aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-slate-400" />
                    <span>{item.accommodation}</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-row items-center justify-between gap-4 border-t border-slate-100 p-5 sm:px-7 md:w-1/4 md:flex-col md:items-stretch md:justify-center md:border-l md:border-t-0 md:p-6">
                <div>
                  <p className="text-lg font-bold text-blue-700">{item.price}</p>
                </div>
                <a
                  href={`https://wa.me/6285648959299?text=${encodeURIComponent(`Assalamu'alaikum, saya ingin bertanya tentang ${item.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:w-full"
                >
                  Tanya paket <FaArrowRight aria-hidden="true" className="size-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductFeatureSection({
  eyebrow = "Perjalanan yang disiapkan",
  title,
  description,
  features,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  features: ProductFeature[];
}) {
  return (
    <section
      aria-labelledby="product-features-title"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className={container}>
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-sm font-semibold text-blue-700">{eyebrow}</p>
          <h2
            id="product-features-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map(({ title: featureTitle, description: featureDescription, icon: Icon }) => (
            <article
              key={featureTitle}
              className="rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7"
            >
              <Icon aria-hidden="true" className="size-6 text-blue-700" />
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {featureTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {featureDescription}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductIntroSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className={`${container} grid items-center gap-10 md:grid-cols-2 md:gap-14`}>
        <div>
          <p className="mb-3 text-sm font-semibold text-blue-700">{eyebrow}</p>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={900}
            unoptimized
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function ProductFaqSection({
  eyebrow = "Pusat informasi",
  title,
  faqs,
}: {
  eyebrow?: string;
  title: string;
  faqs: ProductFaq[];
}) {
  return (
    <section
      id="faq"
      aria-labelledby="product-faq-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 text-sm font-semibold text-blue-700">{eyebrow}</p>
          <h2
            id="product-faq-title"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            {title}
          </h2>
        </div>
        <Accordion flush collapseAll className="divide-y divide-gray-200 border-b border-gray-200 bg-transparent">
          {faqs.map(({ question, answer }) => (
            <AccordionPanel key={question}>
              <AccordionTitle className="!bg-transparent !px-0 !py-5 text-left text-base font-semibold !text-slate-900 hover:!bg-transparent focus:!ring-blue-100 sm:text-lg">
                {question}
              </AccordionTitle>
              <AccordionContent className="!bg-transparent !px-0 !pb-6 !pt-0">
                <div className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {answer}
                </div>
              </AccordionContent>
            </AccordionPanel>
          ))}
        </Accordion>
      </div>
    </section>
  );
}