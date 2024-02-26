import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/home";
import Guitar from "./pages/guitar";
import Drum from "./pages/drum";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guitar" element={<Guitar />} />
          <Route path="/drum" element={<Drum />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;