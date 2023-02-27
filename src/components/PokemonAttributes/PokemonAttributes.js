import "./PokemonAttributes.scss";

export default function PokemonAttributes(props) {
  return (
    <ul className={"list-group list-group-flush bg-type-" + props.pokeType}>
      {/* <li className="list-group-item">
        <span>
          <b>Type:</b>{" "}
        </span>
      </li>
      <li className="list-group-item">
        <span>
          <b>Abilities:</b>{" "}
        </span>
      </li> */}
      <li className="list-group-item">
        <span>
          <b>Height:</b> {props.height} f.
        </span>
      </li>
      <li className="list-group-item">
        <span>
          <b>Weight:</b> {props.weight} lbs.
        </span>
      </li>
    </ul>
  );
}
