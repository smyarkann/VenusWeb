import React from "react";

const TwoSection = () => {
  return (
    <>
 <section className="min-h-screen flex items-center justify-center bg-white px-6 md:px-16 py-20">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Sol taraf (Metinler) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-red-600">Hello,</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-2">
            I Am ProLife Web <br />
            Developer & Designel
          </h2>
          <p className="mt-4 text-pink-600 font-medium">
            GitHub Developer / UX/UI Designer / Freelancer
          </p>
          <p className="mt-4 text-blue-900 leading-relaxed">
            I am working in various types of organizations, including large
            corporations and governments, small and medium-sized companies,
            or alone as freelancers.
          </p>
          <p className="mt-4 text-gray-600">
            I'm available for remote work – if you would like to build your own
            something together,{" "}
            <a href="#contact" className="text-pink-600 font-semibold underline">
              Get In Touch?
            </a>
          </p>
        </div>

        {/* Sağ taraf (Görsel Kümesi) */}
        <div className="flex-1 relative flex items-center justify-center min-h-[350px]">
          {/* Büyük daire */}
          <img
            src="./images/vns.jpg"
            alt="Man working"
            className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg mt-40 -left-10 z-10"
          />
          {/* Sağ üst daire */}
          <img
            src="./images/vns2.jpeg"
            alt="Confused woman"
            className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-lg absolute -top-40 right-0 z-20"
          />
          {/* Sol üst küçük daire */}
          <img
            src="./images/vns3.jpeg"
            alt="Code on laptop"
            className="w-50 h-50 rounded-full object-cover border-4 border-white shadow-lg absolute -top-10 left-0 z-30"
          />
        </div>
      </div>
    </section>
    {/* CSS kısmı */}
      <style>
        {`
      
         
        `}
      </style>
    </>
  );
};

export default TwoSection;
