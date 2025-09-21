import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #FF9933; /* Saffron color from Indian flag */
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  
  span {
    color: #138808; /* Green color from Indian flag */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #138808;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          Swadeshi<span>Tourism</span>
        </Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/destinations">Destinations</NavLink>
          <NavLink to="/local-artisans">Local Artisans</NavLink>
          <NavLink to="/accommodations">Accommodations</NavLink>
          <NavLink to="/experiences">Experiences</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;