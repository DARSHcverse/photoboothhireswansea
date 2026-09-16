import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Maps MDX output onto the site's existing type styles. Internal links go
 * through `next/link` so posts prefetch like the rest of the site; external
 * ones get the usual rel hardening.
 */
export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="section-title"
      style={{ marginTop: "2.5rem" }}
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      style={{ marginTop: "2rem", marginBottom: "0.75rem", fontSize: "1.15rem" }}
      {...props}
    />
  ),
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          style={{ color: "var(--color-accent)" }}
          {...props}
        />
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "var(--color-accent)" }}
        {...props}
      />
    );
  },
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="bullet-list text-sm" style={{ margin: "0 0 1.5rem" }} {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div style={{ overflowX: "auto", margin: "0 0 1.75rem" }}>
      <table className="blog-table" {...props} />
    </div>
  ),
};
