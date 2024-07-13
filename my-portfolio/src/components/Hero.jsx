
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f0f0;
  background-image: url('./Images/bgi.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
text-align: center;
color: #fff;
padding: 0 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  color: #fff;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #fff;
  margin: 10px 0;
`;

const HeroButton = styled(motion.a)`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </HeroTitle>
      <HeroSubtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a Full-Stack Developer
      </HeroSubtitle>
      <HeroButton href="#projects">View My Work</HeroButton>
    </HeroSection>
  );
};

export default Hero;
