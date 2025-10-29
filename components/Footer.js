// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 text-sm">
      <p className="mb-2">
        © {new Date().getFullYear()} Interior Designer Chandni. All rights
        reserved.
      </p>
      <p>
        Designed by{" "}
        <a
          href="https://web-developer-kp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-300 font-semibold transition-colors underline decoration-dotted"
        >
          Creative Solutions
        </a>
      </p>
    </footer>
  );
}
