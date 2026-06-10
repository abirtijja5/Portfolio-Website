import React, { useEffect, useRef, useState } from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import {
  HeroContainer, AuroraBlob, HeroBg,
  HeroLeftContainer, HeroRightContainer, HeroInnerContainer,
  ImageWrapper, ImageRingOuter, ImageRingInner, Img,
  TextLoop, TitleWrapper, TitleLabel, GlitchName, Span, SubTitle,
  AvailableBadge, PulsingDot,
  StatsRow, StatItem, StatNumber, StatLabel, StatDivider,
  SocialMediaIcons, SocialMediaIcon, ButtonGroup, ResumeButton, ContactButton
} from './HeroStyle'
import TijjaImg from '../../images/TijjaImg.png'
import Typewriter from 'typewriter-effect'
import { Bio } from '../../data/constants'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const stats = [
  { number: '2+',  label: 'ans expérience' },
  { number: '10+', label: 'projets réalisés' },
  { number: '15+', label: 'technologies' },
]

const AnimatedStat = ({ target, label }) => {
  const [val, setVal] = useState('0')
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const suffix = target.includes('+') ? '+' : ''
      const num = parseInt(target)
      let start = 0
      const step = () => {
        start += Math.ceil(num / 20)
        if (start >= num) { setVal(num + suffix); return }
        setVal(start + suffix)
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
      obs.disconnect()
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <StatItem ref={ref}>
      <StatNumber>{val || target}</StatNumber>
      <StatLabel>{label}</StatLabel>
    </StatItem>
  )
}

const HeroSection = () => {
  const containerRef = useRef(null)
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return
      const { innerWidth: W, innerHeight: H } = window
      const x = (e.clientX / W - 0.5) * 18
      const y = (e.clientY / H - 0.5) * 14
      if (leftRef.current)  leftRef.current.style.transform  = `translate(${-x * 0.4}px, ${-y * 0.4}px)`
      if (rightRef.current) rightRef.current.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div id="about">
      <HeroContainer ref={containerRef}>
        <AuroraBlob variant="purple" dur="14s" delay="0s" />
        <AuroraBlob variant="cyan"   dur="16s" delay="-4s" />
        <AuroraBlob variant="pink"   dur="18s" delay="-8s" />
        <AuroraBlob variant="amber"  dur="12s" delay="-2s" />

        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          <HeroLeftContainer id="Left" ref={leftRef}>
            <AvailableBadge>
              <PulsingDot />
              Disponible — Open to work
            </AvailableBadge>

            <TitleWrapper>
              <TitleLabel>Bonjour, je suis</TitleLabel>
              <GlitchName data-text="TIJJA Abir">TIJJA Abir</GlitchName>
            </TitleWrapper>

            <TextLoop>
              <span>Je suis</span>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 25,
                    delay: 60,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>{Bio.description}</SubTitle>

            <StatsRow>
              {stats.map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <StatDivider />}
                  <AnimatedStat target={s.number} label={s.label} />
                </React.Fragment>
              ))}
            </StatsRow>

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

            <ButtonGroup>
              <ResumeButton href={Bio.resume} target="_blank">
                Voir mon CV ↗
              </ResumeButton>
              <ContactButton href="#contact">
                Me contacter
              </ContactButton>
            </ButtonGroup>
          </HeroLeftContainer>

          <HeroRightContainer id="Right" ref={rightRef}>
            <ImageWrapper>
              <ImageRingOuter />
              <ImageRingInner />
              <Img src={TijjaImg} alt="Tijja Abir" />
            </ImageWrapper>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
