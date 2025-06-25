"use client";

import React, { useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = ["INTRO", "CAROUSEL", "EXPERIENCE"];

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("INTRO");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isNotHome = pathname !== "/";

  const triggerRef = useRef(null);
  const isInView = useInView(triggerRef, {
    margin: "-11% 0px -80% 0px",
  });

  const isInViewMobile = useInView(triggerRef, {
    margin: "-28% 0px -60% 0px",
  });

  return (
    <>
      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        className={`md:hidden z-50 transition-all duration-500 ease-in-out w-[21rem] fixed bottom-6 left-1/2 transform -translate-x-1/2`}
      >
        <div className="flex items-center justify-between bg-white rounded-full px-4 py-3 text-sm font-medium" style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
          {/* Menu Link */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Nike Logo */}
          <Image
            onClick={() => window.location.href = '/#intro'}
            src="/images/logo.svg"
            alt="Nike Logo"
            width={40}
            height={40}
            className="invert object-contain cursor-pointer"
          />

          {/* Shop Button */}
          <Link href="/shop" className="text-white font-bold bg-black px-4 py-2 rounded-full text-xs">
            SHOP
          </Link>
        </div>
      </motion.nav>

      {/* Slide-Up Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay background with fade animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"
              onClick={() => setIsMenuOpen(false)} // click outside to close
            />

            {/* Slide-up menu */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed bottom-0 left-0 w-full h-[70vh] bg-white z-[100] rounded-t-3xl p-6 flex flex-col items-start justify-start"
            >
              <hr className="w-26 h-[0.3rem] bg-neutral-200 rounded-full border-0 mx-auto" />
              {/* Close Button */}
              <div className="absolute bottom-6 left-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white bg-black p-4 rounded-full"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="mt-20 space-y-4">
                {navItems.map((item) => (
                  <Link
                    href={item === "EXPERIENCE" ? "/experience" : `/#${item.toLowerCase()}`}
                    key={item}
                    onClick={() => {
                      setActiveTab(item);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-5xl text-start font-semibold py-2 ${
                      activeTab === item ? "text-black" : "text-neutral-400"
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navbar (unchanged) */}
      <div className="hidden md:block fixed top-10 left-10 z-50">
        <Image
          onClick={() => window.location.href = '/#intro'}
          src="/images/logo.svg"
          alt="Nike Logo"
          width={50}
          height={50}
          className={`${!isInView || isNotHome ? "invert" : ""} transition duration-500 cursor-pointer`}
        />
      </div>

      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        className={`hidden md:flex z-50 transition-all duration-500 ease-in-out ${
          !isInView
            ? "fixed top-4 left-1/2 transform -translate-x-1/2"
            : "absolute bottom-6 left-1/2 transform -translate-x-1/2"
        }`}
      >
        <div className="flex items-center bg-white rounded-full p-2 border-neutral-200 w-[29rem] text-sm font-medium" 
        style={{ boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
          {navItems.map((item) => (
            <Link
              href={item === "EXPERIENCE" ? "/experience" : `/#${item.toLowerCase()}`}
              key={item}
              onClick={() => setActiveTab(item)}
              className={`px-4 py-2 rounded-full transition-colors hover:bg-neutral-50 duration-300 ${
                activeTab === item
                  ? "bg-neutral-200 text-black font-bold"
                  : "text-neutral-500 font-semibold"
              }`}
            >
              <span className="text-[0.5rem]">{activeTab === item && "■"}</span>{" "}
              {item}
            </Link>
          ))}

          <Link href="/shop" className="ml-2 font-bold bg-black text-white px-4 py-2 rounded-full border transition progress-button-light">
            SHOP NOW
          </Link>
        </div>
      </motion.nav>

      {/* Invisible trigger to sticky navbar */}
      <div ref={triggerRef} className="absolute h-screen w-full z-0" />
    </>
  );
}
