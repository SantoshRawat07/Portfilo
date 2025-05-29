import React, { useRef, useEffect, useState } from 'react';
import capboy from '../Image/capboy.webp';
import Navbar from '../Components/Navbar/Navbarr';
import Footer from '../Components/Footer/footer';
import { gsap } from 'gsap';

const Letstalk = () => {
  const headingRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar at the top */}
      <div>
        <Navbar visible={showNavbar} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img src={capboy} alt="capboy" className="object-cover w-full h-full" />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-white">
          <h1
            ref={headingRef}
            className="text-[48px] md:text-[120px] font-extrabold uppercase leading-none mb-10 lg:-mt-[50px] lg:mb-[50px] lg:-py-4 md:mt-4"
          >
            Let’s <br />Talk
          </h1>

          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full md:w-1/2 px-4 py-3 bg-gray-100 border border-gray-200 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 px-4 py-3 bg-gray-100 border border-gray-200 rounded"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer at the bottom */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Letstalk;