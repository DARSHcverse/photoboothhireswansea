import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata = {
  title: { absolute: "Our Photo Booths | Selfie Pod, Magic Mirror and Enclosed Booth Swansea" },
  alternates: { canonical: "/photobooths" },
};

const booths = [
  { img: "/assets/boothimg6.webp", alt: "Open booth setup",            title: "Selfie Pod",       desc: "A sleek, modern open-air setup that fits any venue and encourages group shots and guest interaction. The most popular choice for weddings, corporate events, and birthday parties.", items: ["Sleek open-air design","Perfect for group shots and guest interaction","Most popular for weddings, brands, and birthdays"] },
  { img: "/assets/glam.png",       alt: "Glam booth portrait style",   title: "Magic Mirror",     desc: "Swansea's favourite for weddings and upscale events. The Magic Mirror delivers stunning full-length portraits with a signature glam finish in black and white or colour.", items: ["Full-length portraits with glam styling","Black and white or colour finish","Ideal for weddings and premium events"] },
  { img: "/assets/enclosed.jpeg",  alt: "Enclosed booth setup",        title: "Enclosed Booth", desc: "A nostalgic, private photo booth experience. Perfect for school proms, weddings with a vintage theme, and guests who love the classic photo strip feel.", items: ["Classic enclosed booth feel","Great for proms and vintage-style weddings","Perfect for guests who love photo strips"] },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function PhotoboothsPage() {
  return (
    <main>
      <PageHero eyebrow="Photobooths" title="Choose Your Booth" description="Selfie Pod, Magic Mirror, or Enclosed Booth. Each setup gives a different feel, and we'll help you pick the one that fits your venue, event style, and guest energy." heroBg="/assets/boothimg6.webp" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-6" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          {booths.map(({ img, alt, title, desc, items }) => (
            <article key={title} className="reveal overflow-hidden rounded-[var(--radius-xl)] flex flex-col" style={cardStyle}>
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-extrabold text-white m-0" style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)", letterSpacing: "-0.03em" }}>{title}</h3>
                <p className="text-sm">{desc}</p>
                <ul className="bullet-list text-sm flex-1">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link href="/packages" className="btn btn-primary text-[0.82rem] min-h-[44px] mt-2">See Pricing</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3 grid gap-8 items-center" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          <div className="reveal p-5 md:p-8 rounded-[var(--radius-xl)]" style={cardStyle}>
            <span className="eyebrow">What&rsquo;s Included</span>
            <h2 className="section-title">Every booth hire includes the essentials.</h2>
            <ul className="bullet-list text-sm mb-6">
              <li>Canon R100 mirrorless camera and studio-grade lighting</li>
              <li>Unlimited prints and professional attendant</li>
              <li>Custom photostrip design and prop options</li>
              <li>Fast setup, pack-down, and friendly on-site support</li>
            </ul>
            <p className="text-sm">If you&rsquo;re not sure which booth is best, send a quick quote request and we&rsquo;ll point you in the right direction based on the venue, event type, and guest count.</p>
          </div>
          <div className="reveal flex items-center justify-center text-6xl rounded-[var(--radius-xl)] h-48" style={{ background: "rgba(255,255,255,0.03)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }} aria-hidden="true">📸</div>
        </div>
      </section>
    </main>
  );
}
