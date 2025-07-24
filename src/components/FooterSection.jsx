import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart, FiShield } = FiIcons;

const FooterSection = () => {
  const quotes = [
    "We hide in the silence so others may live in peace.",
    "Silent service, deadly force.",
    "In the depths, we find our strength.",
    "Honor, courage, commitment - beneath the waves.",
    "The sea is our domain, silence our weapon."
  ];

  return (
    <footer className="relative bg-navy-900 border-t border-sonar-500/20 py-16">
      {/* Submarine Schematic Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-sonar-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            key={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto"
          >
            <blockquote className="text-xl md:text-2xl text-vapor-200 italic font-light leading-relaxed">
              "{quotes[0]}"
            </blockquote>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Service Summary */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <SafeIcon icon={FiAnchor} className="w-6 h-6 text-sonar-500" />
              <h3 className="font-heading text-xl font-bold text-vapor-50">
                SERVICE SUMMARY
              </h3>
            </div>
            <div className="space-y-2 text-vapor-200 font-mono text-sm">
              <p>MM1(SS) Daniel Foster</p>
              <p>United States Navy</p>
              <p>2008 - 2024</p>
              <p>Silent Service</p>
            </div>
          </div>

          {/* Dedication */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <SafeIcon icon={FiHeart} className="w-6 h-6 text-sonar-500" />
              <h3 className="font-heading text-xl font-bold text-vapor-50">
                DEDICATION
              </h3>
            </div>
            <p className="text-vapor-200 leading-relaxed">
              Dedicated to all who serve beneath the waves and the families who support them from above.
            </p>
          </div>

          {/* Values */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 mb-4">
              <SafeIcon icon={FiShield} className="w-6 h-6 text-sonar-500" />
              <h3 className="font-heading text-xl font-bold text-vapor-50">
                CORE VALUES
              </h3>
            </div>
            <div className="space-y-2 text-vapor-200 font-mono text-sm">
              <p>Honor</p>
              <p>Courage</p>
              <p>Commitment</p>
              <p>Integrity</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sonar-500/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-vapor-300 text-sm">
              <span>© 2024 Silent Service Digital Memorial</span>
            </div>
            
            <div className="flex items-center space-x-4 text-vapor-300 text-sm">
              <span>Crafted with</span>
              <SafeIcon icon={FiHeart} className="w-4 h-4 text-sonar-500" />
              <span>by</span>
              <span className="font-mono font-semibold text-sonar-500">
                Mrake Agency
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;