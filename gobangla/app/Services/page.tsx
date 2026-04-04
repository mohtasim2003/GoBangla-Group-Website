// import { Link } from "lucide-react";
'use client';
import Link from "next/link";
import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Image from "next/image";
export default function ServicePage() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>

      
            {/* HERO */}
      <section className="bg-[#FFA500] py-3">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-base-content py-3">
             <span className="bg-gradient-to-r from-[#02022b] to-[#080859] bg-clip-text text-transparent">GoBangla Group</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-base-content/70 text-black text-semibold">
            IT Solutions | Tour & Travels | Edtech
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl text-base-content font-bold mb-6 text-black">
              Our Services
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-6 text-black">
              <span className="font-semibold text-base-content">  GoBangla Group </span>{" "}
              is your all-in-one platform for learning, innovation, and travel. From skill development at GoBangla Academy to smart business solutions, seamless travel services, and flexible online learning—we help you move forward with confidence.
            </p>
            
          </div>
        </div>
      </section>











      
      <Footer></Footer>
      
    </main>
  );
}