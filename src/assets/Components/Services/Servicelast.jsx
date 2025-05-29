import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import phone from './../../Image/phone.webp';

const Servicelast = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="w-full h-[400px] md:h-[690px]">
          <img src={phone} alt="Book" className="w-full h-full object-cover" />
        </div>

        <div className="bg-gray-200 text-black p-6 md:p-8">
          <div className="max-w-xl" ref={textContainerRef}>
            <h1 className="gsap-animate text-5xl md:text-6xl lg:text-9xl font-extrabold leading-tight">
              UI/UX<br />DESIGN
            </h1>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              User experience through intuitive
            </p>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              and user-centered design
            </p>
            <p className="gsap-animate text-xl md:text-2xl lg:text-4xl font-medium mt-4">
              and solutions.
            </p>
            <p className="gsap-animate italic text-gray-500 mt-6 text-sm md:text-base">
              (UI/UX Services)
            </p>
            <div className="grid grid-cols-2 mt-6 font-semibold text-sm md:text-base lg:text-lg">
              <div className="space-y-2">
                <div className="gsap-animate">User research</div>
                <div className="gsap-animate">Wireframing</div>
              </div>
              <div className="space-y-2 text-right">
                <div className="gsap-animate">Usability test</div>
                <div className="gsap-animate">UI/UX Audits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicelast;