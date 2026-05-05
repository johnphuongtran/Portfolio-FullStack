"use client";

import { useEffect, useState } from "react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#spotlight", label: "Spotlight" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

function linkClass() {
  return [
    "rounded-md px-2 py-1 text-sm transition-colors",
    "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900",
    "dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60",
  ].join(" ");
}

export function SiteHeader({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_85%,transparent)] backdrop-blur-xl">
      <div className="relative mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-6 md:px-8">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-14 focus:z-[60] focus:rounded-md focus:bg-sky-600 focus:px-3 focus:py-2 focus:text-sm focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] dark:text-zinc-50"
        >
          {name}
        </a>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-100 md:hidden dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-nav"
          className={
            open
              ? "absolute left-0 right-0 top-full flex max-h-[min(70vh,calc(100dvh-3.5rem))] flex-col gap-1 overflow-y-auto border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_92%,transparent)] p-4 backdrop-blur-xl md:static md:max-h-none md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-x-1 md:gap-y-1 md:border-0 md:bg-transparent md:p-0"
              : "hidden md:flex md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-x-1 md:gap-y-1"
          }
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClass()}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
