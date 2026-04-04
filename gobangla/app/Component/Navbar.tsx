'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutPage from "../about/page";

const Navbar: React.FC = () => {
  return (
    <div className="w-full navbar bg-white shadow-md px-6 py-4 fixed top-0 left-0 z-50 flex items-center gap-3 sticky top-0 z-50">
      
      <Link href="/">
      <Image
        src="/Logo.png" 
        alt="Logo"
        width={80}
        height={80}
      />
      </Link>

      <span className="text-2xl font-semibold text-blue-900 text-align-center">
        GoBangla Group
      </span>


      <div className="ml-auto flex items-center gap-4 text-lg font-medium text-blue-900">
  <Link href="/" className="px-3 py-2 rounded-md hover:bg-orange-300 hover:text-blue-900 transition">
    Home
  </Link>

  <Link href="/about" className="px-3 py-2 rounded-md hover:bg-orange-300 hover:text-blue-900 transition">
    About
  </Link>

  <Link href="/Services" className="px-3 py-2 rounded-md hover:bg-orange-300 hover:text-blue-900 transition">
    Services
  </Link>

  <Link href="/contact" className="px-3 py-2 rounded-md hover:bg-orange-300 hover:text-blue-900 transition">
    Contact
  </Link>
</div>
      
    </div>
  );
};

export default Navbar;