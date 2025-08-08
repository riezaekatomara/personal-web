import { useState, useEffect } from "react";
import { listProyek } from "../data/data";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProjectCard from "./ProjectCard";

function Proyek() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(listProyek);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [proyekRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(listProyek);
    } else {
      setFilteredProjects(
        listProyek.filter((project) =>
          project.tools.some((tool) =>
            tool.toLowerCase().includes(activeFilter.toLowerCase())
          )
        )
      );
    }
  }, [activeFilter]);

  const categories = [
    "all",
    ...new Set(
      listProyek.flatMap((project) =>
        project.tools.map((tool) => tool.toLowerCase())
      )
    ),
  ].slice(0, 6);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${
      mousePosition.y * 0.02
    }px)`,
  };

  return (
    <div
      ref={proyekRef}
      className="proyek py-20 relative overflow-hidden"
      id="proyek"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-purple-950/20"></div>
      <div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"
        style={parallaxStyle}
      ></div>
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${
            mousePosition.y * -0.02
          }px)`,
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-xs">💼</span>
            </div>
            <span className="text-sm text-gray-300">Portfolio</span>
          </div>

          <h1
            className={`text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            Koleksi proyek terpilih yang menunjukkan keahlian dan kreativitas
            dalam menciptakan solusi digital yang inovatif.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category
                      ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25"
                      : "text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {category === "all" ? "All Projects" : category}

                  {/* Active indicator */}
                  {activeFilter === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl -z-10 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="proyek-box max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {filteredProjects.map((proyek, index) => (
            <ProjectCard
              key={proyek.id}
              proyek={proyek}
              index={index}
              isVisible={isVisible}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Ready to Start Your Project?
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Punya ide proyek yang menarik? Mari kita wujudkan bersama dan
              ciptakan sesuatu yang luar biasa!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontak"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/25"
              >
                <span className="flex items-center justify-center gap-2">
                  Let's Collaborate
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#"
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl font-semibold text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center gap-2">
                  View All Work
                  <svg
                    className="w-5 h-5 group-hover:rotate-45 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyek;
