// ABOUTME: Shared page header used on inner pages (Work, Services, About, Contact).
// ABOUTME: Shows eyebrow label, large italic title, and optional caption paragraph.

export function PageHead({ eyebrow, title, caption }) {
  return (
    <section style={{ padding: "140px 40px 60px", borderBottom: "1px solid var(--rule)" }}>
      <div className="mono" style={{ opacity: .55, marginBottom: 40 }}>{eyebrow}</div>
      <h1 style={{
        fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
        fontSize: "clamp(72px, 10vw, 180px)",
        lineHeight: .88, letterSpacing: "-.035em",
        margin: 0, textWrap: "balance",
      }}>
        {title}
      </h1>
      {caption && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, marginTop: 50, alignItems: "end" }}>
          <div />
          <p style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.35, margin: 0, maxWidth: 640, textWrap: "pretty" }}>
            {caption}
          </p>
        </div>
      )}
    </section>
  );
}
