// app/components/Projects.jsx
"use client";

export default function Projects() {
  // Dummy data - Replace with Sanity data later
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Brief project description",
      image: "/placeholder.jpg",
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Brief project description",
      image: "/placeholder.jpg",
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "Brief project description",
      image: "/placeholder.jpg",
    },
    {
      id: 4,
      title: "Project Title 4",
      description: "Brief project description",
      image: "/placeholder.jpg",
    },
    {
      id: 5,
      title: "Project Title 5",
      description: "Brief project description",
      image: "/placeholder.jpg",
    },
    {
      id: 6,
      title: "Project Title 6",
      description: "Brief project description",
      image: "/placeholder.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore my portfolio of interior design projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Image from Sanity
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
