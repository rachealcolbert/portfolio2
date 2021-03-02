import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
// import Portfolio from "../Portfolio";

function Nav({ page, setPage }) {
  //   useEffect(() => {
  //     document.title = capitalizeFirstLetter(currentCategory.name);
  //   }, [currentCategory]);

  return (
    <section>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand font-weight-bold" href="/">
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
              <li>
                <a
                  data-testid="about"
                  href="#about"
                  onClick={() => setPage("About")}
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  data-testid="contact"
                  href="#contact"
                  onClick={() => setPage("Contact")}
                >
                  {" "}
                  Contact{" "}
                </a>
              </li>
              <li>
                <a
                  data-testid="portfolio"
                  href="#portfolio"
                  onClick={() => setPage("Portfolio")}
                >
                  {" "}
                  Portfolio{" "}
                </a>
              </li>
              <li>
                <a
                  data-testid="resume"
                  href="#resume"
                  onClick={() => setPage("Resume")}
                >
                  {" "}
                  Resume{" "}
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
