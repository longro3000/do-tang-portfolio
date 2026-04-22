// ABOUTME: Placeholder "photograph" component — toned gradient blocks with grain overlay and caption tag.
// ABOUTME: Simulates editorial film scans until real images are swapped in.

import { useRef } from "react";

const TONES = {
  "warm":      { bg: "linear-gradient(155deg,#D9CCBC 0%,#C4AE96 55%,#A08770 100%)", fg: "rgba(26,18,10,0.70)" },
  "warm-dark": { bg: "linear-gradient(155deg,#4A3A2C 0%,#2E241B 55%,#1A120B 100%)", fg: "rgba(234,220,200,0.72)" },
  "cool":      { bg: "linear-gradient(155deg,#BEC2C6 0%,#A4AAB0 55%,#80878E 100%)", fg: "rgba(12,16,20,0.68)" },
  "cool-dark": { bg: "linear-gradient(155deg,#33393F 0%,#22272C 55%,#13171B 100%)", fg: "rgba(210,218,226,0.72)" },
};

const grainSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`;
const grainURL = `url("data:image/svg+xml;utf8,${grainSvg}")`;

export function Plate({ tone = "warm-dark", tag = "IMAGE", ratio = "3/4", style = {}, children, onClick, hoverLabel = "View" }) {
  const t = TONES[tone] || TONES["warm-dark"];
  const ref = useRef(null);

  const onEnter = () => window.__setCursor?.({ hover: true, label: hoverLabel });
  const onLeave = () => window.__setCursor?.({ hover: false, label: "" });

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ position: "relative", aspectRatio: ratio, background: t.bg, color: t.fg, overflow: "hidden", ...style }}
    >
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: grainURL,
        backgroundRepeat: "repeat",
        mixBlendMode: "overlay",
        opacity: 0.6,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: 14, bottom: 12,
        fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".14em",
        color: t.fg, textTransform: "uppercase",
      }}>
        <span style={{ opacity: .55, marginRight: 8 }}>◦</span>{tag}
      </div>
      {children}
    </div>
  );
}
