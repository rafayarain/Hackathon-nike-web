"use client";

import Link from "next/link";
import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      description: "Men's Short-Sleeve Running Top",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 3895,
      image: "/images/product8.png",  //image
    },
    {
      id: 2,
      name: "Nike Air Max 97 SE",
      description: "Men's Shoes",
      color: "Flat Pewter/Light Bone/Black/White",
      size: "8",
      quantity: 1,
      price: 16995,
      image: "/images/product9.png",  //image
    },
  ]);

  // Handler for updating size
  const handleSizeChange = (id: number, newSize: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, size: newSize } : item
      )
    );
  };

  // Handler for updating quantity
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-4 md:flex md:gap-8">
        {/* Left Section - Cart Items */}
        <div className="md:w-2/3 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-bold p-4 border-b">Bag</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-4 border-b"
            >
              {/* Image */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}  // Dynamically use the image path
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="text-gray-500 text-sm">{item.color}</p>
                <div className="flex gap-6 items-center mt-2">
                  {/* Size Dropdown */}
                  <div>
                    <label
                      htmlFor={`size-${item.id}`}
                      className="text-sm font-semibold"
                    >
                      Size:
                    </label>
                    <select
                      id={`size-${item.id}`}
                      value={item.size}
                      onChange={(e) =>
                        handleSizeChange(item.id, e.target.value)
                      }
                      className="ml-2 border border-gray-300 p-1 rounded"
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>

                  {/* Quantity Input */}
                  <div>
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className="text-sm font-semibold"
                    >
                      Quantity:
                    </label>
                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value) || 1
                        )
                      }
                      min="1"
                      className="ml-2 w-16 border border-gray-300 p-1 rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="font-bold">
                  MRP: Rs {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Summary */}
        <div className="md:w-1/3 mt-6 md:mt-0 bg-black text-white rounded-md p-6">
          <h3 className="text-2xl font-bold mb-4">Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <hr className="border-gray-600 my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>Rs {subtotal.toLocaleString()}</span>
          </div>
          <Link href="/CardPage">
            <button className="w-full bg-white text-black font-bold py-2 px-4 mt-6 rounded hover:bg-gray-200">
              Member Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
