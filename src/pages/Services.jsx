// ABOUTME: Services page — three practice areas listed with process steps and differentiators.
// ABOUTME: Ends with a full-width CTA to the contact page.

import { PageHead } from "../components/PageHead";
import { SERVICES, PROCESS } from "../data";

export function Services({ navigate }) {
  return (
    <>
      <PageHead
        eyebrow="Index — 02/04"
        title={<>Work with<br /><em>the studio.</em></>}
        caption="Three practice areas, one approach: European editorial methods applied to whatever stands in front of the camera. Rates on request."
      />

      {/* Services list */}
      <section style={{ padding: "60px 40px" }}>
        {SERVICES.map((s, i) => (
          <div key={s.n} style={{
            display: "grid", gridTemplateColumns: "1fr 4fr 2fr", gap: 40,
            padding: "60px 0",
            borderTop: i === 0 ? "1px solid var(--ink)" : "1px solid var(--rule)",
          }}>
            <div className="mono" style={{ opacity: .55 }}>— {s.n}</div>
            <div>
              <h2 style={{
                fontFamily: "var(--serif)", fontWeight: 400, fontStyle: "italic",
                fontSize: "clamp(40px, 4.5vw, 72px)", lineHeight: 1, letterSpacing: "-.02em",
                margin: 0, textWrap: "balance",
              }}>
                {s.title}
              </h2>
            </div>
            <p style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.5, margin: 0, textWrap: "pretty" }}>
              {s.body}
            </p>
          </div>
        ))}
      </section>

      {/* Process */}
      <section style={{ padding: "140px 40px", borderTop: "1px solid var(--ink)" }}>
        <div className="mono" style={{ opacity: .55, marginBottom: 40 }}>§ Process</div>
        <h2 style={{
          fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
          fontSize: "clamp(56px, 7vw, 112px)", lineHeight: .92, letterSpacing: "-.03em",
          margin: 0, maxWidth: "14ch", textWrap: "balance",
        }}>
          From first email to final delivery.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 80 }}>
          {PROCESS.map(([n, title, body]) => (
            <div key={n} style={{ borderTop: "1px solid var(--ink)", paddingTop: 20 }}>
              <div className="mono" style={{ opacity: .55, marginBottom: 20 }}>— {n}</div>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 32, letterSpacing: "-.01em", marginBottom: 16 }}>
                {title}
              </div>
              <p style={{ fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.55, margin: 0, opacity: .75 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section style={{ padding: "140px 40px", borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
          <div className="mono" style={{ opacity: .55 }}>§ What makes<br />the studio different</div>
          <div>
            <p style={{
              fontFamily: "var(--serif)", fontWeight: 300,
              fontSize: "clamp(32px, 3.6vw, 56px)", lineHeight: 1.2, letterSpacing: "-.02em",
              margin: 0, maxWidth: "24ch", textWrap: "pretty",
            }}>
              European editorial craft, applied to subjects and cities
              that most magazines still don't know how to photograph.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 80 }}>
              {[
                ["Two bases",     "Paris for European campaigns, Saigon for Asia — one studio, one rate card, two time zones."],
                ["Small crew",    "Shoots run with a trusted core. No ballooning call sheets unless the brief demands it."],
                ["Magazine-first","Every project is designed to read as a story, not a collection of images."],
              ].map(([t, b]) => (
                <div key={t}>
                  <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 24, marginBottom: 10, letterSpacing: "-.01em" }}>{t}</div>
                  <p style={{ fontFamily: "var(--serif)", fontSize: 15, lineHeight: 1.5, margin: 0, opacity: .75 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "160px 40px", textAlign: "center" }}>
        <div className="mono" style={{ opacity: .55, marginBottom: 32 }}>Ready when you are</div>
        <h2 style={{
          fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
          fontSize: "clamp(72px, 9vw, 160px)", lineHeight: .9, letterSpacing: "-.035em",
          margin: 0, textWrap: "balance",
        }}>
          Contact for rates<br />&amp; availability.
        </h2>
        <button
          onClick={() => navigate({ page: "contact" })}
          onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Email" })}
          onMouseLeave={() => window.__setCursor?.({ hover: false })}
          className="mono"
          style={{ marginTop: 50, border: "1px solid var(--ink)", padding: "18px 32px", letterSpacing: ".14em" }}
        >
          Open contact form ↗
        </button>
      </section>
    </>
  );
}
