import styled, { keyframes, css } from "styled-components"

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  40%       { transform: translateY(-18px) rotate(1deg); }
  70%       { transform: translateY(-8px) rotate(-0.8deg); }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to   { opacity: 1; transform: translateY(0); }
`

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(34, 211, 238, 0.1);
  }
  50% {
    box-shadow: 0 0 80px rgba(139, 92, 246, 0.8), 0 0 150px rgba(34, 211, 238, 0.25);
  }
`

const auroraBg = keyframes`
  0%   { transform: translate(0%, 0%) scale(1) rotate(0deg); }
  25%  { transform: translate(4%, -6%) scale(1.06) rotate(2deg); }
  50%  { transform: translate(-3%, 5%) scale(0.96) rotate(-1deg); }
  75%  { transform: translate(5%, 3%) scale(1.03) rotate(1.5deg); }
  100% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
`

const pulseDot = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
  70%  { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
`

const shimmerLine = keyframes`
  from { transform: translateX(-100%) skewX(-20deg); }
  to   { transform: translateX(300%) skewX(-20deg); }
`

const counterReveal = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`

/* ─── Container ─── */
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px 130px;
  overflow: hidden;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 66% 93%, 0 100%);

  @media (max-width: 960px) {
    padding: 90px 16px 110px;
  }
  @media (max-width: 640px) {
    padding: 70px 16px 90px;
    clip-path: none;
  }
`

/* Aurora blobs */
export const AuroraBlob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  animation: ${auroraBg} ${({ dur }) => dur || '14s'} ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || '0s'};

  ${({ variant }) => variant === 'purple' && css`
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%);
    top: -200px; left: -150px;
  `}
  ${({ variant }) => variant === 'cyan' && css`
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(34,211,238,0.16) 0%, transparent 70%);
    bottom: -180px; right: -120px;
  `}
  ${({ variant }) => variant === 'pink' && css`
    width: 450px; height: 450px;
    background: radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%);
    top: 40%; left: 40%;
  `}
  ${({ variant }) => variant === 'amber' && css`
    width: 350px; height: 350px;
    background: radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%);
    top: 10%; right: 25%;
  `}
`

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 50%; left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%; height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  z-index: 2;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 0;
  }
`

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  animation: ${fadeUp} 0.9s cubic-bezier(0.16,1,0.3,1) both;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: flex-end;
  animation: ${fadeUp} 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s both;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 60px;
  }
  @media (max-width: 640px) {
    margin-bottom: 40px;
  }
`

/* ─── Available Badge ─── */
export const AvailableBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 10px;
  border-radius: 50px;
  background: rgba(52, 211, 153, 0.08);
  border: 1px solid rgba(52, 211, 153, 0.25);
  font-size: 12px;
  font-weight: 600;
  color: #34D399;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  width: fit-content;
`

export const PulsingDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34D399;
  animation: ${pulseDot} 1.8s ease infinite;
  flex-shrink: 0;
`

/* ─── Title with Glitch ─── */
export const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 4px;
`

export const TitleLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 6px;
  letter-spacing: 0.3px;

  @media (max-width: 640px) { font-size: 15px; }
`

export const GlitchName = styled.div`
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 72px;
  line-height: 1;
  letter-spacing: -3px;
  position: relative;
  display: inline-block;
  background: linear-gradient(135deg, #F0F4FF 0%, #C4B5FD 40%, #67E8F9 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 5s ease infinite;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(135deg, #22D3EE, #22D3EE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glitch-1 6s step-end infinite;
    z-index: -1;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(135deg, #F472B6, #F472B6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: glitch-2 6s step-end infinite;
    animation-delay: -0.2s;
    z-index: -1;
  }

  @media (max-width: 960px) {
    font-size: 58px;
    letter-spacing: -2px;
  }
  @media (max-width: 640px) {
    font-size: 42px;
    letter-spacing: -1.5px;
  }
`

export const TextLoop = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  margin: 16px 0;

  @media (max-width: 960px) {
    justify-content: center;
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    margin: 12px 0;
  }
`

export const Span = styled.span`
  background: linear-gradient(135deg, #8B5CF6, #22D3EE);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  animation: ${gradientShift} 3s ease infinite;
`

export const SubTitle = styled.div`
  font-size: 15px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 480px;
  font-weight: 400;
  margin-bottom: 28px;

  @media (max-width: 960px) {
    text-align: center;
    max-width: 400px;
    font-size: 14px;
  }
`

/* ─── Stats ─── */
export const StatsRow = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 36px;
  animation: ${counterReveal} 1s ease 0.5s both;

  @media (max-width: 960px) {
    justify-content: center;
    gap: 24px;
  }
  @media (max-width: 640px) {
    gap: 16px;
  }
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  @media (max-width: 960px) {
    align-items: center;
  }
`

export const StatNumber = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 30px;
  font-weight: 800;
  background: linear-gradient(135deg, #8B5CF6, #22D3EE);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;

  @media (max-width: 640px) { font-size: 24px; }
`

export const StatLabel = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  letter-spacing: 0.8px;
`

export const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, rgba(139,92,246,0.4), transparent);
  align-self: center;

  @media (max-width: 640px) { height: 30px; }
`

/* ─── Social + CTA ─── */
export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;

  @media (max-width: 960px) { justify-content: center; }
`

export const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(139,92,246,0.08);
  border: 1px solid rgba(139,92,246,0.22);
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
  position: relative;
  overflow: hidden;

  svg { font-size: 19px; position: relative; z-index: 1; }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(34,211,238,0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.text_primary};
    border-color: rgba(139,92,246,0.7);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 12px 28px rgba(139,92,246,0.3);
  }
  &:hover::before { opacity: 1; }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;

  @media (max-width: 960px) { justify-content: center; }
  @media (max-width: 480px) { flex-direction: column; width: 100%; }
`

export const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  padding: 14px 32px;
  color: #fff;
  border-radius: 14px;
  cursor: pointer;
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: 0.3px;
  transition: all 0.35s ease;
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
  background-size: 200% auto;
  position: relative;
  overflow: hidden;
  border: none;
  outline: none;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: -60%;
    width: 40%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
    animation: ${shimmerLine} 3s ease infinite;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(139,92,246,0.5);
  }

  @media (max-width: 480px) { width: 100%; text-align: center; }
`

export const ContactButton = styled.a`
  appearance: button;
  text-decoration: none;
  padding: 13px 28px;
  color: ${({ theme }) => theme.primaryLight};
  border-radius: 14px;
  cursor: pointer;
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  background: rgba(139,92,246,0.08);
  border: 1.5px solid rgba(139,92,246,0.35);
  white-space: nowrap;

  &:hover {
    background: rgba(139,92,246,0.15);
    border-color: rgba(139,92,246,0.7);
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(139,92,246,0.25);
  }

  @media (max-width: 480px) { width: 100%; text-align: center; }
`

/* ─── Profile Image ─── */
export const ImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) { width: 300px; height: 300px; }
  @media (max-width: 640px) { width: 250px; height: 250px; }
`

export const ImageRingOuter = styled.div`
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #8B5CF6 0%,
    #22D3EE 25%,
    #F472B6 50%,
    #F59E0B 75%,
    #8B5CF6 100%
  );
  animation: ${gradientShift} 4s linear infinite, ${glowPulse} 3.5s ease-in-out infinite;
  background-size: 300% 300%;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    background: #04040C;
    z-index: 1;
  }
`

export const ImageRingInner = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg,
    transparent 0%,
    rgba(139,92,246,0.4) 50%,
    transparent 100%
  );
  animation: border-spin 8s linear infinite reverse;
  z-index: 2;
`

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  animation: ${float} 7s ease-in-out infinite;
  z-index: 3;
`
