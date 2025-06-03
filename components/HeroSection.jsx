import React from "react";

const HeroSection = () => {
  return (
     <>
<section className="relative bg-gray-100 overflow-hidden" >
      {/* Arka Plan JJ */}
      <div className="absolute text-[20rem] font-extrabold text-gray-300 opacity-20 select-none -top-10 -right-0">
        venüs
      </div>

      {/* İçerik */}
      <div className="container mx-auto px-4 py-40 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex justify-center mb-8 md:mb-0">
          <img
            src="./images/transparanvns.png"
            alt="vns"
            className="rounded-lg max-w-xs md:max-w-sm"
    
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Hello my name is <br />
            <span className="text-indigo-600">Jessy Jane</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Hakkımda
          </button>
        </div>
      </div>

      {/* Bombeli Alt SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        {/* <svg
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z"
            className="fill-white"
          />
         
        </svg> */}
  {/* <svg
  viewBox="0 0 1440 320"
  className="w-full h-40"
  preserveAspectRatio="none"
>
  <path
    d="M0,0 L0,100 Q720,0 1440,100 L1440,0 Z"
    className="fill-white"
  />
</svg> */}
<svg viewBox="0 0 1440 320" className="w-full h-40" preserveAspectRatio="none">
  <path
    d="M0,0 L0,100 Q720,-100 1440,100 L1440,0 Z"
    className="fill-white"
  />
</svg>

      </div>
    </section>
 {/* CSS kısmı */}
      <style>
        {`
       section.relative.bg-gray-100.overflow-hidden {
          height: 60vh !important;
        }
          .vnsimg{
          width:25vw;
          height:auto;
          }
        `}
      </style>
    </>
  );
};

export default HeroSection;
