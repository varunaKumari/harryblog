// About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-4">
        We are a team of passionate developers dedicated to building amazing applications.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Our mission is to deliver high-quality software solutions that meet the needs of our clients.
      </p>
      <p className="text-lg text-gray-600">
        With over 15 years of experience in the industry, we strive for excellence in every project we undertake.
      </p>
    </div>
  );
};

export default About;

