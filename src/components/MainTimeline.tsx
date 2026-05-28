import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

const skillTag = "px-2 md:px-3 bg-cyan-700 dark:bg-cyan-800 py-1 rounded-full text-white text-xs md:text-[11px] font-mono";

export function MainTimeline() {
  const seniorSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux Toolkit",
    "Material UI",
    "Framer Motion",
  ];

  const internSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "REST APIs",
    "Axios",
    "GitHub",
    "Responsive Design",
  ];

  const data = [
    {
      title: "Dec 2023 – Aug 2024",
      content: (
        <div className="flex flex-col gap-4">
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-indigo-400 dark:text-indigo-300">
              React.js Developer
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mb-2">
              SearchingYard Group
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed">
              Specialised in crafting intuitive, high-performing frontend
              applications across HRMS, CRM, and ERP web platforms. Optimised
              user experience, collaborated on backend integration, ensured code
              quality, and streamlined team workflows.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-2 pt-1">
            {seniorSkills.map((skill, i) => (
              <motion.span
                key={skill}
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.07 }}
                className={skillTag}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "May 2023 – Nov 2023",
      content: (
        <div className="flex flex-col gap-4">
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-indigo-400 dark:text-indigo-300">
              Frontend Developer (Intern)
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-mono mb-2">
              SearchingYard Group
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed">
              Contributed to development and enhancement of web applications
              across an inventory app, university CMS, and e-commerce platforms.
              Played a key role in improving functionality and performance while
              building a strong frontend foundation.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-2 pt-1">
            {internSkills.map((skill, i) => (
              <motion.span
                key={skill}
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.07 }}
                className={skillTag}
              >
                {skill}
              </motion.span>
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
