import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'JOIN BSC.IT AT TECHSPIRE COLLEGE',
    items: [
      'Joining BSc.IT Program (2024)',
      'Learning New Technologies (2024)',
      'Interest in Web Development (2024)',
      'Join Frontend course at skillskishya (2024)',
      'Learn Responsive Design and React (2025)',
      'Build foodland project (2025)',
    ],
  },
  {
    title: 'FRONT-END INTERN AT WEBX-NEPAL',
    items: [
      'Join first internship (2025)',
      'learn gsap animations (2025)',
      'Get to know about office work (2025)',
      'Work in a real travel website project (2025)',
    ],
  },
  {
    title: 'FRONT-END INTERN AT NEPSE TRADING',
    items: [
      'Join internship at NEPSE Trading (2025)',
      'Work on real trading data (2025)',
      'Get to understand how trading works (2025)',
      'Learn how backend systems work (2025)',
      'Work on api real data fetching (2025)',
      'Learn Backend knowledge of Nest, postgres(2025)',
    ],
  },
];

const AwardsLayout = () => {
  return (
    <div className="w-full min-h-screen overflow-y-auto bg-white p-6 space-y-16">
      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-2xl md:text-4xl font-black mb-6 lg:px-12">
            {section.title}
          </h1>
          <ul className="space-y-3 w-full lg:px-12">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="text-base md:text-lg border-b border-gray-200 pb-2 w-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default AwardsLayout;