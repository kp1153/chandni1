// app/components/Navbar.jsx
"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-teal-600 shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-center md:text-left">
            <div className="font-bold text-2xl text-white">Chandni Tiwari</div>
            <div className="text-sm text-white tracking-widest font-medium">
              Interior Designer
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              className="text-white"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
              </div>
            </button>
          </div>

          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <a href="#home" className="hover:text-teal-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-200 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-200 transition">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-teal-200 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-teal-200 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {open && (
          <ul className="md:hidden mt-4 space-y-3 text-white text-center">
            <li>
              <a
                href="#home"
                className="block hover:text-teal-200 transition"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-teal-200 transition"
                onClick={() => setOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:text-teal-200 transition"
                onClick={() => setOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block hover:text-teal-200 transition"
                onClick={() => setOpen(false)}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block hover:text-teal-200 transition"
                onClick={() => setOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-teal-200 transition"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
