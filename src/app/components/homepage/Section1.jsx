// Section1.tsx
import React from "react";
import Image from "next/image";

function Section1() {
  return (
    <>
      <section className="relative bg-white py-20 px-6 md:px-10 overflow-visible">
        <div className="md:h-[70vh] h-[60vh] container mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center justify-between relative z-10">
          <p className="absolute top-0 left-0 text-sm tracking-widest text-gray-400 mb-2">
            <span className="text-[0.5rem] text-black mr-2">{"■"}</span>01 / INTRO
          </p>
          {/* Text Block */}
          <div className="max-w-xl mt-20 lg:mt-0">
            <h1 className="text-4xl md:text-5xl text-neutral-800 leading-tight">
              Inizia una nuova
              <br />
              era di <em className="italic text-neutral-500 text-4xl md:text-5xl">Air Max</em>,<br />
              dove lo stile è sempre in{" "}
              <em className="italic text-neutral-500 text-4xl md:text-5xl">continua evoluzione</em>.
            </h1>
            <p className="text-sm mt-8 text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
              <strong className="font-semibold"> doloremque laudantium</strong>,
              totam rem aperiam...
            </p>
          </div>

          {/* Overlay Image */}
          <div className="relative mt-10 lg:mt-0 lg:absolute right-0 bottom-[-50px] lg:bottom-[-250px] xl:bottom-[-200px] z-0">
            <Image
              src="/images/img1.avif"
              alt="air force 1"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl rotate-2 object-cover w-[600px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
