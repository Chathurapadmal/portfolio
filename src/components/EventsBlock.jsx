function EventsBlock({ events }) {
  return (
    <article className="community-block">
      <h3>Events</h3>
      <div className="timeline-list">
        {events.map((eventItem) => (
          <article key={eventItem.name} className="timeline-item">
            <p>{eventItem.name}</p>
            <span>{eventItem.description}</span>
          </article>
        ))}
      </div>
    </article>
  )
}

export default EventsBlock
