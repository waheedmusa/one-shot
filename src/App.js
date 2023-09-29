import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { MovieInfo } from "./pages/MovieInfo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/results/:id" element={<MovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
