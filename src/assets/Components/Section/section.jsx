import React from 'react';
import acemepic from './../../Image/acemepic.webp';
import kanbapic from './../../Image/kanbapic.webp';
import goldpic from './../../Image/goldpic.webp';
import outopic from './../../Image/outopic.webp';

const Section = () => {
  return (
    <div className="p-0 m-0 w-full">
    <div className="project mb-20 px-4 md:px-16 lg:px-32">
  <h1 className="font-extrabold uppercase text-[50px] md:text-[150px] lg:text-[180px] leading-none lg:mb-10 md:mb-4">
    Projects
  </h1>

  <div className="space-y-4 md:space-y-2 lg:space-y-4 mt-12 md:-mt-10">
    <p className="font-semibold text-[22px] md:text-[50px] lg:text-[60px]">
      Explore our recent projects
    </p>
    <p className="font-semibold text-[22px] md:text-[50px] lg:text-[60px] lg:-mt-10">
      showcasing creativity, innovation,
    </p>
    <p className="font-semibold text-[22px] md:text-[50px] lg:text-[60px] lg:-mt-10">
      and impactful design solutions.
    </p>
  </div>
</div>


      {/* 2x2 Grid Without .map */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Image 1 */}
        <div className="w-full">
          <img src={acemepic} alt="Acme" className="w-full object-cover" />
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Acme</b>
            <b>2024</b>
          </div>
        </div>

        {/* Image 2 */}
        <div className="w-full">
          <img src={kanbapic} alt="Kanban" className="w-full object-cover" />
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Kanba</b>
            <b>2024</b>
          </div>
        </div>

        {/* Image 3 */}
        <div className="w-full">
          <img src={outopic} alt="Gold" className="w-full object-cover" />
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Goldline</b>
            <b>2022</b>
          </div>
        </div>

        {/* Image 4 */}
        <div className="w-full">
          <img src={goldpic} alt="Outo" className="w-full object-cover" />
          <div className="flex justify-between px-4 py-4 text-lg md:text-xl font-semibold">
            <b>Outosia</b>
            <b>2020</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
