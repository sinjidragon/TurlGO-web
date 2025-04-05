import { Link, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import Logo from '@/components/common/Logo'

const NavContainer = styled.nav`
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  padding: 0.75rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 3.5rem;
  display: flex;
  align-items: center;
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

const NavList = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
`

const NavItem = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  color: ${props => props.active ? '#FF6B6B' : '#4A4A4A'};
  font-weight: ${props => props.active ? '600' : '500'};
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;
  height: 100%;
  padding: 0 0.5rem;
  position: relative;

  &:hover {
    color: #FF6B6B;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #FF6B6B;
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.2s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`

const LogoWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: 2.5rem;

  img {
    height: 1.8rem;
    width: auto;
  }
`

const Navbar = () => {
  const location = useLocation()

  return (
    <NavContainer>
      <NavContent>
        <LogoWrapper to="/home">
          <Logo showSubtitle={false} />
        </LogoWrapper>
        <NavList>
          <li>
            <NavItem to="/home" active={location.pathname === '/home'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
              </svg>
              홈
            </NavItem>
          </li>
          <li>
            <NavItem to="/adoption" active={location.pathname === '/adoption'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
                <circle cx="11" cy="4" r="3"/>
                <circle cx="18" cy="8" r="3"/>
                <circle cx="20" cy="16" r="3"/>
              </svg>
              입양
            </NavItem>
          </li>
          <li>
            <NavItem to="/education" active={location.pathname === '/education'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
              교육
            </NavItem>
          </li>
          <li>
            <NavItem to="/mypage" active={location.pathname === '/mypage'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              마이
            </NavItem>
          </li>
        </NavList>
      </NavContent>
    </NavContainer>
  )
}

export default Navbar
