import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata = { title: "Our Services" };

const services = [
  {
    icon: "💍", eyebrow: "Wedding Photo Booth Hire London", title: "Wedding Photo Booth Hire London",
    paras: ["Weddings deserve something that feels polished, warm, and easy for guests to enjoy. The Shan Booth fits beautifully into wedding receptions, evening celebrations, and after-dinner entertainment.", "Expect flattering lighting, instant prints that double as favours, and a host who helps everyone from your flower girls to your grandparents feel comfortable in front of the camera."],
    items: ["Elegant backdrop styling and guest book options", "Custom photo strip design with names and wedding date", "Stress-free setup coordinated around your timeline"],
    cta: "Book Your Wedding Booth", href: "/booking",
  },
  {
    icon: "🎓", eyebrow: "Prom Photo Booth Hire", title: "Prom Photo Booth Hire for Year 11 & Sixth Form",
    paras: ["Proms need energy, pace, and a booth setup that can keep up with hundreds of outfit photos and group shots. Shan keeps queues moving while making sure every guest still gets their moment.", "Whether it's a Year 11 GCSE prom or a Year 13 / Sixth Form leavers event, we bring a fun, safe, organised setup that schools and venues can trust."],
    items: ["Great for school halls, hotels, and formal venues", "Fast prints for friendship groups and full-year squads", "DBS-checked hosting and prom-friendly energy"],
    cta: "Plan Your Prom Booth", href: "/quickquote",
  },
  {
    icon: "🎓", eyebrow: "Graduation Booth Hire", title: "Graduation Photo Booth Hire",
    paras: ["Graduation events are packed with proud families, milestone moments, and celebrations that deserve more than phone snaps. The Shan Booth adds a premium photo moment guests can revisit instantly.", "Ideal for university receptions, school graduations, and family gatherings where people want keepsake prints as well as digital memories to share afterwards."],
    items: ["Brilliant for gowns, caps, families, and friendship groups", "Custom print artwork for your school or university", "Professional setup that works indoors at busy venues"],
    cta: "Get a Graduation Quote", href: "/quickquote",
  },
  {
    icon: "🏢", eyebrow: "Corporate Event Photo Booth", title: "Corporate Event Photo Booth Hire",
    paras: ["For brand launches, awards nights, Christmas parties, and office socials, the booth becomes a smart engagement point that feels fun without losing its polish.", "Shan can work with branded print templates, colour direction, and event messaging to help the booth feel aligned with your campaign or internal celebration."],
    items: ["Brand-ready print templates and activation styling", "Professional hosting for guest-facing corporate events", "Great for networking, social sharing, and team morale"],
    cta: "Talk About Your Event", href: "/quickquote",
  },
  {
    icon: "🎂", eyebrow: "Birthday Photo Booth Hire", title: "Birthday Party Photo Booth Hire",
    paras: ["Milestone birthdays need something memorable, social, and easy for guests of all ages to jump into. The Shan Booth adds instant entertainment without taking over the room.", "Whether you're planning a sweet sixteen in South London or a big family gathering elsewhere in Greater London, we tailor the mood to suit the crowd."],
    items: ["Playful props, colourful backdrops, and instant prints", "Perfect for private homes, halls, restaurants, and hotels", "Flexible package lengths for daytime or evening parties"],
    cta: "Book a Birthday Booth", href: "/booking",
  },
  {
    icon: "🎊", eyebrow: "All Celebrations", title: "Photo Booth Hire for Every Celebration",
    paras: ["Not every event fits neatly into one category, and that's exactly why our packages are flexible. The Shan Booth is a brilliant fit for engagement parties, baby showers, launches, awards nights, anniversaries, and community celebrations."],
    items: ["Adaptable styling for formal, playful, or branded events", "Simple package upgrades with extras and add-ons", "Coverage across London and surrounding areas"],
    cta: "Get a Custom Quote", href: "/quickquote",
  },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Our Services" title="Our Services" description="From elegant weddings to all-out school leavers celebrations, The Shan Booth adapts its setup, styling, and energy to suit the event in front of it." heroBg="/assets/events.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3 grid gap-6" style={{ maxWidth: "1240px" }}>
          {services.map(({ icon, eyebrow, title, paras, items, cta, href }) => (
            <article key={title} className="reveal p-8 md:p-10 rounded-[var(--radius-xl)] flex flex-col md:flex-row gap-8 items-start" style={cardStyle}>
              <div
                className="flex items-center justify-center text-4xl rounded-[var(--radius-lg)] shrink-0 w-20 h-20"
                style={{ background: "rgba(255,255,255,0.04)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
                aria-hidden="true"
              >{icon}</div>
              <div className="flex-1">
                <span className="eyebrow">{eyebrow}</span>
                <h2 className="section-title">{title}</h2>
                {paras.map((p, i) => <p key={i}>{p}</p>)}
                <ul className="bullet-list text-sm mb-6">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link href={href} className="btn btn-primary">{cta}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
