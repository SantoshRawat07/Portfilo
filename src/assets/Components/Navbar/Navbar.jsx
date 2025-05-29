import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

function Navbar({ visible = true }) {
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

    // Lock scroll on mobile menu open
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} bg-white md:bg-transparent`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div><Link to="/" className="text-4xl font-extrabold text-black md:text-white">KAYO </Link></div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-20 items-center text-black font-medium">
          <li><Link to="/work" className="nav-link">Work</Link></li>
          <li><Link to="/Service" className="nav-link">Service</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/blog" className="nav-link">Blog</Link></li>
          <li><Link to="/letstalk" className="lets-talk font-medium text-black">Let's Talk</Link></li>
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <Link to="/letstalk" className="underline font-semibold text-black">Let's Talk</Link>
          <button onClick={openMenu}>
            <FaBars className="text-2xl text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white z-50 w-full h-screen flex flex-col items-center px-6 pt-40 md:pt-52"
        >
          <div className="absolute top-6 left-6 text-2xl font-extrabold text-black">KAYO</div>
          <div className="absolute top-6 right-6 flex items-center space-x-4">
            <Link to="/letstalk" className="underline font-semibold text-black">Let's Talk</Link>
            <button onClick={closeMenu}>
              <FaTimes className="text-2xl text-black" />
            </button>
          </div>
          <div className="bg-white w-full max-w-xs p-6 flex flex-col items-center">
            {[
              { name: 'Work', path: '/work' },
              { name: 'Service', path: '/Service' },
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

export default Navbar;