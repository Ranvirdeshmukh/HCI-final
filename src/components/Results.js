import React from 'react';
import { motion } from 'framer-motion';

const Results = () => {
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
              Results & Testing
            </h2>
            <div className="w-24 h-1 bg-apple-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Controlled Experiment Results */}
          <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-apple">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
                Controlled Experiment
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-apple-gray">
                      <th className="text-left py-4 px-6 font-semibold text-apple-text">Condition</th>
                      <th className="text-center py-4 px-6 font-semibold text-apple-text">Avg. Tasks Completed</th>
                      <th className="text-center py-4 px-6 font-semibold text-apple-text">Standard Deviation</th>
                      <th className="text-center py-4 px-6 font-semibold text-apple-text">Anxiety Reported</th>
                      <th className="text-center py-4 px-6 font-semibold text-apple-text">"Would Keep Using"</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-apple-gray/50 hover:bg-apple-gray/30 transition-colors">
                      <td className="py-6 px-6 font-medium text-apple-text">Digital‑only</td>
                      <td className="py-6 px-6 text-center">
                        <span className="text-2xl font-bold text-red-600">1.14</span>
                      </td>
                      <td className="py-6 px-6 text-center text-apple-secondary">0.64</td>
                      <td className="py-6 px-6 text-center text-apple-secondary">14%</td>
                      <td className="py-6 px-6 text-center text-apple-secondary">71%</td>
                    </tr>
                    <tr className="border-b border-apple-gray/50 hover:bg-apple-gray/30 transition-colors">
                      <td className="py-6 px-6 font-medium text-apple-text">Social reminders</td>
                      <td className="py-6 px-6 text-center">
                        <span className="text-2xl font-bold text-yellow-600">2.86</span>
                      </td>
                      <td className="py-6 px-6 text-center text-apple-secondary">0.83</td>
                      <td className="py-6 px-6 text-center text-apple-secondary">50%</td>
                      <td className="py-6 px-6 text-center text-apple-secondary">50%</td>
                    </tr>
                    <tr className="hover:bg-apple-gray/30 transition-colors">
                      <td className="py-6 px-6 font-medium text-apple-text">Social + Financial</td>
                      <td className="py-6 px-6 text-center">
                        <span className="text-2xl font-bold text-green-600">4.71</span>
                      </td>
                      <td className="py-6 px-6 text-center text-apple-secondary">0.47</td>
                      <td className="py-6 px-6 text-center text-apple-secondary">83%</td>
                      <td className="py-6 px-6 text-center">
                        <span className="font-bold text-green-600">100%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 p-6 bg-apple-blue/10 rounded-2xl">
                <p className="text-apple-text text-center font-medium">
                  <span className="font-bold text-apple-blue">Key Finding:</span> Both social conditions significantly out‑performed digital‑only (p &lt; 0.001); adding a financial stake drove the biggest lift.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Insights */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              Key Insights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">💰</span>
                </div>
                <h4 className="font-bold text-apple-text text-center mb-4 text-xl">
                  Money Amplifies Commitment
                </h4>
                <p className="text-apple-secondary text-center leading-relaxed mb-4">
                  Financial stakes significantly increased task completion but also elevated stress levels.
                </p>
                <blockquote className="text-apple-text italic text-sm text-center border-l-4 border-apple-blue pl-4">
                  "I finally drank water before noon."
                </blockquote>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-bold text-apple-text text-center mb-4 text-xl">
                  Pressure Welcomed
                </h4>
                <p className="text-apple-secondary text-center leading-relaxed">
                  Some users welcomed the pressure and found it motivating rather than stressful, leading to positive behavior change.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="font-bold text-apple-text text-center mb-4 text-xl">
                  Personal Rhythm Matters
                </h4>
                <p className="text-apple-secondary text-center leading-relaxed">
                  One‑size‑fits‑all reminders missed personal rhythm and optimal timing for individual users.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Iterations */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-apple">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
                Design Iterations
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-apple-text text-xl mb-3">Stake Selector</h4>
                    <p className="text-apple-secondary leading-relaxed">
                      Added stake selector (no $, $5, $20) to let users dial pressure according to their comfort level and motivation needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-apple-text text-xl mb-3">Encourage Feature</h4>
                    <p className="text-apple-secondary leading-relaxed">
                      Embedded "encourage" emoji reply so partners can nudge without nagging, maintaining positive social dynamics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-apple-text text-xl mb-3">Reduced Notification Clutter</h4>
                    <p className="text-apple-secondary leading-relaxed">
                      Single persistent countdown instead of multiple pop‑ups to respect users' attention and reduce notification fatigue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Outcome */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-apple-blue to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Final Outcome
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">+313%</div>
                  <p className="text-xl opacity-90">Increase in task completion vs. digital‑only baseline</p>
                </div>
                
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">🏆</div>
                  <p className="text-xl opacity-90">Won "Most Actionable Design" in class showcase</p>
                </div>
                
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
                  <p className="text-xl opacity-90">Users would keep using the Social + Financial version</p>
                </div>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-6">
                <p className="text-xl leading-relaxed">
                  <span className="font-bold">Qualitative feedback</span> highlighted the power of shared victory—users said finishing felt like "earning money together, not paying a fine."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results; 