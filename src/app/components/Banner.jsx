"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="section5-wrapper py-10 overflow-hidden bg-white">
      <motion.div
        className="whitespace-nowrap flex gap-2"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-semibold text-neutral-400"
          >
            Max | Premium . 01 /
          </span>
        ))}
      </motion.div>
    </div>
  );
}
