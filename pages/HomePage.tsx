
import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import UseCases from '../components/UseCases';
import DetailedFeatures from '../components/DetailedFeatures';
import Challenges from '../components/Challenges';
import LearnAnythingCTA from '../components/LearnAnythingCTA';
import FinalCTA from '../components/FinalCTA';
import { Page } from '../App';
import PlatformRoles from '../components/PlatformRoles';

interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Challenges />
      <UseCases />
      <DetailedFeatures />
      <PlatformRoles />
      <LearnAnythingCTA />
      <FinalCTA />
    </>
  );
};

export default HomePage;