import React, { useEffect, useState } from "react";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getPokemonList } from "../../graphql/get-pokemons";
import "./PokemonList.scss";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      const results = await getPokemonList();
      setPokemonList(results.pokemon_v2_pokemon);
    }

    fetchPokemonList();
  }, []);

  if (pokemonList) {
    return (
      <section className="pokemon-list bg-primary">
        <SearchForm></SearchForm>
        <div className="list-group list-group-flush bg-primary">
          {pokemonList.map((item) => (
            <PokemonListItem key={item.id} pokemon={item}></PokemonListItem>
          ))}
        </div>
      </section>
    );
  }
}
