import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";
import Link from "next/link";
import Image from "next/image";
import ARbutton from "../ARbutton";
import ARUnsupportedPopup from "./components/ARUnsupportedPopup";
import Loader from "./components/Loader";

gsap.registerPlugin(ScrollTrigger);

function ModelCanvas() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [mobileScale, setMobileScale] = useState(false); // default for desktop
  const [show, setShow] = useState(false);
  const [showLoading, setShowLoading] = useState(true);


  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#no-ar-fallback") {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  
    checkHash(); // Check on mount
  
    window.addEventListener("hashchange", checkHash); // Listen for future changes
  
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobileScale(true); // smaller scale for mobile
      } else {
        setMobileScale(false); // default for desktop
      }
    };

    handleResize(); // set initial scale
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          // markers: true,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      })
      .to(sceneRef.current, {
        markers: true,
        x: "-25vw",
        y: "100vh",
        ease: "none",
      })
      .to(sceneRef.current, {
        markers: true,
        x: "25vw",
        y: "200vh",
        ease: "none",
      })
      .to(sceneRef.current, {
        markers: true,
        x: "-20vw",
        y: "300vh",
        ease: "none",
      })
      .to(sceneRef.current, {
        markers: true,
        x: "20vw",
        y: "400vh",
        ease: "none",
      });
  }, []);

  return (
    <main ref={mainRef} className="overflow-x-hidden bg-black">
      <ARUnsupportedPopup show={show} setShow={setShow} />
      {/* {showLoading && <Loader setShowLoading={setShowLoading} />} */}

      <Suspense 
      fallback={null}
      >

        <div className="fixed top-10 left-10 z-50">
          <Image
            onClick={() => (window.location.href = "/#intro")}
            src="/images/logo.svg"
            alt="Nike Logo"
            width={50}
            height={50}
            className={`transition duration-500 cursor-pointer`}
          />
        </div>
        <div className="fixed top-10 right-10 z-10">
          <ARbutton />
        </div>
        <section className="relative grid place-items-center h-[100vh]">
          <div className="absolute bottom-0 h-[50vh] flex flex-col justify-center items-start">
            <p className="text-white text-start md:text-8xl text-5xl font-bold">
              Nike Stealth
            </p>
            <p className="text-neutral-500 text-start md:text-6xl text-3xl font-bold">
              Rise, Run, Shine.
            </p>
          </div>
          <div
            ref={sceneRef}
            className="absolute h-[100vh] md:w-full w-[200vw]  text-white"
          >
            <Canvas>
              <Scene
                progress={progress}
                scale={mobileScale ? 15 : 20}
                x={mobileScale ? -0.3 : -0.5}
                y={-1}
                z={0}
              />
            </Canvas>
          </div>
        </section>

        <section className="relative flex justify-center items-center w-full md:w-4/5 xl:w-1/2 h-[100vh] ms-auto bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-t md:from-black/0 md:to-transparent">
          <div className="w-full px-5 md:px-0 md:w-2/3 z-50">
            <p className="text-start px-6 text-5xl md:text-6xl font-bold">
              <span className="uppercase text-white">Featherweight</span>
              <br />
              <span className="italic text-neutral-500 text-7xl">
                precision.
              </span>
              <br />
              <span className="text-2xl font-normal block mt-4 text-white">
                Designed from the top down for breathability, support, and
                seamless fit.
              </span>
            </p>
          </div>
        </section>

        <section className="relative flex justify-center items-center w-full md:w-4/5 xl:w-1/2 h-[100vh] me-auto bg-black/50 md:bg-black/0">
          <div className="w-full px-5 md:px-0 md:w-2/3 z-50">
            <p className="text-white text-start px-6 text-5xl md:text-6xl font-bold leading-tight">
              Engineered for{" "}
              <span className="text-neutral-500 italic text-7xl">motion.</span>
              <br />
              <span className="text-2xl font-normal block mt-4">
                The left profile reveals aerodynamic lines built for speed and
                agility.
              </span>
            </p>
          </div>
        </section>

        <section className="relative flex justify-center items-center w-full md:w-4/5 xl:w-1/2 h-[100vh] ms-auto bg-black/50 md:bg-black/0">
          <div className="w-full px-5 md:px-0 md:w-2/3 z-50">
            <p className="text-white text-start px-6 text-5xl md:text-6xl font-bold leading-tight">
              <span className="italic text-neutral-500 text-7xl">Every</span>{" "}
              step counts.
              <br />
              <span className="text-2xl font-normal block mt-4">
                Reinforced heel grip ensures stability and performance on any
                terrain.
              </span>
            </p>
          </div>
        </section>

        <section className="relative flex justify-center items-center w-full md:w-4/5 xl:w-1/2 h-[100vh] me-auto bg-gradient-to-b from-black/50 to-black md:bg-gradient-to-t md:from-black/0 md:to-transparent">
          <div className="w-full px-5 md:px-0 md:w-2/3 z-50 space-y-10">
            <p className="text-white text-start text-5xl md:text-6xl font-bold leading-tight">
              <span className="italic text-neutral-500 text-7xl">Style</span>{" "}
              meets innovation.
              <br />
              <span className="text-2xl font-normal block mt-2">
                Where bold design and technical excellence collide for serious
                runners.
              </span>
            </p>
            <div className="flex flex-col gap-4">
              <Link
                href="/shop"
                className="text-white border md:px-36 py-3 w-full text-center font-bold progress-button-light cursor-pointer "
              >
                Shop Now
              </Link>
              <Link
                href="/"
                className="text-white border md:px-36 py-3 w-full text-center font-bold progress-button-light cursor-pointer "
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </Suspense>

    </main>
  );
}

export default ModelCanvas;
