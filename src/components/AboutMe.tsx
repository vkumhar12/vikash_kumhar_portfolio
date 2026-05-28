/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { MainTimeline } from "./MainTimeline";
import SkillSlider from "./SkillSlider";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
};

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-10 px-10" id="about">
      <motion.div
        viewport={{ once: true }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="md:text-5xl text-3xl lg:text-5xl font-bold text-gray-400 dark:text-gray-500">
          {`<About_Me />`}
        </h2>
      </motion.div>

      <div className="w-full flex md:flex-row flex-col gap-8 md:items-center">
        {/* Left: text + skills */}
        <div className="lg:w-1/2 w-full flex flex-col gap-16 text-slate-600 dark:text-slate-300 pt-6">
          <motion.div
            viewport={{ once: true }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-4 leading-relaxed text-sm md:text-base"
          >
            <p>
              Hey there! I&apos;m <strong className="text-cyan-600 dark:text-cyan-400">Vikash Kumhar</strong>, a passionate React.js and
              Frontend Developer from India, crafting sleek and intuitive web
              experiences since 2021. I love transforming ideas into visually
              stunning, interactive websites that not only look great but work
              seamlessly.
            </p>
            <p>
              My focus is always on building user-friendly, accessible interfaces
              that deliver smooth interactions for everyone. From diving into
              challenging projects to experimenting with new technologies, I&apos;m
              constantly pushing myself to create something better.
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <SkillSlider />
          </div>
        </div>

        {/* Right: illustration */}
        <div className="lg:w-1/2 w-full">
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <img
              src="/skills.png"
              alt="Vikash Kumhar's skill set illustration"
              className="w-full object-contain opacity-90 dark:opacity-80"
            />
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <MainTimeline />
      </div>
    </div>
  );
};

export default AboutMe;
