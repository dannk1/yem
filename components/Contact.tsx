import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-saaral font-semibold text-base mb-5">CONTACT</h5>
      <div className="flex gap-3 items-center">
        <a
          href="tel:+97694669168"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 rounded-lg border-gray-400 p-2 w-12 h-12 flex items-center justify-center hover:text-green-500 hover:border-green-500 transition-colors duration-300"
        >
          <MdPhone size={24} />
        </a>
        <p className="text-saaral text-md">+976 9466 9168</p>
      </div>
      <div className="flex gap-3 items-center">
        <a
          href="mailto:example@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 rounded-lg border-gray-400 p-2 w-12 h-12 flex items-center justify-center hover:text-red-500 hover:border-red-500
           transition-colors duration-300"
        >
          <MdEmail size={24} />
        </a>
        <p className="text-saaral text-md">youngengineersmgl.org@gmail.com</p>
      </div>
    </div>
  );
}
