import React, { useEffect, useState } from "react";
import PokemonTable from "../../components/PokemonTable/PokemonTable";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getPokemonList } from "../../graphql/get-pokemons";
import "./PokemonList.scss";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const results = await getPokemonList();
      setPokemonList(results.pokemon_v2_pokemon);
      console.log(results);
    }

    fetchPokemonList();
  }, []);

  if (pokemonList) {
    return (
      <section className="pokemon-list bg-primary">
        <SearchForm></SearchForm>
        <PokemonTable pokeList={pokemonList}></PokemonTable>;
      </section>
    );
  }
}
