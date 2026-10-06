import Image from "next/image";
import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white/25 backdrop-blur-[2px]"
    >
      <style>{`
        @keyframes indorihlah-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.025); }
        }

        @keyframes indorihlah-shadow {
          0%, 100% { transform: scaleX(0.76); opacity: 0.12; }
          50% { transform: scaleX(1); opacity: 0.2; }
        }

        @media (prefers-reduced-motion: reduce) {
          .indorihlah-loading-logo,
          .indorihlah-loading-shadow {
            animation: none !important;
          }
        }
      `}</style>

      <div className="relative flex flex-col items-center">
        <div
          className="indorihlah-loading-logo relative z-10"
          style={{ animation: "indorihlah-float 3.6s ease-in-out infinite" }}
        >
          <Image
            src="/indorihlah-word.png"
            width={180}
            height={180}
            alt="Loading Indorihlah"
            priority
            className="h-[180px] w-[180px] object-contain drop-shadow-[0_12px_18px_rgba(15,23,42,0.12)]"
          />
        </div>

        <span
          aria-hidden="true"
          className="indorihlah-loading-shadow absolute -bottom-1 h-3 w-28 rounded-[50%] bg-slate-900 blur-md"
          style={{ animation: "indorihlah-shadow 3.6s ease-in-out infinite" }}
        />
      </div>

      <div className="mt-8 flex flex-col items-center">
        <Spinner color="info" size="xl" aria-label="Memuat halaman" />
        <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
          Memuat halaman...
        </p>
      </div>

      <span className="sr-only">Memuat halaman Indorihlah</span>
    </div>
  );
}