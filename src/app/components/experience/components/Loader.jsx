"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Loader({ setShowLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setShowLoading(true);
    let animationFrameId;

    const animate = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [setShowLoading]);

  // Effect to hide loader once progress reaches 100
  useEffect(() => {
    if (progress === 100) {
      // Delay a tick to avoid state update during render
      const timeout = setTimeout(() => setShowLoading(false), 0);
      return () => clearTimeout(timeout);
    }
  }, [progress, setShowLoading]);

  const circumference = 2 * Math.PI * 45; // 2πr with r=45

  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-[110vh] bg-black text-white space-y-10 z-50">
      {/* Nike logo */}
      <Image
        src="/images/logo.svg"
        alt="Nike Logo"
        width={50}
        height={50}
        className={`transition duration-500 cursor-pointer`}
      />

      {/* Tagline */}
      <div className="text-center leading-snug">
        <div className="italic text-lg">EVERYTHING</div>
        <div className="text-xl">to the</div>
        <div className="italic text-lg">MAX</div>
      </div>

      {/* Circular progress bar */}
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="5"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
          {progress}%
        </div>
      </div>
    </div>
  );
}

export default Loader;
