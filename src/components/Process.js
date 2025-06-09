import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';

const Process = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    title: ''
  });

  const openModal = (imageSrc, imageAlt, title) => {
    console.log('Opening modal for:', title);
    setModalState({
      isOpen: true,
      imageSrc,
      imageAlt,
      title
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      imageSrc: '',
      imageAlt: '',
      title: ''
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-24 bg-white section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-24"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-apple-text mb-6">
              Design Process
            </h2>
            <div className="w-24 h-1 bg-apple-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Process Timeline */}
          <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1: Research */}
              <div className="text-center">
                <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-apple-text text-xl mb-4">Research</h3>
                <p className="text-apple-secondary leading-relaxed">
                  8 interviews with users about habit formation challenges
                </p>
              </div>

              {/* Step 2: Define */}
              <div className="text-center">
                <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-apple-text text-xl mb-4">Define</h3>
                <p className="text-apple-secondary leading-relaxed">
                  User personas and point-of-view statement creation
                </p>
              </div>

              {/* Step 3: Ideate */}
              <div className="text-center">
                <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-apple-text text-xl mb-4">Ideate</h3>
                <p className="text-apple-secondary leading-relaxed">
                  Crazy-8 sketching and HMW brainstorming sessions
                </p>
              </div>

              {/* Step 4: Test */}
              <div className="text-center">
                <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-apple-text text-xl mb-4">Prototype & Test</h3>
                <p className="text-apple-secondary leading-relaxed">
                  Controlled experiments and iterative refinement
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ideation Deep Dive */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <div className="bg-apple-gray/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
                Ideation & Concept Development
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-apple-text text-xl mb-4">Crazy-8 Sketching</h4>
                    <p className="text-apple-secondary leading-relaxed mb-4">
                      Generated <span className="font-semibold text-apple-blue">40+ concepts</span> in rapid ideation sessions, exploring various approaches to social accountability and behavioral nudging.
                    </p>
                    <p className="text-apple-secondary leading-relaxed">
                      We converged on a shared‑stake countdown mechanic that balanced social pressure with financial motivation.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-apple-text text-xl mb-4">How Might We</h4>
                    <p className="text-apple-secondary leading-relaxed">
                      HMW prompts shaped our brainstorming, including: "How might we gamify shared progress so accountability stays fun?"
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-apple">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">💡</div>
                    <h4 className="font-bold text-apple-text text-xl">Key Insight</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-apple-blue/10 rounded-xl p-4">
                      <p className="text-apple-text font-medium">
                        "Social + Financial = Powerful Motivation"
                      </p>
                    </div>
                    <p className="text-apple-secondary text-sm leading-relaxed">
                      The combination of social accountability with financial stakes created the most compelling user engagement in our concept testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How Might We Questions */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-apple-text text-center mb-12">
              How Might We Questions
            </h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-apple border border-gray-100">
                             <div 
                 className="text-center mb-8 relative group cursor-pointer"
                 onClick={() => openModal("/HMW.png", "How Might We Questions - Design challenge framing", "How Might We Questions")}
               >
                 <motion.img
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   whileHover={{ scale: 1.02 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   src="/HMW.png"
                   alt="How Might We Questions - Design challenge framing"
                   className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg hover:shadow-apple-lg transition-all duration-300"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center pointer-events-none">
                   <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300">
                     <span className="text-sm font-medium text-apple-text">🔍 Click to enlarge</span>
                   </div>
                 </div>
               </div>
              <div className="bg-apple-blue/10 rounded-2xl p-6">
                <p className="text-apple-text leading-relaxed text-center">
                  Our HMW questions helped frame design challenges and guided brainstorming sessions 
                  toward actionable solutions for habit formation and accountability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3 Principles of Success */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-apple-text text-center mb-12">
              3 Principles of Success
            </h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-apple border border-gray-100 mb-16">
                             <div 
                 className="text-center mb-8 relative group cursor-pointer"
                 onClick={() => openModal("/3principals of success.png", "3 Principles of Success - Core design principles", "3 Principles of Success")}
               >
                 <motion.img
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   whileHover={{ scale: 1.02 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   src="/3principals of success.png"
                   alt="3 Principles of Success - Core design principles"
                   className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg hover:shadow-apple-lg transition-all duration-300"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center pointer-events-none">
                   <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300">
                     <span className="text-sm font-medium text-apple-text">🔍 Click to enlarge</span>
                   </div>
                 </div>
               </div>
              <div className="bg-apple-blue/10 rounded-2xl p-6">
                <p className="text-apple-text leading-relaxed text-center">
                  These three principles guided our design decisions throughout the project, 
                  ensuring StakeClock addresses core user needs effectively.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Design Evolution */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-apple">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
                Concept Evolution
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="bg-red-100 rounded-xl p-4 mr-4">
                      <h4 className="font-semibold text-red-800 mb-2">Initial Concept</h4>
                      <p className="text-red-700 text-sm">Simple reminder app with basic notifications</p>
                    </div>
                  </div>
                  <div className="text-apple-secondary text-2xl mx-4">→</div>
                  <div className="flex-1">
                    <div className="bg-yellow-100 rounded-xl p-4 mr-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Added Social Layer</h4>
                      <p className="text-yellow-700 text-sm">Friend pairing and shared goals</p>
                    </div>
                  </div>
                  <div className="text-apple-secondary text-2xl mx-4">→</div>
                  <div className="flex-1">
                    <div className="bg-green-100 rounded-xl p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Final: Stakes + Social</h4>
                      <p className="text-green-700 text-sm">Financial stakes with countdown timer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
        title={modalState.title}
      />
    </section>
  );
};

export default Process; 