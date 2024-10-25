"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import YellowLogo from "@/public/assets/logo-yellow transparent.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleBlogs = () => setIsBlogsOpen(!isBlogsOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="">
      <nav className="fixed top-0 left-0 w-full bg-[#01093a] text-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src={YellowLogo}
                  alt="Logo"
                  className="w-[60px] h-auto md:w-[50px] sm:w-[40px] object-contain"
                />

                <h1 className="text-center font-bold text-[14px] lg:text-[18px]">
                  Young Engineers Mongolia
                </h1>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="hover:text-[#FEA13E] px-3 py-2 rounded-md text-md font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/Projects"
                  className="hover:text-[#FEA13E] px-3 py-2 rounded-md text-md font-medium"
                >
                  Projects
                </Link>
                <div className="relative group">
                  <button onClick={toggleBlogs}>
                    <Link
                      href="/Blogs"
                      className="flex items-center hover:text-[#FEA13E] px-3 py-2 rounded-md text-[16px] font-medium"
                    >
                      Blogs
                      {/* <ChevronDown className="h-4 w-4 ml-1" /> */}
                    </Link>
                  </button>
                  {/* <BlogsDropDownMenu></BlogsDropDownMenu> */}
                </div>
                {/* <Link
                  href="/Program"
                  className="hover:text-[#FEA13E] px-3 py-2 rounded-md text-md font-medium"
                >
                  Program
                </Link> */}
                <Link
                  href="/Charity"
                  className="hover:text-[#FEA13E] px-3 py-2 rounded-md text-md font-medium"
                >
                  Charity
                </Link>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden inset-0 z-50 bg-[#01093a]">
            <div className="px-4 pt-[3px] pb-3 space-y-1 sm:px-3">
              <div className="flex justify-between items-center mb-4"></div>
              <Link
                href="/"
                className="hover:text-[#FEA13E] block px-3 py-3 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/Projects"
                className="hover:text-[#FEA13E] block px-3 py-3 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/Blogs"
                className="hover:text-[#FEA13E] block px-3 py-3 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/Program"
                className="hover:text-[#FEA13E] block px-3 py-3 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Program
              </Link>
              <Link
                href="/Charity"
                className="hover:text-[#FEA13E] block px-3 py-3 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Charity
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
