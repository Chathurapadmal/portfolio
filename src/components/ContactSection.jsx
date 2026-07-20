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
        <p className="sec-label">Ready to Collaborate?</p>
        <h2>Let&apos;s build your next big thing.</h2>
        <p>I&apos;m currently open to freelance, startup, and product work.</p>
        <a href="mailto:chathurapadmal3@gmail.com" className="contact-link">
          chathurapadmal3@gmail.com
        </a>
      </div>
    </section>
  )
}

export default ContactSection
