import React, { useRef, useCallback, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover { cursor: pointer; opacity: 0.8; }
`

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const Card = styled.div`
  width: 660px;
  border-radius: 20px;
  padding: 22px 26px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: rgba(12, 12, 30, 0.85);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
  transform-style: preserve-3d;
  will-change: transform;

  /* Left accent bar */
  &::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #8B5CF6, #22D3EE, #F472B6);
    background-size: 100% 200%;
    animation: ${gradientShift} 3s ease infinite;
    border-radius: 3px 0 0 3px;
  }

  /* Holographic mouse-tracking glow */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mx, 50%) var(--my, 50%),
      rgba(139, 92, 246, 0.12) 0%,
      rgba(34, 211, 238, 0.06) 30%,
      transparent 65%
    );
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
  }

  &:hover {
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow:
      0 30px 70px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(139, 92, 246, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  &:hover::after { opacity: 1; }
  &:hover ${Document} { display: flex; }
  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 18px;
    gap: 10px;
    width: 100%;
    max-width: 370px;
  }
`

const NoiseOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.025;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 100px 100px;
  border-radius: 20px;
`

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  align-items: flex-start;
`

const ImageWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${Card}:hover & {
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 0 16px rgba(139, 92, 246, 0.2);
  }

  @media only screen and (max-width: 768px) {
    width: 42px; height: 42px; border-radius: 10px;
  }
`

const Image = styled.img`
  width: 100%; height: 100%;
  object-fit: contain;
  padding: 4px;
  display: ${({ hidden }) => hidden ? 'none' : 'block'};
`

const InitialsFallback = styled.div`
  width: 100%; height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 17px;
  font-weight: 800;
  background: linear-gradient(135deg, #8B5CF6, #22D3EE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  user-select: none;
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const Role = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.3px;

  @media only screen and (max-width: 768px) { font-size: 14px; }
`

const Company = styled.div`
  font-size: 13px;
  font-weight: 600;
  background: linear-gradient(135deg, #8B5CF6, #22D3EE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media only screen and (max-width: 768px) { font-size: 11.5px; }
`

const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(245, 158, 11, 0.9);
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 6px;
  padding: 3px 9px;
  margin-top: 4px;
  width: fit-content;

  @media only screen and (max-width: 768px) { font-size: 9.5px; }
`

const Description = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.75;
`

const SkillsRow = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  margin-top: 2px;
`

const SkillBadge = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: rgba(167, 139, 250, 0.9);
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 6px;
  padding: 4px 10px;
  letter-spacing: 0.2px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.18);
    border-color: rgba(139, 92, 246, 0.5);
    color: #fff;
  }
`

const getInitials = (name = '') =>
  name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()

const ExperienceCard = ({ experience }) => {
  const cardRef = useRef(null)
  const [imgError, setImgError] = useState(false)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top)  / rect.height
    const tiltX = (y - 0.5) * -12
    const tiltY = (x - 0.5) *  14
    card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.015)`
    card.style.setProperty('--mx', `${x * 100}%`)
    card.style.setProperty('--my', `${y * 100}%`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }, [])

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <NoiseOverlay />
      <Top>
        <ImageWrapper>
          <Image
            src={experience.img}
            alt={experience.company}
            hidden={imgError}
            onError={() => setImgError(true)}
          />
          {imgError && (
            <InitialsFallback>{getInitials(experience.company)}</InitialsFallback>
          )}
        </ImageWrapper>
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <DateBadge>📅 {experience.date}</DateBadge>
        </Body>
      </Top>

      {experience?.desc && (
        <Description>
          <Span>{experience.desc}</Span>
        </Description>
      )}

      {experience?.skills && (
        <SkillsRow>
          {experience.skills.map((skill, i) => (
            <SkillBadge key={i}>{skill}</SkillBadge>
          ))}
        </SkillsRow>
      )}

      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  )
}

export default ExperienceCard
