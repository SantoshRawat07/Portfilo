import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

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
    LET'S TALK
    <span className="align-center lg:text-[6rem] md:text-[4rem]">©</span>
  </h1>
</div>

      {/* Navigation Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 pt-10 pb-20 text-white text-base justify-space-between">
        {/* Pages */}
        <div>
          <p className="italic text-gray-300">(Pages)</p>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/letstalk">Contact</Link></li>
          </ul>
        </div>

        {/* CMS */}
        <div>
          <p className="italic text-gray-300">(CMS)</p>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/work/1">Work Single</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/blog/1">Blog Single</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <p className="italic text-gray-300">(Services)</p>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><Link to="/service">Creative website</Link></li>
            <li><Link to="/service">App development</Link></li>
            <li><Link to="/service">SEO</Link></li>
            <li><Link to="/service">Digital Marketing</Link></li>
            <li><Link to="/404">404</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="italic text-gray-300">(Socials)</p>
          <ul className="mt-2 space-y-2 font-semibold">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
          </ul>
        </div>
      </div>
    <div className="text-center mt-10 md:mt-10 mb-5 lg:text-4xl md:text-2xl">
  <p className="text-4xl md:text-2xl">Copyright © 2026 Santosh Rawat. All rights reserved.</p>
</div>

    </div>
  );
};

export default Footer;