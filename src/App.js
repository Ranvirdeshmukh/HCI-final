import React from 'react';
import './index.css';

// Import components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import Research from './components/Research';
import Process from './components/Process';
import Results from './components/Results';
import Reflection from './components/Reflection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App min-h-screen bg-white page-transition">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="overview">
        <ProjectOverview />
      </div>
      <div id="research">
        <Research />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="results">
        <Results />
      </div>
      <div id="reflection">
        <Reflection />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App; 