import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-3xl m-5">
      <div className="max-w-6xl xl:max-w-7xl mx-auto grid md:grid-cols-3 gap-10 py-12 px-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide">Newsletter<span className="text-white">.</span></h2>
          <p className="text-gray-400 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>

          <div className="flex flex-col space-y-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-zinc-800 text-white placeholder-gray-400 px-4 py-3 rounded-l-full w-full focus:outline-none"
              />
              <button className="bg-white text-black px-6 py-3 rounded-r-full font-semibold">
                SEND
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="privacy" className="accent-white w-4 h-4" />
              <label htmlFor="privacy" className="text-sm text-gray-400 cursor-pointer underline">
                Privacy Policy
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 tracking-wide">Shoez<span className="text-white">.</span></h2>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>01 / Nike Air Max 1 Premium</li>
            <li>02 / Nike Air Max TW SE</li>
            <li>03 / Nike Air Max TW SE</li>
            <li>04 / Nike Air Max Furyosa</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 tracking-wide">Follow us<span className="text-white">.</span></h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-md">
              <FaInstagram className="text-white" size={20} />
            </a>
            <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-md">
              <FaTwitter className="text-white" size={20} />
            </a>
            <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-md">
              <FaYoutube className="text-white" size={20} />
            </a>
          </div>
        </div>
        
      </div>
      <hr className="border-neutral-800" />
      <div className="py-6 px-8 max-w-6xl xl:max-w-7xl mx-auto flex justify-between text-xs text-neutral-100">
        <p>©2023</p>
        <p className="">CREDITS</p>
      </div>
    </footer>
  );
}
