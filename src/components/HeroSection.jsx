import profileImage from '../assets/me.webp'

function HeroSection({ stack, particles, githubProfile, githubStreakUrl, githubStatsUrl }) {
  return (
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
          I&apos;m Chathura,
          <p className="hero-text">
            Iam apassionate Software Engineering undergraduate with hands-onexperienceinfull-stackdevelopment,workingwith
            technologies such as HTML,CSS,JavaScript,React,Node.js,PHP,Java,C#,andASP.NET.I have developed real-world
            applications including POS systems,eventregistration platforms,and management systems,gaining strong
            experience in both frontend and backend development,databasedesign,and MVC architecture.I enjoy building
            scalable,user-focusedsolutions, writing clean and efficient code,and continuouslylearning new technologies
            while contributing to collaborative projects and techcommunitie.
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
                href={`https://github.com/${githubProfile}`}
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                github.com/{githubProfile}
              </a>
            </div>

            <div className="github-stats-grid">
              <img
                className="github-streak-image"
                src={githubStreakUrl}
                alt={`${githubProfile} GitHub contribution streak`}
                loading="lazy"
              />
              <img
                className="github-streak-image"
                src={githubStatsUrl}
                alt={`${githubProfile} GitHub profile stats`}
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
  )
}

export default HeroSection
