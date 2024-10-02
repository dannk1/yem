"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rii5rwg",
        "template_c2av3kw",
        formData,
        "VcV60dG40jUbvlqdC"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send the message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <h5 className="text-saaral font-semibold text-base mb-5">GET IN TOUCH</h5>
      <div className="space-y-6 font-roboto text-black">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-14">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full placeholder:text-saaral placeholder:font-mono font-mono border-0 border-b border-gray-400 rounded-none px-0 py-2 focus:ring-0 focus:border-black"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full placeholder:text-saaral placeholder:font-mono font-mono border-0 border-b border-gray-400 rounded-none px-0 py-2 focus:ring-0 focus:border-black"
          />
        </div>
        <Textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full placeholder:text-saaral placeholder:font-mono font-mono border-0 border-b border-gray-400 rounded-none px-0 py-2 focus:ring-0 focus:border-black min-h-[100px] resize-none"
        />
        <Button
          type="submit"
          className="w-24 border-saaral hover:bg-black text-white font-normal"
        >
          SEND
        </Button>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </form>
  );
}
