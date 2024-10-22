import AboutMe from "@/components/AboutMe";
import BackgroundCircles from "@/components/BackgroundCircles";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import SocialIconList from "@/components/SocialIconList";
import PublicLayout from "@/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {/* Hii Landing Page */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          >
            <Loader />
          </motion.div>
        ) : (
          <PublicLayout title="Vikash Kumhar | React.js Developer">
            <div className="w-full relative">
              <div className="fixed z-[200] right-1 md:right-8 bottom-2">
                <SocialIconList />
              </div>
              <div className="h-[100vh] flex flex-col bg-[#131217] justify-center text-center overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                  <BackgroundCircles />
                </div>
                <div className="z-10">
                  <HeroSection />
                </div>
              </div>
              <div className="relative lg:px-40 top-spacing bottom-spacing">
                <div className="absolute inset-0 bg-[url('/black_bg.jpg')] bg-no-repeat bg-cover opacity-15"></div>
                <div className="relative z-10">
                  <AboutMe />
                </div>
              </div>
              <div className="md:px-20 lg:px-40 bottom-spacing">
                <ContactSection />
              </div>
            </div>
          </PublicLayout>
        )}
      </AnimatePresence>
    </div>
  );
}
