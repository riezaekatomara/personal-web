import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import DataImage from "../data/data";

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${
      mousePosition.y * 0.01
    }px)`,
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "15px 15px sm:20px sm:20px",
          }}
        ></div>
      </div>

      {/* Floating Orbs - Responsif Diperbaiki */}
      <div className="absolute top-2 left-2 xs:top-4 xs:left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 lg:top-20 lg:left-20 w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-72 lg:h-72 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full filter blur-2xl sm:blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-2 right-2 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 lg:bottom-20 lg:right-20 w-24 h-24 xs:w-28 xs:h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full filter blur-2xl sm:blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-8 items-center py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 min-h-[calc(100vh-2rem)] xs:min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)]">
          {/* Content Section */}
          <div
            className={`lg:col-span-7 space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {/* Badge - Responsif Diperbaiki */}
            <div className="relative flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 lg:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-2.5 xs:px-3 sm:px-3.5 md:px-4 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-3 bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-6 lg:bottom-6 group hover:bg-white/10 transition-all duration-300 mx-auto lg:mx-0 w-fit">
              <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-md sm:rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <span className="text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm font-bold text-white">
                  RET
                </span>
              </div>
              <span className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base text-gray-300 group-hover:text-white transition-colors flex items-center gap-1">
                <span>"Kode yang indah, lahir dari ketekunan"</span>
                <Sparkles className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 text-yellow-400 flex-shrink-0" />
              </span>
            </div>

            {/* Main Heading - Responsif Diperbaiki */}
            <div className="relative space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-6 lg:bottom-6">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent block">
                  Hi, Saya
                </span>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse block mt-0.5 xs:mt-1 sm:mt-1.5 md:mt-2 lg:mt-2">
                  Rieza Eka Tomara
                </span>
              </h1>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg text-gray-400 leading-relaxed max-w-full lg:max-w-xl mx-auto lg:mx-0 px-2 xs:px-4 sm:px-0">
                Fullstack Developer yang passionate dalam menciptakan
                <span className="text-indigo-400 font-semibold">
                  {" "}
                  pengalaman digital
                </span>{" "}
                yang memukau dan fungsional.
              </p>
            </div>

            {/* CTA Buttons - Responsif Diperbaiki */}
            <div className="relative flex flex-col xs:flex-col sm:flex-row gap-2.5 xs:gap-3 sm:gap-3.5 md:gap-4 lg:gap-4 justify-center lg:justify-start bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-6 lg:bottom-6 px-2 xs:px-4 sm:px-0">
              <button className="group relative px-3.5 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-xl lg:rounded-2xl font-semibold text-white text-xs xs:text-sm sm:text-base md:text-base lg:text-base overflow-hidden hover:shadow-xl xs:hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 xs:hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center gap-1.5 xs:gap-2">
                  Download CV
                  <svg
                    className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 group-hover:translate-y-0.5 xs:group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
              </button>

              <button className="group px-3.5 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-xl lg:rounded-2xl font-semibold text-white text-xs xs:text-sm sm:text-base md:text-base lg:text-base hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 xs:hover:-translate-y-1">
                <span className="flex items-center justify-center gap-1.5 xs:gap-2">
                  Lihat Proyek
                  <svg
                    className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 group-hover:translate-x-0.5 xs:group-hover:translate-x-1 transition-transform"
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
              </button>
            </div>

            {/* Stats - Responsif Diperbaiki */}
            <div className="relative flex items-center justify-center lg:justify-start gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 pt-3 xs:pt-4 sm:pt-5 md:pt-6 lg:pt-6 bottom-8 xs:bottom-10 sm:bottom-12 md:bottom-12 lg:bottom-12">
              <div className="text-center">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm text-gray-400 whitespace-nowrap mt-0.5">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm text-gray-400 whitespace-nowrap mt-0.5">
                  Projects Done
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm text-gray-400 whitespace-nowrap mt-0.5">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Responsif Diperbaiki */}
          <div
            className={`lg:col-span-5 relative order-first lg:order-last transform transition-all duration-1000 delay-300 bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-6 lg:bottom-6 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div className="relative group" style={parallaxStyle}>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl filter blur-lg xs:blur-xl sm:blur-xl md:blur-xl lg:blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl p-2 xs:p-3 sm:p-3.5 md:p-4 lg:p-6 border border-white/10 group-hover:border-indigo-500/30 transition-all duration-500 mx-auto max-w-xs xs:max-w-sm sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg">
                {/* Profile Image with Container */}
                <div className="w-full aspect-square relative">
                  {/* Photo with rounded corners */}
                  <div className="w-full h-full overflow-hidden rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl">
                    <img
                      src={DataImage.HeroImage}
                      alt="Foto Rieza"
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating decorative elements */}
                  <div
                    className="absolute -top-1.5 -right-1.5 xs:-top-2 xs:-right-2 sm:-top-2.5 sm:-right-2.5 md:-top-3 md:-right-3 lg:-top-3 lg:-right-3 w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute -bottom-1.5 -left-1.5 xs:-bottom-2 xs:-left-2 sm:-bottom-2.5 sm:-left-2.5 md:-bottom-3 md:-left-3 lg:-bottom-3 lg:-left-3 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl border border-white/5 pointer-events-none"></div>
              </div>

              {/* Additional floating elements - Tersembunyi di mobile dan tablet kecil */}
              <div className="hidden md:hidden lg:block absolute -z-10">
                <div
                  className="absolute top-10 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-sm opacity-60 animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                  className="absolute bottom-16 -right-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full filter blur-sm opacity-60 animate-pulse"
                  style={{ animationDelay: "2.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hanya tampil di desktop */}
      <div className="absolute bottom-6 xs:bottom-8 sm:bottom-8 md:bottom-8 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-gray-400 group cursor-pointer">
          <span className="text-sm group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center group-hover:border-white transition-colors">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        /* Custom breakpoints untuk xs */
        @media (min-width: 375px) {
          .xs\:text-xs {
            font-size: 0.75rem;
          }
          .xs\:text-sm {
            font-size: 0.875rem;
          }
          .xs\:text-base {
            font-size: 1rem;
          }
          .xs\:text-lg {
            font-size: 1.125rem;
          }
          .xs\:text-xl {
            font-size: 1.25rem;
          }
          .xs\:text-2xl {
            font-size: 1.5rem;
          }
          .xs\:text-3xl {
            font-size: 1.875rem;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroSection;
