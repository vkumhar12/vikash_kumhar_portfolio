import { motion } from "framer-motion";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Vikash Kumhar!",
      "ReactJS Developer.tsx",
      "<Frontend_Developer />",
      "I design & build WebApps",
      "I craft dynamic UIs",
    ],
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 90,
    deleteSpeed: 50,
  });

  const name = "Vikash Kumhar";

  return (
    <div className="text-start lg:pl-40 flex flex-col gap-4">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-slate-700 dark:text-white text-lg font-semibold px-10 tracking-wide"
      >
        🚀 Hello World, I&apos;m
      </motion.span>

      <span className="text-cyan-600 dark:text-cyan-500 font-[Inter] px-10 text-3xl md:text-4xl lg:text-5xl font-bold">
        {name.split("").map((char, i) => (
          <motion.span
            key={i}
            viewport={{ once: true }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="tracking-wider inline-block"
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </span>

      <div className="flex flex-col gap-5 px-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold h-16 md:h-20 font-[Inter]">
          <span className="text-slate-800 dark:text-slate-200">
            {text}
            <Cursor cursorColor="#0891b2" cursorStyle="|" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-slate-600 dark:text-slate-300 tracking-wider text-sm md:text-base font-normal lg:w-3/4 leading-relaxed"
        >
          I&apos;m a Frontend developer who transforms ideas into engaging web
          experiences. I create sleek, intuitive designs that simplify complexity
          and elevate user interaction. Every line of code is an adventure in
          innovation!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/Vikash_Kumhar_Front-end.pdf" className="w-fit" download>
            <button className="px-6 py-4 border border-slate-400 dark:border-slate-300 common-transition bg-transparent hover:bg-cyan-600 dark:hover:bg-cyan-500 text-slate-800 dark:text-slate-200 hover:text-white hover:border-cyan-600 dark:hover:border-cyan-500 font-mono text-sm tracking-wider">
              {`<Export Resume />`}
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
