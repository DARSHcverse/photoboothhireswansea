import Link from "next/link";
import PageHero from "../components/PageHero";

const PAGE_URL = "https://www.photoboothhireswansea.co.uk/about";

export const metadata = {
  title: { absolute: "About Us | Photo Booth Hire Swansea | PBH" },
  description:
    "The story behind Photo Booth Hire Swansea — from Melbourne Australia to South Wales. Experienced operator launching March 2027.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "About Us | Photo Booth Hire Swansea | PBH",
    description:
      "The story behind Photo Booth Hire Swansea — from Melbourne Australia to South Wales.",
    url: PAGE_URL,
  },
};

const features = [
  { icon: "📸", title: "Canon R100 camera quality",  desc: "Mirrorless image quality and studio lighting deliver photos that look sharp, vibrant, and premium." },
  { icon: "🖨️", title: "Unlimited instant prints",   desc: "Every package includes unlimited instant prints, so guests leave with proper keepsakes on the night." },
  { icon: "💾", title: "All-inclusive extras",        desc: "USB digital images and online galleries are included, with no hidden extras added later." },
  { icon: "👩‍💼", title: "Professional attendants",  desc: "Every booking includes a professional attendant who handles setup, hosting, and pack-down." },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About Photo Booth Hire Swansea" title="About Photo Booth Hire Swansea" description="A fresh, all-inclusive photo booth hire service based in Swansea and built for weddings, corporate events, school proms, and milestone parties." heroBg="/assets/hero-banner-4.webp" />

      {/* How It Started */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div
            className="reveal p-6 md:p-10 rounded-[var(--radius-xl)] mx-auto"
            style={{ ...cardStyle, maxWidth: "800px" }}
          >
            <span className="eyebrow">From Australia to Wales</span>
            <h2 className="section-title">The Story Behind the Booth</h2>
            <p>
              Photo Booth Hire Swansea started life on the other side of the world. Before relocating to Wales,
              our founder Shan ran The Shan Booth in Melbourne, Australia — capturing weddings, Christmas
              parties, corporate events and school formals across Victoria. The reviews were strong, the
              business was growing, and the passion for creating memorable moments was only getting bigger.
            </p>
            <p>
              Then life took a beautiful turn. Shan got married and made the decision to relocate to Swansea,
              Wales — bringing the same hands-on experience, attention to detail, and all-inclusive approach
              that made The Shan Booth a hit in Melbourne. The booth crossed hemispheres. The mission stayed
              exactly the same.
            </p>
            <p>
              Photo Booth Hire Swansea is that next chapter. Founder-led, with a Canon R100 mirrorless
              camera, unlimited prints, zero hidden fees, and a professional attendant who genuinely cares
              about your event. The only difference is the postcode — and the weather.
            </p>
            <p>
              The gallery images on this site were captured at real events by The Shan Booth in Australia.
              They represent the same quality, style and experience you can expect at your event here in
              South Wales. This is not a new business finding its feet — it is a founder-led business with
              real event experience starting a new chapter in a new home.
            </p>

            <div className="story-stats">
              <div className="story-stat">
                <span className="story-stat-num">15+</span>
                <span className="story-stat-label">Real Events</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-num">100%</span>
                <span className="story-stat-label">5-Star Rated</span>
              </div>
              <div className="story-stat">
                <span className="story-stat-num">2</span>
                <span className="story-stat-label">Countries</span>
              </div>
            </div>

            <hr className="story-divider" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8 items-center" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">All-inclusive photo booth hire, done properly</h2>
            <p>Photo Booth Hire Swansea brings a fresh, all-inclusive approach to photo booth hire in Swansea. Unlike most UK providers who charge extra for USB drives, online galleries, and guest books, we include everything in every package.</p>
            <p>Powered by Canon R100 mirrorless cameras and studio-grade lighting, our booths deliver photos that are sharp, vibrant, and worth keeping.</p>
            <p>Friendly service, polished presentation, and clear communication stay at the centre of every booking, whether the event is in central Swansea, South Wales, or a surrounding area venue.</p>
          </div>
          <div
            className="reveal flex items-center justify-center text-6xl rounded-[var(--radius-xl)] h-48"
            style={{ background: "rgba(255,255,255,0.03)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
            aria-hidden="true"
          >✨</div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">Why clients keep booking Photo Booth Hire Swansea</h2>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            {features.map(({ icon, title, desc }) => (
              <article key={title} className="reveal p-6 rounded-[var(--radius-lg)] flex flex-col gap-3" style={cardStyle}>
                <div className="text-3xl">{icon}</div>
                <h3 className="text-base font-extrabold text-white m-0" style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>{title}</h3>
                <p className="text-sm m-0">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DBS */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8 items-center" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Peace Of Mind</span>
            <h2 className="section-title">DBS checked and event-ready</h2>
            <p>For school events, community venues, family celebrations, and corporate bookings, reassurance matters. All attendants hold a current DBS check and are experienced working with all ages, including school and youth events.</p>
            <div
              className="inline-flex items-center gap-3 px-4 py-3 rounded-full text-sm font-bold"
              style={{ color: "var(--color-sky-bright)", background: "rgba(49,209,252,0.1)", boxShadow: "inset 0 0 0 1px rgba(49,209,252,0.18)" }}
            >
              🛡️ DBS Checked Attendants
            </div>
          </div>
          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">Coverage</span>
            <h2 className="section-title">Swansea &amp; surrounding areas</h2>
            <p>We cover all Swansea boroughs and surrounding counties including Cardiff, South Wales, South Wales, and South Wales. Travel outside South Wales may include a small surcharge confirmed at enquiry.</p>
            <Link href="/quickquote" className="btn btn-primary">Check Your Date</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
