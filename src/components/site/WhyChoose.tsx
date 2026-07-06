import { Award, Sparkles, HeartHandshake, ShieldCheck, CalendarClock, Gem } from "lucide-react";

const features = [
  { icon: Award, title: "Professional Service", text: "Skilled, reliable styling rooted in a genuine nurse's care for people." },
  { icon: Sparkles, title: "Attention to Detail", text: "Neat parting and clean finishes on every single braid, every time." },
  { icon: HeartHandshake, title: "Comfortable Experience", text: "A warm, relaxed space where you can unwind and enjoy your time." },
  { icon: Gem, title: "Quality Protective Styling", text: "Styles designed to protect your hair and last beautifully for weeks." },
  { icon: CalendarClock, title: "Flexible Scheduling", text: "Appointment times that work around your busy life and routine." },
  { icon: ShieldCheck, title: "Personalized Care", text: "Every look is tailored to you, your hair and the occasion." },
];

export function WhyChoose() {
  return (
    <section className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold">The Difference</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Why Choose Styled By Mama Bear</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:bg-white/10"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-gold-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
