import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiSun, FiMoon, FiAnchor } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Mission Brief', href: '#hero' },
    { name: 'Service Record', href: '#timeline' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Dolphins', href: '#dolphins' },
    { name: 'Awards', href: '#awards' },
    { name: 'Operations', href: '#map' },
    { name: 'Guestbook', href: '#guestbook' },
    { name: 'Family', href: '#family' },
    { name: 'Time Capsule', href: '#capsule' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-md border-b border-sonar-500/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <SafeIcon icon={FiAnchor} className="w-8 h-8 text-sonar-500" />
              <span className="font-heading text-xl font-bold text-vapor-50">
                SILENT SERVICE
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  className="text-vapor-200 hover:text-sonar-500 transition-colors font-mono text-sm tracking-wide"
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-navy-800 hover:bg-navy-700 transition-colors"
              >
                <SafeIcon 
                  icon={isDarkMode ? FiSun : FiMoon} 
                  className="w-5 h-5 text-sonar-500" 
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 rounded-full bg-navy-800 hover:bg-navy-700 transition-colors"
            >
              <SafeIcon 
                icon={isOpen ? FiX : FiMenu} 
                className="w-6 h-6 text-sonar-500" 
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-80 bg-navy-900/95 backdrop-blur-md z-40 lg:hidden"
      >
        <div className="pt-20 px-6">
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block w-full text-left py-3 px-4 text-vapor-200 hover:text-sonar-500 hover:bg-navy-800/50 rounded-lg transition-all font-mono text-sm tracking-wide"
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="flex items-center space-x-3 w-full py-3 px-4 text-vapor-200 hover:text-sonar-500 hover:bg-navy-800/50 rounded-lg transition-all font-mono text-sm tracking-wide"
            >
              <SafeIcon 
                icon={isDarkMode ? FiSun : FiMoon} 
                className="w-5 h-5" 
              />
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  );
};

export default Navigation;