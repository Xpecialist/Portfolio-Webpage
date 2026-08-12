import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // Track mouse coordinates for background spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        isDark
          ? "dark-theme bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900"
          : "light-theme bg-slate-100 text-slate-900 selection:bg-purple-200 selection:text-purple-900"
      }`}
    >
      {/* Edge Vignette Shading Overlay for Light Mode */}
      {!isDark && (
        <div className="pointer-events-none fixed inset-0 z-20 shadow-[inset_0_0_140px_rgba(15,23,42,0.18)]" />
      )}

      {/* Mouse Radial Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${
            isDark ? "rgba(45, 212, 191, 0.12)" : "rgba(168, 85, 247, 0.20)"
          }, transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-8">
          {/* Fixed Sticky Sidebar Navigation */}
          <Sidebar
            activeSection={activeSection}
            isDark={isDark}
            toggleTheme={toggleTheme}
          />

          {/* Right Main Scrollable Content */}
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <CV isDark={isDark} />
            <div className="my-24">
              <Projects isDark={isDark} />
            </div>
            <Contact isDark={isDark} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
