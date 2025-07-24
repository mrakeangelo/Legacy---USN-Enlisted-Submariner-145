import React from 'react';
import HeroSection from '../components/HeroSection';
import TimelineSection from '../components/TimelineSection';
import GallerySection from '../components/GallerySection';
import DolphinsSection from '../components/DolphinsSection';
import AwardsSection from '../components/AwardsSection';
import MapSection from '../components/MapSection';
import GuestbookSection from '../components/GuestbookSection';
import FamilySection from '../components/FamilySection';
import TimeCapsuleSection from '../components/TimeCapsuleSection';
import FooterSection from '../components/FooterSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <DolphinsSection />
      <AwardsSection />
      <MapSection />
      <GuestbookSection />
      <FamilySection />
      <TimeCapsuleSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;