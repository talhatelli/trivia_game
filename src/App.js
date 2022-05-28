import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Gameover from "./screens/Gameover";
import Question from "./screens/Question";
import Win from "./screens/Win";
import Settings from "./screens/Settings";
import Animation from "./screens/Animation";

export default function App() {
  return (
    <div className="App">
      <div className="Question">
        <Router>
          <div>
            <Routes>
              <Route path="/animation" element={<Animation />} />
              <Route path="/gameover" element={<Gameover />} />
              <Route path="/question" element={<Question />} />
              <Route path="/win" element={<Win />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Welcome />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}
