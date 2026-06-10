import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { skills } from '../../data/constants'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`
const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`
const marqueeLeft = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`
const marqueeRight = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
`

/* ─── All skills flat list for marquee ─── */
const allSkills = skills.flatMap(cat => cat.skills)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 80px 0 90px;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 20px;
`

const SectionTag = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #8B5CF6, #22D3EE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Title = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 50px;
  text-align: center;
  font-weight: 800;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #F0F4FF 0%, #C4B5FD 40%, #67E8F9 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 5s ease infinite;

  @media (max-width: 768px) { font-size: 36px; letter-spacing: -1px; }
`

const Desc = styled.div`
  font-size: 15px;
  text-align: center;
  max-width: 500px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
`

/* ─── Marquee ─── */
const MarqueeSection = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 50px;
  padding: 0;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    width: 100px;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, #04040C, transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, #04040C, transparent);
  }
`

const MarqueeRow = styled.div`
  display: flex;
  width: max-content;
  gap: 12px;
  margin-bottom: 12px;
  animation: ${({ reverse }) => reverse ? marqueeRight : marqueeLeft}
    ${({ speed }) => speed || '35'}s
    linear infinite;

  &:hover { animation-play-state: paused; }
`

const SkillPill = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 18px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  white-space: nowrap;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.3s ease;
  cursor: default;
  flex-shrink: 0;

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    flex-shrink: 0;
  }

  &:hover {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.4);
    color: ${({ theme }) => theme.text_primary};
    box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
    transform: scale(1.05);
  }
`

/* ─── Category Cards ─── */
const CardsGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 60px;
`

const CategoryCard = styled.div`
  width: 100%;
  max-width: 460px;
  border-radius: 20px;
  padding: 26px 30px;
  background: rgba(255, 255, 255, 0.025);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${fadeUp} 0.7s ease both;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #8B5CF6, #22D3EE, #F472B6);
    background-size: 200% auto;
    animation: ${gradientShift} 3s linear infinite;
  }

  &:hover {
    border-color: rgba(139, 92, 246, 0.25);
    box-shadow: 0 24px 60px rgba(139, 92, 246, 0.12);
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 22px 24px;
  }
`

const CategoryTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 17px;
  font-weight: 700;
  background: linear-gradient(135deg, #A78BFA, #67E8F9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 18px;
  letter-spacing: -0.3px;
`

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const SkillTag = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  padding: 7px 12px;
  background: rgba(255, 255, 255, 0.025);
  transition: all 0.25s ease;
  cursor: default;
  position: relative;
  overflow: hidden;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(139,92,246,0.12), rgba(34,211,238,0.06));
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover {
    border-color: rgba(139,92,246,0.5);
    color: ${({ theme }) => theme.text_primary};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(139,92,246,0.2);
  }
  &:hover::after { opacity: 1; }
`

/* ─── Component ─── */
const Skills = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    if (sectionRef.current)
      sectionRef.current.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const half = Math.ceil(allSkills.length / 2)
  const row1 = allSkills.slice(0, half)
  const row2 = allSkills.slice(half)

  return (
    <Container id="skills" ref={sectionRef}>
      <Wrapper>
        <SectionTag className="reveal">Compétences</SectionTag>
        <Title className="reveal">Stack Technique</Title>
        <Desc className="reveal">
          Technologies que j'utilise au quotidien pour créer des expériences web modernes et performantes.
        </Desc>
      </Wrapper>

      {/* ── Marquee ── */}
      <MarqueeSection>
        <MarqueeRow speed="40">
          {[...row1, ...row1].map((skill, i) => (
            <SkillPill key={i}>
              <img src={skill.image} alt={skill.name} />
              {skill.name}
            </SkillPill>
          ))}
        </MarqueeRow>
        <MarqueeRow speed="35" reverse>
          {[...row2, ...row2].map((skill, i) => (
            <SkillPill key={i}>
              <img src={skill.image} alt={skill.name} />
              {skill.name}
            </SkillPill>
          ))}
        </MarqueeRow>
      </MarqueeSection>

      {/* ── Category Cards ── */}
      <Wrapper>
        <CardsGrid>
          {skills.map((cat, i) => (
            <CategoryCard
              key={i}
              className="reveal"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <CategoryTitle>{cat.title}</CategoryTitle>
              <SkillList>
                {cat.skills.map((item, j) => (
                  <SkillTag key={j}>
                    <img src={item.image} alt={item.name} />
                    {item.name}
                  </SkillTag>
                ))}
              </SkillList>
            </CategoryCard>
          ))}
        </CardsGrid>
      </Wrapper>
    </Container>
  )
}

export default Skills
