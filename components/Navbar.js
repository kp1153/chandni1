// app/components/Navbar.jsx
"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-amber-600 text-white px-4 py-2">
      <div className="text-center font-bold text-lg">Interior Designer Chandni</div>

      <div className="flex justify-end md:hidden mt-2">
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      <ul
        className={`flex-col md:flex md:flex-row md:justify-center mt-2 space-y-2 md:space-y-0 md:space-x-6 text-center ${
          open ? "flex" : "hidden md:flex"
        }`}
      >
        <li><a href="#home" className="block">Home</a></li>
        <li><a href="#about" className="block">About</a></li>
        <li><a href="#projects" className="block">Projects</a></li>
        <li><a href="#testimonials" className="block">Testimonials</a></li>
        <li><a href="#services" className="block">Services</a></li>
        <li><a href="#contact" className="block">Contact</a></li>
      </ul>
    </nav>
  );
}
