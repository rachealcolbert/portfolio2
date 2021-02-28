import "./App.css";
import Nav from "./components/Nav/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Portfolio from "./components/Portfolio/index";

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
        <p> hi </p>
      </header>
    </div>
  );
}

export default App;
