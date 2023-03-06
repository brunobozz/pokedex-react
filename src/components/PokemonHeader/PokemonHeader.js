import "./PokemonHeader.scss";
import { Link } from "react-router-dom";

export default function PokemonHeader(props) {
  return (
    <div
      className={
        "card-header d-flex justify-content-between p-3 align-items-center bg-type-" +
        props.pokeType
      }
    >
      <h5 className="card-header-title text-capitalize">
        {props.pokeId} - {props.pokeName}
      </h5>
      <Link to="/pokemon-list/">
        <button className="btn text-light">
          <i className="fa fa-search"></i>
        </button>
      </Link>
    </div>
  );
}
