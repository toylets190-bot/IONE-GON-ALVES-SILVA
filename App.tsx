
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-blue-100">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default App;
