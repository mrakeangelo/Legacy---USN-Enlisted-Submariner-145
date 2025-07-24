import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiAnchor, FiUsers, FiTrendingUp } = FiIcons;

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: '2008',
      title: 'Boot Camp',
      location: 'Great Lakes, IL',
      description: 'Completed Naval Basic Training',
      icon: FiAnchor,
      type: 'training'
    },
    {
      year: '2009',
      title: 'Nuclear Power School',
      location: 'Charleston, SC',
      description: 'Nuclear Propulsion Training',
      icon: FiTrendingUp,
      type: 'nuclear'
    },
    {
      year: '2010',
      title: 'Prototype Training',
      location: 'Charleston, SC',
      description: 'Hands-on reactor operations',
      icon: FiTrendingUp,
      type: 'nuclear'
    },
    {
      year: '2011',
      title: 'Submarine School',
      location: 'Groton, CT',
      description: 'Basic Submarine Training',
      icon: FiAnchor,
      type: 'submarine'
    },
    {
      year: '2012',
      title: 'USS Virginia (SSN-774)',
      location: 'Norfolk, VA',
      description: 'First submarine assignment',
      icon: FiAnchor,
      type: 'assignment'
    },
    {
      year: '2013',
      title: 'Submarine Warfare Qualification',
      location: 'At Sea',
      description: 'Earned the Dolphins',
      icon: FiAward,
      type: 'qualification'
    },
    {
      year: '2016',
      title: 'Petty Officer Third Class',
      location: 'USS Virginia',
      description: 'Promoted to E-4',
      icon: FiTrendingUp,
      type: 'promotion'
    },
    {
      year: '2018',
      title: 'Petty Officer Second Class',
      location: 'USS Virginia',
      description: 'Promoted to E-5',
      icon: FiTrendingUp,
      type: 'promotion'
    },
    {
      year: '2020',
      title: 'USS Columbia (SSN-771)',
      location: 'Pearl Harbor, HI',
      description: 'Transfer to Pacific Fleet',
      icon: FiAnchor,
      type: 'assignment'
    },
    {
      year: '2022',
      title: 'Petty Officer First Class',
      location: 'USS Columbia',
      description: 'Promoted to E-6',
      icon: FiTrendingUp,
      type: 'promotion'
    },
    {
      year: '2023',
      title: 'Leading Petty Officer',
      location: 'USS Columbia',
      description: 'Engineering Department LPO',
      icon: FiUsers,
      type: 'leadership'
    },
    {
      year: '2024',
      title: 'Honorable Discharge',
      location: 'Pearl Harbor, HI',
      description: '16 years of faithful service',
      icon: FiAward,
      type: 'completion'
    }
  ];

  const getEventColor = (type) => {
    switch (type) {
      case 'nuclear': return 'text-brass-500';
      case 'qualification': return 'text-sonar-500';
      case 'promotion': return 'text-green-400';
      case 'leadership': return 'text-purple-400';
      case 'assignment': return 'text-blue-400';
      default: return 'text-vapor-200';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-navy-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-vapor-50 mb-4">
            SERVICE RECORD
          </h2>
          <p className="text-vapor-200 text-lg max-w-2xl mx-auto">
            A chronological journey through training, deployments, and achievements in the Silent Service
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-sonar-500/30 h-full" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sonar-500 rounded-full border-4 border-navy-900 z-10" />

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-navy-900/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6 hover:border-sonar-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`flex items-center space-x-2 ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <SafeIcon 
                        icon={event.icon} 
                        className={`w-5 h-5 ${getEventColor(event.type)}`} 
                      />
                      <span className="font-mono text-sm text-sonar-500 font-bold">
                        {event.year}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-vapor-50 mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-vapor-200 text-sm mb-2">
                    {event.location}
                  </p>
                  
                  <p className="text-vapor-300 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;