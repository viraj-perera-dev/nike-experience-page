"use client";

import Image from "next/image";
import React from "react";

function Section2() {


  return (
    <section className="h-full  max-w-8xl container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen px-6 md:px-10 py-20">
      <div className="h-auto container mx-auto  relative z-10">
        <p className="absolute top-0 left-0 text-sm tracking-widest text-gray-400 mb-2">
          <span className="text-[0.5rem] text-black mr-2">{"■"}</span>LOOK
        </p>
        <div className="mt-20 space-y-10">
          <h2 className="text-4xl md:text-5xl text-gray-800 ">
            <span className="italic">Enjoy</span> <span className="font-bold">the look.</span>
          </h2>
          <p className="text-gray-500 max-w-lg">
            With bold colors and retro-futuristic styling, step confidently into
            the spotlight wherever you go. Lorem ipsum dolor sit amet consectetur <b className="text-black">adipisicing elit.</b> Veritatis iure qui vero reiciendis, quisquam vel facilis consectetur possimus assumenda officia maxime, <b className="text-black">eligendi veniam.</b> Tempora, quidem? Eaque adipisci explicabo sit illo?
          </p>
          <div className="relative w-full h-full flex flex-col justify-center mt-20">
            <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden">
              <Image
                src="/images/slider/img2.avif"
                alt="Shoe back view"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
