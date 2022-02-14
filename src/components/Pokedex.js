import React from "react";
import {useEffect, useCallback } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const Pokedex = ({ pokemon, setPokemon, offset, setOffset, initialOffset}) => {
  
  let fetchingData = false;

  const fetchData = useCallback(
    async (offset = "0") => {
      if (offset > 900) {
        return;
      }
      let pokedata = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offset}`
      );
      pokedata = await pokedata.json();
      let pokecache = {};
      for (let pokemon of pokedata.results) {
        //Get name and url from api
        let name = pokemon.name;
        let url = pokemon.url;

        //Split url and get id (next to last element)
        let url_arr = url.split("/");
        url_arr.pop();
        let id = url_arr.pop();
        if (id >= 898) {
          continue;
        }
        let pokeinfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        pokeinfo = await pokeinfo.json();
        let iconurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        let pokemon_arr = {
          id: id,
          name: name,
          url: url,
          iconurl: iconurl,
          types: pokeinfo.types,
        };

        if (!pokemon[id]) {
          pokecache[id] = pokemon_arr;
        }
      }

      if (Object.keys(pokecache).length > 0) {
        setPokemon((pokemon) => ({ ...pokemon, ...pokecache }));
      }
      fetchingData = false;
    },
    [setPokemon]
  );

  useEffect(() => {
    fetchData(offset);
  }, [fetchData, offset]);

  const handleScroll = (e) => {
    let scrollbuffer = 2500;
    if (
      window.innerHeight + window.scrollY + scrollbuffer >=
      document.body.offsetHeight
    ) {
      // you're at the bottom of the page
      if (!fetchingData) {
        fetchingData = true;
        setOffset((offset) => (offset >= 898 ? offset : offset + 30));
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      sx={{ minHeight: "100vh", backgroundColor: "#af2b2b", marginTop: "15px" }}
    >
      <Grid sx={{ padding: "15px" }} container spacing={2}>
        {Object.keys(pokemon).map((poke) => (
          <Grid key={pokemon[poke].id} item xs={12} sm={6} md={4} lg={3}>
            <Link to={`/pokemon/${pokemon[poke].id}`}>
              <PokeCard pokemon={pokemon[poke]} cursor="pointer" />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pokedex;
