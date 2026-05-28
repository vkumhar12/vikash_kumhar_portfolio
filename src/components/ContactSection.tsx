import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div
      className="px-4 md:px-10 py-10 md:py-16 flex flex-col gap-8 md:gap-14 w-full"
      id="contact"
    >
      <h2 className="md:text-5xl text-3xl lg:text-5xl font-bold text-gray-400 dark:text-gray-500">
        {`<Contact />`}
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-11 gap-8 md:gap-6 items-start">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
