import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
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
    <section className="py-24 bg-apple-gray/20 section-padding">
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
                    <span className="font-semibold text-apple-blue">Focus groups and interviews</span> with Dartmouth students exploring health and wellness habits, particularly around hydration, eating, and accountability.
                  </p>
                  <p className="text-apple-secondary leading-relaxed">
                    Synthesis revealed three key themes: <span className="font-semibold text-apple-blue">Reminders, Community, and Gamification</span> as core motivational drivers for habit formation.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-apple-blue/10 to-purple-100 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-apple-blue">Focus</div>
                      <div className="text-sm text-apple-secondary">Groups</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-apple-blue">3</div>
                      <div className="text-sm text-apple-secondary">Themes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-apple-blue">24</div>
                      <div className="text-sm text-apple-secondary">Experiment Participants</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* POV Statement */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              Point of View Statement
            </h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-apple border border-gray-100 mb-16">
              <div className="text-center mb-8">
                <img
                  src="/POV.png"
                  alt="Point of View Statement - User needs and insights"
                  className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="bg-apple-blue/10 rounded-2xl p-6">
                <p className="text-apple-text leading-relaxed text-center">
                  Our POV statement synthesizes user research insights to clearly define the problem space 
                  and user needs that StakeClock addresses.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Action Flow */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              User Action Flow
            </h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-apple border border-gray-100 mb-16">
              <div className="text-center mb-8">
                <img
                  src="/5.2_ Maeve, Ranvir, Baris.png"
                  alt="User Action Flow - Step-by-step user journey"
                  className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="bg-apple-blue/10 rounded-2xl p-6">
                <p className="text-apple-text leading-relaxed text-center">
                  This user action flow maps the complete journey from goal setting to task completion, 
                  highlighting key interaction points and decision moments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Focus Group Insights */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              Key Focus Group Insights
            </h3>
            
            <div className="bg-apple-gray/30 rounded-3xl p-8 md:p-12 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">45%</div>
                  <h4 className="font-semibold text-apple-text mb-2">Positive Sentiment</h4>
                  <p className="text-apple-secondary text-sm">Excitement about community support</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">35%</div>
                  <h4 className="font-semibold text-apple-text mb-2">Neutral Sentiment</h4>
                  <p className="text-apple-secondary text-sm">Factual reporting of habits</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">20%</div>
                  <h4 className="font-semibold text-apple-text mb-2">Negative Sentiment</h4>
                  <p className="text-apple-secondary text-sm">Frustration over forgetfulness</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-2xl">
                <p className="text-apple-text leading-relaxed">
                  <span className="font-bold">Key Quote:</span> "I get so busy during the day that I realize at 3 PM I haven't had any water." 
                  This highlights the need for intelligent, context-aware reminders that respect users' schedules while promoting healthy habits.
                </p>
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
                    <span className="text-apple-secondary ml-2">Frustration - a nudge to drink water</span>
                  </div>
                  <div>
                    <span className="font-semibold text-apple-text">Goal:</span>
                    <span className="text-apple-secondary ml-2">Stay on top of fitness goals and remain hydrated</span>
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
                    <span className="text-apple-secondary ml-2">Frustration - an accountability partner when consistent with fitness routine</span>
                  </div>
                  <div>
                    <span className="font-semibold text-apple-text">Goal:</span>
                    <span className="text-apple-secondary ml-2">Stay consistent with fitness routine/stay healthy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-apple-blue/10 rounded-2xl p-6 mt-8">
              <p className="text-lg font-medium text-apple-text text-center">
                <span className="font-bold">Point of View:</span> Students and young professionals need intelligent accountability partners that stay fun and rewarding, helping them maintain consistent healthy habits without feeling overwhelmed or judged.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;