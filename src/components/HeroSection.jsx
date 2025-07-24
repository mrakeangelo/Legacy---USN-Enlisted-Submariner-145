import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown } = FiIcons;

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#timeline');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 to-navy-900/80">
        <img 
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"
          alt="Submarine at sea"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sonar Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border border-sonar-500/20 rounded-full"
            animate={{
              scale: [1, 1.5, 2],
              opacity: [0.5, 0.2, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.3,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          {/* Rank and Name */}
          <div className="font-mono text-sonar-500 text-sm tracking-widest">
            PETTY OFFICER FIRST CLASS
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-vapor-50">
            DANIEL FOSTER
          </h1>
          
          <div className="font-mono text-vapor-200 text-lg tracking-wide">
            MM1(SS) • USN • 2008-2024
          </div>
          
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="max-w-2xl mx-auto"
          >
            <blockquote className="text-xl md:text-2xl text-vapor-100 italic font-light leading-relaxed">
              "Silence is our duty. Depth is our domain."
            </blockquote>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToNext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-sonar-500 hover:bg-sonar-400 text-navy-900 px-8 py-4 rounded-lg font-mono font-semibold tracking-wide transition-all duration-300 mt-8"
          >
            <span>DIVE INTO THE LEGACY</span>
            <SafeIcon icon={FiChevronDown} className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sonar-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-sonar-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;