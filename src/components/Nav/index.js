import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import Portfolio from "../Portfolio";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

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
                  onClick={() => setContactSelected(false)}
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <span onClick={() => setContactSelected(true)}>Contact</span>
              </li>
              {categories.map((category) => (
                <li
                  className={`mx-1 ${
                    currentCategory.name === category.name &&
                    !contactSelected &&
                    "navActive"
                  }`}
                  key={category.name}
                >
                  <span
                    onClick={() => {
                      setCurrentCategory(category);
                      setContactSelected(false);
                    }}
                  >
                    {capitalizeFirstLetter(category.name)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Nav;
