import React from "react";

const FeaturedSection: React.FC = () => {
  return (
    <div className="relative h-[500px]">
      {/* Image Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Frame5.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-end items-center h-full text-center text-white px-4 pb-10">
        <h2 className="text-3xl font-bold mb-2">STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-lg mb-6">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
