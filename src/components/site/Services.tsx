import { Clock } from "lucide-react";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold">What We Offer</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            Beautiful protective styles tailored to you. Prices are a starting guide and may vary with
            length, size and added hair.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.name}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={`${s.name} hairstyle`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold">{s.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-medium text-gold">{s.price}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {s.duration}
                  </span>
                </div>
                <a
                  href="#booking"
                  className="mt-5 block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
