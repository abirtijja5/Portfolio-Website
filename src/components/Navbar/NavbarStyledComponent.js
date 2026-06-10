import { Link as LinkR } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Nav = styled.div`
  background: rgba(6, 6, 17, 0.75);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 28px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  gap: 8px;

  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: 700;
  font-size: 17px;
  background: linear-gradient(135deg, #A78BFA 0%, #38BDF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.3px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 8px;
  letter-spacing: 0.2px;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: rgba(124, 58, 237, 0.1);
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    background: rgba(124, 58, 237, 0.12);
  }
`;

export const GitHubButton = styled.a`
  border: 1.5px solid rgba(124, 58, 237, 0.5);
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.primaryLight};
  cursor: pointer;
  padding: 8px 18px;
  font-weight: 600;
  font-size: 13.5px;
  text-decoration: none;
  letter-spacing: 0.2px;
  transition: all 0.3s ease;
  background: rgba(124, 58, 237, 0.07);
  white-space: nowrap;

  &:hover {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(14, 165, 233, 0.15));
    border-color: rgba(124, 58, 237, 0.8);
    color: ${({ theme }) => theme.white};
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  position: absolute;
  top: 72px;
  right: 0;
  width: 100%;
  padding: 16px 32px 28px;
  background: rgba(6, 6, 17, 0.95);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.4s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 16px 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
  animation: ${({ isOpen }) => isOpen ? slideDown : 'none'} 0.3s ease;
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.5px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  width: 100%;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: rgba(124, 58, 237, 0.1);
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;

  @media (max-width: 640px) {
    padding: 0;
  }
`;
