import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Events We Cover",
  alternates: { canonical: "/events" },
};

const events = [
  { icon: "💍", eyebrow: "Wedding Receptions",   title: "Wedding Photo Booth Hire",          desc: "Keep the energy high after the speeches with elegant prints, premium lighting, and a booth setup that feels like part of the celebration.", items: ["Custom photo strip design with names and wedding date","Guest book upgrades and stylish backdrop options","Friendly host to keep guests moving and smiling"], href: "/events/weddings" },
  { icon: "🏢", eyebrow: "Corporate Events",      title: "Corporate Photo Booth Hire",        desc: "Launches, office parties, awards nights, and brand activations need something polished — a booth experience that stays on-brand.", items: ["Branded overlays and print templates","Professional hosting for client-facing events","Ideal for social sharing and internal events"], href: "/events/corporate" },
  { icon: "🎓", eyebrow: "Proms & Graduations",   title: "Prom Photo Booth Hire",             desc: "We regularly work with Year 11, Sixth Form, and university celebrations where queues need to move quickly and the setup needs to feel safe.", items: ["DBS-checked attendants available for school and youth settings","Fast prints for friendship groups and family photos","Custom school or graduation branding on the strips"], href: "/events/proms" },
  { icon: "🎉", eyebrow: "Birthday Parties",      title: "Birthday Party Photo Booth Hire",   desc: "Milestone birthdays, engagement parties, baby showers, and family celebrations all benefit from a booth that keeps guests entertained.", items: ["Flexible hire windows for daytime and evening parties","Props, themed strip layouts, and digital sharing","Suitable for homes, halls, hotels, and restaurants"], href: "/events/birthdays" },
  { icon: "🎄", eyebrow: "Christmas Parties",     title: "Christmas Party Photo Booth Hire",  desc: "Christmas parties, seasonal celebrations, and festive activations add a booth that keeps the room buzzing.", items: ["Festive backdrop and props options","Works for office, hotel, and venue hire nights","USB and online gallery included in all packages from 3 hours"], href: "/events/christmas-parties" },
  { icon: "📣", eyebrow: "Brand Activations",     title: "Brand Activation Photo Booth",      desc: "Launches, pop-ups, and marketing campaigns where every photo needs to be on-brand and ready to share.", items: ["Fully branded overlays with logo and campaign details","High footfall throughput with quick turnaround","QR code and digital gallery sharing for guests"], href: "/events/brand-activations" },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function EventsPage() {
  return (
    <main>
      <PageHero eyebrow="Events" title="Events We Cover" description="We cover all event types across Swansea: weddings, corporate parties, school proms and formals, birthday celebrations, brand activations, and community events." heroBg="/assets/events.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-6" style={{ maxWidth: "1240px" }}>
          {events.map(({ icon, eyebrow, title, desc, items, href }) => (
            <article key={title} className="reveal p-8 md:p-10 rounded-[var(--radius-xl)] flex flex-col md:flex-row gap-8 items-start" style={cardStyle}>
              <div
                className="flex items-center justify-center text-4xl rounded-[var(--radius-lg)] shrink-0 w-20 h-20"
                style={{ background: "rgba(255,255,255,0.04)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
                aria-hidden="true"
              >{icon}</div>
              <div className="flex-1">
                <span className="eyebrow">{eyebrow}</span>
                <h2 className="section-title">{title}</h2>
                <p>{desc}</p>
                <ul className="bullet-list text-sm mb-6">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link href={href} className="btn btn-primary">Find Out More</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
