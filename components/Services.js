// app/components/Services.jsx
export default function Services() {
  const services = [
    {
      id: 1,
      title: "Residential Design",
      description:
        "Complete home interior design solutions from concept to execution",
      icon: "🏠",
    },
    {
      id: 2,
      title: "Commercial Design",
      description:
        "Office spaces, retail stores, and commercial establishments design",
      icon: "🏢",
    },
    {
      id: 3,
      title: "Space Planning",
      description: "Efficient layout planning for optimal space utilization",
      icon: "📐",
    },
    {
      id: 4,
      title: "3D Visualization",
      description:
        "Realistic 3D renders to visualize your space before execution",
      icon: "🎨",
    },
    {
      id: 5,
      title: "Furniture Selection",
      description: "Curated furniture and decor selection to match your style",
      icon: "🛋️",
    },
    {
      id: 6,
      title: "Color Consultation",
      description:
        "Expert color schemes and material selection for your interiors",
      icon: "🎨",
    },
    {
      id: 7,
      title: "Lighting Design",
      description:
        "Ambient, task, and accent lighting solutions for perfect ambiance",
      icon: "💡",
    },
    {
      id: 8,
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with creative renovation solutions",
      icon: "🔨",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive interior design services tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-6 rounded-lg hover:bg-teal-50 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
