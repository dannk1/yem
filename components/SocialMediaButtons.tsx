import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function SocialButtons() {
  return (
    <div className="flex flex-col">
      <h5 className="text-saaral font-semibold text-base mb-5">FOLLOW US</h5>
      <div className="flex gap-2">
        <a
          href="https://www.facebook.com/profile.php?id=61555678745364&paipv=0&eav=AfaMFNEs_PkpEZN-lKewDnLII_IW85OCo0EiAOgQmbJs2ypmXOLpC-gIAhFno7ih5kg"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 rounded-lg border-gray-400 p-2 w-12 h-12 flex items-center justify-center hover:text-blue-600 hover:border-blue-600 transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com/young.engineers_org/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 rounded-lg border-gray-400 p-2 w-12 h-12 flex items-center justify-center hover:text-pink-500 hover:border-pink-500 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  )
}