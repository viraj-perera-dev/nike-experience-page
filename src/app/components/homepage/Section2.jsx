// Section1.tsx
import React from "react";

function Section2() {
  return (
    <>
      <section className="relative py-20 px-6 md:px-10 overflow-visible"
      style={{
        background: "url('/images/bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="md:h-[70vh] h-[60vh] container mx-auto px-4 flex flex-col lg:flex-row lg:justify-center lg:items-center items-start justify-end relative z-10">
          {/* Text Block */}
          <div className="max-w-xl gap-10 flex flex-col text-neutral-800">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              <em className="italic font-normal">Sneakers</em> go with everything. I can incorporate Nike sneakers
              <em className="italic font-normal">into all my looks</em>.<br />
            </h2>
            <p className="text-sm"><span className="text-[0.5rem] text-black mr-2">{"■"}</span> ROBIN FABIAN ZANIER</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
