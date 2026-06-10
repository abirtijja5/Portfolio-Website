import React, { useState } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 660px;
  border-radius: 18px;
  padding: 22px 26px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.4s ease;
  background: rgba(255, 255, 255, 0.028);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.07);

  &::before {
    content: '';
    position: absolute;
    right: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #0EA5E9, #7C3AED);
    border-radius: 0 3px 3px 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top right,
      rgba(14, 165, 233, 0.05) 0%,
      transparent 55%
    );
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    border-color: rgba(14, 165, 233, 0.22);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.35),
      0 0 0 1px rgba(14, 165, 233, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);

    &::after {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 18px;
    gap: 10px;
    width: 100%;
    max-width: 360px;
  }
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
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 42px;
    height: 42px;
    border-radius: 10px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
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
  font-size: 15px;
  font-weight: 800;
  background: linear-gradient(135deg, #0EA5E9, #7C3AED);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  user-select: none;
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const Name = styled.div`
  font-size: 16.5px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.2px;

  @media only screen and (max-width: 768px) {
    font-size: 13.5px;
  }
`

const Degree = styled.div`
  font-size: 13px;
  font-weight: 600;
  background: linear-gradient(135deg, #0EA5E9, #7C3AED);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media only screen and (max-width: 768px) {
    font-size: 11.5px;
  }
`

const Date = styled.div`
  font-size: 11.5px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.7;
  margin-top: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const GradeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  color: rgba(52, 211, 153, 0.9);
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.22);
  border-radius: 6px;
  padding: 4px 10px;
  margin-top: 6px;
  width: fit-content;
`

const Description = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.65;
`

const getInitials = (name = '') =>
  name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()

const EducationCard = ({ education }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <Card>
      <Top>
        <ImageWrapper>
          <Image
            src={education.img}
            alt={education.school}
            hidden={imgError}
            onError={() => setImgError(true)}
          />
          {imgError && (
            <InitialsFallback>{getInitials(education.school)}</InitialsFallback>
          )}
        </ImageWrapper>
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      {education.desc && (
        <Description>{education.desc}</Description>
      )}
    </Card>
  )
}

export default EducationCard
