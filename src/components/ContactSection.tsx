import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div
      className="lg:px-10 px-10 md:py-12 flex flex-col gap-6 md:gap-8 w-full relative"
      id="contact"
    >
      <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold text-gray-500">{`<Contact />`}</h1>
      <div className="w-full grid-cols-1 md:grid-cols-5 grid lg:grid-cols-11 gap-y-6 md:gap-6 items-center">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
