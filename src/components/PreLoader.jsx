import { useState, useEffect } from "react";

function PreLoader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [particlesVisible, setParticlesVisible] = useState(false);

  const loadingTexts = [
    "Initializing workspace...",
    "Loading creative assets...",
    "Preparing portfolio...",
    "Optimizing experience...",
    "Almost ready...",
    "Welcome to my world! ✨",
  ];

  const techStack = [
    {
      name: "React",
      color: "from-blue-400 to-cyan-500",
      icon: "⚛️",
    },
    {
      name: "Tailwind",
      color: "from-cyan-400 to-teal-500",
      icon: "🎨",
    },
    {
      name: "JavaScript",
      color: "from-yellow-400 to-orange-500",
      icon: "⚡",
    },
    {
      name: "Vite",
      color: "from-purple-400 to-violet-500",
      icon: "⭐",
    },
    {
      name: "Node",
      color: "from-green-400 to-emerald-500",
      icon: "🚀",
    },
  ];

  const features = [
    "Modern UI/UX",
    "Responsive Design",
    "Smooth Animations",
    "Clean Code",
    "Fast Performance",
  ];

  useEffect(() => {
    // Show particles after initial delay
    const particleTimer = setTimeout(() => {
      setParticlesVisible(true);
    }, 1000);

    // Simulate realistic loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Start fade out animation
          setTimeout(() => {
            setFadeOut(true);
          }, 800);
          // Complete loading and notify parent
          setTimeout(() => {
            onLoadingComplete();
          }, 1300);
          return 100;
        }

        // More realistic loading curve
        let increment;
        if (prev < 20) increment = Math.random() * 8 + 2;
        else if (prev < 50) increment = Math.random() * 6 + 1;
        else if (prev < 80) increment = Math.random() * 4 + 0.5;
        else increment = Math.random() * 2 + 0.2;

        return Math.min(prev + increment, 100);
      });
    }, 120);

    // Change text based on progress
    const textInterval = setInterval(() => {
      setCurrentText((prev) => {
        const newIndex = (prev + 1) % loadingTexts.length;
        return newIndex;
      });
    }, 800);

    // Show skip button after 3 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(particleTimer);
      clearTimeout(skipTimer);
    };
  }, [onLoadingComplete]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => onLoadingComplete(), 500);
  };

  const progressPercentage = Math.round(progress);
  const currentLoadingText = loadingTexts[currentText] || loadingTexts[0];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 transition-all duration-1000 ${
        fadeOut ? "opacity-0 scale-110 blur-sm" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full filter blur-2xl animate-pulse animation-delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Floating Particles */}
      {particlesVisible && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-float"
              style={{
                left: `${10 + i * 7}%`,
                top: `${20 + i * 5}%`,
                animationDelay: `${i * 400}ms`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Main Loading Spinner */}
        <div className="relative mb-12">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-800/50"></div>

            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 60}`}
                strokeDashoffset={`${2 * Math.PI * 60 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Content */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                {progressPercentage}%
              </div>
              <div className="text-xs text-gray-400">Loading...</div>
            </div>

            {/* Orbit Elements */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "8s" }}
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                  style={{
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-800/50 backdrop-blur-sm rounded-full h-2 overflow-hidden mb-4 border border-gray-700/50">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out rounded-full relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Initializing Portfolio</span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              {progressPercentage}% Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
