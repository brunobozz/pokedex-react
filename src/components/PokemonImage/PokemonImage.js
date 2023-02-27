import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonImage.scss";

export default function PokemonImage(props) {
  if (!Number.isInteger(props.pokeId) || props.pokeId < 0) {
    throw new Error("ID inválido");
  }
  const strId = String(props.pokeId);
  const paddedId = strId.padStart(3, "0");

  return (
    <div className="card-img">
      <div className="card-img-actions">
        <Link to={"/pokemon/" + (props.pokeId - 1)}>
          <i className="fa fa-chevron-left"></i>
        </Link>
        <Link to={"/pokemon/" + (props.pokeId + 1)}>
          <i className="fa fa-chevron-right"></i>
        </Link>
      </div>
      <img
        src={
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
          paddedId +
          ".png"
        }
        className={"card-img-top bg-type-" + props.pokeType}
        alt="Pokémon"
      />
    </div>
  );
}
