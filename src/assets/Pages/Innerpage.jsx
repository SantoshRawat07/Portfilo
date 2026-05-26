import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import cardData from "../Components/Data/CardData";
import Footer from "../Components/Footer/footer";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";

const ProjectPage = () => {
  const { id } = useParams();
  const data = cardData[id];
  const [circleOffsets, setCircleOffsets] = useState({});
  const circleRef = useRef(null);
  const imageRef = useRef(null);
  
  if (!data) return <div>Project not found.</div>;

  // Hover circle animation
  useEffect(() => {
    const wrapper = imageRef.current;
    if (!wrapper) return;

    const showCircle = () => {
      if (window.innerWidth >= 1024 && circleRef.current) {
        gsap.fromTo(
          circleRef.current,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
        );
      }
    };

    const hideCircle = () => {
      if (window.innerWidth >= 1024 && circleRef.current) {
        gsap.to(circleRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    };

    wrapper.addEventListener('mouseenter', showCircle);
    wrapper.addEventListener('mouseleave', hideCircle);

    return () => {
      wrapper.removeEventListener('mouseenter', showCircle);
      wrapper.removeEventListener('mouseleave', hideCircle);
    };
  }, []);

  // Handler for mouse movement
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const clamp = (val) => Math.max(-10, Math.min(10, val));
    setCircleOffsets({
      x: clamp(x),
      y: clamp(y)
    });
  };

  // Reset offset on mouse leave
  const handleMouseLeave = () => {
    setCircleOffsets({
      x: 0,
      y: 0
    });
  };

  // Open live preview
  const handleLivePreview = () => {
    window.open(data.livePreviewLink, '_blank');
  };

  // Open view code
  const handleViewCode = () => {
    window.open(data.viewCodeLink, '_blank');
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

        {/* Top Image with Hover Circle */}
        <div
          ref={imageRef}
          className="relative image-wrapper group w-full h-96 md:h-[500px] lg:h-[600px] mt-6 overflow-hidden rounded-2xl"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={data.topImage} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-90" 
            alt={data.title} 
          />
          
          {/* Hover Circle */}
          <div
            ref={circleRef}
            className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center 
              w-[50px] h-[50px] rounded-full bg-black text-white text-2xl z-30 
              pointer-events-none opacity-0"
            style={{
              transform: `translate(-50%, -50%) translate(${circleOffsets.x || 0}px, ${circleOffsets.y || 0}px)`
            }}
          >
            <FiArrowUpRight />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold">{data.descriptionHeading}</h2>
            
            {/* Buttons below descriptionHeading */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={handleLivePreview}
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-black text-white font-semibold rounded-lg 
                overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 
                shadow-lg hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  Live Preview
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -z-10"></div>
              </button>

              <button 
                onClick={handleViewCode}
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-black hover:text-white font-semibold rounded-lg 
                border-2 border-black overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95
                shadow-lg hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  View Code
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gray-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -z-10"></div>
              </button>
            </div>
          </div>
          <div className="lg:-ml-[150px]">
            <h2 className="text-3xl font-bold">{data.subheading}</h2>
            <div className="overflow-y-auto max-h-96 whitespace-pre-line mt-4">{data.description}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;