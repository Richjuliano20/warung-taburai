"use client";

import { motion } from "motion/react";
import { useState } from "react";

type Video = {
  id: string;
  title: string;
  vlogger: string;
};

const videos: Video[] = [
  {
    id: "RHk00Pj5IzU",
    title: "Exploring Warung Taburai",
    vlogger: "Nex Carlos",
  },
  {
    id: "dNldMH_MxqQ",
    title: "Review Warung Taburai Praz Teguh",
    vlogger: "Anak Kuliner",
  },
  {
    id: "Jh8Q_Gzn0Xc",
    title: "Cobain Menu Warung Taburai",
    vlogger: "Tasyi Athasyia",
  },
  {
    id: "sYkGMh2UR8w",
    title: "Menu Termurah Warung Taburai",
    vlogger: "Ken & Grat",
  },
];

function VideoCard({ video, isActive, onClick }: { video: Video; isActive: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
      className={`w-full min-w-[160px] rounded-xl p-4 text-left transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none ${
        isActive
          ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
          : "bg-[var(--color-surface)] hover:bg-[var(--color-accent)]/20"
      }`}
    >
      <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${isActive ? "text-white/70" : "text-[var(--color-secondary)]"}`}>
        {video.vlogger}
      </span>
      <p className={`mt-1 text-sm font-medium leading-snug ${isActive ? "text-white" : "text-[var(--color-foreground)]"}`}>
        {video.title}
      </p>
    </motion.button>
  );
}

export default function YouTubeEmbed() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const currentVideo = videos[active];

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      {/* Video player */}
      <div className="flex-1">
        <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl" style={{ paddingBottom: "56.25%" }}>
          {/* Thumbnail as placeholder */}
          {!loaded && (
            <button
              onClick={() => setLoaded(true)}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black group cursor-pointer"
              aria-label={`Putar video ${currentVideo.vlogger}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${currentVideo.id}/hqdefault.jpg`}
                alt={`${currentVideo.vlogger} - ${currentVideo.title}`}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] shadow-lg transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
          {loaded && (
            <iframe
              key={currentVideo.id}
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0`}
              title={`${currentVideo.vlogger} - ${currentVideo.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          )}
        </div>
      </div>

      {/* Video list */}
      <div className="flex flex-row gap-3 overflow-x-auto pb-2 lg:w-64 lg:flex-col lg:overflow-x-visible lg:pb-0">
        {videos.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={index === active}
            onClick={() => {
              setActive(index);
              setLoaded(false);
            }}
          />
        ))}
      </div>
    </div>
  );
}
