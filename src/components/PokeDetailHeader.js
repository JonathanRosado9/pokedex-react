import React from "react";
import { Box } from "@mui/system";
import {Typography } from "@mui/material";
import PokeCircle from "./PokeCircle";
import { Link } from "react-router-dom";
export default function PokeDetailHeader({ id }) {
  let idnum = parseInt(id);
  let pokeurl_previous = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    idnum - 1
  }.png`;

  let pokeurl_next = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    idnum + 1
  }.png`;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "15px",
      }}
      container
    >
      {id > 1 ? (
        <Link to={`/pokedex-react/pokemon/${idnum - 1}`}>
          <Box
            sx={{ width: "75px", height: "75px", marginLeft: "25px" }}
            xs={2}
            item
          >
            <PokeCircle pokeurl={pokeurl_previous} pokeball mini />
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                marginTop: "5px",
                color: "#fff",
              }}
            >
              {"Previous"}
            </Typography>
          </Box>
        </Link>
      ) : (
        <>
          <Box
            sx={{ width: "75px", height: "75px", marginLeft: "25px" }}
            xs={2}
            item
          ></Box>
        </>
      )}

      {id < 898 ? (
        <Link to={`/pokedex-react/pokemon/${idnum + 1}`}>
          <Box
            sx={{ width: "75px", height: "75px", marginRight: "25px" }}
            xs={2}
            item
          >
            <PokeCircle pokeurl={pokeurl_next} pokeball mini />
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                marginTop: "5px",
                color: "#fff",
              }}
            >
              {"Next"}
            </Typography>
          </Box>
        </Link>
      ) : (
        <>
          <Box
            sx={{ width: "75px", height: "75px",  marginRight: "25px" }}
            xs={2}
            item
          ></Box>
        </>
      )}
    </Box>
  );
}
