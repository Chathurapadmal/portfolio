'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import BackgroundDecor from './components/BackgroundDecor'
import TopBar from './components/TopBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import CommunitySection from './components/CommunitySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const GITHUB_PROFILE = 'chathurapadmal'

const stack = [
  'React', 'TypeScript', 'Node.js', 'Next.js',
  'Figma', 'SQL', 'C#', 'Java',
]

const socialAccounts = [
  {
    platform: 'Facebook',
    handle: 'chathura padmal',
    url: 'https://www.facebook.com/chathura.padmal',
  },
  {
    platform: 'GitHub',
    handle: 'chathurapadmal',
    url: 'https://github.com/chathurapadmal',
  },
]

const events = [
  {
    name: 'Open Source Summit 2025',
    description: 'Presented contributor demos and collaborated with open-source maintainers.',
  },
  {
    name: 'Community Code Night 2024',
    description: 'Helped organize a local coding meetup focused on frontend best practices.',
  },
]

function App() {
  const [githubProjects, setGithubProjects] = useState([])
  const [isLoadingProjects, setIsLoadingProjects] = useState(false)
  const [projectsError, setProjectsError] = useState('')

  const shellRef = useRef(null)

  useEffect(() => {
    const controller = new AbortController()
    const fetchGithubProjects = async () => {
      setIsLoadingProjects(true)
      setProjectsError('')
      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(GITHUB_PROFILE)}/repos?sort=updated&per_page=6`,
          { signal: controller.signal },
        )
        if (!response.ok) throw new Error('Failed to load projects from GitHub.')
        const repositories = await response.json()
        if (!Array.isArray(repositories)) throw new Error('Unexpected response from GitHub.')
        setGithubProjects(repositories)
      } catch (error) {
        if (error.name === 'AbortError') return
        setGithubProjects([])
        setProjectsError('Could not load projects. Check your username and try again.')
      } finally {
        setIsLoadingProjects(false)
      }
    }
    fetchGithubProjects()
    return () => controller.abort()
  }, [])

  useEffect(() => {
    gsap.to('.bg-glow-a', {
      y: -30,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
    gsap.to('.bg-glow-b', {
      y: 30,
      x: -20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <div className="app-shell" ref={shellRef}>
      <BackgroundDecor />
      <TopBar />

      <HeroSection stack={stack} />

      <AboutSection />

      <ProjectsSection
        isLoadingProjects={isLoadingProjects}
        projectsError={projectsError}
        githubProjects={githubProjects}
        githubProfile={GITHUB_PROFILE}
      />

      <CommunitySection socials={socialAccounts} events={events} />

      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
