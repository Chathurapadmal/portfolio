'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function SocialAccountsBlock({ socials }) {
  return (
    <div className="community-block">
      <h3>Social Accounts</h3>
      <p>Connect with me beyond code</p>
      <div className="social-list">
        {socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="social-item"
          >
            <p>{social.platform}</p>
            <span>{social.handle}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

function EventsBlock({ events }) {
  return (
    <div className="community-block">
      <h3>Events</h3>
      <p>Community involvement and meetups</p>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.name} className="event-item">
            <p>{event.name}</p>
            <span>{event.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CommunitySection({ socials, events }) {
  const sectionRef = useRef(null)
  const blocksRef = useRef([])
  const animatedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          const blocks = blocksRef.current.filter(Boolean)

          gsap.fromTo(
            blocks,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.15, ease: 'power3.out' },
          )

          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="snap-section" id="community" ref={sectionRef}>
      <p className="sec-label">Beyond Projects</p>
      <h2 className="sec-title">Community & <span>Socials</span></h2>

      <div className="community-layout">
        <div ref={(el) => { blocksRef.current[0] = el }}>
          <SocialAccountsBlock socials={socials} />
        </div>
        <div ref={(el) => { blocksRef.current[1] = el }}>
          <EventsBlock events={events} />
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
