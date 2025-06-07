import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveChart = () => {
  const [activeBar, setActiveBar] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  const data = [
    {
      id: 'digital',
      label: 'Digital Only',
      value: 1.14,
      participants: 7,
      color: 'bg-red-400',
      lightColor: 'bg-red-100',
      anxiety: 14.3,
      continue: 71.4
    },
    {
      id: 'social',
      label: 'Social',
      value: 2.86,
      participants: 7,
      color: 'bg-yellow-400',
      lightColor: 'bg-yellow-100',
      anxiety: 50,
      continue: 50
    },
    {
      id: 'social-financial',
      label: 'Social + Financial',
      value: 4.71,
      participants: 10,
      color: 'bg-green-500',
      lightColor: 'bg-green-100',
      anxiety: 83.3,
      continue: 100
    }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-apple-text mb-4">
          Task Completion by Condition
        </h3>
        <p className="text-apple-secondary">
          Average tasks completed per participant across three experimental conditions
        </p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-3xl p-8 shadow-apple border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-8">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              className="text-center cursor-pointer"
              onHoverStart={() => setActiveBar(item.id)}
              onHoverEnd={() => setActiveBar(null)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Bar */}
              <div className="relative h-64 flex items-end justify-center mb-4">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ 
                    height: animationComplete ? `${(item.value / maxValue) * 100}%` : 0 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.3,
                    ease: "easeOut"
                  }}
                  className={`w-16 ${item.color} rounded-t-lg relative shadow-lg`}
                >
                  {/* Value label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 + 1.5 }}
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm font-semibold"
                  >
                    {item.value}
                  </motion.div>
                </motion.div>
              </div>

              {/* Label */}
              <h4 className="font-semibold text-apple-text mb-2">{item.label}</h4>
              <p className="text-apple-secondary text-sm">n = {item.participants}</p>

              {/* Hover Details */}
              {activeBar === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 ${item.lightColor} rounded-xl border border-gray-200`}
                >
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-apple-secondary">Anxiety Level:</span>
                      <span className="font-semibold">{item.anxiety}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-apple-secondary">Likelihood to Continue:</span>
                      <span className="font-semibold">{item.continue}%</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-200">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">📈 Key Finding</h4>
            <p className="text-green-700 text-sm">
              Social + Financial condition achieved <strong>313% improvement</strong> over digital-only baseline
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">📊 Statistical Significance</h4>
            <p className="text-blue-700 text-sm">
              All comparisons showed <strong>p &lt; 0.001</strong>, indicating highly significant results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveChart; 