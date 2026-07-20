'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const PARTICLES = 20

function seededRandom(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 49297
  return x - Math.floor(x)
}

const positions = Array.from({ length: PARTICLES }, (_, i) => ({
  bottom: `${seededRandom(i * 7 + 1) * 20}%`,
  left: `${seededRandom(i * 13 + 3) * 100}%`,
}))

function BackgroundDecor() {
  const particlesRef = useRef([])

  useEffect(() => {
    particlesRef.current.forEach((el) => {
      if (!el) return
      gsap.to(el, {
        y: gsap.utils.random(-80, -200),
        x: gsap.utils.random(-60, 60),
        opacity: 0,
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        delay: gsap.utils.random(0, 4),
        ease: 'none',
      })
    })
  }, [])

  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-glow-a" />
      <div className="bg-glow-b" />

      <div className="cube-wrapper">
        <div className="cube">
          <div className="cube-face cube-face-front" />
          <div className="cube-face cube-face-back" />
          <div className="cube-face cube-face-right" />
          <div className="cube-face cube-face-left" />
          <div className="cube-face cube-face-top" />
          <div className="cube-face cube-face-bottom" />
        </div>
      </div>

      {positions.map((pos, i) => (
        <div
          key={i}
          ref={(el) => { particlesRef.current[i] = el }}
          className="particle"
          style={{ bottom: pos.bottom, left: pos.left }}
        />
      ))}
    </div>
  )
}

export default BackgroundDecor
