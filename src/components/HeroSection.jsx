'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import profileImage from '../assets/me.webp'

function HeroSection({ stack }) {
  const titleRef = useRef(null)
  const chipsRef = useRef([])
  const terminalRef = useRef(null)
  const photoRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
    )
    .fromTo(
      '.hero-eyebrow',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 0.7, duration: 0.6 },
      '-=0.3',
    )
    .fromTo(
      titleRef.current?.children,
      { y: 40, opacity: 0, rotateX: -20 },
      { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.12 },
      '-=0.3',
    )
    .fromTo(
      descRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.3',
    )
    .fromTo(
      chipsRef.current,
      { y: 15, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.05 },
      '-=0.2',
    )
    .fromTo(
      ctaRef.current?.children,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
      '-=0.2',
    )
    .fromTo(
      terminalRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.2',
    )
    .fromTo(
      '.terminal-line',
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.25, stagger: 0.2 },
      '-=0.2',
    )
    .fromTo(
      photoRef.current,
      { scale: 0.6, opacity: 0, rotateY: 30 },
      { scale: 1, opacity: 1, rotateY: 0, duration: 0.8, ease: 'back.out(1.4)' },
      '-=0.8',
    )

    return () => tl.kill()
  }, [])

  useEffect(() => {
    const photo = photoRef.current
    if (!photo) return

    const handleMouseMove = (e) => {
      const rect = photo.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(photo, {
        rotateY: x * 15,
        rotateX: -y * 15,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(photo, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    photo.addEventListener('mousemove', handleMouseMove)
    photo.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      photo.removeEventListener('mousemove', handleMouseMove)
      photo.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="snap-section hero-section" id="home" ref={sectionRef}>
      <div className="hero-layout">
        <div className="hero-text-content">
          <p className="hero-eyebrow">Software Engineering Undergraduate</p>

          <h1 className="hero-title" ref={titleRef}>
            <div>HELLO <span className="highlight">WORLD</span></div>
            <div>I&apos;m <span className="outline">Chathura</span></div>
          </h1>

          <p className="hero-desc" ref={descRef}>
            A passionate Software Engineering undergraduate with hands-on experience in full-stack development,
            building scalable, user-focused solutions with modern technologies.
          </p>

          <div className="chip-row">
            {stack.map((item) => (
              <span key={item} className="chip" ref={(el) => {
                if (el && Array.isArray(chipsRef.current)) chipsRef.current.push(el)
              }}>
                {item}
              </span>
            ))}
          </div>

          <div className="hero-cta-group" ref={ctaRef}>
            <a href="#projects" className="hero-cta primary">
              View Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="hero-cta secondary">
              Contact Me
            </a>
          </div>

          <div className="terminal-card" ref={terminalRef} aria-label="Developer profile">
            <div className="terminal-head">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <p>~/portfolio</p>
            </div>
            <div className="terminal-body">
              <span className="terminal-line">
                <span className="terminal-prompt">$ </span>whoami
              </span>
              <span className="terminal-line">
                <span className="terminal-output">&gt; Chathura / React Developer</span>
              </span>
              <span className="terminal-line">
                <span className="terminal-prompt">$ </span>status
              </span>
              <span className="terminal-line">
                <span className="terminal-output">&gt; Building performant UIs with animations and soul.</span>
              </span>
              <span className="terminal-line">
                <span className="terminal-prompt">$ </span>now
              </span>
              <span className="terminal-line">
                <span className="terminal-output">&gt; Open to freelance, startup, and product work.</span>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow-ring" />
          <div className="hero-glow-ring" />
          <div className="hero-photo-wrap" ref={photoRef}>
            <img className="hero-photo" src={profileImage} alt="Chathura" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
