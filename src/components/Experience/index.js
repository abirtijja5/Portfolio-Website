import React from 'react'
import styled, { keyframes } from 'styled-components'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import ExperienceCard from '../Cards/ExperienceCard'
import { experiences } from '../../data/constants'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 70px 0 80px;

  @media (max-width: 960px) {
    padding: 40px 0 60px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 20px;
  gap: 16px;
`

const SectionTag = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #7C3AED, #0EA5E9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
`

const Title = styled.div`
  font-size: 44px;
  text-align: center;
  font-weight: 800;
  letter-spacing: -1px;
  background: linear-gradient(135deg, #F1F5F9 0%, #94A3B8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 4px;
  animation: ${fadeUp} 0.6s ease both;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 15.5px;
  text-align: center;
  max-width: 520px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.65;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .MuiTimeline-root {
    padding: 0;
  }

  .MuiTimelineConnector-root {
    background: linear-gradient(180deg, rgba(124, 58, 237, 0.7), rgba(14, 165, 233, 0.4));
    width: 2px;
  }

  .MuiTimelineDot-root {
    border-color: #7C3AED;
    background: rgba(124, 58, 237, 0.15);
    box-shadow: 0 0 12px rgba(124, 58, 237, 0.5);
    width: 12px;
    height: 12px;
    margin: 0;
  }
`

const index = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <SectionTag>Parcours professionnel</SectionTag>
        <Title>Expériences</Title>
        <Desc>
          Mon parcours en tant que développeuse web dans différentes entreprises et projets.
        </Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default index
