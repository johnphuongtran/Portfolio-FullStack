"use client";

import { useState } from "react";

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
      <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100">
        Thanks — your message was sent. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="block w-full rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-600"
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
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
          className="block w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm outline-none ring-sky-500/40 focus:border-sky-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
        <p className="mt-1 text-xs text-zinc-500">10–5000 characters.</p>
      </div>

      {status === "error" && errorMessage ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-100">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
