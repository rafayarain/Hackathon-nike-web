"use client";

import React, { useState } from "react";
import Link from "next/link";

const SneakersFeatures = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const sneakers = [
    {
      id: 1,
      name: "Nike Air Force 1",
      description: "Classic design with a premium finish.",
      price: "PKR 18,500",
      image: "/images/product1.png", // image
      secondaryImage: "/images/sneaker-1-hover.jpg", // For hover effect
    },
    {
      id: 2,
      name: "Nike Air Max 97",
      description: "Iconic waves of style and comfort.",
      price: "PKR 25,000",
      image: "/images/product2.png",// image
      secondaryImage: "/images/sneaker-2-hover.jpg",
    },
    {
      id: 3,
      name: "Nike Dunk Low",
      description: "Skateboard-inspired style for everyday wear.",
      price: "PKR 15,800",
      image: "/images/product3.png",// image
      secondaryImage: "/images/sneaker-3-hover.jpg",
    },
    {
      id: 4,
      name: "Nike Jordan Retro 4",
      description: "A tribute to the legend of basketball.",
      price: "PKR 28,000",
      image: "/images/product4.png",// image
      secondaryImage: "/images/sneaker-4-hover.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 py-12 text-center text-white">
        <h1 className="text-4xl font-extrabold">Nike Sneakers Collection</h1>
        <p className="mt-2 text-gray-300">
          Step up your style with our most iconic sneakers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {sneakers.map((sneaker) => (
          <div
            key={sneaker.id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 relative group"
            onMouseEnter={() => setHoveredId(sneaker.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Sneaker Image with Hover Effect */}
            <div className="w-full h-60 bg-gray-100 overflow-hidden relative">
              <img
                src={
                  hoveredId === sneaker.id
                    ? sneaker.secondaryImage
                    : sneaker.image
                }
                alt={sneaker.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {sneaker.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{sneaker.description}</p>
              <div className="mt-2">
                <span className="text-md font-bold text-gray-900">
                  {sneaker.price}
                </span>
              </div>
            </div>

            {/* Quick View Button */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <Link href={`/product/${sneaker.id}`}>
                <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-300">
                  Quick View
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

export default SneakersFeatures;
