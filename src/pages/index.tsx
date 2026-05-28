import AboutMe from "@/components/AboutMe";
import BackgroundCircles from "@/components/BackgroundCircles";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Loader from "@/components/Loader";
import ProjectSlider from "@/components/ProjectSlider";
import SocialIconList from "@/components/SocialIconList";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import PublicLayout from "@/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <SmoothCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#131217]"
          >
            <Loader />
          </motion.div>
        ) : (
          <PublicLayout
            title="Vikash Kumhar | React.js & Frontend Developer"
            description="Frontend developer specialising in React.js, Next.js, and TypeScript. Building fast, accessible, and visually stunning web experiences."
          >
            <div className="w-full relative">
              {/* Fixed social icons */}
              <div className="fixed z-[200] right-1 md:right-8 bottom-2">
                <SocialIconList />
              </div>

              {/* ── Hero ──────────────────────────── */}
              <section className="h-screen flex flex-col bg-gray-50 dark:bg-[#131217] justify-center text-center overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                  <BackgroundCircles />
                </div>
                <div className="z-10">
                  <HeroSection />
                </div>
              </section>

              {/* ── About ─────────────────────────── */}
              <section className="relative lg:px-40 top-spacing bottom-spacing bg-white dark:bg-[#131217]">
                <div className="absolute inset-0 bg-[url('/black_bg.jpg')] bg-no-repeat bg-cover opacity-[0.06] dark:opacity-[0.15] pointer-events-none" />
                <div className="relative z-10">
                  <AboutMe />
                </div>
              </section>

              {/* ── Projects ──────────────────────── */}
              <section className="bg-slate-50 dark:bg-[#0f0e14] top-spacing bottom-spacing lg:px-20">
                <ProjectSlider />
              </section>

              {/* ── Interactive Terminal ───────────── */}
              <section className="bg-white dark:bg-[#131217] top-spacing bottom-spacing">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="flex flex-col gap-10 px-4 md:px-10 lg:px-40"
                >
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-400 dark:text-gray-500">
                      {`<Terminal />`}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                      An interactive terminal — explore my profile like a developer would.
                    </p>
                  </div>
                  <InteractiveTerminal />
                </motion.div>
              </section>

              {/* ── Contact ───────────────────────── */}
              <section className="bg-slate-50 dark:bg-[#0f0e14] md:px-20 lg:px-40 bottom-spacing">
                <ContactSection />
              </section>
            </div>
          </PublicLayout>
        )}
      </AnimatePresence>
    </div>
  );
}
