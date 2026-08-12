import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    if (activeSection) {
      setActive(activeSection);
    }
  }, [activeSection]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="#">Manos Loukakis</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build accessible, responsive, and high-performance digital experiences for web and mobile.
        </p>

        {/* Desktop Navigation Links */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    className="group flex items-center py-3"
                    href={`#${item.id}`}
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? "text-slate-200"
                          : "text-slate-500 group-hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="https://github.com/Xpecialist"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={22} />
          </a>
        </li>
        <li>
          <a
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="https://www.linkedin.com/in/manos-loukakis-6292b7283/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </li>
        <li>
          <a
            className="block text-slate-400 hover:text-slate-200 transition-colors"
            href="mailto:manolouk2010@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <Mail size={22} />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Sidebar;
