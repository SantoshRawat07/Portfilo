import React, { useState, useEffect } from 'react';
import arrow from '../../Image/arrow.svg';

const testimonials = [
  {
    name: "Dave Mitchell",
    company: "Lumina",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    heading: "Exceptional Branding That Elevated Our Identity.",
    paragraph:
      "Their strategic approach completely transformed our brand. We've seen a huge increase in recognition and client engagement.",
  },
  {
    name: "Sara Thompson",
    company: "Horizon",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    heading: "Outstanding Website Design, Exceeding Expectations.",
    paragraph:
      "The website they created is stunning, user-friendly, and has boosted our online conversions significantly. Highly recommend!",
  },
  {
    name: "Emil Rogers",
    company: "Pure Green",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    heading: "Creative Solutions That Drove Real Results for Our Website.",
    paragraph:
      "Their designs are not only beautiful but effective. Our sales increased by 30% post-launch. Incredible experience!",
  },
  {
    name: "Michaela Lee",
    company: "Apex Fitness",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    heading: "Seamless Collaboration & Support With Exceptional Results.",
    paragraph:
      "Working with them was easy and efficient. They perfectly captured our vision, and the results were outstanding.",
  },
  {
    name: "Amanda Lopez",
    company: "Urban Interiors",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    heading: "Strategic Branding & Identity With Immediate Impact.",
    paragraph:
      "Our new branding resonated with our audience immediately. We've received so many compliments and new business inquiries.",
  },
  {
    name: "Jason Carter",
    company: "Quantum",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    heading: "UX Design That Transformed Our User Experience.",
    paragraph:
      "Their UX design made our platform more intuitive and enjoyable to use. Customer satisfaction has dramatically improved.",
  },
];

const CARDS_PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

const Testimonial = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentPage]);

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <div className="p-0 m-0 w-full">
      <div className="project mb-20 px-4 md:px-16 lg:px-32">
        <h1 className="gsap-animate font-extrabold uppercase text-[40px] md:text-[80px] lg:text-[150px] xl:text-[200px] leading-none mt-10 mb-8 md:mb-4 lg:mb-2">
          What our
        </h1>
        <div className="space-y-2 md:space-y-2 lg:space-y-1">
          <h1 className="gsap-animate font-extrabold uppercase text-[40px] md:text-[80px] lg:text-[150px] xl:text-[200px] leading-none mt-2 mb-8 md:mb-4 lg:mb-2">
            clients
          </h1>
          <h1 className="gsap-animate font-extrabold uppercase text-[40px] md:text-[80px] lg:text-[150px] xl:text-[200px] leading-none mt-2 mb-8 md:mb-4 lg:mb-2">
            says
          </h1>
          <div className="space-y-2 md:space-y-2 lg:space-y-1 lg:-mb-10">
            <p className="gsap-animate font-semibold text-[20px] md:text-[36px] lg:text-[60px]">
              Hear our clients about their
            </p>
            <p className="gsap-animate font-semibold text-[20px] md:text-[36px] lg:text-[60px] lg:-mt-10">
              success stories and experiences
            </p>
            <p className="gsap-animate font-semibold text-[20px] md:text-[36px] lg:text-[60px] lg:-mt-10">
              with us.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full px-4 py-2 md:px-10 bg-white lg:-mt-[50px] md:mb-4">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-md ${
                (currentPage * CARDS_PER_PAGE + index) % 2 === 0
                  ? "bg-gray-100"
                  : "bg-white"
              } shadow-sm`}
            >
              <div className="mb-4">
                <img src={arrow} className="h-8 w-8" alt="quote" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.heading}</h3>
              <p className="text-gray-600 mb-4">{item.paragraph}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="italic text-xs text-gray-500">({item.company})</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "bg-black scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;