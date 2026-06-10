import React from 'react'
import styled, { keyframes } from 'styled-components'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { education } from '../../data/constants'
import EducationCard from '../Cards/EducationCard'

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
  background: linear-gradient(135deg, #0EA5E9, #7C3AED);
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
    background: linear-gradient(180deg, rgba(14, 165, 233, 0.7), rgba(124, 58, 237, 0.4));
    width: 2px;
  }

  .MuiTimelineDot-root {
    border-color: #0EA5E9;
    background: rgba(14, 165, 233, 0.15);
    box-shadow: 0 0 12px rgba(14, 165, 233, 0.5);
    width: 12px;
    height: 12px;
    margin: 0;
  }

  @media (max-width: 660px) {
    align-items: flex-end;
  }
`

const index = () => {
  return (
    <Container id="education">
      <Wrapper>
        <SectionTag>Parcours académique</SectionTag>
        <Title>Formation</Title>
        <Desc>
          Mon parcours académique, une aventure d'apprentissage et de croissance continue.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="info" />
                  {index !== education.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default index
