import React, { useState } from "react";
import emailjs from "@emailjs/browser";
//import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To handle success or error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configure EmailJS with your Service ID, Template ID, and Public Key
    emailjs
      .send(
        "service_719csfr",
        "template_0q2dffu",
        formData,
        "ySAGB80XNZkWtkIYo"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("SUCCESS");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("ERROR");
      });
  };

  return (
    <div className=" border-stone-900 py-10 px-5 lg:px-40">
      <h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-4xl font-bold mb-8 "
      >
        Get in Touch
      </h2>
      {status === "SUCCESS" && (
        <p className="text-center text-green-500 mb-4">
          Your message has been sent successfully!
        </p>
      )}
      {status === "ERROR" && (
        <p className="text-center text-red-500 mb-4">
          Oops! Something went wrong. Please try again.
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className=" rounded-lg shadow-lg p-8 max-w-lg mx-auto"
      >
        <div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-5 "
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-5 p-4 border-2 border-slate-400 border-stone rounded bg-transparent"
            required
          />
        </div>

        <div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-5"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-5 p-4 border-2 border-slate-400 border-stone rounded bg-transparent"
            required
          />
        </div>

        <div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-5"
        >
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="2"
            className="w-full mb-5 p-4 border-2 border-slate-400 border-stone rounded bg-transparent"
            required
          />
        </div>
        <div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            type="submit"
            className="w-1/3 mb-4 p-2 border-2 justify-center border-slate-400 text-black bg-white  text-2xl rounded  hover:bg-stone-800 hover:text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 "
          >
            Submit
          </button>
        </div>
      </form>

      <div className="flex justify-center space-x-4 mt-4 text-3xl text-white">
        <a
          href="https://www.linkedin.com/in/riya0704/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-3xl hover:text-stone-50 hover:scale-110 transition-all duration-300 hover:text-4xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:riyagoyal.rg07@gmail.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-stone-50 hover:scale-110 transition-all duration-300 hover:text-4xl"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/Riya-0704"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-stone-50 hover:scale-110 transition-all duration-300 hover:text-4xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/RiyaGoyal0704"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-stone-50 hover:scale-110 transition-all duration-300 hover:text-4xl"
        >
          <FaTwitter />
        </a>
      </div>

      <div>
        <p className="text-center text-sm mt-4  w-full text-white font-bold">
          &copy; {new Date().getFullYear()} Riya. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
