'use client';
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-white text-gray-800 px-4 py-2">
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

        <p className="mt-2 text-2xl text-semibold text-blue-900">
          GoBangla Group.
        </p>

        <p className="mt-2 text-md text-blue-900">
           2/1 Lalmatia, Dhaka-1207, Bangladesh.
        </p>

        
      </aside>

      <nav>
        <h6 className="mt-3 text-md text-black text-center">
           Copyright © 2026 • All Rights Reserved</h6>
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