const profile = {
  intro:
    'I am a passionate Software Engineering undergraduate with hands-on experience in full-stack development',
  contact: [
    { label: 'Phone', value: '+94 769 929 298' },
    { label: 'Email', value: 'chathurapadmal3@gmail.com' },
    { label: 'Location', value: 'Near The School, Bothalegama, Bulathsinhala' },
    { label: 'LinkedIn', value: 'Chathura-Padmal' },
    { label: 'GitHub', value: 'ChathuraPadmal' },
  ],
  experience: [{ title: 'Worked with FOSS Community Technical Team', period: '2025 - 2026' }],
  activities: [
    { title: 'Senior Prefect, Sripalee College', period: '2022 - 2023' },
    { title: 'President, Photography Society, Sripalee College', period: '2022 - 2023' },
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
  return (
    <section className="section about" id="about">
      <div className="section-title-wrap">
        <p className="eyebrow">Identity Matrix</p>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <article className="about-card about-intro-card">
          <p className="about-card-label">System Summary</p>
          <p className="about-intro-text">{profile.intro}</p>
          <div className="about-contact-list">
            {profile.contact.map((item) => (
              <p key={item.label}>
                <span>{item.label}:</span> {item.value}
              </p>
            ))}
          </div>
        </article>

        <article className="about-card">
          <p className="about-card-label">Experience</p>
          <ul className="about-list">
            {profile.experience.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <span>{item.period}</span>
              </li>
            ))}
          </ul>

          <p className="about-card-label">Extra Curricular Activities</p>
          <ul className="about-list">
            {profile.activities.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <span>{item.period}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="about-card">
          <p className="about-card-label">Skills</p>
          <div className="about-skills">
            {profile.skills.map((skill) => (
              <div key={skill.name} className="about-skill-item">
                <p>{skill.name}</p>
                <div className="about-meter" role="img" aria-label={`${skill.name} level ${skill.level}%`}>
                  <span style={{ width: `${skill.level}%` }}></span>
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
            <p>
              <span>Language:</span> {profile.languages.join(' • ')}
            </p>
            <p>
              <span>Hobbies:</span> {profile.hobbies.join(' • ')}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutSection