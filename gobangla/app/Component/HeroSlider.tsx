'use client';
import { useEffect, useState } from "react";

export default function HeroSlider() {
  const images = ["/Logo.jpg", "/RisingYouth.jpg", "/G&Windy_MoU.jpeg", "/B_Certificate.jpeg", 
    "/Thailand.jpeg","/Jetwin.jpeg"];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setAnimate(true);
      }, 1000); // fade out time
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] overflow-hidden rounded-xl">
      <img
        src={images[index]}
        alt="Slide"
        className={`w-full h-full object-cover transition-all duration-1000 ease-in-out
        ${animate ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
      />
    </div>
  );
}