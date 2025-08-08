import { useMagneticEffect, useParallaxMouse } from "../hooks/useScrollReveal";

function ProjectCard({
  proyek,
  index,
  isVisible,
  hoveredProject,
  setHoveredProject,
}) {
  const [cardRef, cardMagnetic] = useMagneticEffect(0.1);
  const [imageRef, imageParallax] = useParallaxMouse(0.02);

  const combinedCardStyle = {
    transitionDelay: `${800 + index * 150}ms`,
    ...cardMagnetic,
  };

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
      }`}
      style={combinedCardStyle}
      onMouseEnter={() => setHoveredProject(proyek.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl filter blur-xl transition-all duration-500 ${
          hoveredProject === proyek.id ? "opacity-100 scale-110" : "opacity-0"
        }`}
      ></div>

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 overflow-hidden group-hover:border-white/20 transition-all duration-500 transform group-hover:-translate-y-2">
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-3xl"></div>

        {/* Project Image */}
        <div
          ref={imageRef}
          className="relative mb-6 overflow-hidden rounded-2xl"
          style={imageParallax}
        >
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-500">
            {proyek.gambar ? (
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            ) : (
              <div className="text-4xl text-gray-500">🖥️</div>
            )}
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
            <div className="p-4">
              <div className="flex gap-2">
                {proyek.github && (
                  <a
                    href={proyek.github}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
                {proyek.demo && (
                  <a
                    href={proyek.demo}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
              {proyek.nama}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {proyek.ket}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {proyek.tools?.map((tool, toolIndex) => (
              <span
                key={toolIndex}
                className="px-3 py-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-full text-xs text-indigo-300 backdrop-blur-sm group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {proyek.demo && (
              <a
                href={proyek.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium text-white text-center hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Live Demo
              </a>
            )}
            {proyek.github && (
              <a
                href={proyek.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-medium text-white text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Hover Animation Lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
      </div>

      {/* Magic Sparkles */}
      {hoveredProject === proyek.id && (
        <>
          <div className="absolute top-4 left-4 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
          <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-8 left-8 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-2000"></div>
        </>
      )}
    </div>
  );
}

export default ProjectCard;
