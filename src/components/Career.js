function Career({ title, tags, summary, description }) {
  return (
    <div className="career" key={title}>
      <img className="career-img" width="100px"></img>
      <div className="career-info">
        <h3 className="career-title">{title}</h3>
        <ul className="career-tags">
          {tags.map((tag, index) => {
            return <li key={index}>{tag}</li>;
          })}
        </ul>
        <p className="career-summary">{summary}</p>
        {description.map(({ title, body }, index) => {
          return (
            <div className="career-description" key={index}>
              <h4 className="career-description-title">{title}</h4>
              <p className="career-description-body">{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Career;