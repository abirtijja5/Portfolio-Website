import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Snackbar } from '@mui/material'

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

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
  background: linear-gradient(135deg, #D946EF, #7C3AED);
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

const ContactForm = styled.form`
  width: 95%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.028);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 36px 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  margin-top: 36px;
  gap: 14px;
  position: relative;
  overflow: hidden;
  animation: ${fadeUp} 0.7s ease both;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #D946EF, #7C3AED, #0EA5E9);
    background-size: 200% auto;
    animation: ${gradientShift} 3s linear infinite;
  }

  @media (max-width: 640px) {
    padding: 28px 24px;
  }
`

const ContactTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #A78BFA, #38BDF8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
`

const ContactInput = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  outline: none;
  font-size: 14.5px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 13px 16px;
  transition: all 0.3s ease;
  font-family: 'Plus Jakarta Sans', sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.6;
  }

  &:focus {
    border-color: rgba(124, 58, 237, 0.5);
    background: rgba(124, 58, 237, 0.06);
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  outline: none;
  font-size: 14.5px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 13px 16px;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  font-family: 'Plus Jakarta Sans', sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.6;
  }

  &:focus {
    border-color: rgba(124, 58, 237, 0.5);
    background: rgba(124, 58, 237, 0.06);
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(135deg, #7C3AED 0%, #0EA5E9 100%);
  background-size: 200% auto;
  padding: 14px 16px;
  margin-top: 4px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.35s ease;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: 0.3px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(124, 58, 237, 0.4);
    background-position: right center;
  }

  &:active {
    transform: translateY(0);
  }
`

const Contact = () => {
  const [open, setOpen] = React.useState(false)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_3yp6gsi', 'template_uvwl86k', form.current, 'HSy56PjQUfFmbGEc8')
      .then(
        () => {
          setOpen(true)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Container>
      <Wrapper>
        <SectionTag>Prenons contact</SectionTag>
        <Title>Me Contacter</Title>
        <Desc>
          N'hésitez pas à me contacter pour toute question ou opportunité professionnelle !
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Envoyez-moi un email ✉️</ContactTitle>
          <ContactInput placeholder="Votre email" name="from_email" type="email" />
          <ContactInput placeholder="Votre nom" name="from_name" />
          <ContactInput placeholder="Sujet" name="subject" />
          <ContactInputMessage placeholder="Votre message..." rows="5" name="message" />
          <ContactButton type="submit" value="Envoyer le message" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Message envoyé avec succès !"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact
