import React from "react";

const ShoeHighlight: React.FC = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="relative">
        <img
          src="/Frame.png" // Replace with your image path
          alt="Nike Air Max Pulse"
          className="w-full object-cover"
        />

        
       
      </div>

      {/* Product Details */}
      <div className="bg-black text-white text-center py-10 px-6">
        <p className="uppercase text-sm font-bold text-gray-400">First Look</p>
        <h1 className="mt-2 text-4xl font-bold tracking-wide">
          NIKE AIR MAX PULSE
        </h1>
        <p className="mt-4 text-gray-400">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200">
            Notify Me
          </button>
          <button className="px-6 py-3 border border-white font-medium rounded-full hover:bg-gray-700">
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoeHighlight;
