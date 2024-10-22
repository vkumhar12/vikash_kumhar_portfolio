import { motion } from "framer-motion";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Vikash Kumhar!",
      "ReactJSDeveloper.tsx",
      "<Frontend_Developer />",
      "I design and develop WebApps",
      "I create dynamic UI",
    ],
    loop: true,
    delaySpeed: 1500,
    typeSpeed: 100,
  });
  return (
    <div className=" text-start lg:pl-40 flex flex-col gap-3">
      <span className="text-white text-xl font-semibold px-10 ">
        {`🚀 Hello World , I 'm`}
      </span>
      <span className="text-cyan-600 font-[Inter] px-10 text-3xl md:text-4xl lg:text-5xl font-semibold">
        {"Vikash Kumhar"?.split("")?.map((data, i) => (
          <motion.span
            viewport={{ once: true }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: i * 0.07 }}
            exit={{ scale: 0, opacity: 0 }}
            key={i}
            className="tracking-wider"
          >
            {data}
          </motion.span>
        ))}
      </span>
      <div
        className="flex flex-col gap-5 px-10
"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold h-20 font-[Inter]">
          <span className="text-slate-200 transition ease-out duration-200  ">
            {text}
            <Cursor cursorColor="#00BCD4" cursorStyle="|" />
          </span>
        </h1>
        <p className="text-slate-300 tracking-wider text-sm md:text-base font-normal lg:w-3/4">
          {`I'm a Frontend developer who transforms ideas into engaging web
          experiences. I create sleek, intuitive designs that simplify
          complexity and elevate user interaction. Every line of code is an
          adventure in innovation!`}
        </p>
        <Link href="Vikash_Kumhar_Front-end.pdf" className="w-fit">
          <button className="px-6 py-5 border border-slate-300 common-transition bg-transparent hover:bg-cyan-500 text-slate-200 hover:text-white">
            {`<Export Resume />`}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
