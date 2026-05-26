import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import book from './../../Image/book.webp';

const Service = () => {
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
              opacity: 0,
              duration: 1.2,
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
      <div className="project mb-20 px-4 md:px-16 lg:px-32">
        <h1 className="gsap-animate font-extrabold uppercase text-[40px] md:text-[80px] lg:text-[150px] xl:text-[200px] leading-none mt-10 mb-8 md:mb-4 lg:mb-2">
          Services
        </h1>
        <div className="space-y-2 md:space-y-2 lg:space-y-1">
          <p className="gsap-animate font-semibold text-[20px] md:text-[36px] lg:text-[60px]">
            Discover our tailored services
          </p>
          <p className="gsap-animate font-semibold text-[20px] md:text-[36px] lg:text-[60px] lg:-mt-10">
            designed to elevate your brand.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="w-full h-[400px] md:h-[690px]">
          <img src={book} alt="Book" className="w-full h-full object-cover" />
        </div>

        <div className="bg-gray-200 text-black p-6 md:p-8">
          <div className="max-w-xl" ref={textContainerRef}>
            <h1 className="gsap-animate text-5xl md:text-6xl lg:text-9xl font-extrabold leading-tight">
              BRAND<br />STRATEGY
            </h1>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              Crafting impactful brands and
            </p>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              and websites that drive growth
            </p>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              and success.
            </p>
            <p className="gsap-animate italic text-gray-500 mt-6 text-sm md:text-base">
              (Branding Services)
            </p>
            <div className="grid grid-cols-2 mt-6 font-semibold text-sm md:text-base lg:text-lg">
              <div className="space-y-2">
                <div className="gsap-animate">Brand Discovery</div>
                <div className="gsap-animate">Brand Identity</div>
              </div>
              <div className="space-y-2 text-right">
                <div className="gsap-animate">Customer Satisfaction</div>
                <div className="gsap-animate">Brand Promotions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;