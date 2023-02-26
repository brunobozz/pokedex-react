import React from "react";
import "./Pokemon.scss";
import PokemonService from "../../services/pokeapi.service";
import PokemonHeader from "../../components/PokemonHeader/PokemonHeader";
import PokemonImage from "../../components/PokemonImage/PokemonImage";
import PokemonAttributes from "../../components/PokemonAttributes/PokemonAttributes";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const [pokemon, setPokemon] = React.useState({});
  const { id } = useParams();
  var { type } = "";

  React.useEffect(() => {
    if (id !== null) {
      PokemonService.getData("pokemon/" + id).then((data) => {
        setPokemon(data);
        type = data.types[0].type.name;
      });
    }
  }, [id]);

  return (
    <section className="pokebg bg-light">
      <div className="card border-0">
        <PokemonHeader
          pokeId={pokemon.id}
          pokeName={pokemon.name}
          pokeType={type}
        ></PokemonHeader>
        <PokemonImage pokeId={pokemon.id} pokeType={type}></PokemonImage>
        <PokemonAttributes
          weight={pokemon.weight}
          height={pokemon.height}
          pokeType={type}
        ></PokemonAttributes>
      </div>
    </section>
  );
}
