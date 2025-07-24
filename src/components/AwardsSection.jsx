import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiShield, FiStar, FiTarget } = FiIcons;

const AwardsSection = () => {
  const awards = [
    {
      name: 'Navy Achievement Medal',
      description: 'For professional achievement in the performance of duty',
      icon: FiAward,
      color: 'text-brass-500',
      date: '2018'
    },
    {
      name: 'Navy Commendation Medal',
      description: 'For meritorious service while serving aboard USS Columbia',
      icon: FiStar,
      color: 'text-green-400',
      date: '2022'
    },
    {
      name: 'Good Conduct Medal (4x)',
      description: 'For exemplary behavior, efficiency, and fidelity',
      icon: FiShield,
      color: 'text-blue-400',
      date: '2012-2024'
    },
    {
      name: 'Sea Service Deployment Ribbon (6x)',
      description: 'For operational deployments aboard submarines',
      icon: FiTarget,
      color: 'text-purple-400',
      date: '2012-2024'
    },
    {
      name: 'Submarine Warfare Qualification',
      description: 'Silver Dolphins - Submarine Warfare Specialist',
      icon: FiAward,
      color: 'text-sonar-500',
      date: '2013'
    },
    {
      name: 'Nuclear Field "A" School',
      description: 'Honor Graduate - Nuclear Propulsion Training',
      icon: FiStar,
      color: 'text-yellow-400',
      date: '2009'
    }
  ];

  const qualifications = [
    {
      title: 'Engineering Watch Supervisor',
      code: 'EWS',
      description: 'Qualified to supervise nuclear propulsion plant operations'
    },
    {
      title: 'Throttleman',
      code: 'TM',
      description: 'Qualified to operate reactor plant throttles'
    },
    {
      title: 'Machinery Operator',
      code: 'MO',
      description: 'Qualified to operate nuclear propulsion equipment'
    },
    {
      title: 'Damage Control Petty Officer',
      code: 'DCPO',
      description: 'Qualified to lead damage control teams'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-vapor-50 mb-4">
            AWARDS & QUALIFICATIONS
          </h2>
          <p className="text-vapor-200 text-lg max-w-2xl mx-auto">
            Recognition for excellence in service and technical proficiency
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-vapor-50 mb-8 text-center">
            MEDALS & RIBBONS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6 hover:border-sonar-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-navy-900/50 rounded-full">
                    <SafeIcon 
                      icon={award.icon} 
                      className={`w-6 h-6 ${award.color}`} 
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-vapor-50">
                      {award.name}
                    </h4>
                    <span className="text-sonar-500 font-mono text-sm">
                      {award.date}
                    </span>
                  </div>
                </div>
                
                <p className="text-vapor-200 text-sm leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Qualifications */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-vapor-50 mb-8 text-center">
            WATCH QUALIFICATIONS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6 hover:border-sonar-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-heading text-lg font-bold text-vapor-50">
                    {qual.title}
                  </h4>
                  <span className="bg-sonar-500/20 text-sonar-500 px-3 py-1 rounded-full font-mono text-sm">
                    {qual.code}
                  </span>
                </div>
                
                <p className="text-vapor-200 text-sm leading-relaxed">
                  {qual.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;