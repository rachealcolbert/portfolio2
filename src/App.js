import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Portfolio from "./components/Portfolio/index";

function App() {
  const [categories] = useState([
    {
      name: "About",
    },
    { name: "Portfolio" },
    { name: "resume" },
  ]);

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
        </main>
        <div></div>
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
