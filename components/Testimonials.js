"use client";

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* यहाँ बाद में Sanity से आने वाले testimonials दिखेंगे */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gray-200"></div>
            <p className="text-gray-400 italic mb-4">
              “Testimonial text will appear here...”
            </p>
            <h4 className="font-semibold text-gray-400">Client Name</h4>
            <p className="text-sm text-gray-300 mb-2">Client Role</p>
            <div className="flex justify-center text-gray-300">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
}
