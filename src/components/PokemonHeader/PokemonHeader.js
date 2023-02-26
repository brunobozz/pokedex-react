import "./PokemonHeader.scss";

export default function PokemonHeader(props) {
  return (
    <div className="card-header d-flex justify-content-between p-3 align-items-center bg-light">
      <h5 className="card-header-title text-capitalize">
        {props.pokeId} - {props.pokeName}
      </h5>
      <button className="btn text-light">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
