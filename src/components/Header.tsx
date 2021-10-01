import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useResize } from '../hooks/useResize';
import { routes } from '../routes';

export const Header = () => {
  const size = useResize();

  if (size > 600) {
    return (
      <StyledHeader>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <Nav>
          <StyledNavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'yellow',
            }}
            to={routes.mainPage}
          >
            Main Page
          </StyledNavLink>
          <StyledNavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'yellow',
            }}
            to={routes.products}
          >
            Products
          </StyledNavLink>
          <StyledNavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'yellow',
            }}
            to={routes.myCart}
          >
            My Cart
          </StyledNavLink>
          <StyledNavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'yellow',
            }}
            to={routes.aboutUs}
          >
            About Us
          </StyledNavLink>
        </Nav>
      </StyledHeader>
    );
  } else {
    return (
      <StyledHeader>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <MobileNav>
          <StyledNavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'yellow',
            }}
            to={routes.mainPage}
          >
            Main Page
          </StyledNavLink>
          <StyledNavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'yellow',
            }}
            to={routes.products}
          >
            Products
          </StyledNavLink>
          <StyledNavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'yellow',
            }}
            to={routes.myCart}
          >
            My Cart
          </StyledNavLink>
          <StyledNavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'yellow',
            }}
            to={routes.aboutUs}
          >
            About Us
          </StyledNavLink>
        </MobileNav>
      </StyledHeader>
    );
  }
};

const StyledHeader = styled.header`
  height: 90px;
  background: #8e4575;
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const StyledMobileHeader = styled.header`
  height: 90px;
  background: #8e4575;
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

const MobileNav = styled.nav`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  width: 40%;
  background: #8e4575;
  height: 350px;
  position: fixed;
  top: 0;
  right: 0;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 20px;
`;
