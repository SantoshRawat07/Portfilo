import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardData from "../Components/Data/CardData";
import Footer from "../Components/Footer/footer";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectPage = () => {
  const { id } = useParams();
  const data = cardData[id];

  // Add this state for the circle movement
  const [circleOffsets, setCircleOffsets] = useState({});

  if (!data) return <div>Project not found.</div>;

  // Handler for mouse movement
  const handleMouseMove = (idx, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Clamp to 10px radius
    const clamp = (val) => Math.max(-10, Math.min(10, val));
    setCircleOffsets((prev) => ({
      ...prev,
      [idx]: { x: clamp(x), y: clamp(y) }
    }));
  };

  // Reset offset on mouse leave
  const handleMouseLeave = (idx) => {
    setCircleOffsets((prev) => ({
      ...prev,
      [idx]: { x: 0, y: 0 }
    }));
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-4xl md:text-4xl md:font-bold font-extrabold lg:text-[180px]  mt-10 py-4">{data.title}</h1>
        <p className=" text-2xl md:text-4xl lg:text-6xl lg:font-semibold mt-2">{data.subtitle}</p>
        <p className="text-2xl md:text-4xl lg:text-6xl lg:font-semibold mt-2">{data.subtitles}</p>

        <div className="flex gap-8 mt-6 text-sm">
          <div className="text-2xl"><strong>Client:</strong> {data.client}</div>
          <div className="text-2xl"><strong>Year:</strong> {data.year}</div>
          <div className="text-2xl"><strong>Services:</strong> {data.services}</div>
        </div>

        <img src={data.topImage} className="w-full mt-6 ml" alt={data.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold">{data.descriptionHeading}</h2>
          </div>
          <div className="lg:-ml-[150px]">
            <h2 className="text-3xl font-bold">{data.subheading}</h2>
            <div className="overflow-y-auto max-h-96 whitespace-pre-line mt-4">{data.description}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-[10px] lg:mt-[20px] py-10 -mb-10">
          {data.galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative group w-full h-full"
              onMouseMove={(e) => handleMouseMove(idx, e)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <img src={img} className="w-full h-auto object-cover" alt={`gallery-${idx}`} />
              {/* Black circle with arrow, visible on hover and moves with mouse */}
              <div
                className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                  bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                  group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transform: `translate(-50%, -50%) translate(${circleOffsets[idx]?.x || 0}px, ${circleOffsets[idx]?.y || 0}px)`
                }}
              >
                <FiArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;