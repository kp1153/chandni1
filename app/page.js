// app/page.js
export default function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <h1 className="text-3xl">Home Section</h1>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-2xl">About Section</h2>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <h2 className="text-2xl">Projects Section</h2>
      </section>

      <section
        id="testimonials"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-2xl">Testimonials Section</h2>
      </section>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <h2 className="text-2xl">Services Section</h2>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <h2 className="text-2xl">Contact Section</h2>
      </section>
    </>
  );
}
