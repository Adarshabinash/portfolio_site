import React from "react";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp)" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white "
      >
        <div className="absolute bottom-16 w-[90%] mx-auto left-0 right-0 sm:mx-0 sm:ml-8 md:ml-16 lg:left-20 sm:w-[70%] md:w-[40%] lg:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
