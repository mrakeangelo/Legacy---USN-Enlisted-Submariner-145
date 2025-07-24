import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUser, FiSettings, FiEdit3, FiImage, FiAward, FiMessageCircle, FiMap, FiClock } = FiIcons;

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would authenticate with Supabase
    if (loginForm.email === 'admin@example.com' && loginForm.password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const adminTabs = [
    { id: 'dashboard', name: 'Dashboard', icon: FiSettings },
    { id: 'timeline', name: 'Timeline', icon: FiClock },
    { id: 'gallery', name: 'Gallery', icon: FiImage },
    { id: 'awards', name: 'Awards', icon: FiAward },
    { id: 'map', name: 'Operations', icon: FiMap },
    { id: 'guestbook', name: 'Guestbook', icon: FiMessageCircle },
    { id: 'profile', name: 'Profile', icon: FiUser }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-8"
        >
          <div className="text-center mb-8">
            <SafeIcon icon={FiLock} className="w-16 h-16 text-sonar-500 mx-auto mb-4" />
            <h1 className="font-heading text-2xl font-bold text-vapor-50 mb-2">
              ADMIN ACCESS
            </h1>
            <p className="text-vapor-200 text-sm">
              Secure login required
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-vapor-200 text-sm font-mono mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-3 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-vapor-200 text-sm font-mono mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="w-full bg-navy-900/50 border border-sonar-500/30 rounded-lg px-4 py-3 text-vapor-50 focus:border-sonar-500 focus:outline-none transition-colors"
                placeholder="password"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-sonar-500 hover:bg-sonar-400 text-navy-900 py-3 rounded-lg font-mono font-semibold transition-colors"
            >
              ACCESS ADMIN PANEL
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-heading text-3xl font-bold text-vapor-50 mb-2">
            ADMIN DASHBOARD
          </h1>
          <p className="text-vapor-200">
            Manage your digital tribute content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-6">
              <nav className="space-y-2">
                {adminTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-sonar-500/20 text-sonar-500 border border-sonar-500/30'
                        : 'text-vapor-200 hover:bg-navy-700/50 hover:text-sonar-500'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-5 h-5" />
                    <span className="font-mono text-sm">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-navy-800/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-8">
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-vapor-50 mb-6">
                    Dashboard Overview
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-navy-900/50 rounded-lg p-6">
                      <h3 className="font-heading text-lg font-bold text-vapor-50 mb-2">
                        Recent Activity
                      </h3>
                      <p className="text-vapor-200 text-sm">
                        Last updated: Today
                      </p>
                    </div>
                    
                    <div className="bg-navy-900/50 rounded-lg p-6">
                      <h3 className="font-heading text-lg font-bold text-vapor-50 mb-2">
                        Guestbook Messages
                      </h3>
                      <p className="text-vapor-200 text-sm">
                        4 pending approval
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'timeline' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-vapor-50 mb-6">
                    Timeline Management
                  </h2>
                  <p className="text-vapor-200">
                    Add, edit, or remove timeline events from your service record.
                  </p>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-vapor-50 mb-6">
                    Gallery Management
                  </h2>
                  <p className="text-vapor-200">
                    Upload and organize photos from your service.
                  </p>
                </div>
              )}

              {activeTab === 'awards' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-vapor-50 mb-6">
                    Awards & Qualifications
                  </h2>
                  <p className="text-vapor-200">
                    Manage your medals, ribbons, and qualifications.
                  </p>
                </div>
              )}

              {activeTab === 'map' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-vapor-50 mb-6">
                    Operations Map
                  </h2>
                  <p className="text-vapor-200">
                    Update deployment locations and operational history.
                  </p>
                </div>
              )}

              {activeTab === 'guestbook' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-vapor-50 mb-6">
                    Guestbook Moderation
                  </h2>
                  <p className="text-vapor-200">
                    Review and moderate visitor messages.
                  </p>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-vapor-50 mb-6">
                    Profile Settings
                  </h2>
                  <p className="text-vapor-200">
                    Update your personal information and site settings.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;