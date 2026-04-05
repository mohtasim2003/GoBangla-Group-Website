'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#02022b] text-gray-800 px-4 py-2 ">
      <aside>
        <svg
          width={50}
          height={50}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432...-4.829z" />
        </svg>
<div className="relative w-full">
  
  {/* Top Right Text */}
  <p className="absolute top-2 right-4 text-2xl font-semibold text-white">
    Follow Us On
  </p>

  {/* Social Icons (under text) */}
  <div className="absolute top-10 right-4 flex gap-3">
    <Link href="/">
      <Image
        src="/Fblogo.png"
        alt="Facebook Logo"
        width={40}
        height={40}
      />
    </Link>

    <Link href="https://wa.me/+8801841779909">
      <Image
        src="/WhatsLogo.webp"
        alt="WhatsApp Logo"
        width={40}
        height={40}
      />
    </Link>

    <Link href="/">
      <Image
        src="/InstagramLogo.png"
        alt="Instagram Logo"
        width={40}
        height={40}
      />
    </Link>

    <Link href="/">
      <Image
        src="/Linkedinlogo.avif"
        alt="LinkedIn Logo"
        width={40}
        height={40}
      />
    </Link>


  </div>

  {/* Left Content */}
  <p className="mt-2 text-2xl font-semibold text-white">
    GoBangla Group
  </p>

  <p className="mt-2 text-md text-white">
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

      <nav>
        <h6 className="mt-3 text-md text-white text-center">
           Copyright © 2026 •  All Rights Reserved</h6>
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
      </nav>
    </footer>
  );
};

export default Footer;