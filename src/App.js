import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background:
      radial-gradient(ellipse at 20% 10%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(14, 165, 233, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(217, 70, 239, 0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
`

const SkillsExperienceWrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(124, 58, 237, 0.08) 0%,
    rgba(124, 58, 237, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(14, 165, 233, 0) 50%,
    rgba(14, 165, 233, 0.08) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  position: relative;
  z-index: 1;
`

const EducationWrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(14, 165, 233, 0.06) 0%,
    rgba(14, 165, 233, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(124, 58, 237, 0) 50%,
    rgba(124, 58, 237, 0.06) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%);
  position: relative;
  z-index: 1;
`

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <CustomCursor />
        <Navbar />
        <Body>
          <HeroSection />
          <SkillsExperienceWrapper>
            <Skills />
            <Experience />
          </SkillsExperienceWrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <EducationWrapper>
            <Education />
          </EducationWrapper>
          <Contact />
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
