import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#beranda", label: "Beranda", icon: "🏠" },
    { href: "#tentang", label: "Tentang", icon: "👨‍💻" },
    { href: "#proyek", label: "Proyek", icon: "💼" },
    { href: "#kontak", label: "Kontak", icon: "📧" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="lg:flex hidden group cursor-pointer">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300">
                Rieza Eka Tomara
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                    activeSection === item.href.slice(1)
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveSection(item.href.slice(1))}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Action Menu */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex md:hidden items-center gap-2 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-full p-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative p-3 rounded-full transition-all duration-300 group ${
                activeSection === item.href.slice(1)
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
              title={item.label}
              onClick={() => setActiveSection(item.href.slice(1))}
            >
              <span className="text-lg">{item.icon}</span>

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
