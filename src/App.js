import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Welcome from "./screens/Welcome";
import Gameover from "./screens/Gameover";
import Question from "./screens/Question";
import Win from "./screens/Win";
import Settings from "./screens/Settings";

export default function App() {
  return (
    <div className="App">
      <div className="Question">
        <Router>
          <Routes>
            <Route path="/gameover" element={<Gameover />} />
            <Route path="/question" element={<Question />} />
            <Route path="/win" element={<Win />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Welcome />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
