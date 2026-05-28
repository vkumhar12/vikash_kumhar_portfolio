import ThemeToggle from "@/components/ThemeToggle";
import { navigationData, socialIconList } from "@/locals";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const { push } = useRouter();
  const [showDrawer, setShowDrawer] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const scrollToSection = (path: string) => {
    setShowDrawer(false);
    document.body.style.overflow = "auto";

    if (path.startsWith("#")) {
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      push(path);
    }
  };

  if (typeof document !== "undefined") {
    document.body.style.overflow = showDrawer ? "hidden" : "auto";
  }

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      setHeaderVisible(st <= lastScrollTop || st <= 60);
      setLastScrollTop(st <= 0 ? 0 : st);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={headerVisible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[301] backdrop-blur-md bg-white/80 dark:bg-[#131217]/90 border-b border-slate-200/50 dark:border-slate-700/30"
      >
        <div className="flex justify-between items-center px-4 py-3 md:py-4 main-container">
          {/* Logo */}
          <button
            className="flex group items-center gap-1.5 text-lg font-bold hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-800 dark:text-white common-transition"
            onClick={() => push("/")}
            aria-label="Home"
          >
            {["v", "k", "."].map((char, i) => (
              <motion.span
                key={char + i}
                initial={{ x: (i + 1) * 20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 + i * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-sm">
              {navigationData.map((item) =>
                item.isOuterLink ? (
                  <a href={item.link} key={item.label} target="_blank" rel="noopener noreferrer" download>
                    <li className="tracking-wider text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer common-transition">
                      {item.label}
                    </li>
                  </a>
                ) : (
                  <li
                    key={item.label}
                    onClick={() => scrollToSection(item.link)}
                    className="tracking-wider text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer common-transition"
                  >
                    {item.label}
                  </li>
                )
              )}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setShowDrawer(!showDrawer)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              className="text-slate-800 dark:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                {showDrawer ? (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {showDrawer && (
          <motion.div
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[300] bg-white/95 dark:bg-[#131217]/97 backdrop-blur-xl"
          >
            <div className="w-full h-full flex flex-col justify-center px-10">
              <ul className="flex flex-col gap-7">
                {navigationData.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="w-fit"
                  >
                    {item.isOuterLink ? (
                      <a
                        href={item.link}
                        download
                        onClick={() => setShowDrawer(false)}
                        className="text-3xl font-semibold text-slate-800/60 dark:text-white/60 hover:text-cyan-600 dark:hover:text-cyan-400 common-transition"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.link)}
                        className="text-3xl font-semibold text-slate-800/60 dark:text-white/60 hover:text-cyan-600 dark:hover:text-cyan-400 common-transition"
                      >
                        {item.label}
                      </button>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="absolute bottom-10 left-10 flex gap-5">
                {socialIconList.map((icon, i) => (
                  <motion.a
                    key={i}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    className="text-2xl text-slate-600 dark:text-white/50 hover:text-cyan-600 dark:hover:text-cyan-400 common-transition"
                  >
                    {icon.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
