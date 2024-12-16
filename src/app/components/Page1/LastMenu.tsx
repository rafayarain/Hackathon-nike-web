// components/Footer.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <ul className="space-y-2">
            <li className="hover:text-white">Find a Store</li>
            <li className="hover:text-white">Become a Member</li>
            <li className="hover:text-white">Sign Up for Email</li>
            <li className="hover:text-white">Send Us Feedback</li>
            <li className="hover:text-white">Student Discounts</li>
          </ul>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="uppercase font-bold mb-2">Get Help</h4>
          <ul className="space-y-2">
            <li className="hover:text-white">Order Status</li>
            <li className="hover:text-white">Delivery</li>
            <li className="hover:text-white">Returns</li>
            <li className="hover:text-white">Payment Options</li>
            <li className="hover:text-white">Contact Us on Nike.com Inquiries</li>
            <li className="hover:text-white">Contact Us on All Other Inquiries</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="uppercase font-bold mb-2">About Nike</h4>
          <ul className="space-y-2">
            <li className="hover:text-white">News</li>
            <li className="hover:text-white">Careers</li>
            <li className="hover:text-white">Investors</li>
            <li className="hover:text-white">Sustainability</li>
          </ul>
        </div>
      </div>

      {/* Social Media and Bottom Links */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>

          {/* Country and Copyright */}
          <div className="mt-4 md:mt-0 text-center">
            <p>Pakistan © 2024 Nike, Inc. All Rights Reserved</p>
          </div>

          {/* Bottom Links */}
          <div className="mt-4 md:mt-0 flex space-x-4 text-center">
            <a href="#" className="hover:text-white">
              Guides
            </a>
            <a href="#" className="hover:text-white">
              Terms of Sale
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Nike Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
