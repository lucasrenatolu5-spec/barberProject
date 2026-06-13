import React, { useState } from 'react';
import './styles/globals.css';
import IntroAnimation from './components/Hero/IntroAnimation';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.7s ease 0.1s',
          pointerEvents: introComplete ? 'auto' : 'none',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
