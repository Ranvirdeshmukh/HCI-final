import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';

const Research = () => {
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

  // Simplified animation variants for better performance
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
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
                    <span className="font-semibold text-apple-blue">Focus groups and interviews</span> with Dartmouth students exploring health and wellness habits, particularly around hydration, eating, and accountability. Through systematic analysis of user behaviors and preferences, we identified critical pain points and opportunities for intervention.
                  </p>
                  <p className="text-apple-secondary leading-relaxed">
                    Synthesis revealed three key themes: <span className="font-semibold text-apple-blue">Reminders, Community, and Gamification</span> as core motivational drivers for habit formation. Detailed research findings provide comprehensive insights into user motivations and behavioral patterns.
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

          {/* Individual Background Research */}
          <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-text mb-6">
                Individual Background Research
              </h3>
              <p className="text-lg text-apple-secondary max-w-3xl mx-auto">
                Each team member conducted comprehensive background research to understand different aspects of habit formation, 
                accountability systems, and behavioral design principles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Maeve's Research */}
              <div className="bg-white rounded-3xl p-6 shadow-apple">
                <div 
                  className="relative group cursor-pointer mb-6"
                  onClick={() => openModal("/research maeve.png", "Maeve's Background Research - User experience and behavioral psychology research", "Maeve's Research")}
                >
                  <img
                    loading="lazy"
                    src="/research maeve.png"
                    alt="Maeve's Background Research - User experience and behavioral psychology research"
                    className="w-full h-auto rounded-2xl shadow-lg hover:shadow-apple-lg transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300">
                      <span className="text-xs font-medium text-apple-text">🔍 Click to enlarge</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-apple-text text-xl mb-3">Maeve Conneely</h4>
                  <p className="text-apple-secondary leading-relaxed">
                    Investigated <span className="font-semibold text-apple-blue">psychological resilience in athletic recovery and performance</span>. 
                    Studied Firefly Recovery technology and research on "The Role of Psychological Resilience in Athletic Injury Recovery and Performance." 
                    Key finding: <span className="font-medium">adaptable athletes recover better from setbacks</span>, informing how StakeClock should support users through habit formation challenges.
                  </p>
                </div>
              </div>

              {/* Baris's Research */}
              <div className="bg-white rounded-3xl p-6 shadow-apple">
                <div 
                  className="relative group cursor-pointer mb-6"
                  onClick={() => openModal("/baris resear ch.png", "Baris's Background Research - Interaction design and gamification systems", "Baris's Research")}
                >
                  <img
                    loading="lazy"
                    src="/baris resear ch.png"
                    alt="Baris's Background Research - Interaction design and gamification systems"
                    className="w-full h-auto rounded-2xl shadow-lg hover:shadow-apple-lg transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300">
                      <span className="text-xs font-medium text-apple-text">🔍 Click to enlarge</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-apple-text text-xl mb-3">Baris Yildirim</h4>
                  <p className="text-apple-secondary leading-relaxed">
                    Explored <span className="font-semibold text-apple-blue">wearables for stress management and behavioral intervention</span>. 
                    Analyzed Oura Ring technology and "Wearables for Stress Management: A Scoping Review" research. 
                    Discovered <span className="font-medium">three successful intervention types: just-in-time self-regulation, therapy support, and continuous awareness</span> — directly shaping StakeClock's real-time accountability approach.
                  </p>
                </div>
              </div>

              {/* Ranvir's Research */}
              <div className="bg-white rounded-3xl p-6 shadow-apple">
                <div 
                  className="relative group cursor-pointer mb-6"
                  onClick={() => openModal("/ranvir research.png", "Ranvir's Background Research - Technical implementation and behavioral change systems", "Ranvir's Research")}
                >
                  <img
                    loading="lazy"
                    src="/ranvir research.png"
                    alt="Ranvir's Background Research - Technical implementation and behavioral change systems"
                    className="w-full h-auto rounded-2xl shadow-lg hover:shadow-apple-lg transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300">
                      <span className="text-xs font-medium text-apple-text">🔍 Click to enlarge</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-apple-text text-xl mb-3">Ranvir Deshmukh</h4>
                  <p className="text-apple-secondary leading-relaxed">
                    Researched <span className="font-semibold text-apple-blue">recovery technologies and data-driven performance tracking</span>. 
                    Studied Normatec Recovery Boots, Whoop 4.0 strap, and "Effectiveness of Recovery Strategies in Endurance Athletes" research. 
                    Found that <span className="font-medium">cryotherapy and compression show recovery benefits, but no single strategy works universally</span> — inspiring StakeClock's personalized stake selection approach.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-apple-blue/10 rounded-2xl p-8">
              <h4 className="font-bold text-apple-text text-xl mb-4 text-center">Research Synthesis</h4>
              <p className="text-apple-text leading-relaxed text-center max-w-4xl mx-auto mb-6">
                Three distinct research streams converged into our design approach: <span className="font-semibold text-apple-blue">psychological resilience</span> (showing adaptable people recover better from setbacks), 
                <span className="font-semibold text-apple-blue">wearable intervention patterns</span> (just-in-time self-regulation, therapy support, continuous awareness), 
                and <span className="font-semibold text-apple-blue">personalized recovery strategies</span> (no universal solution works for everyone).
              </p>
              <p className="text-apple-text leading-relaxed text-center max-w-4xl mx-auto">
                This led to our core hypothesis: <span className="font-semibold text-apple-blue">
                social accountability combined with personalized financial stakes would provide just-in-time intervention while building psychological resilience
                </span> — outperforming one-size-fits-all digital reminders.
              </p>
            </div>
          </motion.div>

          {/* POV Statement */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              Point of View Statement
            </h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-apple border border-gray-100 mb-16">
              <div 
                className="text-center mb-8 relative group cursor-pointer"
                onClick={() => openModal("/POV.png", "Point of View Statement - User needs and insights", "Point of View Statement")}
              >
                <img
                  loading="lazy"
                  src="/POV.png"
                  alt="Point of View Statement - User needs and insights"
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
              <div 
                className="text-center mb-8 relative group cursor-pointer"
                onClick={() => openModal("/5.2_ Maeve, Ranvir, Baris.png", "User Action Flow - Step-by-step user journey", "User Action Flow")}
              >
                <img
                  loading="lazy"
                  src="/5.2_ Maeve, Ranvir, Baris.png"
                  alt="User Action Flow - Step-by-step user journey"
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

          {/* Detailed Research Findings */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-text text-center mb-12">
              Research Group Findings
            </h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-apple border border-gray-100 mb-16">
              <div 
                className="text-center mb-8 relative group cursor-pointer"
                onClick={() => openModal("/research group findings.png", "Research Group Findings - Detailed analysis of focus group sessions and user interviews", "Research Group Findings")}
              >
                <img
                  loading="lazy"
                  src="/research group findings.png"
                  alt="Research Group Findings - Detailed analysis of focus group sessions and user interviews"
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
                  Comprehensive analysis from our focus group sessions revealed deep insights into user motivations, 
                  behavioral patterns, and the key themes that shaped our design approach.
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

export default Research;