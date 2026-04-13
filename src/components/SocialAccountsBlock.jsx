function SocialAccountsBlock({ socials }) {
  return (
    <article className="community-block">
      <h3>Social Accounts</h3>
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
  )
}

export default SocialAccountsBlock
