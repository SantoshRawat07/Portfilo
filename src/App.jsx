import React, { useState } from 'react';
import './index.css';
import Navbar from './assets/Components/Navbar/Navbarr.jsx';
import HeroSection from './assets/Components/Herosection/Hero.jsx';
import Footer from './assets/Components/Footer/footer.jsx'; 
import Section from './assets/Components/Section/section.jsx';
import Service from './assets/Components/Services/service.jsx';
import Services from './assets/Components/Services/service1.jsx'
import Servicelast from './assets/Components/Services/Servicelast.jsx'
import Testomonial from './assets/Components/Testomonial/testomonial.jsx'


const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <>
      <Navbar visible={showNavbar} />
      <HeroSection setShowNavbar={setShowNavbar} />
      <Section />
      <Service />
      <Services/>
      <Servicelast/>
      <Testomonial/>
  
      <Footer/>
    </>
  );
};

export default App;