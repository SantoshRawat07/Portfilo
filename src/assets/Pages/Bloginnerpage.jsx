import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import brandingData from "../Components/Data/BloginnerData";    
import BlogCard from '../Components/Card/Blogcard';
import BlogData from '../Components/Data/BlogData';
import { FiArrowUpRight } from 'react-icons/fi';
import Footer from '../Components/Footer/footer.jsx';

const Bloginnerpage = () => {
  const { id } = useParams();
  const blog = brandingData.find(item => String(item.id) === String(id));

  const headingRef = useRef(null);
  const [circleOffsets, setCircleOffsets] = useState({});
  const [randomCards, setRandomCards] = useState([]);

  // Shuffle and set 3 random cards every 5 seconds
  useEffect(() => {
    const pickRandomCards = () => {
      const shuffled = [...BlogData].sort(() => Math.random() - 0.5);
      setRandomCards(shuffled.slice(0, 3));
    };
    pickRandomCards(); // initial
    const interval = setInterval(pickRandomCards, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const node = headingRef.current;
    if (!node) return;
    let hasAnimated = false;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            window.gsap &&
              window.gsap.fromTo(
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

  if (!blog) return <div className="text-center text-2xl py-20">Blog not found</div>;

  const { image, title, subtitle, sections } = blog;

  return (
    <>
      {/* Main 2-column layout */}
      <div className="flex w-full min-h-screen">
        {/* Sticky Left Image */}
        <div className="hidden md:block w-1/2 lg:w-1/3 sticky top-0 h-screen">
          <img
            src={image}
            alt="Branding Visual"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Scrollable Blog Content */}
        <div className="w-full md:w-1/2 lg:w-2/3 p-8 space-y-12">
          <div>
            <h1 className="text-6xl uppercase font-black mb-2 pb-2 mt-10">{title}</h1>
            <p className="text-gray-600 mt-4">{subtitle}</p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl uppercase font-bold mb-2">{section.heading}</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {section.content
                  .split('\n')
                  .map((line, i) => (i + 1) % 4 === 0 ? line + '\n\n' : line)
                  .join('\n')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width More News Section */}
      <div className="w-full px-4 md:px-16 mt-20">
        <div className="pt-8 border-t border-gray-300 text-center mb-16">
          <h1
            ref={headingRef}
            className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px] xl:text-[150px] uppercase font-extrabold leading-none"
          >
            more news
            <p className="font-semibold text-[10px] md:text-[24px] lg:text-[50px] lg:mt-6">
              We’re a studio with diverse
            </p>
            <p className="font-semibold text-[10px] md:text-[24px] lg:text-[50px] lg:-mt-[-4px]">
              roots that want to help companies.
            </p>
          </h1>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-wrap w-full mt-0 px-0">
          {randomCards.map((card, index) => (
            <div
              key={card.id}
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

      <Footer />
    </>
  );
};

export default Bloginnerpage;