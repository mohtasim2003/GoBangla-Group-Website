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
          <ServiceSlider></ServiceSlider>
        </div>
      </section>

      
  <section className="py-24 flex justify-center">
    <div className="w-full shadow-lg px-6 py-6 bg-[#bebbc4]">

        <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900">Explore GoBangla Group</h2>
    <p className="text-gray-700 mt-2">Discover all the GoBangla solutions and businesses</p>
  </div>


      <div className="max-w-7xl mx-auto px-6 bg-[#a8996f] rounded-2xl shadow-lg p-10">
    
    {/* Grid Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    

      {/* Card 1 */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
        <Image
          src="/Solutions.jpg"
          alt="Solutions"
          width={320}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-white text-lg font-bold mb-1">GoBangla Solutions</h2>
          <p className="text-gray-200 text-xs mb-2">
            Modern IT solutions for your business growth and digital success.
          </p>
          <div className="card-actions flex justify-end">
            <Link href="https://www.facebook.com/gobanglasolutions" target="_blank">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md 
                                 hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
                Visit Site
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
        <Image
          src="/Academy.jpg"
          alt="Academy"
          width={320}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-white text-lg font-bold mb-1">Learn With GoBangla</h2>
          <p className="text-gray-200 text-xs mb-2">
            Online courses and training for skill development.
          </p>
          <div className="card-actions flex justify-end">
            <Link href="https://learnwithgobangla.com/" target="_blank">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md 
                                 hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
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
          alt="StayinMy"
          width={320}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-white text-lg font-bold mb-1">StayinMalaysia</h2>
          <p className="text-gray-200 text-xs mb-2">
            Travel and stay services for Malaysians and visitors.
          </p>
          <div className="card-actions flex justify-end">
            <Link href="https://stayinmy.com/" target="_blank">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md 
                                 hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
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
          width={320}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-white text-lg font-bold mb-1">GoBangla Tours and Travels</h2>
          <p className="text-gray-200 text-xs mb-2">
           Explore Bangladesh with trusted travel services.
          </p>
          <div className="card-actions flex justify-end">
            <Link href="https://gobanglabnb.com/" target="_blank">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md 
                                 hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
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
          width={320}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-white text-lg font-bold mb-1">Shikhbe Shobai</h2>
          <p className="text-gray-200 text-xs mb-2">
           Learn together with accessible education for everyone
          </p>
          <div className="card-actions flex justify-end">
            <Link href="https://shikhbeshobai.com/" target="_blank">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md 
                                 hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
                Visit Site
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 h-[300px] w-full">
        <Image
          src="/Logo.jpeg"
          alt="GoBangla Group"
          width={320}
          height={300}
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end p-4">
          <h2 className="text-white text-lg font-bold mb-1">GoBangla Group</h2>
          <p className="text-gray-200 text-xs mb-2">
          Our umbrella organization driving all GoBangla ventures.
          </p>
          <div className="card-actions flex justify-end">
            <Link href="https://www.facebook.com/gobanglasolutions" target="_blank">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md 
                                 hover:bg-blue-700 hover:scale-105 transition duration-300 text-sm">
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









      
      <Footer></Footer>
      
    </main>
  );
}