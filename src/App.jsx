// ABOUTME: Root application component — manages client-side routing state and page transitions.
// ABOUTME: Route state is persisted to localStorage so the last-visited page survives refresh.

import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { TweaksPanel, useTweaks } from "./components/TweaksPanel";
import { Home }     from "./pages/Home";
import { Work }     from "./pages/Work";
import { Project }  from "./pages/Project";
import { Services } from "./pages/Services";
import { About }    from "./pages/About";
import { Contact }  from "./pages/Contact";

function useCursor() {
  useEffect(() => {
    const el    = document.getElementById("cursor");
    const label = document.getElementById("cursor-label");
    if (!el) return;

    const onMove = (e) => {
      el.style.left = e.clientX + "px";
      el.style.top  = e.clientY + "px";
    };

    window.__setCursor = ({ hover, label: text }) => {
      el.classList.toggle("hover", !!hover);
      label.textContent = text || "";
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
}

export function App() {
  const [route, setRoute] = useState(() => {
    try {
      const saved = localStorage.getItem("dotang.route");
      return saved ? JSON.parse(saved) : { page: "home" };
    } catch {
      return { page: "home" };
    }
  });

  const navigate = (r) => {
    setRoute(r);
    try { localStorage.setItem("dotang.route", JSON.stringify(r)); } catch {}
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useCursor();
  const tweaks = useTweaks();

  const pageMap = {
    home:     <Home     navigate={navigate} />,
    work:     <Work     navigate={navigate} initialCat={route.cat} />,
    project:  <Project  navigate={navigate} id={route.id} />,
    services: <Services navigate={navigate} />,
    about:    <About    navigate={navigate} />,
    contact:  <Contact  navigate={navigate} />,
  };

  const Page = pageMap[route.page] ?? pageMap.home;

  return (
    <div
      key={route.page + (route.id || "") + (route.cat || "")}
      style={{ animation: "fadeIn .5s ease" }}
    >
      <Nav route={route} navigate={navigate} />
      <main>{Page}</main>
      <Footer navigate={navigate} />
      <TweaksPanel tweaks={tweaks} />
    </div>
  );
}
