export default function Nav({ links }) {
    return (
    <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
        </ul>
    </div>
    );
  }
  