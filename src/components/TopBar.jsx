'use client'

function TopBar() {
  return (
    <header className="topbar">
      <p className="brand">CHATHURA.site</p>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#community">Community</a>
        <a href="#contact" className="cta-btn">Contact Me</a>
      </nav>
    </header>
  )
}

export default TopBar
