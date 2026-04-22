// ABOUTME: Project detail page — title block, cinematic cover, concept/credits, editorial gallery.
// ABOUTME: Ends with a "next project" navigation block using the next project in the array.

import { Plate } from "../components/Plate";
import { PROJECTS, CATEGORIES } from "../data";

function layoutFor(i) {
  const pattern = i % 5;
  if (pattern === 0) return { col: "2 / 12", mt: 0 };
  if (pattern === 1) return { col: "1 / 7",  mt: 60 };
  if (pattern === 2) return { col: "8 / 13", mt: -80 };
  if (pattern === 3) return { col: "3 / 11", mt: 80 };
  return                    { col: "1 / 13", mt: 40 };
}

export function Project({ navigate, id }) {
  const p   = PROJECTS.find(x => x.id === id) || PROJECTS[0];
  const idx = PROJECTS.findIndex(x => x.id === p.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      {/* Title block */}
      <section style={{ padding: "160px 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
          <div className="mono" style={{ opacity: .55 }}>
            <div>№ {String(idx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}</div>
            <div style={{ marginTop: 6 }}>{CATEGORIES.find(c => c.id === p.category).label}</div>
            <div style={{ marginTop: 6 }}>{p.location} — {p.year}</div>
          </div>
          <div>
            <h1 style={{
              fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
              fontSize: "clamp(72px, 11vw, 200px)", lineHeight: .88, letterSpacing: "-.035em",
              margin: 0, textWrap: "balance",
            }}>
              {p.title}
            </h1>
            <p style={{
              fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.3,
              margin: "40px 0 0", maxWidth: "30ch", textWrap: "pretty",
            }}>
              {p.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section style={{ padding: "0 40px" }}>
        <Plate tone={p.cover.tone} tag={p.cover.tag} ratio="21/9" hoverLabel="" />
      </section>

      {/* Concept + Credits */}
      <section style={{ padding: "100px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
          <div>
            <div className="mono" style={{ opacity: .55 }}>Concept</div>
            <div style={{ marginTop: 60 }}>
              <div className="mono" style={{ opacity: .55, marginBottom: 16 }}>Credits</div>
              {p.credits.map(([k, v]) => (
                <div key={k} style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  padding: "10px 0", borderTop: "1px solid var(--rule)",
                }}>
                  <span className="mono" style={{ opacity: .5 }}>{k}</span>
                  <span className="mono">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <p style={{
            fontFamily: "var(--serif)", fontWeight: 300,
            fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.25, letterSpacing: "-.015em",
            margin: 0, maxWidth: "30ch", textWrap: "pretty",
          }}>
            {p.concept}
          </p>
        </div>
      </section>

      {/* Editorial gallery */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 24, rowGap: 40 }}>
          {p.images.map((img, i) => {
            const L = layoutFor(i);
            return (
              <figure key={i} style={{ gridColumn: L.col, marginTop: L.mt, margin: 0 }}>
                <Plate
                  tone={img.tone}
                  tag={img.tag}
                  ratio={img.ratio}
                  hoverLabel={`${String(i + 1).padStart(2, "0")} / ${String(p.images.length).padStart(2, "0")}`}
                />
                <figcaption className="mono" style={{ opacity: .5, marginTop: 10 }}>
                  Pl. {String(i + 1).padStart(2, "0")} — {img.tag.toLowerCase()}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* Next project */}
      <section style={{ padding: "140px 40px", borderTop: "1px solid var(--rule)" }}>
        <div
          onClick={() => navigate({ page: "project", id: next.id })}
          onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Next" })}
          onMouseLeave={() => window.__setCursor?.({ hover: false })}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}
        >
          <div>
            <div className="mono" style={{ opacity: .55, marginBottom: 20 }}>Next project →</div>
            <h3 style={{
              fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
              fontSize: "clamp(56px, 7vw, 128px)", lineHeight: .9, letterSpacing: "-.03em",
              margin: 0,
            }}>
              {next.title}
            </h3>
            <div className="mono" style={{ opacity: .55, marginTop: 20 }}>
              {CATEGORIES.find(c => c.id === next.category).label} · {next.location} · {next.year}
            </div>
          </div>
          <Plate tone={next.cover.tone} tag={next.cover.tag} ratio="4/5" hoverLabel="Open" />
        </div>
      </section>
    </>
  );
}
