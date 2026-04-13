import { useEffect, useState } from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
import BackgroundDecor from './components/BackgroundDecor'
import CommunitySection from './components/CommunitySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import TopBar from './components/TopBar'

const GITHUB_PROFILE = 'chathurapadmal'

const stack = [
  'React',
  'TypeScript',
  'Node.js',
  'Next.js',
  'Figma',
  'SQL',
  'C#',
  'JAVA',
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
  const particles = Array.from({ length: 16 })
  const [githubProjects, setGithubProjects] = useState([])
  const [isLoadingProjects, setIsLoadingProjects] = useState(false)
  const [projectsError, setProjectsError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const fetchGithubProjects = async () => {
      setIsLoadingProjects(true)
      setProjectsError('')

      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(
            GITHUB_PROFILE,
          )}/repos?sort=updated&per_page=6`,
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error('Failed to load projects from GitHub.')
        }

        const repositories = await response.json()

        if (!Array.isArray(repositories)) {
          throw new Error('Unexpected response from GitHub.')
        }

        setGithubProjects(repositories)
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }

        setGithubProjects([])
        setProjectsError('Could not load projects. Check your username and try again.')
      } finally {
        setIsLoadingProjects(false)
      }
    }

    fetchGithubProjects()

    return () => controller.abort()
  }, [])

  const githubStreakUrl = `https://streak-stats.demolab.com?user=${encodeURIComponent(
    GITHUB_PROFILE,
  )}&theme=transparent&hide_border=true&background=05080f00&ring=56ffd2&fire=00b6ff&currStreakLabel=d9e4ff&sideLabels=92a3c7&dates=92a3c7`
  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(
    GITHUB_PROFILE,
  )}&show_icons=true&hide_border=true&bg_color=00000000&title_color=56ffd2&text_color=d9e4ff&icon_color=00b6ff&ring_color=56ffd2`

  return (
    <div className="app-shell">
      <BackgroundDecor />
      <TopBar />

      <main>
        <HeroSection
          stack={stack}
          particles={particles}
          githubProfile={GITHUB_PROFILE}
          githubStreakUrl={githubStreakUrl}
          githubStatsUrl={githubStatsUrl}
        />
        <AboutSection />
        <ProjectsSection
          isLoadingProjects={isLoadingProjects}
          projectsError={projectsError}
          githubProjects={githubProjects}
          githubProfile={GITHUB_PROFILE}
        />
        <CommunitySection
          socials={socialAccounts}
          events={events}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
