import Image from "next/image";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";


export default function Home() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>

            {/* HERO */}
      <section className="bg-[#FFA500] py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-base-content py-3">
             <span className="bg-gradient-to-r from-[#02022b] to-[#080859] bg-clip-text text-transparent">GoBangla Group</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-base-content/70 text-black text-semibold">
            IT Solutions | Tour & Travels | Edtech
          </p>
        </div>
      </section>

      <section className="w-full bg-base-300 min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl text-base-content text-black font-bold leading-tight">
            Elevate Your Journey <br />
            With <span className="bg-gradient-to-r from-[#fa6c00] to-[#02022b] bg-clip-text text-transparent font-bold">GoBangla</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#b35107] font-semibold">
           Empowering Skills and Digital Transformation Since-2016
            Trusted Across South Asia
          </p>

          
        </div>


      </div>
    </section>
    <section className="w-full min-h-[90vh] p-6 bg-base-300">
    </section>
    <Footer></Footer>
    </main>

   
  );
}