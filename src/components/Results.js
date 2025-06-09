import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveChart from './InteractiveChart';
import ImageModal from './ImageModal';

const Results = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    title: ''
  });

  const openModal = (imageSrc, imageAlt, title) => {
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
              Results & Testing
            </h2>
            <div className="w-24 h-1 bg-apple-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Interactive Chart */}
          <motion.div variants={fadeInUp}>
            <InteractiveChart />
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
                       <td className="py-6 px-6 font-medium text-apple-text">Group 1: Digital‑only (n=7)</td>
                       <td className="py-6 px-6 text-center">
                         <span className="text-2xl font-bold text-red-600">1.14</span>
                       </td>
                       <td className="py-6 px-6 text-center text-apple-secondary">0.64</td>
                       <td className="py-6 px-6 text-center text-apple-secondary">14.3%</td>
                       <td className="py-6 px-6 text-center text-apple-secondary">71.4%</td>
                     </tr>
                     <tr className="border-b border-apple-gray/50 hover:bg-apple-gray/30 transition-colors">
                       <td className="py-6 px-6 font-medium text-apple-text">Group 2: Social reminders (n=7)</td>
                       <td className="py-6 px-6 text-center">
                         <span className="text-2xl font-bold text-yellow-600">2.86</span>
                       </td>
                       <td className="py-6 px-6 text-center text-apple-secondary">0.83</td>
                       <td className="py-6 px-6 text-center text-apple-secondary">50.0%</td>
                       <td className="py-6 px-6 text-center text-apple-secondary">50.0%</td>
                     </tr>
                     <tr className="hover:bg-apple-gray/30 transition-colors">
                       <td className="py-6 px-6 font-medium text-apple-text">Group 3: Social + Financial (n=10)</td>
                       <td className="py-6 px-6 text-center">
                         <span className="text-2xl font-bold text-green-600">4.71</span>
                       </td>
                       <td className="py-6 px-6 text-center text-apple-secondary">0.47</td>
                       <td className="py-6 px-6 text-center text-apple-secondary">83.3%</td>
                       <td className="py-6 px-6 text-center">
                         <span className="font-bold text-green-600">100%</span>
                       </td>
                     </tr>
                  </tbody>
                </table>
              </div>
              
                             <div className="mt-8 p-6 bg-apple-blue/10 rounded-2xl">
                 <p className="text-apple-text text-center font-medium">
                   <span className="font-bold text-apple-blue">Statistical Significance:</span> Group 1 vs Group 2: p = 0.00028; Group 1 vs Group 3: p = 7.51 × 10⁻⁸. Both results reject the null hypothesis (α = 0.05), proving social and financial elements significantly increase task completion.
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
                   Social + Financial Most Effective
                 </h4>
                 <p className="text-apple-secondary text-center leading-relaxed mb-4">
                   Group 3 (Social + Financial) showed highest task completion (4.71 avg.) and 100% likelihood to continue, though 83.3% reported some anxiety.
                 </p>
                 <blockquote className="text-apple-text italic text-sm text-center border-l-4 border-apple-blue pl-4">
                   "The combination was overwhelming but motivating."
                 </blockquote>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">⚡</span>
                </div>
                                 <h4 className="font-bold text-apple-text text-center mb-4 text-xl">
                   Digital Reminders Least Effective
                 </h4>
                 <p className="text-apple-secondary text-center leading-relaxed">
                   Group 1 (Digital-only) had lowest completion (1.14 avg.) and least anxiety (14.3%), but participants found digital reminders easy to ignore.
                 </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-apple hover-lift">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🎯</span>
                </div>
                                 <h4 className="font-bold text-apple-text text-center mb-4 text-xl">
                   Social Accountability Works
                 </h4>
                 <p className="text-apple-secondary text-center leading-relaxed">
                   Group 2 (Social-only) showed significant improvement over digital (2.86 vs 1.14), demonstrating peer accountability's effectiveness even without financial incentives.
                 </p>
              </div>
            </div>
          </motion.div>

          {/* Product Demo */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-apple-gray/20 to-apple-blue/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-8">
                StakeClock App Experience
              </h3>
              <p className="text-lg text-apple-secondary text-center mb-12 max-w-3xl mx-auto">
                Here's the actual StakeClock interface our participants used during the controlled experiment. 
                The app combines social accountability with financial stakes to drive habit completion.
              </p>
              
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group max-w-sm mx-auto cursor-pointer"
                  onClick={() => openModal("/stakeclock-product.png", "StakeClock App Interface - Real product used in controlled experiment showing countdown timer, social features, and stake selection", "StakeClock App Experience")}
                >
                  <img
                    loading="lazy"
                    src="/stakeclock-product.png"
                    alt="StakeClock App Interface - Real product used in controlled experiment showing countdown timer, social features, and stake selection"
                    className="w-full h-auto rounded-3xl shadow-apple-lg hover:shadow-2xl transition-all duration-300 bg-white p-6"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-3xl transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300 mb-8">
                      <span className="text-xs font-medium text-apple-text">🔍 Click to enlarge</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-medium text-apple-text">Actual Product Tested</span>
                  </div>
                </motion.div>
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
                   <div className="text-5xl md:text-6xl font-bold mb-2">313%</div>
                   <p className="text-xl opacity-90">Increase: Social+Financial (4.71) vs Digital-only (1.14)</p>
                 </div>
                 
                 <div>
                   <div className="text-5xl md:text-6xl font-bold mb-2">p &lt; 0.001</div>
                   <p className="text-xl opacity-90">Statistical significance achieved for both social conditions</p>
                 </div>
                 
                 <div>
                   <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
                   <p className="text-xl opacity-90">Group 3 participants likely to incorporate wellness reminders</p>
                 </div>
               </div>
              
                             <div className="bg-white/20 rounded-2xl p-6">
                 <p className="text-xl leading-relaxed">
                   <span className="font-bold">Hypothesis Confirmed:</span> Results supported our hypothesis that participants receiving social and financial reminders would complete more tasks than social-only, which would outperform digital-only reminders.
                 </p>
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

export default Results; 