import React from "react";
import { Box} from "@mui/system";
import {Typography } from "@mui/material";
import PokeCircle from "./PokeCircle";
import { Link } from "react-router-dom";

export default function PokeEvolution({ evolutionChain }) {
  let evolutionImages = [];
  let evolution = evolutionChain.chain;

  do {
    let poke_evo = { name: evolution.species.name };
    let url = evolution.species.url;
    let url_arr = url.split("/");
    url_arr.pop();
    let id = url_arr.pop();
    evolutionImages.push(poke_evo);
    poke_evo.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    poke_evo.id = id;
    evolution = evolution.evolves_to[0];
  } while (evolution);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", padding: "25px" }}
      container
    >
      {evolutionImages.map((evo, i) => (
        <Link key={`evolution-${evo.id}`} to={`/pokemon/${evo.id}`}>
          <Box sx={{ width: "75px", height: "75px" }} xs={2} item>
            <PokeCircle pokeurl={evo.url} pokeball mini />
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                marginTop: "5px",
                color: "#fff"
              }}
            >
              {evo.name}
            </Typography>
          </Box>
        </Link>
      ))}
    </Box>
  );
}
