document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  const activePage = page === "contact" ? "quickquote" : page;
  const navItems = [
    { slug: "home", href: "index.html", label: "Homepage" },
    { slug: "photobooths", href: "photobooths.html", label: "Photobooths" },
    { slug: "events", href: "events.html", label: "Events" },
    { slug: "packages", href: "packages.html", label: "Packages" },
    { slug: "backdrop", href: "backdrop.html", label: "Backdrop" },
    { slug: "booking", href: "booking.html", label: "Booking" },
    { slug: "quickquote", href: "quickquote.html", label: "Quick Quote" },
    { slug: "pay", href: "pay.html", label: "Pay Here" },
  ];
  const footerItems = [
    ...navItems,
    { slug: "gallery", href: "gallery.html", label: "Gallery" },
    { slug: "faq", href: "faq.html", label: "FAQ" },
  ];
  const socialItems = [
    { label: "IG", href: "#", aria: "Instagram" },
    { label: "TT", href: "#", aria: "TikTok" },
    { label: "FB", href: "#", aria: "Facebook" },
    { label: "PI", href: "#", aria: "Pinterest" },
  ];

  const renderNavLink = (item) =>
    `<a href="${item.href}"${item.slug === activePage ? ' class="is-active"' : ""}>${item.label}</a>`;

  const logoSvgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 64" role="img" aria-label="PBH — Photo Booth Hire Swansea" width="160" height="46" style="display:block">
      <rect x="2" y="6" width="52" height="52" rx="12" fill="#0a3d8f" />
      <rect x="22" y="14" width="12" height="5" rx="1.5" fill="#ffffff" />
      <rect x="10" y="20" width="36" height="26" rx="4" fill="#ffffff" />
      <circle cx="28" cy="33" r="8" fill="#0a3d8f" />
      <circle cx="28" cy="33" r="4.5" fill="#ffffff" />
      <circle cx="42" cy="25" r="1.6" fill="#0a3d8f" />
      <text x="64" y="30" font-family="'Plus Jakarta Sans',sans-serif" font-size="22" font-weight="800" fill="#ffffff" letter-spacing="-0.02em">PBH</text>
      <text x="64" y="44" font-family="'Plus Jakarta Sans',sans-serif" font-size="7.5" font-weight="700" fill="#1a6fd4" letter-spacing="0.08em">PHOTO BOOTH HIRE</text>
      <text x="64" y="55" font-family="'Plus Jakarta Sans',sans-serif" font-size="6" font-weight="600" fill="#a0aec0" letter-spacing="0.18em">SWANSEA</text>
    </svg>
  `;

  const headerMarkup = `
    <nav class="navbar" aria-label="Primary">
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="Photo Booth Hire Swansea home">
          ${logoSvgMarkup}
        </a>
        <button
          class="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="site-menu"
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-panel" id="site-menu">
          <div class="nav-links">
            ${navItems.map(renderNavLink).join("")}
            <a class="nav-phone" href="contact.html" aria-label="Contact Photo Booth Hire Swansea">
              <img src="assets/call-icon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const areaItems = [
    { href: "/", label: "Photo Booth Hire Swansea" },
    { href: "/photo-booth-hire-cardiff", label: "Photo Booth Hire Cardiff", title: "Photo Booth Hire Cardiff — photoboothhirecardiff.co.uk" },
    { href: "/photo-booth-hire-cardiff", label: "Photo Booth Hire South Wales" },
  ];

  const footerMarkup = `
    <div class="container footer-grid">
      <div>
        <div class="footer-brand">
          ${logoSvgMarkup}
        </div>
        <p class="footer-tagline">Swansea&rsquo;s favourite photo booth hire service for weddings, parties and events across South Wales.</p>
        <div class="footer-contact-list">
          <div class="footer-contact-item"><span>📧</span><span>photoboothhireinwales@gmail.com</span></div>
          <div class="footer-contact-item"><span>📱</span><span>[SWANSEA_PHONE_NUMBER]</span></div>
          <div class="footer-contact-item"><span>📍</span><span>Swansea, Wales, UK</span></div>
        </div>
      </div>
      <div>
        <span class="eyebrow">Explore</span>
        <div class="footer-links">
          ${footerItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
        </div>
      </div>
      <div>
        <span class="eyebrow">Areas We Cover</span>
        <div class="footer-links">
          ${areaItems.map((item) => `<a href="${item.href}"${item.title ? ` title="${item.title}"` : ""}>${item.label}</a>`).join("")}
        </div>
      </div>
      <div class="footer-card">
        <span class="eyebrow">Need Help Fast?</span>
        <h3>Quick quote, booking, or payment.</h3>
        <p>
          Use the navigation above for a quick quote, secure booking, backdrop choices,
          or direct payment. Everything is set up for simple Vercel deployment.
        </p>
        <div class="button-row">
          <a class="button button-primary" href="quickquote.html">Quick Quote</a>
          <a class="button button-secondary" href="booking.html">Book Now</a>
        </div>
        <div class="footer-socials">
          ${socialItems
            .map(
              (item) =>
                `<a class="social-link" href="${item.href}" aria-label="${item.aria}">${item.label}</a>`,
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>© 2025 Photo Booth Hire Swansea. All rights reserved.</p>
      <p>Photo Booth Hire Swansea &amp; South Wales</p>
    </div>
  `;

  const siteHeader = document.querySelector(".site-header");
  const siteFooter = document.querySelector(".site-footer");

  if (siteHeader) {
    siteHeader.innerHTML = headerMarkup;
  }

  if (siteFooter) {
    siteFooter.innerHTML = footerMarkup;
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");

  const setHeaderState = () => {
    if (!siteHeader) {
      return;
    }

    const menuOpen = navPanel?.classList.contains("is-open");
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 16 || Boolean(menuOpen));
  };

  const closeMenu = () => {
    if (!navToggle || !navPanel) {
      return;
    }

    navToggle.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    setHeaderState();
  };

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navPanel.classList.toggle("is-open");
      document.body.classList.toggle("menu-open", !expanded);
      setHeaderState();
    });

    navPanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 981) {
      closeMenu();
    }
    setHeaderState();
  });
  setHeaderState();

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
  const heroDots = Array.from(document.querySelectorAll(".hero-dot"));

  if (heroSlides.length > 0) {
    let activeIndex = heroSlides.findIndex((slide) => slide.classList.contains("is-active"));
    activeIndex = activeIndex === -1 ? 0 : activeIndex;

    const syncHero = (index) => {
      heroSlides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
      });

      heroDots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
        dot.setAttribute("aria-pressed", String(dotIndex === index));
      });
    };

    syncHero(activeIndex);

    heroDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        activeIndex = index;
        syncHero(activeIndex);
      });
    });

    if (heroSlides.length > 1) {
      window.setInterval(() => {
        activeIndex = (activeIndex + 1) % heroSlides.length;
        syncHero(activeIndex);
      }, 5200);
    }
  }

  const galleryImagesByCategory = {
    weddings: [
      "assets/wedding.webp",
      "assets/hero-banner-1.webp",
      "assets/wedding2.webp",
      "assets/photobooth.webp",
    ],
    proms: [
      "assets/graduation.jpg",
      "assets/hero-banner-2.webp",
      "assets/hero-banner-3.webp",
      "assets/photobooth.webp",
    ],
    corporate: [
      "assets/corporate.webp",
      "assets/events.webp",
      "assets/boothimg6.webp",
      "assets/hero-banner-1.webp",
    ],
    birthdays: [
      "assets/hero-banner-4.webp",
      "assets/hero-banner-2.webp",
      "assets/boothimg5.webp",
      "assets/events.webp",
    ],
  };

  const galleryCategoryCounts = {};
  document.querySelectorAll(".gallery-card").forEach((card) => {
    const category = card.dataset.filterCard;
    if (!category || !galleryImagesByCategory[category]) {
      return;
    }

    const count = galleryCategoryCounts[category] || 0;
    const image = galleryImagesByCategory[category][count % galleryImagesByCategory[category].length];
    galleryCategoryCounts[category] = count + 1;
    card.style.backgroundImage = `linear-gradient(180deg, rgba(8, 8, 8, 0.08), rgba(8, 8, 8, 0.76)), url('${image}')`;
  });

  const filterButtons = document.querySelectorAll("[data-filter-button]");
  const filterCards = document.querySelectorAll("[data-filter-card]");

  if (filterButtons.length > 0 && filterCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filterButton;

        filterButtons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");

        filterCards.forEach((card) => {
          const category = card.dataset.filterCard;
          const visible = filter === "all" || category === filter;
          card.classList.toggle("is-hidden", !visible);
        });
      });
    });
  }

  const accordions = document.querySelectorAll(".faq-item");

  const syncAccordion = (item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const open = item.classList.contains("is-open");

    if (!button || !answer) {
      return;
    }

    button.setAttribute("aria-expanded", String(open));
    answer.style.maxHeight = open ? `${answer.scrollHeight}px` : "0px";
  };

  accordions.forEach((item) => {
    const button = item.querySelector(".faq-question");

    if (!button) {
      return;
    }

    syncAccordion(item);
    button.addEventListener("click", () => {
      item.classList.toggle("is-open");
      syncAccordion(item);
    });
  });

  window.addEventListener("resize", () => {
    accordions.forEach(syncAccordion);
  });

  const getNamedValue = (form, names) => {
    for (const name of names) {
      const element =
        form.elements.namedItem(name) ||
        form.querySelector(`[name="${name}"]`) ||
        form.querySelector(`#${name}`);

      if (element && typeof element.value === "string") {
        return element.value.trim();
      }
    }

    return "";
  };

  const setFormMessage = (node, message, isError = false) => {
    if (!node) {
      return;
    }

    node.textContent = message;
    node.classList.add("is-visible");
    node.classList.toggle("is-error", isError);
  };

  const quoteForms = document.querySelectorAll("[data-quick-quote-form], [data-contact-form]");

  quoteForms.forEach((form) => {
    const statusNode = form.querySelector("[data-form-status]") || document.querySelector("[data-form-status]");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const payload = {
        fullName: getNamedValue(form, ["fullName", "full-name"]),
        email: getNamedValue(form, ["email"]),
        phoneNumber: getNamedValue(form, ["phoneNumber", "phone", "phone-number"]),
        eventDate: getNamedValue(form, ["eventDate", "event-date"]),
        eventLocation: getNamedValue(form, ["eventLocation", "venue", "event-location"]),
        packageDuration: getNamedValue(form, ["packageDuration", "package-interest"]),
        service: getNamedValue(form, ["service", "event-type"]),
        message: getNamedValue(form, ["message"]),
      };

      setFormMessage(statusNode, "Sending your quote request...");

      try {
        const response = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.error || "Failed to send your quote request.");
        }

        form.reset();
        setFormMessage(
          statusNode,
          "Thanks. Your quote request has been sent and Shan will be in touch shortly.",
        );
      } catch (error) {
        setFormMessage(
          statusNode,
          error instanceof Error ? error.message : "Failed to send your quote request.",
          true,
        );
      }
    });
  });

  const bookingPrices = {
    "Selfie Pod": {
      "2 Hours": 220,
      "3 Hours": 295,
      "4 Hours": 370,
      "5 Hours": 440,
    },
    "Magic Mirror": {
      "2 Hours": 270,
      "3 Hours": 350,
      "4 Hours": 430,
      "5 Hours": 500,
    },
    "Enclosed Booth": {
      "2 Hours": 220,
      "3 Hours": 295,
      "4 Hours": 370,
      "5 Hours": 440,
    },
  };

  const generateInvoiceNumber = () => {
    const now = new Date();
    const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    const randomSeq = Math.floor(Math.random() * 900 + 100);
    return `PBH-SW-${dateStr}-${randomSeq}`;
  };

  const bookingForm = document.querySelector("[data-booking-form]");

  if (bookingForm) {
    const boothTypeField = bookingForm.querySelector('[name="boothType"]');
    const packageDurationField = bookingForm.querySelector('[name="packageDuration"]');
    const priceField = bookingForm.querySelector('[name="price"]');
    const bookingStatusNode = bookingForm.querySelector("[data-form-status]");

    const syncPrice = () => {
      if (!boothTypeField || !packageDurationField || !priceField) {
        return;
      }

      const boothType = boothTypeField.value;
      const packageDuration = packageDurationField.value;
      const price = bookingPrices[boothType]?.[packageDuration] || 0;
      priceField.value = price ? `${price}` : "";
    };

    if (boothTypeField && packageDurationField) {
      boothTypeField.addEventListener("change", syncPrice);
      packageDurationField.addEventListener("change", syncPrice);
      syncPrice();
    }

    bookingForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      syncPrice();

      const payload = {
        fullName: getNamedValue(bookingForm, ["fullName"]),
        email: getNamedValue(bookingForm, ["email"]),
        phoneNumber: getNamedValue(bookingForm, ["phoneNumber"]),
        eventDate: getNamedValue(bookingForm, ["eventDate"]),
        eventLocation: getNamedValue(bookingForm, ["eventLocation"]),
        boothType: getNamedValue(bookingForm, ["boothType"]),
        packageDuration: getNamedValue(bookingForm, ["packageDuration"]),
        service: getNamedValue(bookingForm, ["service"]),
        price: Number(getNamedValue(bookingForm, ["price"])),
        message: getNamedValue(bookingForm, ["message"]),
        invoiceNumber: generateInvoiceNumber(),
      };

      setFormMessage(bookingStatusNode, "Creating your booking and invoice...");

      try {
        const response = await fetch("/api/booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.error || "Failed to create your booking.");
        }

        setFormMessage(
          bookingStatusNode,
          data.invoiceUrl
            ? "Booking confirmed. Opening your secure Stripe invoice..."
            : "Booking confirmed. Check your email for the invoice and next steps.",
        );

        bookingForm.reset();
        syncPrice();

        if (data.invoiceUrl) {
          window.setTimeout(() => {
            window.location.href = data.invoiceUrl;
          }, 900);
        }
      } catch (error) {
        setFormMessage(
          bookingStatusNode,
          error instanceof Error ? error.message : "Failed to create your booking.",
          true,
        );
      }
    });
  }

  const payMount = document.querySelector("[data-stripe-buy-button]");

  if (payMount) {
    const loadStripeBuyButton = () =>
      new Promise((resolve, reject) => {
        const existingScript = document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]');

        if (existingScript) {
          resolve(existingScript);
          return;
        }

        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Failed to load Stripe."));
        document.body.appendChild(script);
      });

    (async () => {
      payMount.textContent = "Loading secure payment...";

      try {
        const response = await fetch("/api/payment-config");
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.error || "Payment page is not configured yet.");
        }

        await loadStripeBuyButton();

        const buyButton = document.createElement("stripe-buy-button");
        buyButton.setAttribute("buy-button-id", data.buyButtonId);
        buyButton.setAttribute("publishable-key", data.publishableKey);
        payMount.innerHTML = "";
        payMount.appendChild(buyButton);
      } catch (error) {
        payMount.innerHTML = `<p class="payment-error">${
          error instanceof Error ? error.message : "Payment page is not configured yet."
        }</p>`;
      }
    })();
  }
});
