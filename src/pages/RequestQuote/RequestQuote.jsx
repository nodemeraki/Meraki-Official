import React from "react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import Hero from "/src/pages/RequestQuote/Hero/Hero";
import Form from "/src/pages/RequestQuote/Form/Form";

function RequestQuote() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Footer />
    </>
  );
}

export default RequestQuote;
