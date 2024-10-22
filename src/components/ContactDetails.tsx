import { motion } from "framer-motion";

const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 md:col-span-6">
      <div className="font-bold text-3xl md:text-4xl flex flex-col gap-0 md:gap-2  tracking-wider text-milk">
        <p className="">
          {`Let’s Create `.split("").map((curStr, i) => (
            <motion.span
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-white"
              key={i}
            >
              {curStr}
            </motion.span>
          ))}
        </p>
        <p className="">
          {`a Solution`.split("").map((curStr, i) => (
            <motion.span
              viewport={{ once: true }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.07 + 0.7 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-white"
              key={i}
            >
              {curStr}
            </motion.span>
          ))}
        </p>
        <motion.p
          viewport={{ once: true }}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          exit={{ y: 20 }}
          className="text-cyan-600"
        >{`Together!`}</motion.p>
      </div>

      <div className="text-slate-300 md:text-lg ">
        <p className="leading-6 md:leading-7">
          Drop me a message or reach out using the contacts below. Got an idea
          or project? Let’s bring it to life together!
        </p>
      </div>

      <a
        href="mailto:vikashkumhar@gmail.com"
        target="_blank"
        className="text-indigo-300 tracking-wide hover:tracking-widest w-fit common-transition"
      >
        vikashkumhar13@gmail.com
      </a>
    </div>
  );
};
export default ContactDetails;
