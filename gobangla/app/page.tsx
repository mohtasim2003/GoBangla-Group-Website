import Image from "next/image";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HeroSlider from "./Component/HeroSlider";
  


export default function Home() {

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

<section className="w-full bg-base-300 min-h-[65vh] flex items-center justify-center px-6 py-20">
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT: Text */}
    <div>
      <h1 className="text-4xl md:text-6xl text-black font-bold leading-tight">
        Elevate Your Journey <br />
        With{" "}
        <span className="bg-gradient-to-r from-[#fa6c00] to-[#02022b] bg-clip-text text-transparent">
          GoBangla
        </span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-black font-semibold">
        Your Trusted Partner for IT Solutions, Edtech Services, Tour & Travels! <br />
        Trusted Across South Asia
      </p>
    </div>

    <HeroSlider />

  </div>
</section>


    <section className="min-h-[65vh] flex items-center justify-center bg-base-300 p-10">
      <div className="card flex flex-row bg-gray-300 shadow-lg max-w-4xl w-full p-6 gap-8">

        {/* Image */}
        <div className="flex-shrink-0">
        <img
        src="/Profile.jpeg"
        alt="CEO"
        title="MD. Mostofa Jaman"
        className="rounded-xl w-70 h-85 object-cover"
        />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">
             Message from Founder & CEO
          </h2>

          <p className="text-gray-700 leading-relaxed">
            “Welcome to GoBangla Group, where growth is powered by purpose, innovation, and excellence. We are committed 
            to advancing gender equity, youth job placement, and sustainable development through modern technology, 
            smart resources, and globally competitive solutions that align with the United Nations Sustainable Development 
            Goals (SDGs). Across our diverse ventures and international partnerships, we deliver quality services at 
            competitive rates while building lasting success stories for our clients, investors, and stakeholders. 
            We believe that inclusive leadership, trust, and continuous innovation are the foundation of long-term 
            value and global impact.”<br></br>
             - MD. Mostofa Jaman,<br></br> 
             Founder & CEO, GoBangla Group
          </p>
        </div>

      </div>
    </section>

<section className="py-20 bg-base-100 px-15">
  <div className="flex gap-8 justify-center">

    {/* Vision */}
    <div className="bg-orange-300 shadow-lg max-w-md w-full p-6 justify-start">
      <h3 className="text-3xl font-bold text-black mb-4">
        Our Vision
      </h3>
      <p className="text-gray-900 leading-relaxed">
        To be a global leader in IT solutions, tour & travels and edtech services, empowering individuals and businesses
         to thrive in the digital age while fostering sustainable development and social impact.
      </p>
    </div>

    {/* Mission */}
    <div className="bg-yellow-300 shadow-lg max-w-md w-full p-6 justify-end">
      <h3 className="text-3xl font-bold text-black mb-4">
        Our Mission
      </h3>
      <p className="text-gray-900 leading-relaxed">
        To deliver innovative, cost-effective IT solutions, unforgettable travel experiences and transformative edtech 
        services that drive growth, empower individuals, and contribute to a more inclusive and sustainable future.
      </p>
    </div>
  </div>
</section>

      <section
  className="relative bg-center bg-cover"
  style={{ backgroundImage: "url('/BusinessBG3.jpg')" }} // 🔁 replace with your image
>
  {/* Optional overlay (keeps readability) */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative shadow-lg max-w-6xl mx-auto px-6 py-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
      Strategic Business Units
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

      {/* Row 1 */}
      <div>
        <img src="/Logo.png" alt="GoBangla" className="rounded-xl w-80 h-60 object-cover" />
        <p className="mt-2 text-xl font-semibold text-[#28eb5d] text-center">GoBangla Group</p>
      </div>

      <div>
        <img src="/Solutions.jpg" alt="Solutions" className="rounded-xl w-80 h-60 object-cover" />
        <p className="mt-2 text-xl font-semibold text-[#28eb5d] text-center">
          GoBangla Solutions
        </p>
      </div>

      <div>
        <img src="/Academy.jpg" alt="Academy" className="rounded-xl w-80 h-60 object-cover" />
        <p className="mt-2 text-xl font-semibold text-[#28eb5d] text-center">
          Learn with GoBangla
        </p>
      </div>

      {/* Row 2 */}
      <div>
        <img src="/ToursLogo.jpg" alt="Travels" className="rounded-xl w-80 h-60 object-cover" />
        <p className="mt-2 text-xl font-semibold text-[#28eb5d] text-center">
          GoBangla Tours & Travels
        </p>
      </div>

      <div>
        <img src="/ShikbeLogo.jpg" alt="Shikbe" className="rounded-xl w-80 h-60 object-cover" />
        <p className="mt-2 text-xl font-semibold text-[#28eb5d] text-center">
          Shikbe Sobai
        </p>
      </div>

      <div>
        <img src="/StayinLogo.jpg" alt="Malaysia" className="rounded-xl w-80 h-60 object-cover" />
        <p className="mt-2 text-xl font-semibold text-[#28eb5d] text-center">
          Stayin Malaysia
        </p>
      </div>

    </div>
  </div>
</section>

    {/* Country Logos */}
    <section className="py-20 flex justify-center bg-base-00 px-10">
  <div className="shadow-xl max-w-6xl w-full p-6 border-40 border-gray-300 rounded-xl bg-gray-100">
    <h3 className="text-3xl font-bold text-black mb-4 flex justify-center">
      Our Global Presence
    </h3>
    {/* Image Row */}
    <div className="flex justify-center gap-6 flex-wrap">
      <div>
        <img
        src="/bd.jpg"
        alt="Bangladesh"
        className="rounded-xl w-40 h-40 object-cover"
      />
        <p className="mt-2 font-semibold text-black flex justify-center">Bangladesh</p>
      </div>

      <div>
        <img
        src="/Maly.png"
        alt="Malaysia"
        className="rounded-xl w-40 h-40 object-cover"
      />
        <p className="mt-2 font-semibold text-black flex justify-center">Malaysia</p>
      </div>

      <div>
        <img
        src="/Nepal.jpg"
        alt="Nepal"
        className="rounded-xl w-40 h-40 object-cover"
      />
        <p className="mt-2 font-semibold text-black flex justify-center">Nepal</p>
      </div>


      <div>
        <img
        src="/india.png"
        alt="India"
        className="rounded-xl w-40 h-40 object-cover"
      />
        <p className="mt-2 font-semibold text-black flex justify-center">India</p>
      </div>
    </div>
    
  </div>
</section>


    <Footer></Footer>
    </main>
  );
}