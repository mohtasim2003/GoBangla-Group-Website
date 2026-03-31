import Image from "next/image";
import Navbar from "./Component/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <section className="w-full bg-base-300 min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl text-base-content font-bold leading-tight">
            Elevate Your Journey <br />
            With <span className="bg-gradient-to-r from-[#9130f1] to-[#d79a50] bg-clip-text text-transparent">SkyPhoenix</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600">
            Our company provides a premium, safe, and high-quality flight
            experience — redefining comfort and reliability in the skies.
          </p>

          
        </div>


      </div>
    </section>
    <section className="w-full min-h-[90vh] p-6 bg-base-300">
    </section>
    </main>
   
  );
}