import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setSelected,
    contactSelected,
    currentCategory,
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
              <li className={`mx-2 ${contactSelected && "navActive"}`}>
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
                      setSelected(category.name); //setSelected to string
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
