import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { services, timeSlots } from "@/lib/site-data";

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/30";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: (document.getElementById("booking")?.offsetTop ?? 0) - 80, behavior: "smooth" });
  };

  return (
    <section id="booking" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-gold">Reserve Your Seat</span>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Book An Appointment</h2>
          <p className="mt-4 text-muted-foreground">
            Fill in your details below and we'll confirm your booking shortly.
          </p>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
          {submitted ? (
            <div className="flex flex-col items-center px-6 py-16 text-center">
              <CheckCircle2 className="h-16 w-16 text-gold" />
              <h3 className="mt-6 font-serif text-3xl font-semibold">Appointment Requested!</h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                Thank you{name ? `, ${name.split(" ")[0]}` : ""}! Your request
                {service ? ` for ${service}` : ""}{date ? ` on ${date}` : ""}{time ? ` at ${time}` : ""} has been
                received. We'll be in touch soon to confirm everything.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 p-6 sm:p-10 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="bk-name">Full Name</label>
                <input id="bk-name" required maxLength={80} value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Your full name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="bk-phone">Phone Number</label>
                <input id="bk-phone" required type="tel" maxLength={20} className={inputClass} placeholder="e.g. 071 234 5678" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="bk-email">Email Address</label>
                <input id="bk-email" required type="email" maxLength={120} className={inputClass} placeholder="you@email.com" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="bk-service">Select Service</label>
                <select id="bk-service" required value={service} onChange={(e) => setService(e.target.value)} className={inputClass}>
                  <option value="" disabled>Choose a style</option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="bk-date">Preferred Date</label>
                <input id="bk-date" required type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Preferred Time</label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${
                        time === t
                          ? "border-gold bg-gold text-gold-foreground"
                          : "border-input bg-card text-foreground hover:bg-secondary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium" htmlFor="bk-notes">Additional Notes</label>
                <textarea id="bk-notes" rows={3} maxLength={500} className={inputClass} placeholder="Hair length, colour, special requests…" />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  <CalendarCheck className="h-5 w-5" /> Request Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
