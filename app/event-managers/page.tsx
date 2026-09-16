import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../components/PageHero";
import { JsonLd } from "../components/JsonLd";
import { SITE_URL } from "../../lib/blog";

const PAGE_URL = `${SITE_URL}/event-managers`;

export const metadata: Metadata = {
  title: {
    absolute: "Photo Booth Supplier for Event Managers | South Wales | Trade Rates",
  },
  description:
    "Trade photo booth supply for event managers, planners and agencies across Swansea, Cardiff and South Wales. Loyalty rates on multiple events, priority dates, one invoice and one point of contact.",
  keywords:
    "photo booth supplier event managers, trade photo booth hire wales, event planner photo booth swansea, agency photo booth cardiff, multi event photo booth discount",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Photo Booth Hire Swansea",
    title: "Photo Booth Supplier for Event Managers | South Wales",
    description:
      "Loyalty rates on multiple events, priority dates and one point of contact for planners and agencies across South Wales.",
    url: PAGE_URL,
    images: [
      {
        url: "/assets/corporate.webp",
        width: 1200,
        height: 630,
        alt: "Photo booth at a managed corporate event in South Wales",
      },
    ],
  },
};

const cardStyle = {
  background:
    "linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.01)),rgba(38,38,38,0.72)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxShadow:
    "inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.3)",
};

const benefits = [
  {
    title: "Loyalty rates on volume",
    body: "Place several events with us across a season and you are not paying list price. The rate is agreed up front for the whole block, not negotiated event by event.",
  },
  {
    title: "Priority on your dates",
    body: "Partners get first refusal on summer Saturdays and December dates before they are released generally — the dates that otherwise disappear first.",
  },
  {
    title: "One point of contact",
    body: "A direct number and the same person every time. No call centre, no being passed around, no re-explaining the brief.",
  },
  {
    title: "One consolidated invoice",
    body: "Billing across multiple events on agreed terms, rather than a separate payment run for every single booking.",
  },
  {
    title: "Provisional date holds",
    body: "We hold dates at no charge while your clients confirm, so you can quote with confidence before anything is signed.",
  },
  {
    title: "Venue knowledge",
    body: "We work across Swansea, Cardiff, Bridgend, Neath, Port Talbot and the Vale weekly. Load-in, access and power quirks are already known.",
  },
];

const clientFacing = [
  "DBS-checked attendant in smart dress for the full hire",
  "Custom strip design carrying your client's branding or event identity",
  "Booth built and tested 60–90 minutes before doors, never during",
  "Unlimited prints with copies for everyone in the photo",
  "Quiet pack-down that respects venue curfew",
  "Digital gallery delivered after the event for your client's own use",
];

const process = [
  {
    step: "01",
    title: "Send your calendar",
    body: "Even provisional dates. We tell you honestly what we can hold and what has already gone.",
  },
  {
    step: "02",
    title: "We quote the block",
    body: "One rate across the set of events with the loyalty discount applied.",
  },
  {
    step: "03",
    title: "We hold the dates",
    body: "Provisionally and free of charge, while your clients make their decisions.",
  },
  {
    step: "04",
    title: "Confirm event by event",
    body: "Individual events firm up as clients sign off, against the rate already agreed.",
  },
  {
    step: "05",
    title: "Invoice together",
    body: "Monthly or per block — whichever fits your finance process.",
  },
];

const eventTypes = [
  { name: "Corporate & brand activations", href: "/events/brand-activations" },
  { name: "Weddings", href: "/events/weddings" },
  { name: "Awards nights & galas", href: "/events/corporate" },
  { name: "Christmas parties", href: "/events/christmas-parties" },
  { name: "Proms & graduations", href: "/events/proms" },
  { name: "Birthdays & milestones", href: "/events/birthdays" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Trade Photo Booth Supply for Event Managers",
  name: "Photo Booth Supply for Event Managers — South Wales",
  description:
    "Trade photo booth supply for event managers, planners and agencies across South Wales, with loyalty rates on multiple events, priority dates and consolidated invoicing.",
  areaServed: [
    "Swansea",
    "Cardiff",
    "South Wales",
    "Bridgend",
    "Neath",
    "Port Talbot",
    "Llanelli",
    "Vale of Glamorgan",
  ],
  provider: {
    "@type": "LocalBusiness",
    name: "Photo Booth Hire Swansea",
    telephone: "+447544193175",
    url: SITE_URL,
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Event managers, planners and agencies",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "For Event Managers", item: PAGE_URL },
  ],
};

export default function EventManagersPage() {
  return (
    <main>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />

      <PageHero
        eyebrow="For Event Managers"
        title="ONE BOOTH SUPPLIER FOR YOUR WHOLE CALENDAR"
        description="Trade rates, priority dates and a single point of contact for planners and agencies running events across Swansea, Cardiff and South Wales."
        heroBg="/assets/corporate.webp"
      />

      <section style={{ padding: "clamp(2rem,4vw,3rem) 0 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="flex flex-wrap gap-3 justify-center reveal">
            <Link href="/contact" className="btn btn-primary">
              Send Us Your Dates
            </Link>
            <Link href="/quickquote" className="btn btn-secondary">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "clamp(4rem,7vw,6rem) 0" }}>
        <div
          className="mx-auto px-4 md:px-3 grid gap-8 items-center"
          style={{
            maxWidth: "1240px",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          }}
        >
          <div className="reveal">
            <span className="eyebrow">Built For Trade</span>
            <h2 className="section-title">
              You are not booking a booth. You are managing a supplier.
            </h2>
            <p>
              If you run events for a living, a photo booth is one of fifteen
              suppliers on your list. What you need is for it to turn up, behave
              professionally in front of your client, and never become your
              problem.
            </p>
            <p>
              We are set up to be invisible in the run sheet and memorable in the
              photos — with the commercial terms to match a full calendar rather
              than a single date.
            </p>
          </div>
          <div
            className="reveal relative w-full overflow-hidden rounded-[var(--radius-xl)]"
            style={{ aspectRatio: "4 / 3", ...cardStyle }}
          >
            <Image
              src="/assets/boothimg6.webp"
              alt="Photo booth supplied for a managed event in South Wales"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading text-center mb-10">
            <span className="eyebrow">Partner Benefits</span>
            <h2 className="section-title">What a partner arrangement gets you</h2>
          </div>

          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="reveal p-7 rounded-[var(--radius-xl)]"
                style={cardStyle}
              >
                <h3 className="mb-2" style={{ fontSize: "1.08rem" }}>
                  {benefit.title}
                </h3>
                <p className="text-sm mb-0">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT FACING */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div
            className="reveal p-8 md:p-12 rounded-[var(--radius-xl)]"
            style={cardStyle}
          >
            <span className="eyebrow">What Your Client Sees</span>
            <h2 className="section-title">
              The part your client actually remembers
            </h2>
            <ul className="bullet-list text-sm mb-6">
              {clientFacing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/packages" className="btn btn-secondary">
              See Full Package Details
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading text-center mb-10">
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title">From your calendar to confirmed</h2>
          </div>

          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}
          >
            {process.map((item) => (
              <div
                key={item.step}
                className="reveal p-7 rounded-[var(--radius-xl)]"
                style={cardStyle}
              >
                <span
                  className="eyebrow"
                  style={{ margin: "0 0 0.75rem", display: "block" }}
                >
                  {item.step}
                </span>
                <h3 className="mb-2" style={{ fontSize: "1.02rem" }}>
                  {item.title}
                </h3>
                <p className="text-sm mb-0">{item.body}</p>
              </div>
            ))}
          </div>

          <p
            className="text-sm text-center mt-8 mb-0"
            style={{ color: "var(--color-fg-muted)" }}
          >
            No minimum commitment to have the conversation, and no charge for
            holding provisional dates.
          </p>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "1240px" }}>
          <div className="section-heading text-center mb-10">
            <span className="eyebrow">Coverage</span>
            <h2 className="section-title">Events we cover for partners</h2>
          </div>

          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}
          >
            {eventTypes.map((event) => (
              <Link
                key={event.name}
                href={event.href}
                className="reveal p-6 rounded-[var(--radius-xl)] block"
                style={cardStyle}
              >
                <span style={{ color: "var(--color-accent)" }}>
                  {event.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand" style={{ padding: "clamp(4.75rem,8vw,7.5rem) 0" }}>
        <div className="mx-auto px-4 md:px-3" style={{ maxWidth: "820px" }}>
          <div
            className="reveal p-8 md:p-12 rounded-[var(--radius-xl)] text-center"
            style={cardStyle}
          >
            <span className="eyebrow" style={{ marginInline: "auto" }}>
              Next Season
            </span>
            <h2 className="section-title">Send us your date list</h2>
            <p>
              Bookings for 2027 are open and the best dates go early. Send over
              the events you are holding and we will come back with availability
              and a partner rate.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link
                href="/blog/photo-booth-hire-for-event-managers-south-wales"
                className="btn btn-secondary"
              >
                Read the Full Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
