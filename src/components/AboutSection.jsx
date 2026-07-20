'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const profile = {
  intro:
    'Enthusiastic Software Engineering undergraduate actively seeking internship opportunities in full-stack development. Experienced with React, Node.js, Java, C#, and .NET through real-world projects including POS systems, event platforms, and management systems.',
  contact: [
    { label: 'Phone', value: '+94 769 929 298' },
    { label: 'Email', value: 'chathurapadmal3@gmail.com' },
    { label: 'Location', value: 'Bulathsinhala, Sri Lanka' },
    { label: 'LinkedIn', value: 'Chathura-Padmal' },
    { label: 'GitHub', value: 'ChathuraPadmal' },
  ],
  experience: [
    { title: 'FOSS Community Technical Team', period: '2025 - 2026' },
  ],
  activities: [
    { title: 'Senior Prefect, Sripalee College', period: '2022 - 2023' },
    { title: 'President, Photography Society', period: '2022 - 2023' },
    { title: 'Council Member, FOSS Community - NSBM', period: '2025 - 2026' },
    { title: 'Club Captain, FOSS Community - NSBM', period: '2026' },
  ],
  education: [
    {
      school: 'Sripalee College - Horana',
      lines: ['2020 Ordinary Level - Passed', '2023 Advanced Level - Passed'],
    },
    {
      school: 'NSBM Green University',
      lines: ['BSc Hons. Software Engineering Undergraduate - 2024'],
    },
    {
      school: 'IIT',
      lines: ['AI Course (3 Months) - 2025'],
    },
  ],
  skills: [
    { name: 'Java', level: 84 },
    { name: 'React', level: 78 },
    { name: 'Figma', level: 92 },
    { name: 'C#', level: 62 },
    { name: 'PHP', level: 70 },
  ],
  languages: ['Sinhala', 'English'],
  hobbies: ['Photography'],
}

function AboutSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const metersRef = useRef([])
  const animatedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true

          const cards = cardsRef.current.filter(Boolean)
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40, rotateX: 5 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
          )

          const meters = metersRef.current.filter(Boolean)
          if (meters.length > 0) {
            gsap.fromTo(
              meters,
              { width: 0 },
              {
                width: (i) => `${profile.skills[i].level}%`,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
              },
            )
          }

          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="snap-section" id="about" ref={sectionRef}>
      <p className="sec-label">Identity Matrix</p>
      <h2 className="sec-title">About <span>Me</span></h2>

      <div className="about-grid">
        <article
          className="about-card"
          ref={(el) => { cardsRef.current[0] = el }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5
            e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)'
          }}
        >
          <p className="about-card-label">System Summary</p>
          <p className="about-intro-text">{profile.intro}</p>
          <div className="about-contact-list">
            {profile.contact.map((item) => (
              <p key={item.label} className="about-contact-item">
                <span>{item.label}:</span> {item.value}
              </p>
            ))}
          </div>
        </article>

        <article
          className="about-card"
          ref={(el) => { cardsRef.current[1] = el }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5
            e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)'
          }}
        >
          <p className="about-card-label">Experience</p>
          <ul className="about-list">
            {profile.experience.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <span>{item.period}</span>
              </li>
            ))}
          </ul>
          <p className="about-card-label" style={{ marginTop: '1rem' }}>Activities</p>
          <ul className="about-list">
            {profile.activities.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <span>{item.period}</span>
              </li>
            ))}
          </ul>
        </article>

        <article
          className="about-card"
          ref={(el) => { cardsRef.current[2] = el }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5
            e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)'
          }}
        >
          <p className="about-card-label">Skills</p>
          <div className="about-skills">
            {profile.skills.map((skill, i) => (
              <div key={skill.name} className="about-skill-item">
                <p>{skill.name}</p>
                <div className="about-meter" role="img" aria-label={`${skill.name} level ${skill.level}%`}>
                  <span ref={(el) => { metersRef.current[i] = el }} />
                </div>
              </div>
            ))}
          </div>

          <p className="about-card-label">Education</p>
          <ul className="about-education-list">
            {profile.education.map((item) => (
              <li key={item.school}>
                <h3>{item.school}</h3>
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </li>
            ))}
          </ul>

          <div className="about-meta-row">
            <p><span>Language:</span> {profile.languages.join(' • ')}</p>
            <p><span>Hobbies:</span> {profile.hobbies.join(' • ')}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
