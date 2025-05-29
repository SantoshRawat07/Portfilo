import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Letstalk from './assets/Pages/Letstalk';
import App from './App';
import Work from './assets/Pages/Work';
import Navbarr from './assets/Components/Navbar/Navbarr.jsx';
import Innerpage from './assets/Pages/Innerpage';
import Ourservice from './assets/Pages/Ourservice';
import Notfound from './assets/Components/404/Notfound.jsx';


function AppRouter() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolledUp, setScrolledUp] = useState(true);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 40) {
        setScrolledUp(true); // At the top
      } else if (currentScroll < lastScroll.current) {
        setScrolledUp(true); // Scrolling up
      } else {
        setScrolledUp(false); // Scrolling down
      }
      setShowNavbar(currentScroll <= lastScroll.current);
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbarr visible={showNavbar} scrolledUp={scrolledUp} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/letstalk" element={<Letstalk />} />
        <Route path="/work" element={<Work />} />
         <Route path="/service" element={<Ourservice/>}/>
         <Route path="/project/:id" element={<Innerpage />}/>
         <Route path="*" element= {<Notfound/>} />
        
      </Routes>
    </>
  );
}

export default AppRouter;