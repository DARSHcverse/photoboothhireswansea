interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const pbhFill = variant === "light" ? "#0a0a0a" : "#ffffff";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 64"
      role="img"
      aria-label="PBH — Photo Booth Hire Swansea"
      width="160"
      height="46"
      style={{ display: "block" }}
    >
      <rect x="2" y="6" width="52" height="52" rx="12" fill="#0a3d8f" />
      <rect x="22" y="14" width="12" height="5" rx="1.5" fill="#ffffff" />
      <rect x="10" y="20" width="36" height="26" rx="4" fill="#ffffff" />
      <circle cx="28" cy="33" r="8" fill="#0a3d8f" />
      <circle cx="28" cy="33" r="4.5" fill="#ffffff" />
      <circle cx="42" cy="25" r="1.6" fill="#0a3d8f" />

      <text
        x="64"
        y="30"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontSize="22"
        fontWeight="800"
        fill={pbhFill}
        letterSpacing="-0.02em"
      >
        PBH
      </text>
      <text
        x="64"
        y="44"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontSize="7.5"
        fontWeight="700"
        fill="#1a6fd4"
        letterSpacing="0.08em"
      >
        PHOTO BOOTH HIRE
      </text>
      <text
        x="64"
        y="55"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontSize="6"
        fontWeight="600"
        fill="#a0aec0"
        letterSpacing="0.18em"
      >
        SWANSEA
      </text>
    </svg>
  );
}
