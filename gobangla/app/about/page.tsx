'use client';
import Link from "next/link";
import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Image from "next/image";


export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>

      
            {/* HERO */}
      <section
        className="relative bg-base-100 py-20 bg-center bg-cover pt-20"
        style={{ backgroundImage: "url('/Sky.avif')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-center text-center min-h-[100px]">
          <div className="text-white">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-yellow-500">
              GoBangla Group
            </h1>
            <p className="mb-5 text-lg text-blue-900">
              IT Solutions | Tour & Travels | Edtech
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-4xl text-base-content font-bold mb-6 text-black">
              Who We Are
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-6 text-black text-lg">
              <span className="font-semibold text-base-content"> GoBangla</span>{" "}
               is a leading IT/ITES firm in Bangladesh, delivering innovative, cost-effective
              technology solutions and human capital development since 2016. By following global best practices
              and embracing cutting-edge technologies, we drive professionalism, innovation, and future-ready
              ICT solutions.
            </p>
            
          </div>

          {/* Stats / Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card bg-base-200 p-6 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-accent text-black">50,000+</h3>
              <p className="mt-2 text-sm text-base-content/70 text-black">
                Learners Trained
              </p>
            </div>
            <div className="card bg-base-200 p-6 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-accent text-black">30%</h3>
              <p className="mt-2 text-sm text-base-content/70 text-black">
                Average Discounts
              </p>
            </div>
            <div className="card bg-base-200 p-6 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-accent text-black">24/7</h3>
              <p className="mt-2 text-sm text-base-content/70 text-black">
                Customer Support
              </p>
            </div>
            <div className="card bg-base-200 p-6 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-accent text-black">100%</h3>
              <p className="mt-2 text-sm text-base-content/70 text-black">
                Strong contribution to workforce development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
  className="py-24 bg-base-200 bg-cover bg-center relative"
  style={{ backgroundImage: "url('/Sky.avif')" }}
>
  {/* Optional overlay for better text readability */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl text-base-content font-bold mb-12 text-white">
      Why Choose GoBangla?
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      <div className="card bg-white/90 p-8 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-black">
          Client-Focused Service
        </h3>
        <p className="text-black/70">
          GoBangla prioritizes client satisfaction with dedicated support, timely delivery, and customized solutions tailored to each business.
        </p>
      </div>

      <div className="card bg-white/90 p-8 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-black">
          Multi-Sector Expertise
        </h3>
        <p className="text-black/70">
          From e-commerce to e-learning and corporate services, GoBangla Group works across multiple industries making it a one-stop solution for diverse business needs.
        </p>
      </div>

      <div className="card bg-white/90 p-8 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-black">
          Trusted & Reliable Service
        </h3>
        <p className="text-black/70">
          GoBangla Group is committed to delivering consistent and dependable solutions, ensuring client satisfaction and long-term trust.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-base-content font-bold mb-12 text-black">
            Our Proud Membership
          </h2>
          </div>
  <div className="max-w-4xl mx-auto px-6 flex justify-center items-center gap-8">
    
    <Image
      src="/BassisLogo.png"
      alt="Basis Logo"
      width={150}
      height={150}
    />

    <Image
      src="/Ecablogo.png"
      alt="Ecab Logo"
      width={150}
      height={150}
    />
     <Image
      src="/ContracLogo.jpg"
      alt="Contrac Logo"
      width={100}
      height={100}
    />
     <Image
      src="/BwcciLogo.png"
      alt="Bwcci Logo"
      width={100}
      height={100}
    />
    <Image
      src="/BaccoLogo.jpg"
      alt="Bacco Logo"
      width={150}
      height={150}
    />

     <Image
      src="/Caab.jfif"
      alt="Bacco Logo"
      width={150}
      height={150}
    />
    <Image
      src="/MocabLogo.webp"
      alt="Bacco Logo"
      width={150}
      height={150}
    />


  </div>
</section>
      <Footer></Footer>
      
    </main>
  );
}