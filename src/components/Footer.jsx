// ABOUTME: Site footer with large CTA headline, nav index, social links, and location info.
// ABOUTME: Uses a two-row grid: main content above, copyright strip below.

export function Footer({ navigate }) {
  return (
    <footer style={{ borderTop: "1px solid var(--rule)", marginTop: 120, padding: "40px 40px 28px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{
            fontFamily: "var(--serif)", fontSize: 56, lineHeight: .95,
            letterSpacing: "-.02em", fontStyle: "italic", fontWeight: 300,
          }}>
            Work with<br />Do&nbsp;Tang.
          </div>
          <a
            onClick={() => navigate({ page: "contact" })}
            onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Contact" })}
            onMouseLeave={() => window.__setCursor?.({ hover: false })}
            className="mono"
            style={{ display: "inline-block", marginTop: 18, borderBottom: "1px solid var(--ink)", paddingBottom: 2 }}
          >
            bookings@do-tang.com
          </a>
        </div>

        <div>
          <div className="mono" style={{ opacity: .5, marginBottom: 14 }}>Index</div>
          <div style={{ display: "grid", gap: 6 }}>
            {[["Work", "work"], ["Services", "services"], ["About", "about"], ["Contact", "contact"]].map(([label, key]) => (
              <a key={key} className="mono" onClick={() => navigate({ page: key })}>{label}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="mono" style={{ opacity: .5, marginBottom: 14 }}>Elsewhere</div>
          <div style={{ display: "grid", gap: 6 }}>
            <a className="mono">Instagram ↗</a>
            <a className="mono">PhotoVogue ↗</a>
            <a className="mono">Are.na ↗</a>
          </div>
        </div>

        <div>
          <div className="mono" style={{ opacity: .5, marginBottom: 14 }}>Based</div>
          <div className="mono">Paris, FR</div>
          <div className="mono">Saigon, VN</div>
        </div>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between",
        marginTop: 60, paddingTop: 18,
        borderTop: "1px solid var(--rule)",
      }}>
        <div className="mono" style={{ opacity: .5 }}>© 2026 Do Tang Studio. All photographs reserved.</div>
        <div className="mono" style={{ opacity: .5 }}>Site rebuild — v2.0</div>
      </div>
    </footer>
  );
}
