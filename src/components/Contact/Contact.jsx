import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import contactAnimation from "../../assets/animations/contactanimation.json"
import Lottie from "lottie-react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          Swal.fire({
            icon: "success",
            title: "Email sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="my-24">
      <h2 className="text-xl sm:text-2xl md:text-4xl text-green-600 dark:shadow-white/10 font-bold text-center mb-8">
        Contact Information
      </h2>
      <div className="p-2 sm:p-4 md:p-8 rounded-lg flex items-center justify-between">
        {/* Contact Form */}
        <div className="space-y-6 w-full md:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-semibold  mb-4">
            Send a Message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="email" className="">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="w-full p-3 mt-2 input input-bordered dark:bg-[#1a242e] rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="email" className="">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                className="w-full p-3 mt-2 input input-bordered text-white dark:bg-[#1a242e] rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-3 mt-2 textarea textarea-bordered dark:bg-[#1a242e] rounded-lg"
                placeholder="Write your message here"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
            <Lottie className="w-96 hidden md:block" animationData={contactAnimation}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Contact;
