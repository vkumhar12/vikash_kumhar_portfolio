import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const inputClass =
  "p-3 w-full rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-sm";

const slideIn = (dir: "left" | "right") => ({
  initial: { x: dir === "left" ? -60 : 60, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.7 },
  viewport: { once: true },
});

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setSending(true);

    emailjs
      .sendForm("portfolio", "template_0xdiby9", form.current, "LJ2tmRAE4H8BfsKr4")
      .then(
        () => {
          toast.success("Thank you for reaching out! I'll get back to you soon 👋");
          form.current?.reset();
        },
        () => toast.error("Something went wrong. Please try again.")
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="w-full md:col-span-5 h-full">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <motion.input {...slideIn("left")} placeholder="Name" className={inputClass} type="text" name="name" required />
        <motion.input {...slideIn("right")} placeholder="Email" className={inputClass} type="email" name="email" required />
        <motion.input {...slideIn("left")} placeholder="Subject" className={inputClass} type="text" name="subject" required />
        <motion.textarea
          {...slideIn("right")}
          placeholder="Message"
          rows={4}
          className={inputClass}
          name="message"
          required
        />
        <motion.button
          {...slideIn("left")}
          type="submit"
          disabled={sending}
          className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed p-3 rounded-lg text-white font-semibold transition-colors duration-200 text-sm tracking-wide"
        >
          {sending ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
