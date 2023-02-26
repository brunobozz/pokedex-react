import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonImage.scss";

function convertId(id) {
  if (!Number.isInteger(id) || id < 0) {
    throw new Error("ID inválido");
  }
  const strId = String(id);
  const paddedId = strId.padStart(3, "0");
  return paddedId;
}

export default function PokemonImage(props) {
  const [imgId, setImgId] = useState();
  const [imgType, setImgType] = useState();

  useEffect(() => {
    if (props.pokeId !== undefined) {
      setImgId(convertId(props.pokeId));
    }
  }, [props.pokeId]);

  useEffect(() => {
    if (props.pokeType !== undefined) {
      setImgType(props.pokeType);
    }
  }, [props.pokeType]);

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
          imgId +
          ".png"
        }
        className={`card-img-top ${imgType ? `bg-type-${imgType}` : "coco"}`}
        alt="Pokémon"
      />
    </div>
  );
}
