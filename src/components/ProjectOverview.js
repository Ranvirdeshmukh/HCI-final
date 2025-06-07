import React from 'react';
import { motion } from 'framer-motion';

const ProjectOverview = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3
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
          {/* Background Section */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-apple-text mb-6">
                Background
              </h2>
              <div className="w-24 h-1 bg-apple-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-apple-gray/30 rounded-3xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-apple-text leading-relaxed mb-8">
                Traditional reminder apps are painless to dismiss—no urgency, no consequence, and no human on the other end. 
                Focus groups with students revealed that health is personal and contextual, shaped by lifestyle, culture, work schedule, and energy levels. As one participant noted: "What works for one person doesn't work for another, I need flexibility, not a rigid plan."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-apple">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-semibold text-apple-text mb-2">Easy to Dismiss</h3>
                  <p className="text-apple-secondary">Digital nudges are easy to swipe away.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-apple">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-semibold text-apple-text mb-2">No Accountability</h3>
                  <p className="text-apple-secondary">Lack of accountability kills motivation.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-apple">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h3 className="font-semibold text-apple-text mb-2">No Stakes</h3>
                  <p className="text-apple-secondary">No real stakes means "I'll do it later."</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-apple-text mb-8">
              Problem & Opportunity
            </h2>
            <div className="bg-gradient-to-r from-apple-blue/10 to-purple-100 rounded-3xl p-8 md:p-12">
              <p className="text-xl md:text-2xl font-medium text-apple-text leading-relaxed">
                How might we combine social presence and meaningful stakes so that follow‑through feels effortless—even on the busiest days?
              </p>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-apple-text mb-6">
                Solution
              </h2>
              <div className="w-24 h-1 bg-apple-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-apple-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-apple-text mb-2">Set Task with Friend</h3>
                    <p className="text-apple-secondary">Set a task with a friend and agree on a shared $ stake.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-apple-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-apple-text mb-2">Countdown Reminder</h3>
                    <p className="text-apple-secondary">Countdown reminder fires at the scheduled time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-apple-text mb-2">Complete or Donate</h3>
                    <p className="text-apple-secondary">Tap Complete before time's up → keep the cash. Miss it → money auto‑donates to charity.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-apple-blue/10 to-purple-100 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 mx-auto">
                    <span className="text-5xl">⏰</span>
                  </div>
                  <p className="text-lg font-medium text-apple-text">
                    Social pings plus real money make the cost of inaction tangible and the win truly shared.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOverview; 