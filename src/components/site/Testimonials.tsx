import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold">Kind Words</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">What Clients Say</h2>
        </div>

        <div className="reveal mt-12">
          <Carousel opts={{ align: "start", loop: true }} className="px-2">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2">
                  <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                    <Quote className="h-8 w-8 text-gold" />
                    <p className="mt-4 font-serif text-xl leading-relaxed text-foreground">"{t.quote}"</p>
                    <p className="mt-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      — {t.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
