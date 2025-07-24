import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSend, FiUser, FiClock, FiMessageCircle } = FiIcons;

const GuestbookSection = () => {
  const [newMessage, setNewMessage] = useState({
    name: '',
    relationship: '',
    message: ''
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'MMCS(SS) Johnson',
      relationship: 'Former Sponsor',
      message: 'Proud to have been your sponsor, Daniel. You exemplified everything the dolphins represent. Fair winds and following seas.',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: 2,
      name: 'Sarah Foster',
      relationship: 'Wife',
      message: 'Thank you for your service and sacrifice. The kids and I are so proud of you and everything you accomplished. Welcome home.',
      timestamp: '2024-01-14T18:45:00Z'
    },
    {
      id: 3,
      name: 'ET1(SS) Rodriguez',
      relationship: 'Shipmate',
      message: 'Best LPO I ever worked for. You taught me what it means to be a leader in the Silent Service. Hooyah!',
      timestamp: '2024-01-14T14:20:00Z'
    },
    {
      id: 4,
      name: 'Michael Foster',
      relationship: 'Son',
      message: 'Dad, I know you missed a lot while you were underwater, but you were always my hero. Thanks for serving our country.',
      timestamp: '2024-01-13T20:15:00Z'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        ...newMessage,
        timestamp: new Date().toISOString()
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', relationship: '', message: '' });
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="guestbook" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-vapor-50 mb-4">
            GUESTBOOK WALL
          </h2>
          <p className="text-vapor-200 text-lg max-w-2xl mx-auto">
            Messages from shipmates, family, and friends
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6 mb-8"
          >
            <h3 className="font-heading text-xl font-bold text-vapor-50 mb-4 flex items-center">
              <SafeIcon icon={FiMessageCircle} className="w-5 h-5 text-sonar-500 mr-2" />
              Leave a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-vapor-200 text-sm font-mono mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={newMessage.name}
                    onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                    className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-2 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-vapor-200 text-sm font-mono mb-2">
                    Relationship
                  </label>
                  <input
                    type="text"
                    value={newMessage.relationship}
                    onChange={(e) => setNewMessage({...newMessage, relationship: e.target.value})}
                    className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-2 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors"
                    placeholder="Shipmate, Family, Friend, etc."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-vapor-200 text-sm font-mono mb-2">
                  Message *
                </label>
                <textarea
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                  rows="4"
                  className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-2 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors resize-none"
                  placeholder="Share your thoughts, memories, or well wishes..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 bg-sonar-500 hover:bg-sonar-400 text-navy-900 px-6 py-3 rounded-lg font-mono font-semibold transition-colors"
              >
                <SafeIcon icon={FiSend} className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Messages */}
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6 hover:border-sonar-500/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-navy-900/50 rounded-full">
                      <SafeIcon icon={FiUser} className="w-4 h-4 text-sonar-500" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-vapor-50">
                        {message.name}
                      </h4>
                      {message.relationship && (
                        <span className="text-sonar-500 font-mono text-sm">
                          {message.relationship}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-vapor-300 text-sm">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span>{formatDate(message.timestamp)}</span>
                  </div>
                </div>
                
                <p className="text-vapor-200 leading-relaxed">
                  {message.message}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestbookSection;