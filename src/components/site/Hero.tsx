import heroAsset from "@/assets/hero-nonyameko.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div className="reveal is-visible max-w-[520px] justify-self-end">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Appointment-based studio
          </span>
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Protective Styles <span className="text-gold">Made With Care</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Professional braiding and hairstyling services designed to help you look and feel your best.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-foreground/15 bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="reveal is-visible">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={heroAsset}
              alt="Woman with beautifully styled neat knotless braids"
              width={1080}
              height={1350}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-foreground/10 bg-card p-5 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <p className="font-serif text-3xl font-semibold text-gold">100%</p>
              <p className="mt-1 text-sm font-medium text-foreground">Styled With Love</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Every hairstyle is created with care, patience, and attention to detail.
              </p>
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-card p-5 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <p className="font-serif text-3xl font-semibold text-gold">50+</p>
              <p className="mt-1 text-sm font-medium text-foreground">Happy Clients</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Trusted by women who love beautiful protective styles.
              </p>
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-card p-5 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <p className="font-serif text-3xl font-semibold text-gold">Professional</p>
              <p className="mt-1 text-sm font-medium text-foreground">Personalized Service</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                A comfortable experience focused on quality and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
