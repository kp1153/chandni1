// app/components/Navbar.jsx
"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 shadow-lg px-6 py-3">
      <div className="max-w-7xl mx-auto">
        {/* Line 1 & 2: Name and Tagline - Always Center */}
        <div className="text-center">
          <div className="font-bold text-4xl text-amber-600">
            Chandni Tiwari
          </div>
          <div className="text-base text-amber-600 tracking-widest font-medium">
            Interior Designer
          </div>
        </div>

        {/* Line 3: Desktop Menu - Center */}
        <div className="hidden md:flex justify-center mt-3">
          <ul className="flex space-x-8 text-amber-600">
            <li>
              <a href="#home" className="hover:text-amber-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-amber-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-amber-400 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-amber-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center mt-3">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="text-amber-600"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-amber-600"></span>
              <span className="block h-0.5 w-6 bg-amber-600"></span>
              <span className="block h-0.5 w-6 bg-amber-600"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <ul className="md:hidden mt-4 space-y-3 text-amber-600 text-center">
          <li>
            <a
              href="#home"
              className="block hover:text-amber-400 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block hover:text-amber-400 transition"
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block hover:text-amber-400 transition"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="block hover:text-amber-400 transition"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block hover:text-amber-400 transition"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-amber-400 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}