'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutPage from "../about/page";

const Navbar: React.FC = () => {
  return (
    <div className="w-full navbar bg-white shadow-md px-6 py-4 fixed top-0 left-0 z-50 flex items-center gap-3">
      
      <Link href="/">
      <Image 
        src="/Logo.jpg" 
        alt="Logo"
        width={80}
        height={80}
      />
      </Link>

      <span className="text-2xl font-semibold text-blue-900">
        GoBangla Group
      </span>
      
    </div>
  );
};

export default Navbar;