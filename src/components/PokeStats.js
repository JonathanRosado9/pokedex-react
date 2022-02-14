import React from "react";
import { Grid, Typography } from "@mui/material";

import StatBar from "./StatBar";
const PokeStats = ({ stats }) => {
  let total = 0;
  let types = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"];
  let types_color = ["#FF0000", "#F08030", "#F8D030", "#6890F0", "#78C850", "#F85888"];
  for (let stat of stats) {
    total += stat.base_stat;
  }
  return (
    <Grid container>
      <Typography
        variant="h5"
        sx={{ marginBottom: "15px", textAlign: "center" }}
      >
        Stats
      </Typography>
      {types.map((type, i) => (
        <Grid
          key={`stat-${type}`}
          sx={{ display: "flex", justifyContent: "space-around", padding: "5px" }}
          container
        >
          <Grid xs={4} item>
            <Typography>{type}</Typography>
          </Grid>
          <Grid xs={4} item>
            <Typography>{i === 6 ? total : stats[i].base_stat}</Typography>
          </Grid>
          <Grid xs={4} item>
            <StatBar total={i === 6} number={i === 6 ? total : stats[i].base_stat} color={types_color[i]}/>
          </Grid>
        </Grid>
      ))}
      
    </Grid>
  );
};

export default PokeStats;
