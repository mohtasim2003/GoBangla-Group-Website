'use client';
import Link from "next/link";
import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Image from "next/image";


export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>

      
        {/* HERO */}
        <section
        className="relative bg-base-100 py-20  bg-center"
        style={{ backgroundImage: "url('/contactBG.jpg')" }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-center text-center min-h-[100px]">
            <div className="text-white">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-yellow-400">
                GoBangla Group
            </h1>

            <p className="mb-5">
                Get in touch
            </p>
            </div>
        </div>
        </section>

        <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-5xl text-base-content font-bold mb-6 text-black">
              Contact Us
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-6 text-black">
              For inquiries, support, or partnership opportunities, please contact us at:
              <br />
              <span className="font-semibold text-base-content">Email:</span> contact@gobangla.com <br></br>
              <span className="font-semibold text-base-content">Phone:</span> +880 1841779908-10 <br></br>
              <span className="font-semibold text-base-content">Address:</span> 2/1 Lalmatia, Dhaka-1207, Bangladesh.

            </p>
          </div>

          {/* Form */}
<div className="bg-[#bebbc4] p-8 rounded-lg shadow-lg">
  <form>
    
    {/* Name */}
    <div className="mb-4">
      <label htmlFor="name" className="block text-black font-semibold mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter Your Name"
        className="w-full py-3 px-4 rounded-lg bg-white text-black 
        border border-gray-300 placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Phone */}
    <div className="mb-4">
      <label htmlFor="phone" className="block text-black font-semibold mb-2">
        Phone
      </label>
      <input
        type="text"
        id="phone"
        placeholder="Enter Your Phone Number"
        className="w-full py-3 px-4 rounded-lg bg-white text-black 
        border border-gray-300 placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Email */}
    <div className="mb-4">
      <label htmlFor="email" className="block text-black font-semibold mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter Your Email"
        className="w-full py-3 px-4 rounded-lg bg-white text-black 
        border border-gray-300 placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Message */}
    <div className="mb-4">
      <label htmlFor="message" className="block text-black font-semibold mb-2">
        Message
      </label>
      <textarea
        id="message"
        rows={4}
        placeholder="Your Message"
        className="w-full py-3 px-4 rounded-lg bg-white text-black 
        border border-gray-300 placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      ></textarea>
    </div>

    {/* Button */}
<div className="mt-6 flex justify-center">
  <div className="bg-blue-400 p-2 rounded-xl shadow-md">
    <button
      type="submit"
      className="btn btn-primary text-black font-bold py-3 px-8 rounded-lg 
      hover:bg-blue-600 transition duration-300"
    >
      Send Message
    </button>
  </div>
</div>

  </form>
</div>
        </div>
        </section>

      <Footer></Footer>
    </main>
    );
}