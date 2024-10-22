import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function MainTimeline() {
  const skillsFullTime = [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Redux Toolkit",
    "Material UI",
    "Framer Motion",
  ];
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "TailwindCss",
    "ESTful APIs",
    "Axois",
    "Github",
    "Responsive Design",
  ];
  const data = [
    {
      title: "Dec 2023 - Aug 2024",
      content: (
        <div className="flex flex-col gap-3">
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            exit={{ y: 20 }}
          >
            <h1 className="text-xl font-medium text-indigo-200">
              React.js Developer - SearchingYard Group
            </h1>
            <p className="text-slate-300 text-xs md:text-sm font-normal">
              {`With a deep expertise in ReactJS, NextJS, and TypeScript, I
            specialize in crafting intuitive and high-performing frontend
            applications. My journey spans across diverse sectors such as HRMS
            platforms, CRM Platform and ERP Web Application.
            where I’ve optimized user experience, collaborated on backend
            integration, and ensured code quality while leading teams and
            streamlining workflows.`}
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-3">
            {skillsFullTime.map((curSkill, i) => (
              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                exit={{ scale: 0 }}
                key={curSkill}
                className="px-2 md:px-3 bg-cyan-700 py-1 rounded-3xl text-white text-xs md:text-[12px]"
              >
                {curSkill}
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "May 2023 - Nov 2023",
      content: (
        <div className="flex flex-col gap-5">
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            exit={{ y: 20 }}
          >
            <h1 className="text-xl font-medium text-indigo-200">
              Frontend Developer - SearchingYard Group
            </h1>
            <p className="text-slate-300 text-xs md:text-sm font-normal">
              Contributed significantly to the development and enhancement of
              web applications across diverse projects, including an inventory
              app, university CMS, and e-commerce platforms. Leveraged strong
              proficiency in HTML5, CSS3, React, JavaScript, playing a key role
              in improving functionality and performance during my internship.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-3">
            {skills.map((curSkill, i) => (
              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                exit={{ scale: 0 }}
                key={curSkill}
                className="px-2 md:px-3 bg-cyan-700 py-1 rounded-3xl text-white text-xs md:text-[12px]"
              >
                {curSkill}
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full top-spacing">
      <Timeline data={data} />
    </div>
  );
}
