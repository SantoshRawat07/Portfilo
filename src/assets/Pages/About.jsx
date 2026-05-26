import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../Image/profile.jpeg';
import Teamcard from '../Components/Card/Teamcard';
import Teamdata from '../Components/Data/Teamdata';
import Award from '../Components/Card/Awardcard';
import Footer from '../Components/Footer/footer';
import PARAGRAPHS  from '../Components/Data/Intro.js';
import htmlIcon from '../Image/Techstack/html-5.svg';
import jsIcon from '../Image/Techstack/javascript-logo.svg';
import tsIcon from '../Image/Techstack/typescript-official.svg';
import twIcon from '../Image/Techstack/tailwind.svg';
import reactIcon from '../Image/Techstack/react.svg';
import nextIcon from '../Image/Techstack/next-js.svg';
import nodeIcon from '../Image/Techstack/node-js.svg';
import nestIcon from '../Image/Techstack/nest-service-ts.svg';
import pgIcon from '../Image/Techstack/postgresql-logo.svg';
import postmanIcon from '../Image/Techstack/postman-icon.svg';

gsap.registerPlugin(ScrollTrigger);

const techstack = [
  { name: 'HTML5', icon: htmlIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: tsIcon },
  { name: 'Tailwind', icon: twIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Next.js', icon: nextIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'NestJS', icon: nestIcon },
  { name: 'PostgreSQL', icon: pgIcon },
  { name: 'Postman', icon: postmanIcon },
];

// ─── Component ────────────────────────────────────────────────────────────────
const About = () => {
  const heroHeadingRef = useRef(null);
  const introLabelRef = useRef(null);
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);
  const parasRef = useRef([]);
  const pillsRef = useRef([]);
  const awardsLabelRef = useRef(null);
  const awardsHeadRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero heading: scroll into view ─────────────────────────────────────
      gsap.fromTo(
        heroHeadingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: heroHeadingRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // ── "Intro / 01" label ──────────────────────────────────────────────────
      gsap.fromTo(
        introLabelRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introLabelRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );

      // ── Image: clip-path reveal + subtle parallax ───────────────────────────
      gsap.fromTo(
        imgWrapRef.current,
        { clipPath: 'inset(100% 0 0 0)', scale: 1.08 },
        {
          clipPath: 'inset(0% 0 0 0)',
          scale: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );

      // Light parallax drift on the image while scrolling
      gsap.to(imgWrapRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── Paragraphs: staggered fade-up ──────────────────────────────────────
      parasRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
          }
        );
      });

      // ── Tech pills: spring bounce ───────────────────────────────────────────
      gsap.fromTo(
        pillsRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.06,
          duration: 0.45,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: pillsRef.current[0],
            start: 'top 90%',
            once: true,
          },
        }
      );

      // ── Divider draw ────────────────────────────────────────────────────────
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power3.out',
            transformOrigin: 'left',
            scrollTrigger: {
              trigger: dividerRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }

      // ── Awards label ────────────────────────────────────────────────────────
      gsap.fromTo(
        awardsLabelRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: awardsLabelRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );

      // ── Awards heading lines ────────────────────────────────────────────────
      if (awardsHeadRef.current) {
        gsap.fromTo(
          awardsHeadRef.current.querySelectorAll('.aw-line'),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.9,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: awardsHeadRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════ */}
      <div className="px-4 md:px-16 lg:px-20 pt-28 pb-10">
        <h1
          ref={heroHeadingRef}
          className="font-extrabold uppercase text-[38px] md:text-[60px] lg:text-[130px] xl:text-[160px] leading-none break-words"
        >
          Wanna know<br className="hidden lg:block" /> who am i ?
        </h1>
      </div>

      {/* ── Intro label row ── */}
      <div
        ref={introLabelRef}
        className="flex justify-between items-center px-4 md:px-16 lg:px-20 pb-16 border-b border-neutral-800"
      >
        <span className="text-2xl md:text-4xl font-bold tracking-tight">Intro</span>
        <span className="text-2xl md:text-4xl font-bold text-neutral-500">01</span>
      </div>

      {/* Main 2-column layout */}
      <div className="flex w-full min-h-screen">
        {/* Left Scrollable Content */}
        <div
          ref={sectionRef}
          className="w-full md:w-1/2 lg:w-2/3 px-4 md:px-16 lg:px-20 py-16"
        >

          {/* ── LEFT: Scrollable intro text ── */}
          <div className="flex flex-col gap-14">

          {/* Divider */}
          <div
            ref={dividerRef}
            className="h-px w-full bg-neutral-700"
            style={{ transformOrigin: 'left' }}
          />

          {/* Paragraphs */}
          {PARAGRAPHS.map((p, i) => (
            <div
              key={i}
              ref={(el) => (parasRef.current[i] = el)}
              className="flex flex-col gap-3"
            >
              {/* Mini label */}
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-black font-medium">
                — {p.label}
              </span>
              <p className="text-base md:text-lg leading-[1.85] text-gray-700 whitespace-pre-line font-light">
                {p.text}
              </p>
              {/* Thin separator after each para */}
              <div className="mt-4 h-px bg-gray-700 w-3/4" />
            </div>
          ))}

          {/* Tech stack icons - Single looping row */}
          <div className="w-full">
            <h1 className="text-[0.65rem] tracking-[0.22em] uppercase text-black font-medium mb-6">
              — Tech Stack
            </h1>
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-8 tech-stack-loop">
                {/* Display all items twice for seamless loop */}
                {[...techstack, ...techstack].map((tech, i) => (
                  <div
                    key={`${tech.name}-${i}`}
                    className="tech-icon-wrapper group relative flex-shrink-0"
                    title={tech.name}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="
                        w-12 h-12 md:w-16 md:h-16
                        object-contain
                        transition-all duration-300
                        filter grayscale brightness-75
                        group-hover:grayscale-0 
                        cursor-pointer
                      "
                    />
                    <span className="
                      absolute -bottom-10 left-1/2 -translate-x-1/2
                      text-[0.6rem] tracking-[0.1em] uppercase
                      text-neutral-400 
                      transition-opacity duration-300
                      pointer-events-none whitespace-nowrap
                      font-medium
                    ">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#portfolio"
              className="
                inline-flex items-center gap-2
                bg-white text-black
                text-[0.75rem] font-bold tracking-[0.12em] uppercase
                px-7 py-3.5
                hover:bg-neutral-200 transition-colors duration-300
              "
            >
              Explore Projects
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:hello@santoshrawat.com"
              className="
                inline-flex items-center gap-2
                bg-transparent text-black border border-neutral-700
                text-[0.75rem] font-bold tracking-[0.12em] uppercase
                px-7 py-3.5
                hover:bg-neutral-200 transition-colors duration-300
              "
            >
              Get in Touch
            </a>
          </div>
        </div>
        </div>

        {/* Sticky Right Profile Image */}
        <div className="hidden md:block md:w-1/2 lg:w-1/3 sticky top-0 h-screen">
          <div className="p-8 h-full flex flex-col justify-center">
            {/* Image frame */}
            <div className="relative">

            {/* Corner brackets */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -left-3 w-10 h-10 z-10 pointer-events-none"
              style={{ borderTop: '1.5px solid #888', borderLeft: '1.5px solid #888' }}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 w-10 h-10 z-10 pointer-events-none"
              style={{ borderBottom: '1.5px solid #888', borderRight: '1.5px solid #888' }}
            />

            {/* Shadow offset block */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-2 -z-10 bg-neutral-900 opacity-20"
            />

            {/* Image */}
            <div
              ref={imgWrapRef}
              className="overflow-hidden"
              style={{ willChange: 'transform' }}
            >
              <img
                src={img}
                alt="Santosh Rawat – Frontend Developer from Nepal"
                className="w-full object-cover object-top block"
                style={{
                  aspectRatio: '3/4',
                  filter: 'contrast(1.05) brightness(0.92)',
                }}
              />
            </div>
            </div>

            {/* Name card below image */}
            <div
              className="mt-5 pt-5"
              style={{ borderTop: '1px solid #2a2a2a' }}
            >
              <h2 className="text-lg font-bold leading-tight tracking-tight text-white">
                Santosh Rawat
              </h2>
              <p className="text-[0.7rem] tracking-[0.14em] uppercase text-black mt-1">
                Frontend Developer  (BSc.IT Student)
              </p>
              <p className="flex items-center gap-1.5 text-xs text-neutral-600 mt-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Kathmandu, Nepal
              </p>

              {/* Status dot */}
              <div className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[0.68rem] text-neutral-500 tracking-wide">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          AWARDS SECTION
      ════════════════════════════════════════════════ */}
      <div className="w-full mt-20">

        {/* Label row */}
        <div
          ref={awardsLabelRef}
          className="flex justify-between items-center px-4 md:px-16 lg:px-20 mb-16 pb-4 border-b border-neutral-800"
        >
          <span className="text-2xl md:text-4xl font-bold tracking-tight">My Journey</span>
          <span className="text-2xl md:text-4xl font-bold text-neutral-500">02</span>
        </div>

        {/* Awards heading */}
        <div
          ref={awardsHeadRef}
          className="px-4 md:px-16 lg:px-18 mb-20"
        >
          <div className="overflow-hidden">
            <h2 className="text-[48px] sm:text-[64px] md:text-[96px] lg:text-[120px] xl:text-[150px] uppercase font-extrabold leading-none">
              <span className="aw-line block">My Journey</span>
            </h2>
          </div>
          <div className="overflow-hidden mt-4">
            <p className="aw-line font-semibold text-[14px] md:text-[24px] lg:text-[40px] text-neutral-400 leading-snug">
              Passionate B.Sc. IT student focused on <br className="hidden md:block" />
              web development, creative UI design, and modern digital experiences.
            </p>
          </div>
        </div>

        <Award className="py-4 mb-4"/>
      </div>

      <Footer />
    </>
  );
};

export default About;
