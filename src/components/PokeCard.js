import { Box, Typography } from "@mui/material";
import React from "react";
import PokeCircle from "./PokeCircle";


const Pokecard = ({ pokemon, cursor="default" }) => {

  let paddedId = pokemon.id;
  if (paddedId < 10) {
    paddedId = "00" + paddedId;
  } else if (paddedId < 100) {
    paddedId = "0" + paddedId;
  }
  return (
    <Box id={pokemon.id}>
      <Box className="pokecard-outer" sx={{width: "275px", cursor: cursor}}>
        <Box>
        <Typography className="pokecard-name" sx={{opacity: "0.75", textAlign: "center", marginTop: "-10px", marginBottom: "10px"}}>
              #{paddedId}
            </Typography>
        </Box>
        <PokeCircle pokemon={pokemon} />
        <Box sx={{display: "flex"}}>
          <Box  sx={{width: "50%", marginTop: "20px", marginLeft: "15px", marginBottom: "-20px"}}>
            <Typography variant="caption" className="pokecard-types">
            {pokemon.types[0].type.name}{pokemon.types[1] ? "/" + pokemon.types[1].type.name : ""}
            </Typography>
            
          </Box>
          <Box sx={{width: "50%",  marginRight: "15px", marginTop: "15px", marginBottom: "-15px"}}>
            <Typography variant="h6" className="pokecard-name" sx={{textAlign: "right"}}>
              {pokemon.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Pokecard;
