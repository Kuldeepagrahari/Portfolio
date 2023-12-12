import "./app.css";
import Home from "./components/navbar/home/home";
import Test from "./test"
import Parallax from "./components/navbar/parallax/parallax";
import Sidebar from "./components/navbar/sidebar/Sidebar";
import NAV from "./components/navbar/navbar";
const App = () => {
  return <div>
   <section id="Homepage"><NAV>
    </NAV><Home></Home></section>
  
    <section id="Services"><Parallax type="services"></Parallax></section>
    <section>Services</section>
    <section id="Portfolio"><Parallax type="portfolio"></Parallax></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  {/* <Test></Test>
  <Test></Test> */}
  </div>;
};

export default App;
