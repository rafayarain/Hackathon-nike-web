"use client";

import Link from "next/link";
import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Keep Signed In:", keepSignedIn);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/nikelogo.png" // Image
            alt="Nike Logo"
            className="h-8"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-lg font-bold mb-6">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Keep Me Signed In & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={() => setKeepSignedIn(!keepSignedIn)}
                className="h-4 w-4"
              />
              <span>Keep me signed in</span>
            </label>
            <a href="#" className="hover:underline">
              Forgotten your password?
            </a>
          </div>

          {/* Terms Agreement */}
          <p className="text-xs text-gray-600 text-center mt-4">
            By logging in, you agree to Nike's{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            SIGN IN
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Not a Member?{" "}
          <Link href="/JoinUs" className="underline font-semibold">
            Join Us
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignIn;
