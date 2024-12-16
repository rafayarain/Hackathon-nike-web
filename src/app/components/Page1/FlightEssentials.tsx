import React from "react";

const FlightEssentials = () => {
  return (
    <section className="relative bg-black text-white">
      {/* Image Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center max-w-7xl mx-auto py-20 px-4">
  {/* Left Image */}
  <div className="relative h-96 md:h-[500px]">
    <img
      src="/nikeflightEss1.png" // image
      alt="Left Image"
      className="w-full h-full object-cover rounded-md"
    />
  </div>

  {/* Right Image */}
  <div className="relative h-96 md:h-[500px]">
    <img
      src="/nikeflightEss2.png" // image
      alt="Right Image"
      className="w-full h-full object-cover rounded-md"
    />
  </div>
</div>

      {/* Text Section */}
      <div className="text-center mt-10 px-4 pb-16">
        <h2 className="text-3xl md:text-5xl font-bold uppercase">
          Flight Essentials
        </h2>
        <p className="text-gray-400 mt-6 text-sm md:text-base">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <button
          className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200"
        >
          Shop
        </button>
      </div>
    </section>
  );
};

export default FlightEssentials;
