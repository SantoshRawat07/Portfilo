import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import BlogCard from '../Components/Card/Blogcard';
import BlogData from '../Components/Data/BlogData';
import { FiArrowUpRight } from 'react-icons/fi';
import Footer from '../Components/Footer/footer.jsx';
import { Link } from 'react-router-dom';

const Blog = () => {
  const headingRef = useRef(null);
  const [circleOffsets, setCircleOffsets] = useState({});

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

  return (
    <>
    <div ref={headingRef} className='p-0 m-0 w-full'>
      <div className="project mb-10 px-4 md:px-16 lg:px-20 lg:py-10 mt-20">
        <h1 
          className="font-extrabold uppercase text-[40px] md:text-[60px] lg:text-[220px] leading-none mb-10 break-words opacity-"
        >
          Journal
        </h1>
        <div className="space-y-2 md:space-y-4">
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
            Explore insights, tips, and trends
          </p>
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
            to elevate your brand strategy.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full mt-0 px-0">
        {BlogData.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 p-2"
            onMouseMove={(e) => handleMouseMove(index, e)}
            onMouseLeave={() => handleMouseLeave(index)}
          > 
            <Link to={`/blog/${card.id}`}>
            <BlogCard {...card}>
              <div
                className="hidden lg:flex absolute top-1/2 left-1/2 items-center justify-center w-[50px] h-[50px] rounded-full 
                  bg-black text-white text-2xl z-30 pointer-events-none opacity-0
                  group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transform: `translate(-50%, -50%) translate(${circleOffsets[index]?.x || 0}px, ${circleOffsets[index]?.y || 0}px)`
                }}
              >
                <FiArrowUpRight />
              </div>
            </BlogCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blog;