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

export default SocialAccountsBlock
