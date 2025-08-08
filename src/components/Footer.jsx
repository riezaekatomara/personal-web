import { useState, useEffect } from "react";
import { useMagneticEffect, useScrollReveal } from "../hooks/useScrollReveal";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [footerRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const [logoRef, logoMagnetic] = useMagneticEffect(0.2);
  const [githubRef, githubMagnetic] = useMagneticEffect(0.3);
  const [instagramRef, instagramMagnetic] = useMagneticEffect(0.3);
  const [redditRef, redditMagnetic] = useMagneticEffect(0.3);
  const [youtubeRef, youtubeMagnetic] = useMagneticEffect(0.3);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      icon: "ri-github-fill",
      href: "#",
      label: "GitHub",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-500 hover:to-gray-700",
      ref: githubRef,
      magnetic: githubMagnetic,
    },
    {
      icon: "ri-instagram-fill",
      href: "#",
      label: "Instagram",
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:from-pink-500 hover:to-purple-500",
      ref: instagramRef,
      magnetic: instagramMagnetic,
    },
    {
      icon: "ri-reddit-fill",
      href: "#",
      label: "Reddit",
      color: "from-orange-600 to-red-600",
      hoverColor: "hover:from-orange-500 hover:to-red-500",
      ref: redditRef,
      magnetic: redditMagnetic,
    },
    {
      icon: "ri-youtube-fill",
      href: "#",
      label: "YouTube",
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-500 hover:to-red-600",
      ref: youtubeRef,
      magnetic: youtubeMagnetic,
    },
  ];

  const navigationLinks = [
    { href: "#beranda", label: "Beranda", description: "Halaman utama" },
    { href: "#tentang", label: "Tentang", description: "Profil saya" },
    { href: "#proyek", label: "Proyek", description: "Portfolio karya" },
    { href: "#kontak", label: "Kontak", description: "Hubungi saya" },
  ];

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${
      mousePosition.y * 0.01
    }px)`,
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
      <div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"
        style={parallaxStyle}
      ></div>
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
        style={{
          ...parallaxStyle,
          transform: `translate(${mousePosition.x * -0.01}px, ${
            mousePosition.y * -0.01
          }px)`,
        }}
      ></div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Top Section */}
        <div
          className={`grid lg:grid-cols-3 gap-12 items-start mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Brand Section */}
          <div className="space-y-6">
            <div
              ref={logoRef}
              style={logoMagnetic}
              className="group cursor-pointer"
            >
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">
                  Rieza Eka Tomara
                </span>
              </h1>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Fullstack Developer yang passionate menciptakan pengalaman digital
              yang
              <span className="text-indigo-400 font-medium"> memukau</span> dan
              <span className="text-purple-400 font-medium"> fungsional</span>.
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-400 text-sm font-medium">
                Available for Projects
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🧭</span>
              </div>
              Navigasi
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                        {link.label}
                      </h4>
                      <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
                        {link.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🚀</span>
              </div>
              Connect
            </h3>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  ref={social.ref}
                  style={social.magnetic}
                  href={social.href}
                  className={`group relative p-4 bg-gradient-to-br ${social.color} rounded-xl ${social.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                  title={social.label}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <i
                      className={`${social.icon} text-2xl text-white group-hover:scale-110 transition-transform duration-300`}
                    ></i>
                    <span className="text-white text-sm font-medium">
                      {social.label}
                    </span>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </a>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <span className="text-sm">riezaekatomara@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📱</span>
                </div>
                <span className="text-sm">Available for remote work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-slate-950 px-4">
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse animation-delay-1000"></div>
                <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="text-gray-400 text-sm">
            © {currentYear} Rieza Eka Tomara. Made with{" "}
            <span className="text-red-500 animate-pulse">♥</span> and lots of{" "}
            <span className="text-yellow-500">☕</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Built with React & Tailwind
            </span>
            <span>•</span>
            <span>Hosted on Vercel</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-xl hover:shadow-indigo-500/25 transform hover:scale-110 transition-all duration-300 group"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
