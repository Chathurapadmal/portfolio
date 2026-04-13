function ProjectsSection({
  isLoadingProjects,
  projectsError,
  githubProjects,
  githubProfile,
}) {
  return (
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
          <p className="project-status">No public repositories found for {githubProfile}.</p>
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
                  View on GitHub
                </a>
              </article>
            ))
          : null}
      </div>
    </section>
  )
}

export default ProjectsSection
