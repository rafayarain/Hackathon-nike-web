"use client";

import React from "react";
import Link from "next/link";

const WomensFeatures = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 PLT.AF.ORM",
      description: "Women's Shoes with elevated design and soft cushioning.",
      price: "PKR 18,500",
      image: "/nikewoman1.png", //  image
    },
    {
      id: 2,
      name: "Nike Air Max 270",
      description: "Women's running shoes with max cushioning and iconic style.",
      price: "PKR 21,000",
      image: "nikewoman2.png", //image
    },
    {
      id: 3,
      name: "Nike Sportswear Fleece",
      description: "Women's cropped hoodie for comfort and warmth.",
      price: "PKR 10,500",
      image: "/nikewoman3.png", // image
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-black">Nike Women's Collection</h1>
        <p className="text-gray-500 mt-2">
          Discover the perfect blend of comfort, performance, and style.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Product Image */}
            <div className="w-full h-64 bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
              <div className="mt-4">
                <span className="text-lg font-bold text-gray-800">
                  {product.price}
                </span>
              </div>

              {/* Call-to-Action Button */}
              <Link href={`/product/${product.id}`}>
                <button className="w-full mt-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800 transition duration-200">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Nike. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default WomensFeatures;
