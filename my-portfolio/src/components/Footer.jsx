// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 1rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterText>&copy; 2024 My Portfolio. All rights reserved.</FooterText>
    </FooterSection>
  );
};

export default Footer;
