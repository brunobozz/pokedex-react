import "./PokemonTable.scss";
import CircleType from "../CircleType/CircleType";
import { Link } from "react-router-dom";

export default function PokemonTable(props) {
  return (
    <div className="list-group list-group-flush bg-primary">
      {props.pokeList.map((item) => (
        <Link
          // key={item.pokemon_v2_pokemon.id}
          className="list-group-item fw-bold d-flex justify-content-between"
          to={"/pokemon/" + item.id}
        >
          <span className="text-capitalize">
            {item.id} - {item.name}
          </span>
          <div className="d-flex">
            {item.pokemon_v2_pokemontypes.map((type) => (
              <CircleType type={type.pokemon_v2_type.name}></CircleType>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
