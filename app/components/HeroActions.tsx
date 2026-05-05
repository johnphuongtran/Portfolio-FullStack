"use client";

import { useEffect, useState } from "react";

const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-zinc-950";

const btnSecondary =
  "inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800";

const btnGhost =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-sky-700 transition hover:bg-sky-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] dark:text-sky-400 dark:hover:bg-sky-500/15";

export function HeroActions({
  linkedin,
  github,
  email,
  resumePath,
}: {
  linkedin: string;
  github: string;
  email: string;
  resumePath: string;
}) {
  const [resumeOk, setResumeOk] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(resumePath, { method: "HEAD", cache: "no-store" })
      .then((r) => {
        if (!cancelled) setResumeOk(r.ok);
      })
      .catch(() => {
        if (!cancelled) setResumeOk(false);
      });
    return () => {
      cancelled = true;
    };
  }, [resumePath]);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
        LinkedIn
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
        GitHub
      </a>
      <a href={email} className={btnGhost}>
        Email
      </a>
      {resumeOk ? (
        <a
          href={resumePath}
          download
          className={
            btnSecondary +
            " border-dashed border-sky-300/80 dark:border-sky-600/50"
          }
        >
          Download résumé
        </a>
      ) : null}
    </div>
  );
}
