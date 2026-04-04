'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navLink = (path: string) =>
    `px-3 py-2 rounded-md transition ${
      pathname === path
        ? "bg-orange-400 text-white"   // ACTIVE STATE
        : "text-blue-900 hover:bg-orange-300 hover:text-blue-900"
    }`;

  return (
    <div className="w-full navbar bg-white shadow-md px-6 py-4 fixed top-0 left-0 z-50 flex items-center gap-3">
      
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={80} height={80} />
      </Link>

      <span className="text-2xl font-semibold text-blue-900">
        GoBangla Group
      </span>

      <div className="ml-auto flex items-center gap-4 text-lg font-medium">
        
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