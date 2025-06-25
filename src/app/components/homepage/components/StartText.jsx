import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function StartText() {
  const [showText, setShowText] = useState(true);
  const [showGlitch, setShowGlitch] = useState(false);
  const controls = useAnimation();

  // Glitch wiggle variant (applies to the whole container)
  const glitchWiggle = {
    glitch: {
      x: [0, -4, 4, -4, 4, 0],
      skewX: [0, 5, -5, 5, -5, 0],
      y: [0, 1, -1, 0, 1, -1, 0],
      transition: {
        duration: 0.6,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  // Sequence control:
  useEffect(() => {
    async function sequence() {
      // Entrance animations: everything, to the, max
      await controls.start("enter");
      // Start glitch wiggle
      controls.start("glitch");
      setShowGlitch(true);
      // After 4 seconds glitching, fade out
      await new Promise((r) => setTimeout(r, 3000));
      await controls.start("exit");
      setShowText(false);
    }
    sequence();
  }, [controls]);

  // Variants for each text part entrance
  const textVariants = {
    enter: (direction) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    }),
    initial: (direction) => ({
      opacity: direction === "fade" ? 0 : 1,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    }),
  };
  

  return (
    <>
      <AnimatePresence>
        {showText && (
          <motion.div
            key="hero-text"
            variants={glitchWiggle}
            initial="glitch"
            animate="glitch"
            exit="exit"
            className="relative text-4xl md:text-7xl text-center px-4 select-none leading-[1.2]"
          >
            {/* Base white text with glitch overlays behind */}
            <h1 className="relative z-20">
              <motion.span
                custom="left"
                variants={textVariants}
                initial="initial"
                animate={controls}
                className="block text-white -ml-20 md:-ml-36 italic font-thin"
              >
                EVERYTHING
              </motion.span>
              <motion.span
                custom="fade"
                variants={textVariants}
                initial="initial"
                animate={controls}
                className="block text-gray-300 -ml-10 md:-ml-20"
              >
                to the
              </motion.span>
              <motion.span
                custom="right"
                variants={textVariants}
                initial="initial"
                animate={controls}
                className="block text-white -mr-20 md:-mr-36 italic font-thin"
              >
                MAX
              </motion.span>
            </h1>
            {showGlitch && (
              <>
                {/* Glitch overlays behind */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[150%] -ml-20 md:-ml-36 z-10"
                  style={{
                    clipPath: "inset(0 0 50% 0)",
                    pointerEvents: "none",
                  }}
                >
                  <motion.span
                    className="block text-red-400  italic font-thin"
                    animate={{
                      x: [0, -2, 2, -2, 2, 0],
                      skewX: [0, 3, -3, 3, -3, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    style={{
                      fontWeight: 300,
                      lineHeight: 1.2,
                    }}
                  >
                    EVERYTHING
                  </motion.span>
                  <motion.span
                    className="block md:ml-16 ml-10 text-red-400"
                    animate={{
                      x: [0, -2, 2, -2, 2, 0],
                      skewX: [0, 3, -3, 3, -3, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    to the <br />
                    MAX
                  </motion.span>
                </span>

                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[150%] -ml-20 md:-ml-36 h-full z-10"
                  style={{
                    clipPath: "inset(50% 0 0 0)",
                    pointerEvents: "none",
                  }}
                >
                  <motion.span
                    className="block text-blue-400 md:ml-16 ml-10"
                    animate={{
                      x: [0, 2, -2, 2, -2, 0],
                      skewX: [0, -3, 3, -3, 3, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0.1,
                    }}
                  >
                    EVERYTHING <br />
                    to the <br />
                  </motion.span>
                  <motion.span
                    className="block text-blue-400 ml-16 md:-mr-56 -mr-24 italic font-thin"
                    animate={{
                      x: [0, 2, -2, 2, -2, 0],
                      skewX: [0, -3, 3, -3, 3, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0.1,
                    }}
                  >
                    MAX
                  </motion.span>
                </span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default StartText;
