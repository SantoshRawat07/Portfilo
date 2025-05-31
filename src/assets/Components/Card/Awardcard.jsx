import React from 'react';
import { motion } from 'framer-motion';
import blue from '../../Image/blue.webp';
import black from '../../Image/black.webp';
import orange from '../../Image/orange.webp';
import brinjal from '../../Image/brinjal.webp';
import green from '../../Image/green.webp';
import lightgreen from '../../Image/lightgreen.webp';
import red from '../../Image/red.webp';

const images = [blue, orange, brinjal, green, lightgreen, red];

const sections = [
  {
    title: 'BRANDING AWARDS',
    items: [
      'Brand Excellence Awards (2024)',
      'Iconic Identity Awards (2024)',
      'Visionary Brand Honors (2023)',
      'Golden Mark Awards (2023)',
      'Brand Innovation Awards (2022)',
      'Signature Branding Awards (2022)',
    ],
  },
  {
    title: 'WEBSITE AWARDS',
    items: [
      'Digital Masterpiece Awards (2024)',
      'Site Innovation Awards (2023)',
      'Creative Site Honors (2023)',
      'Modern UI Excellence (2022)',
    ],
  },
  {
    title: 'DEGITAL AWARDS',
    items: [
      'Digital Masterpiece Awards (2024)',
      'Web Excellence Awards (2024)',
      'Pixel Perfection Honors (2023)',
      'Innovation in Web Design Awards(2023)',
      'Best in User Experience Awards(2022)',
      'Interactive Design Awards (2022)',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AwardsLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-full">
      {/* Left Scrollable Image Column */}
      <div className="w-full md:w-1/2 max-h-96 md:max-h-screen overflow-y-auto thin-scrollbar p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative shadow-xl rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt={`Card ${idx + 1}`}
                className="w-full h-72 md:h-96 object-cover transition-transform duration-300 hover:grayscale"
              />
              <div className="absolute inset-0 bg-opacity-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Scrollable Awards */}
      <div className="w-full md:w-1/2 max-h-96 md:max-h-screen overflow-y-auto thin-scrollbar bg-white p-6 space-y-16 lg:mb-18">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-2xl md:text-4xl font-black mb-6">
              {section.title}
            </h1>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="text-base md:text-lg border-b border-gray-200 pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwardsLayout;
