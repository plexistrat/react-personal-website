import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

function App() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  function downloadCv() {
    const link = document.createElement("a");
    link.href = "./CV.pdf";
    link.download = "CV.pdf";
    link.click();
  }

  return (
    <div>
      <Navbar scrollTo={scrollTo} />
      <div className="App">
        <div className="hero">
          <div className="heroPhoto">
            <img src="./mainPhoto.jpg" alt="" />
          </div>

          <div className="heroText">
            <h2>I'm </h2>
            <h1>Sakis Staikos</h1>
            <h3>a Guitar/Music tutor </h3>
            <h3>and Frontend developer</h3>
            <button onClick={downloadCv}>Download CV</button>
          </div>
        </div>
      </div>
      <About scrollTo={scrollTo} />
      <Project scrollTo={scrollTo} />
      <Contact scrollTo={scrollTo} />

      <Footer />
    </div>
  );
}

export default App;
