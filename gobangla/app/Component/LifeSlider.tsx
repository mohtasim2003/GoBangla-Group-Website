'use client';
import { useEffect, useState } from "react";

export default function LifeSlider() {
  const images = [
    "/Picture1.jpeg",
    "/Life2.jpeg",
    
    "/Life4.jpeg",
    "/Life5.jpeg",
    
    "/Life7.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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
            className="min-w-full h-[400px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}