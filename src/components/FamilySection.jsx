import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiUsers, FiCalendar } = FiIcons;

const FamilySection = () => {
  const familyMembers = [
    {
      name: 'Sarah Foster',
      relationship: 'Wife',
      description: 'My anchor and compass, who kept the home fires burning through every deployment.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Michael Foster',
      relationship: 'Son',
      description: 'Born during my first deployment. Proud to watch him grow into a fine young man.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Emma Foster',
      relationship: 'Daughter',
      description: 'My little sunshine who always had a smile waiting when I came home.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const milestones = [
    {
      event: 'Wedding Day',
      date: '2010',
      description: 'Married my best friend just before nuclear school'
    },
    {
      event: 'Michael\'s Birth',
      date: '2012',
      description: 'Born while I was on my first patrol - video call from the boat'
    },
    {
      event: 'Emma\'s Birth',
      date: '2015',
      description: 'Made it home just in time for her arrival'
    },
    {
      event: 'Michael\'s Graduation',
      date: '2023',
      description: 'Proud to be there for his high school graduation'
    }
  ];

  return (
    <section id="family" className="py-20 bg-navy-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-vapor-50 mb-4">
            FAMILY TRIBUTE
          </h2>
          <p className="text-vapor-200 text-lg max-w-2xl mx-auto">
            To those who served on the home front, your sacrifice made my service possible
          </p>
        </motion.div>

        {/* Family Members */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {familyMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-sonar-500/30 hover:border-sonar-500 transition-all duration-300"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-sonar-500 text-navy-900 px-3 py-1 rounded-full text-sm font-mono font-semibold">
                    {member.relationship}
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-vapor-50 mb-3">
                  {member.name}
                </h3>
                
                <p className="text-vapor-200 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Letter to Family */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-navy-900/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiHeart} className="w-6 h-6 text-sonar-500 mr-3" />
              <h3 className="font-heading text-2xl font-bold text-vapor-50">
                A Letter to My Family
              </h3>
            </div>
            
            <div className="space-y-4 text-vapor-200 leading-relaxed">
              <p>
                To my beloved Sarah, Michael, and Emma,
              </p>
              
              <p>
                Words cannot express the gratitude I feel for your unwavering support throughout my 16 years 
                of service. While I was beneath the waves, you were my beacon of light, my reason to return home safely.
              </p>
              
              <p>
                Sarah, you are the strongest person I know. You raised our children, managed our home, and kept our 
                family together through countless deployments. You are the true hero of this story.
              </p>
              
              <p>
                Michael and Emma, I know I missed birthdays, school plays, and bedtime stories. But know that 
                every moment I was away, I carried your pictures with me and your love in my heart. You gave me 
                strength in the darkest depths of the ocean.
              </p>
              
              <p>
                The Silent Service asks much of its families, and you answered that call with grace, courage, 
                and love. This tribute is as much yours as it is mine.
              </p>
              
              <p className="italic">
                With all my love and gratitude,<br />
                Dad
              </p>
            </div>
          </div>
        </motion.div>

        {/* Family Milestones */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-vapor-50 mb-8 text-center">
            FAMILY MILESTONES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-900/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6 hover:border-sonar-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 text-sonar-500" />
                  <span className="text-sonar-500 font-mono font-bold">
                    {milestone.date}
                  </span>
                </div>
                
                <h4 className="font-heading text-lg font-bold text-vapor-50 mb-2">
                  {milestone.event}
                </h4>
                
                <p className="text-vapor-200 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;