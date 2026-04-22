// ABOUTME: Fixed top navigation bar using mix-blend-mode:difference to work over any page color.
// ABOUTME: Left: logo/name. Center: page links. Right: EU/VN indicator and booking CTA.

export function Nav({ route, navigate }) {
  const items = [
    ["Work",     "work"],
    ["Services", "services"],
    ["About",    "about"],
    ["Contact",  "contact"],
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      display: "grid", gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      padding: "22px 40px",
      mixBlendMode: "difference",
      color: "#F5F2ED",
    }}>
      <a
        onClick={() => navigate({ page: "home" })}
        onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Home" })}
        onMouseLeave={() => window.__setCursor?.({ hover: false })}
        style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: 22, letterSpacing: "-.01em" }}
      >
        Do Tang
        <span className="mono" style={{ fontStyle: "normal", fontSize: 10, letterSpacing: ".14em", marginLeft: 10, opacity: .6 }}>
          Photographer
        </span>
      </a>

      <nav style={{ display: "flex", gap: 28 }}>
        {items.map(([label, key]) => (
          <a
            key={key}
            onClick={() => navigate({ page: key })}
            onMouseEnter={() => window.__setCursor?.({ hover: true, label: "→" })}
            onMouseLeave={() => window.__setCursor?.({ hover: false })}
            className="mono"
            style={{
              opacity: route.page === key ? 1 : 0.7,
              paddingBottom: 4,
              borderBottom: route.page === key ? "1px solid currentColor" : "1px solid transparent",
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      <div style={{ justifySelf: "end", display: "flex", gap: 16, alignItems: "center" }}>
        <span className="mono" style={{ opacity: .6 }}>EU ↔ VN</span>
        <a
          onClick={() => navigate({ page: "contact" })}
          onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Book" })}
          onMouseLeave={() => window.__setCursor?.({ hover: false })}
          className="mono"
          style={{ border: "1px solid currentColor", padding: "8px 14px", letterSpacing: ".14em" }}
        >
          Booking ↗
        </a>
      </div>
    </header>
  );
}
