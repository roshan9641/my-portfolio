import React, { useState } from 'react';
import styled from 'styled-components';
import ImageModal from './ImageModal'; 
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavBrand = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.a`
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Nav>
        <NavBrand href="#hero">
          <ProfileImage
            src="./Images/photo (1).png" 
            alt="Profile"
            onClick={handleImageClick}
          />
          Roshan 
        </NavBrand>
        <NavMenu>
          <NavItem href="#hero">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavMenu>
      </Nav>
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl="./Images/photo (1).png"
      />
    </>
  );
};

export default Header;
