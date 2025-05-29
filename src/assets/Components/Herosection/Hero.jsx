import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import imgnav from './../../Image/navimg.jpg';
import acme from './../../Image/acme.svg';
import kanban from './../../Image/kanba.svg';
import gold from './../../Image/gold.svg';
import circle from './../../Image/circle.svg';
import outo from './../../Image/outo.svg';
import asg from './../../Image/asg.svg';

const HeroSection = ({ setShowNavbar }) => {
  const scrollRef = useRef();
  const animatedTextRef = useRef([]);
  const lastScroll = useRef(0);
  const studioRef = useRef();
  const topTextRef = useRef();
  const imageRef = useRef();
  const [showTopText, setShowTopText] = useState(true);

  // Handle scroll for hiding top text and navbar
  const handleScroll = () => {
    // Hide top text when its bottom touches or goes above the image top (on md+)
    if (
      topTextRef.current &&
      imageRef.current &&
      window.innerWidth >= 768
    ) {
      const textBottom = topTextRef.current.getBoundingClientRect().bottom;
      const imageTop = imageRef.current.getBoundingClientRect().top;
      if (textBottom <= imageTop) {
        setShowTopText(false);
      } else {
        setShowTopText(true);
      }
    }

    // Navbar scroll show/hide logic
    if (scrollRef.current) {
      const scrollTop = scrollRef.current.scrollTop;
      if (scrollTop < 40) {
        setShowNavbar(true); // Always show near top
      } else if (scrollTop > lastScroll.current) {
        setShowNavbar(false); // Hide when scrolling down
      } else {
        setShowNavbar(true); // Show when scrolling up
      }
      lastScroll.current = scrollTop;
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(studioRef.current, {
      y: 150,
      opacity: 0,
      duration: 2.5,
      delay: 0.5,
      ease: 'power4.out',
    });
    tl.from(
      animatedTextRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.15,
      },
      '-=1.5'
    );
  }, []);

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', handleScroll);
    }
    // Run once on mount to update visibility
    handleScroll();
    window.addEventListener('resize', handleScroll);

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen lg:overflow-hidden">
      {/* Fixed Image Section */}
      <div
        ref={imageRef}
        className="w-full z-50 md:w-1/2 h-64 md:h-full sticky md:static top-0 left-0 overflow-hidden"
      >
        <img
          src={imgnav}
          alt="Fixed visual"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Scrollable Content Section */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full md:w-1/2 h-auto md:overflow-y-auto max-h-screen overflow-y-auto md:overflow-y-auto p-4 md:p-10 
        space-y-10 hide-scrollbar bg-white md:bg-transparent text-black md:text-inherit"
      >
        {/* Top Text Section */}
        <section
          ref={topTextRef}
          className={`flex flex-col items-start md:items-center md:bg-white md:text-black transition-all duration-500 ${
            !showTopText
              ? 'md:opacity-0 md:pointer-events-none md:select-none md:-translate-y-16'
              : 'md:opacity-100 md:translate-y-0'
          }`}
        >
          <h1 className="font-extrabold uppercase mt-4 text-[48px] md:text-[160px] ">
            ©KAYO
          </h1>
          <h1
            ref={studioRef}
            className="font-extrabold uppercase -mt-8 md:-mt-[90px] text-[48px] md:text-[160px]"
          >
            STUDIO
          </h1>
        </section>

        {/* Text Content Section */}
        <section>
          <p
            ref={(el) => (animatedTextRef.current[0] = el)}
            className="text-lg md:text-2xl text-gray-600"
          >
            (Based in Prague)
          </p>
          <h2
            ref={(el) => (animatedTextRef.current[1] = el)}
            className="lg:text-4xl md:text-6xl font-semibold mt-4"
          >
            Crafting impactful brands
          </h2>
          <h2
            ref={(el) => (animatedTextRef.current[2] = el)}
            className="lg:text-4xl md:text-6xl font-semibold"
          >
            and websites that drive
          </h2>
          <h2
            ref={(el) => (animatedTextRef.current[3] = el)}
            className="lg:text-4xl md:text-6xl font-semibold"
          >
            growth and success.
          </h2>
        </section>

        {/* About Section */}
        <section>
          <p
            ref={(el) => (animatedTextRef.current[6] = el)}
            className="text-lg md:text-2xl text-gray-600"
          >
            (About us)
          </p>
          <h2
            ref={(el) => (animatedTextRef.current[7] = el)}
            className="text-3xl md:text-8xl font-extrabold uppercase mt-4"
          >
            Creative
          </h2>
          <h2
            ref={(el) => (animatedTextRef.current[8] = el)}
            className="text-3xl md:text-8xl font-extrabold uppercase"
          >
            brands.
          </h2>
          <h2
            ref={(el) => (animatedTextRef.current[9] = el)}
            className="text-3xl md:text-8xl font-extrabold uppercase"
          >
            Powerful
          </h2>
          <h2
            ref={(el) => (animatedTextRef.current[10] = el)}
            className="text-3xl md:text-8xl font-extrabold uppercase"
          >
            Websites.
          </h2>
        </section>

        {/* Long Paragraph Section */}
        <section>
          <p
            ref={(el) => (animatedTextRef.current[11] = el)}
            className="text-lg md:text-2xl text-gray-600"
          >
            At our Oslo-based architecture studio, we are dedicated to creating spaces that inspire and endure. Specializing in commercial, multipurpose, and residential architecture, we blend creativity with functionality to bring your vision to life. Our approach is rooted in sustainability,
            ensuring that each project not only meets current needs but also contributes positively to the environment.
          </p>
          <p
            ref={(el) => (animatedTextRef.current[12] = el)}
            className="text-lg md:text-2xl text-gray-600 mt-10"
          >
            Our team of passionate architects and designers works closely with clients, fostering a collaborative process that prioritizes your unique needs and preferences. We believe that the best designs come from understanding the nuances of each project, from the bustling energy of commercial spaces to the 
            versatile requirements of multipurpose facilities and the personalized touches of residential homes.
          </p>
        </section>

        {/* Partner Logos */}
        <section>
          <p
            ref={(el) => (animatedTextRef.current[13] = el)}
            className="text-lg md:text-2xl text-gray-600"
          >
            (Our partners)
          </p>
          <div className="flex flex-row justify-between items-center mt-4 space-x-2 md:space-x-8 mb-6 gap-2 md:gap-4">
            <img src={acme} alt="acme" className="h-10 w-24 md:h-16 md:w-36" />
            <img
              src={kanban}
              alt="kanban"
              className="h-10 w-24 md:h-16 md:w-36"
            />
            <img src={gold} alt="gold" className="h-10 w-24 md:h-16 md:w-36" />
          </div>
          <div className="flex flex-row justify-between items-center space-x-2 md:space-x-8 gap-2 md:gap-4">
            <img src={asg} alt="asg" className="h-10 w-24 md:h-16 md:w-36" />
            <img src={outo} alt="outo" className="h-10 w-24 md:h-16 md:w-36" />
            <img
              src={circle}
              alt="circle"
              className="h-10 w-24 md:h-16 md:w-36"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;