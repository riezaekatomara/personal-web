import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

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
    { href: "#beranda", label: "Beranda", icon: Home },
    { href: "#tentang", label: "Tentang", icon: User },
    { href: "#proyek", label: "Proyek", icon: Briefcase },
    { href: "#kontak", label: "Kontak", icon: Mail },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between py-3 sm:py-4 md:py-5 lg:py-6">
            {/* Logo - Responsive sizing */}
            <div className="hidden lg:flex group cursor-pointer">
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300">
                Rieza Eka Tomara
              </h1>
            </div>

            {/* Logo for md screens */}
            <div className="hidden md:flex lg:hidden group cursor-pointer">
              <h1 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300">
                Rieza Eka Tomara
              </h1>
            </div>

            {/* Desktop Menu - Large screens (lg+) */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`relative px-4 xl:px-6 py-2 xl:py-3 rounded-full font-medium text-sm xl:text-base transition-all duration-300 group ${
                      activeSection === item.href.slice(1)
                        ? "text-white bg-white/10 scale-105"
                        : "text-gray-300 hover:text-white hover:scale-105"
                    }`}
                    onClick={() => setActiveSection(item.href.slice(1))}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <IconComponent size={16} className="xl:w-5 xl:h-5" />
                      {item.label}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                );
              })}
            </div>

            {/* Tablet Menu - Medium screens (md only) */}
            <div className="hidden md:flex lg:hidden items-center gap-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`relative p-2.5 rounded-full transition-all duration-300 group ${
                      activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white scale-110"
                        : "text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110"
                    }`}
                    title={item.label}
                    onClick={() => setActiveSection(item.href.slice(1))}
                  >
                    <IconComponent size={18} />

                    {/* Tooltip for tablet */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {item.label}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu - Small screens and below */}
            <div className="flex md:hidden items-center justify-center flex-1">
              <div className="flex items-center gap-1 bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-full p-1.5">
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className={`relative p-2.5 rounded-full transition-all duration-300 group ${
                        activeSection === item.href.slice(1)
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white scale-110"
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                      title={item.label}
                      onClick={() => setActiveSection(item.href.slice(1))}
                    >
                      <IconComponent size={16} />

                      {/* Tooltip for mobile */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {item.label}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-18 md:h-20 lg:h-24"></div>
    </>
  );
}

export default Navbar;
