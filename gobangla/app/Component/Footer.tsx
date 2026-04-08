'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#02022b] text-gray-800 px-4 py-6 items-start min-h-[220px]">
      
      {/* Left Section */}
      <aside className="flex flex-col justify-start h-full">
        <div className="relative w-full">
          
          {/* Top Right Text */}
          <p className="absolute top-0 right-20 text-2xl font-semibold text-white">
            Follow Us On
          </p>

          {/* Social Icons */}
          <div className="absolute top-8 right-4 flex gap-3">
            <Link href="">
              <Image src="/FbLogo1.png" alt="Facebook Logo" width={60} height={60} />
            </Link>

            <Link href="https://wa.me/+8801841779909">
              <Image src="/WhatsLogo.webp" alt="WhatsApp Logo" width={60} height={60} />
            </Link>

            <Link href="">
              <Image src="/InstagramLogo.png" alt="Instagram Logo" width={60} height={60} />
            </Link>

            <Link href="https://www.linkedin.com/in/gobangla64/">
              <Image src="/linkeLogo.webp" alt="LinkedIn Logo" width={80} height={80} />
            </Link>
          </div>

          {/* Left Content */}
          <p className="text-2xl font-semibold text-white">
            GoBangla Group
          </p>

          <p className="text-md text-white mt-2">
            2/1 Lalmatia, Dhaka-1207, Bangladesh
            <br />
            Phone:
            <Link href="tel:+8801841779908-10" className="text-blue-400 hover:underline">
              +880 1841779908-10
            </Link>
            <br />
            Email:
            <Link href="mailto:gobangla@gmail.com" className="text-blue-400 hover:underline">
              gobangla@gmail.com
            </Link>
          </p>
        </div>
      </aside>

      {/* Center Section */}
      <nav className="flex flex-col justify-start items-center text-center h-full">
        
        <h2 className="text-4xl font-bold text-yellow-400 mb-2">
          GoBangla Group
        </h2>

        <h6 className="text-md text-white">
          Empowering Skills and Digital Transformation Since-2016
        </h6>
      </nav>

      {/* Right Section */}
      <nav className="flex flex-col justify-between h-full">
        
        {/* Top Icons */}
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg width={24} height={24} viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883..." />
            </svg>
          </a>

          <a>
            <svg width={24} height={24} viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604..." />
            </svg>
          </a>

          <a>
            <svg width={24} height={24} viewBox="0 0 24 24" className="fill-current">
              <path d="M9 8h-3v4h3..." />
            </svg>
          </a>
        </div>

        {/* Bottom Copyright */}
        <h6 className="text-md text-white text-center">
          Copyright © 2026 • All Rights Reserved
          <br />
          Developed by GoBangla Solutions
        </h6>
      </nav>
    </footer>
  );
};

export default Footer;