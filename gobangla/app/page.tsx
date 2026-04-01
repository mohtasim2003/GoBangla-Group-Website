import Image from "next/image";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";


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

      <section className="w-full bg-base-300 min-h-[65vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl text-base-content text-black font-bold leading-tight">
            Elevate Your Journey <br />
            With <span className="bg-gradient-to-r from-[#fa6c00] to-[#02022b] bg-clip-text text-transparent font-bold">GoBangla</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#17160d] font-semibold">
           Empowering Skills and Digital Transformation Since-2016
           Your Trusted Partner for IT Solutions, Tour & Travels and Edtech Services<br></br>
           Trusted Across South Asia

          </p>
        </div>
      </div>
    </section>


 <section className="min-h-[65vh] flex items-center justify-center bg-base-300 p-10">
  <div className="card flex flex-row bg-gray-300 shadow-lg max-w-4xl w-full p-6 gap-8">

    {/* Image */}
    <div className="flex-shrink-0">
      <img
        src="/CEO.jfif"
        alt="CEO"
        className="rounded-xl w-64 h-64 object-cover"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-orange-900 mb-4">
        Message from Founder & CEO
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Hello, I am excited to introduce GoBangla Group and our vision for digital transformation.
        At GoBangla, we are committed to empowering individuals and businesses through innovative IT solutions,
        tour & travel experiences, and edtech services.
        <br /><br />
        Our mission is to drive digital transformation across South Asia with high-quality solutions.
        <br /><br />
        - Founder & CEO, GoBangla Group
      </p>
    </div>

  </div>
</section>

    <Footer></Footer>
    </main>
  );
}