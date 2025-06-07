import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <footer className="py-16 bg-apple-dark section-padding">
      <div className="container-max">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center space-y-8"
        >
          {/* Credits */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Credits
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-apple-blue to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">MC</span>
                </div>
                <h4 className="font-semibold text-white text-lg mb-2">Maeve Conneely</h4>
                <p className="text-gray-400">Research & User Experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">BY</span>
                </div>
                <h4 className="font-semibold text-white text-lg mb-2">Baris Yildirim</h4>
                <p className="text-gray-400">Interaction & Visual Design</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">RD</span>
                </div>
                <h4 className="font-semibold text-white text-lg mb-2">Ranvir Deshmukh</h4>
                <p className="text-gray-400">Prototyping & Development</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                Research, design, and testing by Maeve Conneely, Baris Yildirim, and Ranvir Deshmukh. 
                Special thanks to <span className="font-semibold text-white">24 pilot users</span> who hydrated, stretched, 
                and checked‑in so we could learn.
              </p>
            </div>
          </div>

          {/* Project Info */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h5 className="font-semibold text-white mb-2">Institution</h5>
                <p className="text-gray-400">Dartmouth College</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Course</h5>
                <p className="text-gray-400">HCI Capstone</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Duration</h5>
                <p className="text-gray-400">4 weeks</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Year</h5>
                <p className="text-gray-400">2024</p>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-2xl">⏰</span>
              <h4 className="text-xl font-bold text-white">StakeClock</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Together gets it done — stakes keep it real
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 StakeClock Case Study. Created for educational purposes.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 