import React from "react";
import data from "./data.json";

const ImageGridComp = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-12">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-8`}
        >
          {/* Görsel */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/2 object-cover aspect-square rounded-lg shadow"
          />

          {/* Yazı alanı */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <p className="text-sm text-gray-500 mb-2">{item.category}</p>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGridComp;
