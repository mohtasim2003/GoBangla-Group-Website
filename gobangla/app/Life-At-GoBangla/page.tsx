'use client';

import React from "react";
import Link from "next/link";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Image from "next/image";
import LifeSlider from "../Component/LifeSlider";

const LifeAtGoBanglaPage: React.FC = () => {
  return (
    <main className="bg-white pt-[100px]">
      <Navbar />

      {/* HERO */}
      <section
        className="relative bg-base-100 bg-center sm:bg-top bg-cover h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
        style={{ backgroundImage: "url('/People.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center text-center min-h-[100px]">
          <div className="text-white">
            <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl font-bold text-white">
              The People Behind GoBangla
            </h1>
          </div>
        </div>
      </section>

      {/* LIFE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 md:mb-8 text-blue-900">
          Life at GoBangla
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-10 text-center">
          At GoBangla, we believe great work comes from a positive and supportive environment. 
          Our team is at the core of everything we do, and we foster a culture of collaboration, 
          innovation, and continuous growth. We encourage open ideas, teamwork, and learning, 
          ensuring everyone has the opportunity to develop and succeed together.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-black">A Culture of Innovation</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We encourage creativity and fresh ideas. Whether it's developing cuttinge edge IT solutions, enhancing learning experiences in our academy, or delivering exceptional travel services  innovation drives us forward.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-black">Teamwork & Collaboration</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              At GoBangla, no one works alone. We believe in strong teamwork, open communication, and mutual respect. Every voice matters, and every idea has the power to make an impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-black">Growth & Learning</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We are committed to continuous learning. Our team members get opportunities to develop new skills, explore new technologies, and grow both professionally and personally.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-black">Diverse Opportunities</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              From IT solutions to education and travel services, GoBangla offers a dynamic work environment where you can explore multiple industries and expand your experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-black">Work with Purpose</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Everything we do has a purpose  to create value for our clients and make a positive impact. Being part of GoBangla means contributing to something meaningful.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-black">Work-Life Balance</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We understand the importance of balance. A positive work environment, supportive team, and engaging activities make GoBangla not just a workplace, but a place you enjoy being part of.
            </p>
          </div>

        </div>
      </section>

      {/* EVENTS */}
      <section
        className="py-16 md:py-24 bg-base-200 bg-cover bg-center sm:bg-top relative"
        style={{ backgroundImage: "url('/Backlife.webp')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-base-content font-bold mb-8 md:mb-12 text-blue-900">
            Events
          </h2>

          <LifeSlider />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LifeAtGoBanglaPage;