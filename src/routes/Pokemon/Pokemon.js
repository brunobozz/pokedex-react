import React from "react";
import "./Pokemon.scss";
import PokemonService from "../../services/pokeapi.service";
import PokemonHeader from "../../components/PokemonHeader/PokemonHeader";
import PokemonImage from "../../components/PokemonImage/PokemonImage";
import PokemonAttributes from "../../components/PokemonAttributes/PokemonAttributes";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const [pokemon, setPokemon] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    if (id !== null) {
      PokemonService.getData("pokemon/" + id).then((data) => {
        setPokemon(data);
      });
    }
  }, [id]);

  if (pokemon) {
    return renderPokemon(pokemon);
  } else {
    return (
      <div>
        <p>Carregando</p>
      </div>
    );
  }
}

function renderPokemon(pokemon) {
  let type = pokemon.types[0].type.name;
  return (
    <section className={"pokebg bg-type-" + type}>
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
