"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import WhiteLogo from "/assets/logo-yellow transparent.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);

  const blogs = Array.from({ length: 9 }, (_, i) => `Blog${i + 1}`);

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
    <div className="pt-16">
      <nav className="fixed top-0 left-0 w-full bg-[#01093a] text-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src={WhiteLogo}
                  alt="Logo"
                  width={40}
                  height={40}
                  className="lg:w-[60px] lg:h-[60px]"
                />
                <h1 className="text-center font-bold text-[14px] lg:text-[18px]">
                  Young Engineers <br /> Mongolia
                </h1>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="hover:text-[#FEA13E] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/Projects"
                  className="hover:text-[#FEA13E] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>
                <div className="relative group">
                  <button onClick={toggleBlogs}>
                    <Link
                      href="/Blogs"
                      className="flex items-center hover:text-[#FEA13E] px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Blogs
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Link>
                  </button>
                  <div className="absolute left-0 bg-[#01093a] border border-[#FEA13E] mt-2 py-2 w-32 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul>
                      {blogs.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={`/Blogs/${item}`}
                            className="block px-4 py-2 text-white hover:bg-[#FEA13E] hover:text-[#01093a]"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href="/Academy"
                  className="hover:text-[#FEA13E] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Academy
                </Link>
                <Link
                  href="/Charity"
                  className="hover:text-[#FEA13E] px-3 py-2 rounded-md text-sm font-medium"
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
          <div className="lg:hidden fixed inset-0 z-50 bg-[#01093a] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex justify-between items-center mb-4">
                <Link
                  href="/"
                  className="flex items-center gap-1"
                  onClick={() => setIsOpen(false)}
                >
                  <Image src={WhiteLogo} alt="Logo" width={40} height={40} />
                  <h1 className="text-center font-bold text-[14px]">
                    Young Engineers <br /> Mongolia
                  </h1>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <X className="block h-6 w-6" />
                </button>
              </div>
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
                href="/Academy"
                className="hover:text-[#FEA13E] block px-3 py-3 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Academy
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
