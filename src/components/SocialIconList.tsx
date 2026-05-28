import { socialIconList } from "@/locals";
import { motion } from "framer-motion";

const SocialIconList = () => {
  return (
    <div className="hidden md:flex items-center flex-col gap-5">
      {socialIconList.map((icon, i) => (
        <motion.a
          key={i}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          viewport={{ once: true }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          className="text-slate-500 dark:text-slate-400 text-xl common-transition hover:-translate-y-0.5 hover:text-cyan-600 dark:hover:text-cyan-400"
          aria-label={`Social link ${i + 1}`}
        >
          {icon.icon}
        </motion.a>
      ))}
      <motion.div
        viewport={{ once: true }}
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "6rem", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-px bg-slate-400 dark:bg-slate-500"
      />
    </div>
  );
};

export default SocialIconList;
