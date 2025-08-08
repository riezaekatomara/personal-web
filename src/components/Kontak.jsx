import { useState, useEffect } from "react";
import { useScrollReveal, useMagneticEffect } from "../hooks/useScrollReveal";

function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState(null);
  const [contactRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [formRef, formMagnetic] = useMagneticEffect(0.1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nama.trim()) {
      newErrors.nama = "Nama lengkap wajib diisi";
    } else if (formData.nama.trim().length < 2) {
      newErrors.nama = "Nama minimal 2 karakter";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.pesan.trim()) {
      newErrors.pesan = "Pesan wajib diisi";
    } else if (formData.pesan.trim().length < 10) {
      newErrors.pesan = "Pesan minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In real implementation, you would submit to your endpoint
      setSubmitStatus("success");
      setFormData({ nama: "", email: "", pesan: "" });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "riezaekatomara@gmail.com",
      detail: "Response dalam 24 jam",
      action: "Send Email",
      href: "mailto:riezaekatomara@gmail.com",
      color: "from-blue-600 to-cyan-600",
      hoverColor: "hover:from-blue-500 hover:to-cyan-500",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick response guaranteed",
      detail: "Online 09:00 - 18:00 WIB",
      action: "Chat Now",
      href: "#",
      color: "from-green-600 to-emerald-600",
      hoverColor: "hover:from-green-500 hover:to-emerald-500",
    },
    {
      icon: "📅",
      title: "Schedule Call",
      description: "Book a consultation",
      detail: "30 menit gratis konsultasi",
      action: "Book Now",
      href: "#",
      color: "from-purple-600 to-violet-600",
      hoverColor: "hover:from-purple-500 hover:to-violet-500",
    },
  ];

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${
      mousePosition.y * 0.02
    }px)`,
  };

  return (
    <div
      ref={contactRef}
      className="kontak py-20 relative overflow-hidden"
      id="kontak"
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
          ...parallaxStyle,
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
              <span className="text-xs">✨</span>
            </div>
            <span className="text-sm text-gray-300">Mari Berkolaborasi</span>
          </div>

          <h1
            className={`text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h1>

          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            Punya ide proyek menarik? Mari diskusikan bagaimana kita bisa
            mewujudkannya bersama.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Methods - Left Side */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm">🚀</span>
                </div>
                Hubungi Saya
              </h2>

              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-gradient-to-br ${method.color} rounded-2xl ${method.hoverColor} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/25`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-2xl"></div>

                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white mb-1 group-hover:text-yellow-100 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-white/90 text-sm mb-1">
                        {method.description}
                      </p>
                      <p className="text-white/70 text-xs mb-4">
                        {method.detail}
                      </p>
                      <a
                        href={method.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        {method.action}
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">●</span>
                Available Now
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  <span>Palembang, Indonesia (Remote Friendly)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>⏰</span>
                  <span>Response time: &lt; 4 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>💼</span>
                  <span>Open for freelance & full-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div ref={formRef} style={formMagnetic} className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl filter blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              {/* Form Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">💌</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Send Message
                  </h2>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-400 font-medium">
                          Pesan Terkirim!
                        </p>
                        <p className="text-green-300 text-sm">
                          Terima kasih, saya akan membalas segera.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-400 font-medium">
                          Gagal Mengirim
                        </p>
                        <p className="text-red-300 text-sm">
                          Silakan coba lagi atau hubungi via email.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Nama Lengkap <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("nama")}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-2xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400/50 ${
                          errors.nama
                            ? "border-red-400/50 focus:ring-red-500/50"
                            : activeField === "nama"
                            ? "border-indigo-400/50"
                            : "border-white/10 hover:border-white/20"
                        }`}
                        placeholder="Masukkan nama lengkap Anda"
                      />
                      {activeField === "nama" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl -z-10"></div>
                      )}
                    </div>
                    {errors.nama && (
                      <p className="text-red-400 text-sm flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {errors.nama}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-2xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400/50 ${
                          errors.email
                            ? "border-red-400/50 focus:ring-red-500/50"
                            : activeField === "email"
                            ? "border-indigo-400/50"
                            : "border-white/10 hover:border-white/20"
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {activeField === "email" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl -z-10"></div>
                      )}
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Pesan <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("pesan")}
                        onBlur={() => setActiveField(null)}
                        rows={5}
                        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border rounded-2xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400/50 resize-none ${
                          errors.pesan
                            ? "border-red-400/50 focus:ring-red-500/50"
                            : activeField === "pesan"
                            ? "border-indigo-400/50"
                            : "border-white/10 hover:border-white/20"
                        }`}
                        placeholder="Ceritakan tentang proyek Anda atau hal yang ingin didiskusikan..."
                      />
                      {activeField === "pesan" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl -z-10"></div>
                      )}
                    </div>
                    {errors.pesan && (
                      <p className="text-red-400 text-sm flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {errors.pesan}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-semibold text-white overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Pesan
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
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>

                {/* Form Footer */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-center text-sm text-gray-400">
                    Dengan mengirim pesan, Anda setuju dengan{" "}
                    <a
                      href="#"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      kebijakan privasi
                    </a>{" "}
                    saya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontak;
