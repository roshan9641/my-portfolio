import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { motion, AnimatePresence } from 'framer-motion';

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #333;
`;

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background: #f8f9fa;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  height: 250px; 
`;

const ProjectCard = styled(motion.div)`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 10px;padding-top: 20px;
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const projects = [
  {
    title: 'Medico E-Commerce',
    description: 'Welcome to Medico E-commerce, an innovative online platform designed to provide seamless access to a wide range of medical products and services. Built using cutting-edge web technologies like HTML, CSS, JavaScript, MongoDB, Express, Node.js, and React, Medico E-commerce offers a robust, user-friendly experience for all your healthcare needs.',
  },
  {
    title: 'Restaurant Management System',
    description: 'Design and develop an intuitive user interface using HTML, CSS, and JavaScript, ensuring a visually appealing and user-friendly experience for both restaurant staff and customers. Implement a robust backend using the Laravel framework to handle data management, user authentication, and security.',
  },
  {
    title: 'Task Tracker App',
    description: 'Create and manage tasks efficiently with the Task Tracker app, a comprehensive tool built with HTML, CSS, JavaScript, Node.js, MongoDB, and React. This app is designed to streamline task management, helping users organize their daily activities with ease.',
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const startCarousel = useCallback(() => {
    return setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 2000);
  }, []);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = startCarousel();
    }
    return () => clearInterval(interval);
  }, [isHovered, startCarousel]);

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <ProjectsContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {projects.map((project, index) => (
            index === currentIndex && (
              <ProjectCard
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.5 }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectCard>
            )
          ))}
        </AnimatePresence>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
