import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, TIKTOK_URL, TIKTOK_USERNAME } from "@/lib/site-data";

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold">Say Hello</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Get In Touch</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Have a question or want to chat about your next style? Reach out on your favourite platform or
            drop a message below.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:bg-secondary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground">
                <FaWhatsapp className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-medium">WhatsApp</span>
                <span className="text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</span>
              </span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:bg-secondary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground">
                <FaInstagram className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-medium">Instagram</span>
                <span className="text-sm text-muted-foreground">@{INSTAGRAM_HANDLE}</span>
              </span>
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:bg-secondary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground">
                <FaTiktok className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-medium">TikTok</span>
                <span className="text-sm text-muted-foreground">{TIKTOK_USERNAME}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="reveal rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <Send className="h-12 w-12 text-gold" />
              <h3 className="mt-5 font-serif text-2xl font-semibold">Message Sent!</h3>
              <p className="mt-2 text-muted-foreground">Thank you for reaching out. We&apos;ll reply soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="ct-name">Name</label>
                <input id="ct-name" required maxLength={80} className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="ct-email">Email</label>
                <input id="ct-email" required type="email" maxLength={120} className={inputClass} placeholder="you@email.com" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="ct-msg">Message</label>
                <textarea id="ct-msg" required rows={5} maxLength={800} className={inputClass} placeholder="How can we help?" />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
