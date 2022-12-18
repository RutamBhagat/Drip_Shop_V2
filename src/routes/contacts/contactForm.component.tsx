import React from "react";
import "./contact.styles.css";

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/xjvzqyjw"
      method="POST"
      className="w-full px-6 py-8 md:flex  md:flex-col md:justify-between lg:w-1/2"
      id="contact_us"
    >
      <div className="custom-font py-5">
        <h1 className="text-3xl text-gray-700">
          To see the world, things dangerous to come to, to see behind walls,
          draw closer, to find each other, and to feel. That is the purpose of
          life.
        </h1>
        <h1 className="text-end text-xl text-gray-700 pt-3">
          - The Secret Life Of Walter Mitty
        </h1>
      </div>
      <div>
        <div className="flex justify-start">
          <h2 className="text-3xl font-semibold text-indigo-800">
            Get In Touch
          </h2>
        </div>
        <input
          required
          name="Name"
          type="text"
          placeholder="Enter Your Name"
          className="my-2 h-8 w-full rounded-md border bg-gray-300 px-3 text-xs text-gray-600 outline-none focus:shadow-sm"
        />
        <br />
        <input
          required
          name="Email"
          type="email"
          placeholder="Enter Your Email"
          className="my-2 h-8 w-full rounded-md border bg-gray-300 px-3 text-xs text-gray-600 outline-none focus:shadow-sm"
        />
        <br />
        <input
          required
          name="Subject"
          type="text"
          placeholder="Subject"
          className="my-2 h-8 w-full rounded-md border bg-gray-300 px-3 text-xs text-gray-600 outline-none focus:shadow-sm"
        />
        <br />
        <textarea
          required
          name="Message"
          placeholder="Enter your Message here"
          className="my-2 h-20 w-full resize-none rounded-md border bg-gray-300 px-3 py-2 text-xs text-gray-600 outline-none focus:shadow-sm"
        ></textarea>
        <br />
        <button
          type="submit"
          value="Send"
          className="cursor-pointer rounded-md bg-indigo-700 px-4 py-2 text-xs text-white hover:shadow-md"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
