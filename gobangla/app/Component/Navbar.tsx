'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLink = (path: string) =>
    `px-3 py-2 rounded-md transition ${
      pathname === path
        ? "bg-orange-300 text-white"
        : "text-blue-900 hover:bg-orange-300 hover:text-blue-900"
    }`;

  return (
    <div className="w-full navbar bg-white shadow-md px-6 py-4 fixed top-0 left-0 z-50 flex flex-col md:flex-row md:items-center gap-3">
      
      {/* Top Row (Logo + Title + Hamburger) */}
      <div className="flex items-center justify-between w-full md:w-auto">
        
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/GroupLogo.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </Link>

          <span className="text-2xl font-semibold text-blue-900 text-align-center">
            GoBangla Group
          </span>
        </div>

        {/* Hamburger (ONLY MOBILE) */}
        <button
          className="md:hidden text-2xl text-blue-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`
          ${open ? "flex" : "hidden"} 
          flex-col w-full mt-3
          md:mt-0 md:flex md:flex-row md:w-auto md:ml-auto md:items-center
          gap-4 text-lg font-medium text-blue-900
        `}
      >
        <Link href="/" className={navLink("/")}>
          Home
        </Link>

        <Link href="/about" className={navLink("/about")}>
          About
        </Link>

          <Link href="/Services" className={navLink("/Services")}>
            Services
          </Link>

          <Link href="/Life-At-GoBangla" className={navLink("/Life-At-GoBangla")}>
            Life at GoBangla
          </Link>



        <Link href="/Contact" className={navLink("/Contact")}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;