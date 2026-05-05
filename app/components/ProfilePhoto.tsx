"use client";

import Image from "next/image";
import { useState } from "react";

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function ProfilePhoto({
  name,
  src = "/profile.png",
}: {
  name: string;
  /** File in /public — e.g. profile.jpg or profile.png */
  src?: string;
}) {
  const [failed, setFailed] = useState(false);
  const initials = initialsFromName(name);

  if (failed) {
    return (
      <div
        className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/25 to-zinc-200 text-2xl font-semibold tracking-tight text-zinc-800 ring-1 ring-[var(--border)] dark:from-sky-400/20 dark:to-zinc-800 dark:text-zinc-100 md:h-44 md:w-44"
        aria-label={`${name} — profile photo not found; add an image to public`}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl ring-1 ring-[var(--border)] md:h-44 md:w-44">
      <Image
        src={src}
        alt={`${name}, profile photo`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 160px, 176px"
        priority
        onError={() => setFailed(true)}
      />
    </div>
  );
}
