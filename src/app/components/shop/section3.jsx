"use client";

import Image from "next/image";
import React from "react";

function Section3() {
  return (
    <section className="max-w-8xl container mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 md:px-10 py-0 md:py-20">
      <div className="container mx-auto  relative z-10">
        <p className="absolute top-0 left-0 text-sm tracking-widest text-gray-400 mb-2">
          <span className="text-[0.5rem] text-black mr-2">{"■"}</span>CLOSEUP
        </p>
        <div className="mt-20">
          <h2 className="text-4xl md:text-5xl text-gray-800 ">
            <span className="italic">Look</span>{" "}
            <span className="font-bold">at the details.</span>
          </h2>
          <p className="text-gray-500 max-w-lg mt-10">
            Premium stitching, futuristic cushioning, and a nod to the heritage
            of Air Max.
            <b className="text-black">adipisicing elit.</b> Veritatis iure qui
            vero reiciendis, quisquam vel facilis consectetur possimus assumenda
            officia maxime, <b className="text-black">eligendi veniam.</b>{" "}
            Tempora, quidem? Eaque adipisci explicabo sit illo?
          </p>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="aspect-square relative w-full">
              <Image
                src="/images/slider/img3.avif"
                alt="Detail 1"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="aspect-square relative w-full">
              <Image
                src="/images/slider/img1.avif"
                alt="Detail 2"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
