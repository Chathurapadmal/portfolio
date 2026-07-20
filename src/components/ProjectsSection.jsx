'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function ProjectsSection({ isLoadingProjects, projectsError, githubProjects, githubProfile }) {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const animatedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || isLoadingProjects || projectsError || githubProjects.length === 0) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          const cards = cardsRef.current.filter(Boolean)

          gsap.fromTo(
            cards,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power3.out',
            },
          )

          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [isLoadingProjects, projectsError, githubProjects])

  return (
    <section className="snap-section" id="projects" ref={sectionRef}>
      <p className="sec-label">Selected Build Logs</p>
      <h2 className="sec-title">Featured <span>Projects</span></h2>

      <div className="project-grid">
        {isLoadingProjects && (
          <p className="project-status">Loading GitHub projects...</p>
        )}

        {!isLoadingProjects && projectsError && (
          <p className="project-status">{projectsError}</p>
        )}

        {!isLoadingProjects && !projectsError && githubProjects.length === 0 && (
          <p className="project-status">No public repositories found for {githubProfile}.</p>
        )}

        {!isLoadingProjects && !projectsError &&
          githubProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              ref={(el) => { cardsRef.current[index] = el }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = (e.clientX - rect.left) / rect.width - 0.5
                const y = (e.clientY - rect.top) / rect.height - 0.5
                e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)'
              }}
            >
              <p className="project-index">0{index + 1}</p>
              <h3>{project.name}</h3>
              <p>{project.description || 'No description added yet for this repository.'}</p>
              <p className="project-tech">
                {project.language || 'Code'} • ⭐ {project.stargazers_count}
              </p>
              <a
                className="project-link"
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            </article>
          ))}
      </div>
    </section>
  )
}

export default ProjectsSection
