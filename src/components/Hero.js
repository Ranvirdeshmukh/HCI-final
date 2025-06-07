import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 section-padding relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-apple-blue/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-apple-blue/5 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container-max text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Project badge */}
          <motion.div variants={fadeInUp}>
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-apple-blue/10 text-apple-blue text-sm font-medium mb-6">
              Final Project •  COSC 67/267 Human-Computer Interaction
            </span>
          </motion.div>

          {/* Main title with gradient */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-gradient">StakeClock</span>
          </motion.h1>
          

          {/* Tagline */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-apple-secondary font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Together gets it done — stakes keep it real
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-apple-text max-w-3xl mx-auto leading-relaxed"
          >
            A social‑accountability timer that pairs friends—and their shared cash "stake"—to turn good intentions into completed habits. 
            Ignore the reminder and the money auto‑donates to charity; beat the countdown and you both keep the cash.
          </motion.p>

          {/* Project info grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mt-16 max-w-4xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:shadow-apple hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="font-semibold text-apple-text mb-2">Timeline</h3>
              <p className="text-apple-secondary">Final Project</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:shadow-apple hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-apple-text mb-2">Team</h3>
              <p className="text-apple-secondary">Maeve, Baris, Ranvir</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:shadow-apple hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-apple-text mb-2">Role</h3>
              <p className="text-apple-secondary">Research · Design · Testing</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:shadow-apple hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-apple-text mb-2">Impact</h3>
              <p className="text-apple-secondary font-semibold text-apple-blue">313% improvement</p>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-apple-secondary rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="w-1 h-3 bg-apple-secondary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 