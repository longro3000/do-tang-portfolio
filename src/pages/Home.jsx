// ABOUTME: Homepage — fullscreen hero, marquee press strip, positioning statement, selected work grid.
// ABOUTME: Categories teaser and press strip complete the editorial magazine landing experience.

import { Plate } from "../components/Plate";
import { PROJECTS, CATEGORIES, PRESS } from "../data";

export function Home({ navigate }) {
  const hero     = PROJECTS[0];
  const featured = PROJECTS.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", minHeight: 720, overflow: "hidden" }}>
        <Plate
          tone={hero.cover.tone}
          tag={hero.cover.tag}
          ratio="auto"
          hoverLabel="Enter"
          onClick={() => navigate({ page: "project", id: hero.id })}
          style={{ position: "absolute", inset: 0, aspectRatio: "auto" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          display: "grid", gridTemplateRows: "1fr auto",
          padding: "140px 40px 40px",
          color: "#F5F2ED",
          pointerEvents: "none",
        }}>
          <div style={{ alignSelf: "end" }}>
            <div className="mono" style={{ opacity: .7, marginBottom: 28 }}>
              Do Tang — Photographer &nbsp;/&nbsp; Est. 2016 &nbsp;/&nbsp; Paris ↔ Saigon
            </div>
            <h1 style={{
              fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
              fontSize: "clamp(72px, 11.5vw, 220px)",
              lineHeight: .88, letterSpacing: "-.04em",
              margin: 0, textWrap: "balance",
              maxWidth: "14ch",
            }}>
              European<br />editorial, with<br />a&nbsp;Southern&nbsp;pulse.
            </h1>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr auto auto", gap: 40,
            alignItems: "end", paddingTop: 40,
            borderTop: "1px solid rgba(245,242,237,0.25)",
          }}>
            <p style={{
              fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.4,
              maxWidth: 460, margin: 0, opacity: .9,
            }}>
              Fashion campaigns, artist portraiture, and editorial weddings —
              shot between Europe and Vietnam with a magazine sensibility.
            </p>
            <div style={{ display: "flex", gap: 12, pointerEvents: "auto" }}>
              <button
                onClick={() => navigate({ page: "work" })}
                onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Index" })}
                onMouseLeave={() => window.__setCursor?.({ hover: false })}
                className="mono"
                style={{ border: "1px solid currentColor", padding: "14px 22px", letterSpacing: ".14em", color: "#F5F2ED" }}
              >
                View Work ↗
              </button>
              <button
                onClick={() => navigate({ page: "contact" })}
                onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Book" })}
                onMouseLeave={() => window.__setCursor?.({ hover: false })}
                className="mono"
                style={{ background: "#F5F2ED", color: "#0A0A0A", padding: "14px 22px", letterSpacing: ".14em" }}
              >
                Booking
              </button>
            </div>
            <div className="mono" style={{ opacity: .7, textAlign: "right" }}>
              ◦ Currently<br />Booking · Jun–Sep 2026
            </div>
          </div>
        </div>
      </section>

      {/* Marquee press strip */}
      <section style={{ borderBottom: "1px solid var(--rule)", overflow: "hidden" }}>
        <div style={{
          display: "flex", gap: 60, padding: "18px 40px", whiteSpace: "nowrap",
          fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 20, letterSpacing: "-.01em",
          animation: "marquee 40s linear infinite",
        }}>
          {Array(3).fill(0).map((_, i) => (
            <span key={i} style={{ display: "flex", gap: 60 }}>
              <span>Vogue PhotoVogue</span><span style={{ opacity: .3 }}>✷</span>
              <span>Telma Magazine</span><span style={{ opacity: .3 }}>✷</span>
              <span>The Face</span><span style={{ opacity: .3 }}>✷</span>
              <span>Numéro Berlin</span><span style={{ opacity: .3 }}>✷</span>
              <span>Maison 0300</span><span style={{ opacity: .3 }}>✷</span>
              <span>Galerie Weisshaus</span><span style={{ opacity: .3 }}>✷</span>
            </span>
          ))}
        </div>
      </section>

      {/* Positioning statement */}
      <section style={{ padding: "140px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div className="mono" style={{ opacity: .55, marginBottom: 40 }}>§ 01 — Position</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
          <div className="mono" style={{ opacity: .6 }}>A note from<br />the photographer</div>
          <p style={{
            fontFamily: "var(--serif)", fontWeight: 300,
            fontSize: "clamp(32px, 3.8vw, 56px)",
            lineHeight: 1.15, letterSpacing: "-.02em",
            margin: 0, maxWidth: "22ch", textWrap: "pretty",
          }}>
            I photograph people in the moments just before
            <em style={{ fontStyle: "italic", fontWeight: 400 }}> they remember to compose themselves</em> —
            for magazines, for houses, and for couples who want a record closer to a film still than a wedding album.
          </p>
        </div>
      </section>

      {/* Selected Work */}
      <section style={{ padding: "100px 40px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 50 }}>
          <div>
            <div className="mono" style={{ opacity: .55, marginBottom: 14 }}>§ 02 — Selected Work</div>
            <h2 style={{
              fontFamily: "var(--serif)", fontWeight: 400, fontSize: 64,
              lineHeight: .95, letterSpacing: "-.02em", margin: 0, fontStyle: "italic",
            }}>
              Recent projects
            </h2>
          </div>
          <a
            onClick={() => navigate({ page: "work" })}
            onMouseEnter={() => window.__setCursor?.({ hover: true, label: "All" })}
            onMouseLeave={() => window.__setCursor?.({ hover: false })}
            className="mono"
            style={{ borderBottom: "1px solid currentColor", paddingBottom: 2 }}
          >
            See all projects ({PROJECTS.length}) ↗
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 24, rowGap: 100 }}>
          {featured.map((p, i) => {
            const layouts = [
              { col: "1 / 8",  ratio: "4/5", offset: 0   },
              { col: "9 / 13", ratio: "3/4", offset: 120 },
              { col: "2 / 7",  ratio: "3/4", offset: 60  },
              { col: "8 / 13", ratio: "4/5", offset: 0   },
            ];
            const L = layouts[i % layouts.length];
            return (
              <div key={p.id} style={{ gridColumn: L.col, marginTop: L.offset }}>
                <Plate
                  tone={p.cover.tone}
                  tag={p.cover.tag}
                  ratio={L.ratio}
                  hoverLabel="Open"
                  onClick={() => navigate({ page: "project", id: p.id })}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 18 }}>
                  <div>
                    <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 28, letterSpacing: "-.01em" }}>
                      {p.title}
                    </div>
                    <div className="mono" style={{ opacity: .55, marginTop: 4 }}>
                      {CATEGORIES.find(c => c.id === p.category).label} &nbsp;·&nbsp; {p.location}
                    </div>
                  </div>
                  <div className="mono" style={{ opacity: .55 }}>{p.year}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categories teaser */}
      <section style={{ padding: "140px 40px", borderTop: "1px solid var(--rule)" }}>
        <div className="mono" style={{ opacity: .55, marginBottom: 40 }}>§ 03 — Practice</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {CATEGORIES.map((c) => {
            const preview = PROJECTS.find(p => p.category === c.id);
            return (
              <div
                key={c.id}
                onClick={() => navigate({ page: "work", cat: c.id })}
                onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Open" })}
                onMouseLeave={() => window.__setCursor?.({ hover: false })}
              >
                <Plate tone={preview.cover.tone} tag={preview.cover.tag} ratio="3/4" hoverLabel={c.label} />
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--rule)",
                }}>
                  <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 32, letterSpacing: "-.01em" }}>
                    {c.label}
                  </div>
                  <div className="mono" style={{ opacity: .5 }}>— {c.n}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Press strip */}
      <section style={{ padding: "60px 40px", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(4, 1fr)", gap: 40, alignItems: "center" }}>
          <div className="mono" style={{ opacity: .55 }}>As seen in</div>
          {PRESS.map((p, i) => (
            <div key={i}>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22, letterSpacing: "-.01em" }}>
                {p.name}
              </div>
              <div className="mono" style={{ opacity: .5, marginTop: 4 }}>{p.note}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
