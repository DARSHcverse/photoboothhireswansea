import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  size?: number;
  width?: number;
  height?: number;
}

export default function Logo({
  variant: _variant = "dark",
  size = 64,
  width,
  height,
}: LogoProps) {
  const resolvedWidth = width ?? size;
  const resolvedHeight = height ?? size;
  const isHorizontal = resolvedWidth > resolvedHeight;

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
          objectFit: "cover",
          objectPosition: "center",
          transform: isHorizontal ? "scale(1.46)" : "scale(1.3)",
          filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.22))",
        }}
      />
    </span>
  );
}
