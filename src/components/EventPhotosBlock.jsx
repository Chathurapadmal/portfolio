function EventPhotosBlock({ photoForm, setPhotoForm, addPhoto, photos }) {
  return (
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
  )
}

export default EventPhotosBlock
