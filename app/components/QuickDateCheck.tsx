"use client";

import { useEffect, useRef, useState } from "react";
import { FormInput } from "./FormCard";

type Contact = "email" | "phone";

const cardStyle = {
  background:
    "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015)),rgba(24,24,24,0.96)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  boxShadow:
    "inset 0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.5)",
};

interface Props {
  open: boolean;
  onClose: () => void;
  /** Shown back to the visitor so they know what they are enquiring about. */
  summary?: string;
}

/**
 * Three-field date check.
 *
 * The full quote form asks for seven fields, which is too much for someone who
 * only wants to know if their date is free. Contact is one field, and the
 * visitor picks email or phone: some people will not hand over a mobile, and
 * corporate bookers in particular prefer email.
 */
export default function QuickDateCheck({ open, onClose, summary }: Props) {
  const [contactType, setContactType] = useState<Contact>("email");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const contact = String(form.get("contact") || "").trim();

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.get("fullName"),
          eventDate: form.get("eventDate"),
          email: contactType === "email" ? contact : "",
          phoneNumber: contactType === "phone" ? contact : "",
          message: summary ? `Quick date check — ${summary}` : "Quick date check",
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div
      className="quick-check-overlay"
      onClick={(e) => {
        if (e.target === dialogRef.current?.parentElement) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-check-title"
        tabIndex={-1}
        className="quick-check-dialog p-6 md:p-8 rounded-[var(--radius-xl)]"
        style={cardStyle}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="quick-check-close"
        >
          ×
        </button>

        {status === "sent" ? (
          <div className="text-center">
            <p style={{ fontSize: "2.5rem", margin: "0 0 0.5rem" }}>🎉</p>
            <h2 id="quick-check-title" className="section-title">
              Sent — thanks!
            </h2>
            <p>
              We have your date and will come straight back to you, usually
              within minutes.
            </p>
            <button type="button" onClick={onClose} className="btn btn-secondary mt-2">
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow">Check Availability</span>
            <h2 id="quick-check-title" className="section-title">
              Is your date free?
            </h2>
            <p className="text-sm">
              Three details is all we need. No obligation, and we usually reply
              within minutes.
            </p>

            {summary && (
              <p
                className="text-sm rounded-[var(--radius-lg)] px-4 py-3 mb-4"
                style={{
                  background: "rgba(26,111,212,0.11)",
                  boxShadow: "inset 0 0 0 1px rgba(26,111,212,0.28)",
                  color: "var(--color-accent)",
                }}
              >
                {summary}
              </p>
            )}

            <form onSubmit={handleSubmit} className="grid gap-4">
              <FormInput
                id="qc-name"
                name="fullName"
                label="Your name"
                type="text"
                required
                autoComplete="name"
              />

              <FormInput
                id="qc-date"
                name="eventDate"
                label="Event date"
                type="date"
                required
              />

              <div>
                <div className="flex gap-2 mb-2">
                  {(["email", "phone"] as Contact[]).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setContactType(type)}
                      aria-pressed={contactType === type}
                      className={`filter-btn${contactType === type ? " active" : ""}`}
                    >
                      {type === "email" ? "Email me" : "Call or text me"}
                    </button>
                  ))}
                </div>
                <FormInput
                  id="qc-contact"
                  name="contact"
                  label={contactType === "email" ? "Email address" : "Phone number"}
                  type={contactType === "email" ? "email" : "tel"}
                  required
                  autoComplete={contactType === "email" ? "email" : "tel"}
                />
              </div>

              {status === "error" && (
                <p className="text-sm" style={{ color: "#ff8a8a" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary w-full justify-center"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Check my date →"}
              </button>

              <p className="text-xs text-center m-0" style={{ color: "var(--color-fg-muted)" }}>
                Prefer to chat? Message us on WhatsApp instead.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
