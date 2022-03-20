import logo from "./logo.svg";
import "./App.css";
import MyButton from "./component/MyButton";
import { Navbar, NavbarComp } from "./component/NavbarComp";
import Napbar from "./component/Napbar";
import { Jumbotron } from "./component/Jumbotron";
import "./style.css";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
// import Img1 from "./component/gaben.png";

function App() {
  // const navHeading = "Navigator Bar";
  // const navText = "sosmed";
  // const clicked = () => {
  //   return alert("Button di pencet");
  // };
  return (
    <div className="App">
      {/* <Napbar navText={navText} navHeading={navHeading} />
      <MyButton clicked={clicked} />
      <Navbar />
      <h1> React or React JS </h1>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div> */}
      {/* <button className="btn btn-primary"> Submit</button> */}
      <body id="home">
        <NavbarComp />
        <Jumbotron />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </body>
    </div>
  );
}

export default App;
