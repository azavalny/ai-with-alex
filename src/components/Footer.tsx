import React from "react";

const Footer = () => {
  // Scroll to top handler
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = "#hero";
    }
  };

  return (
    <footer className="w-full py-6 bg-midnight-blue/80 border-t border-neon-sky-blue/20 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-gray-300 text-sm z-20 relative">
      <span>© 2025 AI with Alex</span>
      <button
        onClick={handleScrollTop}
        className="mx-4 px-4 py-2 rounded-full bg-neon-sky-blue/20 border border-neon-sky-blue/30 text-neon-sky-blue font-medium hover:bg-neon-sky-blue/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-sky-blue"
        aria-label="Back to top"
      >
        Back to Top
      </button>
      <a
        href="https://www.youtube.com/@ai-with-alex"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="AI with Alex YouTube Channel"
        className="inline-flex items-center hover:text-neon-sky-blue transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-1"
        >
          <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.946C18.1 6 12 6 12 6s-6.1 0-7.87.055A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.93 1.946C5.9 18 12 18 12 18s6.1 0 7.87-.055a2.75 2.75 0 0 0 1.93-1.946A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer; 