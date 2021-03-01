import React, { useState } from "react";
import Nav from "./components/Nav/index";
import About from "./components/About/index";
// import Contact from "./components/Contact/index";
// import Gallery from "./components/Gallery/index";
import Portfolio from "./components/Portfolio";

function App() {
  const [categories] = useState([
    {
      name: "about",
    },
    { name: "portfolio" },
    { name: "resume" },
  ]);

  const [selected, setSelected] = useState(categories[0]);

  const setSelected = (category) => {
    setSelected(category);
  };

  return (
    <div>
      <header>
        <Nav
          categories={categories}
          selected={selected}
          setSelected={setSelected}
        ></Nav>
        <main>
          {selected === "about" ? <About /> : null}
          {selected === "portfolio" ? <Portfolio /> : null}
          {/* {selected === "resume" ? <Resume /> : null} */}
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
