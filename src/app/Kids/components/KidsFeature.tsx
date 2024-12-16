"use client";

import React from "react";
import Link from "next/link";

const KidsFeatures = () => {
  const kidsProducts = [
    {
      id: 1,
      name: "Nike Air Max Kids",
      description: "Durable and lightweight shoes for everyday play.",
      price: "PKR 12,500",
      image: "/images/product14.png", // Replace with your uploaded image
    },
    {
      id: 2,
      name: "Nike Kids T-Shirt",
      description: "Soft and comfortable cotton T-shirt for all-day fun.",
      price: "PKR 3,500",
      image: "/nikeEss3.png", // Replace with your uploaded image
    },
    {
      id: 3,
      name: "Nike Kids Backpack",
      description: "Spacious backpack perfect for school and sports.",
      price: "PKR 4,800",
      image: "/kids backpack.png", // Replace with your uploaded image
    },
    {
      id: 4,
      name: "Nike Sportswear Tracksuit",
      description: "Cozy tracksuit for kids to stay active and warm.",
      price: "PKR 8,700",
      image: "/kids sportswear.png", // Replace with your uploaded image
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-blue-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-black">Nike Kids Collection</h1>
        <p className="text-gray-600 mt-2">
          Keep them moving in style and comfort, built for kids of all ages.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {kidsProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Product Image */}
            <div className="w-full h-56 bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              <div className="mt-3">
                <span className="text-md font-bold text-gray-800">
                  {product.price}
                </span>
              </div>

              {/* Call-to-Action Button */}
              <Link href={`/product/${product.id}`}>
                <button className="w-full mt-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 transition duration-200">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nike. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default KidsFeatures;
