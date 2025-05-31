import React from "react";

function BlogCard({ category, title, description, image, children }) {
  return (
    <div className="w-full">
      {/* Image Block with overlay/icon slot */}
      <div className="w-full relative group h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Black circle injected from parent */}
        {children}
      </div>
      {/* Text Section, styled like Work page */}
      <div className="w-full md:px-16 lg:px-4 py-8 bg-white">
        <p className="italic text-gray-600 mb-2 text-lg">({category})</p>
        <h3 className="text-3xl md:text-5xl lg:text-4xl uppercase font-extrabold leading-tight mb-4">{title}</h3>
        <p className="text-gray-700 text-lg md:text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default BlogCard;