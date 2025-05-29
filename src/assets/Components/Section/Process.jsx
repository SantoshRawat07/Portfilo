import React, { useEffect, useRef} from 'react';
import gsap from 'gsap';
const Process = ({ number, tag, title, description, image }) => {

    const headingRef = useRef(null);
    useEffect(() => {
      const node = headingRef.current;
      if (!node) return;
      let hasAnimated = false;
  
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              gsap.fromTo(
                node,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
              );
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }, []);

  return (
   
 <section className="w-full flex flex-col lg:flex-row -mb-[20px]">
  {/* Left: Image */}
  <div className="w-full lg:w-2/5 h-64 lg:h-[600px]">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right: Text */}
  <div className="w-full lg:w-3/5 h-auto lg:h-[600px] bg-gray-200 flex flex-col justify-center px-6 md:px-12">
    <h1 ref={headingRef} className="text-8xl font-extrabold text-black mb-[150px]">{number}</h1>
    <p className="italic text-gray-500 -mt-[100px]">({tag})</p>
    <h2 className="text-4xl font-bold text-gray-900 mb-[20px]">{title}</h2>
    <p className="text-gray-700 text-2xl md:text-base">{description}</p>
  </div>
</section>


  );
};

export default Process;
