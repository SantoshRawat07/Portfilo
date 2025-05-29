import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

function Navbarr({ visible = true, scrolledUp = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      y: '-100%',
      duration: 0.6,
      ease: 'power3.inOut',
      onComplete: () => setIsOpen(false),
    });
  };

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: '100%' },
        { y: '0%', duration: 0.6, ease: 'power3.out' }
      );
    }

    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  return (
      <nav
      className={`w-full fixed top-0 left-0 z-60 transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${scrolledUp ? 'bg-white text-black' : 'bg-transparent text-white'}
      `}
    >
      <div className="bg-gray max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
      <div className="flex-shrink-0">
  <Link to="/" className="text-4xl font-extrabold">KAYO</Link>
</div>

{/* Center: Nav Links */}
<div className="hidden lg:flex flex-1 justify-center">
  <ul className="flex space-x-12 font-semibold">
    <li><Link to="/work" className="nav-link">Work</Link></li>
    <li><Link to="/service" className="nav-link">Service</Link></li>
    <li><Link to="/about" className="nav-link">About</Link></li>
    <li><Link to="/blog" className="nav-link">Blog</Link></li>
  </ul>
</div>

{/* Right: Let's Talk */}
<div className="hidden lg:block">
  <Link to="/letstalk" className="lets-talk font-medium">Let's Talk</Link>
</div>

{/* Mobile: Toggle and Let's Talk */}
<div className="lg:hidden flex items-center space-x-4">
  <Link to="/letstalk" className="underline font-semibold">Let's Talk</Link>
  <button onClick={openMenu}>
    <FaBars className="text-2xl" />
  </button>
</div>
</div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white z-50 w-full h-screen flex flex-col items-center px-6 pt-40 md:pt-52"
        >
          {/* Mobile Top Bar */}
          <div className="absolute top-6 left-6 text-2xl font-extrabold text-black">KAYO</div>
          <div className="absolute top-6 right-6 flex items-center space-x-4">
            <Link to="/letstalk" className="underline font-semibold text-black">Let's Talk</Link>
            <button onClick={closeMenu}>
              <FaTimes className="text-2xl text-black" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="bg-white w-full max-w-xs p-6 flex flex-col items-center">
            {[
              { name: 'Work', path: '/work' },
              { name: 'Service', path: '/service' },
              { name: 'About', path: '/about' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/letstalk' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="text-black py-3 rounded text-2xl font-bold text-center uppercase w-full hover:bg-gray-100 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbarr;
