import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiCalendar, FiEdit3, FiSave, FiClock } = FiIcons;

const TimeCapsuleSection = () => {
  const [newCapsule, setNewCapsule] = useState({
    title: '',
    message: '',
    recipient: '',
    unlockDate: ''
  });

  const [capsules, setCapsules] = useState([
    {
      id: 1,
      title: 'To My Son on His 21st Birthday',
      recipient: 'Michael Foster',
      unlockDate: '2033-08-15',
      status: 'sealed',
      createdDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'To Emma on Her Wedding Day',
      recipient: 'Emma Foster',
      unlockDate: '2040-06-01',
      status: 'sealed',
      createdDate: '2024-01-15'
    },
    {
      id: 3,
      title: 'To Future Submariners',
      recipient: 'Next Generation',
      unlockDate: '2034-01-01',
      status: 'sealed',
      createdDate: '2024-01-15'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCapsule.title && newCapsule.message && newCapsule.unlockDate) {
      const capsule = {
        id: capsules.length + 1,
        ...newCapsule,
        status: 'sealed',
        createdDate: new Date().toISOString().split('T')[0]
      };
      setCapsules([capsule, ...capsules]);
      setNewCapsule({ title: '', message: '', recipient: '', unlockDate: '' });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntilUnlock = (unlockDate) => {
    const now = new Date();
    const unlock = new Date(unlockDate);
    const diffTime = unlock - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section id="capsule" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-vapor-50 mb-4">
            TIME CAPSULE VAULT
          </h2>
          <p className="text-vapor-200 text-lg max-w-2xl mx-auto">
            Messages sealed for the future, waiting for their moment to surface
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Create New Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-8 mb-12"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiEdit3} className="w-6 h-6 text-sonar-500 mr-3" />
              <h3 className="font-heading text-2xl font-bold text-vapor-50">
                CREATE NEW TIME CAPSULE
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-vapor-200 text-sm font-mono mb-2">
                    Capsule Title *
                  </label>
                  <input
                    type="text"
                    value={newCapsule.title}
                    onChange={(e) => setNewCapsule({...newCapsule, title: e.target.value})}
                    className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-3 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors"
                    placeholder="e.g., To My Daughter on Her Graduation"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-vapor-200 text-sm font-mono mb-2">
                    Recipient
                  </label>
                  <input
                    type="text"
                    value={newCapsule.recipient}
                    onChange={(e) => setNewCapsule({...newCapsule, recipient: e.target.value})}
                    className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-3 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors"
                    placeholder="Who will receive this message?"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-vapor-200 text-sm font-mono mb-2">
                  Unlock Date *
                </label>
                <input
                  type="date"
                  value={newCapsule.unlockDate}
                  onChange={(e) => setNewCapsule({...newCapsule, unlockDate: e.target.value})}
                  className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-3 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-vapor-200 text-sm font-mono mb-2">
                  Message *
                </label>
                <textarea
                  value={newCapsule.message}
                  onChange={(e) => setNewCapsule({...newCapsule, message: e.target.value})}
                  rows="6"
                  className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-3 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors resize-none"
                  placeholder="Write your message to the future..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 bg-sonar-500 hover:bg-sonar-400 text-navy-900 px-8 py-3 rounded-lg font-mono font-semibold transition-colors"
              >
                <SafeIcon icon={FiSave} className="w-5 h-5" />
                <span>SEAL CAPSULE</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Existing Capsules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capsules.map((capsule, index) => (
              <motion.div
                key={capsule.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6 hover:border-sonar-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiLock} className="w-5 h-5 text-brass-500" />
                    <span className="text-brass-500 font-mono text-sm font-bold">
                      SEALED
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-vapor-300 text-sm">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span>{getDaysUntilUnlock(capsule.unlockDate)} days</span>
                  </div>
                </div>
                
                <h3 className="font-heading text-lg font-bold text-vapor-50 mb-2">
                  {capsule.title}
                </h3>
                
                {capsule.recipient && (
                  <p className="text-sonar-500 font-mono text-sm mb-3">
                    For: {capsule.recipient}
                  </p>
                )}
                
                <div className="space-y-2 text-vapor-200 text-sm">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    <span>Unlock: {formatDate(capsule.unlockDate)}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                    <span>Created: {formatDate(capsule.createdDate)}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-sonar-500/20">
                  <div className="w-full bg-navy-900/50 rounded-full h-2">
                    <div 
                      className="bg-sonar-500 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${Math.max(0, Math.min(100, (Date.now() - new Date(capsule.createdDate).getTime()) / (new Date(capsule.unlockDate).getTime() - new Date(capsule.createdDate).getTime()) * 100))}%` 
                      }}
                    />
                  </div>
                  <p className="text-center text-vapor-300 text-xs mt-2">
                    Time until unlock
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeCapsuleSection;