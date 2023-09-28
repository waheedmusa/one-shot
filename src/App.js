import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { MovieInfo } from "./pages/MovieInfo";

function App() {
  return (
    <div className="App">
      <Routes basename={window.location.pathname || ""}>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<MovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
