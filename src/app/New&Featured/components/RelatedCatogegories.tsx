import React from "react";

const RelatedCategories: React.FC = () => {
  const categories = [
    "Best Selling Products",
    "Best Shoes",
    "New Basketball Shoes",
    "New Football Shoes",
    "New Men's Shoes",
    "New Running Shoes",
    "Best Men's Shoes",
    "New Jordan Shoes",
    "Best Women's Shoes",
    "Best Training & Gym",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Related Categories
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition duration-300 ease-in-out text-gray-800 font-medium"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedCategories;
