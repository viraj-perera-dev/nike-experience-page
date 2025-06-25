"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Card({ image, disabled }) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[350px] min-w-[350px] bg-slate-400 rounded-xl flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {showOverlay && disabled && (
        <div className="absolute inset-0 z-10 flex items-center justify-center group">
          <div className="absolute pointer-events-none h-full w-full bg-gradient-to-b from-black/0 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
          <Link href="/" className="absolute text-white text-sm font-bold h-[8rem] w-[8rem] text-center uppercase rounded-full border border-white flex items-center justify-center ease-in-out progress-button-light">
            <span>
              discover <br /> the <br /> shoes
            </span>
          </Link>
        </div>
      )}
      <Image src={image} alt={image} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
    </motion.div>
  );
}

export default Card;
