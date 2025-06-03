import React from "react";

const ThreeSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-100 to-pink-100 min-h-screen flex flex-col justify-between">
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Crafting Creative <br /> Digital Experience
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We help businesses grow with design and technology.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Image + Cards */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <img
            src="./images/transparanvns.png" // kendi resmini buraya koy
            alt="Hero"
            className="w-full max-w-sm mx-auto rounded-xl shadow-xl"
          />

          {/* Floating Cards */}
          <div className="absolute top-100 left-1/2 transform -translate-x-60 bg-white rounded-xl shadow-lg px-4 py-2">
            <p className="text-sm text-gray-800">UI Design</p>
          </div>
          <div className="absolute bottom-10 right-0 bg-white rounded-xl shadow-lg px-4 py-2">
            <p className="text-sm text-gray-800">User Research</p>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-indigo-500 text-white py-10 mt-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold mb-1">UX Strategy</h3>
            <p className="text-sm">Plan smart user flows</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🛠️</div>
            <h3 className="font-bold mb-1">Development</h3>
            <p className="text-sm">Build scalable apps</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-bold mb-1">Design Systems</h3>
            <p className="text-sm">Reusable UI components</p>
          </div>
          <div>
            <div className="text-3xl mb-2">📊</div>
            <h3 className="font-bold mb-1">Analytics</h3>
            <p className="text-sm">Track and optimize</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeSection;
