import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata = { title: "Client Love" };

const testimonials = [
  { stars: 5, text: "Shan was such a calming presence at our wedding and the booth looked incredible in the room.",                           name: "Aisha & Leon",     event: "Wedding · Islington" },
  { stars: 5, text: "Every student wanted a print. The queue moved quickly and the quality was brilliant.",                                  name: "Mr. Fraser",       event: "Prom · North London" },
  { stars: 5, text: "Professional from the first email and the branded strips were perfect for our launch.",                                  name: "Naomi K.",         event: "Corporate Event · Canary Wharf" },
  { stars: 5, text: "The setup felt premium and every age group got involved. Exactly what we wanted.",                                       name: "Rachel T.",        event: "Birthday Party · Camden" },
  { stars: 5, text: "So easy to work with, lovely with the guests, and the guest book became one of our favourite keepsakes.",               name: "Hannah & James",   event: "Wedding · Surrey" },
  { stars: 5, text: "We booked for a Year 13 event and the energy was spot on. Fun, but really organised.",                                   name: "Mrs Ahmed",        event: "Sixth Form Prom · Essex" },
  { stars: 5, text: "The GIF booth was a huge hit with our team, and the social sharing station kept people coming back.",                   name: "Ben P.",           event: "Corporate Party · London Bridge" },
  { stars: 5, text: "Honestly one of the easiest suppliers we booked. Shan just got it and handled everything.",                             name: "Simran & Dev",     event: "Wedding · Hackney" },
  { stars: 5, text: "Our daughter loved every minute and the grandparents were back in the booth all evening too.",                          name: "Louise M.",        event: "Birthday Celebration · South London" },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero eyebrow="Client Love" title="Client Love" description="A few kind words from couples, schools, families, and brands who invited The Shan Booth to their events." heroBg="/assets/hero-banner-3.webp" />

      {/* Score summary */}
      <section style={{ padding: "clamp(3rem,5vw,5rem) 0" }}>
        <div className="mx-auto px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal p-8 rounded-[var(--radius-xl)] text-center flex flex-col gap-3 items-center" style={cardStyle}>
            <div className="font-extrabold text-white" style={{ fontSize: "clamp(3rem,8vw,5rem)", lineHeight: 1, letterSpacing: "-0.06em", fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>5.0</div>
            <div className="text-2xl tracking-widest" style={{ color: "var(--color-accent)" }}>★★★★★</div>
            <p className="m-0 text-sm max-w-xs">Average rating across 50+ reviews from weddings, proms, birthdays, and corporate bookings.</p>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {[["💍","Weddings"],["🎓","Proms"],["🏢","Corporate"],["🎂","Birthdays"]].map(([icon, label]) => (
                <span key={label} className="pill-note text-xs">{icon} {label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3" style={{ maxWidth: "1240px" }}>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", alignItems: "start" }}>
            {testimonials.map(({ stars, text, name, event }) => (
              <article key={name} className="reveal flex flex-col gap-3 p-6 rounded-[var(--radius-lg)]" style={cardStyle}>
                <div className="text-[1.1rem] tracking-[0.08em]" style={{ color: "var(--color-accent)" }}>{"★".repeat(stars)}</div>
                <p className="text-sm flex-1">&ldquo;{text}&rdquo;</p>
                <div>
                  <h3 className="text-sm font-bold text-white m-0" style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>{name}</h3>
                  <p className="text-xs m-0" style={{ color: "var(--color-fg-faint)" }}>{event}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3" style={{ maxWidth: "1240px" }}>
          <div className="reveal text-center p-10 md:p-14 rounded-[var(--radius-xl)]" style={cardStyle}>
            <h2 className="section-title mx-auto" style={{ maxWidth: "28rem" }}>Ready to create your own moment?</h2>
            <p className="mx-auto mb-8" style={{ maxWidth: "22rem" }}>Get a tailored quote and check availability for your date.</p>
            <Link href="/quickquote" className="btn btn-primary">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
