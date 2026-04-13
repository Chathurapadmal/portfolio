function TimelineBlock({ title, formData, setFormData, onSubmit, submitLabel, items }) {
  return (
    <article className="community-block">
      <h3>{title}</h3>
      <form className="add-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Event name"
          value={formData.name}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Role (optional)"
          value={formData.role}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              role: event.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Year"
          value={formData.year}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              year: event.target.value,
            }))
          }
        />
        <button type="submit">{submitLabel}</button>
      </form>

      <div className="timeline-list">
        {items.map((eventItem) => (
          <article key={`${eventItem.name}-${eventItem.year}`} className="timeline-item">
            <p>{eventItem.name}</p>
            <span>{eventItem.role}</span>
            <strong>{eventItem.year}</strong>
          </article>
        ))}
      </div>
    </article>
  )
}

export default TimelineBlock
