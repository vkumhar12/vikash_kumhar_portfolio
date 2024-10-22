import { motion } from "framer-motion";
import { MainTimeline } from "./MainTimeline";
import SkillSlider from "./SkillSlider";

/* eslint-disable @next/next/no-img-element */
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-10 px-10" id="about">
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        exit={{ y: 40, opacity: 0 }}
      >
        <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold text-gray-500">{`<About_Me />`}</h1>
      </motion.div>
      <div className="w-full flex md:flex-row flex-col gap-8 md:items-center ">
        <div className="lg:w-1/2 w-full flex flex-col gap-20 text-slate-300  pt-10 ">
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            exit={{ y: 40, opacity: 0 }}
          >
            <div className="flex flex-col gap-5 ">
              <p>
                {`Hey there! I'm Vikash Kumhar, a passionate React.js and Frontend
          Developer from India, on an exciting journey of crafting sleek and
          intuitive web experiences since 2021. I love transforming ideas into
          visually stunning, interactive websites that not only look great but
          work seamlessly. My focus is always on building user-friendly,
          accessible interfaces that deliver smooth interactions for everyone.`}
              </p>
              <p>
                {`From diving into challenging projects to experimenting with new
          technologies, I'm constantly pushing myself to create something
          better. Whether it's fine-tuning a design or solving complex problems,
          I’m always up for the challenge.`}
                {/* <p>Check out some of the awesome
          projects I’ve worked on below!</p> */}
              </p>
            </div>
          </motion.div>
          <div className="overflow-hidden">
            <SkillSlider />
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            exit={{ x: 40, opacity: 0 }}
          >
            <img src="/skills.png" alt="skills" />
          </motion.div>
        </div>
      </div>
      <div className="">
        <MainTimeline />
      </div>
      {/* <div className="h-screen"></div> */}
    </div>
  );
};

export default AboutMe;
