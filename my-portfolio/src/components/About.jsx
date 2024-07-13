import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 60px 20px;
  background: #fff;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled(motion.h2)`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const AboutText = styled(motion.p)`
  font-size: 1.5rem;
  color: #777;
`;

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      });
    }
  }, [controls, inView]);

  return (
    <AboutSection id="about">
      <AboutContainer ref={ref}>
        <AboutTitle
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
        >
          About Me
        </AboutTitle>
        <AboutText
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 2, delay: 0.5 }}
        >
          I'm a full-stack developer with experience in building web applications using modern technologies like React, Node.js, and more. I'm passionate about creating clean and efficient code, and I'm always looking to learn new skills and improve my craft.
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
