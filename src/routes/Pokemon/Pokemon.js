import React, { useEffect, useState } from "react";
import "./Pokemon.scss";
import PokemonHeader from "../../components/PokemonHeader/PokemonHeader";
import PokemonImage from "../../components/PokemonImage/PokemonImage";
import PokemonAttributes from "../../components/PokemonAttributes/PokemonAttributes";
import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../../graphql/GetPokemonInfo";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  // Define o valor padrão do parâmetro 'id' como '1' caso ele não seja fornecido na URL
  const pokemonId = id || "1";

  useEffect(() => {
    fetchPokemonInfo();
  }, [pokemonId]);

  async function fetchPokemonInfo() {
    const results = await getPokemonInfo(pokemonId);
    setPokemon(results);
  }

  if (pokemon) {
    let type = pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
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
            pokemon={pokemon}
            pokeType={type}
          ></PokemonAttributes>
        </div>
      </section>
    );
  }
}
