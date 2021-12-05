import "./Content.css";

function Content({ id, title, children }) {
  return (
    <div className="grid" id={id}>
      <div className="content">
        <h2 className="content-title">{title}</h2>
        <div className="content-body">{children}</div>
      </div>
    </div>
  );
}

export default Content;
