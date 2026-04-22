// ABOUTME: Design tweaks panel for toggling paper mode, type pair, and cursor blend at runtime.
// ABOUTME: Only visible when activated via postMessage from a parent frame (design tool integration).

import { useState, useEffect } from "react";

const TWEAK_DEFAULTS = {
  paperMode:   "bone",
  typePair:    "fraunces-jet",
  density:     "editorial",
  grain:       true,
  cursorBlend: true,
};

export function useTweaks() {
  const [t, setT]           = useState(TWEAK_DEFAULTS);
  const [open, setOpen]     = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode")   setOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    setAvailable(true);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    const r = document.documentElement.style;
    if (t.paperMode === "bone") {
      r.setProperty("--paper",   "#F5F2ED");
      r.setProperty("--paper-2", "#EDE8DF");
      r.setProperty("--ink",     "#0A0A0A");
      r.setProperty("--muted",   "#6B6660");
      r.setProperty("--rule",    "rgba(10,10,10,0.15)");
    } else if (t.paperMode === "white") {
      r.setProperty("--paper",   "#FFFFFF");
      r.setProperty("--paper-2", "#F5F5F5");
      r.setProperty("--ink",     "#0A0A0A");
      r.setProperty("--muted",   "#555");
      r.setProperty("--rule",    "rgba(10,10,10,0.12)");
    } else if (t.paperMode === "ink") {
      r.setProperty("--paper",   "#0C0C0C");
      r.setProperty("--paper-2", "#161616");
      r.setProperty("--ink",     "#EDE8DF");
      r.setProperty("--muted",   "#9E9A92");
      r.setProperty("--rule",    "rgba(237,232,223,0.18)");
    }
    const cur = document.getElementById("cursor");
    if (cur) cur.style.mixBlendMode = t.cursorBlend ? "difference" : "normal";
  }, [t.paperMode, t.cursorBlend]);

  useEffect(() => {
    const r = document.documentElement.style;
    if (t.typePair === "fraunces-jet") {
      r.setProperty("--serif", `"Fraunces", "Times New Roman", serif`);
      r.setProperty("--mono",  `"JetBrains Mono", ui-monospace, monospace`);
    } else if (t.typePair === "times-courier") {
      r.setProperty("--serif", `"Times New Roman", Times, serif`);
      r.setProperty("--mono",  `"Courier New", ui-monospace, monospace`);
    } else if (t.typePair === "fraunces-only") {
      r.setProperty("--serif", `"Fraunces", serif`);
      r.setProperty("--mono",  `"Fraunces", serif`);
    }
  }, [t.typePair]);

  const update = (patch) => {
    setT(prev => {
      const next = { ...prev, ...patch };
      window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
      return next;
    });
  };

  return { t, update, open, setOpen, available };
}

function Pill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="mono"
      style={{
        padding: "6px 10px",
        border: "1px solid var(--ink)",
        background: active ? "var(--ink)" : "transparent",
        color:      active ? "var(--paper)" : "var(--ink)",
        fontSize: 10, letterSpacing: ".12em",
      }}
    >
      {children}
    </button>
  );
}

function Group({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div className="mono" style={{ opacity: .55, marginBottom: 8, fontSize: 10 }}>{label}</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}

export function TweaksPanel({ tweaks }) {
  const { t, update, open } = tweaks;
  if (!open) return null;

  return (
    <div style={{
      position: "fixed", right: 20, bottom: 20, zIndex: 1000,
      width: 300, background: "var(--paper)", border: "1px solid var(--ink)",
      padding: 20, fontFamily: "var(--mono)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div className="mono" style={{ fontWeight: 500 }}>Tweaks</div>
        <div className="mono" style={{ opacity: .5 }}>v2.0</div>
      </div>

      <Group label="Paper mode">
        {[["bone", "Bone"], ["white", "White"], ["ink", "Ink"]].map(([k, l]) => (
          <Pill key={k} active={t.paperMode === k} onClick={() => update({ paperMode: k })}>{l}</Pill>
        ))}
      </Group>

      <Group label="Type pair">
        {[["fraunces-jet", "Fraunces + Jet"], ["times-courier", "Times + Courier"], ["fraunces-only", "Fraunces only"]].map(([k, l]) => (
          <Pill key={k} active={t.typePair === k} onClick={() => update({ typePair: k })}>{l}</Pill>
        ))}
      </Group>

      <Group label="Cursor blend">
        <Pill active={t.cursorBlend} onClick={() => update({ cursorBlend: !t.cursorBlend })}>
          {t.cursorBlend ? "On" : "Off"}
        </Pill>
      </Group>
    </div>
  );
}
