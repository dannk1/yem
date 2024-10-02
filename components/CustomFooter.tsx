import React from "react"
import ContactForm from "./Contact-Form"
import SocialButtons from "./SocialMediaButtons"
import Contact from "./Contact"

export default function CustomFooter() {
  return (
    <footer className="bg-gray-200 w-full mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
          <div className="w-full lg:w-auto">
            <ContactForm />
          </div>
          <div className="w-full lg:w-auto">
            <Contact />
          </div>
          <div className="w-full lg:w-auto">
            <SocialButtons />
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-saaral text-sm">
            &copy; 2024 Young Engineers Mongolia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}