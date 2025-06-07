import React from 'react';
import { motion } from 'framer-motion';

const Reflection = () => {
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
    <section className="py-24 bg-white section-padding">
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
              Reflection & Next Steps
            </h2>
            <div className="w-24 h-1 bg-apple-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Key Learnings */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-apple-blue/5 to-purple-50 rounded-3xl p-8 md:p-12 border border-apple-blue/10">
              <h3 className="text-2xl md:text-3xl font-bold text-apple-text text-center mb-8">
                Key Learning
              </h3>
              <p className="text-lg md:text-xl text-apple-text leading-relaxed text-center">
                Designing for behavior change means <span className="font-bold text-apple-blue">balancing motivation with emotional safety</span>. 
                StakeClock proves that tiny stakes—social and financial—can tip the scales toward action, 
                as long as users stay in control of the pressure dial.
              </p>
            </div>
          </motion.div>

          {/* Future Improvements */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              Future Improvements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🎚️</span>
                </div>
                <h4 className="font-bold text-apple-text text-xl mb-4 text-center">
                  Adaptive Pressure
                </h4>
                <p className="text-apple-secondary leading-relaxed text-center">
                  Start with social only, escalate to financial if streaks slip. 
                  Smart algorithms that adjust pressure based on user success patterns.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📅</span>
                </div>
                <h4 className="font-bold text-apple-text text-xl mb-4 text-center">
                  Context‑Aware Timing
                </h4>
                <p className="text-apple-secondary leading-relaxed text-center">
                  Sync reminders with calendar availability to cut anxiety. 
                  Intelligent scheduling based on user patterns and availability.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">📊</span>
                </div>
                                 <h4 className="font-bold text-apple-text text-xl mb-4 text-center">
                   Experimental Improvements
                 </h4>
                 <p className="text-apple-secondary leading-relaxed text-center">
                   Include a true control group with no reminders. 
                   Expand sample size for better balance between groups and more robust statistical analysis.
                 </p>
              </div>
            </div>
          </motion.div>

          {/* Design Principles Learned */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-apple-gray/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-apple-text text-center mb-8">
                Design Principles We Discovered
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-apple-text mb-2">Controllable Pressure</h4>
                    <p className="text-apple-secondary leading-relaxed">
                      Users need control over the level of accountability they experience. 
                      What motivates one person may overwhelm another.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-apple-text mb-2">Shared Victory</h4>
                    <p className="text-apple-secondary leading-relaxed">
                      Frame success as "earning together" rather than "avoiding punishment" 
                      to maintain positive relationships and motivation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-apple-text mb-2">Contextual Awareness</h4>
                    <p className="text-apple-secondary leading-relaxed">
                      Timing is everything. The same reminder at different moments 
                      can be helpful or intrusive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Impact */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-apple">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
                Project Impact
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-2">Academic Recognition</h4>
                    <p className="text-green-700">
                      Won "Most Actionable Design" award in the Dartmouth HCI capstone showcase, 
                      recognized for practical applicability and strong research foundation.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-2">Behavioral Insights</h4>
                    <p className="text-blue-700">
                      Provided empirical evidence for the effectiveness of combined social and 
                      financial motivation in digital behavior change interventions.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-apple-blue to-purple-600 rounded-full mb-6">
                    <span className="text-white text-5xl font-bold">24</span>
                  </div>
                  <h4 className="font-bold text-apple-text text-xl mb-4">
                    Users Tested
                  </h4>
                  <p className="text-apple-secondary leading-relaxed">
                    24 pilot users helped validate our approach across diverse use cases: 
                    hydration, exercise, and meal timing habits.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Quote */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-apple-text italic leading-relaxed">
              "The best accountability systems don't just change behavior—they change how we think about commitment to ourselves and others."
            </blockquote>
            <p className="text-apple-secondary mt-6 text-lg">
              — Key insight from the StakeClock project
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reflection; 