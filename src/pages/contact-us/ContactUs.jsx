import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="bg-body">
      <Header />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </section>
  );
};

export default ContactUs;
