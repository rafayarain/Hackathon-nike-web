import React from "react";

const EssentialsSection = () => {
  const categories = [
    {
      name: "Men's",
      image: "/nikeEss1.png", // Replace with the actual image path
    },
    {
      name: "Women's",
      image: "/nikeEss2.png", // Replace with the actual image path
    },
    {
      name: "Kids'",
      image: "/nikeEss3.png", // Replace with the actual image path
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-10">
          The Essentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group border border-gray-200 rounded-md overflow-hidden"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-4 left-4">
                <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full shadow-md hover:bg-gray-100">
                  {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialsSection;
