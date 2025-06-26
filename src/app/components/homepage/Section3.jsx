"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./components/Card";

export default function Section3() {
  const radius = 1000;
  const visibleItems = 15;
  const angleStep = (2 * Math.PI) / visibleItems;
  const scrollStep = angleStep;

  const [angleOffset, setAngleOffset] = useState(0);

  const images = [
    "/images/slider/img1.avif",
    "/images/slider/img2.avif",
    "/images/slider/img3.avif",
    "/images/slider/img1.avif",
    "/images/slider/img2.avif",
    "/images/slider/img1.avif",
    "/images/slider/img2.avif",
    "/images/slider/img3.avif",
    "/images/slider/img1.avif",
    "/images/slider/img2.avif",
    "/images/slider/img1.avif",
    "/images/slider/img2.avif",
    "/images/slider/img3.avif",
    "/images/slider/img1.avif",
    "/images/slider/img2.avif",
  ];

  const handleScroll = (dir = "left" | "right") => {
    setAngleOffset((prev) =>
      dir === "left" ? prev - scrollStep : prev + scrollStep
    );
  };

  return (
    <section className="relative bg-white py-20 px-6 md:px-10 overflow-hidden" id="carousel">
      <div className="md:h-[100vh] h-[90vh] container mx-auto px-4 flex flex-col items-center justify-center relative z-0">
        <p className="absolute top-0 md:left-0 left-6 text-sm tracking-widest text-gray-400 mb-2">
          <span className="text-[0.5rem] te``xt-black mr-2">{"■"}</span>02 /
          CAROUSEL
        </p>
        {/* Header */}
        <div className="md:mt-20 mt-0 flex flex-col max-w-xl mx-auto md:gap-10 gap-5 h-full md:h-auto items-center justify-center">
          <h2 className="text-3xl md:text-6xl inline text-center">
            <span className="text-3xl md:text-6xl font-light italic">
              Style
            </span>
            <span className="text-3xl md:text-6xl font-semibold ml-2">
              has no limits.
            </span>
          </h2>
          <p className="md:mt-4 text-sm text-start text-gray-800 px-6">
            Accusantium{" "}
            <strong className="text-black">doloremque laudantium</strong>, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et{" "}
            <strong className="text-black">quasi architecto beatae</strong>{" "}
            vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Controls */}
          <div className="absolute -bottom-5 w-auto flex items-center justify-center z-50 gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="w-24 h-12 text-neutral-700 rounded-full border border-neutral-300 flex items-center justify-center hover:scale-105 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-24 h-12 text-neutral-700 rounded-full border border-neutral-300 flex items-center justify-center hover:scale-105 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Circle Items */}
          <div className="relative w-full h-full md:top-[62rem] top-[59rem]">
            {(() => {
              // First map to compute positions
              const positionedImages = images.map((src, i) => {
                const angle = angleOffset + i * angleStep;
                const x = Math.cos(angle - Math.PI / 2) * radius;
                const y = Math.sin(angle - Math.PI / 2) * radius;
                return { src, x, y, index: i };
              });

              // Find the image with the smallest Y (top of the circle)
              const topImage = positionedImages.reduce((top, curr) =>
                curr.y < top.y ? curr : top
              );

              // Render
              return positionedImages.map(({ src, x, y, index }) => {
                // const isTop = index === topImage.index;
                // const opacity = isTop ? 1 : 0.6;
                const isTop = index === topImage.index;
                const scale = isTop ? 1 : 0.9;

                const leftNeighbor = (topImage.index - 1 + images.length) % images.length;
                const rightNeighbor = (topImage.index + 1) % images.length;
                const isSide = index === leftNeighbor || index === rightNeighbor;
              
                const opacity = isTop ? 1 : isSide ? 0.6 : 0;
                const zIndex = isTop ? 50 : isSide ? 30 : 0;
              
                return (
                  <motion.div
                    key={index}
                    className={`absolute rounded-xl overflow-hidden shadow-lg transition-all duration-300`}
                    style={{
                      width: `${scale * 350}px`,
                      height: `${scale * 350}px`,
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      opacity,
                      zIndex,
                    }}
                    suppressHydrationWarning
                  >
                    <Card image={src} disabled={isTop}/>
                  </motion.div>
                );
              });
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
