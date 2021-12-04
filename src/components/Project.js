function Project({ imgURL, title, summary, description, tags }) {
  return (
    <div className="project">
      <img className="project-img" width="100px" src={imgURL}></img>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-summary">{summary}</p>
        <p className="project-description">{description}</p>
        <ul className="project-tags">
          {tags.map((tag, index) => {
            return <li key={`project-tag-${index}`}>{tag}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Project;
