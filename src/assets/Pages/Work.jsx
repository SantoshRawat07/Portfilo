import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbarr.jsx';
import Footer from '../Components/Footer/footer.jsx';
import { FiArrowUpRight } from 'react-icons/fi';
import acmefoot from '../Image/amefoot.webp';
import kanbaboy from '../Image/kanbaboy.webp';
import utocar from '../Image/utocar.webp';
import batgold from '../Image/batgold.webp';

const Work = () => {
  const textRefs = useRef([]);
  const circleRefs = useRef([]);
  const imageRefs = useRef([]);
  const headingRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScroll = useRef(window.scrollY);
  const [circleOffsets, setCircleOffsets] = useState({});

  // Animate heading when it enters viewport
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

  // Animate each label when its image is in view
  useEffect(() => {
    const observers = [];
    textRefs.current.forEach((label, idx) => {
      const image = imageRefs.current[idx];
      if (!label || !image) return;
      let hasAnimated = false;

      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              gsap.fromTo(
                label,
                { y: 80, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: 'power3.out',
                }
              );
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(image);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Navbar show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(currentScroll <= lastScroll.current);
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Circle hover animation (opacity/scale only)
  useEffect(() => {
    const wrappers = document.querySelectorAll('.image-wrapper');
    wrappers.forEach((wrapper, index) => {
      const circle = circleRefs.current[index];

      const showCircle = () => {
        if (window.innerWidth >= 1024 && circle) {
          gsap.fromTo(
            circle,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
          );
        }
      };
      const hideCircle = () => {
        if (window.innerWidth >= 1024 && circle) {
          gsap.to(circle, {
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
    });
  }, []);

  // Mouse movement for circle (10px clamp)
  const handleMouseMove = (idx, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const clamp = (val) => Math.max(-10, Math.min(10, val));
    setCircleOffsets((prev) => ({
      ...prev,
      [idx]: { x: clamp(x), y: clamp(y) }
    }));
  };

  const handleMouseLeave = (idx) => {
    setCircleOffsets((prev) => ({
      ...prev,
      [idx]: { x: 0, y: 0 }
    }));
  };

  // The four projects with matching ids
  const projects = [
    { image: acmefoot, label: 'Acme', id: 'acme' },
    { image: kanbaboy, label: 'Kanba', id: 'kanba' },
    { image: utocar, label: 'Goldline', id: 'goldline' },
    { image: batgold, label: 'Outosia', id: 'outosia' },
  ];

  return (
    <div className="p-0 m-0 w-full">
      <Navbar visible={showNavbar} />

      {/* Heading */}
      <div className="project mb-10 px-4 md:px-16 lg:px-20 lg:py-10 mt-20">
        <h1
          ref={headingRef}
          className="font-extrabold uppercase text-[40px] md:text-[60px] lg:text-[220px] leading-none mb-10 break-words opacity-0"
        >
          Projects
        </h1>
        <div className="space-y-2 md:space-y-4">
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
            View our work, reflecting unique
          </p>
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
            solutions for diverse client needs.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative image-wrapper group w-full md:h-[70vh] lg:h-[90vh] overflow-hidden"
            onMouseMove={(e) => handleMouseMove(index, e)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Link to={`/project/${project.id}`}>
              <img
                ref={el => (imageRefs.current[index] = el)}
                src={project.image}
                alt={project.label}
                className="w-full h-full object-cover cursor-pointer"
              />
            </Link>
            <h2
              ref={el => (textRefs.current[index] = el)}
              className="absolute bottom-10 left-10 text-white text-[40px] md:text-[80px] lg:text-[100px] font-extrabold uppercase z-10 opacity-0"
            >
              {project.label}
            </h2>
            {/* Circle with Arrow */}
            <div
              ref={el => (circleRefs.current[index] = el)}
              className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: `translate(-50%, -50%) translate(${circleOffsets[index]?.x || 0}px, ${circleOffsets[index]?.y || 0}px)`
              }}
            >
              <FiArrowUpRight />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Work;