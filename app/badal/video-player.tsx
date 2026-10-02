"use client";

import { useEffect, useState } from "react";
import { FaPause, FaPlay, FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const videoDuration = 98;

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

export default function BadalVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= videoDuration) {
          setIsPlaying(false);
          return 0;
        }
        return current + 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  return (
    <div
      aria-label="Pratinjau video prosesi badal"
      className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-xl bg-slate-950 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/10"
    >
      <div
        role="img"
        aria-label="Jamaah dan suasana Masjidil Haram"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(4, 10, 20, 0.02) 35%, rgba(4, 10, 20, 0.78) 100%), url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&h=1600&q=85')",
        }}
      />

      <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        Dokumentasi badal
      </div>

      <button
        type="button"
        onClick={() => setIsPlaying((playing) => !playing)}
        aria-label={isPlaying ? "Jeda video" : "Putar video"}
        className="absolute left-1/2 top-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {isPlaying ? (
          <FaPause aria-hidden="true" className="size-4" />
        ) : (
          <FaPlay aria-hidden="true" className="ml-1 size-4" />
        )}
      </button>

      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12 text-white">
        <p className="mb-3 text-xs font-semibold">Prosesi ibadah di Tanah Suci</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying((playing) => !playing)}
            aria-label={isPlaying ? "Jeda video" : "Putar video"}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
          >
            {isPlaying ? (
              <FaPause aria-hidden="true" className="size-3" />
            ) : (
              <FaPlay aria-hidden="true" className="ml-0.5 size-3" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max={videoDuration}
            value={progress}
            onChange={(event) => setProgress(Number(event.target.value))}
            aria-label="Posisi video"
            className="h-1 min-w-0 flex-1 cursor-pointer accent-sky-400"
          />
          <span className="shrink-0 text-[10px] tabular-nums text-white/90">
            {formatTime(progress)} / {formatTime(videoDuration)}
          </span>
          <button
            type="button"
            onClick={() => setIsMuted((muted) => !muted)}
            aria-label={isMuted ? "Nyalakan suara" : "Matikan suara"}
            aria-pressed={isMuted}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
          >
            {isMuted ? (
              <FaVolumeXmark aria-hidden="true" className="size-3.5" />
            ) : (
              <FaVolumeHigh aria-hidden="true" className="size-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}