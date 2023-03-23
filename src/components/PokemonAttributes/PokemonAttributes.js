import "./PokemonAttributes.scss";
import CircleType from "../CircleType/CircleType";

export default function PokemonAttributes(props) {
  return (
    <ul className={"list-group list-group-flush bg-type-" + props.pokeType}>
      <li className="list-group-item d-flex justify-content-between">
        <span className="fw-bold">Type</span>
        <div className="d-flex">
          {props.pokemon.pokemon_v2_pokemontypes.map((type, index) => (
            <div
              key={index}
              className={
                " d-flex align-items-center ms-2 ps-0 badge bg-type-" +
                type.pokemon_v2_type.name
              }
            >
              <CircleType
                key={index}
                type={type.pokemon_v2_type.name}
              ></CircleType>
              <span>{type.pokemon_v2_type.name}</span>
            </div>
          ))}
        </div>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span className="fw-bold">Weight</span>
        <span>{props.pokemon.weight} lbs.</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span className="fw-bold">Height</span>
        <span>{props.pokemon.height} f.</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span className="fw-bold">Base Experience</span>
        <span>{props.pokemon.base_experience}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span className="fw-bold">Abilities</span>
        <ul>
          {props.pokemon.pokemon_v2_pokemonabilities.map((ability, index) => (
            <li key={index}>{ability.pokemon_v2_ability.name}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
