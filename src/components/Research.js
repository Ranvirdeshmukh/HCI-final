import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
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
    <section className="py-24 bg-apple-gray/20 section-padding">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-24"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-apple-text mb-6">
              Research & Discovery
            </h2>
            <div className="w-24 h-1 bg-apple-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Research Method */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-apple">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-apple-text mb-6">
                    Research Method
                  </h3>
                  <p className="text-lg text-apple-text leading-relaxed mb-6">
                    <span className="font-semibold text-apple-blue">8 semi‑structured interviews</span> with Dartmouth students & recent grads about hydration, workouts, and meal‑timing lapses.
                  </p>
                  <p className="text-apple-secondary leading-relaxed">
                    Affinity mapping revealed three motivation levers: gentle reminders, community support, and gamified stakes.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-apple-blue/10 to-purple-100 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-apple-blue">8</div>
                      <div className="text-sm text-apple-secondary">Interviews</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-apple-blue">3</div>
                      <div className="text-sm text-apple-secondary">Key Areas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-apple-blue">24</div>
                      <div className="text-sm text-apple-secondary">Total Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Design Principles */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              Design Principles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="font-bold text-apple-text text-center mb-4">
                  Supportive, not competitive
                </h4>
                <p className="text-apple-secondary text-center leading-relaxed">
                  Focus on mutual success rather than competition between friends.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h4 className="font-bold text-apple-text text-center mb-4">
                  Respect users' time & attention
                </h4>
                <p className="text-apple-secondary text-center leading-relaxed">
                  Minimal interruptions with meaningful, timely notifications.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🎉</span>
                </div>
                <h4 className="font-bold text-apple-text text-center mb-4">
                  Celebrate progress, not perfection
                </h4>
                <p className="text-apple-secondary text-center leading-relaxed">
                  Acknowledge small wins and learning from missed opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Research Questions */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-apple-blue/5 to-purple-50 rounded-3xl p-8 md:p-12 border border-apple-blue/10">
              <h3 className="text-2xl md:text-3xl font-bold text-apple-text mb-8 text-center">
                Key Research Questions
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <p className="text-lg text-apple-text leading-relaxed">
                    Which factors (goal‑setting, streaks, haptics) actually motivate behavior change?
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <p className="text-lg text-apple-text leading-relaxed">
                    How much privacy do users expect when sharing accountability with friends?
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Personas */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              Target Users
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-apple">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-apple-text text-xl">Busy Student</h4>
                    <p className="text-apple-secondary">Dartmouth undergrad</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-apple-text">Need:</span>
                    <span className="text-apple-secondary ml-2">A nudge to drink water</span>
                  </div>
                  <div>
                    <span className="font-semibold text-apple-text">Goal:</span>
                    <span className="text-apple-secondary ml-2">Stay hydrated during study sessions</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-apple">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-apple-text text-xl">Young Professional</h4>
                    <p className="text-apple-secondary">Recent graduate</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-apple-text">Need:</span>
                    <span className="text-apple-secondary ml-2">Accountability partner</span>
                  </div>
                  <div>
                    <span className="font-semibold text-apple-text">Goal:</span>
                    <span className="text-apple-secondary ml-2">Stick to workout routine</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-apple-blue/10 rounded-2xl p-6 mt-8">
              <p className="text-lg font-medium text-apple-text text-center">
                <span className="font-bold">Point of View:</span> Busy achievers need a lightweight, high‑commitment nudge so they actually stick to healthy micro‑habits during crunch weeks.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;