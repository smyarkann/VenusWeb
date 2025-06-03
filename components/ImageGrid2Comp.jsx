
import React from "react";

const images = [
  { src: "./images/vns3.jpeg", span: "col-span-2 row-span-2" },
  { src: "./images/vns3.jpeg", span: "" },
  { src: "./images/vns3.jpeg", span: "" },
  { src: "./images/vns3.jpeg", span: "" },
  { src: "./images/vns3.jpeg", span: "" },

];

const ImageGrid2Comp = () => {
  return (
    <div className="p-8  flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-2 max-w-5xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden ${image.span} rounded-lg`}
          >
            <img
              src={image.src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid2Comp;
