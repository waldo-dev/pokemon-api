import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./PokemonList.module.css";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
      .then(res => setPokemon(res.data.results))
      .catch( error => console.log(error));
  }, []);

  function runFetch(e) {
    e.preventDefault()
    let list = document.getElementById('list');
    pokemon.length > 0 && pokemon.forEach( (pokemon) =>{
      return list.innerHTML += `<li>${pokemon.name}</li>`
    })
  }

  return (
    <>
      <button className={styles.button} onClick={runFetch}>
        Fetch Pokemon
      </button>
      <ul className={styles.list} id="list">
      </ul>
    </>
  );
};

export default PokemonList;
