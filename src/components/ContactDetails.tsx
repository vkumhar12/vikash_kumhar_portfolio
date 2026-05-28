import { motion } from "framer-motion";

const ContactDetails = () => {
  const line1 = "Let's Create ";
  const line2 = "a Solution";

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 md:col-span-6">
      <div className="font-bold text-3xl md:text-4xl flex flex-col gap-1 tracking-wider">
        <p>
          {line1.split("").map((char, i) => (
            <motion.span
              key={i}
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-slate-800 dark:text-white inline-block"
            >
              {char}
            </motion.span>
          ))}
        </p>
        <p>
          {line2.split("").map((char, i) => (
            <motion.span
              key={i}
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 + 0.6 }}
              className="text-slate-800 dark:text-white inline-block"
            >
              {char}
            </motion.span>
          ))}
        </p>
        <motion.p
          viewport={{ once: true }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-cyan-600 dark:text-cyan-400"
        >
          Together!
        </motion.p>
      </div>

      <motion.p
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-slate-600 dark:text-slate-300 md:text-lg leading-7"
      >
        Drop me a message or reach out using the contacts below. Got an idea or
        project? Let&apos;s bring it to life together!
      </motion.p>

      <motion.a
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        href="mailto:vikashkumhar13@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-600 dark:text-indigo-300 tracking-wide hover:tracking-widest w-fit common-transition text-sm md:text-base"
      >
        vikashkumhar13@gmail.com
      </motion.a>
    </div>
  );
};

export default ContactDetails;
