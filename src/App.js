import React, { useState } from "react";
import Nav from "./components/Nav/index";
import About from "./components/About/index";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact/index";
// import Gallery from "./components/Gallery/index";

function App() {
  const [categories] = useState([{ name: "portfolio" }, { name: "resume" }]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
        <main>
          {!contactSelected ? (
            <>
              <About></About>
              <Portfolio></Portfolio>
            </>
          ) : (
            <Contact></Contact>
          )}
          <div></div>
        </main>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
      </header>
    </div>
  );
}

export default App;
