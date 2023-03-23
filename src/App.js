import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "./theme.scss";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Pokemon from "./routes/Pokemon/Pokemon";
import PokemonList from "./routes/PokemonList/PokemonList";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" render={() => <Redirect to="/pokemon/1" />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/pokemon-list" element={<PokemonList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
