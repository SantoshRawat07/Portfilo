import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import img from '../Image/aboutpage.webp'
import Teamcard from '../Components/Card/Teamcard';
import Teamdata from '../Components/Data/Teamdata';
import Award from '../Components/Card/Awardcard';
import Footer from '../Components/Footer/footer';

const About = () => {
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
    <>
       <div ref={headingRef} className='p-0 m-0 w-full'>
      <div className="project mb-10 px-4 md:px-16 lg:px-20 lg:py-10 mt-20">
        <h1 
          className="font-extrabold uppercase text-[40px] md:text-[60px] lg:text-[220px] leading-none mb-10 break-words opacity-"
        >
       Ahoj KaYo
        </h1>
        <div className="space-y-2 md:space-y-4">
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
           Our mission, values, & the
          </p>
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
           passionate team behind our
          </p>
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
         success.
          </p>
        </div>
      </div>
         <div className="w-full h-auto lg:mx-0 md:mx-10">
             <img src={img} className="w-full h-auto lg:w-full object-cover" alt="boy.jpg" />
        </div>
       {/* our team */}
       <div className="w-full h-auto">
  <div className="flex justify-between items-center mt-20">
    <span className="ml-4 text-4xl font-bold">Our Team</span>
    <span className="mr-4 text-4xl font-bold">01</span>
  </div>
 <div ref={headingRef} className='px-6 text-center lg:ml-10 md:px-10 mt-20'>
  <h1 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px] xl:text-[150px] uppercase font-extrabold leading-none text-center md:text-left">
    Creative Minds <br /> Behind Success
  </h1>
</div>
</div>
<div className="flex flex-wrap justify-center mt-10">
  {Teamdata.map((member, idx) => (
    <Teamcard key={idx} {...member} />
  ))}
</div>
{/* award section */}
  <div className="w-full h-auto">
  <div className="flex justify-between items-center mt-10">
    <span className="ml-10 text-4xl font-bold">What we achieved</span>
    <span className="mr-10 text-4xl font-bold">02</span>
  </div>
 <div ref={headingRef} className='px-6 text-center lg:ml-10 md:px-10 mt-20 mb-20'>
  <h1 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px] xl:text-[150px] uppercase font-extrabold leading-none text-center md:text-left">
    AWARDS
    <p className="font-semibold text-[10px] md:text-[24px] lg:text-[50px] lg:mt-6">
            We’re a studio with diverse
          </p>
          <p className="font-semibold text-[10px] md:text-[24px] lg:text-[50px] lg:-mt-[-4px]">
          rootsthat want to help companies.
          </p>
  </h1>
</div>
</div>
<Award className='py-10 mb-10'/>
 
</div>
  <Footer/>
   </>
  )
}

export default About