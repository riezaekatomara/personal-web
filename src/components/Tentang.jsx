import { useState, useEffect } from "react";
import DataImage from "../data/data";

function Tentang() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("tentang");
    if (element) observer.observe(element);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    const aboutSection = document.getElementById("tentang");
    if (aboutSection) {
      aboutSection.addEventListener("mousemove", handleMouseMove);
      return () => {
        aboutSection.removeEventListener("mousemove", handleMouseMove);
        observer.disconnect();
      };
    }
  }, []);

  const parallaxStyle = {
    transform: `perspective(1000px) rotateX(${
      mousePosition.y * 2
    }deg) rotateY(${mousePosition.x * 2}deg)`,
  };

  return (
    <div className="tentang py-20 relative overflow-hidden" id="tentang">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-purple-950/20"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>

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
              <span className="text-xs">👋</span>
            </div>
            <span className="text-sm text-gray-300">Tentang Saya</span>
          </div>

          <h1
            className={`text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Passion Meets
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>

          <p
            className={`text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            Menciptakan pengalaman digital yang tidak hanya indah dipandang,
            tetapi juga bermakna dan fungsional.
          </p>
        </div>

        {/* Main Content Card */}
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
          }`}
          style={parallaxStyle}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl filter blur-xl group-hover:blur-2xl transition-all duration-500"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full filter blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full filter blur-2xl"></div>

              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center relative z-10">
                {/* Profile Image Section */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <img
                        src={DataImage.HeroImage}
                        alt="Rieza Eka Tomara"
                        className="w-32 h-32 lg:w-40 lg:h-40 rounded-xl object-cover mx-auto transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Hi, perkenalkan saya{" "}
                      <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                        Rieza Eka Tomara
                      </span>
                      , seorang{" "}
                      <span className="text-white font-semibold">
                        Fullstack Web Developer
                      </span>{" "}
                      yang passionate dalam menciptakan pengalaman digital yang
                      luar biasa.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      Saya percaya bahwa desain dan fungsionalitas harus
                      berjalan beriringan. Setiap proyek yang saya kembangkan
                      tidak hanya terlihat menarik, tetapi juga memberikan{" "}
                      <span className="text-indigo-400 font-medium">
                        pengalaman pengguna yang optimal
                      </span>
                      dan{" "}
                      <span className="text-purple-400 font-medium">
                        &nbsp;solusi bisnis yang tepat sasaran
                      </span>
                      .
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "Problem Solver",
                        "UI/UX Enthusiast",
                        "Clean Code Advocate",
                        "Innovation Driven",
                      ].map((trait, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 backdrop-blur-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                    <div className="text-center group">
                      <div className="relative">
                        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                          15+
                        </div>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          Proyek Selesai
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                      </div>
                    </div>

                    <div className="text-center group">
                      <div className="relative">
                        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                          2+
                        </div>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          Tahun Pengalaman
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                      </div>
                    </div>

                    <div className="text-center group col-span-2 lg:col-span-1">
                      <div className="relative">
                        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-2">
                          100%
                        </div>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          Client Satisfaction
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              "Code is poetry, design is art, and user experience is the
              masterpiece."
            </h3>
            <div className="flex justify-center items-center gap-4 text-gray-400">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <span className="text-sm">Rieza Eka Tomara</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tentang;
