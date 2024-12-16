import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold mb-2">Find A Store</h4>
          <h4 className="font-semibold">Become A Member</h4>
          <h4 className="font-semibold">Sign Up For Email</h4>
          <h4 className="font-semibold">Send Us Feedback</h4>
          <h4 className="font-semibold">Student Discounts</h4>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold mb-2">Get Help</h4>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>Returns</p>
          <p>Payment Options</p>
          <p>Contact Us On Nike.com Inquiries</p>
          <p>Contact Us On All Other Inquiries</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold mb-2">About Nike</h4>
          <p>News</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Sustainability</p>
        </div>

        {/* Empty Space (For Larger Layouts) */}
        <div></div>

        {/* Social Media */}
        <div className="flex space-x-4 items-start">
          <FaTwitter className="text-white hover:text-gray-400 cursor-pointer" size={20} />
          <FaFacebookF className="text-white hover:text-gray-400 cursor-pointer" size={20} />
          <FaYoutube className="text-white hover:text-gray-400 cursor-pointer" size={20} />
          <FaInstagram className="text-white hover:text-gray-400 cursor-pointer" size={20} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-2">
            <span className="text-sm">&copy; 2023 Nike, Inc. All Rights Reserved</span>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center justify-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-400">
              Guides
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Terms of Sale
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Terms of Use
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Nike Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
