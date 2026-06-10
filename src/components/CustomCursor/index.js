import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background: #8B5CF6;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  transition: width 0.15s ease, height 0.15s ease, background 0.2s ease;
  mix-blend-mode: difference;

  @media (pointer: coarse) { display: none; }
`

const CursorRing = styled.div`
  width: 38px;
  height: 38px;
  border: 1.5px solid rgba(139, 92, 246, 0.7);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  transition:
    width 0.25s ease,
    height 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;

  @media (pointer: coarse) { display: none; }
`

const CustomCursor = () => {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.13
      ring.current.y += (pos.current.y - ring.current.y) * 0.13
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(tick)
    }

    const onEnter = () => {
      if (!dotRef.current || !ringRef.current) return
      dotRef.current.style.width   = '14px'
      dotRef.current.style.height  = '14px'
      ringRef.current.style.width  = '58px'
      ringRef.current.style.height = '58px'
      ringRef.current.style.borderColor = 'rgba(34, 211, 238, 0.9)'
      ringRef.current.style.background  = 'rgba(139, 92, 246, 0.06)'
    }
    const onLeave = () => {
      if (!dotRef.current || !ringRef.current) return
      dotRef.current.style.width   = '8px'
      dotRef.current.style.height  = '8px'
      ringRef.current.style.width  = '38px'
      ringRef.current.style.height = '38px'
      ringRef.current.style.borderColor = 'rgba(139, 92, 246, 0.7)'
      ringRef.current.style.background  = 'transparent'
    }

    document.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, .hoverable')
        .forEach(el => {
          el.addEventListener('mouseenter', onEnter)
          el.addEventListener('mouseleave', onLeave)
        })
    }
    attachHover()
    const observer = new MutationObserver(attachHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <CursorDot  ref={dotRef}  id="cursor-dot"  />
      <CursorRing ref={ringRef} id="cursor-ring" />
    </>
  )
}

export default CustomCursor
