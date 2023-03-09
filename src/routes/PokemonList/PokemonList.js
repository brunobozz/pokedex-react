import React, { useEffect, useState } from "react";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getPokemonList } from "../../graphql/GetPokemonList";
import "./PokemonList.scss";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    async function fetchPokemonList() {
      const results = await getPokemonList();
      setPokemonList(results.pokemon_v2_pokemon);
    }

    fetchPokemonList();
  }, []);

  const pokeSearch = (value) => {
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      setSearchValue(value);
    }, 2000);
    setTimeoutId(newTimeoutId);
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (pokemonList) {
    return (
      <section className="pokemon-list bg-primary">
        <SearchForm onSearch={pokeSearch} />
        <div className="list-group list-group-flush bg-primary">
          {filteredPokemonList.map((item) => (
            <PokemonListItem key={item.id} pokemon={item}></PokemonListItem>
          ))}
        </div>
      </section>
    );
  }
}
