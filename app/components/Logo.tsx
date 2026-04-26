import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  size?: number;
  width?: number;
  height?: number;
  fit?: "cover" | "contain";
}

export default function Logo({
  variant: _variant = "dark",
  size = 64,
  width,
  height,
  fit = "cover",
}: LogoProps) {
  const resolvedWidth = width ?? size;
  const resolvedHeight = height ?? size;
  const isHorizontal = resolvedWidth > resolvedHeight;
  const useContain = fit === "contain";

  return (
    <span
      style={{
        position: "relative",
        display: "block",
        width: `${resolvedWidth}px`,
        height: `${resolvedHeight}px`,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src="/assets/IconLogo.png"
        alt="PBH — Photo Booth Hire Swansea"
        fill
        sizes={`${resolvedWidth}px`}
        style={{
          objectFit: useContain ? "contain" : "cover",
          objectPosition: "center",
          transform: useContain ? "none" : isHorizontal ? "scale(1.46)" : "scale(1.3)",
          filter: useContain ? "none" : "drop-shadow(0 10px 22px rgba(0,0,0,0.22))",
        }}
      />
    </span>
  );
}
