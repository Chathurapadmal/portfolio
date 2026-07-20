'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function ContactSection() {
  const sectionRef = useRef(null)
  const boxRef = useRef(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true

          gsap.fromTo(
            boxRef.current,
            { opacity: 0, y: 40, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' },
          )

          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="snap-section" id="contact" ref={sectionRef}>
      <div className="contact-box" ref={boxRef}>
        <p className="sec-label">I'm Ready to Collaborate</p>
        <h2>Contact Me</h2>
        <p>I&apos;m currently open for Intern Fullstack Developer/Software Engineer positions.</p>
        <div className="contact-actions">
          <a href="mailto:chathurapadmal3@gmail.com" className="contact-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            chathurapadmal3@gmail.com
          </a>
          <a href="/CV_Chathura_Padmal.pdf" download className="contact-link cv-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
