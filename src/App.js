import React from 'react';
import './index.css';

// Import components
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import Research from './components/Research';
import Process from './components/Process';
import Results from './components/Results';
import Reflection from './components/Reflection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Hero />
      <ProjectOverview />
      <Research />
      <Process />
      <Results />
      <Reflection />
      <Footer />
    </div>
  );
}

export default App; 