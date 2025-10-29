"use client";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: "/1.jpg", alt: "Slide 1" },
    { src: "/2.jpg", alt: "Slide 2" },
    { src: "/3.jpg", alt: "Slide 3" },
    { src: "/4.jpg", alt: "Slide 4" },
    { src: "/5.jpg", alt: "Slide 5" },
    { src: "/6.jpg", alt: "Slide 6" },
    { src: "/7.jpg", alt: "Slide 7" },
    { src: "/8.jpeg", alt: "Slide 8" },
    { src: "/9.jpeg", alt: "Slide 9" },
    { src: "/10.jpeg", alt: "Slide 10" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
