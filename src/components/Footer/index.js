import React from 'react'
import styled, { keyframes } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Bio } from '../../data/constants'

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const FooterContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.5), rgba(14, 165, 233, 0.5), transparent);
  }
`

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 48px 24px 32px;
  color: ${({ theme }) => theme.text_primary};
`

const Logo = styled.div`
  font-weight: 800;
  font-size: 22px;
  background: linear-gradient(135deg, #A78BFA 0%, #38BDF8 60%, #F0ABFC 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 4s ease infinite;
  letter-spacing: -0.5px;
`

const Tagline = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 400;
  letter-spacing: 0.3px;
  margin-top: -12px;
  opacity: 0.7;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2px;
  }
`

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 8px;
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: rgba(124, 58, 237, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`

const Divider = styled.div`
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.6), transparent);
`

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 12px;
`

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(124, 58, 237, 0.07);
  border: 1px solid rgba(124, 58, 237, 0.2);
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.3s ease;
  text-decoration: none;

  svg { font-size: 18px; }

  &:hover {
    background: rgba(124, 58, 237, 0.15);
    border-color: rgba(124, 58, 237, 0.6);
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25);
  }
`

const Copyright = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.5;
  text-align: center;
  font-weight: 400;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>TIJJA Abir</Logo>
        <Tagline>Développeuse Full-Stack · Ember.js Specialist</Tagline>

        <Nav>
          <NavLink href="#about">À propos</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Expériences</NavLink>
          <NavLink href="#projects">Projets</NavLink>
          <NavLink href="#education">Formation</NavLink>
        </Nav>

        <Divider />

        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="_blank" aria-label="GitHub">
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank" aria-label="Instagram">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.facebook} target="_blank" aria-label="Facebook">
            <FacebookIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <Copyright>
          © {new Date().getFullYear()} TIJJA Abir — Tous droits réservés.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
