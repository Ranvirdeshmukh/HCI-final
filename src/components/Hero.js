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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white section-padding">
      <div className="container-max text-center">
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
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100">
              <h3 className="font-semibold text-apple-text mb-2">Timeline</h3>
              <p className="text-apple-secondary">Final Project</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100">
              <h3 className="font-semibold text-apple-text mb-2">Team</h3>
              <p className="text-apple-secondary">Maeve, Baris, Ranvir</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100">
              <h3 className="font-semibold text-apple-text mb-2">Role</h3>
              <p className="text-apple-secondary">Research · Design · Testing</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100">
              <h3 className="font-semibold text-apple-text mb-2">Impact</h3>
              <p className="text-apple-secondary font-semibold text-apple-blue">313% improvement</p>
            </div>
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