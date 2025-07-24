import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiAnchor, FiGlobe } = FiIcons;

const MapSection = () => {
  const [selectedDeployment, setSelectedDeployment] = useState(null);

  const deployments = [
    {
      id: 1,
      name: 'USS Virginia (SSN-774)',
      location: 'North Atlantic',
      years: '2012-2020',
      description: 'Intelligence gathering and surveillance operations',
      coordinates: { x: 25, y: 35 },
      type: 'classified'
    },
    {
      id: 2,
      name: 'USS Columbia (SSN-771)',
      location: 'Pacific Theater',
      years: '2020-2024',
      description: 'Strategic deterrent patrols and training exercises',
      coordinates: { x: 70, y: 45 },
      type: 'patrol'
    },
    {
      id: 3,
      name: 'Port Visit',
      location: 'Guam',
      years: '2021',
      description: 'Crew rest and resupply operations',
      coordinates: { x: 85, y: 55 },
      type: 'port'
    },
    {
      id: 4,
      name: 'Training Exercise',
      location: 'Hawaiian Waters',
      years: '2022',
      description: 'Joint naval exercises with allied forces',
      coordinates: { x: 75, y: 50 },
      type: 'training'
    }
  ];

  const getMarkerColor = (type) => {
    switch (type) {
      case 'classified': return 'text-red-500';
      case 'patrol': return 'text-sonar-500';
      case 'port': return 'text-green-500';
      case 'training': return 'text-yellow-500';
      default: return 'text-vapor-200';
    }
  };

  return (
    <section id="map" className="py-20 bg-navy-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-vapor-50 mb-4">
            OPERATIONS MAP
          </h2>
          <p className="text-vapor-200 text-lg max-w-2xl mx-auto">
            Deployments and operations across the globe (declassified locations only)
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* World Map */}
          <div className="relative bg-navy-900/80 backdrop-blur-sm border border-sonar-500/20 rounded-lg p-8 mb-8">
            <div className="relative w-full h-96 bg-navy-800/50 rounded-lg overflow-hidden">
              {/* Simplified world map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700/30 to-navy-800/50" />
              
              {/* Grid lines for navigation feel */}
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute h-full w-px bg-sonar-500/10"
                    style={{ left: `${i * 10}%` }}
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute w-full h-px bg-sonar-500/10"
                    style={{ top: `${i * 12.5}%` }}
                  />
                ))}
              </div>

              {/* Deployment markers */}
              {deployments.map((deployment) => (
                <motion.div
                  key={deployment.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: deployment.id * 0.2 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${deployment.coordinates.x}%`,
                    top: `${deployment.coordinates.y}%`
                  }}
                  onClick={() => setSelectedDeployment(deployment)}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    {/* Ping animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className={`w-8 h-8 rounded-full border-2 ${getMarkerColor(deployment.type).replace('text-', 'border-')}`}
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.8, 0.2, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    {/* Marker */}
                    <div className="relative z-10 p-2 bg-navy-900/80 rounded-full border-2 border-sonar-500">
                      <SafeIcon 
                        icon={deployment.type === 'port' ? FiAnchor : FiMapPin}
                        className={`w-4 h-4 ${getMarkerColor(deployment.type)}`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deployment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deployments.map((deployment) => (
              <motion.div
                key={deployment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: deployment.id * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-navy-900/80 backdrop-blur-sm border rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedDeployment?.id === deployment.id 
                    ? 'border-sonar-500' 
                    : 'border-sonar-500/20 hover:border-sonar-500/40'
                }`}
                onClick={() => setSelectedDeployment(deployment)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <SafeIcon 
                    icon={deployment.type === 'port' ? FiAnchor : FiGlobe}
                    className={`w-5 h-5 ${getMarkerColor(deployment.type)}`}
                  />
                  <span className="text-vapor-200 font-mono text-sm">
                    {deployment.years}
                  </span>
                </div>
                
                <h3 className="font-heading text-lg font-bold text-vapor-50 mb-2">
                  {deployment.name}
                </h3>
                
                <p className="text-sonar-500 font-mono text-sm mb-2">
                  {deployment.location}
                </p>
                
                <p className="text-vapor-200 text-sm leading-relaxed">
                  {deployment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;