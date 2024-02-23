export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">JAE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              {links.map((link, index) => <li key={index} className="nav-item">{link}</li>)}
            </ul>
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                  <a target="_blank" rel="noopener" className="nav-link" href="https://github.com/cltjared">
                      <i className="bi bi-github"></i>
                      <span className="d-md-none ms-2">GitHub</span>
                  </a>
              </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
  