import "./PokemonListItem.scss";
import CircleType from "../CircleType/CircleType";
import { Link } from "react-router-dom";

export default function PokemonListItem(props) {
  return (
    <Link
      // key={item.id.toString()}
      className="list-group-item fw-bold d-flex justify-content-between"
      to={"/pokemon/" + props.pokemon.id}
    >
      <span className="text-capitalize">
        {props.pokemon.id} - {props.pokemon.name}
      </span>
      <div className="d-flex">
        {props.pokemon.pokemon_v2_pokemontypes.map((type, index) => (
          <CircleType key={index} type={type.pokemon_v2_type.name}></CircleType>
        ))}
      </div>
    </Link>
  );
}
