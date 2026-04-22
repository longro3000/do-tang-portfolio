// ABOUTME: Work index page — filterable by category with an alternating editorial grid layout.
// ABOUTME: Each project row alternates image left/right for visual rhythm.

import { useState } from "react";
import { Plate } from "../components/Plate";
import { PageHead } from "../components/PageHead";
import { PROJECTS, CATEGORIES } from "../data";

export function Work({ navigate, initialCat }) {
  const [cat, setCat] = useState(initialCat || "all");
  const filtered = cat === "all" ? PROJECTS : PROJECTS.filter(p => p.category === cat);

  return (
    <>
      <PageHead
        eyebrow="Index — 01/04"
        title={<><span>Work,</span><br /><em style={{ fontStyle: "italic" }}>2023 – 2026.</em></>}
        caption="Selected projects across fashion, artist portraiture, and editorial weddings. Filter by practice, or read each in sequence."
      />

      {/* Filter bar */}
      <section style={{
        padding: "30px 40px", borderBottom: "1px solid var(--rule)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {[{ id: "all", label: "All", n: "00" }, ...CATEGORIES].map(c => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              onMouseEnter={() => window.__setCursor?.({ hover: true, label: c.label })}
              onMouseLeave={() => window.__setCursor?.({ hover: false })}
              className="mono"
              style={{
                padding: "10px 16px",
                background: cat === c.id ? "var(--ink)" : "transparent",
                color:      cat === c.id ? "var(--paper)" : "var(--ink)",
                border: "1px solid var(--ink)",
                letterSpacing: ".14em",
              }}
            >
              {c.label}{" "}
              <span style={{ opacity: .5, marginLeft: 8 }}>
                {c.id === "all" ? PROJECTS.length : PROJECTS.filter(p => p.category === c.id).length}
              </span>
            </button>
          ))}
        </div>
        <div className="mono" style={{ opacity: .5 }}>{filtered.length} project{filtered.length > 1 ? "s" : ""}</div>
      </section>

      {/* Editorial list */}
      <section style={{ padding: "60px 40px 40px" }}>
        {filtered.map((p, i) => {
          const odd = i % 2 === 1;
          return (
            <article
              key={p.id}
              style={{
                display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 24,
                padding: "40px 0",
                borderBottom: i === filtered.length - 1 ? "none" : "1px solid var(--rule)",
                alignItems: "center",
              }}
            >
              <div
                style={{ gridColumn: odd ? "7 / 13" : "1 / 7", order: odd ? 2 : 1 }}
                onClick={() => navigate({ page: "project", id: p.id })}
              >
                <Plate tone={p.cover.tone} tag={p.cover.tag} ratio="4/5" hoverLabel="Open" />
              </div>
              <div style={{ gridColumn: odd ? "1 / 6" : "8 / 13", order: odd ? 1 : 2 }}>
                <div className="mono" style={{ opacity: .55, marginBottom: 18 }}>
                  № {String(i + 1).padStart(2, "0")} &nbsp;·&nbsp; {CATEGORIES.find(c => c.id === p.category).label}
                </div>
                <h2 style={{
                  fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
                  fontSize: "clamp(48px, 6vw, 96px)", lineHeight: .95, letterSpacing: "-.03em",
                  margin: 0, textWrap: "balance",
                }}>
                  {p.title}
                </h2>
                <p style={{ fontFamily: "var(--serif)", fontSize: 20, lineHeight: 1.4, margin: "28px 0 0", maxWidth: "38ch" }}>
                  {p.tagline}
                </p>
                <div style={{ display: "flex", gap: 24, marginTop: 32 }}>
                  <div className="mono" style={{ opacity: .55 }}>{p.location}</div>
                  <div className="mono" style={{ opacity: .55 }}>{p.year}</div>
                  <div className="mono" style={{ opacity: .55 }}>{p.images.length} frames</div>
                </div>
                <button
                  onClick={() => navigate({ page: "project", id: p.id })}
                  onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Read" })}
                  onMouseLeave={() => window.__setCursor?.({ hover: false })}
                  className="mono"
                  style={{ marginTop: 32, borderBottom: "1px solid var(--ink)", paddingBottom: 3 }}
                >
                  Read project ↗
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
