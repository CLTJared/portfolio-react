export default function Nav({ links }) {
    return (
      <nav class="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">JAE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              {links.map((link) => <li className="nav-item">{link}</li>)}
            </ul>
            <ul className="navbar-nav ms-md-auto">
              <li class="nav-item">
                  <a target="_blank" rel="noopener" class="nav-link" href="https://github.com/cltjared">
                      <i class="bi bi-github"></i>
                      <span class="d-md-none ms-2">GitHub</span></a>
              </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
  