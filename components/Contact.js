// app/components/Contact.jsx
"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Let's discuss your interior design project
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-teal-600 text-2xl mr-4">📧</span>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a
                      href="mailto:chandni12.tiwari@gmail.com"
                      className="text-teal-600 hover:underline"
                    >
                      chandni12.tiwari@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-teal-600 text-2xl mr-4">📱</span>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a
                      href="tel:+916389269043"
                      className="text-teal-600 hover:underline"
                    >
                      +91 63892 69043
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-teal-600 text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">
                      Tiwari Bhavan, Village: Gaharpur
                      <br />
                      Post: Puari Kalan - 221202
                      <br />
                      Varanasi, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
