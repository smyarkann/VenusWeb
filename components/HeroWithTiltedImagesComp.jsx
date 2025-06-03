// import React from "react";

// const images = [
//   { src: "./images/vns3.jpeg", rotate: "-rotate-6" },
//   { src: "./images/vns3.jpeg", rotate: "-rotate-3" },
//   { src: "./images/vns2.jpeg", rotate: "rotate-2" },
//   { src: "./images/vns2.jpeg", rotate: "rotate-3" },
//   { src: "./images/vns3.jpeg", rotate: "rotate-6" },
// ];

// const HeroWithTiltedImagesComp = () => {
//   return (
//     <div className="bg-white text-center px-4 py-16">
//       <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//         A place to display your <br /> masterpiece
//       </h1>
//       <div className="flex justify-center items-end gap-2 md:gap-6 mt-8 flex-wrap">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img.src}
//             alt={`img-${index}`}
//             className={`w-28 h-28 md:w-48 md:h-48 object-cover rounded-xl shadow-xl ${img.rotate}`}
//           />
//         ))}
//       </div>

//       <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
//         Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them.
//       </p>

//       <div className="mt-6 flex justify-center gap-4">
//         <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
//           Contact Me
//         </button>
//         <button className="px-5 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition">
//           Discover Our Work
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroWithTiltedImagesComp;



import React from "react";

const images = [
  { src: "./images/vns3.jpeg", rotate: "-rotate-6" },
  { src: "./images/vns2.jpeg", rotate: "-rotate-3" },
  { src: "./images/vns3.jpeg", rotate: "rotate-2" },
  { src: "./images/vns2.jpeg", rotate: "rotate-3" },
  { src: "./images/vns3.jpeg", rotate: "rotate-6" },
];

const HeroWithOverlappingHoverImages = () => {
  return (
    <div className="bg-white text-center px-4 py-16 overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        A place to display your <br /> masterpiece
      </h1>

      <div className="flex justify-center items-end -space-x-12 mt-12 flex-wrap">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative z-10 transition-transform transform hover:scale-110 hover:z-50 duration-300 ${img.rotate}`}
          >
            <img
              src={img.src}
              alt={`img-${index}`}
              className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-xl shadow-xl"
            />
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-600 max-w-2xl mx-auto">
        Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Contact Me
        </button>
        <button className="px-5 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition">
          Discover Our Work
        </button>
      </div>
    </div>
  );
};

export default HeroWithOverlappingHoverImages;

