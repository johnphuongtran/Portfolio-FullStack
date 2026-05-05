"use client";

import { useState } from "react";

const field =
  "block w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/35 dark:text-zinc-50 dark:placeholder:text-zinc-500";

const btnSubmit =
  "inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        missingEnv?: string[];
      };

      if (!res.ok) {
        setStatus("error");
        let msg = typeof data.error === "string" ? data.error : "Something went wrong.";
        if (Array.isArray(data.missingEnv) && data.missingEnv.length > 0) {
          msg += ` Missing on server: ${data.missingEnv.join(", ")}.`;
        }
        setErrorMessage(msg);
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100"
      >
        Thanks — your message was sent. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative max-w-2xl space-y-5" noValidate>
      <div className="pointer-events-none absolute -left-[9999px] flex h-px w-px flex-col overflow-hidden opacity-0">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} min-h-[120px] resize-y`}
        />
        <p className="mt-1.5 text-xs text-zinc-500">10–5000 characters.</p>
      </div>

      {status === "error" && errorMessage ? (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-100"
        >
          {errorMessage}
        </p>
      ) : null}

      <button type="submit" disabled={status === "loading"} className={btnSubmit}>
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
