import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
