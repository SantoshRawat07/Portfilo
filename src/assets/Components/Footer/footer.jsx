import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Footer = () => {
  
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
    <div className="bg-black text-white font-sans min-h-screen mb-4">
      {/* Logo */}
 <div className="text-white text-left pt-10 ml-10">
  <h1 ref={headingRef} className="lg:text-[10rem] md:text-[5rem] md:-ml-[20px] lg:font-extrabold md:font-extrabold leading-none">
    KAYO
    <span className="align-center lg:text-[6rem] md:text-[4rem]">©</span>
  </h1>
</div>


      {/* Navigation Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 pt-10 pb-20 text-white text-base justify-space-between">
        {/* Pages */}
        <div>
          <p className="italic text-gray-300">(Pages)</p>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* CMS */}
        <div>
          <p className="italic text-gray-300">(CMS)</p>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><a href="#">Work</a></li>
            <li><a href="#">Work Single</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Blog Single</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <p className="italic text-gray-300">(Utility Pages)</p>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><a href="#">404</a></li>
            <li><a href="#">Password Page</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Licensing</a></li>
            <li><a href="#">Styleguide</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="italic text-gray-300">(Socials)</p>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">Dribbble</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
    <div className="text-center mt-10 md:mt-10 mb-5 lg:text-4xl md:text-2xl">
  <p className="text-4xl md:text-2xl">Made by Gola Templates</p>
</div>

    </div>
  );
};

export default Footer;
