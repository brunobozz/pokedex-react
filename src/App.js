import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "./theme.scss";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./routes/Pokemon/Pokemon";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
