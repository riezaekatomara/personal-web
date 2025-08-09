import { useState, useEffect } from "react";
import { Wrench, Lightbulb } from "lucide-react";
import { listTools } from "../data/data";

function Tools() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".tools");
    if (element) observer.observe(element);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Parallax minimal supaya tidak ganggu jarak grid
  const getParallaxStyle = (index) => ({
    transform: `translate(${
      mousePosition.x * 0.003 * (index % 2 === 0 ? 1 : -1)
    }px, ${mousePosition.y * 0.003 * (index % 3 === 0 ? 1 : -1)}px)`,
  });

  return (
    <div className="tools py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>

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
              <Wrench className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-gray-300">Tech Stack</span>
          </div>

          <h1
            className={`text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tools &
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            Koleksi tools dan teknologi yang saya gunakan untuk menciptakan
            pengalaman digital yang luar biasa.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="tools-box w-full px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {listTools.map((tool, index) => (
              <div
                key={tool.id}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-30"
                }`}
                style={{
                  transitionDelay: `${600 + index * 100}ms`,
                  ...getParallaxStyle(index),
                }}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl filter blur-xl transition-all duration-500 ${
                    hoveredTool === tool.id
                      ? "opacity-100 scale-110"
                      : "opacity-0"
                  }`}
                ></div>

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-4 overflow-hidden group-hover:border-white/20 transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-3xl"></div>

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <img
                        src={tool.gambar}
                        alt={tool.nama}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {tool.nama}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {tool.ket}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Expertise</span>
                      <span className="text-gray-400">
                        {tool.expertise || `${85 + (index % 3) * 5}%`}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width:
                            hoveredTool === tool.id
                              ? tool.expertise || `${85 + (index % 3) * 5}%`
                              : "0%",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl transition-opacity duration-300 ${
                      hoveredTool === tool.id ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Sparkles */}
                {hoveredTool === tool.id && (
                  <>
                    <div className="absolute top-2 left-2 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
                    <div className="absolute bottom-4 left-8 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-2000"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Always Learning
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Teknologi terus berkembang, dan saya selalu bersemangat untuk
              mempelajari tools baru yang dapat meningkatkan kualitas dan
              efisiensi dalam pengembangan.
              <span className="text-indigo-400"> Typescript</span>,
              <span className="text-purple-400"> Nest JS</span> dan
              <span className="text-pink-400"> AI Integration</span> adalah
              beberapa yang sedang saya dalami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
