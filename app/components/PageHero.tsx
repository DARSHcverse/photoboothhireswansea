interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  heroBg?: string;
}

export default function PageHero({ eyebrow, title, description, heroBg = "/assets/hero-banner-1.webp" }: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={{ ["--hero-bg" as string]: `url('${heroBg}')` }}
    >
      <div className="relative z-10 mx-auto px-4 md:px-3 w-full" style={{ maxWidth: "1240px" }}>
        <div className="page-hero-copy reveal">
          <span className="sr-only">{eyebrow}</span>
          <span className="page-hero-kicker">Photo Booth Hire Swansea</span>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-description">{description}</p>
        </div>
      </div>
    </section>
  );
}
