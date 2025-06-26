"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

function Loader({ onFinish }) {
  const { progress, loaded, total } = useProgress();
  const [showStartButton, setShowStartButton] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (loaded === total && total > 0) {
      const timeout = setTimeout(() => {
        setShowStartButton(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [loaded, total]);

  const handleStart = () => {
    setFadeOut(true);
    setTimeout(() => {
      onFinish();
    }, 800); // match fade out duration
  };

  const circumference = 2 * Math.PI * 45;

  return (
    <div
      className={`fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-black text-white space-y-10 z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >

      <div className="text-center leading-snug space-y-1 transition-all duration-700">
        <div className="text-3xl tracking-wide">Creating an amazing</div>
        <div className="text-5xl text-neutral-500 italic">experience</div>
      </div>

      <div className="relative w-32 h-32 transition-all duration-700">
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
            style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-light tracking-wider">
          {Math.floor(progress)}%
        </div>
      </div>

      {/* Smooth fade-in button */}
      <div
        className={`absolute bottom-50 transition-all duration-700 ease-in-out ${
          showStartButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={handleStart}
          className="mt-6 px-20 py-2 border border-white text-white text-sm font-bold progress-button-light cursor-pointer"
        >
          Start Experience
        </button>
      </div>
    </div>
  );
}

export default Loader;
