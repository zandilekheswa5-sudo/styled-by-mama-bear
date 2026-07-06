import { galleryImages } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold">Our Work</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Style Gallery</h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse of finished styles created with care, patience and attention to every detail.
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <figure
              key={img.src}
              className="group overflow-hidden rounded-2xl shadow-soft transition-shadow hover:shadow-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
