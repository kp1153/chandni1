// app/components/Testimonials.jsx
"use client";

export default function Testimonials() {
  // Dummy data - Replace with Sanity data later
  const testimonials = [
    {
      id: 1,
      name: "Client Name 1",
      role: "Homeowner",
      text: "Client testimonial text will come from Sanity",
      rating: 5,
    },
    {
      id: 2,
      name: "Client Name 2",
      role: "Business Owner",
      text: "Client testimonial text will come from Sanity",
      rating: 5,
    },
    {
      id: 3,
      name: "Client Name 3",
      role: "Architect",
      text: "Client testimonial text will come from Sanity",
      rating: 5,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          What clients say about my work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
