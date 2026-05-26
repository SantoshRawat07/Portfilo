import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader = () => {
  const loaderRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(textRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out',
    });


    tl.to(loaderRef.current, {
      height: 0,
      duration: 1.5,
      delay: -0.5,
      ease: 'power3.inOut',
    }, "-=0.8");
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] overflow-hidden flex justify-end items-end"
    >
      <h1
        ref={textRef}
        className="text-white font-extrabold uppercase p-8 tracking-widest"
        style={{ fontSize: '140px' }}
      >
        SANTOSH©
      </h1>
    </div>
  );
};

export default Loader;
