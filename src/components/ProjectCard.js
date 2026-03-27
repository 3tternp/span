export const ProjectCard = ({ title, description, imgUrl, tags }) => {
  return (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        {tags && tags.length > 0 && (
          <div className="proj-tags">
            {tags.map((tag, i) => (
              <span key={i} className="proj-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
