import React from "react";

function Nav() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            racheal colbert
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Nav;
