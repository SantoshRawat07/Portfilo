import React, { useEffect, useRef} from 'react';
import gsap from 'gsap';
import ca from '../Image/ca.webp';
import la from '../Image/la.webp';
import com from '../Image/com.webp';
import mac from '../Image/newmac.webp';
import girl from '../Image/girl.webp';
import iphone from '../Image/iphone.webp';
import box from '../Image/box.webp';
import arrow from '../Image/arrow.svg';
import Reuseprocess from '../Components/Data/Reuseprocess';
import Footer from '../Components/Footer/footer';

const Ourservice = () => {
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
    <div className='p-0 m-0 w-full'>
      <div className="project mb-10 px-4 md:px-16 lg:px-20 lg:py-10 mt-20">
        <h1 
          ref={headingRef}
          className="font-extrabold uppercase text-[40px] md:text-[60px] lg:text-[220px] leading-none mb-10 break-words opacity-"
        >
        Service
        </h1>
        <div className="space-y-2 md:space-y-4">
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
          Explore our tailored services
          </p>
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[80px] lg:-mt-10">
         designed to elevate your brand.
          </p>
        </div>
      </div>
    
  {/*  Image */}
 <div className="flex gap-4">
  <div className="w-[600px] mr-0">
    <img src={ca} alt="Left" className="w-full md:ml-2" />
  </div>

  <div className="flex-1">
    <img src={la} alt="Right" className="w-full" />
  </div>
</div>
{/*brand info */}
 <div className="grid grid-cols-1 md:grid-cols-2 mb-10 px-4 md:px-16 lg:px-20 lg:py-10 mt-20">
          <div>
            <h2 ref={headingRef} className="text-4xl md:text-4xl lg:text-6xl font-extrabold lg:ml-20">
               BRAND <br/> STRATEGY</h2>
          </div>
          <div className="lg:-ml-[150px] overflow-y-auto whitespace-pre-line mt-4 hide-scroller max-h-screen ">
            <h2 className="text-3xl font-bold">
              We create compelling brand identities that resonate with your audience, helping you establish a strong presence and foster meaningful connections.
            </h2>
            <div className='text-2xl font-bold mt-10'>
            Brand Discovery & Research
            <p className='mt-4 font-normal'>In-depth brand discovery and research help us understand your business, target audience, and market landscape. We conduct comprehensive analyses, including competitor reviews and audience surveys, to uncover valuable insights that inform your brand strategy. 
              This foundational work ensures our creative solutions align perfectly with your business goals and vision.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
            Logo & Visual Identity Design
            <p className='mt-4 font-normal'>Our logo and visual identity design services focus on creating memorable and impactful brand elements. We craft unique logos that encapsulate your brand's essence, complemented by a cohesive visual identity, including color palettes, typography, and graphics. 
              This helps establish brand recognition and creates a strong, lasting impression on your audience.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
            Brand Messaging & Positioning
            <p className='mt-4 font-normal'>We develop compelling brand messaging and positioning strategies that resonate with your target audience. By identifying your unique value proposition and crafting a consistent tone of voice, we ensure your message communicates authenticity and connects emotionally with your customers. 
              This clarity helps differentiate your brand in a competitive marketplace.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
               Brand Guidelines Creation
            <p className='mt-4 font-normal'>Brand guidelines serve as a comprehensive resource for maintaining consistency in your brand’s presentation. We create detailed guidelines that outline the proper use of your logo, typography, colors, imagery, and messaging.
               This ensures that everyone involved in your brand's communication adheres to the same standards, reinforcing brand recognition.</p> 
              <hr className='mt-4'></hr>
            </div>

          </div>
        </div>
                { /* second img */}
                <div className="flex gap-4 mt-10 md:ml-2">
               <div className="w-[600px] mr-0">
               <img src={com} alt="Left" className="w-full" />
            </div>

                <div className="flex-1">
               <img src={mac} alt="Right" className="w-full" />
                </div>
            </div>
                  {/* intro */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 px-4 md:px-16 lg:px-20 lg:py-10 mt-10">
          <div>
            <h2 ref={headingRef} className="text-4xl md:text-4xl lg:text-6xl font-extrabold lg:ml-20">
               WEBSITE <br/> DESIGN</h2>
          </div>
          <div className="lg:-ml-[150px] overflow-y-auto whitespace-pre-line mt-4 hide-scroller max-h-screen ">
            <h2 className="text-3xl font-bold">
              We create compelling brand identities that resonate with your audience, helping you establish a strong presence and foster meaningful connections.
            </h2>
            <div className='text-2xl font-bold mt-10'>
            Brand Discovery & Research
            <p className='mt-4 font-normal'>In-depth brand discovery and research help us understand your business, target audience, and market landscape. We conduct comprehensive analyses, including competitor reviews and audience surveys, to uncover valuable insights that inform your brand strategy. 
              This foundational work ensures our creative solutions align perfectly with your business goals and vision.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
            Logo & Visual Identity Design
            <p className='mt-4 font-normal'>Our logo and visual identity design services focus on creating memorable and impactful brand elements. We craft unique logos that encapsulate your brand's essence, complemented by a cohesive visual identity, including color palettes, typography, and graphics. 
              This helps establish brand recognition and creates a strong, lasting impression on your audience.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
            Brand Messaging & Positioning
            <p className='mt-4 font-normal'>We develop compelling brand messaging and positioning strategies that resonate with your target audience. By identifying your unique value proposition and crafting a consistent tone of voice, we ensure your message communicates authenticity and connects emotionally with your customers. 
              This clarity helps differentiate your brand in a competitive marketplace.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
               Brand Guidelines Creation
            <p className='mt-4 font-normal'>Brand guidelines serve as a comprehensive resource for maintaining consistency in your brand’s presentation. We create detailed guidelines that outline the proper use of your logo, typography, colors, imagery, and messaging.
               This ensures that everyone involved in your brand's communication adheres to the same standards, reinforcing brand recognition.</p> 
              <hr className='mt-4'></hr>
            </div>

          </div>
        </div>

        {/* image section 3 */}
          <div className="flex gap-4 mt-10 md:ml-2">
               <div className="w-[600px] mr-0">
               <img src={girl} alt="Left" className="w-full" />
            </div>

                <div className="flex-1">
               <img src={iphone} alt="Right" className="w-full" />
                </div>
            </div>

      {/* intro ui ux  */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 px-4 md:px-16 lg:px-20 lg:py-10 mt-10">
          <div>
            <h2 ref={headingRef} className="text-4xl md:text-4xl lg:text-6xl font-extrabold lg:ml-20">
               UI/UX <br/> DESIGN</h2>
          </div>
          <div className="lg:-ml-[150px] overflow-y-auto whitespace-pre-line mt-4 hide-scroller max-h-screen ">
            <h2 className="text-3xl font-bold">
              We create compelling brand identities that resonate with your audience, helping you establish a strong presence and foster meaningful connections.
            </h2>
            <div className='text-2xl font-bold mt-10'>
            Brand Discovery & Research
            <p className='mt-4 font-normal'>In-depth brand discovery and research help us understand your business, target audience, and market landscape. We conduct comprehensive analyses, including competitor reviews and audience surveys, to uncover valuable insights that inform your brand strategy. 
              This foundational work ensures our creative solutions align perfectly with your business goals and vision.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
            Logo & Visual Identity Design
            <p className='mt-4 font-normal'>Our logo and visual identity design services focus on creating memorable and impactful brand elements. We craft unique logos that encapsulate your brand's essence, complemented by a cohesive visual identity, including color palettes, typography, and graphics. 
              This helps establish brand recognition and creates a strong, lasting impression on your audience.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
            Brand Messaging & Positioning
            <p className='mt-4 font-normal'>We develop compelling brand messaging and positioning strategies that resonate with your target audience. By identifying your unique value proposition and crafting a consistent tone of voice, we ensure your message communicates authenticity and connects emotionally with your customers. 
              This clarity helps differentiate your brand in a competitive marketplace.</p> 
              <hr className='mt-4'></hr>
            </div>
             <div className='text-2xl font-bold mt-10'>
               Brand Guidelines Creation
            <p className='mt-4 font-normal'>Brand guidelines serve as a comprehensive resource for maintaining consistency in your brand’s presentation. We create detailed guidelines that outline the proper use of your logo, typography, colors, imagery, and messaging.
               This ensures that everyone involved in your brand's communication adheres to the same standards, reinforcing brand recognition.</p> 
              <hr className='mt-4'></hr>
            </div>

          </div>
        </div>
        {/* our process */}
      <div className="project mb-10 px-4 md:px-16 lg:px-20 lg:py-10 mt-20">
        <h1 
          className="font-extrabold uppercase text-[40px] md:text-[60px] lg:text-[150px] leading-none mb-10 break-words opacity-"
        >
        process
        </h1>
        <div className="space-y-2 md:space-y-4">
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[50px] lg:-mt-10">
                Our proven process ensures
          </p>
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[50px] lg:-mt-10">
        successful outcomes and client
          </p>
          <p className="font-semibold text-[20px] md:text-[28px] lg:text-[50px] lg:-mt-10">
        satisfaction every time.
          </p>
        </div>
      </div>
  <Reuseprocess /> 
    </div>
    <Footer/>
    </>
    

  );
};

export default Ourservice;