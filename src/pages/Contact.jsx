// ABOUTME: Contact page — manager card with facts on the left, enquiry form on the right.
// ABOUTME: Form collects project type, budget range, location and brief; shows confirmation on submit.

import { useState } from "react";
import { PageHead } from "../components/PageHead";
import { CONTACT } from "../data";

const inputStyle = {
  width: "100%",
  background: "transparent",
  border: 0,
  borderBottom: "1px solid var(--ink)",
  padding: "12px 0",
  fontFamily: "var(--serif)",
  fontSize: 22,
  color: "var(--ink)",
  outline: "none",
};

function Field({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div className="mono" style={{ opacity: .55, marginBottom: 10 }}>{label}</div>
      {children}
    </label>
  );
}

export function Contact({ navigate }) {
  const [form, setForm] = useState({
    name: "", email: "", type: "Fashion campaign",
    location: "", budget: "€5k – €15k", when: "", brief: "",
  });
  const [sent, setSent] = useState(false);

  const F = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHead
        eyebrow="Index — 04/04"
        title={<>Bookings<br /><em>&amp; collaborations.</em></>}
        caption={
          <>All enquiries go through <strong style={{ fontWeight: 500 }}>{CONTACT.managerName}</strong>, {CONTACT.managerRole.toLowerCase()}. Please include project type, location, and a rough window — it makes the first reply useful.</>
        }
      />

      <section style={{ padding: "60px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "4fr 8fr", gap: 60 }}>
          {/* Manager card */}
          <aside>
            <div style={{ border: "1px solid var(--ink)", padding: 30 }}>
              <div className="mono" style={{ opacity: .55, marginBottom: 30 }}>— Manager</div>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 36, letterSpacing: "-.01em" }}>
                {CONTACT.managerName}
              </div>
              <div className="mono" style={{ opacity: .6, marginTop: 6 }}>{CONTACT.managerRole}</div>
              <div style={{ marginTop: 30, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
                <div className="mono" style={{ opacity: .55, marginBottom: 8 }}>Direct</div>
                <a className="mono" style={{ borderBottom: "1px solid var(--ink)", paddingBottom: 2 }}>
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <dl style={{ margin: "40px 0 0" }}>
              {[
                ["Based",        CONTACT.based],
                ["Response",     CONTACT.response],
                ["Availability", CONTACT.availability],
                ["Languages",    "EN · FR · VI"],
                ["Travel",       "Worldwide, from Paris or Saigon"],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  padding: "18px 0", borderTop: "1px solid var(--rule)",
                }}>
                  <dt className="mono" style={{ opacity: .5 }}>{k}</dt>
                  <dd className="mono" style={{ margin: 0 }}>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>

          {/* Enquiry form */}
          <div>
            {!sent ? (
              <form onSubmit={submit} style={{ display: "grid", gap: 28 }}>
                <div className="mono" style={{ opacity: .55 }}>§ New enquiry</div>

                <Field label="Your name">
                  <input required value={form.name} onChange={e => F("name", e.target.value)} style={inputStyle} placeholder="Full name" />
                </Field>

                <Field label="Email">
                  <input required type="email" value={form.email} onChange={e => F("email", e.target.value)} style={inputStyle} placeholder="name@domain.com" />
                </Field>

                <Field label="Project type">
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Fashion campaign", "Magazine editorial", "Artist portrait", "Editorial wedding", "Other"].map(opt => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => F("type", opt)}
                        onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Pick" })}
                        onMouseLeave={() => window.__setCursor?.({ hover: false })}
                        className="mono"
                        style={{
                          padding: "10px 14px",
                          border: "1px solid var(--ink)",
                          background: form.type === opt ? "var(--ink)" : "transparent",
                          color:      form.type === opt ? "var(--paper)" : "var(--ink)",
                          letterSpacing: ".14em",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </Field>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                  <Field label="Location">
                    <input value={form.location} onChange={e => F("location", e.target.value)} style={inputStyle} placeholder="City, country" />
                  </Field>
                  <Field label="Window">
                    <input value={form.when} onChange={e => F("when", e.target.value)} style={inputStyle} placeholder="e.g. late June 2026" />
                  </Field>
                </div>

                <Field label="Budget range">
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["< €5k", "€5k – €15k", "€15k – €40k", "€40k+"].map(opt => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => F("budget", opt)}
                        onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Pick" })}
                        onMouseLeave={() => window.__setCursor?.({ hover: false })}
                        className="mono"
                        style={{
                          padding: "10px 14px",
                          border: "1px solid var(--ink)",
                          background: form.budget === opt ? "var(--ink)" : "transparent",
                          color:      form.budget === opt ? "var(--paper)" : "var(--ink)",
                          letterSpacing: ".14em",
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Tell us about the project">
                  <textarea
                    value={form.brief}
                    onChange={e => F("brief", e.target.value)}
                    style={{ ...inputStyle, minHeight: 160, resize: "vertical" }}
                    placeholder="Concept, references, crew, deliverables — whatever you have so far."
                  />
                </Field>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                  <div className="mono" style={{ opacity: .5 }}>We reply within 24–48 hours.</div>
                  <button
                    type="submit"
                    onMouseEnter={() => window.__setCursor?.({ hover: true, label: "Send" })}
                    onMouseLeave={() => window.__setCursor?.({ hover: false })}
                    className="mono"
                    style={{ background: "var(--ink)", color: "var(--paper)", padding: "18px 32px", letterSpacing: ".14em" }}
                  >
                    Send enquiry ↗
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ border: "1px solid var(--ink)", padding: 60 }}>
                <div className="mono" style={{ opacity: .55 }}>Enquiry received</div>
                <h2 style={{
                  fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic",
                  fontSize: "clamp(48px, 6vw, 96px)", lineHeight: .95, letterSpacing: "-.03em",
                  margin: "30px 0 0",
                }}>
                  Thank you, {form.name || "friend"}.
                </h2>
                <p style={{ fontFamily: "var(--serif)", fontSize: 20, lineHeight: 1.5, marginTop: 20, maxWidth: "50ch" }}>
                  {CONTACT.managerName} will reply to <strong>{form.email || "your email"}</strong> within 24–48 hours
                  with next steps on your {form.type.toLowerCase()}{form.location ? ` in ${form.location}` : ""}.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", type: "Fashion campaign", location: "", budget: "€5k – €15k", when: "", brief: "" }); }}
                  className="mono"
                  style={{ marginTop: 40, borderBottom: "1px solid var(--ink)", paddingBottom: 2 }}
                >
                  Submit another ↗
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
