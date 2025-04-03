import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import ContactHeader from "./ContactHeader.jsx";
import ContactForm from "./ContactForm.jsx";

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
