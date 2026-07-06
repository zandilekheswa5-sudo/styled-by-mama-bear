import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { WHATSAPP_NUMBER, INSTAGRAM_URL, TIKTOK_URL } from "@/lib/site-data";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#booking" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold">Styled By Mama Bear</p>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Protective styles made with care. Styled with love by Nonyameko.
          </p>
        </div>

        <div className="md:justify-self-center">
          <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-end">
          <h3 className="font-serif text-lg font-semibold">Follow Along</h3>
          <div className="mt-4 flex gap-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-gold-foreground">
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-gold-foreground">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-gold-foreground">
              <FaTiktok className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-primary-foreground/60 sm:px-8">
          © {new Date().getFullYear()} Styled By Mama Bear. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
