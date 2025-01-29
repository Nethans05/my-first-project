// src/pages/Home.js
import React from 'react';
import HeroSection from '../Components/Herosection'; // Assuming HeroSection is a separate component

const Home = () => {
  return (
    <div>
      {/* Only include HeroSection */}
      <HeroSection 
        title="Welcome to My First React Project" 
        description="This is a simple home page built with reusable React components."
      />
    </div>
  );
};

export default Home;
