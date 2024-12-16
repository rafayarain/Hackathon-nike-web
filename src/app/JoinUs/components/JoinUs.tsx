"use client"; // This tells Next.js that this is a client-side component

import { useRef, useEffect, useState } from "react";

const SignUp = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure component runs only on the client
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      dateOfBirth: formData.get("dateOfBirth"),
      country: formData.get("country"),
      gender: formData.get("gender"),
      subscribe: formData.get("subscribe") === "on",
    };

    console.log("Form Data Submitted:", data);
    alert("Form Submitted Successfully!");
  };

  if (!isClient) return null; // Avoid rendering on the server side

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        ref={formRef}
        className="bg-white p-6 shadow-lg rounded-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-8 mx-auto mb-2"
          />
          <h1 className="text-2xl font-bold">BECOME A NIKE MEMBER</h1>
          <p className="text-gray-600 text-sm mt-2">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <select
            name="country"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            defaultValue="India"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>

          <div className="flex gap-4">
            <label className="flex-1 text-center py-2 border rounded-md cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="hidden"
              />
              Male
            </label>
            <label className="flex-1 text-center py-2 border rounded-md cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="hidden"
              />
              Female
            </label>
          </div>

          <label className="flex items-center space-x-2 text-gray-600">
            <input
              type="checkbox"
              name="subscribe"
              className="h-4 w-4"
            />
            <span>
              Sign up for emails to get updates on Nike products, offers, and
              benefits
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            JOIN US
          </button>
        </div>

        <p className="text-center text-sm mt-4">
          Already a Member?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
        <p className="text-xs text-gray-500 text-center mt-2">
          By creating an account, you agree to Nike's{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Use
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default SignUp;
