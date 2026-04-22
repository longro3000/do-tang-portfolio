// ABOUTME: About page — photographer biography, philosophy quote, client list, and career timeline.
// ABOUTME: Self-portrait placeholder sits beside the bio text in a two-column layout.

import { Plate } from "../components/Plate";
import { PageHead } from "../components/PageHead";

export function About({ navigate }) {
  return (
    <>
      <PageHead
        eyebrow="Index — 03/04"
        title={<>Between two<br /><em>languages of light.</em></>}
      />

      {/* Bio */}
      <section style={{ padding: "80px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 60 }}>
          <div>
            <Plate tone="warm-dark" tag="PORTRAIT / SELF / SAIGON 2025" ratio="4/5" hoverLabel="" />
            <div className="mono" style={{ opacity: .55, marginTop: 14 }}>
              Do Tang — Self-portrait, Saigon, 2025
            </div>
          </div>
          <div>
            <div className="mono" style={{ opacity: .55, marginBottom: 40 }}>§ Bio</div>
            <p style={{
              fontFamily: "var(--serif)", fontWeight: 300,
              fontSize: "clamp(24px, 2.4vw, 36px)", lineHeight: 1.35, letterSpacing: "-.01em",
              margin: 0, textWrap: "pretty",
            }}>
              Do Tang is a photographer working between Paris and Saigon, focused on
              blending European editorial aesthetics with the real-world narratives
              of Southeast Asia. His work is commissioned for fashion campaigns,
              independent magazines, and a short list of couples who want their
              wedding shot the way a magazine would cover it.
            </p>
            <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.6, marginTop: 40, textWrap: "pretty", opacity: .85 }}>
              Before photography, he trained as a painter in Brussels and spent
              three years assisting in editorial fashion studios across France
              and Belgium. His first solo commissions came from small-circulation
              magazines that wanted work from Vietnam that didn't flatten the
              country into postcard.
            </p>
            <p style={{ fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.6, marginTop: 20, textWrap: "pretty", opacity: .85 }}>
              That, more or less, is the work now: the editorial vocabulary of
              Europe, applied — carefully — to the people and places of
              somewhere else.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: "140px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div className="mono" style={{ opacity: .55, marginBottom: 30 }}>§ Philosophy</div>
        <blockquote style={{
          fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
          fontSize: "clamp(40px, 5.5vw, 88px)", lineHeight: 1.08, letterSpacing: "-.025em",
          margin: 0, maxWidth: "18ch", textWrap: "balance",
        }}>
          "A good photograph is just a subject who has forgotten the room has a door."
        </blockquote>
        <div className="mono" style={{ opacity: .55, marginTop: 30 }}>— Do Tang, 2024</div>
      </section>

      {/* Clients & Press */}
      <section style={{ padding: "140px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
          <div className="mono" style={{ opacity: .55 }}>§ Selected<br />clients &amp; press</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0 }}>
            {[
              "Vogue PhotoVogue", "Telma Magazine",
              "The Face", "Numéro Berlin",
              "Maison 0300 (Antwerp)", "Galerie Weisshaus (Berlin)",
              "Studio Saigon", "Private commission",
            ].map((name, i) => (
              <div key={i} style={{
                padding: "22px 0",
                borderTop: i < 2 ? "1px solid var(--ink)" : "1px solid var(--rule)",
                fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 28, letterSpacing: "-.01em",
              }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "140px 40px" }}>
        <div className="mono" style={{ opacity: .55, marginBottom: 30 }}>§ Notes</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", rowGap: 0 }}>
          {[
            ["2016", "First commissioned editorial — Brussels"],
            ["2019", "Relocates to Saigon; begins Asia-based practice"],
            ["2022", "Selected for Vogue PhotoVogue"],
            ["2024", "Telma Issue 14 cover story"],
            ["2025", "Solo book in development — titled Small Cities"],
            ["2026", "Studio opens second base in Paris"],
          ].map(([yr, note], i) => (
            <div key={i} style={{ display: "contents" }}>
              <div className="mono" style={{ padding: "24px 0", borderTop: "1px solid var(--rule)", opacity: .7 }}>{yr}</div>
              <div style={{
                padding: "24px 0", borderTop: "1px solid var(--rule)",
                fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22, letterSpacing: "-.01em",
              }}>
                {note}
              </div>
              <div style={{ padding: "24px 0", borderTop: "1px solid var(--rule)", textAlign: "right" }} className="mono">
                <span style={{ opacity: .4 }}>◦ {String(i + 1).padStart(2, "0")}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
