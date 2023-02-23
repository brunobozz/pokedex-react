import PokemonService from "../../services/pokeapi.service";
import PokemonHeader from "./PokemonHeader";
import React from "react";

export default function Pokemon(props) {
  const [pokemon, setPokemon] = React.useState({});

  React.useEffect(() => {
    PokemonService.getData("pokemon/" + props.id)
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h2>novo</h2>
      <PokemonHeader name={pokemon.name}></PokemonHeader>
    </div>
  );
}
