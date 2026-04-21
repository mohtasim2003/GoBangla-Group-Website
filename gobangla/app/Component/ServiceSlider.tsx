'use client';
import { useEffect, useState } from "react";

export default function ServiceSlider() {
  const images = [ "GroupLogo.png", "/Logo.jpg", "/Solutions.jpg", "/Academy.jpg", "/ToursLogo.jpg",
    "/ShikbeLogo.jpg", "/StayinLogo.jpg"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-[400px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}