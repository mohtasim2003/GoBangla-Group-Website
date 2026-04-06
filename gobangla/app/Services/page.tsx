// import { Link } from "lucide-react";
'use client';
import Link from "next/link";
import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Image from "next/image";
import ServiceSlider from "../Component/ServiceSlider";
export default function ServicePage() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>

      
      {/* HERO */}
     <section
        className="relative bg-base-100 py-20 bg-center bg-cover pt-20"
        style={{ backgroundImage: "url('/ServiceHero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-center text-center min-h-[100px]">
          <div className="text-white">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-yellow-500">
              GoBangla Group
            </h1>
            <p className="mb-5 text-lg text-white">
              IT Solutions | Tour & Travels | Edtech
            </p>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-5xl text-base-content font-bold mb-6 text-black">
              Our Services
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-6 text-black text-lg">
              <span className="font-semibold text-base-content">  GoBangla Group </span>{" "}
              is your all-in-one platform for learning, innovation, and travel. From skill development at GoBangla Academy to smart business solutions, seamless travel services, and flexible online learning.We help you move forward with confidence.
            </p>
            
          </div>
          <ServiceSlider></ServiceSlider>
        </div>
      </section>
<section className="relative py-24 flex justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/ServiceBack.jpg"
      alt="Background"
      fill
      style={{ objectFit: "cover" }}
      priority
    />
    <div className="absolute inset-0 bg-black/30"></div>
  </div>

  {/* Content */}
  <div className="relative w-full px-6 py-6 z-10">


    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-white">
        Explore GoBangla Group
      </h2>
      <p className="text-white mt-2">
        Explore our world of innovation and services
      </p>
    </div>

    {/* Cards Wrapper */}
    <div className="max-w-7xl mx-auto px-6  rounded-2xl shadow-lg p-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
          <Image
            src="/Solutions.jpg"
            alt="Solutions"
            fill
            style={{ objectFit: "cover" }}
            className="group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
            <h2 className="text-white text-lg font-bold mb-1">GoBangla Solutions</h2>
            <p className="text-gray-200 text-xs mb-2">
              Empowering individuals with NSDA skill development training for future success.
            </p>
            <div className="flex justify-end">
              <Link href="https://www.facebook.com/gobanglasolutions" target="_blank">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
                  Visit Site
                </button>
              </Link>
            </div>
          </div>
        </div>
      
   {/* Explore GoBangla Section with Background Image behind cards */}
     

              {/* Card 2 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
                <Image
                  src="/Academy.jpg"
                  alt="Academy"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
                  <h2 className="text-white text-lg font-bold mb-1">Learn With GoBangla</h2>
                  <p className="text-gray-200 text-xs mb-2">
                    Online courses and training for skill development.
                  </p>
                  <div className="card-actions flex justify-end">
                    <Link href="https://learnwithgobangla.com/" target="_blank">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
                        Visit Site
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
                <Image
                  src="/StayinLogo.jpg"
                  alt="StayinMalaysia"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
                  <h2 className="text-white text-lg font-bold mb-1">StayinMalaysia</h2>
                  <p className="text-gray-200 text-xs mb-2">
                    Travel and stay services for Malaysians and visitors.
                  </p>
                  <div className="card-actions flex justify-end">
                    <Link href="https://stayinmy.com/" target="_blank">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
                        Visit Site
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
                <Image
                  src="/ToursLogo.jpg"
                  alt="Tours and Travels"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
                  <h2 className="text-white text-lg font-bold mb-1">GoBangla Tours and Travels</h2>
                  <p className="text-gray-200 text-xs mb-2">
                    Offering world-class tourist services for seamless and memorable journeys.
                  </p>
                  <div className="card-actions flex justify-end">
                    <Link href="https://gobanglabnb.com/" target="_blank">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
                        Visit Site
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
                <Image
                  src="/ShikbeLogo.jpg"
                  alt="Shikhbe Shobai"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
                  <h2 className="text-white text-lg font-bold mb-1">Shikhbe Shobai</h2>
                  <p className="text-gray-200 text-xs mb-2">
                    Learn together with accessible education for everyone.
                  </p>
                  <div className="card-actions flex justify-end">
                    <Link href="https://shikhbeshobai.com/" target="_blank">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
                        Visit Site
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
                <Image
                  src="/Logo.png"
                  alt="GoBangla Group"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
                  <h2 className="text-white text-lg font-bold mb-1">GoBangla Group</h2>
                  <p className="text-gray-200 text-xs mb-2">
                    Our umbrella organization driving all GoBangla ventures.
                  </p>
                  <div className="card-actions flex justify-end">
                    <Link href="https://www.facebook.com/gobanglasolutions" target="_blank">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
                        Visit Site
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      

      <section className="py-20 flex justify-center bg-base-00 px-10">
  <div className="shadow-xl max-w-6xl w-full p-6  bg-base-100">
    <h3 className="text-3xl font-bold text-black mb-4 flex justify-center text-yellow-400">
      We are growing globally
    </h3>
    {/* Image Row */}
    <div className="flex justify-center gap-6 flex-wrap">
      <p className="text-gray-600 font-semibold text-md mb-4  w-full">
        Our services have expanded to multiple countries. We are committed to providing 
        quality services and solutions to our customers worldwide. Find us in:
      </p>

      <Image src="/bd.jpg" alt="Bangladesh" width={200} height={80} className="rounded-lg shadow-md" />
      <Image src="/Maly.png" alt="Malaysia" width={200} height={80} className="rounded-lg shadow-md" />
      <Image src="/India.png" alt="India" width={200} height={80} className="rounded-lg shadow-md" />
      <Image src="/Nepal.jpg" alt="Nepal" width={200} height={80} className="rounded-lg shadow-md" />
      <Image src="/USA.jpg" alt="USA" width={200} height={80} className="rounded-lg shadow-md" />
      <Image src="/ThailandFlag.jpg" alt="Thailand" width={200} height={80} className="rounded-lg shadow-md" />
      <Image src="/SriLanka.avif" alt="Sri Lanka" width={200} height={80} className="rounded-lg shadow-md" />
    </div>

    </div>
    </section>
           
      <Footer></Footer>
      
    </main>
  );
}