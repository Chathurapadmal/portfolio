import EventsBlock from './EventsBlock'
import SocialAccountsBlock from './SocialAccountsBlock'

function CommunitySection({ socials, events }) {
  return (
    <section className="section" id="community">
      <div className="section-title-wrap">
        <p className="eyebrow">Beyond Projects</p>
        <h2>Socials and Events</h2>
      </div>

      <div className="community-layout">
        <SocialAccountsBlock socials={socials} />
        <EventsBlock events={events} />
      </div>
    </section>
  )
}

export default CommunitySection
