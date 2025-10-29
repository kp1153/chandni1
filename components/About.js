// app/components/About.jsx
export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              A passionate and innovative interior designer, I graduated from
              the prestigious
              <span className="font-semibold">
                {" "}
                Indian Institute of Fashion Design (IIFD), Chandigarh
              </span>
              , where I honed my skills in creating functional yet aesthetically
              pleasing spaces.
            </p>

            <p className="text-lg">
              Currently interning at{" "}
              <span className="font-semibold">Purpose DesignLife</span>, a
              renowned Chandigarh-based design firm, I am gaining hands-on
              experience in transforming concepts into reality while working on
              diverse residential and commercial projects.
            </p>

            <p className="text-lg">
              As an Art Graduate from BHU with a strong foundation in
              Mathematics, I bring a unique blend of creativity and analytical
              thinking to every project. My approach combines artistic vision
              with practical solutions to create spaces that truly resonate with
              clients.
            </p>

            <p className="text-lg">
              Young, enthusiastic, and driven by innovation, I believe in
              pushing boundaries and exploring new design paradigms. Every space
              tells a story, and I am here to help you tell yours.
            </p>
          </div>

          <div className="bg-teal-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-teal-200 mr-3">✦</span>
                <span>Graduate from IIFD, Chandigarh</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3">✦</span>
                <span>Art Graduate from BHU</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3">✦</span>
                <span>10+2 with Mathematics</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3">✦</span>
                <span>Interning at Purpose DesignLife</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-200 mr-3">✦</span>
                <span>Innovative & Detail-Oriented</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
