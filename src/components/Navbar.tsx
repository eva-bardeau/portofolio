"use client";

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="px-[5.5%] mx-auto h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-lg sm:text-xl md:text-2xl font-bold">
          EB
        </Link>

        {/* Navigation Links - Always Visible */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
          <Link 
            href="/work" 
            className="text-white text-sm sm:text-base md:text-base hover:text-gray-300 transition-colors"
          >
            WORK
          </Link>
          <Link 
            href="/about" 
            className="text-white text-sm sm:text-base md:text-base hover:text-gray-300 transition-colors"
          >
            ABOUT
          </Link>
          <Link 
            href="/contact" 
            className="text-white text-sm sm:text-base md:text-base hover:text-gray-300 transition-colors"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 