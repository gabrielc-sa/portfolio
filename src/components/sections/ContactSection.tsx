"use client";

import { useState, FormEvent } from "react";

const WEB3FORMS_API = "https://api.web3forms.com/submit";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";
const EMAIL = "your.email@example.com";

type FormResult = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [result, setResult] = useState<FormResult>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey?.trim()) {
      setResult("error");
      return;
    }

    setResult("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch(WEB3FORMS_API, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.success ? "success" : "error");
      if (data.success) form.reset();
    } catch {
      setResult("error");
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-palette-light-muted bg-palette-light-muted/30 px-4 py-20"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-3xl font-bold text-palette-dark-deep">
          Contact
        </h2>

        <div className="mb-10 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-palette-dark-deep px-4 py-2 text-sm font-medium text-palette-light transition hover:bg-palette-dark"
          >
            <span aria-hidden>✉</span> Email me
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-palette-dark-deep transition hover:text-palette-dark"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="h-6 w-6" />
            LinkedIn
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-xl border border-palette-light-muted bg-white p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-palette-dark-deep"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={result === "loading"}
              className="w-full rounded-lg border border-palette-muted bg-palette-light px-3 py-2 text-palette-dark-deep placeholder:text-palette-muted focus:border-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-dark disabled:opacity-60"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-palette-dark-deep"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={result === "loading"}
              className="w-full rounded-lg border border-palette-muted bg-palette-light px-3 py-2 text-palette-dark-deep placeholder:text-palette-muted focus:border-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-dark disabled:opacity-60"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-palette-dark-deep"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              disabled={result === "loading"}
              className="w-full resize-y rounded-lg border border-palette-muted bg-palette-light px-3 py-2 text-palette-dark-deep placeholder:text-palette-muted focus:border-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-dark disabled:opacity-60"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            disabled={result === "loading"}
            className="w-full rounded-lg bg-palette-dark-deep px-4 py-3 text-sm font-medium text-palette-light transition hover:bg-palette-dark disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {result === "loading" ? "Sending…" : "Send message"}
          </button>
          {result === "success" && (
            <p className="text-center text-sm text-palette-dark" role="status">
              Thanks! Your message has been sent.
            </p>
          )}
          {result === "error" && (
            <p className="text-center text-sm text-red-600" role="alert">
              Something went wrong. Please try again or use the email link above.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
