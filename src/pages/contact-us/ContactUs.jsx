import Header from "/src/components/Header/Header";
import Footer from "/src/components/Footer/Footer";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section>
      <Header />
      <ContactHeader />
      <ContactForm />
      <Footer />
    </section>
  );
};

export default ContactUs;
