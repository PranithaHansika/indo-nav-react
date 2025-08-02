import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PathFinder from "./pages/PathFinder";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/floor1" element={<PathFinder />} />
      </Routes>
    </Router>
  );
}

export default App;
