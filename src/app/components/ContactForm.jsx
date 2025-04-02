import React from "react";

const ContactForm = () => {
  return (
    <form action="">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-300 placeholder-gray-400 bg-white border-0 rounded shadow "
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-300 placeholder-gray-400 bg-white border-0 rounded shadow "
        />
      </div>{" "}
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-gray-200 border-0 rounded shadow "
        />
        <button className="px-6 mb-5 mt-5 py-3 text-sm font-bold text-white uppercase transition-all rounded duration-150 ease-linear bg-blue-500 hover:bg-blue-400 hover:scale-125% ">
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
