"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";


export default function Section4() {

  const isMobile = useMediaQuery({ minWidth: 640, maxWidth: 767 });     // sm and below
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // md to lg
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 }); // lg
  const isXL = useMediaQuery({ minWidth: 1280 });         // xl and above

  let leftImageTarget, rightImageTarget, bottomImageTarget;

  if (isMobile) {
    leftImageTarget = { y: 430, x: "-10%", rotate: 10 };
    rightImageTarget = { y: 360, x: "0%", rotate: -10 };
    bottomImageTarget = { y: 100, x: "-5%", rotate: 12 };
  } else if (isTablet) {
    leftImageTarget = { y: 450, x: "-50%", rotate: 20 };
    rightImageTarget = { y: 350, x: "-50%", rotate: -8 };
    bottomImageTarget = { y: 80, x: "40%", rotate: 12 };
  } else if (isDesktop) {
    leftImageTarget = { y: -100, x: "-60%", rotate: -8 };
    rightImageTarget = { y: 0, x: "50%", rotate: 8 };
    bottomImageTarget = { y: 180, x: "0%", rotate: 20 };
  } else if (isXL) {
    leftImageTarget = { y: -150, x: "-28%", rotate: -8 };
    rightImageTarget = { y: 0, x: "50%", rotate: 8 };
    bottomImageTarget = { y: 200, x: "0%", rotate: 25 };
  }else{
    leftImageTarget = { y: 430, x: "-10%", rotate: 10 };
    rightImageTarget = { y: 360, x: "0%", rotate: -10 };
    bottomImageTarget = { y: 100, x: "-5%", rotate: 12 };
  }
  


  return (
    <section
      className="relative bg-white py-20 px-6 md:px-10 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%),
          conic-gradient(
            from 900deg at 50% 110%,
            rgba(255, 255, 255, 0) 0%,
            #fbc2eb 15%,
            #fcd3a0 30%,
            #b8a9f2 45%,
            #d0f4de 60%,
            #a0e9fd 75%,
            rgba(255, 255, 255, 0) 100%
          )
        `,
        backgroundBlendMode: "screen",
      }}
    >
      <div className="md:h-[70vh] h-[80vh] container mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center justify-between relative z-10">
        <p className="absolute top-0 left-0 text-sm tracking-widest text-gray-600 mb-2">
          <span className="text-[0.5rem] text-black mr-2">{"■"}</span>03 / Outro
        </p>
        <div className="container mx-auto relative flex flex-col items-center justify-center text-center max-w-2xl z-10 mt-20 lg:mt-0">
          <h2 className="text-4xl md:text-6xl leading-tight text-black font-semibold">
            Pay homage to{" "}
            <em className="italic font-normal">the revolution.</em>
          </h2>

          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Unique venue.
            </h3>
            <p className="text-sm md:text-base text-black opacity-80">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>

        {/* Floating Images */}
        <motion.div
          initial={{ y: 50, opacity: 1, rotate: -45, x: "100%" }}
          whileInView={{ opacity: 1, ...leftImageTarget }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 2, 
            ease: [0.37,0.36,0.17,-0.3],
            delay: 0.2,
            type: "spring", 
          }}
          className="absolute w-[200px] sm:w-[400px] z-50"
        >
          <Image
            src="/images/slider/img1.avif"
            alt="Top Left Shoe"
            width={300}
            height={300}
            className="rounded-xl shadow-xl w-full"
          />
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 1, rotate: -45, x: "-80%" }}
          whileInView={{ opacity: 1, ...rightImageTarget }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 1.5, 
            ease: [1,0.59,0.51,0.88],
            delay: 0.4,
            type: "spring", 
          }}
          className="absolute top-[20%] right-[0%] w-[200px] sm:w-[400px] z-50"
        >
          <Image
            src="/images/slider/img2.avif"
            alt="Top Right Shoe"
            width={240}
            height={240}
            className="rounded-xl shadow-xl w-full"
          />
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 1, rotate: -75, x: "-50%" }}
          whileInView={{ opacity: 1, ...bottomImageTarget }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 1, 
            type: "spring", 
            ease: [0.67,0.09,0.29,0.56],
            delay: 0.6 }}
          className="absolute bottom-[-30px] left-[50%] w-[200px] sm:w-[400px] z-50"
        >
          <Image
            src="/images/slider/img3.avif"
            alt="Bottom Shoe"
            width={260}
            height={260}
            className="rounded-xl shadow-xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
