import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiCalendar, FiUser } = FiIcons;

const DolphinsSection = () => {
  return (
    <section id="dolphins" className="py-20 bg-navy-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-vapor-50 mb-4">
            LEGACY OF THE DOLPHINS
          </h2>
          <p className="text-vapor-200 text-lg max-w-2xl mx-auto">
            The submarine warfare qualification badge represents mastery of submarine operations and unwavering dedication to the Silent Service
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dolphins Badge Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-navy-900/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-8 text-center">
              {/* Dolphins Badge Representation */}
              <div className="relative mx-auto mb-6 w-64 h-32 bg-gradient-to-r from-brass-500 to-yellow-400 rounded-lg flex items-center justify-center">
                <div className="text-navy-900 font-bold text-lg">
                  SUBMARINE WARFARE
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 text-sonar-500" />
                  <span className="text-vapor-200 font-mono">
                    Qualified: March 15, 2013
                  </span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <SafeIcon icon={FiUser} className="w-5 h-5 text-sonar-500" />
                  <span className="text-vapor-200 font-mono">
                    Sponsor: MMCS(SS) Johnson
                  </span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <SafeIcon icon={FiAward} className="w-5 h-5 text-sonar-500" />
                  <span className="text-vapor-200 font-mono">
                    USS Virginia (SSN-774)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-navy-900/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6">
              <h3 className="font-heading text-2xl font-bold text-vapor-50 mb-4">
                The Journey to Qualification
              </h3>
              
              <div className="space-y-4 text-vapor-200 leading-relaxed">
                <p>
                  The path to earning the Submarine Warfare Qualification badge is one of the most challenging in the Navy. 
                  It requires mastery of every system aboard the submarine, from nuclear propulsion to weapons systems, 
                  from life support to navigation.
                </p>
                
                <p>
                  For 18 months, I studied every blueprint, traced every pipe, and learned every emergency procedure. 
                  The qualification board was the culmination of countless hours of study and practical application.
                </p>
                
                <p>
                  On March 15, 2013, I stood before the qualification board and answered questions that would determine 
                  my worthiness to wear the dolphins. The moment MMCS Johnson pinned the badge to my uniform was one 
                  of the proudest of my naval career.
                </p>
              </div>
            </div>

            <div className="bg-navy-900/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-vapor-50 mb-4">
                What the Dolphins Mean
              </h3>
              
              <blockquote className="text-vapor-200 italic text-lg leading-relaxed border-l-4 border-sonar-500 pl-4">
                "The dolphins are more than a qualification badge. They represent trust, competence, and the sacred bond 
                between submariners. When you wear the dolphins, you carry the responsibility of every soul aboard the boat."
              </blockquote>
              
              <div className="mt-4 text-right">
                <span className="text-sonar-500 font-mono text-sm">
                  - MM1(SS) Daniel Foster
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DolphinsSection;