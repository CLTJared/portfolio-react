import { Link } from 'react-router-dom';

export default function Project({ project, text, img, url, repo}) {
    return (
      <div className="card">
      <img src={img} className="card-img-top" alt={project} />
      <div className="card-body">
        <h5 className="card-title text-info">{project}</h5>
        <small className="card-text">{text}</small>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          <Link className="btn btn-info" target="_blank" to={url}>Demo</Link>&nbsp;&nbsp;
          <Link className="btn btn-info" target="_blank"  to={repo}>Repository</Link></small>
      </div>
    </div>
    );
  }