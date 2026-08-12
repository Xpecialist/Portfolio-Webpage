import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Sun, Moon, FileText } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  isDark: boolean;
  toggleTheme: () => void;
}

const PHASE1 = "Welcome Malaka!";
const PHASE2 = "I'm Manos Loukakis";

type ToastType = "burn" | "cool";

const Sidebar = ({ activeSection, isDark, toggleTheme }: SidebarProps) => {
  const [active, setActive] = useState("about");
  const [displayedName, setDisplayedName] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Toast state: null = hidden, otherwise which type + a key to remount/restart animation
  const [toast, setToast] = useState<{ type: ToastType; key: number } | null>(null);

  // Refs to avoid stale closures
  const burnTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const burnPendingRef = useRef(false);   // timer scheduled but not fired yet
  const burnActiveRef = useRef(false);    // burn toast is currently showing
  const prevIsDarkRef = useRef(isDark);
  const toastKeyRef = useRef(0);

  const showToast = (type: ToastType) => {
    toastKeyRef.current += 1;
    if (type === "burn") burnActiveRef.current = true;
    setToast({ type, key: toastKeyRef.current });
  };

  const handleAnimationEnd = () => {
    burnActiveRef.current = false;
    setToast(null);
  };

  // Show burn toast 3s after page load if already in light mode
  useEffect(() => {
    if (!isDark) {
      burnPendingRef.current = true;
      burnTimerRef.current = setTimeout(() => {
        burnPendingRef.current = false;
        showToast("burn");
      }, 3000);
    }
    return () => {
      if (burnTimerRef.current) clearTimeout(burnTimerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Theme change → toast logic
  useEffect(() => {
    const wasDark = prevIsDarkRef.current;
    prevIsDarkRef.current = isDark;

    if (wasDark && !isDark) {
      // Dark → Light: schedule burn toast after 3s
      if (burnTimerRef.current) clearTimeout(burnTimerRef.current);
      burnPendingRef.current = true;
      burnTimerRef.current = setTimeout(() => {
        burnPendingRef.current = false;
        showToast("burn");
      }, 3000);
    } else if (!wasDark && isDark) {
      // Light → Dark: cancel pending burn; if burn was pending or showing → show cool
      const shouldShowCool = burnPendingRef.current || burnActiveRef.current;
      if (burnTimerRef.current) clearTimeout(burnTimerRef.current);
      burnTimerRef.current = null;
      burnPendingRef.current = false;
      burnActiveRef.current = false;

      if (shouldShowCool) {
        showToast("cool");
      } else {
        setToast(null);
      }
    }

    return () => {
      if (burnTimerRef.current) clearTimeout(burnTimerRef.current);
    };
  }, [isDark]);

  // Multi-phase typewriter animation on mount
  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

    const runAnimation = async () => {
      // Phase 1: type "Welcome Malaka"
      for (let i = 1; i <= PHASE1.length; i++) {
        if (cancelled) return;
        setDisplayedName(PHASE1.slice(0, i));
        await sleep(80);
      }

      // Hold briefly
      await sleep(400);

      // Phase 2: fast backspace delete
      for (let i = PHASE1.length - 1; i >= 0; i--) {
        if (cancelled) return;
        setDisplayedName(PHASE1.slice(0, i));
        await sleep(38);
      }

      // Short pause before final text
      await sleep(180);

      // Phase 3: type final name
      for (let i = 1; i <= PHASE2.length; i++) {
        if (cancelled) return;
        setDisplayedName(PHASE2.slice(0, i));
        await sleep(72);
      }

      // Blink cursor a few times then hide
      if (cancelled) return;
      let blinks = 0;
      const blinkInterval = setInterval(() => {
        setCursorVisible((v) => !v);
        blinks++;
        if (blinks > 5) {
          clearInterval(blinkInterval);
          setCursorVisible(false);
        }
      }, 400);
    };

    runAnimation();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (activeSection) setActive(activeSection);
  }, [activeSection]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const iconClass = `block transition-colors ${isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-purple-700'}`;

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Name with typing animation and underscore cursor */}
        <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
          <a href="#">
            {displayedName}
            <span
              className={`inline-block transition-opacity duration-100 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              } ${isDark ? 'text-teal-400' : 'text-purple-600'}`}
            >_</span>
          </a>
        </h1>

        <h2 className={`mt-3 text-lg font-medium tracking-tight sm:text-xl ${isDark ? 'text-slate-300' : 'text-purple-700 font-semibold'}`}>
          Full Stack Developer
        </h2>
        <p className={`mt-4 max-w-xs leading-normal ${isDark ? 'text-slate-400' : 'text-slate-700 font-medium'}`}>
          I build accessible, responsive, and high-performance digital experiences for web and mobile.
        </p>

        {/* Desktop Navigation Links */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a className="group flex items-center py-3" href={`#${item.id}`}>
                    <span
                      className={`mr-4 h-px transition-all duration-300 motion-reduce:transition-none ${
                        isActive
                          ? isDark ? "w-16 bg-slate-200" : "w-16 bg-purple-600"
                          : isDark ? "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200" : "w-8 bg-slate-400 group-hover:w-16 group-hover:bg-purple-600"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? isDark ? "text-slate-200" : "text-purple-700 font-bold"
                          : isDark ? "text-slate-500 group-hover:text-slate-200" : "text-slate-500 group-hover:text-purple-700"
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

      {/* Bottom: social icons + CV + theme toggle on one row */}
      <div className="mt-8">
        <ul className="flex items-center gap-5 flex-wrap" aria-label="Social media and links">
          <li>
            <a className={iconClass} href="https://github.com/Xpecialist" target="_blank" rel="noreferrer noopener" aria-label="GitHub" title="GitHub">
              <Github size={22} />
            </a>
          </li>
          <li>
            <a className={iconClass} href="https://www.linkedin.com/in/manos-loukakis-6292b7283/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin size={22} />
            </a>
          </li>
          <li>
            <a className={iconClass} href="mailto:manolouk2010@gmail.com" aria-label="Email" title="Email">
              <Mail size={22} />
            </a>
          </li>
          <li>
            <a
              className={iconClass}
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              target="_blank"
              rel="noreferrer noopener"
              download="Manos_Loukakis_CV.pdf"
              aria-label="Download CV"
              title="Download CV / Resume"
            >
              <FileText size={22} />
            </a>
          </li>

          {/* Theme Toggle + Toast */}
          <li className="relative flex items-center">
            <button
              onClick={toggleTheme}
              className={iconClass}
              aria-label="Toggle dark/light mode"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* Self-animating toast — uses CSS animation, cleared on animationEnd */}
            {toast && (
              <span
                key={toast.key}
                onAnimationEnd={handleAnimationEnd}
                className={`pointer-events-none absolute left-9 top-1/2 whitespace-nowrap text-sm font-bold tracking-wide ${
                  toast.type === "burn" ? "toast-burn text-orange-500" : "toast-cool text-teal-400"
                }`}
                aria-hidden="true"
              >
                {toast.type === "burn" ? "🔥 Eyes burning!?" : "Now it's cool 😅"}
              </span>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
