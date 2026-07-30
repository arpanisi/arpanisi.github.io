import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router";
import Landing from "./pages/Landing";
import AboutMe from "./pages/AboutMe";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>

      {/* Theme Toggle — persists across routes */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 text-xs tracking-wider border border-foreground/20 bg-background/80 backdrop-blur-sm hover:bg-foreground/5 transition-colors duration-300"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          [{isDark ? 'LIGHT' : 'DARK'} MODE]
        </button>
      </div>
    </HashRouter>
  );
}
