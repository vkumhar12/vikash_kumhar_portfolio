/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  year: string;
  accent: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Developer Portfolio",
    category: "Personal Project",
    description:
      "A modern, fully responsive portfolio with a custom smooth cursor, interactive particle background, animated terminal section, and buttery-smooth Framer Motion transitions. Optimised for SEO and performance.",
    image: "/vikash_portfolio.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    github: "https://github.com/vkumhar12",
    live: "#",
    year: "2024",
    accent: "from-cyan-500/30 to-blue-600/30",
  },
  {
    id: 2,
    title: "CRM Platform",
    category: "Professional",
    description:
      "A comprehensive CRM for managing leads, customer relationships, and the full sales pipeline. Features real-time dashboards, role-based access control, advanced analytics, and seamless API integrations.",
    image: "/ubone_art.png",
    tech: ["React", "Redux Toolkit", "TypeScript", "Material UI", "REST APIs"],
    github: "https://github.com/vkumhar12",
    live: "#",
    year: "2024",
    accent: "from-purple-500/30 to-pink-600/30",
  },
  {
    id: 3,
    title: "ERP Web Application",
    category: "Professional",
    description:
      "Enterprise-grade ERP system covering HR, inventory, finance, and operations modules. Handles complex multi-step workflows with interactive charts, real-time data, and dynamic report generation.",
    image: "/vikash_portfolio.png",
    tech: ["React", "Next.js", "TypeScript", "Redux", "Chart.js", "REST APIs"],
    github: "https://github.com/vkumhar12",
    live: "#",
    year: "2024",
    accent: "from-green-500/30 to-teal-600/30",
  },
  {
    id: 4,
    title: "HRMS Platform",
    category: "Professional",
    description:
      "A Human Resource Management System enabling employee onboarding, attendance tracking, leave management, and payroll processing. Built with a focus on accessibility and intuitive UX for non-technical users.",
    image: "/ubone_art.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "REST API", "Axios"],
    github: "https://github.com/vkumhar12",
    live: "#",
    year: "2023",
    accent: "from-orange-500/30 to-red-600/30",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Personal Project",
    description:
      "A full-featured e-commerce web app with product catalogue, shopping cart, secure checkout, order tracking, and an admin dashboard. Mobile-first, responsive, and optimised for conversion.",
    image: "/skills.png",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vkumhar12",
    live: "#",
    year: "2023",
    accent: "from-indigo-500/30 to-cyan-600/30",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

const ProjectSlider = () => {
  const [[active, dir], setPage] = useState([0, 0]);

  const paginate = (d: number) => {
    setPage(([prev]) => [(prev + d + projects.length) % projects.length, d]);
  };

  const goTo = (i: number) => setPage(([prev]) => [i, i > prev ? 1 : -1]);

  const p = projects[active];

  return (
    <section id="projects" className="w-full px-4 md:px-0">
      <div className="flex flex-col gap-10">
        {/* Section heading */}
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="px-4 md:px-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-400 dark:text-gray-500">
            {`<Projects />`}
          </h2>
        </motion.div>

        {/* Slider area */}
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-2 gap-8 items-center px-4 md:px-10"
            >
              {/* ── Image panel ── */}
              <div
                className={`relative rounded-2xl bg-gradient-to-br ${p.accent} p-[2px] shadow-lg`}
              >
                <div className="relative aspect-video rounded-[14px] overflow-hidden bg-gray-900 dark:bg-gray-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-black/50 backdrop-blur-sm text-cyan-400 border border-cyan-400/30">
                      {p.category}
                    </span>
                  </div>
                  {/* Year */}
                  <div className="absolute bottom-3 right-3 text-white/50 text-xs font-mono">
                    {p.year}
                  </div>
                </div>
              </div>

              {/* ── Info panel ── */}
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs font-mono text-cyan-500 tracking-[0.2em] uppercase mb-1">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {p.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-sm text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-sm text-white transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation bar */}
        <div className="flex items-center justify-between px-4 md:px-10">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Project ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2 bg-cyan-500"
                    : "w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-cyan-400 dark:hover:bg-cyan-400"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <motion.button
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-lg"
              aria-label="Previous project"
            >
              ←
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-lg"
              aria-label="Next project"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
