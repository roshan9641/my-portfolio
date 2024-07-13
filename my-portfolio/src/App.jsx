import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
