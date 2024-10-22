import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio",
        "template_0xdiby9",
        form.current,
        "LJ2tmRAE4H8BfsKr4"
      )
      .then(
        (result) => {
          form.current;
          toast.success(
            "Thank you for contacting me! I will get back to you soon 👋"
          );
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
  };

  const nameInputRef: any = useRef();
  const emailInputRef: any = useRef();
  const subjectInputRef: any = useRef();
  const messageInputRef: any = useRef();
  const focusInput = (inputRef: any) => {
    inputRef.current.focus();
  };

  return (
    <div className="w-full md:col-span-5 h-full ">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
        <motion.div
          initial={{
            x: -100,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className=""
        >
          <input
            placeholder="Name"
            className="p-2 w-full rounded"
            type="text"
            name="name"
            required
            ref={nameInputRef}
            onClick={() => focusInput(nameInputRef)}
          />
        </motion.div>
        <motion.div
          initial={{
            x: -100,
          }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className=""
        >
          <input
            placeholder="Email"
            className="p-2 w-full rounded "
            type="email"
            name="email"
            required
            ref={emailInputRef}
            onClick={() => focusInput(emailInputRef)}
          />
        </motion.div>
        <motion.input
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          placeholder="Subject"
          className="p-2 w-full rounded"
          type="text"
          name="subject"
          required
          ref={subjectInputRef}
          onClick={() => focusInput(subjectInputRef)}
        />
        <motion.textarea
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          placeholder="Message"
          rows={4}
          className="p-2 w-full rounded"
          name="message"
          required
          ref={messageInputRef}
          onClick={() => focusInput(messageInputRef)}
        />
        <motion.button
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-500 p-2 rounded text-black font-bold transition duration-200  ease-in-out"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
