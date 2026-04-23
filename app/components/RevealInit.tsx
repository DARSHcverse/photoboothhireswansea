"use client";

import { usePathname } from "next/navigation";
import { useReveal } from "./useReveal";

export default function RevealInit() {
  const pathname = usePathname();

  useReveal([pathname]);

  return null;
}
