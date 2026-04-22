'use client';
import Link from "next/link";
import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Image from "next/image";


export default function AboutPage() {
  return (
    <main className="bg-white pt-20">
      <Navbar></Navbar>

      {/* HERO */}
      <section
        className="relative bg-base-100 py-16 md:py-20 bg-center bg-cover md:pt-20 pt-16 mt-16"
        style={{ backgroundImage: "url('/Sky.avif')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-center text-center min-h-[100px]">
          <div className="text-white">
            <h1 className="mb-4 md:mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500">
              GoBangla Group
            </h1>
            <p className="mb-4 md:mb-5 text-base md:text-lg text-blue-900">
              IT Solutions | Tour & Travels | Edtech
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl text-base-content font-bold mb-4 md:mb-6 text-black">
              Who We Are
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-4 md:mb-6 text-black text-base md:text-lg">
              <span className="font-semibold text-base-content"> GoBangla</span>{" "}
               is a leading IT/ITES firm in Bangladesh, delivering innovative, cost-effective
              technology solutions and human capital development since 2016. By following global best practices
              and embracing cutting-edge technologies, we drive professionalism, innovation, and future-ready
              ICT solutions.
            </p>
          </div>

          {/* Stats / Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-accent text-black">50,000+</h3>
              <p className="mt-2 text-xs md:text-sm text-base-content/70 text-black">
                Learners Trained
              </p>
            </div>
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-accent text-black">30%</h3>
              <p className="mt-2 text-xs md:text-sm text-base-content/70 text-black">
                Average Discounts
              </p>
            </div>
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-accent text-black">24/7</h3>
              <p className="mt-2 text-xs md:text-sm text-base-content/70 text-black">
                Customer Support
              </p>
            </div>
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-accent text-black">100%</h3>
              <p className="mt-2 text-xs md:text-sm text-base-content/70 text-black">
                Strong contribution to workforce development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="py-12 md:py-24 bg-base-200 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Sky.avif')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-base-content font-bold mb-8 md:mb-12 text-white">
            Why Choose GoBangla?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div className="card bg-white/90 p-6 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-black">
                Client-Focused Service
              </h3>
              <p className="text-black/70 text-sm md:text-base">
                GoBangla prioritizes client satisfaction with dedicated support, timely delivery, and customized solutions tailored to each business.
              </p>
            </div>

            <div className="card bg-white/90 p-6 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-black">
                Multi-Sector Expertise
              </h3>
              <p className="text-black/70 text-sm md:text-base">
                From e-commerce to e-learning and corporate services, GoBangla Group works across multiple industries making it a one-stop solution for diverse business needs.
              </p>
            </div>

            <div className="card bg-white/90 p-6 md:p-8 shadow-lg sm:col-span-2 md:col-span-1">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-black">
                Trusted & Reliable Service
              </h3>
              <p className="text-black/70 text-sm md:text-base">
                GoBangla Group is committed to delivering consistent and dependable solutions, ensuring client satisfaction and long-term trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-base-content font-bold mb-8 md:mb-12 text-black">
            Leadership Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">

            {/* Card 1 */}
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg h-full flex flex-col justify-between">
              <Link href="https://www.linkedin.com/in/mostofa-jaman-46036357/" target="_blank">
                <Image
                  src="/Profile1.jpeg"
                  alt="Mostofa Jaman"
                  width={150}
                  height={150}
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover mx-auto mb-3 md:mb-4"
                />
                <h3 className="text-xs md:text-md font-bold text-black">Mohammad Mostofa Jaman</h3>
                <p className="text-xs md:text-sm text-base-content/70 text-black">
                  Founder & CEO
                </p>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg h-full flex flex-col justify-between">
              <Link href="https://www.linkedin.com/in/mohd-sharulizzam-bin-saibon-50a122373/" target="_blank">
                <Image
                  src="/Shahrul_F.png"
                  alt="Shahrul Ejump"
                  width={150}
                  height={150}
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover mx-auto mb-3 md:mb-4"
                />
                <h3 className="text-xs md:text-md font-bold text-black">Mohd Sharulizzam Bin Saibon</h3>
                <p className="text-xs md:text-sm text-base-content/70 text-black">
                  Co-Founder, Stayin Malaysia
                </p>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg h-full flex flex-col justify-between">
              <Link href="" target="_blank">
                <Image
                  src="/Salma_F.png"
                  alt="Maria Salma"
                  width={150}
                  height={150}
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover mx-auto mb-3 md:mb-4"
                />
                <h3 className="text-xs md:text-md font-bold text-black">Maria Salma</h3>
                <p className="text-xs md:text-sm text-base-content/70 text-black">
                  Director & CHRO
                </p>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg h-full flex flex-col justify-between">
              <Link href="https://www.linkedin.com/in/raisulmahmud/" target="_blank">
                <Image
                  src="/Raisul_Formal1.png"
                  alt="Raisul Mahmud"
                  width={150}
                  height={150}
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover mx-auto mb-3 md:mb-4"
                />
                <h3 className="text-xs md:text-md font-bold text-black">Raisul Mahmud</h3>
                <p className="text-xs md:text-sm text-base-content/70 text-black">
                  Director
                </p>
              </Link>
            </div>

            {/* Card 5 */}
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg h-full flex flex-col justify-between">
              <Link href="https://www.linkedin.com/in/wadudit" target="_blank">
                <Image
                  src="/Abdul Wadud.jpeg"
                  alt="Abdul Wadud"
                  width={150}
                  height={150}
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover mx-auto mb-3 md:mb-4"
                />
                <h3 className="text-xs md:text-md font-bold text-black">Abdul Wadud</h3>
                <p className="text-xs md:text-sm text-base-content/70 text-black">
                  Head of Design
                </p>
              </Link>
            </div>

            {/* Card 6 */}
            <div className="card bg-base-200 p-4 md:p-6 text-center shadow-lg h-full flex flex-col justify-between">
              <Link href="https://www.linkedin.com/in/sayed-safi/" target="_blank">
                <Image
                  src="/Safi.jpeg"
                  alt="Syed Safi"
                  width={150}
                  height={150}
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-cover mx-auto mb-3 md:mb-4"
                />
                <h3 className="text-xs md:text-md font-bold text-black">Syed Safi</h3>
                <p className="text-xs md:text-sm text-base-content/70 text-black">
                  Head of Solutions
                </p>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* MILESTONES OF SUCCESS */}
      <section className="py-12 md:py-20 flex justify-center bg-base-00 px-4 md:px-10">
        <div className="shadow-xl max-w-6xl w-full p-4 md:p-6 border-5 border-gray-300 rounded-xl bg-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 flex justify-center">
            Milestones of Success
          </h3>
          {/* Image Row */}
          <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
            <div>
              <img
                src="/Achive1.jpg"
                alt="Bangladesh"
                className="rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover"
              />
            </div>
            <div>
              <img
                src="/Achive2.jpeg"
                alt="Malaysia"
                className="rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-48 object-cover"
              />
            </div>
            <div>
              <img
                src="/Achive3.jpeg"
                alt="Nepal"
                className="rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover"
              />
            </div>
            <div>
              <img
                src="/Achive4.jpeg"
                alt="India"
                className="rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover"
              />
            </div>
            <div>
              <img
                src="/Achive5.jpeg"
                alt="India"
                className="rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover"
              />
            </div>
            <div>
              <img
                src="/Achive6.jpeg"
                alt="India"
                className="rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover"
              />
            </div>
            <div>
              <img
                src="/RisingYouth.jpg"
                alt="India"
                className="rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROUD MEMBERSHIP */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-base-content font-bold mb-8 md:mb-12 text-black">
            Our Proud Membership
          </h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <Image
            src="/BassisLogo.png"
            alt="Basis Logo"
            width={150}
            height={150}
            className="w-20 h-auto md:w-[150px]"
          />
          <Image
            src="/Ecablogo.png"
            alt="Ecab Logo"
            width={150}
            height={150}
            className="w-20 h-auto md:w-[150px]"
          />
          <Image
            src="/ContracLogo.jpg"
            alt="Contrac Logo"
            width={100}
            height={100}
            className="w-16 h-auto md:w-[100px]"
          />
          <Image
            src="/BwcciLogo.png"
            alt="Bwcci Logo"
            width={100}
            height={100}
            className="w-16 h-auto md:w-[100px]"
          />
          <Image
            src="/BaccoLogo.jpg"
            alt="Bacco Logo"
            width={150}
            height={150}
            className="w-20 h-auto md:w-[150px]"
          />
          <Image
            src="/Caab.jfif"
            alt="Caab Logo"
            width={150}
            height={150}
            className="w-20 h-auto md:w-[150px]"
          />
          <Image
            src="/MocabLogo.webp"
            alt="Mocab Logo"
            width={150}
            height={150}
            className="w-20 h-auto md:w-[150px]"
          />
        </div>
      </section>

      <Footer></Footer>

    </main>
  );
}