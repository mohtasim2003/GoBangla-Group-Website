import Image from "next/image";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HeroSlider from "./Component/HeroSlider";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden pt-[110px]">
      <Navbar></Navbar>

      {/* HERO */}
      <section className="bg-[#FFA500] py-3">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-base-content py-3">
            <span className="bg-gradient-to-r from-[#02022b] to-[#080859] bg-clip-text text-transparent">
              GoBangla Group
            </span>
          </h1>
          <p className="mt-6 text-base md:text-xl max-w-3xl mx-auto text-base-content/70 text-black text-semibold">
            IT Solutions | Tour & Travels | Edtech
          </p>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="w-full bg-base-300 min-h-[65vh] flex items-center justify-center px-4 md:px-6 py-10 md:py-20">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-6xl text-black font-bold leading-tight">
              Elevate Your Journey <br />
              With{" "}
              <span className="bg-gradient-to-r from-[#fa6c00] to-[#02022b] bg-clip-text text-transparent">
                GoBangla
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-black font-semibold">
              Your Trusted Partner for IT Solutions, Edtech Services, Tour & Travels! <br />
              Trusted Across South Asia
            </p>
          </div>

          <HeroSlider />
        </div>
      </section>

      {/* CEO */}
      <section className="min-h-[65vh] flex items-center justify-center bg-base-300 p-4 md:p-10">
        <div className="card flex flex-col md:flex-row bg-gray-300 shadow-lg max-w-4xl w-full p-6 gap-8">

          {/* KEEP ORIGINAL SIZE EXACTLY */}
          <div className="flex-shrink-0">
            <img
              src="/Profile1.jpeg"
              alt="CEO"
              title="MD. Mostofa Jaman"
              className="rounded-xl w-70 h-85 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-orange-900 mb-4">
              Message from Founder & CEO
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              “Welcome to GoBangla Group, where growth is powered by purpose, innovation, and excellence. We are committed 
              to advancing gender equity, youth job placement, and sustainable development through modern technology, 
              smart resources, and globally competitive solutions that align with the United Nations Sustainable Development 
              Goals (SDGs). Across our diverse ventures and international partnerships, we deliver quality services at 
              competitive rates while building lasting success stories for our clients, investors, and stakeholders. 
              We believe that inclusive leadership, trust, and continuous innovation are the foundation of long-term 
              value and global impact.”<br></br>
              Mohammad Mostofa Jaman,<br></br> 
              Founder & CEO, GoBangla Group
            </p>
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="py-10 md:py-20 bg-base-100 px-4 md:px-15">
        <div className="flex flex-col md:flex-row gap-8 justify-center">

          <div className="bg-orange-300 shadow-lg max-w-md w-full p-6">
            <h3 className="text-3xl font-bold text-black mb-4">
              Our Vision
            </h3>
            <p className="text-gray-900 leading-relaxed">
              To be a global leader in IT solutions, tour & travels and edtech services, empowering individuals and businesses
               to thrive in the digital age while fostering sustainable development and social impact.
            </p>
          </div>

          <div className="bg-yellow-300 shadow-lg max-w-md w-full p-6">
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

      {/* BUSINESS UNITS */}
<section
  className="relative bg-center bg-cover"
  style={{ backgroundImage: "url('/BusinessBG3.jpg')" }}
>
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
      Strategic Business Units
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
      {[
        { src: "/GroupLogo.png", label: "GoBangla Group" },
        { src: "/Solutions.jpg", label: "GoBangla Solutions" },
        { src: "/Academy.jpg", label: "Learn with GoBangla" },
        { src: "/ToursLogo.jpg", label: "GoBangla Tours & Travels" },
        { src: "/SL.png", label: "Shikbe Sobai" },
        { src: "/StayinLogo.jpg", label: "Stayin Malaysia" },
      ].map((item, i) => (
        <div key={i} className="w-full max-w-[340px]">
          
          <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center bg-white rounded-xl overflow-hidden">
            
            <img
              src={item.src}
              alt={item.label}
              className={
                item.label === "Shikbe Sobai"
                  ? "w-full h-full object-cover scale-125"
                  : "max-w-full max-h-full object-contain"
              }
            />

          </div>

          <p className="mt-2 text-xl font-semibold text-[#28eb5d] text-center">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* GLOBAL */}
      <section className="py-10 md:py-20 flex justify-center px-4 md:px-10">
        <div className="shadow-xl max-w-6xl w-full p-6 border-4 md:border-40 border-gray-300 rounded-xl bg-gray-100">
          <h3 className="text-3xl font-bold text-black mb-4 flex justify-center">
            Our Global Presence
          </h3>

          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { src: "/bd.jpg", label: "Bangladesh" },
              { src: "/Maly.png", label: "Malaysia" },
              { src: "/Nepal.jpg", label: "Nepal" },
              { src: "/India.png", label: "India" },
              { src: "/USA.jpg", label: "USA" },
            ].map((item, i) => (
              <div key={i}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="rounded-xl w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-cover"
                />
                <p className="mt-2 font-semibold text-black flex justify-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </main>
  );
}