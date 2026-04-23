import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata = { title: "Backdrop Choices" };

const backdrops = [
  { img: "/assets/blackbackdrop.png",  alt: "Black backdrop",      title: "Black Backdrop",      desc: "Sleek, modern, and ideal for evening receptions or corporate events." },
  { img: "/assets/whitebackdrop.png",  alt: "White backdrop",      title: "White Backdrop",      desc: "Clean, versatile, and perfect for bright prints and elegant portrait-style shots." },
  { img: "/assets/gradbackdrop.png",   alt: "Graduation backdrop",  title: "Graduation Backdrop", desc: "Themed for school and university celebrations where milestone photos matter." },
  { img: "/assets/flowerbackdrop.png", alt: "Floral backdrop",      title: "Floral Backdrop",     desc: "Soft, playful, and a strong fit for weddings, birthdays, and bridal events." },
];

const cardStyle = {
  background: "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

export default function BackdropPage() {
  return (
    <main>
      <PageHero eyebrow="Backdrop" title="Backdrop Choices" description="Simple, clean, and event-ready. Choose the backdrop that fits your wedding, prom, birthday, or branded setup and we'll build the booth around it." heroBg="/assets/flowerbackdrop.png" />

      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3 grid gap-5" style={{ maxWidth: "1240px", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
          {backdrops.map(({ img, alt, title, desc }) => (
            <article key={title} className="reveal overflow-hidden rounded-[var(--radius-lg)] flex flex-col" style={cardStyle}>
              <div className="relative h-64 overflow-hidden bg-black/20">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-base font-extrabold text-white m-0" style={{ fontFamily: "var(--font-plus-jakarta,'Plus Jakarta Sans',sans-serif)" }}>{title}</h3>
                <p className="text-sm m-0">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading reveal">
            <span className="eyebrow">Need Help Choosing?</span>
            <h2 className="section-title">Tell us your venue and theme and we&rsquo;ll recommend the right backdrop.</h2>
            <Link href="/quickquote" className="btn btn-primary mx-auto">Get A Quick Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
