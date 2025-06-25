"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import StartText from "./components/StartText";
import EndText from "./components/EndText";

export default function Herosection() {
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const videoRef = useRef(null);


  useEffect(() => {
    // Start video 
    const timer = setTimeout(() => {
      setVideoStarted(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Handle video ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setVideoEnded(true);
    };

    video.addEventListener("ended", handleEnded);

    return () => video.removeEventListener("ended", handleEnded);
  }, [videoStarted]);

  return (
    <div className="flex items-center justify-center md:h-screen h-svh w-screen bg-black overflow-hidden" id="intro">
      {/* Start Text */}
      <StartText />

      {/* Video */}
      <AnimatePresence>
        {videoStarted && !videoEnded && (
          <motion.video
            key="hero-video"
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full md:h-screen h-svh object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/intro_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}
      </AnimatePresence>

      {/* End Text */}
      {videoEnded && <EndText />}

    </div>
  );
}
