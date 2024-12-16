import Link from 'next/link'
import React from "react";


const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Left Side - Logos */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-black hover:opacity-80">
            {/* Replace with Jordan logo */}
            <span className="text-lg font-semibold">nike</span>
          </a>
          <a href="#" className="text-black hover:opacity-80">
            {/* Nike Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M22.54 6.42c-.41 1.35-1.68 3.45-4.09 5.68-3.03 2.71-6.88 5.24-12.6 7.69-.22.09-.45.13-.68.13-.62 0-1.21-.24-1.65-.68-.61-.6-.86-1.49-.66-2.34.2-.86.94-1.56 1.88-1.72 3.78-.64 7.31-2.03 10.67-4.17 2.73-1.72 4.56-3.5 5.49-5.32.31-.6.97-1.02 1.68-1.02.31 0 .6.08.87.22.88.47 1.29 1.5 1.09 2.53z" />
            </svg>
          </a>
        </div>

        {/* Center - Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
        
          <Link href="/New&Featured" 
              className="text-gray-700 hover:text-black">
                 New  & Featured
          </Link>
        
          <Link href="/Mans" className="text-gray-700 hover:text-black">
            Men
          </Link>
          <Link href="/Woman" className="text-gray-700 hover:text-black">
            Women
          </Link>
          <Link href="/Kids" className="text-gray-700 hover:text-black">
            Kids
          </Link>
          <Link href="/sales" className="text-gray-700 hover:text-black">
            Sale
          </Link>
          <Link href="/SNKRS" className="text-gray-700 hover:text-black">
            SNKRS
          </Link>
        </nav>

        {/* Right Side - Actions */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-black">
            Find a Store
          </a>
          <Link href="/ContactUs" className="text-gray-700 hover:text-black">
            Help
          </Link>
          <Link href="/JoinUs"  className="text-gray-700 hover:text-black">
            Join Us
          </Link>
          <Link  href="/LoginPage" className="text-gray-700 hover:text-black">
            Sign In
          </Link>
          <button className="h-8 w-8 flex items-center justify-center text-gray-700 hover:text-black">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.414-1.414l4.35 4.35z"
              />
            </svg>
          </button>
          <button className="h-8 w-8 flex items-center justify-center text-gray-700 hover:text-black">
            {/* Heart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32A7.5 7.5 0 015.5 12.5a7.5 7.5 0 0111-10.93 7.5 7.5 0 0111 10.93c0 5.25-7.5 9.25-9.5 10.5L12 21.35z"
              />
            </svg>
          </button>
          <button className="h-8 w-8 flex items-center justify-center text-gray-700 hover:text-black">
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2m0 0h13.6l1.45 7.5a1.5 1.5 0 01-1.45 1.75H7.4m-.4-9.25h13.6m-9.6 10.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
