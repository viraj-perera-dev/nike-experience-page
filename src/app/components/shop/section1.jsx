"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";
import product from "../../assets/product.json";

function Section1() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("WHITE");
  const [liked, setLiked] = useState(false);

  const sizes = product.sizes;

  return (
    <section className="h-full lg:h-screen max-w-8xl container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen px-4 md:px-10 py-10 text-black">
      {/* Left: Image with Tabs */}
      <div className="relative w-full h-full flex flex-col justify-center">
        <div className="relative w-full  h-[74vh] rounded-3xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col justify-center px-5 md:w-4/5 xl:w-2/3 mx-auto mt-10 z-40">
        <small className="uppercase text-xs tracking-wide text-gray-400 mb-2">
          Info
        </small>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {product.name}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {product.description}{" "}
        </p>
        <button className="text-sm opacity-30 hover:opacity-60 transition ease-in-out duration-300 cursor-pointer uppercase text-start">
          + learn more
        </button>

        {/* Sizes */}
        <div className="my-6">
          <label className="block mb-2 text-sm font-medium">Size:</label>
          <div className="gap-2 grid grid-cols-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border border-neutral-400 px-4 py-2 rounded-full text-sm transition ${
                  selectedSize === size
                    ? "bg-neutral-400 text-white"
                    : "hover:bg-neutral-200 hover:text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Dropdown */}
        <div className="mb-6 relative w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Color:
          </label>
          <div className="relative">
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="appearance-none bg-white border border-gray-300 px-6 py-3 pr-10 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all cursor-pointer w-full"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>

            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* CTA Heart Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="bg-black text-white px-6 rounded-full w-full flex items-center gap-3 hover:opacity-80 transition cursor-pointer"
        >
          <span className="text-sm uppercase flex items-center gap-4">
            <FaHeart
              className={`text-sm ${liked ? "text-red-500" : "text-white"}`}
            />{" "}
            <hr className="w-[0.1rem] h-[3rem] bg-neutral-500"></hr>{" "}
          </span>
          <span className="text-sm uppercase mx-auto">
            {liked ? product.cta.liked : product.cta.default}
          </span>
        </button>
      </div>

    </section>
  );
}

export default Section1;
