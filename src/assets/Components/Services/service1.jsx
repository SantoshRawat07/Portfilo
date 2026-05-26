import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import website from './../../Image/website.jpg';

const Services = () => {
  const textContainerRef = useRef();

  useEffect(() => {
    const node = textContainerRef.current;
    if (!node) return;

    const elements = node.querySelectorAll('.gsap-animate');
    let hasAnimated = false;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            gsap.from(elements, {
              y: 100,
              delay:0.5,
              opacity: 0,
              duration: 2.2,
              ease: 'power4.out',
              stagger: 0.15,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-0 m-0 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Image first on mobile (order-1), second on md+ (order-2) */}
        <div className="order-1 md:order-2 w-full h-[400px] md:h-[690px]">
          <img src={website} alt="Book" className="w-full h-full object-cover" />
        </div>

        {/* Text second on mobile (order-2), first on md+ (order-1) */}
        <div className="order-2 md:order-1 bg-gray-200 text-black p-6 md:p-8 flex items-center">
          <div className="max-w-xl" ref={textContainerRef}>
            <h1 className="gsap-animate text-5xl md:text-6xl lg:text-9xl font-extrabold leading-tight uppercase">
              Website<br />Design
            </h1>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              Custom & responsive websites
            </p>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              that engage users and drive
            </p>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              conversions.
            </p>
            <p className="gsap-animate italic text-gray-500 mt-6 text-sm md:text-base">
              (Websites Services)
            </p>
            <div className="grid grid-cols-2 mt-6 font-semibold text-sm md:text-base lg:text-lg">
              <div className="space-y-2">
                <div className="gsap-animate">Website design</div>
                <div className="gsap-animate">Framer</div>
              </div>
              <div className="space-y-2 text-right">
                <div className="gsap-animate">Website support</div>
                <div className="gsap-animate">Webflow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;