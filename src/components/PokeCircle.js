import React from "react";
import { Box } from "@mui/material";

import TypeGradients from "../data/typeGradients";

function getGradient(types) {
  if (types.length > 1) {
    return `linear-gradient(0deg, ${
      TypeGradients[types[0].type.name]
    } 48%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 52%, ${
      TypeGradients[types[1].type.name]
    } 52%);`;
  } else {
    return `linear-gradient(0deg, ${
      TypeGradients[types[0].type.name]
    } 48%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 52%, ${
      TypeGradients[types[0].type.name]
    } 52%);`;
  }
}
export default function PokeCircle({ pokemon, pokeball, mini, pokeurl }) {
  let gradient;
  let url;
  if (pokeball && pokeurl) {
    gradient =
      "linear-gradient(0deg, rgba(250,250,250,1) 48%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 52%, rgba(204,56,56,1) 52%);";
    url = pokeurl;
  } else {
    gradient = getGradient(pokemon.types);
    url = pokemon.iconurl;
  }

  let style = {};
  if (mini) {
    style.width = "100%";
    style.height = "100%";
  }
  return (
    <Box
      className="pokecard"
      sx={{ borderRadius: "50%", background: gradient, ...style }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "15px",
          justifyContent: "center",
          flexGrow: "1",
          textAlign: "center",
        }}
      >
        <img className="pokecard-image" src={url} alt="" />
      </Box>
    </Box>
  );
}
