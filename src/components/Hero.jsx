const Hero = () => {
  return (
    <section className="bg-blue-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="text-left">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Master IELTS with Expert Guidance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our comprehensive IELTS preparation platform designed by
              experienced instructors. Get personalized feedback, structured
              courses, and proven strategies to achieve your target score.
            </p>
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg
               font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Journey
            </button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative w-full h-90">
              <img
                src="/mezbam.png"
                alt="IELTS Instructor"
                className="absolute inset-0 w-full h-full object-contain
                  transform hover:scale-105 transition-transform duration-300
                  drop-shadow-2xl rounded-lg border-4 border-white/50 -mt-4"
              />

              {/* Instructor Details Overlays */}
              <div className="absolute -left-4 top-8 bg-orange-500 text-white px-6 py-3 rounded-lg transform -rotate-12 shadow-lg">
                <span className="font-bold text-2xl">IELTS 8.5</span>
              </div>

              <div className="absolute -right-2 top-1/3 bg-white/90 text-orange-500 px-6 py-3 rounded-lg transform rotate-12 shadow-lg">
                <span className="font-bold text-xl">10+ Years Experience</span>
              </div>

              <div className="absolute left-8 bottom-16 bg-orange-500/90 text-white px-6 py-3 rounded-lg transform -rotate-6 shadow-lg">
                <span className="font-bold text-xl">2000+ Students</span>
              </div>

              <div className="absolute right-4 bottom-24 bg-white/90 text-orange-500 px-6 py-3 rounded-lg transform rotate-6 shadow-lg">
                <span className="font-bold text-xl">Cambridge Certified</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -z-10 top-10 right-10 w-72 h-72
               bg-blue-200 rounded-full opacity-20 blur-2xl"
            />
            <div
              className="absolute -z-10 bottom-10 left-10 w-60 h-60
               bg-indigo-200 rounded-full opacity-20 blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
