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
    <div className="w-full bg-white shadow-md px-4 md:px-6 py-4 fixed top-0 left-0 z-50">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="w-[50px] md:w-[80px] h-auto"
            />
          </Link>

          <span className="text-lg md:text-2xl font-semibold text-blue-900">
            GoBangla Group
          </span>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-2xl text-blue-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menu Links */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center gap-3 md:gap-4 mt-4 md:mt-0 md:ml-auto text-lg font-medium`}
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

        <Link href="/Contact" className={navLink("/Contact")}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;