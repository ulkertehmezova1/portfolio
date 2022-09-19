import Sidebar from "./Components/SideBar/Sidebar";
import Portfolio from "./Components/Portfolio";
import News from "./Components/News";
import './App.css'
import Home from "./Components/Home";
import {
  Route,
  Routes,
} from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Sidebar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/news" element={<News />} />
  {/* <Route path="/contact" element={<Contact />} /> */}
</Routes>
    </div>
  );
}

export default App;
