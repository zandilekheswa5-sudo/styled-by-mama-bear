import celebratingImage from "@/assets/nonyameko.jpg";

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="reveal mx-auto mb-16 max-w-2xl px-5 text-center sm:px-8">
        <div className="relative mx-auto w-fit">
          <div className="absolute -inset-3 rounded-[2.25rem] bg-gold/15 blur-xl" />
          <img
            src={celebratingImage}
            alt="Nonyameko, founder of Styled By Mama Bear"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative mx-auto aspect-[4/5] w-64 rounded-[2rem] border border-gold/30 object-cover shadow-card sm:w-72"
          />
        </div>
        <p className="mt-6 font-serif text-xl italic text-foreground">
          Celebrating Nonyameko — nurse, graduate, and the heart behind Mama Bear.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold">Our Story</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Meet Nonyameko</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>Hi, I'm Nonyameko, the heart behind Styled By Mama Bear.</p>
            <p>
              By profession, I'm a nurse, and caring for people has always been a big part of who I am.
              Beyond healthcare, I've always had a passion for beauty and hairstyling. What started as
              doing hair in my spare time gradually became a meaningful way for me to express creativity
              while helping women feel confident, beautiful, and cared for.
            </p>
            <p>
              At Styled By Mama Bear, every style is created with patience, attention to detail, and
              genuine care. I specialize in beautiful protective styles designed to help you look and feel
              your absolute best.
            </p>
            <p>
              Whether you're booking for a fresh new look, a special occasion, or simply taking time for
              self-care, my goal is to make every appointment a warm, comfortable, and enjoyable experience.
            </p>
          </div>
          <p className="mt-6 font-serif text-xl italic text-foreground">
            Styled with care. Styled with love. Styled by Mama Bear.
          </p>
      </div>
    </section>
  );
}
