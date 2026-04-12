import { useEffect, useState } from 'react'
import './App.css'
import profileImage from './assets/me.webp'

const STORAGE_KEYS = {
  socials: 'portfolio-socials',
  photos: 'portfolio-photos',
  participatedEvents: 'portfolio-participated-events',
  organizedEvents: 'portfolio-organized-events',
}

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

const initialSocials = [
  { 
    platform: 'LinkedIn',
    handle: '@chathura',
    url: 'https://linkedin.com',
  },
  {
    platform: 'GitHub',
    handle: '@chathura-dev',
    url: 'https://github.com',
  },
]

const initialPhotos = [
  {
    title: 'Hackathon Sprint',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    caption: '48-hour product sprint with cross-functional teams.',
  },
  {
    title: 'Tech Meetup Stage',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    caption: 'Sharing lessons on front-end performance and UX motion.',
  },
]

const initialParticipatedEvents = [
  {
    name: 'Open Source Summit',
    role: 'Contributor + Demo Presenter',
    year: '2025',
  },
  {
    name: 'City Startup Weekend',
    role: 'Frontend Engineer Participant',
    year: '2024',
  },
]

const initialOrganizedEvents = [
  {
    name: 'React Motion Workshop',
    role: 'Organizer',
    year: '2025',
  },
  {
    name: 'Community Code Night',
    role: 'Co-Organizer',
    year: '2024',
  },
]

const loadStoredList = (key, fallback) => {
  const rawValue = localStorage.getItem(key)

  if (!rawValue) {
    return fallback
  }

  try {
    const parsedValue = JSON.parse(rawValue)
    return Array.isArray(parsedValue) ? parsedValue : fallback
  } catch {
    return fallback
  }
}

function App() {
  const particles = Array.from({ length: 16 })
  const [socials, setSocials] = useState(() =>
    loadStoredList(STORAGE_KEYS.socials, initialSocials),
  )
  const [photos, setPhotos] = useState(() =>
    loadStoredList(STORAGE_KEYS.photos, initialPhotos),
  )
  const [participatedEvents, setParticipatedEvents] = useState(() =>
    loadStoredList(STORAGE_KEYS.participatedEvents, initialParticipatedEvents),
  )
  const [organizedEvents, setOrganizedEvents] = useState(() =>
    loadStoredList(STORAGE_KEYS.organizedEvents, initialOrganizedEvents),
  )
  const [githubProjects, setGithubProjects] = useState([])
  const [isLoadingProjects, setIsLoadingProjects] = useState(false)
  const [projectsError, setProjectsError] = useState('')

  const [socialForm, setSocialForm] = useState({
    platform: '',
    handle: '',
    url: '',
  })
  const [photoForm, setPhotoForm] = useState({
    title: '',
    image: '',
    caption: '',
  })
  const [participatedForm, setParticipatedForm] = useState({
    name: '',
    role: '',
    year: '',
  })
  const [organizedForm, setOrganizedForm] = useState({
    name: '',
    role: '',
    year: '',
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.socials, JSON.stringify(socials))
  }, [socials])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.photos, JSON.stringify(photos))
  }, [photos])

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.participatedEvents,
      JSON.stringify(participatedEvents),
    )
  }, [participatedEvents])

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.organizedEvents,
      JSON.stringify(organizedEvents),
    )
  }, [organizedEvents])

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

  const addSocial = (event) => {
    event.preventDefault()
    if (!socialForm.platform.trim() || !socialForm.url.trim()) {
      return
    }

    setSocials((current) => [
      ...current,
      {
        platform: socialForm.platform.trim(),
        handle: socialForm.handle.trim() || 'No handle added',
        url: socialForm.url.trim(),
      },
    ])
    setSocialForm({ platform: '', handle: '', url: '' })
  }

  const addPhoto = (event) => {
    event.preventDefault()
    if (!photoForm.title.trim() || !photoForm.image.trim()) {
      return
    }

    setPhotos((current) => [
      ...current,
      {
        title: photoForm.title.trim(),
        image: photoForm.image.trim(),
        caption: photoForm.caption.trim() || 'Event memory added recently.',
      },
    ])
    setPhotoForm({ title: '', image: '', caption: '' })
  }

  const addParticipatedEvent = (event) => {
    event.preventDefault()
    if (!participatedForm.name.trim() || !participatedForm.year.trim()) {
      return
    }

    setParticipatedEvents((current) => [
      ...current,
      {
        name: participatedForm.name.trim(),
        role: participatedForm.role.trim() || 'Participant',
        year: participatedForm.year.trim(),
      },
    ])
    setParticipatedForm({ name: '', role: '', year: '' })
  }

  const addOrganizedEvent = (event) => {
    event.preventDefault()
    if (!organizedForm.name.trim() || !organizedForm.year.trim()) {
      return
    }

    setOrganizedEvents((current) => [
      ...current,
      {
        name: organizedForm.name.trim(),
        role: organizedForm.role.trim() || 'Organizer',
        year: organizedForm.year.trim(),
      },
    ])
    setOrganizedForm({ name: '', role: '', year: '' })
  }

  const githubStreakUrl = `https://streak-stats.demolab.com?user=${encodeURIComponent(
    GITHUB_PROFILE,
  )}&theme=transparent&hide_border=true&background=05080f00&ring=56ffd2&fire=00b6ff&currStreakLabel=d9e4ff&sideLabels=92a3c7&dates=92a3c7`
  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(
    GITHUB_PROFILE,
  )}&show_icons=true&hide_border=true&bg_color=00000000&title_color=56ffd2&text_color=d9e4ff&icon_color=00b6ff&ring_color=56ffd2`

  return (
    <div className="app-shell">
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="bg-glow bg-glow-a" aria-hidden="true"></div>
      <div className="bg-glow bg-glow-b" aria-hidden="true"></div>
      <div className="bg-scanline" aria-hidden="true"></div>

      <header className="topbar">
        <p className="brand">CHATHURA.DEV</p>
        <a className="cta" href="#contact">
          Let&apos;s Build
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="floating-particles" aria-hidden="true">
            {particles.map((_, index) => (
              <span key={index} style={{ '--i': index }}></span>
            ))}
          </div>

          <div className="hero-layout">
            <div className="hero-main-content">
              <p className="eyebrow">Software Engineering Undergraduate</p>
              <h1>
                HELLO <span>WORLD</span> !!!
              </h1>
               I'm Chathura, 
              <p className="hero-text">
               
                Iam apassionate Software Engineering undergraduate with hands-onexperienceinfull-stackdevelopment,workingwith technologies such as
                HTML,CSS,JavaScript,React,Node.js,PHP,Java,C#,andASP.NET.I have developed real-world applications including POS systems,eventregistration platforms,and
                management systems,gaining strong experience in both frontend and backend development,databasedesign,and MVC architecture.I enjoy building scalable,user-focusedsolutions,
                writing clean and efficient code,and continuouslylearning new technologies while contributing to collaborative projects and techcommunitie.
              </p>

              <div className="chip-row">
                {stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="terminal-card" aria-label="Developer profile">
                <div className="terminal-head">
                  <span></span>
                  <span></span>
                  <span></span>
                  <p>~/portfolio/system.log</p>
                </div>
                <div className="terminal-body">
                  <p>
                    <strong>$ whoami</strong>
                  </p>
                  <p>&gt; Chathura / React Developer</p>
                  <p>
                    <strong>$ status</strong>
                  </p>
                  <p>&gt; Building performant UIs with animations and soul.</p>
                  <p>
                    <strong>$ now</strong>
                  </p>
                  <p>&gt; Open to freelance, startup, and product work.</p>
                </div>
              </div>

              <article className="hero-github-stats" aria-label="GitHub profile stats">
                <div className="hero-github-head">
                  <p className="eyebrow">GitHub Stats</p>
                  <a
                    href={`https://github.com/${GITHUB_PROFILE}`}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    github.com/{GITHUB_PROFILE}
                  </a>
                </div>

                <div className="github-stats-grid">
                  <img
                    className="github-streak-image"
                    src={githubStreakUrl}
                    alt={`${GITHUB_PROFILE} GitHub contribution streak`}
                    loading="lazy"
                  />
                  <img
                    className="github-streak-image"
                    src={githubStatsUrl}
                    alt={`${GITHUB_PROFILE} GitHub profile stats`}
                    loading="lazy"
                  />
                </div>
              </article>
            </div>

            <aside className="hero-photo-pane" aria-label="Profile photo">
              <div className="hero-photo-orbit">
                <img className="hero-photo" src={profileImage} alt="Chathura profile" />
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title-wrap">
            <p className="eyebrow">Selected Build Logs</p>
            <h2>Projects</h2>
          </div>

          <div className="project-grid">
            {isLoadingProjects ? (
              <p className="project-status">Loading GitHub projects...</p>
            ) : null}

            {!isLoadingProjects && projectsError ? (
              <p className="project-status">{projectsError}</p>
            ) : null}

            {!isLoadingProjects && !projectsError && githubProjects.length === 0 ? (
              <p className="project-status">
                No public repositories found for {GITHUB_PROFILE}.
              </p>
            ) : null}

            {!isLoadingProjects && !projectsError
              ? githubProjects.map((project, index) => (
                  <article
                    key={project.id}
                    className="project-card"
                    style={{ '--delay': `${index * 140}ms` }}
                  >
                    <p className="project-index">0{index + 1}</p>
                    <h3>{project.name}</h3>
                    <p>
                      {project.description ||
                        'No description added yet for this repository.'}
                    </p>
                    <p className="project-tech">
                      {project.language || 'Code'} • ⭐ {project.stargazers_count}
                    </p>
                    <a
                      className="project-link"
                      href={project.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub
                    </a>
                  </article>
                ))
              : null}
          </div>
        </section>

        <section className="section" id="community">
          <div className="section-title-wrap">
            <p className="eyebrow">Beyond Projects</p>
            <h2>Socials, Photos, and Event Journey</h2>
          </div>

          <div className="community-layout">
            <article className="community-block">
              <h3>Social Accounts</h3>
              <form className="add-form" onSubmit={addSocial}>
                <input
                  type="text"
                  placeholder="Platform"
                  value={socialForm.platform}
                  onChange={(event) =>
                    setSocialForm((current) => ({
                      ...current,
                      platform: event.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Handle (optional)"
                  value={socialForm.handle}
                  onChange={(event) =>
                    setSocialForm((current) => ({
                      ...current,
                      handle: event.target.value,
                    }))
                  }
                />
                <input
                  type="url"
                  placeholder="https://your-link.com"
                  value={socialForm.url}
                  onChange={(event) =>
                    setSocialForm((current) => ({
                      ...current,
                      url: event.target.value,
                    }))
                  }
                />
                <button type="submit">Add Social</button>
              </form>

              <div className="social-list">
                {socials.map((item) => (
                  <a
                    key={`${item.platform}-${item.handle}`}
                    className="social-item"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>{item.platform}</p>
                    <span>{item.handle}</span>
                  </a>
                ))}
              </div>
            </article>

            <article className="community-block">
              <h3>Event Photos</h3>
              <form className="add-form" onSubmit={addPhoto}>
                <input
                  type="text"
                  placeholder="Photo title"
                  value={photoForm.title}
                  onChange={(event) =>
                    setPhotoForm((current) => ({
                      ...current,
                      title: event.target.value,
                    }))
                  }
                />
                <input
                  type="url"
                  placeholder="Image URL"
                  value={photoForm.image}
                  onChange={(event) =>
                    setPhotoForm((current) => ({
                      ...current,
                      image: event.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Caption (optional)"
                  value={photoForm.caption}
                  onChange={(event) =>
                    setPhotoForm((current) => ({
                      ...current,
                      caption: event.target.value,
                    }))
                  }
                />
                <button type="submit">Add Photo</button>
              </form>

              <div className="photo-grid">
                {photos.map((photo) => (
                  <figure key={photo.title} className="photo-card">
                    <img src={photo.image} alt={photo.title} loading="lazy" />
                    <figcaption>
                      <p>{photo.title}</p>
                      <span>{photo.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>

            <article className="community-block">
              <h3>Events I Participated In</h3>
              <form className="add-form" onSubmit={addParticipatedEvent}>
                <input
                  type="text"
                  placeholder="Event name"
                  value={participatedForm.name}
                  onChange={(event) =>
                    setParticipatedForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Role (optional)"
                  value={participatedForm.role}
                  onChange={(event) =>
                    setParticipatedForm((current) => ({
                      ...current,
                      role: event.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={participatedForm.year}
                  onChange={(event) =>
                    setParticipatedForm((current) => ({
                      ...current,
                      year: event.target.value,
                    }))
                  }
                />
                <button type="submit">Add Participation</button>
              </form>

              <div className="timeline-list">
                {participatedEvents.map((eventItem) => (
                  <article
                    key={`${eventItem.name}-${eventItem.year}`}
                    className="timeline-item"
                  >
                    <p>{eventItem.name}</p>
                    <span>{eventItem.role}</span>
                    <strong>{eventItem.year}</strong>
                  </article>
                ))}
              </div>
            </article>

            <article className="community-block">
              <h3>Events I Organized</h3>
              <form className="add-form" onSubmit={addOrganizedEvent}>
                <input
                  type="text"
                  placeholder="Event name"
                  value={organizedForm.name}
                  onChange={(event) =>
                    setOrganizedForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Role (optional)"
                  value={organizedForm.role}
                  onChange={(event) =>
                    setOrganizedForm((current) => ({
                      ...current,
                      role: event.target.value,
                    }))
                  }
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={organizedForm.year}
                  onChange={(event) =>
                    setOrganizedForm((current) => ({
                      ...current,
                      year: event.target.value,
                    }))
                  }
                />
                <button type="submit">Add Organized Event</button>
              </form>

              <div className="timeline-list">
                {organizedEvents.map((eventItem) => (
                  <article
                    key={`${eventItem.name}-${eventItem.year}`}
                    className="timeline-item"
                  >
                    <p>{eventItem.name}</p>
                    <span>{eventItem.role}</span>
                    <strong>{eventItem.year}</strong>
                  </article>
                ))}
              </div>
            </article>

          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-box">
            <p className="eyebrow">Ready to Collaborate?</p>
            <h2>Let&apos;s build your next big thing.</h2>
            <a href="mailto:hello@chathura.dev" className="contact-link">
              hello@chathura.dev
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Chathura. Built with React + Motion + Vibes.</p>
      </footer>
    </div>
  )
}

export default App
